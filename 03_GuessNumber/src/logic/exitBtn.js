function exitFunc(state) {
    state.minValue = 1;
    state.maxValue = 100;
    state.attempts = 5;
    state.count = 0;
    state.answer = null;
    state.rand = null;
    state.isGenerate = true;
    inputDisabled('minValue', false);
    inputDisabled('maxValue', false);
    inputDisabled('attempts', false);
    inputDisabled('generate', false);
    inputDisabled('play', true);
    setHTMLValue('helloText', '');
    setHTMLValue('infoText', '');
}
