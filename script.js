//All catagories fetch
const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayLesson(json.categories));
};

// active remove fn

const removeAct = () => {
  const cata = document.querySelectorAll(".cataBtnCls");
  cata.forEach((btn) => btn.classList.remove("active"));
};

// single Catagory fetch
const loadBtnCard = (id) => {
  manageSpin(true);
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((json) => {
      removeAct();
      const clickBtn = document.getElementById(`cataBtn-${id}`);

      clickBtn.classList.add("active");

      displayCard(json.plants);
    }); //call same card show fn
};

// single modal data fetch
const loadModalCard = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((json) => {
      displayModal(
        json.plants.name,
        json.plants.image,
        json.plants.category,
        json.plants.price,
        json.plants.description
      );

      
    });
};

//fetch for cart
const loadCart = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((json) => {
      showCart(json.plants.name, json.plants.price, json.plants.id);
    });
};

// All catagory button html making
const displayLesson = (lessons) => {
  const catagoryCont = document.getElementById("catagoryCont");
  catagoryCont.innerHTML = "";
  for (let lesson of lessons) {
    // console.log(lesson.id);

    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button id="cataBtn-${lesson.id}" onclick="loadBtnCard(${lesson.id})"  class="btn btn-ghost cataBtnCls border-green-300 md:border-0 w-full justify-start md:justify-start  hover:bg-[#15803D] hover:text-white">${lesson.category_name}</button>
        
        `;
    catagoryCont.append(btnDiv);
  }
};

//single card content fetch
const loadLessonAll = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayCard(json.plants));
};

//  card html making
const displayCard = (lessons) => {
  const catagoryCont = document.getElementById("CardCont");
  catagoryCont.innerHTML = "";
  for (let lesson of lessons) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
     <div class="card bg-base-100 w-full md:w-68 shadow-sm h-fit">
                <figure class="px-3 pt-3 pb-0">
                  <img
                    src=${lesson.image}
                    alt="Shoes"
                    class="rounded-xl p-0 w-full h-[200px]" />
                </figure>

                <div class="card-body p-3">

                  <div class=" cardUp">
                        <h2 onclick="loadModalCard(${lesson.id})" class="card-title cursor-pointer  text-[.8rem] py-0"> <span class="hover:shadow-md p-1 rounded-xl ">  ${lesson.name}</span>  </h2>
                      <p class="text-[.55rem] py-0 line-clamp-2">${lesson.description}</p>

                  
                  </div>


                    <div class="cardPrice flex  items-center ">
                      <p class=" head-text text-[.7rem]   "><span class="bg-[#CFF0DC] px-2 py-1 rounded-lg">${lesson.category}</span></p>

                      <p class="text-right flex-1 text-[.8rem] ">৳<span>${lesson.price}</span></p>
                    </div>

                     <div class="card-actions pt-2 ">
                       <button  onclick="loadCart(${lesson.id})"  class="btn bg-[#15803D] w-full rounded-2xl text-white">Add to Cart</button>

                    </div>


                </div>
                
             </div> 
        `;
    catagoryCont.append(btnDiv);
  }
  manageSpin(false);
};

//modal making html
const displayModal = (nam, im, cate, price, des) => {
  document.getElementById("mTitle").innerText = nam;
  document.getElementById("mImg").src = im;
  document.getElementById("mCata").innerText = cate;
  document.getElementById("Mprice").innerText = price;
  document.getElementById("mDes").innerText = des;

  document.getElementById("modal_show").showModal();
};
//show cart
let totalPrice = 0;
const showCart = (nam, price, id) => {
  const numPrice = parseInt(price);

  alert(`${nam} has been added to the cart.`);

  const cartCon = document.getElementById("cartCont");
  const divCart = document.createElement("div");
  divCart.innerHTML = `

     <div  class=" singleCart   h-full px-3 py-1  ">
                        <div class="card w-full  bg-[#f5fff9] card-xs shadow-sm">
                              <div class="card-body flex flex-row  justify-between items-center  p-2  ">

                                    <div class="leftBody">
                                      <h2 class="card-title text-[.7rem]">${nam}</h2>
                                      <p class="text-[.6rem]">৳${numPrice} <i 
                                       class=" fa-solid fa-xmark text-gray-500 p-1"></i> 1</p>

                                    </div>
                        

                                        <div class=" card-actions">
                                        <i class="cursor-pointer p-3 cross fa-solid fa-xmark text-gray-500"></i>
                                        </div>
                              </div>
                        </div>

              </div>







    
         `;

  cartCon.append(divCart);
  total(numPrice);
  //remove icon
  const closeBtn = divCart.querySelector(".cross");
  closeBtn.addEventListener("click", () => {
    divCart.remove();

    // console.log(numPrice,totalPrice);

    totalPrice -= numPrice;
    const priceGet = document.getElementById("total");
    priceGet.innerText = "Total: ৳" + totalPrice;
    priceGet.style.display = totalPrice > 0 ? "block" : "none";
  });

  function total(numPrice) {
    totalPrice = totalPrice + numPrice;
    console.log(totalPrice, numPrice);
    const priceGet = document.getElementById("total");

    priceGet.innerText = "Total: ৳" + totalPrice;

    priceGet.style.display = totalPrice > 0 ? "block" : "none";
    cartCon.append(priceGet);
  }
};

function manageSpin(state) {
  if (state == true) {
    document.getElementById("spin").classList.remove("hidden");
    document.getElementById("CardCont").classList.add("hidden");
  } else {
    document.getElementById("CardCont").classList.remove("hidden");
    document.getElementById("spin").classList.add("hidden");
  }
}

loadLesson(); //catagory btn
loadLessonAll(); //All catagory card load
