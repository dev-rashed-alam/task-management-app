import React from 'react';
import { Table } from 'react-bootstrap';
import '../../assets/styles/Table.css';

const TableUI = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Title 1</td>
          <td>Description 1</td>
          <td>March 1, 2023</td>
        </tr>
        <tr>
          <td>Title 2</td>
          <td>Description 2</td>
          <td>February 28, 2023</td>
        </tr>
        <tr>
          <td>Title 3</td>
          <td>Description 3</td>
          <td>February 27, 2023</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableUI;
