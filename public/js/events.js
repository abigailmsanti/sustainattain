navigator.geolocation.getCurrentPosition(function(position) {
  [
    { keyword: "hiking AND walking", selector: "#hiking" },
    { keyword: "planting AND grow", selector: "#gardening" },
    { keyword: "indigenous", selector: "#indigenous" }
  ].map(({ keyword, selector }) => {
    getEvents(position.coords, keyword, selector);
  });
});

function getEvents({ latitude, longitude }, keyword, selector) {
  let date = new Date();
  //prettier-ignore
  let startDate = `&start_date.range_start=${date.toISOString().replace(/\.\d{3}/, "")}`;

  let oneMonthFromNow = new Date(date.setMonth(date.getMonth() + 2));
  //prettier-ignore
  let endDate = `&start_date.range_end=${oneMonthFromNow.toISOString().replace(/\.\d{3}/, "")}`;

  keyword = `&q=${keyword}`;

  let token = "token=W2DSUTYR2U754N5AZAFM";

  latitude = `&location.latitude=${latitude}`;
  longitude = `&location.longitude=${longitude}`;
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();
  // Open a new connection, using the GET request on the URL endpoint
  request.open(
    "GET",
    `https://www.eventbriteapi.com/v3/events/search/?${token}${keyword}${latitude}${longitude}${startDate}${endDate}`,
    true
  );

  request.onload = function() {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      //prettier-ignore
      let sortedEvents = data.events.sort((a, b) => new Date(a.start.local) - new Date(b.start.local));
      // console.log(sortedEvents);
      sortedEvents.map(cardify).map(card => $(card).appendTo(selector));
      // cardify(sortedEvents);
    } else {
      console.log("error");
    }
  };

  // Send request
  request.send();
}

function cardify({ url, logo, name, start }) {
  logo = logo || { url: "/img/eventbrite-logo.png" };
  let d = new Date(start.local).toLocaleDateString();
  let date = d.substring(0, d.length - 5);
  //prettier-ignore
  let time = new Date(start.local).toLocaleTimeString().replace(/:\d+/, "");

  return `<div class="card" style="width: 18rem">
    <a href="${url}">
        <img
        class="card-img-top"
        src="${logo.url}"
        alt="Card image cap"
        />
    </a>
    <div class="card-body">
        <h5 class="card-title">${name.text}</h5>
        <div class="row" id="time-row">
            <div class="col date">
                <p class="card-date">${date}</p>
            </div>   
            <div class="col time"> 
                <p class="card-time">${time}</p>
            </div>
        </div>
    </div>
  </div>
  `;
}

//let photo = event.logo.url;
// var textnode = document.createTextNode(event.name.text);
// document.getElementById("text").appendChild(textnode);

// var node = document.createElement("LI");
// var textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("engage").appendChild(node);

//-------------------------------------------------------------------------------------------------

//   [
//     // { keyword: "hiking AND walking", selector: "#hike" },
//     // { keyword: "planting AND grow", selector: "#plants" },
//     // { keyword: "indigenous", selector: "#justice" }
//     // { categories: "110", subcategories: "", selector: "#hike" },
//     { categories: "110", subcategories: "10999", selector: "#plants" },
//     // { categories: "", subcategories: "", selector: "#justice" }
//   ].map(({ categories, subcategories, selector }) => {
//     getEvents(position.coords, categories, subcategories, selector);
//   });
// });

// function getEvents({ latitude, longitude }, categories, subcategories, selector) {
//   let date = new Date();
//   //prettier-ignore
//   let startDate = `&start_date.range_start=${date.toISOString().replace(/\.\d{3}/, "")}`;

//   let oneMonthFromNow = new Date(date.setMonth(date.getMonth() + 2));
//   //prettier-ignore
//   let endDate = `&start_date.range_end=${oneMonthFromNow.toISOString().replace(/\.\d{3}/, "")}`;

//   categories = `&categories=${categories}`;

//   subcategories = `&subcategories=${subcategories}`

//   let token = "token=W2DSUTYR2U754N5AZAFM";

//   latitude = `&location.latitude=${latitude}`;
//   longitude = `&location.longitude=${longitude}`;
//   // Create a request variable and assign a new XMLHttpRequest object to it.
//   var request = new XMLHttpRequest();
//   // Open a new connection, using the GET request on the URL endpoint
//   request.open(
//     "GET",
//     `https://www.eventbriteapi.com/v3/events/search/?${token}${categories}${latitude}${longitude}${startDate}${endDate}`,
//     true
//   );