
import React from 'react';
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem } from 'reactstrap';

const BsNavLink = (props) => {
    // route và title là hai thuộc tính được truyền vào cho component này
    // từ component cha
    // Destructuring để lấy hai thuộc tính route và title từ react props
    // của component BsNavLink
    const {route, title} = props;
    return (
        <Link href={route}>
            <a className="port-navbar-link nav-link"> {title} </a>
        </Link>
    );
}

const Login = (props) => {
    return (
        <span className='nav-link port-navbar-link clickable'>Login</span>
    );
}

const Logout = (props) => {
    return (
        <span className='nav-link port-navbar-link clickable'>Logout</span>
    );
}

export default class Example extends React.Component {
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
            <div>
                <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
                    <NavbarBrand className="port-navbar-brand" href="/">Hán Thanh</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route='/' title='Trang chủ'></BsNavLink>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route='/about' title='Giới thiệu'></BsNavLink>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route='/portfolios' title='Portfolio'></BsNavLink>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route='/cv' title='Hồ sơ'></BsNavLink>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <Login></Login>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <Logout></Logout>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
  }
}