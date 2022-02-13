export function setResultUrls(data) {
  const thumb = document.getElementById('thumb');
  const medium = document.getElementById('medium');
  const large = document.getElementById('large');

  thumb.setAttribute('href', data.thumb);
  thumb.innerText = 'thumb';
  medium.setAttribute('href', data.medium);
  medium.innerText = 'medium';
  large.setAttribute('href', data.large);
  large.innerText = 'large';
}

export function cleanResult() {
  const thumb = document.getElementById('thumb');
  const medium = document.getElementById('medium');
  const large = document.getElementById('large');

  thumb.setAttribute('href', '');
  thumb.innerText = '';
  medium.setAttribute('href', '');
  medium.innerText = '';
  large.setAttribute('href', '');
  large.innerText = '';
}


export function addListener(id: string, event: string, callback) {
  const node = document.getElementById(id);
  if (node) {
    node.addEventListener(event, callback);
    return true;
  }
  return false;
}

export function getImageFromNode(id) {
  const node = document.getElementById(id);
  if (node) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return node.files[0];
  }
  return false;
}