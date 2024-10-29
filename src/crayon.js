import * as components from './components';
import './crayon.scss';
import config, { setVue, setOptions } from './utils/config';

const Crayon = {
  test: {},
  install(Vue, options = {}) {
    if (Vue.prototype.$crayon) {
      return;
    }
    setVue(Vue);
    setOptions(options);
    Object.values(components).forEach(([key, def]) => Vue.component(key, def));
    Vue.prototype.$crayon = {
      config,
    };
  },
};

export * from './components';

export default Crayon;
