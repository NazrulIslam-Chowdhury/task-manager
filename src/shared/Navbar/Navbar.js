import { CButton, CCollapse, CContainer, CForm, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CNavItem, CNavLink } from '@coreui/react';
import React, { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
                <CContainer fluid>
                    <CNavbarBrand href="#">Navbar</CNavbarBrand>
                    <CNavbarToggler
                        aria-label="Toggle navigation"
                        aria-expanded={visible}
                        onClick={() => setVisible(!visible)}
                    />
                    <CCollapse className="navbar-collapse" visible={visible}>
                        <CNavbarNav>
                            <CNavItem>
                                <Link to="/" active>
                                    Home
                                </Link>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink href="#" active>Link</CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink href="#" active>Link</CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink href="#" active>
                                    Disabled
                                </CNavLink>
                            </CNavItem>
                        </CNavbarNav>
                        <CForm className="flex">
                            <CButton type="submit" color="light" variant="outline">
                                <Link to='/login'>Login</Link>
                            </CButton>
                        </CForm>
                    </CCollapse>
                </CContainer>
            </CNavbar>
        </>
    );
};

export default Navbar;