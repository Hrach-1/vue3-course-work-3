<template>
  <div class="card">
    <h2 class="card-title">
      {{ task.title }}
      <AppStatus :type="task.status"/>
    </h2>
    <p>
      <strong>
        <small>
          {{ new Date(task.date).toLocaleDateString() }}
        </small>
      </strong>
    </p>
    <router-link :to="{name: 'task', params: {id: task.id}}" v-slot="{navigate}">
      <button class="btn primary" @click="navigate">Посмотреть</button>
    </router-link>
  </div>
</template>

<script>
import AppStatus from "./AppStatus";

export default {
  name: "AppTaskCard",
  props: {
    task: {
      type: Object,
      required: true,
      validate(task) {
        return task.title && task.date && task.id && task.status;
      }
    }
  },

  components: {
    AppStatus
  }
}
</script>

<style scoped>

</style>