import store from './store';
import router from './router';
import 'lib-flexible/flexible';
import { app } from './bootstrap';
import './vantUI';
// 全局过滤器
app.config.globalProperties.$filters = {
    prefix(url) {
        if (url && url.startsWith('http')) {
            return url;
        } else {
            url = `http://47.99.134.126:28019${url}`;
            return url;
        }
    }
};

app.use(router);
app.use(store);

app.mount('#app');