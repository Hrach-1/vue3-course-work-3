<template>
  <form class="card" @submit.prevent="createTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model.trim="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model.trim="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>


<script>
import {computed, ref} from "vue";
import {useRouter} from "vue-router";
import {useStore} from 'vuex'

export default {
  setup() {
    const title = ref('')
    const date = ref(null)
    const description = ref('')
    const router = useRouter()
    const store = useStore()

    function createTask() {
      if (isValid.value) {
        const status = new Date(date.value) < new Date() ? 'cancelled' : 'active'

        store.dispatch('saveTask', {
          title: title.value,
          date: date.value,
          description: description.value,
          status,
          id: Date.now()
        })

        router.push({name: 'tasks'})
      }
    }

    const isValid = computed(() => title.value && date.value && description.value)

    return {
      title, date, description,
      createTask, isValid
    }
  }
}
</script>