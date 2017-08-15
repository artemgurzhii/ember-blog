import Ember from 'ember';

const {
  set,
  get,
  Component,
  getProperties
} = Ember;

export default Component.extend({
  classNames: ['filter-list', 'col-md-6', 'col-xs-12'],
  value: '',

  init() {
    this._super(...arguments);
    const filterAction = get(this, 'filter');

    filterAction('')
      .then(results => set(this, 'results', results));
  },

  actions: {
    handleFilterEntry() {
      console.log(12312);
      const {
        value: filerValue,
        filter: filterAction
      } = getProperties(this, 'value', 'filter');

      // filterAction(filerValue)
      //   .then(filteredResults => {
      //     set(this, 'results', filteredResults);
      //   });

      const res = [];

      filterAction(filerValue)
        .then(filteredResults => {
          filteredResults.forEach(result => {
            const titleChars = this._clean(get(result, 'title'));
            const filerValueChars = this._clean(filerValue);

            const isMatching = filerValueChars.every(char => titleChars.includes(char));

            if (isMatching) {
              res.push(result);
            }
          });
        });

      set(this, 'results', res);
    }
  },

  _clean(str) {
    return str
            .toLowerCase()
            .replace(/_-/, '')
            .split('')
            .sort();
  }
});
