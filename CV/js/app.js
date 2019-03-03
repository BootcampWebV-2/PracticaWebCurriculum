import { Main } from './main.js'

/*
Clase con la que inicializo todos los módulos de la aplicación
*/

(function() {
    window.addEventListener("load", () => { new Main() })
})()