let blog: any=[];

class Locations {
    constructor(public date : string,  public name : string, public img : string, public city : string, public zip : number, public adress : string){
        blog.push(this);
    }
    
    display() {
        return `<div class="card pt-2  col-12 col-sm-6 col-lg-3 bg-white border-1 rounded-0  border-secondary text-muted fw-light">
                    <h6 class="card-title font-monospace fw-lighter text-danger text-center">${this.name}</h6>
                    <img src="${this.img}" class="card-img-top  d-none d-sm-block" >
                    <div class="card-body">
                        <h6 class="card-title fw-lighter text-primary">${this.city}</h6>
                        <p class="card-text  fs-7 text">${this.adress} , ${this.zip}</p>`
    }
    closingDiv() {
            return `</div>
                    <div class="card-footer bg-transparent border-warning fs-7 fw-lighter text-center ">Created: ${this.date}</div>
                </div>`
    }
}

class Restaurant extends Locations  {
    constructor(  date: string, name: string,  img : string,  city : string,  zip : number,  adress : string, public tel : string, public type : string, public webAdress : string) {
        super(date, name, img, city, zip, adress);
    }

    display() { 
        return `${super.display()} 
        <p class="card-text"><h6>${this.type}</h6> </p>
        <p class="card-text">Tel : ${this.tel} </p>
        <p class="card-text">Web : <a href="http://${this.webAdress}" target="_blank" class="text-reset">${this.webAdress}</a> </p>`  
    }
}

class Event extends Locations  {
    constructor(  date : string, name: string,  img : string,  city : string, zip : number,  adress : string, public eventDate : string, public eventTime : string, public ticketPrice : string) {
        super(date, name, img, city, zip, adress);
    }

    display() { 
        return `${super.display()} 
        <p class="card-text"><h6>Event Date : ${this.eventDate}</h6></p>
        <p class="card-text">Event Time : ${this.eventTime}</p>
        <p class="card-text">Ticket Price : ${this.ticketPrice}</p>`   
    }
}

// create the objects

var Vienna = new Locations('October 01, 2000 01:00','St. Charles Church','img/church.jpeg', 'Vienna', 1010, 'Karlsplatz 1',);
var ZooVienna = new Locations('January 06, 1995 15:10','Zoo Vienna','img/zoo.jpeg', 'Vienna', 1130, 'Maxingstraße 13b',);
var LemmonLeaf = new Restaurant('December 17, 1999 13:30','Lemmon Leaf','img/thai.png', 'Vienna', 1050, 'Kettenbrückengasse 19', '0699  1802060','Thai Restaurant', 'www.lemonleaf.at');
var Sixta = new Restaurant('May 20, 2020 21:24','Sixta','img/sixta.png', 'Vienna', 1050, 'Schönbrunner Straße 21','+43 1 58 528 56','Restaurant & Bar', 'www.sixta-restaurant.at');
var Kris = new Event('August 25, 2021 16:55','Kris Kristofferson','img/kris.jpeg', 'Vienna', 1150, 'Wiener Stadthalle, Halle F, Roland Rainer Platz 1', 'Fr., 15.11.2021','20:00', '58,50 EUR');
var Lenny = new Event('December 17, 2010 20:20','Lenny Kravitz','img/lenny.jpeg', 'Vienna', 1050, 'Wiener Stadthalle - Halle D, Roland Rainer Platz 1', 'Sat., 09.12.2029','19:30', '47,80 EUR');


for (let val of blog) {
    (document.getElementById("show") as HTMLElement).innerHTML += val.display() + val.closingDiv();
  }

function sortUp() {
    blog.sort(function(a : any, b : any) {
         let dateA = new Date(a.date),  dateB:any = new Date(b.date);
        return dateB - dateA;
    });

    let text : string = "";

    for (let val of blog) {
        text += val.display() + val.closingDiv()
    };
    (document.getElementById("show") as HTMLElement).innerHTML = text;
}

function sortDown() {
    blog.sort(function(a : any, b : any) {
        var dateA = new Date(a.date), dateB = new Date(b.date);
        return dateA - dateB;
    });

    let text : string = "";

    for (let val of blog) {
        text += val.display() + val.closingDiv() 
    };
    (document.getElementById("show") as HTMLElement).innerHTML = text;
}

document.getElementById("up")?.addEventListener("click", sortUp);
document.getElementById("down")?.addEventListener("click", sortDown);