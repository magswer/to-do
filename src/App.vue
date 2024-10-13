<template>
  <div>
    <HelloWorld @openAddNewTaskModal="openAddNewTaskModal" />
    <AddNewTaskModal v-if="isModalVisible" @task-added="addTask" @close="closeModal" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AddNewTaskModal from './modals/AddNewTaskModal.vue'

export default {
  name: 'App',
  id: 'app',
  components: {
    HelloWorld,
    AddNewTaskModal
  },
  data() {
    return {
        isModalVisible: false
      };
    },
    methods: {
      openAddNewTaskModal() {
      this.$emit('openAddNewTaskModal'); 
    },
    closeModal() {
      this.isModalVisible = false; // Hide the modal
    },
      addTask(newTask) {
        this.tasks.push(newTask); // Add new task to tasks array
        this.closeModal(); // Close the modal after adding the task
      }
    }
}

</script>

