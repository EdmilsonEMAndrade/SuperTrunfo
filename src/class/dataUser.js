export default class User {
    constructor(data) {
        const { user, email, password } = data;
        this.user = user;
        this.email = email;
        this.password = password;
    }
}