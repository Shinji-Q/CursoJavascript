(function() {

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

        console.log(agreeInput);
        console.log(ageInput);

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
            console.log(age);
            console.log(typeof age);

        })

        agreementForm.onsubmit = (ev) => {
            ev.preventDefault();
        }
    }


    if(document.readyState === 'complete'){
        main();
    } else {
        document.addEventListener('DOMContentLoaded', main);
    }
})();
