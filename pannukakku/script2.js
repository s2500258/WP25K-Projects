const orders = JSON.parse(localStorage.getItem("orders"));

const passwordDiv = document.getElementById('password-div');
const passwordForm = document.getElementById('password-form');
const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');
const errorMessage = document.getElementById('error-message');
const CORRECT_HASH = "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3";
 
document.addEventListener("DOMContentLoaded", function(){
        showOrders(orders);
 });

 // Displaying all orders in separate divs
function showOrders(orders){
const dataContainer = document.getElementById('dataContainer');
dataContainer.innerHTML = "";
    orders.forEach(element => {
        const orderCard = document.createElement('div');
        orderCard.classList.add('data-card');
        orderCard.innerHTML = `<h3>ID: ${element.id}</h3>
                            <p>Asiakkaan nimi: ${element.customerName}</p>
                            <p>Kakun tyypi: ${element.type.name}</p>
                            <p>Täytteet: ${listConvert(element.toppings)}</p>
                            <p>Lisukkeet: ${listConvert(element.extras)}</p>
                            <p>Toimitustapa: ${element.deliveryMethod.name}</p>
                            <p>Kokonaishinta: <b>${element.totalPrice} € </b></p>
                            <select class="statusSelect" id="${element.id}-selector">      
                                <option value="waiting">odottaminen</option>   
                                <option value="ready">valmina</option>                        
                                <option value="delivered">toimitettu</option>
                            </select>
                            <button class="statusBtn" id="${element.id}-Btn">Päivitä tila</button>
                            `;               
                            
        if (element.status == "waiting") {
            orderCard.style.backgroundColor = "yellow";  
        };      
        if (element.status == "ready") {
            orderCard.style.backgroundColor = "lightblue";  
        }; 
        if (element.status == "delivered") {
            orderCard.style.backgroundColor = "lightgreen";  
        };               
        dataContainer.appendChild(orderCard);
        document.getElementById(element.id+"-selector").value = element.status;
    });
}

 // convert object arrays of order to string
 function listConvert(array){
    let str = "";
    array.forEach(element => {
        str += element.name + ', ';
    });
    if (str == "") {
        return str;
    }
    else {
        return str.slice(0, -2);; 
    }
 };

 // changing status of order
 document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('statusBtn')) {
            orders.forEach(order => {
                if (event.target.id.slice(0,-4) == order.id) {
                    order.status = document.getElementById(order.id+'-selector').value;
                }
            });
        showOrders(orders);
        localStorage.setItem("orders", JSON.stringify(orders));
    }
});

// deleting of delivered orders
document.getElementById('deleteDelivered').addEventListener('click', function(){
        orders.forEach((order,index) => {
            if (order.status == 'delivered') {
                orders.splice(index,1);
            }
        });
        showOrders(orders);
        localStorage.setItem("orders", JSON.stringify(orders));
});

// sorting orderfs according to status (waiting -> ready -> delivered)
document.getElementById('sortOrders').addEventListener('click', function(){
        orders.sort((a,b) => {
            return b.status.localeCompare(a.status);
        });
        showOrders(orders);
});

// searching order by id or customer's name
document.getElementById('searchOrder').addEventListener('input', function(){
        search = document.getElementById('searchOrder').value.toUpperCase();
        let filteredOrders = [];
        filteredOrders = orders.filter(order => (
            order.customerName.toUpperCase().includes(search) || order.id.toString().includes(search)));
        showOrders(filteredOrders);
});

// checking password (hash)
passwordForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const enteredPassword = passwordInput.value;
    if (sha256(enteredPassword) === CORRECT_HASH) {
        showContent();
        } else 
    {
        errorMessage.style.display = 'block';
        passwordInput.value = ''; 
        passwordInput.focus();
    }
    });

// show page content after correct password entered 
function showContent() {
    passwordDiv.style.display = 'none';
    document.getElementById('data-display-section').style.display = 'block';
};