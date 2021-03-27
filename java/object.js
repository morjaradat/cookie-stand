'use strict';
let times=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let footerData=[];
const table= document.getElementById('Table-Of-Shops');
this.totalCulomn=0;
this.totalOfTotal=0;
let allLocation=[];
let sumOfTotal=0;
function CookiesShop(location,min,max,avg){
  this.location=location;
  this.min=min;
  this.max=max;
  this.avg=avg;
  this.totalForDay=0;
  this.totalCulomn=0;
  this.totalOfTotal=0;
  this.footerData=[];
  this.Cookies=[];
  this.cookiesArray=[];
  allLocation.push(this);
}
CookiesShop.prototype.getNum=function(min, max) {
  for(let i=0;i<times.length;i++){
    let Cookies =Math.floor(randomNum(min,max)*this.avg) ;
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
    // console.log(typeof this.totalForDay);
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
  // console.log(this.cookiesArray);
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

// console.log(allLocation);
// console.log(seattle);
this.sumOfColumn=function()
{
  // let city=[seattle,tokyo,dubai,paris,lima];
  for (let i = 0; i < times.length; i++) {

    {
      for (let x = 0; x < allLocation.length; x++) {
        this.totalCulomn=this.totalCulomn+allLocation[x].cookiesArray[i];
        // console.log(typeof typeof this.totalCulomn);
        // console.log(allLocation[x]);
      }
    }footerData.push(this.totalCulomn);
    this.totalOfTotal=this.totalOfTotal+this.totalCulomn;
    this.sumOfTotal= this.sumOfTotal+footerData;
    // console.log(footerData);
    // console.log(typeof typeof footerData);
    this.totalCulomn=0;
  }
};
footerData.shift();

this.sumOfColumn();

let sumOfTotal2= function(){

  const footerRow = document.createElement('tr');
  table.appendChild(footerRow);

  const td3=document.createElement('td');
  footerRow.appendChild(td3);
  td3.textContent='Total';

  for (let i = 0; i < times.length; i++) {
    const td4 =document.createElement('td');
    footerRow.appendChild(td4);
    td4.textContent= footerData[i];
  }
  for(let i=0;i<footerData.length;i++){
    sumOfTotal = sumOfTotal +footerData[i];
  // console.log(sumOfTotal);
  }
  const finTotal=document.createElement('td');
  footerRow.appendChild(finTotal);
  finTotal.textContent=(sumOfTotal);
};

sumOfTotal2();
console.log(sumOfTotal);
// console.log(this);

let myForm=document.getElementById('new-shop');

myForm.addEventListener('submit',addShop);

function addShop(event){
  event.preventDefault();

  let StoreName=event.target.StoreName.value;

  let MinimumCustomers =Number(event.target.MinimumCustomers.value) ;

  let MaximumCustomers =Number(event.target.MaximumCustomers.value) ;

  let AverageSales =Number(event.target.AverageSales.value) ;

  let newShop =new CookiesShop(StoreName,MinimumCustomers,MaximumCustomers,AverageSales);

  document.getElementById('Table-Of-Shops').deleteRow(-1);
  newShop.render();
  sumOfTotal2();
  console.log(sumOfTotal);

  // console.log(allLocation);
  // const footerRow = document.createElement('tr');
  // table.appendChild(footerRow);
  // const td3=document.createElement('td');
  // footerRow.appendChild(td3);
  // td3.textContent='Total';
  // for (let i = 0; i < times.length; i++) {
  //   const td4 =document.createElement('td');
  //   footerRow.appendChild(td4);
  //   td4.textContent=footerData[i];
  // }
}



console.log(allLocation);
function randomNum(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
