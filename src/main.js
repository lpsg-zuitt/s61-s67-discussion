import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import { createApp } from 'vue'
import App from './App.vue'

/*
	- Every Vue application starts by creating a new application instance with the createApp function
	- We then pass the App component into the createApp method.
	- The App component is a "root/parent component" that can contain other components as its children.
	- The mount() method is used to render/inject the root component in the selected element from the DOM by its id.
*/

createApp(App).mount('#app')
