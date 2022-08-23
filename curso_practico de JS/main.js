const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const productDetailClose = document.querySelector('.product-detail-close')
const mobile = document.querySelector('.mobile-menu');
const menuCart = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardContainer = document.querySelector('.cards-container');




menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCart.addEventListener('click',toggleCart);
productDetailClose.addEventListener('click', closeProductDetail);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){

    const asideMenuClose = shoppingCartContainer.classList.contains('inactive');

    if(!asideMenuClose){
        shoppingCartContainer.classList.add('inactive')
    }
    closeProductDetail();
  
    mobile.classList.toggle('inactive');
}

function toggleCart(){

    const mobileMenuClose = mobile.classList.contains('inactive');
  
 if(!mobileMenuClose){
    mobile.classList.add('inactive');
 }
 const IsProductDetailClose = productDetailContainer.classList.contains('inactive');
  
 if(!IsProductDetailClose){
    productDetailContainer.classList.add('inactive');
 }
    shoppingCartContainer.classList.toggle('inactive')

 }

 

function openProductDetail(){

  shoppingCartContainer.classList.add('inactive');

  productDetailContainer.classList.remove('inactive')

}


function closeProductDetail(){

    productDetailContainer.classList.add('inactive')

}



const productList = [];

productList.push({
    name: 'Bike',
    price: '$320',
    image: 'https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=1600 alt="bike',
});

productList.push({
    name: 'Cafetera',
    price: '$45',
    image: 'https://exitocol.vtexassets.com/arquivos/ids/6644397/cafetera-prensa-francesa-350ml-cafetera-embolo-acero.jpg?v=637498640782970000 alt="cafetera francesa',
});

productList.push({
    name: 'LG Tone',
    price: '$150',
    image: 'https://www.sony.com.co/image/53d5d860b293bac0afad1a5181e6e02a?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF alt="audifonos',
});


//  <div class="product-card">
//  <img src="https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=1600"
//  alt="" />
// <div class="product-info">
//  <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//  </div>
//  <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="" />
//  </figure>
// </div>
// </div>




for(product of productList){
   const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    //product {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

  
    const divInfo = document.createElement('div');

    /*divInfo.append(product.price, prodcut.name);*/

    const productPrice = document.createElement('p');
    productPrice.innerText =  product.price;
    const productName = document.createElement('p');
    productName.innerText =  product.name;

    productInfo.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);

    productInfo.append(divInfo, productInfoFigure);
    
    productCard.append(productImg, productInfo);

    cardContainer.appendChild(productCard);

}

