/**
 * JulCzar javascript framework
 * Made by Júlio César Barcelo Monteiro
 * Date: 12/19/2018
 * Last Edit: 01/09/2019
 */

const d = document; // caminho direto para o DOM;

//Objeto que contêm métodos muito utilizados de obter dados da página ou navegador
let get = {

    /**
     * Método que retorna um elemento da página com base em um  Id selecionado pelo usuario
     * em forma de String.
     * @param { <tag id="item"></tag> } item tag em forma de String, será utilizada no método
     *                                       para obtenção de dados no DOM.
     */
    Id(item) {
        return d.getElementById(item);
    },


    /**
     * Método que retorna um arrays de elementos da página que coincidirem com a classe
     * selecionada pelo usuario em forma de String.
     * @param { [<tag class="item"></tag>, ...] } item Classe em forma de String, será
     *                               utilizada no método para obtenção de dados no DOM.
     */
    Classes(item) {
        return d.getElementsByClassName(item);
    },


    /**
     * Método que retorna o primeiro elemento da página que coincidir com o query selecionado
     * pelo usuario em forma de String. Pode receber Id's e Classes, porém com os respectivos
     * prefixos de cada um.
     * @param {<item class="item" "id="item"></item>} item query em
     *                 forma de String, será utilizada no método para obtenção de dados no DOM.
     */
    Query(item) {
        return d.querySelector(item);
    },


    /**
     * Método que retorna um arrays de elementos da página que coincidirem com a query
     * selecionada pelo usuario em forma de String.  Pode receber Classes, porém com o 
     * prefixo.
     * @param {[<item class="item" id="item"></item>], ...} item query em forma de String,
     *                             será utilizada no método para obtenção de dados no DOM.
     */
    Queries(item) {
        return d.querySelectorAll(item);
    },


    /**
     * Método que retorna a data atual em milissegundos.
     */
    Date() {
        return new Date().getTime();
    },


    /**obtém de dados das API's de armazenamento imbutidas no
     * navegador: localStorage e sessionStorage.
     * 
     * @param { [...] ou {...} } id Identificador salvo na sessionStorage
     */
    Session(id) {
        return JSON.parse(sessionStorage.getItem(id));
    },


    /**obtém de dados das API's de armazenamento imbutidas no
     * navegador: localStorage e sessionStorage.
     * 
     * @param { [...] ou {...} } id identificador salvo na localStorage
     */
    Local(id) {
        return JSON.parse(localStorage.getItem(id));
    }
}
/**
 * Contêm métodos que salvam dados na local e na session Storages
 */
let set = {
    Local(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    Session(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
}

/**
 * 
 * @param {"input", "onkeyup"} event evento que será ouvido pela função
 * @param {() => {} } func função que sera executada quando o evento for ouvido na página
 */
function listen(event, func) {
    d.addEventListener(event, func);
}

let remove = {
    fromLocal(key) {
        localStorage.removeItem(key)
    },
    fromSession(key) {
        sessionStorage.removeItem(key)
    },
    fromArray(arr, elem) {
        arr.pull(elem)
    }
}