import {Customer} from './classes/customer';

console.log("Welcome to Banking App \n");

var customers = new Array();
const customerAccount = new Customer(1, 6000, "Start Compte", 150, "Attia", "Abdelhamid", "Emir Abdelkader", "Bordj bou arriridj", 775404997);
const customerAccount2 = new Customer(2, 10000, "Business compte", 168, "Attia", "Zakaria", "Mosbacher Weg", "Görlitz", 1775404997, "zaza@t.vom");


console.log("-----Try Push command------- \n");
customers.push(customerAccount, customerAccount2);


console.log("-----print push command------- \n");
console.log(customers);


console.log("-----Get the amount from the customers account ------- \n");
console.log(customers[0].getFullNameOfClient());
console.log(customers[0].getBalance());
console.log(customers[1].getFullNameOfClient());
console.log(customers[1].getBalance());


console.log("-----Update information------- \n");
console.log("The amount that Mr. " + customers[0].getFullNameOfClient() + " had war:");
console.log(customers[0].getBalance());
console.log("The amount that Mr. " + customers[0].getFullNameOfClient() + " have now is:")
console.log(customers[0].setBalance(100));


console.log("-----Delete Information-------");
const clientToDelet = customers.splice(1, 1);
console.log(" The updated array after removing one element is:");
console.log(customers);