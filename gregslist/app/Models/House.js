export default class House {
  constructor(data) {
    this.house = data.house
    this.squareFeet = data.squareFeet
    this.yearBuilt = data.yearBuilt
    this.rooms = data.rooms
    this.bathrooms = data.bathrooms
    this.garage = data.garage
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  getTemplate (index) {
    return /*html*/ `
    <div class="col-4 border border-info rounded shadow">
      <h1>House Type: ${this.house}</h1>
      <h5>Square Feet: ${this.squareFeet}</h5>
      <h5>Year Built: ${this.yearBuilt}</h5>
      <h5>No. of Rooms: ${this.rooms}</h5>
      <h5>No. of Bathrooms: ${this.bathrooms}</h5>
      <h5>Garage: ${this.garage}</h5>
      <h5>Home Price: ${this.price}</h5>
      <img class="img-fluid" src="${this.imgUrl}" />
      <button class="btn btn-danger btn-block" onclick="app.houseController.delete(${index})">Delete</button>
    </div>`
  }
}