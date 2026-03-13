document.addEventListener('DOMContentLoaded', () => {
  
  // Ініціалізуємо наш Swiper
const swiper = new Swiper('.swiper', {
  // Робимо так, щоб слайдер гортався нескінченно
  loop: true,

  // Відстань між картками (в пікселях)
  spaceBetween: 20,

  // Підключаємо наші стрілки для керування
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Завдання із зірочкою 🌟: Адаптивність (breakpoints)
  // Вказуємо, скільки карток показувати на різних екранах
  breakpoints: {
    // Якщо екран більше 320px (мобільні телефони)
    320: {
      slidesPerView: 1,
    },
    // Якщо екран більше 768px (планшети)
    768: {
      slidesPerView: 2,
    },
    // Якщо екран більше 1024px (комп'ютери)
    1024: {
      slidesPerView: 3,
    }
  }
});
  
  
  



    
});