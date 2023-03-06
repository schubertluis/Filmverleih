import React from "react";
import { fetchAllFilms, fetchAllSongs, fetchAllPodcasts } from "./RestClient";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      songs: [],
      podcasts: [],
    };
    this.fetchDisplayDataFilms = this.fetchDisplayDataFilms.bind(this);
    this.fetchDisplayDataSongs = this.fetchDisplayDataSongs.bind(this);
    this.fetchDisplayDataPodcasts = this.fetchDisplayDataPodcasts.bind(this);
  }
  async fetchDisplayDataFilms() {
    let dataFilms = await fetchAllFilms();
    this.setState({
      films: dataFilms,
    });
  }

  async fetchDisplayDataSongs() {
    let dataSongs = await fetchAllSongs();
    this.setState({
      songs: dataSongs,
    });
  }

  async fetchDisplayDataPodcasts() {
    let dataPodcasts = await fetchAllPodcasts();
    this.setState({
      podcasts: dataPodcasts,
    });
  }

  render() {
    return (
      <div>
        <div id="title">FILMVERLEIH 🎬 🍿</div>
        <button id="fetcher" onClick={this.fetchDisplayDataFilms}>
          Klicke und entdecke unsere Filme 🤩
        </button>
        <div className="data">
          {/* generates a div for every entry */}
          {this.state.films.map((film, key) => (
            <div id="film" key={key}>
              <b>{film.title}</b> <br />
              Year: {film.year} <br />
              Genre: {film.genre} <br />
              Production: {film.studio} <br />
              Available : {film.available} <br />
            </div>
          ))}
        </div>

        <div id="title">MUSIKVERLEIH 🎹 🎸</div>
        <button id="fetcher" onClick={this.fetchDisplayDataSongs}>
          Klicke und entdecke unsere Musik 🤩
        </button>
        <div className="data">
          {/* generates a div for every entry */}
          {this.state.songs.map((song, key) => (
            <div id="film" key={key}>
              <b>{song.title}</b> <br />
              Artist: {song.artist} <br />
              Year: {song.year} <br />
              Genre: {song.genre} <br />
              Available : {song.available} <br />
            </div>
          ))}
        </div>

        <div id="title">PODCASTVERLEIH 🎧 🎤</div>
        <button id="fetcher" onClick={this.fetchDisplayDataPodcasts}>
          Klicke und entdecke unsere Podcasts 🤩
        </button>
        <div className="data">
          {/* generates a div for every entry */}
          {this.state.podcasts.map((podcast, key) => (
            <div id="film" key={key}>
              <b>{podcast.title}</b> <br />
              Broadcaster: {podcast.broadcaster} <br />
              Year: {podcast.year} <br />
              Topic: {podcast.topic} <br />
              Available : {podcast.available} <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
