/**
 * Created by Vampiire on 5/1/17.
 */

function checkCashRegister(price, cash, cid){
  
      /*
          to solve the floating point issue all values are multiplied by 100 during calculation
          and divided by 100 before being pushed to the 'change_used' array for function return
      */
  
  
  // initial variables
      var change = (cash - price), changed_used = [], total = 0;
  
      // sum up the total cash in the drawer
          for(var i in cid){
              total += cid[i][1];
          }
  
      // check condition that if the total === change return 'Closed'
          if(total.toFixed(2) === change.toFixed(2)){
              return 'Closed';
          }
  
      // coin and bill values array
          var values = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
  
      // push into cid array for easy access during forEach
      // cid = [name[0], value[1], available amount[2]]
          for(var i in cid){
              cid[i] = [cid[i][0], values[i], cid[i][1]];
          }
  
      // reverse the array to begin with largest bills and end on smallest coins
          cid.reverse();
  
      // change is multiplied here by 100 outside of the forEach so that it does not get multiplied
      // through each iteration
          change *= 100;
  
  
      // iterate through each element and decrement both the change needed and available amount of each coin / bill
      cid.forEach(function(element){
  
          var available = element[2]*100,
              val = element[1]*100;
  
          // console.log('\n');
          // console.log('called: ', element[0], 'val: ', val);
          // console.log('changed remaining: ', change);
          // console.log('change / val: ', change / val, '>1: ', change/val > 1);
          // console.log('\n');
  
          // checking change / val > 1
          // determines whether it is possible to make change using that bill or coin
  
          if((change / val) > 1){
              while(change  - val >= 0){
                  if(available !==0){
  
                      // console.log('available: ', available, 'change: ', change);
                      available -= val;
                      change -= val;
                  }
                  else{
                      break;
                  }
              }
          }
  
  
          // if the change used is not 0, push it to the change_used array
              var returned = element[2]*100 - available;
  
              if(returned / 100 !== 0){
                  changed_used.push([element[0], returned/100 ]);
              }
  
      // return the current value of 'change' for each iteration through the array
          return change;
  
      });
  
  
      // put in place to ensure that the change goal has been met
      // filters out cases where the loop has attempted to meet the change with available cash
      // but was not able to. if passes return the change array, if fails return insufficient funds
          if(change === 0){
              return changed_used;
          }
  
      return 'Insufficient Funds';
  }
  
  
  // ----- Test Cases PASSED ---- //
  
  // console.log(checkCashRegister(18.16, 100.00, [["PENNY", 0.52], ["NICKEL", 0.45], ["DIME", 0.90], ["QUARTER", 3.00], ["ONE", 20], ["FIVE", 0], ["TEN", 30], ["TWENTY", 60], ["ONE HUNDRED", 0]])); // pass
  // console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // pass
  // console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])); // pass
  // console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
  // console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  // console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // pass
  