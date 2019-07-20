import React from "react";
import { Container, Table, } from "react-bootstrap";

const PriorityTable = ({items}) => (
  <Container>
    <label>
      <h1>Priority Chart </h1>
    </label>
    <Table bordered striped responsive>
      <thead>
        <tr>
          <th className="text-center">Title</th>
          <th className="text-center">Engagement</th>
          <th className="text-center">Impact</th>
          <th className="text-center">Confidence</th>
          <th className="text-center">Effort</th>
          <th className="text-center">Priority Score</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr id={item.id} key={index}>
            <td>{items[index].userStory}</td>
            <td>{items[index].engagementValue}</td>
            <td>{items[index].impactValue}</td>
            <td>{items[index].confidenceValue}</td>
            <td>{items[index].effortValue}</td>
            <td>{items[index].priorityScore}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Container>
);

export default PriorityTable;
