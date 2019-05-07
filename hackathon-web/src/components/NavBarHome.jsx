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
  DropdownItem,
  InputGroup,
  Input
} from 'reactstrap';

class NavBarHome extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      searchKey: ''
    };
  }
  // search() {
  
  // }
  replaceSpace(a) {
    a = a.replace(" ","%20");
    this.setState = {
      searchKey: a,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: '#31f7f7' }} color="" light expand="md">
          <NavbarBrand className='brand' style={{ fontWeight: 'bold' }} href="/"><img style={{ height: '20px', paddingBottom: '3px' }} src='https://image.flaticon.com/icons/png/512/25/25694.png' /> Web bán hàng</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <InputGroup >
                <Input placeholder='Tìm kiếm'
                  onChange={(e) => {this.replaceSpace(e.target.value);
                  console.log(this.state.searchKey)}}
                  onKeyPress={e => {
                    if (e.key === 'Enter') {
                      window.location.href=`/search/${e.target.value}`
                    }
                  }}
                />
              </InputGroup>

              <NavItem>
                <NavLink href="https://www.facebook.com/Web19-276360673304453"><img style={{ height: '20px', paddingBottom: '3px' }} src='https://image.flaticon.com/icons/png/512/33/33702.png' /></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img style={{ height: '20px', paddingBottom: '3px' }} src='https://cdn4.iconfinder.com/data/icons/eldorado-user/40/user-512.png' />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href='/sign-in'>
                    Sign-In
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