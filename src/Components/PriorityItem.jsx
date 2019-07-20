import React, { Component } from "react";
import { Form, Container, Col, Button } from "react-bootstrap";
class PriorityItem extends Component {
  render() {
    return (
      <Container fluid="true">
        <Form>
          <Form.Row>
            <h4>Add a new item to prioritize</h4>
          </Form.Row>
          <Form.Row>
            <Col xs={12} lg={4}>
              <Form.Group controlId="userStory">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="2"
                  name="newUserStory"
                  value={this.props.newItem.newUserStory}
                  onChange={this.props.handleChange}
                  placeholder="Write out the user story, featured, or issue you want to prioritize."
                />
              </Form.Group>
            </Col>
            <Col xs={12} lg={3}>
              <Form.Group controlId="engagement">
                <Form.Label>Engagement Increase</Form.Label>
                <Form.Control
                  as="select"
                  name="newEngagementValue"
                  value={this.props.newItem.newEngagementValue}
                  onChange={this.props.handleChange}
                >
                  <option value="">Select</option>
                  <option value={0.25}>Minimal</option>
                  <option value={0.5}>Low</option>
                  <option value={1}>Medium</option>
                  <option value={2}>High</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} lg={3}>
              <Form.Group controlId="impact">
                <Form.Label>Impact</Form.Label>
                <Form.Control
                  as="select"
                  name="newImpactValue"
                  value={this.props.newItem.newImpactValue}
                  onChange={this.props.handleChange}
                >
                  <option value="">Select</option>
                  <option value={0.25}>Minimal</option>
                  <option value={0.5}>Low</option>
                  <option value={1}>Medium</option>
                  <option value={2}>High</option>
                  <option value={3}>Massive Impact</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} lg={3}>
              <Form.Group controlId="confidence">
                <Form.Label>Confidence</Form.Label>
                <Form.Control
                  as="select"
                  name="newConfidenceValue"
                  value={this.props.newItem.newConfidenceValue}
                  onChange={this.props.handleChange}
                >
                  <option value="">Select</option>
                  <option value={0.5}>Low Confidence</option>
                  <option value={0.8}>Medium Confidence</option>
                  <option value={1}>High Confidence</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} lg={3}>
              <Form.Group>
                <Form.Label>Effort (in person-months)</Form.Label>
                <Form.Control
                  required
                  as="input"
                  name="newEffortValue"
                  value={this.props.newItem.newEffortValue}
                  type="number"
                  onChange={this.props.handleChange}
                  placeholder="ie. 2.5 months for 2 ppl = 5"
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group className="float-right">
                <Button
                  variant="outline-primary"
                  size="lg"
                  // type="submit"
                  disabled={!this.props.isEnabled}
                  onClick={this.props.handleItemAdd}
                >
                  Add Item
                </Button>
              </Form.Group>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    );
  }
}

export default PriorityItem;
