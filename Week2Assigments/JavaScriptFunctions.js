//Task 1: Function Declaration
function userProfile(name1) {
    console.log(`Hello, ${name1}!`)
}

userProfile('Christina')


//Task 2: Arrow Function
const double = (x) => x * 2
console.log(double(5))

// Task 3: Anonymous Function
setTimeout(function () {
    console.log('This message is delayed by 2 seconds')
}, 2000
)

//Task 4: Callback Function

function getUserData(callback) {
    setTimeout(() => {
        const user = {
            name: 'Christina',
            age: 33
        }; callback(user)
    }, 3000)
}

getUserData(function (user) {
    console.log('Name -', user.name)
    console.log('Age -', user.age)
})