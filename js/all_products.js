// open & close filter

var filter = document.querySelector(".filter");

function open_close_filter(){
  filter.classList.toggle("active")
}



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


        const products_dev = document.getElementById("products_dev");


        all_products_json = person.brand

        person.brand.forEach(e => {
            // 
            const old_price_pargrahp = e.old_price ? `<p class="old_price">$${e.old_price}</p>` : "";

           const percent_disc_div = e.old_price ? `<span class="sale_present">%${Math.floor((e.old_price - e.price) / e.old_price * 100)}</span>` : "";

             products_dev.innerHTML += `
                
            <div class="product swiper-slide">
              <div class="icons">
                <span><i onclick ="addToCart(${e.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><i class="fa-solid fa-share"></i></span>
              </div>
              ${percent_disc_div}
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
                ${old_price_pargrahp}
              </div>
            </div> 
                
                
                
                `;



      
        });

 

              