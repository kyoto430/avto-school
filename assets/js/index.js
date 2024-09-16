// Меню бургер
function burger() {
  const burgerBtn = document.querySelector('.menu__burger');
  const menu = document.querySelector('.header__nav');
  const menuLinks = document.querySelectorAll('.menu__link');
  const overlay = document.querySelector('.overlay');

  burgerBtn.addEventListener('click', function () {
    document.body.classList.toggle('lock');
    document.body.classList.toggle('mobile-menu-active');
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (!link.classList.contains('drop__icon')) {
        document.body.classList.remove('lock');
        document.body.classList.remove('mobile-menu-active');
        burgerBtn.classList.remove('active');
        menu.classList.remove('active');
        overlay.classList.remove('active');
      }
    });
  });

  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !burgerBtn.contains(event.target)) {
      document.body.classList.remove('lock');
      document.body.classList.remove('mobile-menu-active');
      burgerBtn.classList.remove('active');
      menu.classList.remove('active');
      overlay.classList.remove('active');
    }
  });
}

burger();

//Попапы
function popups() {
  let popupLinks = document.querySelectorAll('.popup-link');
  const body = document.querySelector('body');
  const lockPadding = document.querySelectorAll('.lock-padding');

  let unlock = true;

  const timeout = 500;

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function (e) {
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault();
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll('.close-popup');
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
        popupClose(el.closest('.popup'));
        e.preventDefault();
      });
    }
  }

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
        bodyUnLock();
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth -
      document.getElementsByTagName('body').offsetWidth +
      'px';
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('locker');

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnLock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = '0px';
        }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('locker');
    }, timeout);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }
}

popups();

function openMenu() {
  const menuIcons = document.querySelectorAll('.drop__icon');
  menuIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const targetMenuId = icon.getAttribute('data-target');
      const targetMenu = document.getElementById(targetMenuId);
      targetMenu.classList.toggle('active');
      icon.classList.toggle('active');
    });
  });
}

if (window.innerWidth <= 1280) {
  openMenu();
}

function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slide-item');

  slides[activeSlide].classList.add('active');

  if (window.innerWidth <= 743) {
    slides.forEach((slide) => {
      slide.classList.add('active');
    });
  } else {
    for (const slide of slides) {
      slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
      });
    }
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  }
}

slidesPlugin();

function showMoreText() {
  document.addEventListener('DOMContentLoaded', function () {
    const showMoreButtons = document.querySelectorAll('.btn-show');
    const showMoreBlock = document.querySelector('.about__btn-show');
    const hiddenText = document.querySelectorAll('.seo__text-hidden');
    const hiddenBlock = document.querySelectorAll('.about__text-hidden');

    showMoreBlock.addEventListener('click', function () {
      hiddenBlock.forEach(function (text) {
        if (text.style.transform !== 'scale(1)') {
          text.style.position = 'initial';
          text.style.transform = 'scale(1)';
          showMoreBlock.innerText = 'Скрыть';
          showMoreBlock.classList.add('arrow-up');
        } else {
          text.style.position = 'absolute';
          text.style.transform = 'scale(0)';
          showMoreBlock.innerText = 'Подробнее';
          showMoreBlock.classList.remove('arrow-up');
        }
      });
    });

    showMoreButtons.forEach(function (showMoreButton) {
      showMoreButton.addEventListener('click', function () {
        hiddenText.forEach(function (text) {
          if (text.style.transform !== 'scale(1)') {
            text.style.position = 'initial';
            text.style.transform = 'scale(1)';
            showMoreButton.innerText = 'Скрыть';
            showMoreButton.classList.add('arrow-up');
          } else {
            text.style.position = 'absolute';
            text.style.transform = 'scale(0)';
            showMoreButton.innerText = 'Раскрыть';
            showMoreButton.classList.remove('arrow-up');
          }
        });
      });
    });
  });
}

showMoreText();

// Mask phone

window.addEventListener('DOMContentLoaded', function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = '+7 (___) ___ __-__',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, ''),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf('_');
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      var reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return '\\d{1,' + a.length + '}';
        })
        .replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = new_value;
      if (event.type == 'blur' && this.value.length < 5) this.value = '';
    }

    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
    input.addEventListener('keydown', mask, false);
  });
});
