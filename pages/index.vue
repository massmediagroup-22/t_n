<template>
  <div class="index page">
    <v-filter/>
    <v-sort/>
    <v-list/>
  </div>
</template>

<script>
import VList from '~/components/index/List'
import VFilter from '~/components/index/Filter'
import VSort from '~/components/index/Sort'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    VList,
    VFilter,
    VSort
  },
  data: () => ({}),
  computed: {},
  methods: {}
}
</script>
