import { renderInit, showCandidates } from "./showCandidates";
import { getNode, setValue } from "./utils";

export function addCandidate(data) {
    const newObj = {
        name: getNode('name').value,
        balance: getNode('balance').value,
        age: getNode('age').value,
        documents: getNode('documents').value,
        englishLevel: getNode('englishLevel').value
    }

    if (data.length < 5) {
        data.push(newObj);
        renderInit(data);
        setValue('name', '');
        setValue('balance', '');
        setValue('age', '');
        setValue('documents', '');
        setValue('englishLevel', '');
        getNode('addCandidate').disabled = true;
    }
    
    if (data.length === 5) {
        getNode('addCandidate').disabled = true;
        getNode('generateAll').disabled = true;
        const generateBtn = document.querySelectorAll('[data-btn]');
        generateBtn.forEach(btn => {
            btn.disabled = true;
        })
    }
}