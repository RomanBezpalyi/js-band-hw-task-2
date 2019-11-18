import getTruckIds from "./getTruckIds";
import getTruckById from "./getTruckById";

// CALLBACK

export function getTruckListCallback(callback) {
  setTimeout(() => {
    getTruckIds()
      .then(ids =>
        Promise.all(
          ids.map(id =>
            getTruckById(id).catch(() =>
              getTruckById(id).catch(() =>
                getTruckById(id).catch(error => console.error(error))
              )
            )
          )
        )
      )
      .then(trucks => {
        const data = trucks.filter(truck => !!truck);
        if (!data.length)
          return callback(
            undefined,
            "Internal error while getting a truck info."
          );
        callback(data);
      });
  }, 1000);
}

// PROMISE

export function getTruckListPromise() {
  return new Promise((resolve, reject) =>
    getTruckIds()
      .then(ids =>
        Promise.all(
          ids.map(id =>
            getTruckById(id).catch(() =>
              getTruckById(id).catch(() =>
                getTruckById(id).catch(error => console.error(error))
              )
            )
          )
        )
      )
      .then(trucks => {
        const data = trucks.filter(truck => !!truck);
        if (!data.length)
          return reject("Internal error while getting a truck info.");
        resolve(data);
      })
  );
}

// ASYNC/AWAIT

export async function getTruckListAsyncAwait() {
  try {
    const ids = await getTruckIds();
    const trucksById = await Promise.all(
      ids.map(async id => {
        try {
          return await getTruckById(id);
        } catch (error) {
          try {
            return await getTruckById(id);
          } catch (error) {
            try {
              return await getTruckById(id);
            } catch (error) {
              console.error(error);
            }
          }
        }
      })
    );

    const data = trucksById.filter(truck => !!truck);

    if (!data.length) {
      throw new Error("Internal error while getting a truck info.");
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}
