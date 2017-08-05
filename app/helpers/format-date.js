import Ember from 'ember';
const gap = 3;

export function formatDate([date] = []) {
  if (date) {
    const stringDate = String(date);
    const idx = stringDate.lastIndexOf(':');

    return stringDate.slice(0, idx + gap);
  }
}

export default Ember.Helper.helper(formatDate);
