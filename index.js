/**
 * JulCzar javascript framework
 * Made by Júlio César Barcelo Monteiro
 * Date: 12/19/2018
 * Last Edit: 04/11/2019
 */

const d = document;

const get = {
    Id(item) {
        return d.getElementById(item);
    },
    Classes(item) {
        return d.getElementsByClassName(item);
    },
    Query(item) {
        return d.querySelector(item);
    },
    Queries(item) {
        return d.querySelectorAll(item);
    },
    Date() {
        return new Date().getTime();
    },
    Session(id) {
        return JSON.parse(sessionStorage.getItem(id));
    },
    Local(id) {
        return JSON.parse(localStorage.getItem(id));
    },
    UrlData(array) {
        const urlParams = new URLSearchParams(location.search);
        let result = new Object()
        for (const [query] of array) {
            result[query] = urlParams.get(query)
        }
        return result
    }
}

const set = {
    Local(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    Session(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
}

const listen = (event, func, target = d) => {
    target.addEventListener(event, func);
}

const del = {
    fromLocal(key) {
        localStorage.removeItem(key)
    },
    fromSession(key) {
        sessionStorage.removeItem(key)
    },
    fromArray(arr, elem) {
        arr.pull(elem)
    },
    element(item) {
        item.remove()
    }
}

const truncate = (str, maxLength) => {
    if (str.length > maxLength) {
        str = `${str.substring(0, --maxLength)}...`
    }
    return str
}