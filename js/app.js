// console.log("Hello World!");

const ulElement = document.getElementById('list')

for (let i = 0; i < 100; i++) {
    let num = i + 1
    console.log(i, num)

    const f = num % 3 // Multipli di 3
    const b = num % 5 // Multipli di 5

    // Se è multiplo sia di 3 che di 5 stampo FizzBuzz vicino al numero
    if (f === 0 && b === 0) {
        ulElement.innerHTML = ulElement.innerHTML + '<li>' + num + ' FizzBuzz' + '</li>'
    }
    // Se è multiplo di 3 stampo Fizz vicino al numero
    else if (f === 0) {
        ulElement.innerHTML = ulElement.innerHTML + '<li>' + num + ' Fizz' + '</li>'
    }
    // Se è multiplo di 5 stampo Buzz vicino al numero
    else if (b === 0) {
        ulElement.innerHTML = ulElement.innerHTML + '<li>' + num + ' Buzz' + '</li>'
    }
    // Se non è nè multiplo di 3 nè di 5 stampo solo il numero
    else {
        ulElement.innerHTML = ulElement.innerHTML + '<li>' + num + '</li>'
    }


}