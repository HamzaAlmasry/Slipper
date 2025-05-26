
let person = {
  "brand" : [
    {
      "id": 0,
      "img": "img/product/product1.jpeg",
      "img_hover": "img/product/product-1.jpeg",
      "name": "Medical shoes that protect your feet and keep them safe from pain",
      "price": 185,
      "old_price": 225
    },
    {
      "id": 1,
      "img": "img/product/product2.jpeg",
      "img_hover": "img/product/product-2.jpeg",
      "name": "Medical shoes that protect your feet and keep them safe from pain",
      "price": 100,
      "old_price": 120
    },
    {
      "id": 2,
      "img": "img/product/product3.jpeg",
      "img_hover": "img/product/product-3.jpeg",
      "name": "Medical shoes that protect your feet and keep them safe from pain",
      "price": 140,
      "old_price": 200
    },
    {
      "id": 3,
      "img": "img/product/product4.jpeg",
      "img_hover": "img/product/product-4.jpeg",
      "name": "Medical shoes that protect your feet and keep them safe from pain",
      "price": 90,
      "old_price": 110
    },
    {
      "id": 4,
      "img": "img/product/product5.jpeg",
      "img_hover": "img/product/product-5.jpeg",
      "name": "Medical shoes that protect your feet and keep them safe from pain",
      "price": 350,
      "old_price": 420

    },
    {
      "id": 5,
      "img": "img/product/product6.jpeg",
      "img_hover": "img/product/product-6.jpeg",
      "name": "Medical shoes that protect your feet and keep them safe from pain",
      "price": 115,
      "old_price": 235
    },
    {
      "id": 6,
      "img": "img/product/product-1.jpeg",
      "img_hover": "img/product/product1.jpeg",
      "name": "Medical shoes that protect your feet and keep them safe from pain",
      "price": 180
    },
    {
      "id": 7,
      "img": "img/product/product-2.jpeg",
      "img_hover": "img/product/product2.jpeg",
      "name": "Medical shoes that protect your feet and keep them safe from pain",
      "price": 300
    },
    {
      "id": 8,
      "img": "img/product/product-3.jpeg",
      "img_hover": "img/product/product3.jpeg",
      "name": "Medical shoes that protect your feet and keep them safe from pain",
      "price": 250
    },
    {
      "id": 9,
      "img": "img/product/product-4.jpeg",
      "img_hover": "img/product/product4.jpeg",
      "name": "Medical shoes that protect your feet and keep them safe from pain",
      "price": 120
    },
    {
      "id": 10,
      "img": "img/product/product-5.jpeg",
      "img_hover": "img/product/product5.jpeg",
      "name": "Medical shoes that protect your feet and keep them safe from pain",
      "price": 90
    },
    {
      "id": 11,
      "img": "img/product/product-6.jpeg",
      "img_hover": "img/product/product6.jpeg",
      "name": "Medical shoes that protect your feet and keep them safe from pain",
      "price": 129
    }

  ]
};


        const swiper_items_sale = document.getElementById("swiper_items_sale");

        const other_product_swiper = document.getElementById("other_product_swiper");

        const other_product_swiper2 = document.getElementById("other_product_swiper2");


        all_products_json = person.brand

        person.brand.forEach(e => {

          if(e.old_price){

           const percent_disc = Math.floor((e.old_price - e.price) / e.old_price * 100)

             swiper_items_sale.innerHTML += `
                
            <div class="product swiper-slide">
              <div class="icons">
                <span><i onclick ="addToCart(${e.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><i class="fa-solid fa-share"></i></span>
              </div>
              <span class="sale_present">%${percent_disc}</span>
              <div class="img_product">
                <img src="${e.img}" alt="">
                <img class="img_hover" src="${e.img_hover}" alt="">
              </div>
              <h3 class="name_product"><a href="item.html">${e.name}</a></h3>
             <div class="stars">
              <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div class="price">
                <p><span>$${e.price}</span></p>
                <p class="old_price">$${e.old_price}</p>
              </div>
            </div> 
                
                
                
                `;

          }

      
        });

        person.brand.forEach(e => {



             other_product_swiper.innerHTML += `
                
            <div class="product swiper-slide">
              <div class="icons">
                <span><i onclick ="addToCart(${e.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><i class="fa-solid fa-share"></i></span>
              </div>

              <div class="img_product">
                <img src="${e.img}" alt="">
                <img class="img_hover" src="${e.img_hover}" alt="">
              </div>
              <h3 class="name_product"><a href="item.html">${e.name}</a></h3>
             <div class="stars">
              <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div class="price">
                <p><span>$${e.price}</span></p>
              </div>
            </div> 
                
                
                
                `;

      
        });

        person.brand.forEach(e => {



             other_product_swiper2.innerHTML += `
                
            <div class="product swiper-slide">
              <div class="icons">
                <span><i onclick ="addToCart(${e.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><i class="fa-solid fa-share"></i></span>
              </div>

              <div class="img_product">
                <img src="${e.img}" alt="">
                <img class="img_hover" src="${e.img_hover}" alt="">
              </div>
              <h3 class="name_product"><a href="item.html">${e.name}</a></h3>
             <div class="stars">
              <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div class="price">
                <p><span>$${e.price}</span></p>
              </div>
            </div> 
                
                
                
                `;

      
        });

              