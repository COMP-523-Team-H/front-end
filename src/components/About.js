import React, { Component, Fragment } from "react"
import URLList from "./URLList"


class About extends Component {
  state = {
    urls: []
  }

  componentDidMount() {
    fetch('http://backend-jiyu2.cloudapps.unc.edu/0').then((res) => res.json()).then((body) => {
      console.log(body);
      this.setState({urls: body});
    });
  }

  render() {
    return (
      <Fragment>
        <h3>This is a stand-in for actual GET functionality.</h3>
        <URLList urls={this.state.urls} />
      </Fragment>
    )
  }
}

export default About