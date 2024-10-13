<script>
export default {
  data() {
    return {
      newTask: ''
    };
  },
  methods: {
    submitTask() {
      if (this.newTask.trim()) {
        this.$emit('add-task', this.newTask); // Emit event to add new task
        this.newTask = ''; // Reset the input field
      } else {
        alert('Please enter a task');
      }
    },
    closeModal() {
      this.$emit('close-modal'); // Emit close event to parent
    }
  }
}
</script>

<template>
  <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add new task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" @click="closeModal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <input
            v-model="newTask"
            type="text"
            class="form-control"
            id="newTask"
            placeholder="New Task"
          />
          <label for="newTask">New Task</label>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
</template>