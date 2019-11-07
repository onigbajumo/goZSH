import React, { Component } from "react";
import "../cssFile/State.css";
import City from "./City";

class States extends Component {
  state = {
    states: [
      { tags: "Lagos", component: <City /> },
      { tags: "Abia", component: <City /> },
      { tags: "Anambra", component: <City /> },
      { tags: "Imo", component: <City /> },
      { tags: "Ondo", component: <City /> },
      { tags: "Rivers", component: <City /> },
      { tags: "Edo" },
      { tags: "Kano" },
      { tags: "Adamawa" },
      { tags: "Akwa-Ibom" },
      { tags: "Bauchi" },
      { tags: "Benue" },
      { tags: "Borno" },
      { tags: "Cross-Rivers" },
      { tags: "Delta" },
      { tags: "Edo" },
      { tags: "Ebonyi" },
      { tags: "Ekiti" },
      { tags: "Enugun" },
      { tags: "Gombe" },
      { tags: "Jigawa" },
      { tags: "Kaduna" },
      { tags: "Kastina" },
      { tags: "Zamfara" },
      { tags: "Osun" },
      { tags: "Oyo" },
      { tags: "Ogun" },
      { tags: "Kwara" },
      { tags: "Kogi" },
      { tags: "Abuja" },
      { tags: "Delta" },
      { tags: "Edo" }
    ]
  };
  render() {
    return (
      <div>
        <div className="croosed">
          <h1>States</h1>

          {this.state.states.map(tag => {
            return (
              <div className="start">
                <div className="states">{tag.tags}</div>
                <div className="component">{tag.component}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default States;
