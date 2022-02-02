import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    currentTaskId: '',
    statuses: {
      active: 'active',
      done: 'done',
      cancelled: 'cancelled',
      pending: 'pending'
    }
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload)
    },
    setCurrentTaskId(state, id) {
      state.currentTaskId = id
    },
    setTaskStatus(state, {task, status}) {
      task.status = status
    },
    removeTask(state, taskId) {
      const index = state.tasks.findIndex((t) => t.id === +taskId)
      console.log('index : ', index)
      if (index > -1) {
        console.log('splce')
        console.log('tasks before : ', state.tasks)
        state.tasks.splice(index, 1)
        console.log('tasks after : ', state.tasks)
      }
    }
  },
  actions: {
    saveTask({commit, state}, payload) {
      commit('addTask', payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    changeTaskStatus({commit, state}, payload) {
      commit('setTaskStatus', payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteTask({commit, state}, taskId) {
      console.log('delete task')
      commit('removeTask', taskId)
      console.log('tasks : ', state.tasks)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
    statuses(state) {
      return state.statuses
    },
    activeTasksCount(state) {
      return state.tasks.filter(t => t.status === 'active').length
    },
    getCurrentTask(state) {
      return state.tasks.find(t => t.id === +state.currentTaskId) || null
    }
  }
})
