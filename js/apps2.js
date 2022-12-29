'use strict';


// //====================== GLOBALS ==========================


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//let stores = [Seattle, Tokyo, Dubai, Paris, Lima];

// ===================== CONSTRUCTORS ====================

function StoreData(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.cookiesBought = [];
  this.total = 0;

}

let Seattle = new StoreData('Seattle', 23, 65, 6.3);
let Tokyo = new StoreData('Tokyo', 3, 24, 1.2);
let Dubai = new StoreData('Dubai', 11, 38, 3.7);
let Paris = new StoreData('Paris', 20, 38, 2.3);
let Lima = new StoreData('Lima', 2, 16, 4.6);


// ==================== METHODS ===========================

StoreData.prototype.getCustPerHr = function(min, max) {
  return Math.floor(Math.random() * (max -min + 1) + min);
};

StoreData.prototype.cookieSales = function() {
  for (let i = 0; i < hours.length; i++) {
    let cookiesNeeded = Math.floor(this.getCustPerHr(this.minCust, this.maxCust) * this.avgSale);
    this.cookiesBought.push(cookiesNeeded);
    this.total += this.cookiesNeeded;
  }
};

//=================== HEADER & TABLE DATA =====================

let tableSelector = document.getElementById('dailySales');
let tableRow = document.createElement('tr');
tableSelector.appendChild(tableRow);


for (let i = 0; i < hours.length; i++) {
  let tableHeader = document.createElement('th');
  tableHeader.textContent = hours[i];
  tableRow.appendChild(tableHeader);


  for(let k = 0; k < hours.length; k++) {
    let salesData = document.createElement('td');
    salesData.textContent = this.cookiesBought[k];
    tableRow.appendChild(salesData);
  }

}

let tableHeader = document.createElement('th');
tableHeader.textContent = 'Daily Location Total';
tableRow.appendChild(tableHeader);



// =========================== RENDERING =======================

Seattle.cookieSales();
Tokyo.cookieSales();
Dubai.cookieSales();
Paris.cookieSales();
Lima.cookieSales();

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();


function renderTH() {
  let table = document.getElementById('dailySales');
  let hoursRow = document.createElement('tr');
  let hoursCell = document.createElement('th');
  hoursRow.appendChild(hoursCell);

  for (let i = 0; i < hours.length; i++) {
    let hourlyCell = document.createElement('th');
    hourlyCell.innerText = hours[i];
    hoursRow.appendChild(hourlyCell);

  }
  let hoursTotal = document.createElement('th');
  hoursTotal.innerText = 'Daily Location Total';
  hoursRow.appendChild(hoursTotal);
  table.appendChild(hoursRow);
}
renderTH();

// =================================== TABLE SALES DATA ==========================

