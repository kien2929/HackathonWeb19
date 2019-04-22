import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form, Input
} from "reactstrap";
export default class NavBarHome extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{backgroundColor:'#EEEEEE',height:'53px'}}>
        <Navbar style={{height:'100%'}} className='navbar-light row'  light expand="md">
        <div style={{marginLeft:'6%',width:'88%'}}>
        <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <div style={{height:'100%'}} className='row bg-danger w-40 py-1 px-2 mx-0'><NavbarBrand href="/" > <img src="../data/image/dinhba.png" width="30" height="30" class="d-inline-block align-top" alt=""></img></NavbarBrand>
              <Form  className='' style={{width:'350px'}}>
                <Input type="text" name="search" id="searchId" placeholder="Nhập tên sản phẩm" />
              </Form></div>

            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className='mx-0 my-0' >
                <img src="https://cdn0.iconfinder.com/data/icons/inficons-muticollection/123/mobile-512.png" width="20" height="20" class="d-block align-top" alt=""></img>
                  ĐIỆN THOẠI
                  </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem href="/">
                    Iphone 6s
                    </DropdownItem>
                  <DropdownItem href="/">
                    Iphone 7
                    </DropdownItem>
                  <DropdownItem href="/">
                    Iphone 8
                    </DropdownItem>
                  <DropdownItem href="/">
                    Iphone X
                    </DropdownItem>
                </DropdownMenu>

              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className='mx-0 my-0 text-center'>
                <img src="https://cdn0.iconfinder.com/data/icons/inficons-muticollection/123/tablet-512.png" width="20" height="20" class="d-block align-center" alt=""></img>
                  TABLET
                  </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Iphone 6s
                    </DropdownItem>
                  <DropdownItem>
                    Iphone 7
                    </DropdownItem>
                  <DropdownItem>
                    Iphone 8
                    </DropdownItem>
                  <DropdownItem>
                    Iphone X
                    </DropdownItem>
                </DropdownMenu>

              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </div>
          
        </Navbar>
      </div>
    );
  }
}