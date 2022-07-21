<template>
  <div class="Ex-card">
    <span>@{{ event.category }}</span>
    <h3>{{ event.organizer }}</h3>
  </div>
</template>
<script>
export default {
  name: 'ExCard',
  props: {
    event: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
.Ex-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.Ex-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
