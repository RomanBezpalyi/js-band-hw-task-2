function getTruckIdsCallback(callback) {
  setTimeout(() => {
    return callback([1, 2, 5, 9, 67]);
  }, 1000);
}

function getTruckIds() {
  return new Promise(resolve => getTruckIdsCallback(result => resolve(result)));
}

export default getTruckIds;
