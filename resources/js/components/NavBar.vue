<template>
  <nav v-show="isNavBarVisible" id="navbar-main" class="navbar is-fixed-top">
    <div class="navbar-brand">
      <a
        class="navbar-item is-hidden-desktop"
        @click.prevent="menuToggleMobile"
      >
        <b-icon :icon="menuToggleMobileIcon" />
      </a>
      <div class="navbar-item">
        <div class="control" style="font-size:27px; font-weight:bold;">
          Bookery
        </div>
      </div>
    </div>
    <div class="navbar-brand is-right">
      <a
        class="navbar-item navbar-item-menu-toggle is-hidden-desktop"
        @click.prevent="menuNavBarToggle"
      >
        <b-icon :icon="menuNavBarToggleIcon" custom-size="default" />
      </a>
    </div>

    <div
      class="navbar-menu fadeIn animated faster"
      :class="{ 'is-active': isMenuNavBarActive }"
    >
      <div class="navbar-end">
        <b-navbar-item tag="div">
          <b-button 
          class="button is-customcolor" 
          icon-left="book-open-page-variant"
          @click="AddbookModal()">
                Add Book
            </b-button>
        </b-navbar-item>
        <a
          class="navbar-item is-desktop-icon-only"
          title="Log out"
          @click="logout"
        >
          <b-icon icon="logout" custom-size="default" />
          <span>Logout</span>
        </a>
      </div>
    </div>
  </nav>
</template>
<style>
  button.is-customcolor:hover {
    background-color: #7957d5;
    color: white;
  }
</style>
<script>
import { mapState } from "vuex";
import NavBarMenu from "@/components/NavBarMenu";
import Uploader from "@/components/Uploader";

export default {
  name: "NavBar",
  components: {Uploader},
  data() {
    return {
      isMenuNavBarActive: false
    };
  },
  computed: {
    menuNavBarToggleIcon() {
      return this.isMenuNavBarActive ? "close" : "dots-vertical";
    },
    menuToggleMobileIcon() {
      return this.isAsideMobileExpanded ? "backburger" : "forwardburger";
    },
    ...mapState(["isNavBarVisible", "isAsideMobileExpanded", "userName"])
  },
  methods: {
    menuToggleMobile() {
      this.$store.commit("asideMobileStateToggle");
    },
    menuNavBarToggle() {
      this.isMenuNavBarActive = !this.isMenuNavBarActive;
    },
    logout() {
      document.getElementById("logout-form").submit();
    },
        AddbookModal() {
      this.$buefy.modal.open(
        {component: Uploader}
      );
    }
  }
};
</script>
