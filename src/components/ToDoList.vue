<script>
import EditTaskModal from '../modals/EditTaskModal.vue';

export default {
  components: {
 EditTaskModal
  },
  data() {
    return {

      tasks: JSON.parse(localStorage.getItem('tasks')) || [],
      newTask: '',
      editIndex: null,
      editTaskValue: '',
      windowWidth: window.innerWidth,
      currentTab: 'all', 
    }
  },
  computed: {
    noTasks() {
      return this.tasks.length === 0; 
    },
    isMobile() {
      return this.windowWidth <= 768;
    },
     // Filtered tasks based on the current tab
     filteredTasks() {
      if (this.currentTab === 'pending') {
        return this.pendingTasks;
      } else if (this.currentTab === 'done') {
        return this.doneTasks;
      }
      return this.tasks;
    },
    // Pending tasks
    pendingTasks() {
      return this.tasks.filter(task => !task.done);
    },
    // Completed tasks
    doneTasks() {
      return this.tasks.filter(task => task.done);
    }
  },
  methods:{
    submitTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ name: this.newTask, done: false });
        this.newTask = '';
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      } else {
        alert('Please enter a task');
      }
    },
    deleteTask(index){
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    editTask(index) {
      this.editIndex = index;
    },
    handleTaskUpdate(updatedTaskName, index) {
      const updatedTask = {
      ...this.tasks[index],
      name: updatedTaskName, 
      };
      this.tasks.splice(index, 1, updatedTask);
      localStorage.setItem('tasks', JSON.stringify(this.tasks)); 
      this.editIndex = null; 
    },
    cancelEdit() {
      this.editIndex = null;
    },
    updateLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  },
  mounted() {
    if (!localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-center">
    <div :class="isMobile ? 'w-100' : 'w-50'"> 
      <div class="card m-4">
        <div class="card-header pb-0">
          <h1 class="my-4">TO DO LIST</h1>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link" :class="{ active: currentTab === 'all' }" @click="currentTab = 'all'">
                All Tasks ({{ tasks.length }})
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: currentTab === 'pending' }" @click="currentTab = 'pending'">
                Pending ({{ pendingTasks.length }})
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: currentTab === 'done' }" @click="currentTab = 'done'">
                Done ({{ doneTasks.length }})
              </a>
            </li>
          </ul>
      
        </div>
        <div class="card-body">
          <div v-if="noTasks">You have no tasks</div>
          <div v-else class="d-flex justify-content-between align-items-center mb-3" v-for="(task, index) in filteredTasks" :key="index">
            <div class="d-flex align-items-center">
              <input class="form-check-input mt-0 me-3" 
              type="checkbox"
              v-model="task.done"
              @change="updateLocalStorage">
              <label :class="{ 'text-decoration-line-through': task.done }" class="form-check-label me-5">
                {{ task.name }}
              </label>            </div>
            <div class="d-flex">
              <button type="button" class="btn btn-sm btn-outline-dark round-btn mx-2" @click="editTask(index)">
                <i class="fa-solid fa-pencil"></i>
              </button>
              <button type="button" class="btn btn-sm btn-outline-dark round-btn" @click="deleteTask(index)">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <EditTaskModal
          v-if="editIndex !== null"
          :task="tasks[editIndex]"
          :index="editIndex"
          @update-task="handleTaskUpdate"
          @close-modal="editIndex = null"
        />

        <div class="card-footer py-5 d-flex align-items-end" :class="isMobile? 'row justify-content-end' : 'justify-content-between'">
          <div class="w-100" >
            <label for="new-task" id="new-task-label" class="h4 pb-1">Add new task</label>
            <input
                v-model="newTask"
                type="text"
                class="form-control m-0 px-2"
                placeholder="add new task here"
                @keyup.enter="submitTask"
              />
          </div>
          <div :class="isMobile ? 'd-flex justify-content-end mt-3' : 'ms-3'">
            <button type="button" class="btn btn-dark  px-4" @click="submitTask">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card-body{
    font-weight: 600;
    font-size: large;
    overflow-y: auto;
    height: 60vh; 
  }
  .round-btn{
    border-radius: 50%;
  }
  .card {
    max-height: 90vh;
  }
 .text-decoration-line-through {
    text-decoration: line-through;
  }

</style>
