import _store from "../store.js"
import House from "../Models/House.js"

class HouseService {
  create(newHouseObject) {
    let newHouse = new House(newHouseObject)
    _store.State.houses.push(newHouse)
    console.log(newHouseObject)
  }
}

const HOUSESERVICE = new HouseService()
export default HOUSESERVICE