import {
  getTruckListCallback,
  getTruckListPromise,
  getTruckListAsyncAwait
} from "./scripts/helpers/getTruckList";

getTruckListCallback((data, error) =>
  error ? console.error(error) : console.log("Truck List Callback", data)
);

// getTruckListPromise()
//   .then(data => console.log("Truck List Promise", data))
//   .catch(err => console.error(err));

// getTruckListAsyncAwait().then(data =>
//   data ? console.log("Truck List Async/Await", data) : null
// );
