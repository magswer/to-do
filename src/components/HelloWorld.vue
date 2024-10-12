<script>
export default {
  data() {
    return {
      tasks: [
        'do dishes',
        'do laundry',
        'clean bathroom',
      ],
    }
  },
  computed: {

  },
  methods:{

  }
}
</script>

<template>
  <div class="d-flex justify-content-center my-5">
    <div class="card">
      <div class="card-header">
        <h1 class="my-3">Shit to do</h1>
      </div>
      <div class="card-body" v-for="(task, index) in tasks" :key="index">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <input class="form-check-input mt-0 me-2" type="checkbox">
            <label class="form-check-label me-5">{{ task }}</label>
          </div>
          <div class="d-flex">
            <button type="button" class="btn btn-sm btn-outline-success mx-2">
              <i class="fa-solid fa-pencil"></i>
            </button>
            <button type="button" class="btn btn-sm btn-outline-danger">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="card-footer d-flex justify-content-end">
        <button type="button" class="btn btn-lg btn-primary">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    width: 40%; 
  }
 .btn{
  border-radius: 50%;
 }

</style>
