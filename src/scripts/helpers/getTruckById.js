function getTruckByIdCallback(id, callback) {
  setTimeout(() => {
    const isError = Math.ceil(Math.random() * 1000) < 500;
    if (isError) {
      return callback(undefined, "Internal error");
    }
    return callback({
      id: id,
      model: `truck ${id}`
    });
  }, 1000);
}

function getTruckById(id) {
  return new Promise((resolve, reject) =>
    getTruckByIdCallback(id, (result, error) =>
      error ? reject(error) : resolve(result)
    )
  );
}

export default getTruckById;
