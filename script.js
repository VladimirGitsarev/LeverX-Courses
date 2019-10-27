    let shippingContainer = document.querySelector(".shipping-container");
    let customerContainer = document.querySelector(".customer-container"); 
    let shippingIcon = document.querySelector(".fa-truck");
    let customerIcon = document.querySelector(".fa-users");
    shippingContainer.addEventListener("click", shippingIconClick);
    customerContainer.addEventListener("click", customerIconClick);
    let customerBlock = document.querySelector(".customer-info");
    let shippingBlock = document.querySelector(".shipping-info");

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

