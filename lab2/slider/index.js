let currentimageId = localStorage.getItem('currentimageId')
  ? localStorage.getItem('currentimageId')
  : 0;

let slide = (images, imageId, imageHide) => {
  images[imageHide].className = images[imageHide].className
    .replace('slider__content--visible', '')
    .trim();

  images[imageId].className = images[imageId].className + ' slider__content--visible';
};

let slideLeft = () => {
  slide(images, previmageId, currentimageId);

  nextimageId = currentimageId;
  localStorage.currentimageId = currentimageId;

  currentimageId = previmageId;

  previmageId =
    (previmageId - 1) % (images.length - 1) >= 0
      ? (previmageId - 1) % (images.length - 1)
      : images.length - 1;
};

let slideRight = () => {
  slide(images, nextimageId, currentimageId);

  previmageId = currentimageId;

  currentimageId = nextimageId;
  localStorage.currentimageId = currentimageId;

  nextimageId = (nextimageId + 1) % images.length;
};

let images = document.getElementsByClassName('slider__content');

images[currentimageId].className = images[currentimageId].className + ' slider__content--visible';

let leftButton = document.getElementById('slider__left');
let rightButton = document.getElementById('slider__right');

let previmageId =
  (currentimageId - 1) % images.length >= 0
    ? (currentimageId - 1) % images.length
    : images.length - 1;
let nextimageId = (currentimageId + 1) % images.length;

let timeMs = 2000;
let interval = setInterval(slideRight, timeMs);

leftButton.onclick = (event) => {
  clearInterval(interval);
  slideLeft();
  interval = setInterval(slideRight, timeMs);
};

rightButton.onclick = (event) => {
  clearInterval(interval);
  slideRight();
  interval = setInterval(slideRight, timeMs);
};

document.onkeydown = (event) => {
  clearInterval(interval);
  event.key === 'ArrowLeft' || event.key === 'ArrowUp'
    ? (event.preventDefault(), slideLeft())
    : event.key === 'ArrowRight' || event.key === ' '
    ? (event.preventDefault(), slideRight())
    : null;
  interval = setInterval(slideRight, timeMs);
};
