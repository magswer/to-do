<template>
  <div class="app w-sm-100 w-md-75 w-lg-75 w-xxl-50">
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
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

  .app {
  font-family: 'Cormorant Garamond', serif;
  background-color: #faf6f1;
  height: 100vh;
  overflow: hidden;
}

</style>

