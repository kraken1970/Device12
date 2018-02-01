// let wrapCheck1 = document.querySelector(".js-wrap-1");
// let wrapCheck2 = document.querySelector(".js-wrap-2");
// let wrapCheck3 = document.querySelector(".js-wrap-3");

// let btnCheck1 = wrapCheck1.querySelector(".js-rs-ch1");
// let btnCheck2 = wrapCheck2.querySelector(".js-rs-ch2");
// let btnCheck3 = wrapCheck3.querySelector(".js-rs-ch3");

// let delivery = document.querySelector(".content-delivery");
// let warranty = document.querySelector(".content-warranty");
// let credit = document.querySelector(".content-credit");

// btnCheck1.addEventListener('click', (event) => {
//   event.preventDefault();
//   delivery.classList.add("service-content--item_show");
//   wrapCheck1.classList.add("btn-wrap-checkbox-show");
//   btnCheck1.classList.add("checkbox-resise-show");

//   warranty.classList.remove("service-content--item_show");
//   wrapCheck2.classList.remove("btn-wrap-checkbox-show");
//   btnCheck2.classList.remove("checkbox-resise-show");

//   credit.classList.remove("service-content--item_show");
//   wrapCheck3.classList.remove("btn-wrap-checkbox-show");
//   btnCheck3.classList.remove("checkbox-resise-show");
// } );

// btnCheck2.addEventListener('click', (event) => {
//   event.preventDefault();
//   delivery.classList.remove("service-content--item_show");
//   wrapCheck1.classList.remove("btn-wrap-checkbox-show");
//   btnCheck1.classList.remove("checkbox-resise-show");

//   warranty.classList.add("service-content--item_show");
//   wrapCheck2.classList.add("btn-wrap-checkbox-show");
//   btnCheck2.classList.add("checkbox-resise-show");

//   credit.classList.remove("service-content--item_show");
//   wrapCheck3.classList.remove("btn-wrap-checkbox-show");
//   btnCheck3.classList.remove("checkbox-resise-show");
// } );

// btnCheck3.addEventListener('click', (event) => {
//   event.preventDefault();
//   delivery.classList.remove("service-content--item_show");
//   wrapCheck1.classList.remove("btn-wrap-checkbox-show");
//   btnCheck1.classList.remove("checkbox-resise-show");

//   warranty.classList.remove("service-content--item_show");
//   wrapCheck2.classList.remove("btn-wrap-checkbox-show");
//   btnCheck2.classList.remove("checkbox-resise-show");

//   credit.classList.add("service-content--item_show");
//   wrapCheck3.classList.add("btn-wrap-checkbox-show");
//   btnCheck3.classList.add("checkbox-resise-show");
// } );

/*слайдер услуг вар 2*/
( function () {
  let wrapCheck = document.querySelectorAll(".btn-wrap-checkbox");
  let btnCheck = document.querySelectorAll(".checkbox-resise");
  let servises = document.querySelectorAll(".service-content--item");

  for (let i = 0; i < btnCheck.length; i++) {  
    btnCheck[i].onclick = function (xz) {
      for (let j = 0; j <=2; j++) {
        if (j===i) {
          xz.preventDefault();
          servises[j].classList.add("service-content--item_show");
          wrapCheck[j].classList.add("btn-wrap-checkbox-show");
          btnCheck[j].classList.add("checkbox-resise-show");
        } else {
          xz.preventDefault();
          servises[j].classList.remove("service-content--item_show");
          wrapCheck[j].classList.remove("btn-wrap-checkbox-show");
          btnCheck[j].classList.remove("checkbox-resise-show");
        }
      }
    }
  }
})();


(function () {
  let writeUs = document.querySelector(".modal-write-us");
  let openWriteUs = document.querySelector(".write-to-us");
  let closeWriteUs = writeUs.querySelector(".modal-close");

  let overLay = document.querySelector(".modal-overlay");

  let formWriteUs = document.querySelector(".form-write-us");
  let inputName = formWriteUs.querySelector(".name");
  let inputMail = formWriteUs.querySelector(".mail");

  openWriteUs.onclick = function (o) {
    o.preventDefault();
    writeUs.style.display = "block";
    overLay.style.display = "block";
    inputName.focus();
  }

  closeWriteUs.onclick = function (o) {
    o.preventDefault();
    writeUs.style.display = "none";
    overLay.style.display = "none";
    inputName.style.background = "#eaeaea";
    inputMail.style.background = "#eaeaea";
  }

  formWriteUs.addEventListener("submit", function (wr) {
    if (!inputName.value) {
      wr.preventDefault();
      inputName.style.background = "#f6dada";
    }
  });

  formWriteUs.addEventListener("submit", function (wr) {
    if (!inputMail.value) {
      wr.preventDefault();
      inputMail.style.background = "#f6dada";
    }
});


  let mapDevice = document.querySelector(".modal-map")
  let openMap = document.querySelector(".contact-map");
  let closeMap = mapDevice.querySelector(".modal-close");

  openMap.onclick = (o) => {
    o.preventDefault();
    mapDevice.style.display = "block";
    overLay.style.display = "block";
  }

  closeMap.onclick = (o) => {
    o.preventDefault();
    mapDevice.style.display = "none";
    overLay.style.display = "none";
  }

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (mapDevice.style.display === "block") {
        mapDevice.style.display = "none";
        overLay.style.display = "none";
      } else if(writeUs.style.display === "block") {
        writeUs.style.display = "none";
        overLay.style.display = "none";
      }
    }
 });
})();




