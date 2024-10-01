// Exercise #2 Product

const product = {
  name: "Xiaomi Air Purifier",
  price: 4000,
  ratings: 2.5,
  photo: null,
};
let socialMediaShare = "facebookShare";
// Start code here
console.log(product)

product.ratings = 4.5;
console.log(product.ratings);

product.photo = "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg";
console.log(product.photo);

product["code"] = undefined; //ไม่ต้องมีกะได้ถ้ามะได้ดึงค่าจาก Variable เเละกำหนด value ให้เลย
product.code = "IT0101010";
console.log(product);

product.price = 6000;
console.log(product.price);

delete product.ratings;
console.log(Object.keys(product));


console.log(socialMediaShare)
product[socialMediaShare] = undefined;
console.log(Object.keys(product));

product.socialMediaShare = 45.5;
console.log(product.socialMediaShare);

