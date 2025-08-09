/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

let newArray1 = [1, 2, 3, 4, 5, 23, 4, 4];
let newArray2 = [1, 3, 4, 2, 23, 23, 8, 4, 7, 40, 34, 5];
function findCommonElements(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    let newElement1 = array1[i];
    if (
      includesElement(array2, newElement1) &&
      !includesElement(newArray, newElement1)
    ) {
      newArray.push(newElement1);
    }
  }
  return newArray;
}

const commonArray = findCommonElements(newArray1, newArray2);
console.log("newCommonArray: ", commonArray);
