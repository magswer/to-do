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
      editId: null,
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
    filteredTasks() {
      if (this.currentTab === 'pending') {
        return this.pendingTasks;
      }else if (this.currentTab === 'done') {
        return this.doneTasks;
      }
      return this.tasks;
    },
    pendingTasks() {
      return this.tasks.filter(task => !task.done);
    },
    doneTasks() {
      return this.tasks.filter(task => task.done);
    },
  },
  methods: {
    submitTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ name: this.newTask, id: +new Date, done: false });
        console.log(this.tasks);
        this.newTask = '';
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      } else {
        alert('Please enter a task');
      }
    },
    getTaskIndexById(id) {
      return this.tasks.findIndex(task => task.id === id);
    },

    deleteTask(id) {
      const taskIndex = this.getTaskIndexById(id);
      if (taskIndex !== -1) {
        this.tasks.splice(taskIndex, 1);
        this.updateLocalStorage();
      }
    },

    editTask(id) {
      this.editId = id;
    },

    handleTaskUpdate(updatedTaskName, id) {
      const taskIndex = this.getTaskIndexById(id);
      if (taskIndex !== -1) {
        const updatedTask = {
          ...this.tasks[taskIndex],
          name: updatedTaskName,
        };
        this.tasks.splice(taskIndex, 1, updatedTask);
        this.updateLocalStorage();
        this.editId = null;
      }
    },
    cancelEdit() {
      this.editId = null;
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
          <div class="d-flex justify-content-between align-items-center mb-3" v-for="(task) in filteredTasks"
            :key="task.name + task.id">
            <div class="d-flex align-items-center">
              <input class="form-check-input mt-0 me-3" type="checkbox" v-model="task.done"
                @change="updateLocalStorage">
              <label :class="{ 'task-done': task.done }" class="form-check-label me-5">
                {{ task.name }}
              </label>
            </div>
            <div class="d-flex">
              <button type="button" class="btn btn-sm btn-outline-dark round-btn mx-2" @click="editTask(task.id)">
                <i class="fa-solid fa-pencil"></i>
              </button>
              <button type="button" class="btn btn-sm btn-outline-dark round-btn" @click="deleteTask(task.id)">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <EditTaskModal 
        v-if="editId !== null"  
        :task="tasks[getTaskIndexById(editId)]" 
        :id="editId" 
        @update-task="handleTaskUpdate"
        @close-modal="editId = null" />
        
        <div class="card-footer py-3 d-flex align-items-end"
          :class="isMobile ? 'row justify-content-end' : 'justify-content-between'">
          <div class="w-100">
            <label for="new-task" id="new-task-label" class="h5 pb-1">Add new task</label>
            <input v-model="newTask" type="text" class="form-control m-0 px-2" placeholder="add new task here"
              @keyup.enter="submitTask" />
          </div>
          <div :class="isMobile ? 'd-flex justify-content-end mt-3' : 'ms-3'">
            <button type="button" class="btn btn-dark px-4 text-button" @click="submitTask">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card-body {
  font-weight: 300;
  overflow-y: auto;
  height: 60vh;
}

.round-btn {
  border-radius: 50%;
  transition: all .8s ease;
}

.card {
  max-height: 90vh;
}

.task-done {
  text-decoration: line-through;
  color: #888;
}

.text-button,
.form-control {
  font-size: smaller;
  font-weight: 200;
}

.nav-link {
  color: #444;
  padding: 8px 12px;
  text-decoration: none;
  transition: color 0.5s ease;
  font-size: smaller;
  font-weight: 300;
  cursor: pointer;
}

.active {
  font-weight: 500;
}

.nav-link:hover {
  color: black;
}
</style>