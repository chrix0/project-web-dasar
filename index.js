var container = document.querySelector('.masonry-grid');
var msnry = new Masonry( container, {
  // options
  columnWidth: 0,
  itemSelector: '.grid-item',
  percentPosition: true
});

console.log(
  "index.js sudah jalan"
)