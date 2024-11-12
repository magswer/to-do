<template>
  <div class="app">
    <ToDoList/>
    <EditTaskModal v-if="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'
import EditTaskModal from './modals/EditTaskModal.vue'

export default {
  name: 'App',
  id: 'app',
  components: {
    ToDoList,
    EditTaskModal
  },
  data() {
    return {
        isModalVisible: false
      };
    },
    methods: {
      openEditTaskModal() {
        this.$emit('openEditTaskModal'); 
      },
      closeModal() {
        this.isModalVisible = false; 
      },
    }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  .app {
  font-family: 'Poppins';
  background-color: #faf6f1;
  height: 100vh;
  overflow: hidden;
}

</style>

