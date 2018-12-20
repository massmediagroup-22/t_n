<template>
  <div class="list">
    <div class="container">
      <div class="row">
        <div 
          v-if="items.length" 
          class="col-md-12">
          <div
            v-for="item of items"
            :key="item.id"
            class="col-xl-3 col-lg-4 col-md-6">
            <list-item :data="item"/>
          </div>

        </div>
        <div
          v-else
          class="col-md-12">
          Empty
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from '~/components/index/ListItem'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    ListItem
  },
  computed: {
    ...mapState({
      items: 'vehicles'
    })
  }
}
</script>
