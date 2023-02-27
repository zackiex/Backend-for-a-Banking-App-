import {Account} from './account';
export class Customer extends Account {
    constructor(
        acountId: number,
        balance: number,
        type: string,
        private customerId: number,
        private lasteName: string,
        private firstName: string,
        private adress: string,
        public state: string,
        private phone: number,
        private email?: string,
    ) {
        super(acountId, balance, type);
    }

    // getTypeFromAccount(){
    //     return super.getType();
    // };
    // getBalanceFromAccount(){
    //     return super.getBalance();
    // };
    getFullNameOfClient(): string {
        return `${this.firstName}  ${this.lasteName}`;
    };

    infCustomer(): string {
        return `The account holder is ${this.lasteName}  ${this.firstName} \n` +
            `The Adress is ${this.adress} \n` +
            `The Balancing is : ${this.getBalance()}  and the type of compte is ${this.getType()} \n` +
            `The account was opened in ${this.state} \n` +
            `The phone number : ${this.phone} \n` +
            `The E-mail: ${this.email} \n`;
    }
}