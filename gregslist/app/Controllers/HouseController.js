import _houseService from "../Services/HouseService.js"

export default class HouseController {
constructor () {
  console.log("hello from HouseController");
  
}

create(event) {
  event.preventDefault() // prevents the page from refreshing
  let formData = event.target
  let newHouseObject = {
    house: formData.make.value,
    squareFeet: formData.model.value,
    yearBuilt: formData.yearBuilt.value,
    bedrooms: formData.bedrooms.value,
    bathrooms: formData.bathrooms.value,
    garage: formData.garage.value,
    price: formData.price.value,
    imgUrl: formData.imgUrl.value,
  }

}