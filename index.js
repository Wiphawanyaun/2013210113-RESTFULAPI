// const datefns = require('date-fns')

// console.log(datefns.format(new Date(),"MM/dd/yyyy"))

// let firstName = "Wiphawan"
// let age = 21

// console.log(firstName+age)

// let info =`
// My name is ${firstName}
// My age is ${age}
// `
// console.log(info)

const user = {
  name: "Wiphawan",
  salary: 200000,
  address: { province: "Bangkok", postcode: 10220 },
};

// console.log(user.salary);
// console.log(user.address.postcode);

const showData = () => `${user.name}`
// console.log(showData())

const showData2 = () => {
  let info = "My name is";
  return `${info} ${user.name}`
};
// console.log(showData2());

const sumNumber = (a,b) => a+b;

// console.log(sumNumber(9,1))

const {name,salary,address:{province}} = user
// console.log (name)



