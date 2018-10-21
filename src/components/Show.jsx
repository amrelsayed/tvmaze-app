import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class Show extends Component {
  state = {
    show: this.props.show
  };
  render() {
    return (
      <div>
        <Card>
          <CardMedia
            style={{ height: 0, paddingTop: "56.25%" }}
            image={this.state.show.image ? this.state.show.image.original : ""}
            title={this.state.show.name}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" compoenent="h2">
              {this.state.show.name ? this.state.show.name : ""}
            </Typography>
            <Typography compoenent="p">
              {this.state.show.summary
                ? this.state.show.summary.substr(0, 150)
                : ""}
              ...
              <a
                href={this.state.show.url ? this.state.show.url : ""}
                target="_blank"
              >
                Read More
              </a>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Show;
