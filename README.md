# Приклади використання SwiperJS

Цей проєкт містить приклад роботи зі слайдером **SwiperJS** (v11), підключеним через CDN.

## Файли проєкту

| Файл | Опис |
|------|------|
| `index.html` | Картки товарів зі слайдером, пагінацією та адаптивністю |

---

## Що таке SwiperJS?

**SwiperJS** — це сучасна бібліотека для створення слайдерів (каруселей). Вона безкоштовна, не потребує jQuery і працює на мобільних пристроях із підтримкою свайпів.

Офіційний сайт: https://swiperjs.com

---

## Підключення через CDN

У `<head>` підключаємо стилі:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
```

Перед закриваючим `</body>` підключаємо скрипт:

```html
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

---

## Базова HTML-структура

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Слайд 1</div>
    <div class="swiper-slide">Слайд 2</div>
    <div class="swiper-slide">Слайд 3</div>
  </div>

  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>
```

- `.swiper` — головний контейнер слайдера
- `.swiper-wrapper` — обгортка для всіх слайдів
- `.swiper-slide` — окремий слайд
- `.swiper-button-prev` / `.swiper-button-next` — стрілки навігації

---

## Ініціалізація в JavaScript

```js
const swiper = new Swiper('.swiper', {
    // параметри
});
```

---

## Основні параметри

| Параметр | Тип | Опис |
|----------|-----|------|
| `slidesPerView` | number | Кількість видимих слайдів одночасно |
| `spaceBetween` | number | Відстань між слайдами (у пікселях) |
| `loop` | boolean | Безкінечна прокрутка (після останнього слайда йде перший) |
| `autoplay` | object | Автоматичне гортання слайдів |
| `navigation` | object | Підключення стрілок навігації |
| `pagination` | object | Підключення пагінації (крапки під слайдером) |
| `breakpoints` | object | Адаптивні налаштування для різних розмірів екрану |

---

## Приклади параметрів

### Навігація (стрілки)

```js
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}
```

### Пагінація (крапки)

Потрібно додати в HTML:
```html
<div class="swiper-pagination"></div>
```

```js
pagination: {
    el: '.swiper-pagination',
    clickable: true,
}
```

### Автопрокрутка

```js
autoplay: {
    delay: 3000, // інтервал у мілісекундах
}
```

### Адаптивність (breakpoints)

```js
breakpoints: {
    640: {
        slidesPerView: 2,
    },
    900: {
        slidesPerView: 3,
    },
}
```

Це означає: при ширині екрану від 640px показувати 2 слайди, від 900px — 3 слайди.

---

## Як запустити

Просто відкрий `index.html` у браузері. Інтернет-зʼєднання потрібне для завантаження SwiperJS із CDN.
