<script>
export default {
  props: {
    task: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      taskValue: this.task,
    };
  },
  methods: {
    saveTask() {
      this.$emit('update-task', this.taskValue, this.index);
    },
    closeModal() {
      this.$emit('close-modal');
    }
  }
};
</script>

<template>
 <div class="modal fade show d-block" tabindex="-1" role="dialog" style="background-color: rgba(0, 0, 0, 0.5);">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body d-flex justify-content-between">
          <h5 class="modal-title">Edit Task</h5>
          <button type="button" class="btn-close" @click="closeModal">
          </button>
        </div>
        <div class="p-3">
          <input v-model="taskValue" class="form-control" />
        </div>
        <div class="p-3 d-flex justify-content-end">
          <button type="button" class="btn btn-secondary me-2" @click="closeModal">Cancel</button>
          <button type="button" class="btn btn-dark " @click="saveTask">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-dialog {
  max-width: 400px;
}
</style>
