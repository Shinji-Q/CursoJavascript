let nInput = document.querySelector('input#number');
nInput.value=3; // consistência com o conteúdo inicial
let submitNumber = document.querySelector('button#generate');
let table = document.querySelector('tbody#result'); // alterado table -> tbody
let tableInputForm = document.querySelector('form#tableInput');


tableInputForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let n = parseInt(nInput.value);

    table.innerHTML = '';

    for(let i = 1; i <= 10; i++) {
        /*
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
            td1.innerHTML = `${n} x ${i}`;

        let td2 = document.createElement('td');
            td2.innerHTML = n*i;


        table.appendChild(tr);

        tr.appendChild(td1);
        tr.appendChild(td2);
        */
        table.innerHTML += `
                    <tr>
                        <td>${n} x ${i}</td>
                        <td>${n*i}</td>
                    </tr>
        `
    }
})
