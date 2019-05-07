import React, { Component } from 'react';
import classnames from 'classnames';
import PostPanel from '../components/TabPanes/PostPanel';
import OrderManagement from '../components/TabPanes/OrderManagement';
import ListOrderSuccess from '../components/TabPanes/ListOrderSuccess';
import ListLater from '../components/TabPanes/ListLater';
import Setting from '../components/options/Setting';
import './styles/header.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
     } from 'reactstrap';
import ListOrderOffline from '../components/TabPanes/ListOrderOffline';

class header extends Component {
    constructor(props) {
        super(props);
    
        this.toggletab = this.toggletab.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          activeTab : '1',
          listOrder : [],
          listLater : [],
          islogin : true
        };
      }

    toggletab(tab){
          if(this.state.activeTab !== tab){
              this.setState({
                  activeTab : tab
              });
          }
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    listSuccess=(item)=>{
      this.setState({                                                                  //set-list-order   Order->header->list 
        listOrder : item
      })
    }

    listLater=(item)=>{
      this.setState({                                                                  //set-list-later   Order->header->list 
        listLater : item
      })
    }

    setListOrderSuccessToday = (item)=>{
      this.setState({
        listOrder : this.state.listOrder.filter((todoItem)=>{
          if(todoItem === item) return false;                                             //set-delete-list-order today    list->header->order
          else return true;
        }),
      })
    }
    setListLaterToday = (item)=>{
      this.setState({
        listLater : this.state.listLater.filter((todoItem)=>{
          if(todoItem === item) return false;                                             //set-delete-list-later today    list->header->order
          else return true;
        }),
      })
    }

    render() {
      // if(this.state.listOrder.length>0) {
      //   console.log(this.state.listOrder); 
      //   console.log(this.state.temp)
      // };
      console.log(this.props.user, this.props.pass)

        return (
            <div>
        <Navbar className="header fixed-top" light  expand="md">
          <NavbarBrand style={{fontSize : '32px', color:'#e84118', fontWeight :'bold', textTransform : 'uppercase'}}>CellPhoneS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto tabs" navbar >
              <NavItem>
                <NavLink 
                    className={classnames({active : this.state.activeTab === '1'})}
                    onClick={() => { this.toggletab('1')}}
                >Order Management</NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                    className={classnames({active : this.state.activeTab === '2'})}
                    onClick={() => { this.toggletab('2')}}
                >List Order Success</NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                    className={classnames({active : this.state.activeTab === '3'})}
                    onClick={() => { this.toggletab('3')}}
                >ListLater  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                    className={classnames({active : this.state.activeTab === '4'})}
                    onClick={() => { this.toggletab('4')}}
                >PostProducation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                    className={classnames({active : this.state.activeTab === '4'})}
                    onClick={() => { this.toggletab('6')}}
                >EditProduction</NavLink>
              </NavItem>
            </Nav>
              <Nav  navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret >
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => { this.toggletab('5.1')}}>
                    Setting
                  </DropdownItem>
                  <DropdownItem onClick={() => { this.toggletab('5.2')}}>
                    About
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => { this.toggletab('5.3')}}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
          <div>=)))l.he:097454128</div>
        {/* tab content */}
   
        {this.state.activeTab === "6"   ?  <OrderManagement tempSuccess={this.state.listOrder} listSuccess = {this.listSuccess} tempLater={this.state.listLater} listLater={this.listLater}/> : null}
        {this.state.activeTab === "2"   ?  <ListOrderSuccess setListOrderSuccessToday={this.setListOrderSuccessToday}   getListSuccess = {this.state.listOrder}/> : null}  
        {this.state.activeTab === '3'   ?  <ListLater setListLaterToday={this.setListLaterToday} getListLater={this.state.listLater}/> : null}
        {this.state.activeTab === '4'   ?  <PostPanel/> : null}
        {this.state.activeTab === '5.1' ?  <Setting username={this.props.user} password={this.props.pass}/> : null}
        {this.state.activeTab === '5.2' ?  <PostPanel/> : null}
        {this.state.activeTab === '5.3' ?  this.props.islogout(true) :null}
        {this.state.activeTab === '1'   ?  <ListOrderOffline/> : null}
            </div>
        );
    }
}

export default header;
