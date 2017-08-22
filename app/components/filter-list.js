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
      const {
        value: filerValue,
        filter: filterAction
      } = getProperties(this, 'value', 'filter');

      // filterAction(filerValue)
      //   .then(filteredResults => {
      //     set(this, 'results', filteredResults);
      //   });

      const res = [];
      const filerValueChars = this._clean(filerValue);

      filterAction(filerValue)
        .then(filteredResults => {
          filteredResults.forEach(result => {
            const title = get(result, 'title');
            const titleChars = this._clean(title);

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
            .replace(/_- /, '')
            .split('');
  }
});
