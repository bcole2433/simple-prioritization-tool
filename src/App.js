import React, { Component } from "react";
import Nav from "./Components/Nav";
import PriorityItem from "./Components/PriorityItem";
import PriorityTable from "./Components/PriorityTable";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0,
      newItem: {
        id: "",
        newUserStory: "",
        newEngagementValue: "",
        newImpactValue: "",
        newConfidenceValue: "",
        newEffortValue: "",
        priorityScore: ""
      },
      items: [],
      isEnabled: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleitemAdd = this.handleItemAdd.bind(this);
    this.addItemButtonIsEnabled = this.addItemButtonIsEnabled.bind(this);
  }

  addItemButtonIsEnabled() {
    // Access field values here and validate them
    const nItem = this.state.newItem;
    if (
      nItem.newUserStory &&
      nItem.newEngagementValue &&
      nItem.newConfidenceValue &&
      nItem.newEffortValue &&
      nItem.newImpactValue
    ) {
      return true;
    }
    return false;
  };

  handleItemAdd = e => {
    e.preventDefault();
    const nItem = this.state.newItem;

    const addedItem = {
      id: nItem.id,
      userStory: nItem.newUserStory,
      engagementValue: nItem.newEngagementValue,
      impactValue: nItem.newImpactValue,
      confidenceValue: nItem.newConfidenceValue,
      effortValue: nItem.newEffortValue,
      priorityScore:
        (nItem.newEngagementValue *
          nItem.newImpactValue *
          nItem.newConfidenceValue) /
        nItem.newEffortValue
    };

    this.setState({
      items: [...this.state.items, addedItem],
      itemCount: this.state.itemCount + 1,
    });

    //resetting form manually
    this.setState({
      newItem: {
        id: "",
        newUserStory: "",
        newEngagementValue: "",
        newImpactValue: "",
        newConfidenceValue: "",
        newEffortValue: ""
      }
    });
  };

  handleChange = e => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      newItem: { ...this.state.newItem, [name]: value }
    });

    // this.setState(prevState => ({
    //   newItem: { ...prevState.newItem, [name]: value }
    // }));
  };

  render() {
    const isEnabled = this.addItemButtonIsEnabled();
    return (
      <React.Fragment>
        <Nav />
        <br />
        <PriorityItem
          newItem={this.state.newItem}
          isEnabled={isEnabled}
          handleChange={this.handleChange}
          handleItemAdd={this.handleItemAdd}
        />
        <br />
        <hr />
        <br />
        <PriorityTable items={this.state.items} />
      </React.Fragment>
    );
  }
}

export default App;
