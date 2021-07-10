"use strict";
var _a, _b;
let blog = [];
class Locations {
    constructor(date, name, img, city, zip, adress) {
        this.date = date;
        this.name = name;
        this.img = img;
        this.city = city;
        this.zip = zip;
        this.adress = adress;
        blog.push(this);
    }
    display() {
        return `<div class="card pt-2  col-12 col-sm-6 col-lg-3 bg-white border-1 rounded-0  border-secondary text-muted fw-light">
                    <h6 class="card-title font-monospace fw-lighter text-danger text-center">${this.name}</h6>
                    <img src="${this.img}" class="card-img-top  d-none d-sm-block" >
                    <div class="card-body">
                        <h6 class="card-title fw-lighter text-primary">${this.city}</h6>
                        <p class="card-text  fs-7 text">${this.adress} , ${this.zip}</p>`;
    }
    closingDiv() {
        return `</div>
                    <div class="card-footer bg-transparent border-warning fs-7 fw-lighter text-center ">Created: ${this.date}</div>
                </div>`;
    }
}
class Restaurant extends Locations {
    constructor(date, name, img, city, zip, adress, tel, type, webAdress) {
        super(date, name, img, city, zip, adress);
        this.tel = tel;
        this.type = type;
        this.webAdress = webAdress;
    }
    display() {
        return `${super.display()} 
        <p class="card-text"><h6>${this.type}</h6> </p>
        <p class="card-text">Tel : ${this.tel} </p>
        <p class="card-text">Web : <a href="http://${this.webAdress}" target="_blank" class="text-reset">${this.webAdress}</a> </p>`;
    }
}
class Events extends Locations {
    constructor(date, name, img, city, zip, adress, eventDate, eventTime, ticketPrice) {
        super(date, name, img, city, zip, adress);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
    }
    display() {
        return `${super.display()} 
        <p class="card-text"><h6>Event Date : ${this.eventDate}</h6></p>
        <p class="card-text">Event Time : ${this.eventTime}</p>
        <p class="card-text">Ticket Price : ${this.ticketPrice}</p>`;
    }
}
// creating the objects
var Vienna = new Locations('October 01, 2000 01:00', 'Monastery', 'img/monastery.jpeg', 'Lisbon', 1010, 'Karlsplatz 1');
var ZooVienna = new Locations('January 06, 1995 15:10', 'Zoo', 'img/lion.jpeg', 'New York', 1130, 'Maxingstraße 13b');
var LemmonLeaf = new Restaurant('December 17, 1999 13:30', 'Restaurant', 'img/restaurant.jpeg', 'Paris', 1050, 'Kettenbrückengasse 19', '0699  1802060', 'Fancy Food', 'www.lemonleaf.at');
var Sixta = new Restaurant('May 20, 2020 21:24', 'Bar', 'img/bar.jpeg', 'London', 1050, 'Schönbrunner Straße 21', '+43 1 58 528 56', 'Fancy Drinks', 'www.sixta-restaurant.at');
var Kris = new Events('August 25, 2021 16:55', 'Male Star', 'img/male.jpeg', 'Madrid', 1150, 'Wiener Stadthalle, Halle F, Roland Rainer Platz 1', 'Fr., 15.11.2021', '20:00', '58,50 EUR');
var Lenny = new Events('December 17, 2010 20:20', 'Female Star', 'img/female.jpeg', 'Vienna', 1050, 'Wiener Stadthalle - Halle D, Roland Rainer Platz 1', 'Sat., 09.12.2029', '19:30', '47,80 EUR');
for (let val of blog) {
    document.getElementById("show").innerHTML += val.display() + val.closingDiv();
}
function sortUp() {
    blog.sort(function (a, b) {
        var dateA = new Date(a.date), dateB = new Date(b.date);
        return dateA - dateB;
    });
    let text = "";
    for (let val of blog) {
        text += val.display() + val.closingDiv();
    }
    ;
    document.getElementById("show").innerHTML = text;
}
function sortDown() {
    blog.sort(function (a, b) {
        var dateA = new Date(a.date), dateB = new Date(b.date);
        return dateB - dateA;
    });
    let text = "";
    for (let val of blog) {
        text += val.display() + val.closingDiv();
    }
    ;
    document.getElementById("show").innerHTML = text;
}
(_a = document.getElementById("up")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", sortUp);
(_b = document.getElementById("down")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", sortDown);
