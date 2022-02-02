let isEngineer = true;
document.addEventListener('DOMContentLoaded', function () {
    addListener('switch', 'click', showEngineering.bind(null, getNode('switch'), getNode('engineer')));
})

function showEngineering(switchBtn, engineer) {
    if (isEngineer) {
        switchBtn.classList.add('rorate');
        engineer.classList.add('show');
        isEngineer = false;
    } else {
        switchBtn.classList.remove('rorate');
        engineer.classList.remove('show');
        isEngineer = true;
    }
}

module.exports = { showEngineering }