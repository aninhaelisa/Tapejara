function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('show');
  });
});


/*-------------------------------------------------------------------------------*/
let currentIndex = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}

/*-------------------------------------------------------------------------------*/

function toggleTopicos() {
  var topicos = document.getElementById("topicos");
  var arrow = document.querySelector(".arrow");
  
  if (topicos.style.maxHeight) {
    topicos.style.maxHeight = null;  // Fecha o menu
    arrow.style.transform = "rotate(0deg)"; // Setinha para baixo
  } else {
    topicos.style.maxHeight = topicos.scrollHeight + "px"; // Abre o menu
    arrow.style.transform = "rotate(180deg)"; // Setinha para cima
  }
}