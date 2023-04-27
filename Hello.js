var count=67;
var fullName="IET Krushi seva";
var status=false;
//JSON
//represent object using key value pair
var product={
            "id":12,
            "title":"Supla seeds",
            "description":"Sowing seeds",
            "unitprice":850,
            "quantity":400
};
console.log(product);
product.title="Fertilizer";
product.description="Organic and inorganic Fertilizers";

if(product.title == "Fertilizer")
{
    console.log("We need fertilizer");

}
else{
    console.log("we want seed");
}
console.log(product);

count++;
console.log("Welcome to Javascript Programming");
console.log("result= "+ count);
