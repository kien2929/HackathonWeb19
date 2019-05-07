import React from 'react';
import { Input,Row,Col } from 'reactstrap';

// props
//   values: array
//   rowIndex: number;
//   handleInputChange: (value, row, col) => void;
const TableRow = (props) => {
  return (
   <div className='container '>
        <Row>
            <Col sm='4'>
                <Input type='number' onChange = {(e)=>{props.handleInputChange(e.target.value,props.rowIndex , 0)}} >
                </Input>
            </Col>

            <Col sm='4'>
                <Input onChange = {(e)=>{props.handleInputChange(e.target.value,props.rowIndex , 1)}} type="select" name="color">
                    <option>Black</option>
                    <option>White</option>
                    <option>Gold</option>
                </Input>
            </Col>

            <Col sm='4'> 
                <Input type='number'  onChange = {(e)=>{props.handleInputChange(e.target.value,props.rowIndex , 2)}} >
                </Input>
            </Col>
        </Row>
   </div>
  );
};

export default TableRow;