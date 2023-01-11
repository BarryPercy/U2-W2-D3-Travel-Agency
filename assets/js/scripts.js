deals=[
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    },
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    },
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    },
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    },
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    },
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    },
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    },
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    }  
]

summer = [
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    },
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    },
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    },
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    },
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    },
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    }
]
dealOfDay= {
    "image":"assets/images/corfu.jpg",
    "destination":"Corfu",
    "month":"August",
    "days":"12th-19th",
    "nights":"7",
    "price":"£500",
    "package":"All Inclusive",
    "flightsFrom":"Belfast International",
    "stars":"4"
}  

lastMinuteDeals=[
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    },
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    },
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    },
    {
        "image":"assets/images/corfu.jpg",
        "destination":"Corfu",
        "month":"August",
        "nights":"7",
        "price":"£500",
        "package":"All Inclusive",
        "flightsFrom":"Belfast",
        "stars":"4"
    }
]
feedback=[
    {
        "name":"Mantas",
        "location":"Venice",
        "rating":"1",
        "feedback":"Worst holiday ever, broke my legs on a zip line"
    },
    {
        "name":"Ben",
        "location":"Berlin",
        "rating":"5",
        "feedback":"Great to get away from my baby"
    },
    {
        "name":"Batı",
        "location":"Fuerteventura",
        "rating":"3",
        "feedback":"I hate going outside"
    },
]
let latestDeals=document.getElementById("deals-of-the-week");
let welcomeSummer=document.getElementById("welcome-summer");
let dealOfTheDay=document.getElementById("deal-of-the-day");
let feedbackLocation=document.getElementById("feedback");
let lastMinute=document.getElementById("last-minute");
function createLatestDeals(){
    for(let i=0;i<deals.length;i++){
        latestDeals.innerHTML+=`<div class="col-lg-3 col-md-4 col-6 holiday-card">
        <div class="card">
            <img src=${deals[i].image} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${deals[i].destination}</h5>
                <!--<p class="card-text">${deals[i].month}</p>-->
                <p class="card-text">From ${deals[i].price} pp</p>
                <p class="card-text">${deals[i].package}</p>
                <!--<p class="card-text">From ${deals[i].flightsFrom}</p>-->
                <a href="#" class="btn btn-primary">View Deal</a>
            </div>  
        </div>
    </div>`
    }
}

function createWelcomeSummer(){
    for(let i=0;i<summer.length;i++){
        welcomeSummer.innerHTML+=`<div class="col-lg-2 col-md-4 col-6 holiday-card shadow-lg">
        <div class="card">
            <img src=${summer[i].image} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${summer[i].destination}</h5>
                <!--<p class="card-text">${summer[i].month}</p>-->
                <p class="card-text">${summer[i].price} pp</p>
                <p class="card-text">${summer[i].package}</p>
                <!--<p class="card-text">From ${summer[i].flightsFrom}</p>-->
                <a href="#" class="btn btn-primary">View Deal</a>
            </div>  
        </div>
    </div>`
    }
}

function createDealOfDay(){
        dealOfTheDay.innerHTML=`
            <div class="col-8"><img src=${dealOfDay.image} class="card-img-top" alt="..."></div>
            <div class="deal-of-day-text align-middle col-4">
                <h5>${dealOfDay.destination}</h5>
                <p>${dealOfDay.month}  ${dealOfDay.days}</p>
                <p>${dealOfDay.price} pp</p>
                <p>${dealOfDay.package}</p>
                <p>From ${dealOfDay.flightsFrom}</p>
                <a href="#" class="btn btn-primary deal-of-day-button">View Deal</a>
            </div>`
}
function createLastMinute(){
    for(let i=0;i<lastMinuteDeals.length;i++){
        lastMinute.innerHTML+=`<div class="col-lg-3 col-md-4 col-6 holiday-card">
        <div class="card">
            <img src=${lastMinuteDeals[i].image} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${lastMinuteDeals[i].destination}</h5>
                <p class="card-text">${lastMinuteDeals[i].month}</p>
                <p class="card-text">${lastMinuteDeals[i].price} pp</p>
                <p class="card-text">${lastMinuteDeals[i].package}</p>
                <p class="card-text">From ${lastMinuteDeals[i].flightsFrom}</p>
                <a href="#" class="btn btn-primary">View Deal</a>
            </div>  
        </div>
    </div>`
    }
}

function createFeedback(){
    for(let i=0;i<feedback.length;i++){
        let starsString = "";
        for(let j=0;j<feedback[i].rating;j++){
            starsString += '<img src="assets/images/star.png">'
        }
        feedbackLocation.innerHTML+=`<div class="feedback row mb-5 p-3">
            <h5 class=>${feedback[i].name}</h5>
            <p class=>${starsString}</p>
            <p class=>${feedback[i].feedback}.</p>
            </div>
            `
    }
}
window.onload = function(){
    createLatestDeals();
    createWelcomeSummer();
    createDealOfDay();
    createLastMinute();
    createFeedback();
}