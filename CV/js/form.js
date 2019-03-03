export class Form {

    constructor() {
        this.oForm = document.querySelector('#contact')
        this.oName = document.querySelector('#name')
        this.oMail = document.querySelector('#email')
        this.oPhone = document.querySelector('#phone')
        this.oMessage = document.querySelector('#message')
        this.oCondiciones = document.querySelector('#condiciones')
        this.oOtherKnow = document.querySelector('#selection-otro')
        this.oGroupOtherKnow = document.querySelector('#selection')


        this.oData = {
            name: '',
            email: '',
            phone: '',
            message: '',
            condiciones: '',
            opciones: '',
            seleccion: ''
        }

        this.oForm.addEventListener('submit', this.leerContact.bind(this)) 
        this.oGroupOtherKnow.addEventListener('change', this.watchSelect.bind(this))
        this.definirValidaciones()

    }

    leerContact(oE) {
        oE.preventDefault()
        //if (this.validar()) {
            this.guardarDatos()
        //}
    }

    guardarDatos() {
        this.oData = {
            name:  this.oName.value,
            email: this.oMail.value ,
            phone: this.oPhone.value,
            message: this.oMessage.value,
            seleccion: this.oGroupOtherKnow.options[this.oGroupOtherKnow.selectedIndex].value,
            condiciones: this.oCondiciones.value
        }

    console.dir(this.oData)
    }


    watchSelect() {
        if (this.oGroupOtherKnow.options[this.oGroupOtherKnow.selectedIndex].value === "otros") {
            this.oOtherKnow.parentElement.classList.remove('oculto')
            console.log( this.oOtherKnow.parentElement)
        } else {
            this.oOtherKnow.parentElement.classList.add('oculto')
        }
    }

    definirValidaciones() {

        //  Validación Nombre
        this.validaNombre()
        this.oName.addEventListener('input', this.validaNombre.bind(this) )

        // Validación para Mail
        this.validaMail()
        this.oMail.addEventListener('input', this.validaMail.bind(this) )

        // Validación para Phone
        this.validaPhone()
        this.oPhone.addEventListener('input', this.validaPhone.bind(this) )


        // Validación para la textarea
        this.validaTexto()
        this.oMessage.addEventListener('input', this.validaTexto.bind(this) )

        // Validación para la Acepta Condiciones
        this.validaCondicion()
        this.oCondiciones.addEventListener('input', this.validaCondicion.bind(this) )


    }

    validaNombre() {
        let msg = ''
        // resetea validaciones custom previas
        this.oName.setCustomValidity(msg)
        if(!this.oName.checkValidity()){
            msg = 'Es necesario indicar el nombre'
        } 
        this.oName.setCustomValidity(msg)
        console.log(msg)
    }

    validaMail() {
        let msg = ''
        // resetea validaciones custom previas
        this.oMail.setCustomValidity(msg)
        console.log("Validando Mail", this.oMail.value )
        if(!this.oMail.value){
            msg = 'Es necesario indicar un Email'
        } 
        this.oMail.setCustomValidity(msg)
        console.log(msg)
    }

    validaPhone() {
        let msg = ''
        // resetea validaciones custom previas
        this.oPhone.setCustomValidity(msg)
        console.log("Validando Phone", this.oPhone.value )
        if (!(/^\d{9}$/.test(this.oPhone.value))){
            msg = 'Teléfono debe contener 9 dígitos.'     
        }
        this.oPhone.setCustomValidity(msg)
        console.log(msg)
    }

    validaTexto() {
        let msg = ''
        // resetea validaciones custom previas
        this.oMessage.setCustomValidity(msg)
        console.log("Validando texto", this.oMessage.value )
        if (!this.oMessage.value) {
            msg = 'Es necesario incluir algún texto en el mensaje'
        } else if (this.oMessage.value.split(' ').length > 150) {
            msg = 'El texto no debe sobrepasar 50 palabras'
        } 
        this.oMessage.setCustomValidity(msg)
        console.log('Validando texto', msg)
        console.log(this.oMessage.value.length)
    }

    validaCondicion() {
        let msg = ''
        // resetea validaciones custom previas
        this.oCondiciones.setCustomValidity(msg)
        console.log("Validando Check Condiciones", this.oCondiciones.value )
        if (!this.oCondiciones.checked){
            msg = 'Debes aceptar las Condiciones para enviar los datos.'     
        }
        this.oCondiciones.setCustomValidity(msg)
        console.log(msg)
    }

    
}