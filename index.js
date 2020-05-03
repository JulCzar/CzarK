/**
 * JulCzar javascript framework
 * Made by Júlio César Barcelo Monteiro
 * Date: 12/19/2018
 * Last Edit: 05/01/2019
 */

const d = document

const get = {
  /**
   * Find an Id in the DOM
   * @param {String} item Id you want to be located in the DOM
   */
  Id (item) {
    return d.getElementById(item)
  },
  /**
   * Find, in the DOM, all Classes that match
   * @param {String} item Class you want to locate in the DOM
   */
  Classes (item) {
    return d.getElementsByClassName(item)
  },
  /**
   * Find the first element that match with the query specified
   * @param {String} item Query you want to locate
   */
  Query (item) {
    return d.querySelector(item)
  },
  /**
   * Find all elements that match with the query specified
   * @param {String} item Query you want to locate
   */
  Queries (item) {
    return d.querySelectorAll(item)
  },
  /**
   * Gives you the current time in miliseconds
   */
  Date () {
    return new Date().getTime()
  },
  /**
   * Find in the SessionStorage the key requested and return the value parsed
   * @param {String} key
   * @returns {JSON}
   */
  Session (key) {
    return JSON.parse(sessionStorage.getItem(key))
  },
  /**
   * Find in the LocalStorage the key requested and return the value parsed
   * @param {String} key
   * @returns {JSON}
   */
  Local (key) {
    return JSON.parse(localStorage.getItem(key))
  },
  /**
   * Locate all the queries in the URL and return it as an Object.
   */
  UrlData () {
    const urlParams = new URLSearchParams(location.search)
    const result = {}
    for (const key of urlParams.keys()) {
      result[key] = urlParams.get(key)
    }
    return result
  }
}

const set = {
  /**
   * Save in the LocalStorage any value you want to
   * @param {String} key
   * @param {*} value
   */
  Local (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  /**
   * Save in the SessionStorage any value you want to
   * @param {String} key
   * @param {*} value
   */
  Session (key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  }
}

const del = {
  /**
   * Delete from LocalStorage a key
   * @param {String} key
   */
  fromLocal (key) {
    localStorage.removeItem(key)
  },
  /**
   * Delete from SessionStorage a key
   * @param {String} key
   */
  fromSession (key) {
    sessionStorage.removeItem(key)
  },
  /**
   * Remove from the DOM an element
   * @param {Element} elem
   */
  element (elem) {
    elem.remove()
  }
}

/**
 * Adds an event listener to a target in DOM
 * @param {String} event Event that will be listened
 * @param {Function} func Function that will be executed when the event is located
 * @param {Element} target Target. (default = document)
 */
const listen = (event, func, target = d) => {
  target.addEventListener(event, func)
}

/**
 * Compare the length of a String with a specified value and return it truncated if (str.length > maxLength),
 * @param {String} str string you want to analize
 * @param {Number} maxLength pos you want to cut the string if it is higher than
 * @param {*} sufix will be added at the end of the truncated string
 */
const truncate = (str, maxLength, sufix = '...') => {
  if (str.length > maxLength) {
    str = str.substring(0, --maxLength) + sufix
  }
  return str
}