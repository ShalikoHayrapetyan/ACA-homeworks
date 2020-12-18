/* Create function which will store user object inside of a closure 

Methods 
getName -> will return the user's name 
deposit( amount ) -> will add the amount to the user’s balance 
resetPassword(newPassord, oldPassword) -> will change the user’s password, if the old one is matching, otherwise, it will return ‘access denied’ 
getBalance(password) -> will return the user’s balance if the password is correct, otherwise, it will return ‘access denied’
*/ 
function methods(){
    const obj = { 
              name: 'John', 
              password: 'itsnotyourbusiness', 
              balance: 100 
            } 
    let getName = () => obj.name
    let deposit = (amount=0) => obj.balance+=amount
    let resetPassword=(newPassord, oldPassword) =>{
      if(oldPassword===obj.password) {
        obj.password = newPassord
        return obj.password
      } 
      else  return "access denied" 
    }
    let getBalance = (password) => {
      if (password===obj.password) console .log(obj.balance)
      else console.log("access denied")
    }
  
    return {
      getName,
      deposit,
      resetPassword,
      getBalance
    }
  }
  
  const {getName,deposit,resetPassword,getBalance} = methods()
  console.log(getName())
  console.log(deposit(50))
  console.log(resetPassword('1234','itsnotyourbusiness'))
  getBalance("1234")