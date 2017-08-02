const LEN = 100;

/**
 * @description Get excerpt of the string/description by slicing first ${LEN} characters
 * and then remove all dots from the end of string if they exist.
 * @summary Get excerpt of the string/description.
 *
 * @param {String} body - String from which to give excerpt.
 *
 * @return {String} - Excerpt of a string.
 */
export default function excerpt(body, len = LEN) {
  const sliced = body
                  .slice(0, len)
                  .replace(/\.+$/, '');

  return `${sliced} ...`;
}
