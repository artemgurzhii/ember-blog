import Ember from 'ember';
const gap = 3;

export function formatDate([date] = []) {
  if (date) {
    const to_s = String(date);
    const idx = to_s.lastIndexOf(':');

    return to_s.slice(0, idx + gap);
  }
}

export default Ember.Helper.helper(formatDate);
