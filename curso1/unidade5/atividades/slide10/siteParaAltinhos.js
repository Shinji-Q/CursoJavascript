
    function main() {
        console.log("carregado!");

        /** @type {HTMLFormElement} */
        let agreementForm = document.querySelector('form#agreement-card')
        /** @type {HTMLInputElement} */
        let agreeInput = document.querySelector('input[type="checkbox"][name="agree"]');
        /** @type {HTMLInputElement} */
        let ageInput = document.querySelector('input[type="number"][name="age"]');
        /** @type {HTMLButtonElement} */
        let proceedButton = document.querySelector('button[name="proceed"]');

        let agreementBlock = document.querySelector('div#agreement-block');

        agreeInput.addEventListener('change', ev => {
            /** @type {HTMLInputElement} */
            let input = ev.target;
            console.log(input.checked);
            proceedButton.disabled = !input.checked;
        })

        proceedButton.addEventListener('click', ev => {
            let button = ev.target;

            console.log('click!');
            let age = ageInput.value;

        })

        agreementForm.onsubmit = function(ev) {
            ev.preventDefault();

            let age = parseInt(this.age.value);

            if(!isNaN(age) && age >= 18) {
                agreementBlock.hidden = true;
            } else {
                window.location.replace('https://youtu.be/dQw4w9WgXcQ?si=KlKo0POEsnpvvday');

            }
        }
    }


    if(document.readyState === 'complete'){
        main();
    } else {
        document.addEventListener('DOMContentLoaded', main);
    }
