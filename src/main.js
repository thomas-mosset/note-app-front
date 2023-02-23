import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const myCustomTheme = {
    dark: false,
    colors: {
      background: '#0f0e17',
      primary: '#fffffe',
      secondary: '#f25f4c',
      tertiary: '#e53170',
      highlight: '#ff8906',
      paragraph: '#a7a9be',
      button: '#ff8906',
      stroke: 'black',
      error: '#f25f4c',
    },
};

// For icons 
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'myCustomTheme',
        themes: {
          myCustomTheme,
        },
    },
});

createApp(App).use(store).use(router).use(vuetify).mount('#app')
