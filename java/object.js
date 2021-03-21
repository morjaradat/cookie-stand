'use strict';
let times=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


const seattle = {
  location:'seattle',
  NumberBerHour:[],
  numberOfCookies:0,
  min:23,
  max:65,
  avg:6.3,
  total1:[],
  getNum :function(min, max) {
    let Cookies =Math.floor(randomNum(min,max)*this.avg);
    this.total1.push(Cookies);
    // console.log(this.total1);
    return Cookies;
  },
  render:function (){
    const section = document.getElementById('salmon-Cookies');

    const articleEle=document.createElement('article');
    section.appendChild(articleEle);

    const h2Ele=document.createElement('h2');
    articleEle.appendChild(h2Ele);
    h2Ele.textContent=(this.location);

    const ulEl = document.createElement('ul');
    articleEle.appendChild(ulEl);

    for(let i=0;i<times.length;i++)
    {
      const liEle = document.createElement('li');
      ulEl.appendChild(liEle);
      liEle.textContent = (`${times[i]} : ${this.getNum(this.min,this.max)} Cookies`);
      console.log(liEle);
    }
    this.total1.shift();
    let sum =this.total1.reduce(function(a, b){
      return a + b;
    }, 0);
    // console.log(this.total1);
    // console.log(sum);

    const finTotal=document.createElement('li');
    ulEl.appendChild(finTotal);
    finTotal.textContent=(`Total :${sum} Cookies`);
  },

};
function randomNum(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


seattle.getNum(this.min,this.max);
seattle.render();


const Tokyo = {
  location:'Tokyo',
  NumberBerHour:[],
  numberOfCookies:0,
  min:3,
  max:24,
  avg:1.2,
  total1:[],
  getNum :function(min, max) {
    let Cookies =Math.floor(randomNum(min,max)*this.avg);
    this.total1.push(Cookies);
    // console.log(this.total1);
    return Cookies;
  },
  render:function (){
    const section = document.getElementById('salmon-Cookies');

    const articleEle=document.createElement('article');
    section.appendChild(articleEle);

    const h2Ele=document.createElement('h2');
    articleEle.appendChild(h2Ele);
    h2Ele.textContent=(this.location);

    const ulEl = document.createElement('ul');
    articleEle.appendChild(ulEl);

    for(let i=0;i<times.length;i++)
    {
      const liEle = document.createElement('li');
      ulEl.appendChild(liEle);
      liEle.textContent = (`${times[i]} : ${this.getNum(this.min,this.max)} Cookies`);
      console.log(liEle);
    }
    this.total1.shift();
    let sum =this.total1.reduce(function(a, b){
      return a + b;
    }, 0);
    // console.log(this.total1);
    // console.log(sum);

    const finTotal=document.createElement('li');
    ulEl.appendChild(finTotal);
    finTotal.textContent=(`Total :${sum} Cookies`);
  },

};

Tokyo.getNum(this.min,this.max);
Tokyo.render();

const Dubai = {
  location:'Dubai',
  NumberBerHour:[],
  numberOfCookies:0,
  min:11,
  max:38,
  avg:3.7,
  total1:[],
  getNum :function(min, max) {
    let Cookies =Math.floor(randomNum(min,max)*this.avg);
    this.total1.push(Cookies);
    // console.log(this.total1);
    return Cookies;
  },
  render:function (){
    const section = document.getElementById('salmon-Cookies');

    const articleEle=document.createElement('article');
    section.appendChild(articleEle);

    const h2Ele=document.createElement('h2');
    articleEle.appendChild(h2Ele);
    h2Ele.textContent=(this.location);

    const ulEl = document.createElement('ul');
    articleEle.appendChild(ulEl);

    for(let i=0;i<times.length;i++)
    {
      const liEle = document.createElement('li');
      ulEl.appendChild(liEle);
      liEle.textContent = (`${times[i]} : ${this.getNum(this.min,this.max)} Cookies`);
      console.log(liEle);
    }
    this.total1.shift();
    let sum =this.total1.reduce(function(a, b){
      return a + b;
    }, 0);
    // console.log(this.total1);
    // console.log(sum);

    const finTotal=document.createElement('li');
    ulEl.appendChild(finTotal);
    finTotal.textContent=(`Total :${sum} Cookies`);
  },

};

Dubai.getNum(this.min,this.max);
Dubai.render();

const Paris = {
  location:'Paris',
  NumberBerHour:[],
  numberOfCookies:0,
  min:20,
  max:38,
  avg:2.3,
  total1:[],
  getNum :function(min, max) {
    let Cookies =Math.floor(randomNum(min,max)*this.avg);
    this.total1.push(Cookies);
    // console.log(this.total1);
    return Cookies;
  },
  render:function (){
    const section = document.getElementById('salmon-Cookies');

    const articleEle=document.createElement('article');
    section.appendChild(articleEle);

    const h2Ele=document.createElement('h2');
    articleEle.appendChild(h2Ele);
    h2Ele.textContent=(this.location);

    const ulEl = document.createElement('ul');
    articleEle.appendChild(ulEl);

    for(let i=0;i<times.length;i++)
    {
      const liEle = document.createElement('li');
      ulEl.appendChild(liEle);
      liEle.textContent = (`${times[i]} : ${this.getNum(this.min,this.max)} Cookies`);
      console.log(liEle);
    }
    this.total1.shift();
    let sum =this.total1.reduce(function(a, b){
      return a + b;
    }, 0);
    // console.log(this.total1);
    // console.log(sum);

    const finTotal=document.createElement('li');
    ulEl.appendChild(finTotal);
    finTotal.textContent=(`Total :${sum} Cookies`);
  },

};

Paris.getNum(this.min,this.max);
Paris.render();

const Lima = {
  location:'Lima',
  NumberBerHour:[],
  numberOfCookies:0,
  min:2,
  max:16,
  avg:4.6,
  total1:[],
  getNum :function(min, max) {
    let Cookies =Math.floor(randomNum(min,max)*this.avg);
    this.total1.push(Cookies);
    // console.log(this.total1);
    return Cookies;
  },
  render:function (){
    const section = document.getElementById('salmon-Cookies');

    const articleEle=document.createElement('article');
    section.appendChild(articleEle);

    const h2Ele=document.createElement('h2');
    articleEle.appendChild(h2Ele);
    h2Ele.textContent=(this.location);

    const ulEl = document.createElement('ul');
    articleEle.appendChild(ulEl);

    for(let i=0;i<times.length;i++)
    {
      const liEle = document.createElement('li');
      ulEl.appendChild(liEle);
      liEle.textContent = (`${times[i]} : ${this.getNum(this.min,this.max)} Cookies`);
      console.log(liEle);
    }
    this.total1.shift();
    let sum =this.total1.reduce(function(a, b){
      return a + b;
    }, 0);
    // console.log(this.total1);
    // console.log(sum);

    const finTotal=document.createElement('li');
    ulEl.appendChild(finTotal);
    finTotal.textContent=(`Total :${sum} Cookies`);
  },

};

Lima.getNum(this.min,this.max);
Lima.render();
