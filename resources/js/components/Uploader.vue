<template>
  <section>
    <b-field>
      <vue-dropzone
        ref="myVueDropzone"
        id="dropzone"
        :options="dropzoneOptions"
      ></vue-dropzone>
    </b-field>
  </section>
</template>

<style>

</style>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  data() {
    return {
      dropzoneOptions: {
        url: "/books/addbook",
        paramName: "book[]",
        createImageThumbnails: false,
        addRemoveLinks: false,
        acceptedFiles: ".epub",
        maxFilesize: 10,
        headers: {
          "X-CSRF-TOKEN": document.head.querySelector("[name=csrf-token]")
            .content
        }
      },
      
    };
  },
  components: {
    vueDropzone: vue2Dropzone
  },
  methods: {

  }

  
};
</script>
