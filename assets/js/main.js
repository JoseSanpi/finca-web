/**
* Template Name: Squadfree
* Template URL: https://bootstrapmade.com/squadfree-free-bootstrap-template-creative/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });


  /**
   * Swiper mobile
   */


  const portfolioImages = {
    all: [
      { src: 'assets/img/outdoors/Outdoors1_thumb.webp', title: 'Outdoors', text: 'Aerial outdoors', full: 'assets/img/outdoors/Outdoors1.webp' },
      { src: 'assets/img/outdoors/Outdoors2_thumb.webp', title: 'Outdoors', text: 'Aerial outdoors', full: 'assets/img/outdoors/Outdoors2.webp' },
      { src: 'assets/img/outdoors/Outdoors3_thumb.webp', title: 'Outdoors', text: 'Aerial outdoors', full: 'assets/img/outdoors/Outdoors3.webp' },
      { src: 'assets/img/livingroom/livingroom1_thumb.webp', title: 'Living Room', text: 'Main living room', full: 'assets/img/livingroom/livingroom1.webp' },
      { src: 'assets/img/livingroom/livingroom2_thumb.webp', title: 'Living Room', text: 'Main living room', full: 'assets/img/livingroom/livingroom2.webp' },
      { src: 'assets/img/livingroom/livingroom3_thumb.webp', title: 'Living Room', text: 'Main living room', full: 'assets/img/livingroom/livingroom3.webp' },
      { src: 'assets/img/kitchen/Kitchen1_thumb.webp', title: 'Kitchen', text: 'Kitchen', full: 'assets/img/kitchen/Kitchen1.webp' },
      { src: 'assets/img/kitchen/Kitchen2_thumb.webp', title: 'Kitchen', text: 'Kitchen', full: 'assets/img/kitchen/Kitchen2.webp' },
      { src: 'assets/img/kitchen/Kitchen3_thumb.webp', title: 'Kitchen', text: 'Kitchen', full: 'assets/img/kitchen/Kitchen3.webp' },
      { src: 'assets/img/diningroom/Diningroom2_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom2.webp' },
      { src: 'assets/img/diningroom/Diningroom3_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom3.webp' },
      { src: 'assets/img/diningroom/Diningroom1_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom1.webp' },
      { src: 'assets/img/diningroom/Diningroom4_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom4.webp' },
      { src: 'assets/img/diningroom/Diningroom5_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom5.webp' },
      { src: 'assets/img/diningroom/Diningroom6_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom6.webp' },
      { src: 'assets/img/diningroom/Diningroom7_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom7.webp' },
      { src: 'assets/img/diningroom/Diningroom8_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom8.webp' },
      { src: 'assets/img/bedroomA/BedroomA1_thumb.webp', title: 'BedroomA', text: 'First bedroom', full: 'assets/img/bedroomA/BedroomA1.webp' },
      { src: 'assets/img/bedroomA/BedroomA2_thumb.webp', title: 'BedroomA', text: 'First bedroom', full: 'assets/img/bedroomA/BedroomA2.webp' },
      { src: 'assets/img/bedroomA/BedroomA3_thumb.webp', title: 'BedroomA', text: 'First bedroom', full: 'assets/img/bedroomA/BedroomA3.webp' },
      { src: 'assets/img/bedroomB/BedroomB1_thumb.webp', title: 'BedroomB', text: 'Second bedroom', full: 'assets/img/bedroomB/BedroomB1.webp' },
      { src: 'assets/img/bedroomB/BedroomB2_thumb.webp', title: 'BedroomB', text: 'Second bedroom', full: 'assets/img/bedroomB/BedroomB2.webp' },
      { src: 'assets/img/bedroomB/BedroomB3_thumb.webp', title: 'BedroomB', text: 'Second bedroom', full: 'assets/img/bedroomB/BedroomB3.webp' },
      { src: 'assets/img/bedroomC/BedroomC1_thumb.webp', title: 'CedroomC', text: 'Third bedroom', full: 'assets/img/bedroomC/BedroomC1.webp' },
      { src: 'assets/img/bedroomC/BedroomC2_thumb.webp', title: 'CedroomC', text: 'Third bedroom', full: 'assets/img/bedroomC/BedroomC2.webp' },
      { src: 'assets/img/bedroomC/BedroomC3_thumb.webp', title: 'CedroomC', text: 'Third bedroom', full: 'assets/img/bedroomC/BedroomC3.webp' },
      { src: 'assets/img/bedroomC/BedroomC4_thumb.webp', title: 'CedroomC', text: 'Third bedroom', full: 'assets/img/bedroomC/BedroomC4.webp' },
      { src: 'assets/img/bedroomC/BedroomC5_thumb.webp', title: 'CedroomC', text: 'Third bedroom', full: 'assets/img/bedroomC/BedroomC5.webp' },
      { src: 'assets/img/bathrooms/BathroomMain_thumb.webp', title: 'Outdoors', text: 'Main bathroom', full: 'assets/img/bathrooms/BathroomMain.webp' },
      { src: 'assets/img/bathrooms/BathroomBeds_thumb.webp', title: 'Outdoors', text: 'Beds bathroom', full: 'assets/img/bathrooms/BathroomBeds.webp' },
      { src: 'assets/img/swimmingpool/Swimmingpool1_thumb.webp', title: 'Swimmingpool', text: 'Aerial swimmingpool', full: 'assets/img/swimmingpool/Swimmingpool1.webp' },
      { src: 'assets/img/swimmingpool/Swimmingpool2_thumb.webp', title: 'Swimmingpool', text: 'Aerial swimmingpool', full: 'assets/img/swimmingpool/Swimmingpool2.webp' },
      { src: 'assets/img/swimmingpool/Swimmingpool3_thumb.webp', title: 'Swimmingpool', text: 'Aerial swimmingpool', full: 'assets/img/swimmingpool/Swimmingpool3.webp' },
      { src: 'assets/img/swimmingpool/Swimmingpool4_thumb.webp', title: 'Swimmingpool', text: 'Aerial swimmingpool', full: 'assets/img/swimmingpool/Swimmingpool4.webp' },
      { src: 'assets/img/swimmingpool/Swimmingpool5_thumb.webp', title: 'Swimmingpool', text: 'Aerial swimmingpool', full: 'assets/img/swimmingpool/Swimmingpool5.webp' },
      { src: 'assets/img/sportsarea/Sportsarea1_thumb.webp', title: 'Sportsarea', text: 'Aerial sportsarea', full: 'assets/img/sportsarea/Sportsarea1.webp' },
      { src: 'assets/img/sportsarea/Sportsarea2_thumb.webp', title: 'Sportsarea', text: 'Aerial sportsarea', full: 'assets/img/sportsarea/Sportsarea2.webp' },
      { src: 'assets/img/kidscastle/Kidscastle1_thumb.webp', title: 'Kidscastle', text: 'Aerial kidscastle', full: 'assets/img/kidscastle/Kidscastle1.webp' },
      { src: 'assets/img/kidscastle/Kidscastle2_thumb.webp', title: 'Kidscastle', text: 'Aerial kidscastle', full: 'assets/img/kidscastle/Kidscastle2.webp' },
    ],
    outdoors: [
      { src: 'assets/img/outdoors/Outdoors1_thumb.webp', title: 'Outdoors', text: 'Aerial outdoors', full: 'assets/img/outdoors/Outdoors1.webp' },
      { src: 'assets/img/outdoors/Outdoors2_thumb.webp', title: 'Outdoors', text: 'Aerial outdoors', full: 'assets/img/outdoors/Outdoors2.webp' },
      { src: 'assets/img/outdoors/Outdoors3_thumb.webp', title: 'Outdoors', text: 'Aerial outdoors', full: 'assets/img/outdoors/Outdoors3.webp' }
    ],
    livingroom: [
      { src: 'assets/img/livingroom/livingroom1_thumb.webp', title: 'Living Room', text: 'Main living room', full: 'assets/img/livingroom/livingroom1.webp' },
      { src: 'assets/img/livingroom/livingroom2_thumb.webp', title: 'Living Room', text: 'Main living room', full: 'assets/img/livingroom/livingroom2.webp' },
      { src: 'assets/img/livingroom/livingroom3_thumb.webp', title: 'Living Room', text: 'Main living room', full: 'assets/img/livingroom/livingroom3.webp' }
    ],
    kitchen: [
      { src: 'assets/img/kitchen/Kitchen1_thumb.webp', title: 'Kitchen', text: 'Kitchen', full: 'assets/img/kitchen/Kitchen1.webp' },
      { src: 'assets/img/kitchen/Kitchen2_thumb.webp', title: 'Kitchen', text: 'Kitchen', full: 'assets/img/kitchen/Kitchen2.webp' },
      { src: 'assets/img/kitchen/Kitchen3_thumb.webp', title: 'Kitchen', text: 'Kitchen', full: 'assets/img/kitchen/Kitchen3.webp' }
    ],
    diningroom: [
      { src: 'assets/img/diningroom/Diningroom2_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom2.webp' },
      { src: 'assets/img/diningroom/Diningroom3_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom3.webp' },
      { src: 'assets/img/diningroom/Diningroom1_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom1.webp' },
      { src: 'assets/img/diningroom/Diningroom4_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom4.webp' },
      { src: 'assets/img/diningroom/Diningroom5_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom5.webp' },
      { src: 'assets/img/diningroom/Diningroom6_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom6.webp' },
      { src: 'assets/img/diningroom/Diningroom7_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom7.webp' },
      { src: 'assets/img/diningroom/Diningroom8_thumb.webp', title: 'Diningroom', text: 'Diningroom', full: 'assets/img/diningroom/Diningroom8.webp' }
    ],
    bedroom: [
      { src: 'assets/img/bedroomA/BedroomA1_thumb.webp', title: 'BedroomA', text: 'First bedroom', full: 'assets/img/bedroomA/BedroomA1.webp' },
      { src: 'assets/img/bedroomA/BedroomA2_thumb.webp', title: 'BedroomA', text: 'First bedroom', full: 'assets/img/bedroomA/BedroomA2.webp' },
      { src: 'assets/img/bedroomA/BedroomA3_thumb.webp', title: 'BedroomA', text: 'First bedroom', full: 'assets/img/bedroomA/BedroomA3.webp' },
      { src: 'assets/img/bedroomB/BedroomB1_thumb.webp', title: 'BedroomB', text: 'Second bedroom', full: 'assets/img/bedroomB/BedroomB1.webp' },
      { src: 'assets/img/bedroomB/BedroomB2_thumb.webp', title: 'BedroomB', text: 'Second bedroom', full: 'assets/img/bedroomB/BedroomB2.webp' },
      { src: 'assets/img/bedroomB/BedroomB3_thumb.webp', title: 'BedroomB', text: 'Second bedroom', full: 'assets/img/bedroomB/BedroomB3.webp' },
      { src: 'assets/img/bedroomC/BedroomC1_thumb.webp', title: 'CedroomC', text: 'Third bedroom', full: 'assets/img/bedroomC/BedroomC1.webp' },
      { src: 'assets/img/bedroomC/BedroomC2_thumb.webp', title: 'CedroomC', text: 'Third bedroom', full: 'assets/img/bedroomC/BedroomC2.webp' },
      { src: 'assets/img/bedroomC/BedroomC3_thumb.webp', title: 'CedroomC', text: 'Third bedroom', full: 'assets/img/bedroomC/BedroomC3.webp' },
      { src: 'assets/img/bedroomC/BedroomC4_thumb.webp', title: 'CedroomC', text: 'Third bedroom', full: 'assets/img/bedroomC/BedroomC4.webp' },
      { src: 'assets/img/bedroomC/BedroomC5_thumb.webp', title: 'CedroomC', text: 'Third bedroom', full: 'assets/img/bedroomC/BedroomC5.webp' }
    ],
    bathroom: [
      { src: 'assets/img/bathrooms/BathroomMain_thumb.webp', title: 'Outdoors', text: 'Main bathroom', full: 'assets/img/bathrooms/BathroomMain.webp' },
      { src: 'assets/img/bathrooms/BathroomBeds_thumb.webp', title: 'Outdoors', text: 'Beds bathroom', full: 'assets/img/bathrooms/BathroomBeds.webp' }
    ],
    swimmingpool: [
      { src: 'assets/img/swimmingpool/Swimmingpool1_thumb.webp', title: 'Swimmingpool', text: 'Aerial swimmingpool', full: 'assets/img/swimmingpool/Swimmingpool1.webp' },
      { src: 'assets/img/swimmingpool/Swimmingpool2_thumb.webp', title: 'Swimmingpool', text: 'Aerial swimmingpool', full: 'assets/img/swimmingpool/Swimmingpool2.webp' },
      { src: 'assets/img/swimmingpool/Swimmingpool3_thumb.webp', title: 'Swimmingpool', text: 'Aerial swimmingpool', full: 'assets/img/swimmingpool/Swimmingpool3.webp' },
      { src: 'assets/img/swimmingpool/Swimmingpool4_thumb.webp', title: 'Swimmingpool', text: 'Aerial swimmingpool', full: 'assets/img/swimmingpool/Swimmingpool4.webp' },
      { src: 'assets/img/swimmingpool/Swimmingpool5_thumb.webp', title: 'Swimmingpool', text: 'Aerial swimmingpool', full: 'assets/img/swimmingpool/Swimmingpool5.webp' }
    ],
    sportsarea: [
      { src: 'assets/img/sportsarea/Sportsarea1_thumb.webp', title: 'Sportsarea', text: 'Aerial sportsarea', full: 'assets/img/sportsarea/Sportsarea1.webp' },
      { src: 'assets/img/sportsarea/Sportsarea2_thumb.webp', title: 'Sportsarea', text: 'Aerial sportsarea', full: 'assets/img/sportsarea/Sportsarea2.webp' }
    ],
    kidscastle: [
      { src: 'assets/img/kidscastle/Kidscastle1_thumb.webp', title: 'Kidscastle', text: 'Aerial kidscastle', full: 'assets/img/kidscastle/Kidscastle1.webp' },
      { src: 'assets/img/kidscastle/Kidscastle2_thumb.webp', title: 'Kidscastle', text: 'Aerial kidscastle', full: 'assets/img/kidscastle/Kidscastle2.webp' }
    ]
    // Completa las demás categorías
  };

  const swiperWrapper = document.getElementById('portfolio-swiper-wrapper');
  let swiper;

  function renderSlides(category) {
    const slides = category === 'all' ? portfolioImages.all : portfolioImages[category];
    swiperWrapper.innerHTML = slides.map(img => `
      <div class="swiper-slide">
        <a href="${img.full}" class="glightbox" data-gallery="portfolio">
          <img src="${img.src}" class="img-fluid" alt="${img.title}" />
        </a>
      </div>
    `).join('');

    if (swiper) swiper.destroy(true, true);
    swiper = new Swiper('.portfolio-slider', {
      slidesPerView: 1.2,
      spaceBetween: 10,
      pagination: { el: '.swiper-pagination', type: 'fraction'},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });

    // Reiniciar lightbox
    if (window.glightbox) glightbox.destroy();
    window.glightbox = GLightbox({ selector: '.glightbox' });
  }
  
  document.getElementById('slider-category').addEventListener('change', (e) => {
    renderSlides(e.target.value);
  });

  // Inicializar con "all"
  document.addEventListener('DOMContentLoaded', () => {
    renderSlides('all');
  });

  
  

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();