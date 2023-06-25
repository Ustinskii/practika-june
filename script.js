//Объявляем переменные
const brand_item = document.getElementById("marka").value
const type_item = document.getElementById("product").value
const makeup = []

// перебираем полученный массив и из него создаем новый
function getValue(array) {
    document.getElementById('card').innerHTML = ""
    for (let i = 0; i < array.length; i++) {


        document.getElementById('card').insertAdjacentHTML('beforeend',
            '<div class="card"><h3 class="card-name">'
            + array[i].name
            + '</h3><a href="'
            + ('https://www.google.com/search?q=' + array[i].name)
            + '" class="card-link"><img src = "'
            + array[i].image_link
            + '" alt = "" class="card-image"></a><p class="card-price">$'
            + array[i].price
            + '</p></div>')
    }

}
// Обновляем переменные данными из форм. Получаем данные из JSON

const krData = function (brand_item, type_item) {
    try {
        let brand_item = document.getElementById("marka").value
        let type_item = document.getElementById("product").value

        fetch(` http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand_item}&product_type=${type_item}&price_greater_than=10 `,)
            .then(response => response.json())
            .then(data => getValue(data))
    }
    catch (err) { console.log("File not found") }
}

