import BaseTable from './src/index.vue';

/* istanbul ignore next */
BaseTable.install = function(Vue) {
  Vue.component(BaseTable.name, BaseTable);
};

export default BaseTable;
