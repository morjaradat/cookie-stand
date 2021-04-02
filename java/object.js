'use strict';
let times=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const table= document.getElementById('Table-Of-Shops');
// let footerData=[];
// this.totalCulomn=0;
// this.totalOfTotal=0;
// let allLocation=[];
// let sumOfTotal=0;
function CookiesShop(location,min,max,avg){
  this.location=location;
  this.min=min;
  this.max=max;
  this.avg=avg;
  this.numberOfCookiesPerHours=[];
  this.totalForDay=0;
  // this.finalTotal=0;
  // this.totalPerHour=0;
  this.footerData=[];
  // this.totalOfTotal=[];
  // this.Cookies=[];
  // this.cookiesArray=[];

  CookiesShop.all.push(this);
}
CookiesShop.all=[];

CookiesShop.prototype.getRandomNumber=function(min, max) {
  for(let i=0;i<times.length;i++){
    let numberOfCustomers =Math.floor(randomNum(min,max)*this.avg) ;
    this.numberOfCookiesPerHours.push(numberOfCustomers);
  }
  // console.log(this.numberOfCookiesPerHours);
  for(let i=0;i<this.numberOfCookiesPerHours.length;i++){
    this.totalForDay = this.totalForDay + this.numberOfCookiesPerHours[i];
    // console.log(this.totalForDay);
  }
};
CookiesShop.prototype.render=function(){

  this.getRandomNumber(this.min, this.max);

  // for(let i=0;i<this.cookiesArray.length;i++){
  //   this.totalForDay = this.totalForDay + this.cookiesArray[i];
  //   // console.log(typeof this.totalForDay);
  // }
  const table= document.getElementById('Table-Of-Shops');

  const trELE = document.createElement('tr');
  table.appendChild(trELE);

  const thELE=document.createElement('th');
  trELE.appendChild(thELE);
  thELE.textContent=(this.location);

  for(let i=0;i<times.length;i++){
    const thELE1 = document.createElement('td');
    trELE.appendChild(thELE1);
    thELE1.textContent = (this.numberOfCookiesPerHours[i]);
  }
  const finTotal=document.createElement('td');
  trELE.appendChild(finTotal);
  finTotal.textContent=(this.totalForDay);

};

const seattle = new CookiesShop('seattle',23,65,6.3);
seattle.render();

const tokyo=new CookiesShop('Tokyo',3,24,1.2);
tokyo.render();

const dubai =new CookiesShop('Dubai',11,38,3.7);
dubai.render();

const paris = new CookiesShop('Paris',20,38,2.3);
paris.render();

const lima = new CookiesShop('Lima',2,16,4.6);
lima.render();


let footerData =[];

let sumOfColumn =function(){

  for (let i = 0; i < times.length; i++) {
    let totalPerHour=0;
    for (let x = 0; x < CookiesShop.all.length; x++) {
      totalPerHour=totalPerHour + CookiesShop.all[x].numberOfCookiesPerHours[i];
      // console.log(totalPerHour);
      // console.log(allLocation[x]);
    }
    footerData.push(totalPerHour);
    // console.log(footerData);
  }
};
sumOfColumn();

// console.log(CookiesShop.all);

let totalRow =function(){
  let totalTd = 0;
  const footerRow = document.createElement('tr');
  footerRow.setAttribute('id','total-row');
  table.appendChild(footerRow);

  const td3=document.createElement('td');
  footerRow.appendChild(td3);
  td3.textContent='Total';

  for (let i = 0; i < times.length; i++) {
    const td4 =document.createElement('td');
    footerRow.appendChild(td4);
    td4.textContent= footerData[i];
  }
  for (let i = 0; i < CookiesShop.all.length; i++) {
    totalTd =totalTd + CookiesShop.all[i].totalForDay;
  }
  // console.log(totalTd);
  //final total td
  const td4=document.createElement('td');
  footerRow.appendChild(td4);
  td4.textContent= totalTd;
};

totalRow();



let myForm=document.getElementById('new-shop');

myForm.addEventListener('submit',addShop);

function addShop(event){
  event.preventDefault();

  let StoreName=event.target.StoreName.value;

  let MinimumCustomers =Number(event.target.MinimumCustomers.value) ;

  let MaximumCustomers =Number(event.target.MaximumCustomers.value) ;

  let AverageSales =Number(event.target.AverageSales.value) ;

  let newShop =new CookiesShop(StoreName,MinimumCustomers,MaximumCustomers,AverageSales);

  let lastRow =document.getElementById('total-row');
  table.removeChild(lastRow);
  newShop.render();
  footerData =[];
  sumOfColumn();
  totalRow();

}


function randomNum(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
