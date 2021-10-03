// Кнопка меню
$('.menu-btn').on('click', function () {
   $('.menu-btn').toggleClass('active');
});

$('.nav-link').on('click', function () {
   $('.collapse-horizontal').toggleClass('show');
   $('.menu-btn').toggleClass('active');
});

// скролл к якорям
let $page = $('html, body');
$('a[href*="#"]').click(function () {
   $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
   }, 400);
   return false;
});


// Слайдер на маленьких экранах
if ($(window).width() <= 576) {
   $('.description__items').slick({
      arrows: false,
      infinite: true,
      variableWidth: true,
      slidesToScroll: 1,
   });
}

// Bootstrap 
(function () {
   'use strict';

   // Fetch all the forms we want to apply custom Bootstrap validation styles to
   let forms = document.querySelectorAll('.needs-validation')

   // Loop over them and prevent submission
   Array.prototype.slice.call(forms)
      .forEach(function (form) {
         form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
               event.preventDefault();
               event.stopPropagation();
            }

            form.classList.add('was-validated');
         }, false);
      });
})();
(function () {
   'use strict';

   // Fetch all the forms we want to apply custom Bootstrap validation styles to
   let form = document.querySelector('.needs-validation1');

   // Loop over them and prevent submission
   form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
         event.preventDefault();
         event.stopPropagation();
      }
      form.classList.add('was-validated');
   });

})();