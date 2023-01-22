//JS-Doc을 이용한 javascript 내부에서 직접 type 설정.

//@ts-check
/**
 * Initialize the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return console.log("hello");
}

/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}
