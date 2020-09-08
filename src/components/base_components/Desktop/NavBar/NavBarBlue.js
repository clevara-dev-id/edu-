import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'react-web-vector-icons';
import $ from 'jquery';

import { Container, Row, Col } from 'react-bootstrap';
import logoDesktop from '../../../asset/logo/logoDesktop.svg';
import ButtonDesktop from '../Button/PrimaryButtonDesktop';
import './navbarblue.css';
import '../Icon/Icon';

const NavBarBlue = props => {
    const onClickRegisterHandle = () =>{
        window.location="/getaccess";
    }
    const showHideFunctions = ()=>{
        $('#myDropdownNavbarDesktop').toggle();
    }
    const hideFunctions = ()=>{
        $('#myDropdownNavbarDesktop').hide();
    }
    $(document).ready(()=>{
        $('#myDropdownNavbarDesktop > option').click(()=>{
            hideFunctions();
        });
    });
    return (
        <>
        <Container id="navbarDesktopBlueContainer">
            <Row>
                <Col className="colLogoNavBar" lg={2}>
                    <img src={logoDesktop} width="100px" height="38px" />
                </Col>
                <Col className="colMenuBar" lg={7}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contactus">Hubungi Kami</a></li>
                        <li><a href="https://operator.edukasiplus.com/">Login</a></li>
                        <li>
                            <div className="dropdownNavbarDesktop">
                                <a href="#" className="guideBookNavbar"
                                    onClick={()=>{showHideFunctions()}}
                                >Panduan
                                    <Icon 
                                        name="angle-down" 
                                        color="#ffffff" 
                                        font="FontAwesome" size={22} 
                                    />
                                </a>
                                <div id="myDropdownNavbarDesktop" class="dropdown-contentNavBarDesktop">
                                    <option
                                        value="operator" 
                                        onClick={props.onClickModule}
                                        >Panduan Operator.pdf</option>
                                    <option 
                                        value="user" 
                                        onClick={props.onClickModule}
                                        >Panduan Penggunaan Website EduPlus.pdf
                                    </option>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Col>
                <Col className="colButtonNavBar" lg={3}>
                    <ButtonDesktop
                        name="DAFTARKAN SEKOLAH ANDA"
                        onClick={()=>{onClickRegisterHandle()}}
                    />
                </Col>
            </Row>
        </Container>
        </>
    );
}

const NavTitle = styled.a`
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height */

    color: #000000;
`;
const LiMyMenubar = styled.li`
    margin-right: 32px
`;
const MyMenubar = styled.a`
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;

    /* identical to box height */
    text-align: right;

    color: #000000;
    transition: .05s all;
    text-decoration: none;
    &:hover{
        color:#DBDBDB !important;
        cursor: pointer;
        text-decoration: none;
    }
`;

// const NavbarButton = styled.button`
//     border: 0px solid transparent;
//     width: 169px;
//     height: 41px;

//     background: #FFFFFF;

//     /* shadow 1 */
//     box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.03);
//     border-radius: 4px;

//     font-family: Helvetica;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 17px;
//     line-height: 21px;

//     /* identical to box height */
//     text-align: center;
//     transition: .05s all;

//     color: #000000;
//     &:hover{
//         border: 2px solid #DBDBDB;
//         background: transparent;
//         color: #DBDBDB;
//     }
// `;

NavBarBlue.propTypes = {
    store           : PropTypes.object,
    onClickButton   : PropTypes.func
}

export default NavBarBlue;