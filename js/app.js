// function app() {
//     //ввод данных
// //let x = parseInt(prompt("Введите x"))
// let x = parseInt(document.getElementById('x').value)

// if (x == 0) {
//     document.getElementById('message').innerText = "x = 0"
// }

// if (x > 0 && x <= 100) {
//     document.getElementById('message').innerText = "x в диапазоне от 1 до 100"
// }

// //логика
// const result = x * x

// //вывод данных
// //alert(`Квадрат x = ${result}`)
// document.getElementById('result').innerText = result

// }

function app () {
    let x = parseInt(document.getElementById('x').value)
    let y = parseInt(document.getElementById('y').value)

    y = (y / 100) ** 2

    const result = x / y

    document.getElementById('result').innerText = result

}