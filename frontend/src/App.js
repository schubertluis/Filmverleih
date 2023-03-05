import React from "react";
import { fetchAllFilms } from "./RestClientFilms";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }
  async fetchDisplayData() {
    let data = await fetchAllFilms();
    this.setState({ films: data });
  }

  render() {
    return (
      <div>
        <div id="title">Filmverleih 🎬🍿</div>
        <button id="fetcher" onClick={this.fetchDisplayData}>
          Check out what's in store 🤩
        </button>
        <div className="data">
          {/* generates a div for every entry */}
          {this.state.films.map((film, key) => (
            <div id="film" key={key}>
              <b>{film.title}</b> <br />
              Year: {film.year} <br />
              Genre: {film.genre} <br />
              Production: {film.studio} <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
