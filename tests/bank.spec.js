
describe('Iteration 1: totalClients() method', () => {
    const bankOne = banksData[0];
    const bankTwo = banksData[1];

    let bankBCN;
    let bankBER;

    beforeEach(() => {
      
      const nameOne = bankOne.name;
      const addressOne = bankOne.address;
      const bankCodeOne = bankOne.bankCode;
      const accountsOne = bankOne.accounts;
      const bankBranchAccountOne = bankOne.accounts[0];

      const nameTwo = bankTwo.name;
      const addressTwo = bankTwo.address;
      const bankCodeTwo = bankTwo.bankCode;
      const accountsTwo = bankTwo.accounts;
      const bankBranchAccountTwo = bankTwo.accounts[0];
      
      bankBCN = new Bank(nameOne, addressOne, bankCodeOne, bankBranchAccountOne, accountsOne);
      bankBER = new Bank(nameTwo, addressTwo, bankCodeTwo, bankBranchAccountTwo, accountsTwo);
    })
    

    it('should be a function', () => {
      expect(typeof bankBCN.totalClients).toBe('function');
    });
    
    it('should receive 0 arguments', () => {
      expect(bankBCN.totalClients.length).toEqual(0);
    });

    it('should return a total number of client accounts only', () => {
      expect(bankBCN.totalClients()).toEqual(bankBCN.accounts.length - 1);
    });
  
    it('should return null if accounts array is empty', () => {
        const bankEmpty = new Bank('Empty', 'Empty', 'Empty', undefined, []);
        expect( bankEmpty.totalClients() ).toBeNull();
    });

});


describe('Iteration 2: totalBalance() method', () => {
  const bankOne = banksData[0];
  const bankTwo = banksData[1];

  let bankBCN;
  let bankBER;

  beforeEach(() => {
    
    const nameOne = bankOne.name;
    const addressOne = bankOne.address;
    const bankCodeOne = bankOne.bankCode;
    const accountsOne = bankOne.accounts;
    const bankBranchAccountOne = bankOne.accounts[0];

    const nameTwo = bankTwo.name;
    const addressTwo = bankTwo.address;
    const bankCodeTwo = bankTwo.bankCode;
    const accountsTwo = bankTwo.accounts;
    const bankBranchAccountTwo = bankTwo.accounts[0];
    
    bankBCN = new Bank(nameOne, addressOne, bankCodeOne, bankBranchAccountOne, accountsOne);
    bankBER = new Bank(nameTwo, addressTwo, bankCodeTwo, bankBranchAccountTwo, accountsTwo);
  });
  

  it('should be a function', () => {
    expect(typeof bankBCN.totalBalance).toBe('function');
  });
  
  it('should receive 0 arguments', () => {
    expect(bankBCN.totalBalance.length).toEqual(0);
  });

  it('should return an object', () => {
    const result = bankBCN.totalBalance();
    const resultIsObject = (typeof result === 'object') && (!Array.isArray(result));
    expect(resultIsObject).toEqual(true);
  });

  it('should return an object with two properties - `accountAssetsTotal` and `accountDebtTotal`', () => {
    const result = bankBCN.totalBalance();
    const resultStr = JSON.stringify(result);

    const expectedResult = { accountAssetsTotal: 11000, accountDebtTotal: -1250 }
    const expectedResultStr = JSON.stringify(expectedResult);

    expect(resultStr).toEqual(expectedResultStr);
  });


  it('should return null if accounts array is empty', () => {
    const branchAccount = { accountNumber: '999' };
    const bankEmpty = new Bank('Empty', 'Empty', 'Empty', branchAccount, []);
    expect( bankEmpty.totalClients() ).toBeNull();
  });

  it('should calculate the total assets and total debt correctly', () => {
    const branchAccount = { accountNumber: '999' };
    const accounts = [
      { balance: 999, accountNumber: '1' },
      { balance: 1, accountNumber: '2' },
      { balance: -55, accountNumber: '3' },
      { balance: -5, accountNumber: '4' },
    ];
    const testBank = new Bank("t", "t", "t", branchAccount,  accounts);
    const result = testBank.totalBalance();

    console.log('result', result)

    expect(result.accountAssetsTotal).toEqual(1000);
    expect(result.accountDebtTotal).toEqual(-60);
    
  })


});



describe('Iteration 3: incrementBalance() method', () => {
  const bankOne = banksData[0];
  let bankBCN;

  beforeEach(() => {
    
    const nameOne = bankOne.name;
    const addressOne = bankOne.address;
    const bankCodeOne = bankOne.bankCode;
    const accountsOne = bankOne.accounts;
    const bankBranchAccountOne = bankOne.accounts[0];
    
    bankBCN = new Bank(nameOne, addressOne, bankCodeOne, bankBranchAccountOne, accountsOne);
  });
  

  it('should be a function', () => {
    const account1 = bankBCN.accounts[1];
    expect(typeof account1.account.incrementBalance).toBe('function');
  });


  it('should receive 1 argument', () => {
    const account1 = bankBCN.accounts[1];
    const incrementBalance = account1.account.incrementBalance;
    expect(incrementBalance.length).toBe(1);
    
  });

    it('should correctly increment the account balance', () => {
      const accounts = [{ balance: -100, accountNumber: '1' }];
      const testBank = new Bank("t", "t", "t", undefined, accounts);
      
      const account1 = testBank.accounts[0];
      account1.account.incrementBalance(105);

      expect(account1.account.balance).toBe(5)
  });



});

describe('Itereation 3: decrementBalance() method', () => {
  const bankOne = banksData[0];
  let bankBCN;

  beforeEach(() => {
    
    const nameOne = bankOne.name;
    const addressOne = bankOne.address;
    const bankCodeOne = bankOne.bankCode;
    const accountsOne = bankOne.accounts;
    const bankBranchAccountOne = bankOne.accounts[0];
    
    bankBCN = new Bank(nameOne, addressOne, bankCodeOne, bankBranchAccountOne, accountsOne);
  });
  

  it('should be a function', () => {
    const account1 = bankBCN.accounts[1];
    expect(typeof account1.account.decrementBalance).toBe('function');
  });


  it('should receive 1 argument', () => {
    const account1 = bankBCN.accounts[1];
    const decrementBalance = account1.account.decrementBalance;
    expect(decrementBalance.length).toBe(1);
    
  });

    it('should correctly increment the account balance', () => {
      const accounts = [{ balance: 999, accountNumber: '1' }];
      const testBank = new Bank("t", "t", "t", undefined, accounts);
      
      const account1 = testBank.accounts[0];
      account1.account.decrementBalance(1000);

      expect(account1.account.balance).toBe(-1)
  });



});


describe('Iteration 3: printBalance() method', () => {
  const bankOne = banksData[0];
  let bankBCN;

  beforeEach(() => {
    
    const nameOne = bankOne.name;
    const addressOne = bankOne.address;
    const bankCodeOne = bankOne.bankCode;
    const accountsOne = bankOne.accounts;
    const bankBranchAccountOne = bankOne.accounts[0];
    
    bankBCN = new Bank(nameOne, addressOne, bankCodeOne, bankBranchAccountOne, accountsOne);
  });
  

  it('should be a function', () => {
    const account1 = bankBCN.accounts[1];
    expect(typeof account1.account.printBalance).toBe('function');
  });


  it('should receive 0 arguments', () => {
    const account1 = bankBCN.accounts[1];
    const printBalance = account1.account.printBalance;
    expect(printBalance.length).toBe(0);
    
  });

  it('should return account balance as a string with a currency symbol', () => {
    const accounts = [{ balance: 999, accountNumber: '1' }];
    const testBank = new Bank("t", "t", "t", undefined, accounts);
    const account1 = testBank.accounts[0];
    
    const result = account1.account.printBalance();

    expect(result).toBe("999 €");
  });

});


describe('Iteration 4: incrementBalance() method', () => {

  it('should unblock the account when balance is greater than the allowed minus', () => {
    const accounts = [
      { balance: -4999, accountNumber: '77' },
      { balance: -4999, accountNumber: '88'  }
    ];
    const testBank = new Bank("t", "t", "t", undefined, accounts);
    const account1 = testBank.accounts[0];
    const account2 = testBank.accounts[1];


    account1.account.decrementBalance(2);
    account1.account.incrementBalance(2);

    account2.account.incrementBalance(6);
    account2.account.decrementBalance(2);

    console.log('account2.account', account2.account);
    

    expect(account1.account.isBlocked).toBe(false);
    expect(account2.account.isBlocked).toBe(true);

  });



});

describe('Iteration 4: decrementBalance() method', () => {

  it('should block the account when balance is less than the allowed minus', () => {
    const accounts = [ { balance: -4999, accountNumber: '77'  },];
    const testBank = new Bank("t", "t", "t", undefined, accounts);      
    const account1 = testBank.accounts[0];

    account1.account.decrementBalance(2);

    expect(account1.account.isBlocked).toBe(true);
  });

});