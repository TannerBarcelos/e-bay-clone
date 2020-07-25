# e-commerce-site

An e-commerce site built utilizing React, Redux and ExpressJS.
<br>

- I used a proxy to connect my front end and backend together such that my react front end can send axios calls to the express server i made so that my app can hit the ebay API and return products based off search criteria entered in the search bar.

- The search functionality is apart of ebay's engineering logic, however with react controlled components and state, I was able to handle user entries in a clean way in the data flow

- To handle app level state, I leveraged Redux. This was the first time for me using it, so it was a struggle at times it wrap my head around. Particullarly with implicit dispatching for non-async action creators, and also how to update an items qty in the cart, if it exists, by using JS built in array methods

- As ebays API was a bit harder to hit, I kept encountering CORS errors, so, that is why a backend was needed with a proxy so that i can indeed use an action creator (otherwise a request in the component: not recommnded) to send a call to port 5000 (where my backend server lives) which in turn sends a post request from express to ebya, returns the data and sends the response back as a payload to my client side. This took time to understand but I was able to learn a bit about CORS and why a lot of the beefier API require a backend to hit it with.
