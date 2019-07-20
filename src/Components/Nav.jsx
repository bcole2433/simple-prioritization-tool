import React, { Component } from "react";
import { Navbar, Button, NavItem, Modal } from "react-bootstrap";

class Nav extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand>Prioritization Tool</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <NavItem>
            <Button variant="outline-secondary" onClick={this.handleShow}>
              How it works
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>How it works</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h6><strong>The Main Goal:</strong></h6>
                <p>This tool is used to formalize the prioritization process. You can use this to take a more quantitative approach to sort features to then have a directed discussion. The discussion should use these priority scores with other qualitative data to help you make decisions.</p>
                  <h6>Equation:</h6>
                  <h6>(Engagement x Impact x Confidence) / Effort</h6>
                  <br></br>
                <h6>Title:</h6>
                <p>
                  This is to keep track of what you are prioritizing. This can
                  be a user story, a feature you want to build, or an issue you
                  have to fix.
                </p>
                <h6>Engagement Increase:</h6>
                <p>
                  Engagement is how much you think this feature will increase user engagement with your product. Each option is assigned a numerical value.
                  Minimal = 0.25 | Low = 0.5 | Medium = 1 | High = 2
                </p>
                <h6>Impact:</h6>
                <p>
                    Impact is essentially how much value you think this feature will add for the user. Each option is assigned a numerical value.
                    Minimal = 0.25 | Low = 0.5 | Medium = 1 | High = 2 | Massive = 3
                </p>
                <h6>Confidence:</h6>
                <p>
                   How confident are you in this feature? Do you have data to back up that this will add value to the end user? Or do you have a lot of assumptions about it that you have not yet proved or disproved? 
                   Each option is given a numerical value.
                   Low = 0.5 | Medium = 0.8 | High = 1
                </p>
                <h6>Effort:</h6>
                <p>
                    How difficult will it be to accomplish this? Think about it in terms of number of months and how many people are needed to complete it ie. If it will take 2 people to complete it in 2 months, the input will be 4 person-months.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </NavItem>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Nav;
