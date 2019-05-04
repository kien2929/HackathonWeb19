import React from 'react';
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
  DropdownItem ,
InputGroup,
Input} from 'reactstrap';
import axios from 'axios';
import config from '../config/index'

class NavBarHome extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      searchKey:''
    };
  }
  search(){
    axios({
      method: 'get',
      url: `${config.baseUrl}/products?searchValue=${this.state.searchKey}`})
      .then((response) => {
        console.log(response.data);
        this.setState({
          id: response.data._id,
          name: response.data.name,
          price: response.data.price,
        });
      })
      .catch((error) => console.log(error));
    
    }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Trang chủ</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <InputGroup >
        <Input  placeholder='Tìm kiếm'
               onChange ={ (e)=> {
                this.setState={
                  searchKey:e.target.value,
                  
                };console.log(e.target.value)
             } }
             onKeyPress={event => {
              if (event.key === 'Enter') {
                this.search()
              }
            }}
             />
      </InputGroup>

              <NavItem>
                <NavLink  href="https://www.facebook.com/Web19-276360673304453"><img style={{height:'20px'}} src='https://image.flaticon.com/icons/png/512/33/33702.png'/></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <img style={{height:'20px'}} src='https://cdn4.iconfinder.com/data/icons/eldorado-user/40/user-512.png'/>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href='/sign-in'>
                  Sign-In
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBarHome