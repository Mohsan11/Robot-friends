import React, { Component } from "react";
import Searchbox from "../component/Searchbox";
import Cardlist from "../component/Cardlist";
import "./style.css";
import { robots } from "../robots";
import Scroll from "../component/Scroll";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
    console.log("Constructor");
  }
  componentDidMount() {
    this.setState({ robots: robots });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ robots: users }));
  }
  onsearchchange = (event) => {
    this.setState({ searchfield: event.target.value });
    //  console.log(event.target.value);
  };
  render() {
    const { robots, searchfield } = this.state;
    if (!robots.length) return <h1>Loading</h1>;
    else console.log("Render");
    const filteredrobot = robots.filter((robots) => {
      return robots.name
        .toLocaleLowerCase()
        .includes(searchfield.toLocaleLowerCase());
    });
    //console.log(filteredrobot);
    return (
      <div className="tc">
        <h1 className="f1">Robot Friend</h1>
        <Searchbox searchchange={this.onsearchchange} />

        <Scroll>
          <reportError>
            <Cardlist robots={filteredrobot} />
          </reportError>
        </Scroll>
      </div>
    );
  }
}
export default App;
