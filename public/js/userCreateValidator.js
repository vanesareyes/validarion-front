const form = document.querySelector('form#userCreateForm');

const firstnameInput = document.querySelector('input[name=firstname]');

let errorImputs = {};

let formFields = Array.from(form.elements);
formFields.pop();

formFields.forEach(field => {
    field.addEventListener('blur', function() {
        if(validator.isEmpty(this.value, { ignore_whitespace:true })) {
            this.classList.add('is-invalid');
            this.nextElementSibling.innerHTML = 'Este campo es obligatorio.';
            errorImputs[this.name] = true;
        } else {
            this.classList.remove('is-invalid');
            this.nextElementSibling.innerHTML = '';
            delete errorImputs[this.name];
        }
    
        // console.log(`Estamos saliendo de: ${this.name}`);
        // console.log(`Su valor es: ${this.value}`);
        // console.log(`¿Está vacío?: ${validator.isEmpty(this.value, { ignore_whitespace:true })}`);
    })
}) 

form.addEventListener('submit', function(event) {
    if (Object.keys(errorImputs).length > 0) {
        event.preventDefault();
    }
});