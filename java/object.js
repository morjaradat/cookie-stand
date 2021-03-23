'use strict';
let times=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let footerData=[0];
const table= document.getElementById('Table-Of-Shops');
// for(let i=0;i<times.length;i++){
//   footerData.push(0);
// }
this.totalCulomn=0;
this.totalOfTotal=0;

function CookiesShop(location,min,max,avg){
  this.location=location;
  this.min=min;
  this.max=max;
  this.avg=avg;
  this.totalForDay=0;
  this.totalCulomn=0;
  this.totalOfTotal=0;
  this.Cookies=[];
  this.cookiesArray=[];
}
CookiesShop.prototype.getNum=function(min, max) {
  for(let i=0;i<times.length;i++){
    let Cookies =Math.floor(randomNum(min,max)*this.avg);
    this.cookiesArray.push(Cookies);
    // console.log(this.cookiesArray);
    // footerData=footerData[i]+Cookies;
    // console.log('this',footerData);
  }
};
CookiesShop.prototype.render=function(){
  this.getNum(this.min, this.max);
  for(let i=0;i<this.cookiesArray.length;i++){
    this.totalForDay = this.totalForDay + this.cookiesArray[i];
  }
  const table= document.getElementById('Table-Of-Shops');

  const trELE = document.createElement('tr');
  table.appendChild(trELE);

  const thELE=document.createElement('th');
  trELE.appendChild(thELE);
  thELE.textContent=(this.location);

  for(let i=0;i<times.length;i++)
  {
    const thELE1 = document.createElement('td');
    trELE.appendChild(thELE1);
    thELE1.textContent = (this.cookiesArray[i]);
  }
  const finTotal=document.createElement('td');
  trELE.appendChild(finTotal);
  finTotal.textContent=(this.totalForDay);
};

const seattle = new CookiesShop('seattle',23,65,6.3);
// seattle.getNum(this.min,this.max);
seattle.render();

const tokyo=new CookiesShop('Tokyo',3,24,1.2);
// tokyo.getNum(this.min,this.max);
tokyo.render();

const dubai =new CookiesShop('Dubai',11,38,3.7);
// dubai.getNum(this.min,this.max);
dubai.render();

const paris = new CookiesShop('Paris',20,38,2.3);
// paris.getNum(this.min,this.max);
paris.render();

const lima = new CookiesShop('Lima',2,16,4.6);
// lima.getNum(this.min,this.max);
lima.render();

// console.log(this.cookiesArray);
// console.log(seattle);
this.sumOfColumn=function()
{
  let city=[seattle,tokyo,dubai,paris,lima];
  for (let i = 0; i < times.length; i++) {
    {
      for (let x = 0; x < city.length; x++) {
        this.totalCulomn=this.totalCulomn+city[x].cookiesArray[i];
        // console.log(this.totalCulomn);
      }
    }footerData.push(this.totalCulomn);
    this.totalOfTotal=this.totalOfTotal+this.totalCulomn;
    // console.log(footerData);
    this.totalCulomn=0;
  }
};
footerData.shift();
// console.log(typeof (typeof footerData));
//--------------------------------------
// console.log(this.totalCulomn);
const footerRow = document.createElement('tr');
table.appendChild(footerRow);

const td3=document.createElement('td');
footerRow.appendChild(td3);
td3.textContent='Total';
//--------------------------------------------
this.sumOfColumn();
for (let i = 0; i < times.length; i++) {
  const td4 =document.createElement('td');
  footerRow.appendChild(td4);
  td4.textContent=footerData[i];
}
// console.log(totalOfTotal);

// const table= document.getElementById('Table-Of-Shops');
// footer();
// const trTotalELE = document.createElement('tr');
// table.appendChild(trTotalELE);

// const trTotalELE1=document.createElement('td');
// trTotalELE.appendChild(trTotalELE1);
// trTotalELE1.textContent=('Total');

// for(let i=0;i<=times.length;i++){
//   const totalSum = document.createElement('td');
//   trTotalELE.appendChild(totalSum);
// }

// const totalFromShops = new CookiesShop('Totals');
// totalFromShops.render();


// CookiesShop.prototype.render=function(){
//   const table= document.getElementById('Table-Of-Shops');
//   const trEleTotal=document.createElement('tr');
//   table.appendChild(trEleTotal);
//   trEleTotal.textContent=('Total');
// };
// for(let i=0;i<cou)


function randomNum(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
