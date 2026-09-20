import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import i18n from "./I18n.js";
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import '@primeicons/primeicons.css';
import 'primeflex/primeicons.css';
import {Avatar, Button, Card, Toolbar, Menu ,Drawer, Menubar, Popover, Tooltip, SelectButton} from "primevue";

const primeUiLicenseKey = import.meta.VITE_PRIME_UI_LICENSE_KEY;

createApp(App)
    .use(i18n)
    .use(PrimeVue, {ripple: true, theme: {preset: Material}, license: primeUiLicenseKey})
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-avatar', Avatar)
    .component('pv-drawer', Drawer)
    .component('pv-card', Card)
    .component('pv-tool-bar', Toolbar)
    .component('pv-menu', Menu)
    .component('pv-menu-bar', Menubar)
    .component('pv-popover', Popover)
    .directive('tooltip', Tooltip)
    .mount('#app')
