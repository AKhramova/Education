let isEngineer = true;
document.addEventListener('DOMContentLoaded', function () {
    addListener('switch', 'click', showEngineering);
})

function showEngineering() {
    if (isEngineer) {
        getNode('switch').classList.add('rorate');
        getNode('engineer').classList.add('show');
        isEngineer = false;
    } else {
        getNode('switch').classList.remove('rorate');
        getNode('engineer').classList.remove('show');
        isEngineer = true;
    }
}
