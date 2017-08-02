/**
 * @description Format post title to be valid URL
 * Replace all ' ' characters in post title with '_'
 * And replace all characters except letters, digits, dashes and underscores with nothing.
 * @summary Format post title to be valid URL.
 *
 * @param {String} title - Post title which to transform.
 * @return {String} - Transformed title.
 */
export default function formatPostUrl(title) {
  return title.replace(/ /g, '_').replace(/[^a-zA-Z0-9-_]/g, '');
}
