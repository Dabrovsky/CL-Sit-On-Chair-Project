document.addEventListener("DOMContentLoaded", function() {

  // Slider
  var slides = document.querySelectorAll('.slider-img');
  var number = 0;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };

  slides[number].style.display = "block";

  var next = document.querySelector('.right');
  next.addEventListener("click", function() {
    slides[number].style.display = "none";
    number += 1;
      if (number == slides.length) {
        number = 0;
      };
    slides[number].style.display = "block";
  });

  var prev = document.querySelector('.left');
  prev.addEventListener("click", function() {
    slides[number].style.display = "none";
    number += -1;
      if (number < 0) {
        number = slides.length-1;
      };
    slides[number].style.display = "block";
  });

  // Koszyk
  var arrows = document.querySelectorAll('.list_arrow');
  arrows.forEach(function(arrow) {
    arrow.addEventListener("click", function() {
      this.nextElementSibling.style.display = this.nextElementSibling.style.display === "block" ? "none" : "block";
    });
  });

  var product = document.querySelector('.title');
  var color = document.querySelector('.color');
  var pattern = document.querySelector('.pattern');
  var transport = document.querySelector('.transport');
  var chairPrice = document.querySelector('.panel_right .title');
  var chairColor = document.querySelector('.panel_right .color');
  var chairPattern = document.querySelector('.panel_right .pattern');
  var suma = document.querySelector('.sum');

  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;

  var img = document.querySelectorAll('.image_part img');
  img[0].style.display = "block";
  img[1].style.display = "none";
  img[2].style.display = "none";

  // Lista dropdown typ
  var listPanelRodzaj = document.querySelectorAll('#typ .list_panel li');
  listPanelRodzaj.forEach(function(list) {
    list.addEventListener("click", function() {
      var list_label = document.querySelector('#typ .list_label');
      this.parentElement.style.display = 'none';
      product.innerHTML = this.innerHTML;
      list_label.innerHTML = this.innerHTML;
      list_label.style.color = '#585858';
      chairPrice.innerHTML = this.dataset.price;
      a = parseInt(chairPrice.innerHTML);
      suma.innerHTML = a + b + c + d + ' zł';

      if (this.innerHTML === "Clair") {
        img[0].style.display = "block";
        img[1].style.display = "none";
        img[2].style.display = "none";
      } else if (this.innerHTML === "Margarita") {
        img[0].style.display = "none";
        img[1].style.display = "block";
        img[2].style.display = "none";
      } else {
        img[0].style.display = "none";
        img[1].style.display = "none";
        img[2].style.display = "block";
      };

    });
  });

  // Lista dropdown color
  var listPanelColor = document.querySelectorAll('#color .list_panel li');
  listPanelColor.forEach(function(list) {
    list.addEventListener("click", function() {
      var list_label = document.querySelector('#color .list_label');
      this.parentElement.style.display = 'none';
      color.innerHTML = this.innerHTML;
      list_label.innerHTML = this.innerHTML;
      list_label.style.color = '#585858';
      chairColor.innerHTML = this.dataset.price;
      b = parseInt(chairColor.innerHTML);
      suma.innerHTML = a + b + c + d + ' zł';
    });
  });

  // Lista dropdown pattern
  var listPanelPattern = document.querySelectorAll('#pattern .list_panel li');
  listPanelPattern.forEach(function(list) {
    list.addEventListener("click", function() {
      var list_label = document.querySelector('#pattern .list_label');
      this.parentElement.style.display = 'none';
      pattern.innerHTML = this.innerHTML;
      list_label.innerHTML = this.innerHTML;
      list_label.style.color = '#585858';
      chairPattern.innerHTML = this.dataset.price;
      c = parseInt(chairPattern.innerHTML);
      suma.innerHTML = a + b + c + d + ' zł';
    });
  });

  // Checkbox transport
  var transportValue = document.querySelector('.panel_right .transport');
  var transportText = document.querySelector('.panel_left .transport');
  var checkbox = document.querySelector('#transport');
  checkbox.addEventListener("click", function() {
      if (checkbox.checked) {
        transportValue.innerHTML = checkbox.dataset.transportPrice;
        transportText.innerHTML = 'Transport';
      } else {
        transportValue.innerHTML = 0;
        transportText.innerHTML = '';
      }
    d = parseInt(transportValue.innerHTML);
    suma.innerHTML = a + b + c + d + ' zł';
  });

  // Mail form validation
  var nameAlert = document.querySelector('.name');
  var mailAlert = document.querySelector('.mail');
  var textareaAlert = document.querySelector('.textarea');
  var inputName = document.querySelector('input[name=name]');
  var inputEmail = document.querySelector('input[name=email]');
  var textarea = document.querySelector('textarea');
  var checkboxTerms = document.querySelector('#checkbox');
  var checkboxAlert = document.querySelector('.checkbox_alert');
  var sendBtn = document.querySelector('#send');
  sendBtn.addEventListener("click", function() {
    event.preventDefault();
      inputName.value.length < 3 ? nameAlert.style.display = 'inline-block' : nameAlert.style.display = 'none';
      emailCheck(inputEmail) === false ? mailAlert.style.display = 'inline-block' : mailAlert.style.display = 'none';
      textarea.value.length < 10 ? textareaAlert.style.display = 'inline-block' : textareaAlert.style.display = 'none';
      checkboxTerms.checked === false ? checkboxAlert.style.display = 'inline-block' : checkboxAlert.style.display = 'none';
  });

  emailCheck = (input) => {
      var mailReg = new RegExp('^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$', 'gi');
      if (!mailReg.test(input.value)) { return false; }
      else { return true; };
  };

});
