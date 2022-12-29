import { CButton, CCollapse, CContainer, CForm, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CNavItem } from '@coreui/react';
import React, { useContext, useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [visible, setVisible] = useState(false);

    const logoutOnClick = () => {
        logOut()
            .then()
            .catch(error => console.error(error))
    }
    return (
        <>
            <CNavbar expand="lg" colorScheme="light" className="bg-light shadow-xl shadow-gray-700">
                <CContainer fluid>
                    <CNavbarBrand href="#">Navbar</CNavbarBrand>
                    <CNavbarToggler
                        aria-label="Toggle navigation"
                        aria-expanded={visible}
                        onClick={() => setVisible(!visible)}
                    />
                    <CCollapse className="navbar-collapse" visible={visible}>
                        <CNavbarNav className='flex items-center gap-1'>
                            <CNavItem>
                                <Link className='text-gray-800 hover:text-gray-800 px-4 py-2 hover:bg-gray-300 font-normal font-serif no-underline' to="/" active>
                                    Home
                                </Link>
                            </CNavItem>
                            <CNavItem>
                                <Link className='text-gray-800 hover:text-gray-800 px-4 py-2 hover:bg-gray-300 font-normal font-serif no-underline' to="/add-task" active>Add Task</Link>
                            </CNavItem>
                            <CNavItem>
                                <Link className='text-gray-800 hover:text-gray-800 px-4 py-2 hover:bg-gray-300 font-normal font-serif no-underline' to="/my-task" active>My Task</Link>
                            </CNavItem>
                            <CNavItem>
                                <Link className='text-gray-800 hover:text-gray-800 px-4 py-2 hover:bg-gray-300 font-normal font-serif no-underline' to="/completed-task" active>
                                    Completed Task
                                </Link>
                            </CNavItem>
                            <CNavItem>
                                <img src={user?.photoURL} alt="" className='w-10 h-10 rounded-full' />
                            </CNavItem>
                        </CNavbarNav>
                        <CForm className="flex ml-1">
                            {
                                user?.uid ?
                                    <CButton onClick={logoutOnClick} type="submit" color="light" variant="outline">
                                        <Link className='text-black hover:text-black font-normal font-serif no-underline' to='/login'>Log Out</Link>
                                    </CButton>
                                    :
                                    <CButton type="submit" color="light" variant="outline">
                                        <Link className='text-black hover:text-black font-normal font-serif no-underline' to='/login'>Login</Link>
                                    </CButton>
                            }
                        </CForm>
                    </CCollapse>
                </CContainer>
            </CNavbar>
        </>
    );
};

export default Navbar;