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

    let word = 'Ya sosal menya ebali';
        alert(word.indexOf('ebali') )

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

