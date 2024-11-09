{
  //  Getter  and setter

  class BankAccount {
    private readonly id: number;
    private name: string;
    protected _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    //setter
    public set deposit(value: number) {
      this._balance = this._balance + value;
    }

    // addDeposit(value: number) {
    //   this._balance = this._balance + value;
    // }

    //getter
    public get balance() {
      return this._balance;
    }

    //   getBalance() {
    //     return this._balance; // returns the current balance
    //   }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);


  
  const balanceDeposit = goribManusherAccount.deposit = 20
//   goribManusherAccount.addDeposit(60);

  //   use gatter to call as property not like function
  const myBalance = goribManusherAccount.balance;
  //   const result = goribManusherAccount.getBalance();
  console.log(myBalance);

  //  access modifiers

  //

  //
}
