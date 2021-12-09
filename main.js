// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Checks if the credit card number is valid.
const validateCred = (arr) => {
    let n = arr.length;
    let sum = 0;
    for (let i = 0; i < n; i++){
      if (n % 2 === 0){
        if (i % 2 === 0){
          let double = arr[i] * 2;
          if(double >= 10){
            sum = sum + (double - 9);
          } else {
            sum = sum + double;
          }
        } else {
          sum = sum + arr[i];
        }
      }  else {
         if (i % 2 === 0){
           sum = sum + arr[i];
         } else {
           let double = arr[i] * 2;
           if (double >= 10){
             sum = sum + (double - 9)
           } else {
             sum = sum + double;
           }
         }
      }
    }
    if (sum % 10 === 0){
      return true;
    } else {
      return false;
    }
   }
   
   // Returns an array of invalid credit card numbers from a nested array.
   const findInvalidCards = (nestedArr) => {
     let invalid = [];
     for (let j = 0; j < nestedArr.length; j++){
       if (validateCred(nestedArr[j]) === false){
         invalid.push(nestedArr[j]);
       }
     }
     return invalid;
   }
   
   let invalidCards = (findInvalidCards(batch));
   
   // returns an array of credit card companies that corresponds to invalid card numbers from above function.
   // credit card companies only appear once in the array
   const idInvalidCardCompanies = (invalidArr) => {
     let invalidCardCompanies = [];
     for (let k = 0; k < invalidArr.length; k++){
       if(invalidArr[k][0] === 3){
         if(invalidCardCompanies.find(element => element === "Amex") === undefined){
           invalidCardCompanies.push("Amex");
         }
       } else if(invalidArr[k][0] === 4){
         if(invalidCardCompanies.find(element => element === "Visa") === undefined){
           invalidCardCompanies.push("Visa");
         }
       } else if (invalidArr[k][0] === 5){
         if(invalidCardCompanies.find(element => element === "Mastercard") === undefined){
           invalidCardCompanies.push("Mastercard");
         } 
       } else if (invalidArr[k][0] === 6){
         if(invalidCardCompanies.find(element => element === "Discover") === undefined){
           invalidCardCompanies.push("Discover");
         }
       } else {
         invalidCardCompanies.push("Company not found.");
       }
     }
     return invalidCardCompanies;
   }
   
   
   
   
   
   
   // console.log(validateCred(valid1)); /*true*/
   // console.log(validateCred(valid2)); /*true*/
   // console.log(validateCred(valid3)); /*true*/
   // console.log(validateCred(valid4)); /*true*/
   // console.log(validateCred(valid5)); /*true*/
   // console.log(validateCred(invalid1)); /*false*/
   // console.log(validateCred(invalid2)); /*false*/
   // console.log(validateCred(invalid3)); /*false*/
   // console.log(validateCred(invalid4)); /*false*/
   // console.log(validateCred(invalid5)); /*false*/
   // console.log(validateCred(mystery1)); /*false*/
   // console.log(validateCred(mystery2)); /*true*/
   // console.log(validateCred(mystery3)); /*false*/
   // console.log(validateCred(mystery4)); /*false*/
   // console.log(validateCred(mystery5)); /*true*/
   
   // console.log(findInvalidCards(batch));
   
   // console.log(idInvalidCardCompanies(invalidCards)); /*['Visa', 'Mastercard', 'Amex', 'Discover'] */
   






