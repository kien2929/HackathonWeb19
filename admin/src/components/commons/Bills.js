import React, { Component } from 'react';
import Page from './Page';
import './style/bills.css';

class Bills extends Component {
    render() {
        console.log(this.props.bills)
        return (
            <Page singleMode={true} id={this.props.id}>
                <h3 className='pt-4' style={{textAlign : "center",fontWeight : 'bold'}} >PHIEU MUA HANG </h3>
                <div className='mt-3'>Don vi ban hang : Cua hang dien thoai CellPhones</div>
                <div className='mt-3' >Ten khac hang : {this.props.bills.name}</div>
                <div className='mt-3' > Dia chi : {this.props.bills.address}</div>
                <div className='mt-3'> SDT : {this.props.bills.phone}</div>
                <table className='mt-4' style={{width: '100%'}}> 
                 <thead>
                    <tr>
                    <th>STT</th>
                    <th>Production</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                 </thead>
                <tbody>
                {this.props.bills.production ? this.props.bills.production.map((item, index)=>(
                 <tr>
                     <td>{index +1}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                 </tr>
                 )) : null}
                </tbody>
                
                </table>
            </Page>
        );
    }
}

export default Bills;

