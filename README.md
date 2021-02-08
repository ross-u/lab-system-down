![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | System Down - handling special value `this`



<br>



![](https://i.kym-cdn.com/photos/images/original/000/534/327/8e2.jpg)



<br>

### Introduction

We have learned how `this` works in functions and 5 rules that guide it's behaviour. 

Now we'll dive into the existing code base of a fictional bank where code has bugs introduced by improper use of `this` in functions. Here we will have a chance to practice the concepts that we just learned by fixing bugs in the existing code.



<br>



### Instructions



You will be working in the `javascript/bank.js` file. Open the `SpecRunner.html` as well as the test file (`tests/bank.spec.js`) to guide you in solving the following challenges.

Furthermore, file `javascript/data.js` contains examples of the object instances that you will be working with.



For example, each bank will contain information about the bank itself, plus the array of accounts.

```js
const banksData = [
  {
    name: "Future Bank - Berlin",
    address: "Chausseestraße 123, Berlin,",
    bankCode: "FBBER",
    accounts: [
      {
        firstName: "Future Bank - Berlin",
        lastName: "FBBER",
        accountNumber: "BER9999",
        balance: 100000000,
      },
      {
        firstName: "Alina",
        lastName: "Jankowska",
        accountNumber: "BER0001",
        balance: 1000,
      },
    ],
  }
  
  // ...
]
```



<br>



The above data is used to instantiate bank objects with some additional properties and methods that are not listed in the above data array.

Therefore, to get a clear picture of how this instances look and what is their structure, in the `bank.js` we included the console.log of the objects created out of the above data by the Bank class.

Make sure to check this before you start working.



<br>

##### `bank.js`

```js
const bankBER = banks[0];
const bankBCN = banks[1];

console.log("banks", banks);
console.log("\n bankBER", bankBER);
console.log("\n bankBCN", bankBCN);
```





<br>



Furhtermore, as an additional heloper you can also use the `index.html` to run the code you write in the `bank.js`.





<br>





### Iteration 1 - method `totalClients`





Method `getTotalClients` of the class Bank is not working properly:



```js

bankBER.getTotalClients();  // ❌ ==> Uncaught ReferenceError: bankBranchAccount is not defined

```

<br>


It seems that issue is with the `forEach` loop causing the loss of `this` value in the callback function.



To fix this functionality and get our banks back in business create a new method called  `totalClients`. 

Method should do the same thing as `getTotalClients` but must work properly this time, so make sure to check the documentation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#using_thisarg) and [this example](https://www.educative.io/edpresso/how-to-execute-foreach-in-javascript) and investigate in order to understand how to fix the loss of `this` in the `forEach` loop. 



After looking at the source code of the broken method `getTotalClients` our CTO suggested taking a look into using arrow function in the `forEach` loop, as one of the options to fix the loss of `this` when implementing the new method.



For the requirements that the new method `totalClients` must meet, check the test specs.



<br>





###  Iteration 2 - method `totalBalance`

<br>


Similar to the previous bug, method `getTotalBalance` of the class Bank has a bug and is not working as expected.

The issue again seems to be the `forEach` loop causing the loss of `this` value in the callback function.



This method functionality is critical for the operation of our banks, as it is used to print the banks' monthly balance sheets.

The CTO is requiring that you leave the broken method/function `getTotalBalance` ,as it is, for further investigation,  and start immediately working on creating the new method on the Bank class called `totalBalance`.



The new method `totalBalance` should return the results in the same format as the broken `getTotalBalance` and must work properly.



For the requirements that the new method `totalBalance` must meet, check the test specs.







<br>





### Iteration 3


<br>


Some of the functionality of our Account class is broken, the issue is considred a hot fix and needs immediate attention, therefore CTO wants you to fix these methods ASAP. 

Nested methods `incrementBalance`, `decrementBalance` and `printBalance` are not working properly. This time you will have to fix the methods directly in the source code.

First you will have to uncomment the commented lines of code with the methods  `incrementBalance`, `decrementBalance` and `printBalance`  in the file `bank.js`.


<br>



##### `bank.js`

```js
      // ITERATION 3 & 4:

      // incrementBalance: (amount) => {
      //   this.balance += amount;
      // },

      // decrementBalance: (amount) => {
      //   this.balance -= amount;
      // },

      // printBalance: () => {
      //   return `${this.balance} ${this.currency}`;
      // },
```


<br>



Uncomment the above lines and check the test specs for the additional information on requirements.



<br>



### Iteration 4



Now that all systems are operational, we should start working on the next feature in our banks IT system.

In the current product iteration CTO wants you to implement the allowed minus check in the methods`incrementBalance` and `decrementBalance`. 

Check the test specs for the requirements that these the methods should meet.	





<br>





