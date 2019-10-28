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
    },
    {
		id: "3",
		OrderInfo: {
			createdAt	: "07.08.2000",
			customer	: "Lenya Delivery",
			status		: "Too late",
			shippedAt	: "28.10.2019"
		},
		ShipTo: {
			name: "Leonid Matveenko",
			Address: "25, Bobruiskaya st.",
			ZIP: "13337",
			Region: "Belarus",
			Country: "Belarus"
		},
		CustomerInfo: {
			firstName: "Leonid",
			lastName: "Matveenko",
			address: "25, Bobruiskaya st.",
			phone: "+375447025748",
			email: "ya.leonid2000@yandex.ru"
		},
		products: [
			{
				id			: "1",
				name		: "Lorem Ipsum",
				price		: "54",
				currency	: "EUR",
				quantity	: "10",
				totalPrice	: "540"
			},
			{
				id			: "2",
				name		: "Say Amen",
				price		: "33",
				currency	: "EUR",
				quantity	: "3",
				totalPrice	: "99"
			},
			{
				id			: "3",
				name		: "Love Machine",
				price		: "114",
				currency	: "EUR",
				quantity	: "5",
				totalPrice	: "570"
			},
			{
				id			: "4",
				name		: "Franz Ferdinand",
				price		: "85",
				currency	: "EUR",
				quantity	: "2",
				totalPrice	: "170"
			},
			{
				id			: "5",
				name		: "Big Pleasure",
				price		: "35",
				currency	: "EUR",
				quantity	: "9",
				totalPrice	: "310"
			},
			{
				id			: "6",
				name		: "Beer And Beer",
				price		: "23.25",
				currency	: "EUR",
				quantity	: "15",
				totalPrice	: "348.75"
			},
			{
				id			: "7",
				name		: "Candies",
				price		: "7",
				currency	: "EUR",
				quantity	: "40",
				totalPrice	: "280"
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

    let tableInput = document.querySelector('.line-input');
    tableInput.addEventListener('input', tableInputEvent);
    
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
        statusColor(orderBlock.querySelector('.status'));

    })
}

function statusColor(status){
    switch (status.textContent){
        case 'Accepted': status.style.color = 'green';
        break;
        case 'Pending': status.style.color = 'orange';
        break;
        case 'Too late': status.style.color = 'red'
    }
}

function orderBlockClick(){
    for (i = 0; i < ordersList.length; i++){
        if (ordersList[i].classList == 'order pushed-order'){
             ordersList[i].classList.remove('pushed-order');
          }
      }
    this.classList.add('pushed-order');          
    fullfillContent(this.childNodes[0].childNodes[0].textContent);
}

function fullfillContent(child){
    Orders.forEach((order) => {
        if (('Order '+ order.id) === child)
        {
            let content = document.querySelector('.content');

            //Order info content
            let orderValue = content.querySelector('.order-id');
            let priceValue = content.querySelector('.price');
            let customerValue = content.querySelector('.customer');
            let orderedValue = content.querySelector('.ordered');
            let shippedValue = content.querySelector('.shipped');

            orderValue.textContent = `Order ${order.id}`;
            let total = 0;
            order.products.forEach(product =>{
                total += +product.totalPrice;
            })
            priceValue.textContent = total.toString().replace('.', ',');
            customerValue.textContent = `Customer: ${order.OrderInfo.customer}`
            orderedValue.textContent = `Ordered: ${order.OrderInfo.createdAt}`
            shippedValue.textContent = `Shipped: ${order.OrderInfo.shippedAt}`

            //Shipping info content
            let shipNameValue = content.querySelector('.ship-name');
            let shipStreetValue = content.querySelector('.ship-street');
            let shipZipValue = content.querySelector('.ship-zip');
            let shipRegionValue = content.querySelector('.ship-region');
            let shipCountryValue = content.querySelector('.ship-country');

            shipNameValue.textContent = order.ShipTo.name;
            shipStreetValue.textContent = order.ShipTo.Address;
            shipZipValue.textContent = order.ShipTo.ZIP;
            shipRegionValue.textContent = order.ShipTo.Region;
            shipCountryValue.textContent = order.ShipTo.Country;

            //Customer info content
            let customerNameValue = content.querySelector('.customer-name');
            let customerLastnameValue = content.querySelector('.customer-lastname');
            let customerAddressValue = content.querySelector('.customer-address');
            let customerPhoneValue = content.querySelector('.customer-phone');
            let customerMailValue = content.querySelector('.customer-email');

            customerNameValue.textContent = order.CustomerInfo.firstName;
            customerLastnameValue.textContent = order.CustomerInfo.lastName;
            customerAddressValue.textContent = order.CustomerInfo.address;
            customerPhoneValue.textContent = order.CustomerInfo.phone;
            customerMailValue.textContent = order.CustomerInfo.email;

            //Table content
            table = document.querySelector('#product-table');
            tableBlocks = table.querySelectorAll('tr');
            for (i = 1; i < tableBlocks.length; i++){
                tableBlocks[i].remove();
            }
            order.products.forEach(product =>{
                let tableBlock = document.createElement('tr');
                tableBlock.innerHTML = `<td><p>${product.name}</p>
                                        <p>${product.id}</p></td>
                                        <td><span>${product.price}</span> ${product.currency}</td>
                                        <td>${product.quantity}</td>
                                        <td><span>${product.totalPrice}</span> ${product.currency}</td>`
                table.appendChild(tableBlock);

            })


        }
    })
}

function tableInputEvent(){
    tableBlocks = document.querySelectorAll('tr');

    for (i = 1; i < tableBlocks.length; i++){
        if (tableBlocks[i].tagName == 'TR'){
             tableBlocks[i].classList.add('hidden');
          }
    }

    for (i = 0; i < tableBlocks.length; i++){
        let tableBlocksNodes = tableBlocks[i].childNodes;
        for (j = 0; j < tableBlocksNodes.length; j++){
            if(tableBlocksNodes[j].tagName == 'TD'){
                let tableBlocksInnerNodes = tableBlocksNodes[j].childNodes;
                for (k = 0; k < tableBlocksInnerNodes.length; k++){
                    if(tableBlocksInnerNodes[k].tagName == 'P' || tableBlocksInnerNodes[k].tagName == 'SPAN'){
                        if(tableBlocksInnerNodes[k].textContent.toLocaleLowerCase().indexOf(tableInput.value.toLocaleLowerCase()) >= 0){
                            tableBlocks[i].classList.remove('hidden');
                        }
                      }
                    }
                }
            }
        }

        if(tableInput.value.length == 0){
        for (i = 1; i < tableBlocks.length; i++){
            if (tableBlocks[i].tagName == 'TR'){
                 tableBlocks[i].classList.remove('hidden');
              }
        }
    }
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
