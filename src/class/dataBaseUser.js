import User from "./dataUser"

export default class DataBaseUser {
    constructor() {
        this.dataBase = [];
    }
    addUser(userDataClass) {
        this.dataBase.push(userDataClass)
    }
    lengthDataBase() {
        return this.dataBase.length
    }
}