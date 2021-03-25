import store from './store';
import router from './router';
import 'lib-flexible/flexible';
import { app } from './bootstrap';
import './vantUI';

app.use(router);
app.use(store);

app.mount('#app');