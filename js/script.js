var imgs = [];

var slides = ['1140x474-1.jpg', '1140x474-2.jpg', '1140x474-3.jpg', '1140x474-4.jpg', '1140x474-5.jpg', '1140x474-6.jpg'];

var index = -1;

var myLength = slides.length;

var modal = document.createElement("DIV");
modal.id = 'searchModal';
modal.className = 'searchModal';

var searchObj;

function preload() {
  for (var i = 0; i < arguments.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = preload.arguments[i];
  }
}

function slide() {
  let tmp = "url('images/" + slides[index] + "')";
  document.getElementById("hero").style.backgroundImage  = tmp;
}

function prevSlide() {
  if (index > 0) {
    index--;
  } else {
    index = myLength - 1;
  }
  slide();
}

function nextSlide() {
  if (index < myLength - 1) {
    index++;
  } else {
    index = 0;
  }
  slide();
}

function activeLink() {
  let a = document.querySelectorAll("#menu-items > li > a");
  for (let i = 0; i < a.length; i++){
    if (document.URL === a[i].href) {
      a[i].className = 'current-active-link';
    }
  }
}

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

  window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = function() {};
}

function initModal() {
  let w = document.documentElement.clientWidth;
  let h = document.documentElement.clientHeight;
  modal.style.width = w + 'px';
  modal.style.height = h + 'px';
  document.body.appendChild(modal);
  searchObj = document.getElementById('search-icon');
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      modal.style.display = 'none'
    }
  })
}

function closeModal() {
  let closeX = document.getElementsByClassName("close")[0];
  document.getElementById('searchModal').style.display = "none";
  enableScroll();
}

function searchModal() {
  let modalStr = '<div class="modal-content">';
      modalStr += '<span class="close" onclick="closeModal();">&times;</span>';
      modalStr += '<div class="search-bar-wrapper">';
        modalStr += '<p style="margin-top:-2em"><input id="search-bar" class="search-bar" name="search" type="text" placeholder="Từ khoá" /></p>';
      modalStr += '</div>';
  modalStr += '</div>';
  modal.innerHTML = modalStr;
  modal.style.display = 'block';
  disableScroll();
}
