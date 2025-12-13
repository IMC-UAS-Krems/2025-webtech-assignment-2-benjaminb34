let shopping_list = []
const price = {
    6.99:"WinterGloves",
    7.99:"RegularHygieneKit",
    3.99:"SimpleRedBlanket",
    2.99:"SocksBundle",
    16.99:"FirstAidKit",
    3.49:"ReusableWaterBottle",
    6.49:"FeminineHygieneKit",
    10.99:"Backpack",
    9.99:"FoodPack",
    7.99:"ProteinBarPack"
}
let total_price = []

function addToShoppingList(item) {
    shopping_list.push(item)
    console.log(shopping_list)
    updateCounter()
}

function checkout() {
    if (shopping_list.length > 0) {
    for (let i = 0; i < shopping_list.length; i++) {
        console.log(shopping_list[i])
        total_price += getKeyByValue(price, shopping_list[i])
    }
    checkoutBox = document.getElementById("checkoutbox")
    checkoutBox.setAttribute("style", "display:block") }
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
    checkoutBox = document.getElementById("checkoutbox")
    checkoutBox.setAttribute("style", "display:none") 
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key =>
        object[key] === value);
}