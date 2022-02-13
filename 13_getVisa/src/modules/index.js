import '../styles/main.scss';
import { renderInit, showCandidates } from './showCandidates.js';
import { addListener, getNode, setHTMLValue, setValue, getContextFunc, getNodeSelectorAll } from './utils';
import { generateName, generateBalance, generateAge, generateDocuments, generateLevelEnglish } from './generateData';
import { addCandidate} from './addCandidates';
import { raceStart } from './race';

document.addEventListener('DOMContentLoaded', function () {
    init();
})

function init() {
    const data = [];
    addListener('addCandidate', 'click', addCandidate.bind(null, data));
    addListener('generateAll', 'click', generateAll.bind(null, data));
    addListener('clear', 'click', clearAll);
    addListener('init', 'click', showCandidates.bind(null, getNode('table'), data));
    addListener('race', 'click', raceStart.bind(null, getContextFunc('canvas'), data));
    generateValueInput(getNodeSelectorAll('data-btn'));
    checkInputs();
}

function generateAll(data) {
    setValue('name', generateName());
    setValue('balance', generateBalance());
    setValue('age', generateAge());
    setValue('documents', generateDocuments());
    setValue('englishLevel', generateLevelEnglish());
    getNode('addCandidate').disabled = false;
}

export function clearAll() {
    window.location.reload();
}

function generateValueInput(generateBtn) {
    // const generateBtn = document.querySelectorAll('[data-btn]');
    
    generateBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            switch (e.target.name) {
                case 'name': setValue('name', generateName());
                    break;
                case 'balance': setValue('balance', generateBalance());
                    break;
                case 'age': setValue('age', generateAge());
                    break;
                case 'documents': setValue('documents', generateDocuments());
                    break;
                case 'levelEnglish': setValue('englishLevel', generateLevelEnglish());
                    break;
                default: return;
            }
            checkInputs(getNodeSelectorAll('data-inpt'));
        })
    })
    
}

function checkInputs(inputs) {
    // const inputs = document.querySelectorAll('[data-inpt]');
    let count = 0;
    for (let inpt of inputs) {
        if (inpt.value !== '') {
            count++;
        }
    }
    if (count === 5) {
        getNode('addCandidate').disabled = false;
    }
}
