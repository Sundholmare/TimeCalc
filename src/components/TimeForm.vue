<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <div class="input-group">
        <label for="expected-time">Specified time: </label>
        <input 
          class="time-input"
          name="expected-time" 
          type="time"
          @change="onChange"
          v-model="expectedTime"
         />
      </div>
      <button class="submit" type="submit">
        <Font-Awesome-Icon class="arrow" icon="arrow-right" />
      </button>
      <div class="input-group">
        <label for="actual-time">Actual time: </label>
        <input 
          class="time-input"
          name="actual-time" 
          type="time"
          :value="actualTime"
         />
      </div>
    </form>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'Time-form',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      actualTime: null,
      expectedTime: null
    }
  },
  methods: {
    onSubmit () {
      console.log(this.expectedTime)
      console.log(this.actualTime)
    },
    onChange(e) {
      this.expectedTime = e.target.value
    }
  }
}

</script>

<style lang="scss" scoped>

form {
  display: flex;
  justify-content: space-around;
}
.form-container {
  background: var(--dark-green);
  display: flex;
  flex-direction: column;
  width: 700px;
  color: var(--white);
  border-radius: 0.5rem;
  padding: 1rem;
}

.input-group {
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    font-size: 20px;
  }

  .time-input {
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: 10rem;
  }
}

.arrow {
  font-size: 30px;
  align-self: center;
  margin: 0 3rem;
}

.submit {
  border: none;
  background: none;
  color: var(--white);
  cursor: pointer;
}
</style>
