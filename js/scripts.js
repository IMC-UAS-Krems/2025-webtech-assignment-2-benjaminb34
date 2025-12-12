let shopping_list = []
const price = {
    WinterGloves:6.99,
}

function addToShoppingList(item) {
    shopping_list.push(item)
    console.log(shopping_list)
    updateCounter()
}

function checkout() {
    for (let item in shopping_list) {
        console.log(item)
        console.log(Object.values(item))
    }
}

function updateCounter() {
    const box = document.getElementById("counter");
    counter = box.getElementsByTagName("span")[0];
    if (shopping_list.length < 10) {
        counter.innerHTML = "0" + shopping_list.length
    } else {
        counter.innerHTML = shopping_list.length
    }
}

function clearArray() {
    const box = document.getElementById("counter");
    counter = box.getElementsByTagName("span")[0];
    counter.innerHTML = "00"
    shopping_list = []
}