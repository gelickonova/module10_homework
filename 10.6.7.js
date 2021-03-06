// Дан массив. Нужно вывести в консоль количество
// чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа,
// но и, например, знаки, null и так далее.

function arr(array) {
    let zeros = 0;
    //нечетные - odd
    let odd = 0;
    let even = 0;
    array.forEach(function(item){
        if (typeof item === 'number' && !isNaN(item))
            if (item === 0) zeros++;
            else if (item % 2 === 0) even++;
            else odd++;
    })
    console.log(`Нечётных элементов: ${odd}`);
    console.log(`Чётных элементов: ${even}`);
    console.log(`Нулей: ${zeros}`);
}
