'use strict';
{
    let items = document.querySelectorAll('li.item');
    console.log(`categories: ${items.length}`);

    //   for (let item of items) {
    //     showCategoryInfo(item);
    //   }

    items.forEach(item => {
        showCategoryInfo(item);
    });

    function showCategoryInfo(category) {
        let categoryTitle = category.querySelector('h2').textContent;
        let categoryElementsCount = category.querySelectorAll('li').length;

        console.log(`category: ${categoryTitle}`);
        console.log(`elements: ${categoryElementsCount}`);
        //console.log('------------------------'); 
    }
}

/**
 * Завдання 1
HTML містить список категорій ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>

З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
На що буде звертати увагу ментор при перевірці:
Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()
У консолі має бути виведено наступне повідомлення:
Структура репозиторія
 */
