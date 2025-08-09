/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

let arr = [1, 2, 3, 2, 4, 5, 1, 6, 3, 7, 4, 4, 8, 1];
function findUniqueElements(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let newElement = array[i];
    if (!includesElement(newArray, newElement)) {
      newArray.push(newElement);
    }
  }
  return newArray;
}

const findedUniqueElements = findUniqueElements(arr);
console.log("findedUniqueElements: ", findedUniqueElements);
