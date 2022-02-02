<template>
  <span :class="['badge', status.class]">{{ status.name }}</span>
</template>

<script>
import {computed} from "vue";

export default {
  name: 'AppStatus',
  props: {
    type: {
      type: String,
      required: true,
      validate(val) {
        return ['active', 'done', 'cancelled', 'pending'].includes(val)
      }
    }
  },
  setup(props) {
    const statusesData = {
      active: {
        name: 'Активен',
        class: 'primary'
      },
      done: {
        name: 'Завершен',
        class: 'primary'
      },
      cancelled: {
        name: 'Отменен',
        class: 'danger'
      },
      pending: {
        name: 'Выполняется',
        class: 'warning'
      },
    }
    const status = computed(() => statusesData[props.type])

    return {status}
  }
}
</script>