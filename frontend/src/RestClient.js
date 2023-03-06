/* fetches api data from backend and extracts its json body */
export async function fetchAllFilms() {
  return await fetch("http://localhost:4000/films", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}

export async function fetchAllSongs() {
  return await fetch("http://localhost:4000/songs", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}

export async function fetchAllPodcasts() {
  return await fetch("http://localhost:4000/podcasts", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
