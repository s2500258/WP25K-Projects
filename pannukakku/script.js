// declaration of variable representing an order
let order = {id:0,customerName:"",type:{name:"",price:""},toppings:[],extras:[],deliveryMethod:{name:"",price:""},status:"waiting",totalPrice:0};

// colors that are used in background of price banner
const colors = ['#27ae60', '#f39c12', '#3498db', '#9b59b6', '#e74c3c'];
let currentColorIndex = 0;

// calculating the total price
function updatePrice(){
    let extrasPrice = 0;
    order.extras.forEach(function(item){
        extrasPrice += parseFloat(item.price);
    });
    return parseFloat(order.type.price) + order.toppings.length + extrasPrice + parseFloat(order.deliveryMethod.price);
};

document.addEventListener("DOMContentLoaded", function(){
    const mainForm = document.getElementById("pancakeForm");
    order.id = Date.now();

    formReading();

    mainForm.addEventListener("change", function(){
        formReading ();
    });
});

// reading user's data from form
function formReading () {
        let currentPrice = "";
        const customerName = document.getElementById("customerName");
        order.customerName = customerName.value;
        const totalPrice = document.getElementById("totalPrice");
        const totalPriceDisplay = document.getElementById("totalPriceDisplay");

        const typeSelect = document.getElementById("type");
        const selectedType = typeSelect.options[typeSelect.selectedIndex];
        order.type.name = selectedType.innerHTML;
        order.type.price = selectedType.getAttribute("data-price");  

        let delivery = document.querySelector("input[name='delivery']:checked");
        order.deliveryMethod.name = delivery.parentElement.textContent.trim();
        order.deliveryMethod.price = delivery.getAttribute("data-price");

        let toppings = document.querySelectorAll(".topping:checked");
        priceBanner = document.querySelector('.price-banner');

        order.toppings = [];
        toppings.forEach(function(item){
                order.toppings.push({name:item.parentElement.textContent.trim(),price:item.getAttribute("data-price")});
                });

        let extras = document.querySelectorAll(".extra:checked");
        order.extras = [];
        extras.forEach(function(item){
                order.extras.push({name:item.parentElement.textContent.trim(),price:item.getAttribute("data-price")});
                });

// calculating and showing current price
        order.totalPrice  =  updatePrice();     
        currentPrice = order.totalPrice + "€";
        totalPriceDisplay.textContent = currentPrice;
        totalPrice.textContent = currentPrice;
        priceBanner.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length; // going through colors
        console.log(order);
};

// checking order
document.getElementById("seeOrder").addEventListener("click", function(){
    let summary = `<strong>Asiakas: ${order.customerName || "(ei nimeä)"} </strong><br>`;
    summary += `Tyypi: ${order.type.name}<br>Täytteet: `;
    order.toppings.forEach(function(item){
        summary += item.name + ", ";
    });
    summary = summary.slice(0,-2);
    summary += `<br>Lisukeet: `;    
    order.extras.forEach(function(item){
        summary += item.name + ", ";
    });
    summary = summary.slice(0,-2);
    summary += `<br>ToimitusTapa: ${order.deliveryMethod.name}<br>`;
    summary += `<strong>Kokonaishinta: ${totalPriceDisplay.textContent}</strong>`;
    document.getElementById("summaryText").innerHTML = summary;
});

// adding order to array of orders
document.getElementById("sendOrder").addEventListener("click", function(){
    let orders = JSON.parse(localStorage.getItem("orders"));
    if (orders === null) {
        orders = []; 
    }
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
    location.reload();
});