function createbankAccount(initialbalance){
    let balance = initialbalance;

    function deposit(amount){
        if(amount>0){
            balance += amount;
        }else{
            console.log("Deposit amount must be positive");
        }
        return balance;
    }
    function withdraw(amount){
        if(amount>0&& amount<=balance){
            balance -= amount;
       }else{
        console.log("Insifficient funds or invalid amount");
       }
        return balance;
    }
    function getBalance(){
        return balance;
    }
    return{
        deposit:deposit,
        withdraw:withdraw,
        getBalance:getBalance
    }
} 

let myAccount = createbankAccount(1000);
console.log(myAccount.deposit(500));
console.log(myAccount.withdraw(200));
console.log(myAccount.getBalance());