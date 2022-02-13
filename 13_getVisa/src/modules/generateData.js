export function generateName() {
    const nameArray = ['Edwards', 'Hana', 'Tom', 'Jazmyn', 'Tobey', 'Vernon'];
    const index = Math.floor(Math.random() * (nameArray.length));;
    return nameArray[index];
}

export function generateBalance() {
    let random = 0;
    if (Math.random() > 0.4) {
        random = Math.floor(Math.random() * 10000);
    } else {
        random = Math.floor(Math.random() * (2000));
    }
    return random
}

export function generateAge() {
    let random = 0;
    if (Math.random() > 0.3) {
        random = Math.floor(Math.random() * (60 - 18 + 1) + 18);
    } else {
        random = Math.floor(Math.random() * (90 - 60 + 1) + 60);
    }
    return random
}

export function generateDocuments() {
    let random = 0;
    if (Math.random() > 0.2) {
        random = 3;
    } else {
        random = Math.floor(Math.random() * 2);
    }
    return random
}

export function generateLevelEnglish() {
    const levelEnglish = ['A1', 'A2', 'B1', 'B2', 'C1'];
    let index = 0;
    if (Math.random() <= 0.3) {
        index = Math.floor(Math.random() * (levelEnglish.length - 3) + 3);
    } else {
        index = Math.floor(Math.random() * 3);
    }
    return levelEnglish[index];
}
