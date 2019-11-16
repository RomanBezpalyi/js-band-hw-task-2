# js-band-hw-task-2
Ciklum University: JS Band Internship. Homework task

During the implementation of our POC, we found the issue with the backend. On the backend side, we have haven't a method for retrieving all data for a list of trucks. We have had two methods:

function getTruckIdsCallback(callback) {
  setTimeout(() => {
    callback([1, 2, 5, 9, 67]);
  }, 1000);
}

function getTruckIds() {
  return new Promise(resolve => {
    getTruckIdsCallback(result => resolve(result));
  });
}

function getTruckByIdCallback(id, callback) {
  setTimeout(() => {
    const isError = Math.ceil(Math.random() * 1000) < 100;
    if (isError) {
      return callback(undefined, "Internal error");
    }
    callback({
      id: id,
      model: `truck ${id}`
    });
  });
}

function getTruckById() {
  //Please implement this method by use getTruckById Callback
}
We want to implement a new method for retrieving information about trucks:

// callback(list, err)
// list - list of trucks
function getTruckListCallback(callback) {

}

function getTruckListPromise(callback) {
    return new Promise(((resolve, reject) => {
        ...
    }))
}

async function getTruckListAsynAwait() {
    ...
}
Objectives
Create the method for retrieving data for the list of trucks from the backend.
Acceptance criteria
getTruckListCallback (use methods with callback) should be implemented
getTruckListPromise (use methods with promise) should be implemented
getTruckListAsyncAwait (use async, await) should be implemented
Methods should try to get document again if received error, but no more than two times
if the error happens more than two times, the method should skip this truck
