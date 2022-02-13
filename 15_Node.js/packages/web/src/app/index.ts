import './styles/styles.scss';
import { setResultUrls, addListener, getImageFromNode } from './utils';

document.addEventListener('DOMContentLoaded', function () {
  init();
})

function init() {
  addListener('imageForm', 'submit', formHandler);
}

function formHandler(event) {
  event.preventDefault();
  const image = getImageFromNode('imageInput');
  const fileName = image.name;
  const file = new File([image], fileName);
  const data = new FormData();
  data.append('file', file);

  fetch(`/${fileName}`, {
    method: 'POST',
    body: data,
  }).then((res) => {
    res.json().then((result) => {
      setResultUrls(JSON.parse(result));
    });
  });
}



