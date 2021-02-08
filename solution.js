class Account {
  constructor(firstNameV, lastNameV, accountNumberV, balanceV) {
    this.firstName = firstNameV;
    this.lastName = lastNameV;
    this.accountNumber = accountNumberV;
    
    
    this.account = {
      currency: "€",
      balance: balanceV,
      isBlocked: false,
      allowedMinus: -5000,
      
      blockAccount: function () {
        this.isBlocked = true;
      },
      unblockAccount: function () {
        this.isBlocked = false;
      },

      // incrementBalance: (amount) => {
      incrementBalance: function (amount) {
      
        this.balance += amount;
        if (this.balance > this.allowedMinus) {
          this.unblockAccount();
        }
      },

      // decrementBalance: (amount) => {
      decrementBalance: function (amount) {
        this.balance -= amount;
        if (this.balance <= this.allowedMinus) {
          this.blockAccount();
        }
      },
      // printBalance: () => {
      printBalance: function () {
        return `${this.balance} ${this.currency}`;
      },
    };
  }
}

class Bank {
  constructor(nameV, addressV, bankCodeV, bankBranchAccountV, accountsV = []) {
    this.name = nameV;
    this.address = addressV;
    this.bankCode = bankCodeV;
    this.bankBranchAccount = bankBranchAccountV;

    this.accounts = accountsV.map((obj) => {
      const firstName = obj.firstName;
      const lastName = obj.lastName;
      const accountNumber = obj.accountNumber;
      const balance = obj.balance;

      const newAccount = new Account(
        firstName,
        lastName,
        accountNumber,
        balance
      );
      return newAccount;
    });
  }

  getTotalClients() {
    let accounts = 0;

    this.accounts.forEach(function (acc) {
      // Do not include the bank's own account in the client count
      const isClientAccount =
        acc.accountNumber !== this.bankBranchAccount.accountNumber;
      if (isClientAccount) {
        accounts++;
      }
    });

    return accounts;
  }

  getTotalBalance() {
    let accAssetsTtl = 0;
    let accDebtTtl = 0;

    this.accounts.forEach(function (acc) {
      // Do not include the bank's own account balance in the client assets/debt total
      const isClientAccount = acc.accountNumber !== this.bankBranchAccount.accountNumber;

      if (isClientAccount) {

        if (acc.account.balance > 0) {
          accAssetsTtl += acc.account.balance;
        } else if (acc.account.balance < 0) {
          accDebtTtl += acc.account.balance;
        }

      }
    });

    const result = {
      accountAssetsTotal: accAssetsTtl,
      accountDebtTotal: accDebtTtl,
    };

    return result;
  }
}



const banks = [];

banksData.forEach((bank, i) => {
  const name = bank.name;
  const address = bank.address;
  const bankCode = bank.bankCode;
  const accounts = bank.accounts;
  const bankBranchAccount = bank.accounts[0];

  banks.push(new Bank(name, address, bankCode, bankBranchAccount, accounts));
});

const bankBER = banks[0];
const bankBCN = banks[1];

console.log("banks", banks);
console.log("\n bankBER", bankBER);
console.log("\n bankBCN", bankBCN);

// THE FOLLOWING METHODS ARE NOT WORKING:
// KEEP COMMENTED:
/* 
console.log( bankBER.getTotalClients() );

console.log( bankBCN.getTotalBalance() );
*/





// ITERATION 1
// Your Code Here...

Bank.prototype.totalClients = function () {
  if (this.accounts.length === 0) return null;

  let accounts = 0;

  this.accounts.forEach(function (acc) {
    // Do not include the bank's own account in the client count
    const isClientAccount =
      acc.accountNumber !== this.bankBranchAccount.accountNumber;
    if (isClientAccount) {
      accounts++;
    }
  }, this);

  return accounts;
}

// ITERATION 2
// Your Code Here...
Bank.prototype.totalBalance = function () {
  if (this.accounts.length === 0) return null;
  
  let accAssetsTtl = 0;
  let accDebtTtl = 0;

  this.accounts.forEach(function (acc) {
    // Do not include the bank's own account balance in the client assets/debt total
    const isClientAccount = acc.accountNumber !== this.bankBranchAccount.accountNumber;

    if (isClientAccount) {
      if (acc.account.balance > 0) {
        accAssetsTtl += acc.account.balance;
      } else if (acc.account.balance < 0) {
        accDebtTtl += acc.account.balance;
      }

    }
  }, this);

  const result = {
    accountAssetsTotal: accAssetsTtl,
    accountDebtTotal: accDebtTtl,
  };

  return result;
}

