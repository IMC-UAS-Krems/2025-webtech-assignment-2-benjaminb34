let shopping_list = []
let totalPrice = 0
let checkoutBool = 0

const price = {
    WinterGloves: 6.99,
    RegularHygieneKit: 7.99,
    SimpleRedBlanket: 3.99,
    SocksBundle: 2.99,
    FirstAidKit: 16.99,
    ReusableWaterBottle: 3.49,
    FeminineHygieneKit: 6.49,
    Backpack: 10.99,
    FoodPack: 9.99,
    ProteinBarPack: 7.99
}

const names = {
    WinterGloves: "Winter Gloves",
    RegularHygieneKit: "Regular Hygiene Kit",
    SimpleRedBlanket: "Simple Red Warm Blanket",
    SocksBundle: "Socks Bundle",
    FirstAidKit: "First Aid Kit",
    ReusableWaterBottle: "Reusable Water Bottle",
    FeminineHygieneKit: "Feminine Hygiene Kit",
    Backpack: "Backpack",
    FoodPack: "Food Pack",
    ProteinBarPack: "Protein Bar Pack"
}

function addToShoppingList(item) {
    shopping_list.push(item)
    console.log(shopping_list)
    updateCounter()
}

function checkout() {
    if (shopping_list.length > 0) {
        if (checkoutBool === 0) {
            checkoutBool = 1
            let inCartSet = new Set(shopping_list)
            let inCartArray = [...inCartSet]
            console.log(inCartArray)
            orderDetailsBox = document.getElementById("orderdetails")
            orderDetailsBox.setAttribute("style", "display:block")
            orderList = orderDetailsBox.getElementsByTagName("ul")[0]
            for (let i = 0; i < shopping_list.length; i++) {
                totalPrice += parseFloat(price[shopping_list[i]])
            }
            for (let i = 0; i < inCartArray.length; i++) {
                orderList.innerHTML += "<li class='fs-6' id=" + inCartArray[i] + ">" + getOccurrence(shopping_list, inCartArray[i]) + "x " + names[inCartArray[i]] + " :" + "<span class='text-darkyellow'> €" + price[inCartArray[i]] * getOccurrence(shopping_list, inCartArray[i]) + "</span></li>"
            }
            if (shopping_list.length > 2) {
                orderList.innerHTML += "<span class='d-block mt-2 fs-6 text-white'> Due to buying more than two items, a discount of 30% was applied </span>"
                orderList.innerHTML += "<span class='d-block fs-6 text-white'>Discount: <span class='text-darkyellow'>€" + totalPrice*0.3 + "</span></span>"
                orderList.innerHTML += "<span class='fs-3 text-yellow'>Total Price: €" + "<span class='text-decoration-line-through'>" + Number((totalPrice).toFixed(5)) + "</span> €" + Number((totalPrice-(totalPrice*0.3)).toFixed(5)) + "</span>"
            } else {
                orderList.innerHTML += "<span class='fs-3 text-yellow'>Total Price: €" + Number((totalPrice).toFixed(5)) + "</span>"
            }
        }
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
    checkoutBox = document.getElementById("checkoutbox")
    checkoutBox.setAttribute("style", "display:none")
    orderDetailsBox = document.getElementById("orderdetails")
    orderDetailsBox.setAttribute("style", "display: none")
    orderList = orderDetailsBox.getElementsByTagName("ul")[0]
    orderList.innerHTML = ""
    checkoutBool = 0
    totalPrice = 0
}

function continueToDetails() {
    checkoutBox = document.getElementById("checkoutbox")
    checkoutBox.setAttribute("style", "display:block")
    orderDetailsBox = document.getElementById("orderdetails")
    orderDetailsBox.setAttribute("style", "display: none")
}

function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
} //https://stackoverflow.com/questions/37365512/count-the-number-of-times-a-same-value-appears-in-a-javascript-array

function thankYou() {
    window.alert("Your order has been placed. Thank you for donating!")
}