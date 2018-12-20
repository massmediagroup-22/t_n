<template>
  <div class="list-item">
    <div class="list-item-img">
      <img 
        src="" 
        alt="img">
    </div>
    <div class="list-item-info">
      <div class="info-title">
        title
      </div>
      <div class="info-description">
        desc
      </div>
      <div class="info-price">
        price
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
