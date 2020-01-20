<template>
  <footer v-show="isFooterBarVisible" class="footer">
    <div class="container-fluid">
      <div class="level">
        <div class="level-left">
        
        </div>
        <div class="level-right">
          <div class="level-item">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FooterBar',
  computed: {

    ...mapState([
      'isFooterBarVisible'
    ])
  }
}
</script>
