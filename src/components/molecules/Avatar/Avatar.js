import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import AccountImg from '../../atoms/AccountImg/AccountImg';
import avatar1 from '../../../assets/avatars/1.svg';

const Account = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 54px 0;
    cursor: pointer;

    @media (max-width: 800px) {
        flex-direction: row;
        margin: 35px 0 30px;
    }
`
const PersonalInf = styled.div`
    margin-top: 8px;
`
const Name = styled.p`
    font-weight: 600;
    font-size: 18px;
    margin: 8px 0 6px;
`
const Range = styled.p`
    font-weight: 500;
    font-size: 14px;
`

const AccountInf = ({ user }) => (
    <Account>
        <AccountImg avatarOption={avatar1} />
        <PersonalInf>
            <Name>{!user ? "Nieznajomy" : user.name}</Name>
            <Range>{!user ? "Nieznany" : user.faculty}</Range>
        </PersonalInf>
    </Account>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(AccountInf);