import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import router from './router/router';

const vuetify = createVuetify();

const application = createApp(App);

application.use(router); 
application.use(vuetify); 
application.mount('#app');
