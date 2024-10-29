const config = {};

let VueInstance;

export const setOptions = options => { Object.assign(config, options); };

export const setVue = Vue => { VueInstance = Vue; };

export const getVue = () => VueInstance;

export default config;
