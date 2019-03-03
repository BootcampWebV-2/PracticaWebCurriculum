import { Form } from './form.js'
import { Menu } from './menu.js'



export class Index {
    constructor() {
        // elementos del DOM
        this.oBotonOlderPost = document.querySelector('#olderPostsBtn')
        this.oName = document.querySelector('#name')
        this.oMenus = new Menu()
        this.oForm = new Form()
        console.log(this)
        this.defineEventListeners()
    }

    defineEventListeners() {
        this.oName.addEventListener('change', this.probarInput.bind(this))
        this.oName.addEventListener('input', this.probarInput.bind(this))
    }

    verOlderPosts(oE) {
        console.dir(oE)
    }

    probarInput(oE) {
        if(oE.type == "change") {
            console.log('change')
            console.dir(oE.target.value)
        } else if (oE.type == "input") {
            console.log('input')
            console.dir(oE.target.value)
        }
    }
}
