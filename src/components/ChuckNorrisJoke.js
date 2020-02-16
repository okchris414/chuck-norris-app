import React, { Component } from "react";

class ChuckNorrisJoke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  buildList = data => {
    this.setState({ items: data, isLoaded: true });
  };

  componentDidMount() {
    let url = "https://api.chucknorris.io/jokes/random";
    fetch(url)
      .then(response => response.json())
      .then(this.buildList)
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const jokeInfo = items;
      const icon = jokeInfo.icon_url;
      const joke = jokeInfo.value;
      const id = jokeInfo.id;

      return (
        <div>
          <img src={icon} alt="Chuck Norris" />
          <h3>Joke id: {id}</h3>
          <p>{jokeInfo.value}</p>
        </div>
      );
    }
  }
}

export default ChuckNorrisJoke;
