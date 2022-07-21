<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div class="ex">
    <ExCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import axios from 'axios'
import ExCard from '@/components/ExCard.vue'

export default {
  name: 'EventListView',
  components: {
    EventCard,
    ExCard
  },
  data() {
    return {
      events: null
    }
  },
  create() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ex {
  display: flex;
  flex-direction: column;
  align-items: right;
  font-size: 20px;
  text-align: right;
  float: right;
}
</style>
