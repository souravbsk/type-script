{
  //  access modifiers

  class BankAccount {
    private readonly id: number;
    private name: string;
    protected _balance: number;
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    addDeposit(value: number) {
      this._balance = this._balance + value;
    }

    getBalance() {
      return this._balance; // returns the current balance
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);

  // goribManusherAccount._balance = 20
  //   Property '_balance' is private and only accessible within class 'BankAccount'.ts(2341)

  goribManusherAccount.addDeposit(60);
  const result = goribManusherAccount.getBalance();
  console.log(result);

  //  access modifiers

  //
}
