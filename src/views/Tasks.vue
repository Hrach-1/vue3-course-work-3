<template>
  <template v-if="tasks.length > 0">
    <h3 class="text-white">Всего активных задач: {{ activeTasksCount }}</h3>
    <AppTaskCard
        v-for="task in tasks"
        :task="task"
    />
  </template>
  <h1 v-else class="text-white center">Задач пока нет</h1>
</template>

<script>
import {useStore} from "vuex";
import AppTaskCard from "../components/AppTaskCard";

export default {
  components: {AppTaskCard},
  setup() {
    const store = useStore()
    const tasks = store.getters.tasks
    const activeTasksCount = store.getters.activeTasksCount

    return {
      tasks, activeTasksCount
    }
  }
}
</script>
