var imageUrls = [];
var $gallery = document.querySelector('main');
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput.value !== '') {

    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

imageUrls = [
  'https://i.imgflip.com/37u3g1.png',
  'https://starecat.com/content/wp-content/uploads/angry-frustrated-black-kid-congrats-happy-for-you-nice.jpg',
  'https://i.pinimg.com/564x/6d/fa/bd/6dfabdd00e70fddc4cb6ab65fa338a27.jpg'
];

function updateGallery() {
  $gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}
updateGallery();
