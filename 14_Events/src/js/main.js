const { addListener, getNode, getArrayNodes } = require('./utils')

document.addEventListener('DOMContentLoaded', function () {
    let isPause = false;
    const arrayPhotos = getArrayNodes('data-img');
    showPhoto(arrayPhotos, getNode('mainPhoto'));
    addListener('show', 'click', showSlider.bind(null, arrayPhotos, isPause));
    addListener('close', 'click', closeSlider.bind(null, getNode('block-slider')));
})

function showPhoto(arrayPhotos, mainPhoto) {
    mainPhoto.src = arrayPhotos[0].src;
    arrayPhotos.forEach(photo => {
        photo.addEventListener('click', () => {
            mainPhoto.src = photo.src;
        })
    })
}

function showSlider(arrayPhotos, isPause) {
    let i = 0, count = 0;
    openSlider(getNode('block-slider'));
    getNode('slider').src = arrayPhotos[i].src;
    getNode('pause').addEventListener('click', () => {
        count++;
        if (count % 2 !== 0) {
            isPause = true;
        } else {
            isPause = false;
        }
    })
    setInterval(() => {
        if (!isPause) {
            i++;
            getNode('slider').src = arrayPhotos[i].src;
        }
    }, 1500);
}

function openSlider(node) {
    node.classList.add('view');
}

function closeSlider(node) {
    node.classList.remove('view');
}

module.exports = { showPhoto, openSlider, closeSlider };