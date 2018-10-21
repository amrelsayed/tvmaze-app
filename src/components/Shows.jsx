import React, { Component } from "react";
import Axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Show from "../components/Show";

class Shows extends Component {
  state = {
    shows: [],
    searchString: "",
    searching: false
  };

  constructor() {
    super();
    this.getShows();
  }

  render() {
    const isSearching = this.state.searching;

    return (
      <div>
        {this.state.shows ? (
          <div>
            <TextField
              style={{ padding: 25 }}
              placeholder="Search for show"
              onChange={this.onSearchInputChange}
            />
            {!isSearching ? (
              <Grid container spacing={24} style={{ padding: 24 }}>
                {this.state.shows.map(show => (
                  <Grid item xs={3} key={show.id}>
                    <Show show={show} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Grid container spacing={24} style={{ padding: 24 }}>
                {this.state.shows.map(show => (
                  <Grid item xs={3} key={show.show.id}>
                    <Show show={show.show} />
                  </Grid>
                ))}
              </Grid>
            )}
            :
          </div>
        ) : (
          "no data to show"
        )}
      </div>
    );
  }

  getShows() {
    Axios.get("http://api.tvmaze.com/shows").then(result => {
      this.setState({ shows: result.data });
    });
  }

  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ shows: [] });
      this.setState({ searchString: event.target.value });
      this.setState({ searching: true });
      Axios.get(
        "http://api.tvmaze.com/search/shows?q=" + event.target.value
      ).then(result => {
        this.setState({ shows: result.data });
      });
    } else {
      this.setState({ shows: [] });
      this.setState({ searching: false });
      this.getShows();
    }
  };
}

export default Shows;
