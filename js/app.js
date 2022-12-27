
'use strict';


// Pat has a business idea and needs help with branding, as well as help with internal data management. He needs to calculate the number of cookies each location must make every day to manage supply inventory and baking schedule. Each location is open from 6am to 8pm. We need to determine the minimum and maximum number of customers per hour, the average number of cookies purchased per customer, per location; and the total amount of cookies sold per day per location.

// TODO: display a list showing the hours of operations with an average number of cookies bought per customers per hour to determine the number of cookies needed to have on hand per hour per day per location.

// * location
// * min/max customer per hour
// * average number of coookies bought per customer
// * the amount of cookies sold per hour per location
// * the total number of cookies sold per day per location
// * make a list of the data and store it on sales.html


// ******************* GLOBALS **************************

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// ****************** DOM WINDOW ************************
let storeSection = document.getElementById('storeSales');


// **************** OBJECT LITERALS *********************

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  total: 0,
  custPerHr: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  cookieSales: function() {
    for(let i = 0; i < hours.length; i++) {
      let cookiesNeeded = (Math.round(this.custPerHr() * this.avgCookieBought));
      this.cookiesBought.push(cookiesNeeded);
      this.total += cookiesNeeded;
    }
  },

  render: function() {
    this.cookieSales();
    let h2Elem = document.createElement('h2');
    h2Elem.innerText = this.name;
    storeSection.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    storeSection.appendChild(ulElem);

    for(let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liTotalElem = document.createElement('li');
    liTotalElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liTotalElem);
  },
};

// **************** EXECUTABLE CODE *********************
seattle.render();
