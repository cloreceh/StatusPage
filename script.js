const markers = document.querySelectorAll('.marker');
const boxes = document.querySelectorAll('.info-box');

markers.forEach(marker => {
  const infoId = marker.dataset.info;
  const box = document.getElementById(infoId);

  marker.addEventListener('mouseenter', () => {
    marker.classList.add('highlight');
    box.classList.add('highlight');
  });

  marker.addEventListener('mouseleave', () => {
    marker.classList.remove('highlight');
    box.classList.remove('highlight');
  });
});

boxes.forEach(box => {
  const markerId = box.dataset.marker;
  const marker = document.getElementById(markerId);

  box.addEventListener('mouseenter', () => {
    box.classList.add('highlight');
    marker.classList.add('highlight');
  });

  box.addEventListener('mouseleave', () => {
    box.classList.remove('highlight');
    marker.classList.remove('highlight');
  });
});
