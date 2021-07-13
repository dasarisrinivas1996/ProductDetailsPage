console.log("script")
var productData = {
    id: "1",
    name: "Men Navy Blue Solid Sweatshirt",
    preview: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    description: "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    size: [
      1,
      1,
      0,
      1,
      0
    ],
    isAccessory: false,
    brand: "United Colors of Benetton",
    price: 2599
}
var mainWrapper = document.getElementById("product");

var leftColumn = document.createElement("div");
leftColumn.id="left-column";
mainWrapper.appendChild(leftColumn);
var previewImage = document.createElement("img")
previewImage.src = productData.preview;
previewImage.id="preview-image";
leftColumn.appendChild(previewImage);

var rightColumn = document.createElement("div");
rightColumn.id="right-column"
mainWrapper.appendChild(rightColumn);

var productDescription = document.createElement("div");
productDescription.className="product-description";
rightColumn.appendChild(productDescription);

var nameOfProduct = document.createElement("h1");
nameOfProduct.innerHTML=productData.name;
productDescription.appendChild(nameOfProduct);

var brandOfProduct = document.createElement("h4");
brandOfProduct.innerHTML=productData.brand;
productDescription.appendChild(brandOfProduct);

var priceOfProduct = document.createElement("h3");
priceOfProduct.innerHTML = "Price: Rs ";
productDescription.appendChild(priceOfProduct);
 
var priceValue = document.createElement("span");
priceValue.innerHTML=productData.price;
priceValue.id="price";
priceOfProduct.appendChild(priceValue);

var description = document.createElement("div");
description.className="description";
productDescription.appendChild(description);

var descriptionTitle = document.createElement("h3");
descriptionTitle.innerHTML="Description";
description.appendChild(descriptionTitle);

var descriptionText = document.createElement("p");
descriptionText.innerHTML=productData.description;
description.appendChild(descriptionText);

var productPreview = document.createElement("div")
productPreview.className="product-preview";
description.appendChild(productPreview);

var productPreviewTitle = document.createElement("h3");
productPreviewTitle.innerHTML="Product Preview";
productPreview.appendChild(productPreviewTitle);

var previewImages = document.createElement("div");
previewImages.className="previewImg";
productPreview.appendChild(previewImages);


for(var i=0;i<productData.photos.length;i++){
    var imageOfProduct= document.createElement("img");
    imageOfProduct.src=productData.photos[i];
    imageOfProduct.id=i;
    imageOfProduct.className="inactive";
    previewImages.appendChild(imageOfProduct);
}
console.log(previewImages)
var inactiveImage1 = document.getElementById("0");
inactiveImage1.className="active";
inactiveImage1.addEventListener("click",function(){
    previewImage.src=inactiveImage1.src;
    inactiveImage1.className="active";
    inactiveImage2.className="inactive";
    inactiveImage3.className="inactive";
    inactiveImage4.className="inactive";
    inactiveImage5.className="inactive";
})

var inactiveImage2 = document.getElementById("1");
inactiveImage2.addEventListener("click",function(){
    previewImage.src=inactiveImage2.src;
    inactiveImage1.className="inactive";
    inactiveImage2.className="active";
    inactiveImage3.className="inactive";
    inactiveImage4.className="inactive";
    inactiveImage5.className="inactive";
})

var inactiveImage3 = document.getElementById("2");
inactiveImage3.addEventListener("click",function(){
    previewImage.src=inactiveImage3.src;
    inactiveImage1.className="inactive";
    inactiveImage2.className="inactive";
    inactiveImage3.className="active";
    inactiveImage4.className="inactive";
    inactiveImage5.className="inactive";
})

var inactiveImage4 = document.getElementById("3");
inactiveImage4.onclick=function(){
    previewImage.src=inactiveImage4.src;
    inactiveImage1.className="inactive";
    inactiveImage2.className="inactive";
    inactiveImage3.className="inactive";
    inactiveImage4.className="active";
    inactiveImage5.className="inactive";
}

var inactiveImage5 = document.getElementById("4");
inactiveImage5.addEventListener("click",function(){
    previewImage.src=inactiveImage5.src;
    inactiveImage1.className="inactive";
    inactiveImage2.className="inactive";
    inactiveImage3.className="inactive";
    inactiveImage4.className="inactive";
    inactiveImage5.className="active";
})

