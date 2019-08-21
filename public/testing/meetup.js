navigator.geolocation.getCurrentPosition(function(position) {
  //console.log(position);
  //console.log(position.coords);
  getEvents(position.coords);
});

let date = new Date();
//prettier ignore
let startDate = `&start_date.range_start=${date.toISOString().replace(/\.\d{3}/, "")}`;

let oneMonthFromNow = new Date(date.setMonth(date.getMonth() + 1));
//prettier-ignore
let endDate = `&start_date.range_end=${oneMonthFromNow.toISOString().replace(/\.\d{3}/, "")}`;

let keyword = "&q=hike"; //todo - make this dynamic

let token = "token=W2DSUTYR2U754N5AZAFM";

function getEvents({ latitude, longitude }) {
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();
  // Open a new connection, using the GET request on the URL endpoint
  request.open(
    "GET",
    `https://www.eventbriteapi.com/v3/events/search/?${token}${keyword}&location.latitude=${latitude}&location.longitude=${longitude}${startDate}${endDate}`,
    true
  );

  request.onload = function() {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      //prettier-ignore
      let sortedEvents = data.events.sort((a, b) => new Date(a.start.local) - new Date(b.start.local));
      console.log(sortedEvents);
      cardify(sortedEvents);
    } else {
      console.log("error");
    }
  };

  // Send request
  request.send();
}

function cardify(sortedEvents) {
  for (let i = 0; i < sortedEvents.length; i++) {
    let d = new Date(sortedEvents[i].start.local).toLocaleDateString();
    let date = d.substring(0, d.length - 5);
    //prettier-ignore
    let time = new Date(sortedEvents[i].start.local).toLocaleTimeString().replace(/:\d+/, "");
    let card = `<div class="card" style="width: 18rem">
    <a href="${sortedEvents[i].url}">
        <img
        class="card-img-top"
        src="${sortedEvents[i].logo.url}"
        alt="Card image cap"
        />
    </a>
    <div class="card-body">
        <h5 class="card-title">${sortedEvents[i].name.text}</h5>
        <div class="row">
            <div class="col left">
                <p class="card-date">${date}</p>
            </div>   
            <div class="col right"> 
                <p class="card-time">${time}</p>
            </div>
        </div>
    </div>
    </div>`;

    document.getElementById("hike").innerHTML = card;
  }
}

//let photo = event.logo.url;
// var textnode = document.createTextNode(event.name.text);
// document.getElementById("text").appendChild(textnode);

// var node = document.createElement("LI");
// var textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("engage").appendChild(node);
