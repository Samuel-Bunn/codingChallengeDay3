class User {
    constructor(firstName, lastName, userName, password, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.subscribed = false;
    }

    subscribe() {
        if (this.subscribed === false) {
            this.subscribed = true
            return 'You are now subscribed!'
        } else {
            this.subscribed = false
            return 'You are now unsubscribed!'
        }
    }
}
const user1 = new User ('Bob', 'Dole', 'BobDole1', 'noNewTaxes', 'bobdole@email.com')
const user2 = new User ('Al', 'Gore', 'Chad47', 'myturn', 'tubes@email.com')
const user3 = new User ('Greg', 'Mops', 'Mopboy', 'shiny', 'mopboy@email.com')
const user4 = new User ('Sam', 'Bunn', 'Bunny', 'fightme', 'bunnboy@email.com', )
const user5 = new User ('joe', 'cool', 'coolDog', 'idratherbesleeping', 'snoopy@email.com')

const newUser = []
newUser.push(user1, user2, user3, user4, user5)

const subscribeByName = (arr) => {
    arr.forEach(user => {
        let { firstName } = user
        firstName = firstName.toLowerCase()
        if (firstName[0] === ('s') || firstName.startsWith('m') || firstName.startsWith('l')) {
            user.subscribe()
        }
    })
}
subscribeByName(newUser)
// console.log(newUser)

const subscribedUsers = (arr) => {
    newUser.filter(function(this.subscribed)) {
        return 
    }
}
