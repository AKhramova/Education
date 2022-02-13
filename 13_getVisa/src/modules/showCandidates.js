import { setHTMLValue } from './utils';

export function showCandidates(node, data) {
    if (node.className === 'section-info__show-info show-info') {
        node.classList.add('show');
    } else {
        node.classList.remove('show');
    }
    renderInit(data);
}

export function renderInit(data) {
    let render = `<caption class="table__name">Added candidates</caption>
                <tr class="table__fields">
                    <th>Name</th>
                    <th>Balance</th>
                    <th>Age</th>
                    <th>Document</th>
                    <th>English Level</th>
                </tr>`;
    
    if (data.length >= 1) {
        for (let i = 0; i < data.length; i++){
            render +=  ` <tr>
                    <td>${data[i].name}</td>
                    <td>${data[i].balance}</td>
                    <td>${data[i].age}</td>
                    <td>${data[i].documents}</td>
                    <td>${data[i].englishLevel}</td>
                </tr>`
        }
    } else {
        render = `<p class="table__error">You have't added candidates.</p>`;
    }
    setHTMLValue('table-info', render);
}

