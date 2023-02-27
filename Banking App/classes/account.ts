export class Account {
    constructor(
        private acountId: number,
        private balance: number,
        public type: string,
        public description?: string,
    ) {
    }

    getInfo(): void {
        console.log("The Balance: " + this.balance + "\n" +
            "The Type of Account: " + this.type + "\n" +
            "Description: " + this.description + "\n");
    }

    getType(): string {
        return `${this.type}`;
    }

    getBalance(): number {
        return this.balance;
    }

    setBalance(amout: number): number {
        return this.balance = this.balance + amout;
    }
}