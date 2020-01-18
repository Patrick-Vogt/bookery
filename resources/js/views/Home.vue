<template>
  <div class="row">
    <section>
      <div class="container" style="margin-top: 25px;">
        <section>
          <b-table
            :data="result"
            ref="table"
            paginated
            :per-page="perPage"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
            bordered
            striped
          >
            <template slot-scope="props">
              <b-table-column field="coverpath" label="Cover" width="40">
                <b-button
                  class="is-customcolor"
                  icon-left="image-search-outline"
                  @click="coverModal(props.row.coverpath)"
                >
                </b-button>
              </b-table-column>

              <b-table-column
                field="author_name"
                class="customtable"
                label="Author"
                searchable
                sortable
              >
                {{ props.row.author_name }}
              </b-table-column>

              <b-table-column field="title" searchable label="Title" sortable>
                {{ props.row.title }}
              </b-table-column>

              <b-table-column label="Send">
                <span>
                  <b-button
                    class="is-customcolor"
                    icon-right="email-send-outline"
                    @click="sendbook(props.row.title, props.row.bookpath)"
                  >
                  </b-button>
                </span>
              </b-table-column>
              <b-table-column label="Delete">
                <span>
                  <b-button
                    class="is-danger"
                    icon-right="delete-forever"
                    @click="deletebook(props.row.id, props.row.bookpath, props.row.title)"
                  >
                  </b-button>
                </span>
              </b-table-column>
            </template>
          </b-table>
        </section>
      </div>
    </section>
  </div>
</template>

<style>
#navbar-main,
.navbar-link .is-arrowless {
  background-color: #7957d5;
  color: white;
}

@media screen and (min-width: 1024px) {
  nav.navbar .navbar-item {
    background-color: #7957d5;
    color: white;
  }
}
.button.is-customcolor {
  background-color: #7957d5;
  color: white;
}
nav.navbar .navbar-item.has-dropdown .navbar-link {
  background-color: #7957d5;
  color: white;
}
nav.navbar .is-desktop-icon-only .navbar-link {
  background-color: #7957d5;
  color: white;
}

.titletag {
  background-color: #7957d5;
  color: white;
  font-size: 17px;
}

.customtable {
  border-width: 1px;
  border-style: groove;
  border-color: #fffcfc61;
}

.mdi {
  font-size: 25px;
}

.pagination-link.is-current {
  background-color: #7957d5 !important;
}
</style>

<script>
import CardWidget from "@/components/CardWidget";
import CardComponent from "@/components/CardComponent";
import { Dialog } from "buefy";

export default {
  name: "home",
  components: {
    CardComponent,
    CardWidget,
    Dialog
  },
  data() {
    return {
      isPaginated: true,
      isPaginationSimple: true,
      paginationPosition: "bottom",
      defaultSortDirection: "asc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 20,
      isBordered: true,
      isStriped: true,
      isHoverable: true,
      result: []
    };
  },
  computed: {
  },
  created() {
    this.getData();
  },
  mounted() {},
  methods: {
    getData() {
      axios
        .get("/books/getrandombooks")
        .then(r => {
          this.isLoading = false;
          if (r.data && r.data.data) {
            if (r.data.data.length > this.perPage) {
              this.paginated = true;
            }
            this.result = r.data.data;
            return this.result;
          }
        })
        .catch(err => {
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger",
            queue: false
          });
        });
    },
    sendbook(title, path) {
      this.$buefy.dialog.confirm({
        message: 'Do you want to send "' + title + '" to your Reader?',
        onConfirm: () =>
          axios
            .post("/books/send", {
              bookpath: path
            })
            .then(r => {
              if (r.data && r.data.data) {
                this.result = r.data.data;
                this.$buefy.toast.open({
                  message: `Success: Book has been sent`,
                  type: "is-success",
                  queue: false
                });
              }
            })
            .catch(err => {
              this.$buefy.toast.open({
                message: `Error: ${err.message}`,
                type: "is-danger",
                queue: false
              });
            })
      });
    },

    deletebook(bookid, bookpath, title) {
      this.$buefy.dialog.confirm({
        message: 'Do you want to delete "' + title + '" from Bookery?',
        onConfirm: () =>
          axios
            .post("/books/delete", {
              bookid: bookid,
              bookpath: bookpath
            })
            .then(r => {
              if (r.data && r.data.data) {
                this.result = r.data.data;
                this.$buefy.toast.open({
                  message: `Success: Book has been deleted`,
                  type: "is-success",
                  queue: false
                });
              }
            })
            .catch(err => {
              this.$buefy.toast.open({
                message: `Error: ${err.message}`,
                type: "is-danger",
                queue: false
              });
            })
      });
    },

    coverModal(cover) {
      this.$buefy.modal.open(
        '<p class="image is-2by3"><img src="' + cover + '" image is-2by3"></p>'
      );
    }
  }
};
</script>
