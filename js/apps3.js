'use strict';

//=========================== GLOBALS ======================================

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let stores = [];

let tableSelector = document.getElementById('dailySales');

// ===================== CONSTRUCTOR ====================

function StoreData(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.cookiesBought = [];
  this.total = 0;
}

let seattle = new StoreData('Seattle', 23, 65, 6.3);
let tokyo = new StoreData('Tokyo', 3, 24, 1.2);
let dubai = new StoreData('Dubai', 11, 38, 3.7);
let paris = new StoreData('Paris', 20, 38, 2.3);
let lima = new StoreData('Lima', 2, 16, 4.6);

stores.push(seattle, tokyo, dubai, paris, lima);

// ==================== METHODS ===========================

StoreData.prototype.getCustPerHr = function(min, max) {
  return Math.floor(Math.random() * (max -min + 1) + min);
};

StoreData.prototype.cookieSales = function() {

  for (let i = 0; i < hours.length; i++) {
    let cookiesNeeded = Math.floor(this.getCustPerHr(this.minCust, this.maxCust) * this.avgSale);
    this.cookiesBought.push(cookiesNeeded);
    this.total += cookiesNeeded;
  }
};

StoreData.prototype.render = function () {
  this.cookieSales();
  let salesRow = document.createElement('tr');
  let tableData = document.createElement('td');
  tableData.textContent = this.name;
  salesRow.appendChild(tableData);

  for (let i = 0; i < hours.length; i++) {
    tableData = document.createElement('td');
    tableData.textContent = this.cookiesBought[i];
    salesRow.appendChild(tableData);
  }
  let total = document.createElement('td');
  total.textContent = this.total;
  salesRow.appendChild(total);
  tableSelector.appendChild(salesRow);
};

//=================== TABLE HEADER =====================

function renderTH() {

  let hoursRow = document.createElement('tr');
  let hourSales = document.createElement('td');
  hoursRow.appendChild(hourSales);

  for (let i = 0; i < hours.length; i++) {
    let hourly = document.createElement('th');
    hourly.textContent = hours[i];
    hoursRow.appendChild(hourly);

  }
  let hoursTotal = document.createElement('th');
  hoursTotal.textContent = 'Daily Location Total';
  hoursRow.appendChild(hoursTotal);
  tableSelector.appendChild(hoursRow);
}

//========================= TABLE FOOTER ==============================

function renderTF() {
  let tableFooter = document.getElementById('tableFooter');
  let totalRow = document.createElement('tr');
  tableFooter.appendChild(totalRow);

  let totalCell = document.createElement('td');
  totalCell.textContent= 'Totals';
  totalRow.appendChild(totalCell);

  let cookiesTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourCookies = 0;
    for (let j = 0; j < stores.length; j++) {
      hourCookies += stores[j].cookiesBought[i];
      cookiesTotal += stores[j].cookiesBought[i];
    }
    let hoursTotal = document.createElement('td');
    hoursTotal.textContent = hourCookies;
    totalRow.appendChild(hoursTotal);
  }
  let allSales = document.createElement('td');
  allSales.textContent = cookiesTotal;
  totalRow.appendChild(allSales);
  tableFooter.appendChild(totalRow);
}

// ======================== FORM ======================================


// let standForm = document.getElementById('standForm');
// standForm.addEventListener('submit', addStand);

// function addStand(event) {
//   event.preventDefault();
//   let form = event.target;
//   let store = form.standLocation.value;
//   let minCust = form.standMin.value;
//   let maxCust = form.standMax.value;
//   let avgSale = form.standAvg.value;
//   let store = new StoreData(name, minCust, maxCust, avgSale);
//   stores.push(location);
//   location.render();

//   tableFooter.innerHTML = '';

//}

//========================== EXECUTABLES =====================

renderTH();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

renderTF();
