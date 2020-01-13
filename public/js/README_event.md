The purpose of events.js is to display on the webpage relevant Eventbrite events for users to choose from.

Lines 1-9 obtain and pass the user's location, the keywords for the API event search, and the HTML id tag

Lines 11-50, function getEvents, queries the Eventbrite API. Line 42 is significant because it is where the queried events are made into seperate cards for each event.  

Lines 52-80, function cardify, takes the relevant data from each queried event and inserts each data point into it's proper place in the pseudo HTML. This pseudo HTML is appended in line 42. 
