
let cart = [];
// This is my bod id:6043250755:AAFmSyi8jj5U_xxwwEbRoUhzB0xTULAtc4Y
// chad_id: 1900968004
var telegram_bot_id = "7285099423:AAFR332Ya2mYw8D1c27vk0txmhT1ZFZ6hBg";//"7285099423:AAFR332Ya2mYw8D1c27vk0txmhT1ZFZ6hBg"; 
//"6043250755:AAFmSyi8jj5U_xxwwEbRoUhzB0xTULAtc4Y"; //"7285099423:AAFR332Ya2mYw8D1c27vk0txmht1ZFZ6hBg"; 
// ////"1949574883:AAG-88xhsq8h0rBEUxf_Ra7NDjU_408JL-E";///
var chat_id = "1604007722"; //""; //1900968004; //1604007722; //; ////1467252650;
//var u_name, phone, email, message;
var message;

// Load cart from localStorage when the script is loaded
function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        //console.log(cart);
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

let counts1 = 0;
let counts2 = 0;
let counts3 = 0;
let counts4 = 0;
let counts5 = 0;
let counts6 = 0;
let counts7 = 0;
let prices = 0;
var message;
function addToCart(productName, productPrice) {
    counts1 += 1;
    counts2 += 1;
    counts3 += 1;
    counts4 += 1;
    counts5 += 1;
    counts6 += 1;
    counts7 += 1;
    loadCart();
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    //prices = existingProduct.quantity * existingProduct.price;
    numEl.textContent = counts1;
    numEl2.textContent = counts2;
    numEl3.textContent = counts3;
    numEl4.textContent = counts4;
    numEl5.textContent = counts5;
    numEl6.textContent = counts6;
    numEl7.textContent = counts7;
    nav1El.textContent = counts1+" items added " ;
    //nav2El.textContent = "Add items RS: " +existingProduct.price * existingProduct.quantity;//cart[0].price*cart[0].quantity;//+existingProduct.quantity * existingProduct.price;
    
    saveCart();
    prices = cart[0].quantity*cart[0].price;
};

function deleteToCart(productName, productPrice) {
    counts1 -= 1;
    counts2 -= 1;
    counts3 -= 1;
    counts4 -= 1;
    counts5 -= 1;
    counts6 -= 1;
    counts7 -= 1;
    loadCart();
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity -= 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    //prices = existingProduct.quantity * existingProduct.price;
    numEl.textContent = counts1;
    numEl2.textContent = counts2;
    numEl3.textContent = counts3;
    numEl4.textContent = counts4;
    numEl5.textContent = counts5;
    numEl6.textContent = counts6;
    numEl7.textContent = counts7;
    nav1El.textContent = counts1+" items added " ;
    //nav2El.textContent = "Add items RS: " +existingProduct.price * existingProduct.quantity;//cart[0].price*cart[0].quantity;//+existingProduct.quantity * existingProduct.price;
    
    saveCart();
    prices = cart[0].quantity*cart[0].price;
};

function updateCart() {
    loadCart();
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');

    if (cartItemsContainer && totalPriceContainer) {
        cartItemsContainer.innerHTML = '';

        let totalPrice = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.classList.add = "cart_items";
            cartItem.style.padding = "12px";
            cartItem.innerText = `${item.name} - $${item.price} x ${item.quantity} = $${itemTotal.toFixed(2)}`;
            cartItemsContainer.appendChild(cartItem);
            
            
        });
        
        totalPriceContainer.innerText = totalPrice.toFixed(2);
    }
}

// Checkout function
function checkout() {
    if (cart.length === 0){
        alert('Your cart is empty.');
        return;
    }

    alert('Thank you for your purchase!');
    cart = [];
    saveCart();
    updateCart();
    //mobile.value = "";
}

// Load the cart on script load
loadCart();


//addEventListener

let allEl = document.getElementById("all");
let vegSoupsEl = document.getElementById("vegSoups");
let startersEl = document.getElementById("starters");
let pizzaEl = document.getElementById("pizza");
let fryRiceEl = document.getElementById("fryRice");
let noodlesEl = document.getElementById("noodles");
let burgerEl = document.getElementById("burger");
let snacksEl = document.getElementById("snacks");

let vegSoupsBtnEl = document.getElementById("vegSoupsBtn");
let startersBtnEl = document.getElementById("startersBtn");
let pizzaBtnEl = document.getElementById("pizzaBtn");
let fryRiceBtnEl = document.getElementById("fryRiceBtn");
let noodlesBtnEl = document.getElementById("noodlesBtn");
let burgersBtnEl = document.getElementById("burgersBtn");
let snacksBtnEl = document.getElementById("snacksBtn");
let rollBtnEl = document.getElementById("rollBtn");
let cakesAndPastriesBtnEl = document.getElementById("cakesAndPastriesBtn");
let drinksBeveragesBtnEl = document.getElementById("drinksBeveragesBtn");
let backBtnEl = document.getElementById("back");

let foodCartEl = document.getElementById("foodCart");
let vegSoupContainerEl = document.getElementById("vegSoupContainer");
let startersContainerEl = document.getElementById("startersContainer");
let fryRiceContainerEl = document.getElementById("fryRiceContainer");
let noodlesContainerEl = document.getElementById("noodlesContainer");
let burgerContainerEl = document.getElementById("burgerContainer");
let pizzaContainerEl = document.getElementById("pizzaContainer");
let snacksContainerEl = document.getElementById("snacksContainer");
let combosContainerEl = document.getElementById("combosContainer");
let rollContainerEl = document.getElementById("rollContainer");
let cakesAndPastriesContainerEl = document.getElementById("cakesAndPastriesContainer");
let DrinksContainerEl = document.getElementById("DrinksContainer");

let paneersoupaddCartEl = document.getElementById("paneerSoupAddCart");
let addBtnEl = document.getElementById("addBtns");
let minusEl = document.getElementById("minus");
let plusEl = document.getElementById("plus");
let numEl = document.getElementById("num");
let manchuriansoupaddCartEl = document.getElementById("manchurianSoupAddCart");
let addBtnEl2 = document.getElementById("addBtns2");
let minusEl2 = document.getElementById("minus2");
let plusEl2 = document.getElementById("plus2");
let numEl2 = document.getElementById("num2");
let vegsoupAddCartEl = document.getElementById("vegsoupAddCart");
let addBtnEl1a = document.getElementById("addBtns1.1");
let minusEl1a = document.getElementById("minus1.1");
let plusEl1a = document.getElementById("plus1.1");
let numEl1a = document.getElementById("num1.1");
let vegHotAndSourSoupAddCartEl = document.getElementById("vegHotAndSourSoupAddCart");
let addBtnEl1b = document.getElementById("addBtns1.2");
let minusEl1b = document.getElementById("minus1.2");
let plusEl1b = document.getElementById("plus1.2");
let numEl1b = document.getElementById("num1.2");
let chillipaneeraddCartEl = document.getElementById("chilliPaneerAddCart");
let addBtnEl3 = document.getElementById("addBtns3");
let minusEl3 = document.getElementById("minus3");
let plusEl3 = document.getElementById("plus3");
let numEl3 = document.getElementById("num3");
let chillimanchurianaddCartEl = document.getElementById("chilliManchurianAddCart");
let addBtnEl4 = document.getElementById("addBtns4");
let minusEl4 = document.getElementById("minus4");
let plusEl4 = document.getElementById("plus4");
let numEl4 = document.getElementById("num4");
let chillipotatoaddCartEl = document.getElementById("chilliPotatoAddCart");
let addBtnEl5 = document.getElementById("addBtns5");
let minusEl5 = document.getElementById("minus5");
let plusEl5 = document.getElementById("plus5");
let numEl5 = document.getElementById("num5");
let paneerPakodaaddCartEl = document.getElementById("paneerPakodaAddCart");
let addBtnEl6 = document.getElementById("addBtns6");
let minusEl6 = document.getElementById("minus6");
let plusEl6 = document.getElementById("plus6");
let numEl6 = document.getElementById("num6");
let manchurianfriedriceaddCartEl = document.getElementById("manchurianFriedRiceAddCart");
let addBtnEl7 = document.getElementById("addBtns7");
let minusEl7 = document.getElementById("minus7");
let plusEl7 = document.getElementById("plus7");
let numEl7 = document.getElementById("num7");
let paneerFriedRiceAddCartEl = document.getElementById("paneerFriedRiceAddCart");
let addBtnEl8 = document.getElementById("addBtns8");
let minusEl8 = document.getElementById("minus8");
let plusEl8 = document.getElementById("plus8");
let numEl8 = document.getElementById("num8");
let vegRiceAddCartEl = document.getElementById("vegRiceAddCart");
let addBtnEl9 = document.getElementById("addBtns9");
let minusEl9 = document.getElementById("minus9");
let plusEl9 = document.getElementById("plus9");
let numEl9 = document.getElementById("num9");
let schezwanFriedriceAddCartEl = document.getElementById("schezwanFriedriceAddCart");
let addBtnEl10 = document.getElementById("addBtns10");
let minusEl10 = document.getElementById("minus10");
let plusEl10 = document.getElementById("plus10");
let numEl10 = document.getElementById("num10");
let manchurianandpaneerfriedRiceAddCartEl = document.getElementById("manchurianandpaneerfriedRiceAddCart");
let addBtnEl2a = document.getElementById("addBtns2.1");
let minusEl2a = document.getElementById("minus2.1");
let plusEl2a = document.getElementById("plus2.1");
let numEl2a = document.getElementById("num2.1");
let vegChowmienAddCartEl = document.getElementById("vegChowmienAddCart");
let addBtnEl11 = document.getElementById("addBtns11");
let minusEl11 = document.getElementById("minus11");
let plusEl11 = document.getElementById("plus11");
let numEl11 = document.getElementById("num11");
let paneerChowmienAddCartEl = document.getElementById("paneerChowmienAddCart");
let addBtnEl12 = document.getElementById("addBtns12");
let minusEl12 = document.getElementById("minus12");
let plusEl12 = document.getElementById("plus12");
let numEl12 = document.getElementById("num12");
let SchezwanChowmienAddCartEl = document.getElementById("SchezwanChowmienAddCart");
let addBtnEl13 = document.getElementById("addBtns13");
let minusEl13 = document.getElementById("minus13");
let plusEl13 = document.getElementById("plus13");
let numEl13 = document.getElementById("num13");
let manchurianChowmienAddCartEl = document.getElementById("manchurianChowmienAddCart");
let addBtnEl14 = document.getElementById("addBtns14");
let minusEl14 = document.getElementById("minus14");
let plusEl14 = document.getElementById("plus14");
let numEl14 = document.getElementById("num14");
let manchurianPaneerChowmienAddCartEl = document.getElementById("manchurianPaneerChowmienAddCart");
let addBtnEl15 = document.getElementById("addBtns15");
let minusEl15 = document.getElementById("minus15");
let plusEl15 = document.getElementById("plus15");
let numEl15 = document.getElementById("num15");
let cheeseBurgerAddCartEl = document.getElementById("cheeseBurgerAddCart");
let addBtnEl16 = document.getElementById("addBtns16");
let minusEl16 = document.getElementById("minus16");
let plusEl16 = document.getElementById("plus16");
let numEl16 = document.getElementById("num16");
let vegBurgerAddCartEl = document.getElementById("vegBurgerAddCart");
let addBtnEl17 = document.getElementById("addBtns17");
let minusEl17 = document.getElementById("minus17");
let plusEl17 = document.getElementById("plus17");
let numEl17 = document.getElementById("num17");
let mayonnaiseBurgerAddCartEl = document.getElementById("mayonnaiseBurgerAddCart");
let addBtnEl18 = document.getElementById("addBtns18");
let minusEl18 = document.getElementById("minus18");
let plusEl18 = document.getElementById("plus18");
let numEl18 = document.getElementById("num18");
let paneerBurgerAddCartEl = document.getElementById("paneerBurgerAddCart");
let addBtnEl19 = document.getElementById("addBtns19");
let minusEl19 = document.getElementById("minus19");
let plusEl19 = document.getElementById("plus19");
let numEl19 = document.getElementById("num19");
let cheeseAndPaneerBurgerAddCartEl = document.getElementById("cheeseAndPaneerBurgerAddCart");
let addBtnEl20 = document.getElementById("addBtns20");
let minusEl20 = document.getElementById("minus20");
let plusEl20 = document.getElementById("plus20");
let numEl20 = document.getElementById("num20");
let breadPakodaAddCartEl = document.getElementById("breadPakodaAddCart");
let addBtnEl21 = document.getElementById("addBtns21");
let minusEl21 = document.getElementById("minus21");
let plusEl21 = document.getElementById("plus21");
let numEl21 = document.getElementById("num21");
let springRollAddCartEl = document.getElementById("springRollAddCart");
let addBtnEl22 = document.getElementById("addBtns22");
let minusEl22 = document.getElementById("minus22");
let plusEl22 = document.getElementById("plus22");
let numEl22 = document.getElementById("num22");
let vegFriesAddCartEl = document.getElementById("vegFriesAddCart");
let addBtnEl23 = document.getElementById("addBtns23");
let minusEl23 = document.getElementById("minus23");
let plusEl23 = document.getElementById("plus23");
let numEl23 = document.getElementById("num23");
let mayoFriesAddCartEl = document.getElementById("mayoFriesAddCart");
let addBtnEl24 = document.getElementById("addBtns24");
let minusEl24 = document.getElementById("minus24");
let plusEl24 = document.getElementById("plus24");
let numEl24 = document.getElementById("num24");
let periPeriFriesAddCartEl = document.getElementById("periPeriFriesAddCart");
let addBtnEl25 = document.getElementById("addBtns25");
let minusEl25 = document.getElementById("minus25");
let plusEl25 = document.getElementById("plus25");
let numEl25 = document.getElementById("num25");
let frenchFriesAddCartEl = document.getElementById("frenchFriesAddCart");
let addBtnEl26 = document.getElementById("addBtns26");
let minusEl26 = document.getElementById("minus26");
let plusEl26 = document.getElementById("plus26");
let numEl26 = document.getElementById("num26");
let honeyChilliPotatoAddCartEl = document.getElementById("honeyChilliPotatoAddCart");
let addBtnEl27 = document.getElementById("addBtns27");
let minusEl27 = document.getElementById("minus27");
let plusEl27 = document.getElementById("plus27");
let numEl27 = document.getElementById("num27");
let chilliPaneerAndFriedriceAddCartEl = document.getElementById("chilliPaneerAndFriedriceAddCart");
let addBtnEl28 = document.getElementById("addBtns28");
let minusEl28 = document.getElementById("minus28");
let plusEl28 = document.getElementById("plus28");
let numEl28 = document.getElementById("num28");
let ManchurianChilliWithRiceAddCartEl = document.getElementById("ManchurianChilliWithRiceAddCart");
let addBtnEl29 = document.getElementById("addBtns29");
let minusEl29 = document.getElementById("minus29");
let plusEl29 = document.getElementById("plus29");
let numEl29 = document.getElementById("num29");
let cheesePizzawithKulhadPizzaAddCartEl = document.getElementById("cheesePizzawithKulhadPizzaAddCart");
let addBtnEl30 = document.getElementById("addBtns30");
let minusEl30 = document.getElementById("minus30");
let plusEl30 = document.getElementById("plus30");
let numEl30 = document.getElementById("num30");
let deepfryrollAddCartEl = document.getElementById("deepfryrollAddCart");
let addBtnEl31 = document.getElementById("addBtns31");
let minusEl31 = document.getElementById("minus31");
let plusEl31 = document.getElementById("plus31");
let numEl31 = document.getElementById("num31");

/// pizzaEl

let mixVegPizzaAddCartEl = document.getElementById("mixVegPizzaAddCart");
let addBtnEl32 = document.getElementById("addBtns32");
let minusEl32 = document.getElementById("minus32");
let plusEl32 = document.getElementById("plus32");
let numEl32 = document.getElementById("num32");
let cheesePizzaAddCartEl = document.getElementById("cheesePizzaAddCart");
let addBtnEl33 = document.getElementById("addBtns33");
let minusEl33 = document.getElementById("minus33");
let plusEl33 = document.getElementById("plus33");
let numEl33 = document.getElementById("num33");
let paneeerPizzaAddCartEl = document.getElementById("paneeerPizzaAddCart");
let addBtnEl34 = document.getElementById("addBtns34");
let minusEl34 = document.getElementById("minus34");
let plusEl34 = document.getElementById("plus33");
let numEl34 = document.getElementById("num34");
let doubleCheesePizzaAddCartEl = document.getElementById("doubleCheesePizzaAddCart");
let addBtnEl35 = document.getElementById("addBtns35");
let minusEl35 = document.getElementById("minus35");
let plusEl35 = document.getElementById("plus35");
let numEl35 = document.getElementById("num35");
let cheeseandPaneerPizzaAddCartEl = document.getElementById("cheeseandPaneerPizzaAddCart");
let addBtnEl36 = document.getElementById("addBtns36");
let minusEl36 = document.getElementById("minus36");
let plusEl36 = document.getElementById("plus36");
let numEl36 = document.getElementById("num36");
let sweetCornPizzaAddCartEl = document.getElementById("sweetCornPizzaAddCart");
let addBtnEl37 = document.getElementById("addBtns37");
let minusEl37 = document.getElementById("minus37");
let plusEl37 = document.getElementById("plus37");
let numEl37 = document.getElementById("num37");
let handcraftedOnionPizzaAddCartEl = document.getElementById("handcraftedOnionPizzaAddCart");
let addBtnEl38 = document.getElementById("addBtns38");
let minusEl38 = document.getElementById("minus38");
let plusEl38 = document.getElementById("plus38");
let numEl38 = document.getElementById("num38");
let sweetCornAndPaneerPizzaAddCartEl = document.getElementById("sweetCornAndPaneerPizzaAddCart");
let addBtnEl39 = document.getElementById("addBtns39");
let minusEl39 = document.getElementById("minus39");
let plusEl39 = document.getElementById("plus39");
let numEl39 = document.getElementById("num39");
let onionAndPaneerPizzaHandcraftedAddCartEl = document.getElementById("onionAndPaneerPizzaHandcraftedAddCart");
let addBtnEl40 = document.getElementById("addBtns40");
let minusEl40 = document.getElementById("minus40");
let plusEl40 = document.getElementById("plus40");
let numEl40 = document.getElementById("num40");
let cheeseAndPaneerPizzaHandcraftedAddCartEl = document.getElementById("cheeseAndPaneerPizzaHandcraftedAddCart");
let addBtnEl41 = document.getElementById("addBtns41");
let minusEl41 = document.getElementById("minus41");
let plusEl41 = document.getElementById("plus41");
let numEl41 = document.getElementById("num41");
let PaneerTikkaPizzaAddCartEl = document.getElementById("PaneerTikkaPizzaAddCart");
let addBtnEl42 = document.getElementById("addBtns42");
let minusEl42 = document.getElementById("minus42");
let plusEl42 = document.getElementById("plus42");
let numEl42 = document.getElementById("num42");
let cheeseBombaySpecialPizzaAddCartEl = document.getElementById("cheeseBombaySpecialPizzaAddCart");
let addBtnEl43 = document.getElementById("addBtns43");
let minusEl43 = document.getElementById("minus43");
let plusEl43 = document.getElementById("plus43");
let numEl43 = document.getElementById("num43");
let RoyalBombayPizzaAddCartEl = document.getElementById("RoyalBombayPizzaAddCart");
let addBtnEl44 = document.getElementById("addBtns44");
let minusEl44 = document.getElementById("minus44");
let plusEl44 = document.getElementById("plus44");
let numEl44 = document.getElementById("num44");
let heartPizzaAddCartEl = document.getElementById("heartPizzaAddCart");
let addBtnEl45 = document.getElementById("addBtns45");
let minusEl45 = document.getElementById("minus45");
let plusEl45 = document.getElementById("plus45");
let numEl45 = document.getElementById("num45");
let kulladPizzaAddCartEl = document.getElementById("kulladPizzaAddCart");
let addBtnEl4a = document.getElementById("addBtns4a");
let minusEl4a = document.getElementById("minus4a");
let plusEl4a = document.getElementById("plus4a");
let numEl4a = document.getElementById("num4a");

let strawberryCake500gAddCartEl = document.getElementById("strawberryCake500gAddCart");
let addBtnEl46 = document.getElementById("addBtns46");
let minusEl46 = document.getElementById("minus46");
let plusEl46 = document.getElementById("plus46");
let numEl46 = document.getElementById("num46");
let redVelvetCake500gAddCartEl = document.getElementById("redVelvetCake500gAddCart");
let addBtnEl47 = document.getElementById("addBtns47");
let minusEl47 = document.getElementById("minus47");
let plusEl47 = document.getElementById("plus47");
let numEl47 = document.getElementById("num47");
let blackForestCake500gAddCartEl = document.getElementById("blackForestCake500gAddCart");
let addBtnEl48 = document.getElementById("addBtns48");
let minusEl48 = document.getElementById("minus48");
let plusEl48 = document.getElementById("plus48");
let numEl48 = document.getElementById("num48");
let butterscotchCake500gAddCartEl = document.getElementById("butterscotchCake500gAddCart");
let addBtnEl49 = document.getElementById("addBtns49");
let minusEl49 = document.getElementById("minus49");
let plusEl49 = document.getElementById("plus49");
let numEl49 = document.getElementById("num49");
let vanillaCake500gAddCartEl = document.getElementById("vanillaCake500gAddCart");
let addBtnEl50 = document.getElementById("addBtns50");
let minusEl50 = document.getElementById("minus50");
let plusEl50 = document.getElementById("plus50");
let numEl50 = document.getElementById("num50");
let pineappleCake500gAddCartEl = document.getElementById("pineappleCake500gAddCart");
let addBtnEl51 = document.getElementById("addBtns51");
let minusEl51 = document.getElementById("minus51");
let plusEl51 = document.getElementById("plus51");
let numEl51 = document.getElementById("num51");
let chocalateCake500gAddCartEl = document.getElementById("chocalateCake500gAddCart");
let addBtnEl52 = document.getElementById("addBtns52");
let minusEl52 = document.getElementById("minus52");
let plusEl52 = document.getElementById("plus52");
let numEl52 = document.getElementById("num52");
let whiteForestCake500gAddCartEl = document.getElementById("whiteForestCake500gAddCart");
let addBtnEl53 = document.getElementById("addBtns53");
let minusEl53 = document.getElementById("minus53");
let plusEl53 = document.getElementById("plus53");
let numEl53 = document.getElementById("num53");
let chocalatePastryAddCartEl = document.getElementById("chocalatePastryAddCart");
let addBtnEl54 = document.getElementById("addBtns54");
let minusEl54 = document.getElementById("minus54");
let plusEl54 = document.getElementById("plus54");
let numEl54 = document.getElementById("num54");
let butterscotchPastryAddCartEl = document.getElementById("butterscotchPastryAddCart");
let addBtnEl55 = document.getElementById("addBtns55");
let minusEl55 = document.getElementById("minus55");
let plusEl55 = document.getElementById("plus55");
let numEl55 = document.getElementById("num55");
let pineapplePastryAddCartEl = document.getElementById("pineapplePastryAddCart");
let addBtnEl56 = document.getElementById("addBtns56");
let minusEl56 = document.getElementById("minus56");
let plusEl56 = document.getElementById("plus56");
let numEl56 = document.getElementById("num56");
let redVelvetPastryAddCartEl = document.getElementById("redVelvetPastryAddCart");
let addBtnEl57 = document.getElementById("addBtns57");
let minusEl57 = document.getElementById("minus57");
let plusEl57 = document.getElementById("plus57");
let numEl57 = document.getElementById("num57");

///Drinks  
let specialCreamLassiAddCartEl = document.getElementById("specialCreamLassiAddCart");
let addBtnEl58 = document.getElementById("addBtns58");
let minusEl58 = document.getElementById("minus58");
let plusEl58 = document.getElementById("plus58");
let numEl58 = document.getElementById("num58");
let badamShakeAddCartEl = document.getElementById("badamShakeAddCart");
let addBtnEl59 = document.getElementById("addBtns59");
let minusEl59 = document.getElementById("minus59");
let plusEl59 = document.getElementById("plus59");
let numEl59 = document.getElementById("num59");
let mausamiJuiceAddCartEl = document.getElementById("mausamiJuiceAddCart");
let addBtnEl60 = document.getElementById("addBtns60");
let minusEl60 = document.getElementById("minus60");
let plusEl60 = document.getElementById("plus60");
let numEl60 = document.getElementById("num60");
let pineappleJuiceAddCartEl = document.getElementById("pineappleJuiceAddCart");
let addBtnEl61 = document.getElementById("addBtns61");
let minusEl61 = document.getElementById("minus61");
let plusEl61 = document.getElementById("plus61");
let numEl61 = document.getElementById("num61");
let annarJuiceAddCartEl = document.getElementById("annarJuiceAddCart");
let addBtnEl62 = document.getElementById("addBtns62");
let minusEl62 = document.getElementById("minus62");
let plusEl62 = document.getElementById("plus62");
let numEl62 = document.getElementById("num62");


let navbarEl = document.getElementById("navbar");
let nav1El = document.getElementById("nav1");
let nav2El = document.getElementById("nav2");
let nav3El = document.getElementById("nav3");
let payEl = document.getElementById("payment");
let paymentEl = document.getElementById("payments");

function payment() {
    window.location.href = 'cart.html';
};
function backToOrder() {
    window.location.href = "creativetask4.html";
}
////food catr btn
{
function allBtn() {
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.display = "none";
    fryRiceContainerEl.style.display = "none";
    noodlesContainerEl.style.display = "none";
    burgerContainerEl.style.display = "none";
    snacksContainerEl.style.display = "none";
    backBtnEl.style.display = "none";
    combosContainerEl.style.display = "none";
    rollContainerEl.style.display = "none";
    pizzaContainerEl.style.display = "none";
    cakesAndPastriesContainerEl.style.display = "none";
    DrinksContainerEl.style.display = "none";
    foodCartEl.style.cssText = `
        display: grid;
        flex-direction: row;
        grid-template-columns: repeat(auto-fill,
                        minmax(150px, 1fr));
        width: 100%;
    `;
}

function back() {
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.display = "none";
    fryRiceContainerEl.style.display = "none";
    noodlesContainerEl.style.display = "none";
    burgerContainerEl.style.display = "none";
    snacksContainerEl.style.display = "none";
    combosContainerEl.style.display = "none";
    rollContainerEl.style.display = "none";
    pizzaContainerEl.style.display = "none";
    cakesAndPastriesContainerEl.style.display = "none";
    DrinksContainerEl.style.display = "none";
    foodCartEl.style.cssText = `
        display: grid;
        flex-direction: row;
        justify-content: center;
        grid-template-columns: repeat(auto-fill,
                        minmax(150px, 1fr));
        width: 100%;
    `;
}
function vegSoupsBtn() {
    foodCartEl.style.display = "none";
    startersContainerEl.style.display = "none";
    backBtnEl.style.display = "block";
    vegSoupContainerEl.style.cssText = `
        display: flex;
        grid-template-columns: repeat(auto-fill,
                        minmax(150px, 1fr));
        width: 100%;
        flex-direction: column;
        justify-content: center;
    `;
}
function startersBtn() {
    foodCartEl.style.display = "none";
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.cssText = `
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;
}
function fryRiceBtn() {
    foodCartEl.style.display = "none";
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.display = "none";
    fryRiceContainerEl.style.cssText = `
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;
}
function noodlesBtn() {
    foodCartEl.style.display = "none";
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.display = "none";
    fryRiceContainerEl.style.display = "none";
    noodlesContainerEl.style.cssText = `
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;
}
function burgerBtn() {
    foodCartEl.style.display = "none";
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.display = "none";
    fryRiceContainerEl.style.display = "none";
    noodlesContainerEl.style.display = "none";
    burgerContainerEl.style.cssText = `
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;
}
function snacksBtn() {
    foodCartEl.style.display = "none";
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.display = "none";
    fryRiceContainerEl.style.display = "none";
    noodlesContainerEl.style.display = "none";
    burgerContainerEl.style.display = "none";
    snacksContainerEl.style.cssText = `
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;
}
function combosBtn() {
    foodCartEl.style.display = "none";
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.display = "none";
    fryRiceContainerEl.style.display = "none";
    noodlesContainerEl.style.display = "none";
    burgerContainerEl.style.display = "none";
    snacksContainerEl.style.display = "none";
    combosContainerEl.style.cssText = `
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;
}
function rollBtn() {
    foodCartEl.style.display = "none";
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.display = "none";
    fryRiceContainerEl.style.display = "none";
    noodlesContainerEl.style.display = "none";
    burgerContainerEl.style.display = "none";
    snacksContainerEl.style.display = "none";
    combosContainerEl.style.display = "none";
    rollContainerEl.style.cssText = `
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;
}
function pizzaBtn() {
    foodCartEl.style.display = "none";
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.display = "none";
    fryRiceContainerEl.style.display = "none";
    noodlesContainerEl.style.display = "none";
    burgerContainerEl.style.display = "none";
    snacksContainerEl.style.display = "none";
    combosContainerEl.style.display = "none";
    rollContainerEl.style.display = "none";
    pizzaContainerEl.style.cssText = `
        display: flex; 
        flex-direction: column;
        justify-content: center;
    `;
}
function cakesAndPastriesBtn() {
    foodCartEl.style.display = "none";
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.display = "none";
    fryRiceContainerEl.style.display = "none";
    noodlesContainerEl.style.display = "none";
    burgerContainerEl.style.display = "none";
    snacksContainerEl.style.display = "none";
    combosContainerEl.style.display = "none";
    rollContainerEl.style.display = "none";
    pizzaContainerEl.style.display = "none";
    cakesAndPastriesContainerEl.style.cssText = `
        display: grid; !important
        grid-template-columns: repeat(auto-fill,
                        minmax(150px, 1fr));
        width: 100%;
        flex-direction: column;
        justify-content: center;
    `;
}
function drinksBeveragesBtn() {
    foodCartEl.style.display = "none";
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.display = "none";
    fryRiceContainerEl.style.display = "none";
    noodlesContainerEl.style.display = "none";
    burgerContainerEl.style.display = "none";
    snacksContainerEl.style.display = "none";
    combosContainerEl.style.display = "none";
    rollContainerEl.style.display = "none";
    pizzaContainerEl.style.display = "none";
    cakesAndPastriesContainerEl.style.display = "none";
    DrinksContainerEl.style.cssText = `
        display: grid; !important
        grid-template-columns: repeat(auto-fill,
                        minmax(150px, 1fr));
        width: 100%;
        flex-direction: column;
        justify-content: center;
    `;
}

}
{
let count = 0;
function paneerSoupAddCart() {
    count += 1;
    paneersoupaddCartEl.style.display = "none";
    addBtnEl.style.display = "block";
    navbarEl.style.display = "flex";
    //nav1El.textContent = count + " item paneersoup.";
    
}
let counter = 0;
function manchurianSoupAddCart() {
    counter += 1;
    manchuriansoupaddCartEl.style.display = "none";
    addBtnEl2.style.display = "block";
    navbarEl.style.display = "flex";
}
function chilliPaneerAddCart() {
    chillipaneeraddCartEl.style.display = "none";
    addBtnEl3.style.display = "block";
    navbarEl.style.display = "flex";
}
function chilliManchurianAddCart() {
    chillimanchurianaddCartEl.style.display = "none";
    addBtnEl4.style.display = "block";
    navbarEl.style.display = "flex";
}
function chilliPotatoAddCart() {
    chillipotatoaddCartEl.style.display = "none";
    addBtnEl5.style.display = "block";
    navbarEl.style.display = "flex";
}
function paneerPakodaAddCart() {
    paneerPakodaaddCartEl.style.display = "none";
    addBtnEl6.style.display = "block";
    navbarEl.style.display = "flex";
}
function manchurianFriedRiceAddCart() {
    manchurianfriedriceaddCartEl.style.display = "none";
    addBtnEl7.style.display = "block";
    navbarEl.style.display = "flex";
}
function paneerFriedRiceAddCart() {
    paneerFriedRiceAddCartEl.style.display = "none";
    addBtnEl8.style.display = "block";
    navbarEl.style.display = "flex";
}
function vegRiceAddCart() {
    vegRiceAddCartEl.style.display = "none";
    addBtnEl9.style.display = "block";
    navbarEl.style.display = "flex";
}
function schezwanFriedriceAddCart() {
    schezwanFriedriceAddCartEl.style.display = "none";
    addBtnEl10.style.display = "block";
    navbarEl.style.display = "flex";
}
function manchurianandpaneerfriedRiceAddCart() {
    manchurianandpaneerfriedRiceAddCartEl.style.display = "none";
    addBtnEl2a.style.display = "block";
    navbarEl.style.display = "flex";
}
function vegChowmienAddCart() {
    vegChowmienAddCartEl.style.display = "none";
    addBtnEl11.style.display = "block";
    navbarEl.style.display = "flex";
}
function paneerChowmienAddCart() {
    paneerChowmienAddCartEl.style.display = "none";
    addBtnEl12.style.display = "block";
    navbarEl.style.display = "flex";
}
function SchezwanChowmienAddCart() {
    SchezwanChowmienAddCartEl.style.display = "none";
    addBtnEl13.style.display = "block";
    navbarEl.style.display = "flex";
}
function manchurianChowmienAddCart() {
    manchurianChowmienAddCartEl.style.display = "none";
    addBtnEl14.style.display = "block";
    navbarEl.style.display = "flex";
}
function manchurianPaneerChowmienAddCart() {
    manchurianPaneerChowmienAddCartEl.style.display = "none";
    addBtnEl15.style.display = "block";
    navbarEl.style.display = "flex";
}
function cheeseBurgerAddCart() {
    cheeseBurgerAddCartEl.style.display = "none";
    addBtnEl16.style.display = "block";
    navbarEl.style.display = "flex";
}
function vegBurgerAddCart() {
    vegBurgerAddCartEl.style.display = "none";
    addBtnEl17.style.display = "block";
    navbarEl.style.display = "flex";
}
function mayonnaiseBurgerAddCart() {
    mayonnaiseBurgerAddCartEl.style.display = "none";
    addBtnEl18.style.display = "block";
    navbarEl.style.display = "flex";
}
function paneerBurgerAddCart() {
    paneerBurgerAddCartEl.style.display = "none";
    addBtnEl19.style.display = "block";
    navbarEl.style.display = "flex";
}
function cheeseAndPaneerBurgerAddCart() {
    cheeseAndPaneerBurgerAddCartEl.style.display = "none";
    addBtnEl20.style.display = "block";
    navbarEl.style.display = "flex";
}
function breadPakodaAddCart() {
    breadPakodaAddCartEl.style.display = "none";
    addBtnEl21.style.display = "block";
    navbarEl.style.display = "flex";
}
function springRollAddCart() {
    springRollAddCartEl.style.display = "none";
    addBtnEl22.style.display = "block";
    navbarEl.style.display = "flex";
}
function vegFriesAddCart() {
    vegFriesAddCartEl.style.display = "none";
    addBtnEl23.style.display = "block";
    navbarEl.style.display = "flex";
}
function mayoFriesAddCart() {
    mayoFriesAddCartEl.style.display = "none";
    addBtnEl24.style.display = "block";
    navbarEl.style.display = "flex";
}
function periPeriFriesAddCart() {
    periPeriFriesAddCartEl.style.display = "none";
    addBtnEl25.style.display = "block";
    navbarEl.style.display = "flex";
}
function frenchFriesAddCart() {
    frenchFriesAddCartEl.style.display = "none";
    addBtnEl26.style.display = "block";
    navbarEl.style.display = "flex";
}
function honeyChilliPotatoAddCart() {
    honeyChilliPotatoAddCartEl.style.display = "none";
    addBtnEl27.style.display = "block";
    navbarEl.style.display = "flex";
}
function chilliPaneerAndFriedriceAddCart() {
    chilliPaneerAndFriedriceAddCartEl.style.display = "none";
    addBtnEl28.style.display = "block";
    navbarEl.style.display = "flex";
}
function ManchurianChilliWithRiceAddCart() {
    ManchurianChilliWithRiceAddCartEl.style.display = "none";
    addBtnEl29.style.display = "block";
    navbarEl.style.display = "flex";
}
function cheesePizzawithKulhadPizzaAddCart() {
    cheesePizzawithKulhadPizzaAddCartEl.style.display = "none";
    addBtnEl30.style.display = "block";
    navbarEl.style.display = "flex";
}
function vegsoupAddCart() {
    vegsoupAddCartEl.style.display = "none";
    addBtnEl1a.style.display = "block";
    navbarEl.style.display = "flex";
}
function vegHotAndSourSoupAddCart() {
    vegHotAndSourSoupAddCartEl.style.display = "none";
    addBtnEl1b.style.display = "block";
    navbarEl.style.display = "flex";
}
function deepfryrollAddCart() {
    deepfryrollAddCartEl.style.display = "none";
    addBtnEl31.style.display = "block";
    navbarEl.style.display = "flex";
}

}
//pizza

function mixVegPizzaAddCart() {
    mixVegPizzaAddCartEl.style.display = "none";
    addBtnEl32.style.display = "block";
    navbarEl.style.display = "flex";
}
function cheesePizzaAddCart() {
    cheesePizzaAddCartEl.style.display = "none";
    addBtnEl33.style.display = "block";
    navbarEl.style.display = "flex";
}
function paneeerPizzaAddCart() {
    cheesePizzaAddCartEl.style.display = "none";
    addBtnEl34.style.display = "block";
    navbarEl.style.display = "flex";
}
function doubleCheesePizzaAddCart() {
    doubleCheesePizzaAddCartEl.style.display = "none";
    addBtnEl35.style.display = "block";
    navbarEl.style.display = "flex";
}
function cheeseandPaneerPizzaAddCart() {
    cheeseandPaneerPizzaAddCartEl.style.display = "none";
    addBtnEl36.style.display = "block";
    navbarEl.style.display = "flex";
}
function sweetCornPizzaAddCart() {
    sweetCornPizzaAddCartEl.style.display = "none";
    addBtnEl37.style.display = "block";
    navbarEl.style.display = "flex";
}
function handcraftedOnionPizzaAddCart() {
    handcraftedOnionPizzaAddCartEl.style.display = "none";
    addBtnEl38.style.display = "block";
    navbarEl.style.display = "flex";
}
function sweetCornAndPaneerPizzaAddCart() {
    sweetCornAndPaneerPizzaAddCartEl.style.display = "none";
    addBtnEl39.style.display = "block";
    navbarEl.style.display = "flex";
}
function onionAndPaneerPizzaHandcraftedAddCart() {
    onionAndPaneerPizzaHandcraftedAddCartEl.style.display = "none";
    addBtnEl40.style.display = "block";
    navbarEl.style.display = "flex";
}
function cheeseAndPaneerPizzaHandcraftedAddCart() {
    cheeseAndPaneerPizzaHandcraftedAddCartEl.style.display = "none";
    addBtnEl41.style.display = "block";
    navbarEl.style.display = "flex";
}
function PaneerTikkaPizzaAddCart() {
    PaneerTikkaPizzaAddCartEl.style.display = "none";
    addBtnEl42.style.display = "block";
    navbarEl.style.display = "flex";
}
function cheeseBombaySpecialPizzaAddCart() {
    cheeseBombaySpecialPizzaAddCartEl.style.display = "none";
    addBtnEl43.style.display = "block";
    navbarEl.style.display = "flex";
}
function RoyalBombayPizzaAddCart() {
    RoyalBombayPizzaAddCartEl.style.display = "none";
    addBtnEl44.style.display = "block";
    navbarEl.style.display = "flex";
}
function heartPizzaAddCart() {
    heartPizzaAddCartEl.style.display = "none";
    addBtnEl45.style.display = "block";
    navbarEl.style.display = "flex";
}
function kulladPizzaAddCart() {
    kulladPizzaAddCartEl.style.display = "none";
    addBtnEl4a.style.display = "block";
    navbarEl.style.display = "flex";
}

function strawberryCake500gAddCart() {
    strawberryCake500gAddCartEl.style.display = "none";
    addBtnEl46.style.display = "block";
    navbarEl.style.display = "flex";
}
function redVelvetCake500gAddCart() {
    redVelvetCake500gAddCartEl.style.display = "none";
    addBtnEl47.style.display = "block";
    navbarEl.style.display = "flex";
}
function blackForestCake500gAddCart() {
    blackForestCake500gAddCartEl.style.display = "none";
    addBtnEl48.style.display = "block";
    navbarEl.style.display = "flex";
}
function butterscotchCake500gAddCart() {
    butterscotchCake500gAddCartEl.style.display = "none";
    addBtnEl49.style.display = "block";
    navbarEl.style.display = "flex";
}
function vanillaCake500gAddCart() {
    vanillaCake500gAddCartEl.style.display = "none";
    addBtnEl50.style.display = "block";
    navbarEl.style.display = "flex";
}
function pineappleCake500gAddCart() {
    pineappleCake500gAddCartEl.style.display = "none";
    addBtnEl51.style.display = "block";
    navbarEl.style.display = "flex";
}
function chocalateCake500gAddCart() {
    chocalateCake500gAddCartEl.style.display = "none";
    addBtnEl52.style.display = "block";
    navbarEl.style.display = "flex";
}
function whiteForestCake500gAddCart() {
    whiteForestCake500gAddCartEl.style.display = "none";
    addBtnEl53.style.display = "block";
    navbarEl.style.display = "flex";
}
function chocalatePastryAddCart() {
    chocalatePastryAddCartEl.style.display = "none";
    addBtnEl54.style.display = "block";
    navbarEl.style.display = "flex";
}
function butterscotchPastryAddCart() {
    butterscotchPastryAddCartEl.style.display = "none";
    addBtnEl55.style.display = "block";
    navbarEl.style.display = "flex";
}
function pineapplePastryAddCart() {
    pineapplePastryAddCartEl.style.display = "none";
    addBtnEl56.style.display = "block";
    navbarEl.style.display = "flex";
}
function redVelvetPastryAddCart() {
    redVelvetPastryAddCartEl.style.display = "none";
    addBtnEl57.style.display = "block";
    navbarEl.style.display = "flex";
}

///Drinks
function specialCreamLassiAddCart() {
    specialCreamLassiAddCartEl.style.display = "none";
    addBtnEl58.style.display = "block";
    navbarEl.style.display = "flex";
}
function badamShakeAddCart() {
    badamShakeAddCartEl.style.display = "none";
    addBtnEl59.style.display = "block";
    navbarEl.style.display = "flex";
}
function mausamiJuiceAddCart() {
    mausamiJuiceAddCartEl.style.display = "none";
    addBtnEl60.style.display = "block";
    navbarEl.style.display = "flex";
}
function pineappleJuiceAddCart() {
    pineappleJuiceAddCartEl.style.display = "none";
    addBtnEl61.style.display = "block";
    navbarEl.style.display = "flex";
}
function annarJuiceAddCart() {
    annarJuiceAddCartEl.style.display = "none";
    addBtnEl62.style.display = "block";
    navbarEl.style.display = "flex";
}

//////
const text = document.getElementById("textAnime");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "TASTY!";
    }, 0);
    setTimeout(() => {
        text.textContent = "HEALTHY!";
    }, 4000);
    setTimeout(() => {
        text.textContent = "SPICY!";
    }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

// for(items of cart) {
//     console.log(items);
//     let names = items.name;
//     let rate = item.price;
//     let quant = item.quantity;
//     const mobile = document.getElementById("mobile");
//     var ready = function() {
//         if (((mobile.value).length) !== 10) {
//             alert("enter your mobile number");
// //         return;
//         }
//         message =  "Users Mobile number: "+mobile.value+" "+names+" "+quant+" items ordered! Total amount: "+(quant*rate);
//         mobile.value = "";
//     }
// }

//const text = "Hello";
// for (let i = 0; i < cart.length; i++) {
//     console.log(cart[i]);

// }
let totalRate = "";


const mobile = document.getElementById('mobile');
const nameEl = document.getElementById('name');
const addressEl = document.getElementById('address');
// cart.forEach(items => {
//     totalRate = items.price*items.quantity;
//     details = "users order "+ items.name+" "+items.price+" "+totalRate;
//     console.log(totalRate);
    
// });
let totalPrices = 0;
let details = " ";
cart.forEach(num => {
    const itemTotals = num.price * num.quantity;
        totalPrices += itemTotals;
        totalRate = `${num.name}: ₹${num.price} x ${num.quantity} = ₹${itemTotals.toFixed(2)} \n `;;
        details += " "+totalRate;
    });
    
var ready = function() {

    
    message = "Name: "+nameEl.value+"\n "+"User mobile Number: "+mobile.value+"\n "+"User Address: "+addressEl.value+"\n "+"\n "+details+"\n Total Amount: ₹"+totalPrices.toFixed(2)+"\nThanks for order.";
    mobile.value = "";
    nameEl.value = "";
    addressEl.value = "";
    
}
// console.log(cart[0].quantity);
 //let names = cart[0].name;
//  let rate = cart[0].price;
//  let quant = cart[0].quantity;
 
var sender = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    return false;
};


// //////
// let cart = [];

// // Load cart from localStorage when the script is loaded
// function loadCart() {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//         cart = JSON.parse(storedCart);
//     }
// }

// // Save cart to localStorage
// function saveCart() {
//     localStorage.setItem('cart', JSON.stringify(cart));
// }

// // Add to cart function
// let counts = 0;
// let price;
// function addToCart(productName, productPrice) {
//     loadCart();
//     counts += 1;
//     const existingProduct = cart.find(item => item.name === productName);

//     if (existingProduct) {
//         existingProduct.quantity += 1;
//     } else {
//         cart.push({ name: productName, price: productPrice, quantity: 1 });
//     } 
//     //price = existingProduct.quantity * existingProduct.price;
//     // nav1El.textContent = existingProduct.name+": "+counts+" Total Price: " +price ;
//     // console.log(existingProduct.price);
//     saveCart();
//     alert(`${productName} added to cart`);
// }
// // function deleteToCart(productName, productPrice) {
// //     loadCart();
// //     counts -= 1;
// //     existingProduct = cart.find(item => item.name === productName);
// //     if(existingProduct) {
// //         existingProduct.quantity -= 1;
// //     } else{
// //         cart.push({ name: productName, price: productPrice, quantity: 1 });
// //     }
// //     // console.log(existingProduct.quantity);
// //     // price = existingProduct.quantity * existingProduct.price;
// //     // nav1El.textContent = existingProduct.name+": "+counts+" Total Price: " +price ;
// //     saveCart();
// // }

// // Update cart display on cart.html
// function updateCart() {
//     loadCart();
//     const cartItemsContainer = document.getElementById('cart-items');
//     const totalPriceContainer = document.getElementById('total-price');

//     if (cartItemsContainer && totalPriceContainer) {
//         cartItemsContainer.innerHTML = '';

//         let totalPrice = 0;
//         cart.forEach(item => {
//             const itemTotal = item.price * item.quantity;
//             totalPrice += itemTotal;

//             const cartItem = document.createElement('div');
//             cartItem.innerText = `${item.name} - $${item.price} x ${item.quantity} = $${itemTotal.toFixed(2)}`;
//             cartItemsContainer.appendChild(cartItem);
//         });

//         totalPriceContainer.innerText = totalPrice.toFixed(2);
//     }
// }

// // Checkout function
// function checkout() {
//     if (cart.length === 0) {
//         alert('Your cart is empty.');
//         return;
//     }

//     alert('Thank you for your purchase!');
//     cart = [];
//     saveCart();
//     updateCart();
// }

// // Load the cart on script load
// loadCart();