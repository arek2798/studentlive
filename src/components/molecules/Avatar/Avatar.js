import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import AccountImg from '../../atoms/AccountImg/AccountImg';
import ProfilImg from '../../../assets/ProfilImg.png';

const Account = styled.div`
    text-align: left;
    display: flex;
    margin: 54px 0;
    cursor: pointer;
`
const PersonalInf = styled.div`
    margin-top: 8px;
`
const Name = styled.p`
    font-weight: 600;
    font-size: 18px;
`
const Range = styled.p`
    font-weight: 600;
    font-size: 12px;
`

const AccountInf = ({ user }) => (
    <Account>
        <AccountImg imgSrc={ProfilImg} />
        <PersonalInf>
            <Name>{!user ? "Nieznajomy" : user.name}</Name>
            <Range>{!user ? "Nieznany" : user.faculty}</Range>
        </PersonalInf>
    </Account>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(AccountInf);