<template>
  <div class="card" v-if="task">
    <div class="flex justify-between items-center">
      <h2 class="grow-1 mr-6">{{task.title}}</h2>
      <button class="btn danger" @click="deleteTask">Удалить</button>
    </div>

    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{task.description}}</p>
    <div>
      <button class="btn" @click="setTaskStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="setTaskStatus('done')">Завершить</button>
      <button class="btn danger" @click="setTaskStatus('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{taskId}}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router"

export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const taskId = route.params.id
    store.commit('setCurrentTaskId', taskId)
    const task = store.getters.getCurrentTask

    const setTaskStatus = (status) => store.dispatch('changeTaskStatus', {task, status})
    const deleteTask = () => {
      store.dispatch('deleteTask', task.id)
      router.push({name: 'tasks'})
    }

    return {task, setTaskStatus, deleteTask, taskId}
  },

  components: {AppStatus}
}
</script>

<style scoped>

</style>