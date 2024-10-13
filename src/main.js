import Vue from 'vue'; // Import Vue
import App from './App.vue'; // Import your main App component
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS

new Vue({
  render: h => h(App), // Render the App component
}).$mount('#app'); // Mount it to the #app element