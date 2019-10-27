var Orders = [
	{
		id: "1",
		OrderInfo: {
			createdAt	: "10.08.1991",
			customer	: "Alfreds Futterkiste",
			status		: "Accepted",
			shippedAt	: "8.09.1991"
		},
		ShipTo: {
			name: "Maria Anders",
			Address: "Obere Str. 57",
			ZIP: "12209",
			Region: "Germany",
			Country: "Germany"
		},
		CustomerInfo: {
			firstName: "Maria",
			lastName: "Anders",
			address: "Obere Str. 57",
			phone: "030-0074321",
			email: "Maria.Anders@company.com"
		},
		products: [
			{
				id			: "1",
				name		: "Chai",
				price		: "18",
				currency	: "EUR",
				quantity	: "2",
				totalPrice	: "36"
			},
			{
				id			: "2",
				name		: "Aniseed Syrup",
				price		: "10",
				currency	: "EUR",
				quantity	: "3",
				totalPrice	: "30"
			},
			{
				id			: "3",
				name		: "Chef Anton's Cajun Seasoning",
				price		: "22",
				currency	: "EUR",
				quantity	: "2",
				totalPrice	: "44"
			},
			{
				id			: "4",
				name		: "Chef Anton's Gumbo Mix",
				price		: "36",
				currency	: "EUR",
				quantity	: "21",
				totalPrice	: "756"
			},
			{
				id			: "5",
				name		: "Grandma's Boysenberry Spread",
				price		: "25",
				currency	: "EUR",
				quantity	: "5",
				totalPrice	: "125"
			}
		]
	},
	{
		id: "2",
		OrderInfo: {
			createdAt	: "23.12.2006",
			customer	: "Bon app",
			status		: "Pending",
			shippedAt	: "13.02.2007"
		},
		ShipTo: {
			name: "Laurence Lebihan",
			Address: "12, rue des Bouchers",
			ZIP: "13008",
			Region: "France",
			Country: "France"
		},
		CustomerInfo: {
			firstName: "Laurence",
			lastName: "Lebihan",
			address: "12, rue des Bouchers",
			phone: "91.24.45.40",
			email: "Laurence.Lebihan@company.com"
		},
		products: [
			{
				id			: "1",
				name		: "Queso Cabrales",
				price		: "21",
				currency	: "EUR",
				quantity	: "5",
				totalPrice	: "105"
			},
			{
				id			: "2",
				name		: "Queso Manchego La Pastora",
				price		: "38",
				currency	: "EUR",
				quantity	: "3",
				totalPrice	: "114"
			},
			{
				id			: "3",
				name		: "Pavlova",
				price		: "120",
				currency	: "EUR",
				quantity	: "5",
				totalPrice	: "600"
			},
			{
				id			: "4",
				name		: "Sir Rodney's Marmalade",
				price		: "5",
				currency	: "EUR",
				quantity	: "3",
				totalPrice	: "15"
			},
			{
				id			: "5",
				name		: "Genen Shouyu",
				price		: "40",
				currency	: "EUR",
				quantity	: "7",
				totalPrice	: "280"
			},
			{
				id			: "6",
				name		: "Tofu",
				price		: "23.25",
				currency	: "EUR",
				quantity	: "1",
				totalPrice	: "23.25"
			},
			{
				id			: "7",
				name		: "Alice Mutton",
				price		: "32",
				currency	: "EUR",
				quantity	: "39",
				totalPrice	: "1248"
			}
		]
	}
];
    
    let shippingContainer = document.querySelector(".shipping-container");
    let customerContainer = document.querySelector(".customer-container"); 
    let shippingIcon = document.querySelector(".fa-truck");
    let customerIcon = document.querySelector(".fa-users");
    shippingContainer.addEventListener("click", shippingIconClick);
    customerContainer.addEventListener("click", customerIconClick);
    let customerBlock = document.querySelector(".customer-info");
    let shippingBlock = document.querySelector(".shipping-info");

    let input = document.querySelector(".search-input");
    input.addEventListener('input', inputEvent);

    let orders = document.querySelector('.orders');
    let ordersList = orders.childNodes;
    
function fullfillOrders(){
    
    Orders.forEach((order) => {
        let orderBlock = document.createElement('div');
        orderBlock.addEventListener('click', orderBlockClick);
        let leftBlock = document.createElement('div');
        let rightBlock = document.createElement('div');
        leftBlock.classList.add('left');
        rightBlock.classList.add('right');
        leftBlock.innerHTML = `<p class="order-id">Order ${order.id}</p>
                               <p class=customer> ${order.OrderInfo.customer}</p>
                               <p class=shipped> Shipped: ${order.OrderInfo.shippedAt}</p>`
        rightBlock.innerHTML = `<p class="date">${order.OrderInfo.createdAt}</p>
                                <p class=status>${order.OrderInfo.status}</p>`
        orderBlock.appendChild(leftBlock);
        orderBlock.appendChild(rightBlock);
        orderBlock.classList.add('order');
        orders.appendChild(orderBlock)

    })
}

function orderBlockClick(){
    for (i = 0; i < ordersList.length; i++){
        if (ordersList[i].classList == 'order pushed-order'){
             ordersList[i].classList.remove('pushed-order');
          }
      }
    this.classList.add('pushed-order');
}

function inputEvent(){

    for (i = 0; i < ordersList.length; i++){
      if (ordersList[i].classList == 'order'){
           ordersList[i].classList.add('hidden');
        }
    }

    for (i = 0; i < ordersList.length; i++){
        let ordersListNodes = ordersList[i].childNodes;
        if (ordersList[i].classList == 'order hidden'){
            for(j = 0; j < ordersListNodes.length; j++){
                let ordersListInnerNodes = ordersListNodes[j].childNodes;
                if (ordersListNodes[j].classList == 'left' || ordersListNodes[j].classList == 'right')
                {
                    for(k = 0; k < ordersListInnerNodes.length; k++)
                    {
                        if(ordersListInnerNodes[k].textContent.toLocaleLowerCase().indexOf(input.value.toLocaleLowerCase()) >= 0){
                            ordersList[i].classList.remove('hidden');
                        }
                    }
                }
            }
        }
    }

    if (input.value.length == 0){
        for (i = 0; i < ordersList.length; i++){
            if (ordersList[i].classList == 'order hidden'){
                ordersList[i].classList.remove('hidden');
            }
        }
    }
}

function shippingIconClick(){
    shippingIcon.classList.add("chosen-icon");
    shippingIcon.classList.remove("unchosen-icon");
    customerIcon.classList.add("unchosen-icon");
    customerIcon.classList.remove("chosen-icon");
    shippingContainer.classList.remove("unchosen-container");
    shippingContainer.classList.add("chosen-container");   
    customerContainer.classList.remove("chosen-container");
    customerContainer.classList.add("unchosen-container");
    customerBlock.style.display = 'none';
    shippingBlock.style.display = 'block';
}

function customerIconClick(){
    shippingIcon.classList.remove("chosen-icon");
    shippingIcon.classList.add("unchosen-icon");
    customerIcon.classList.remove("unchosen-icon");
    customerIcon.classList.add("chosen-icon");
    shippingContainer.classList.add("unchosen-container");
    shippingContainer.classList.remove("chosen-container");   
    customerContainer.classList.add("chosen-container");
    customerContainer.classList.remove("unchosen-container");
    shippingBlock.style.display = 'none';
    customerBlock.style.display = 'block';
}

fullfillOrders()
