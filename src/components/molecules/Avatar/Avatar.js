import React from 'react';
import styled from 'styled-components';
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

const AccountInf = () => (
    <Account>
        <AccountImg imgSrc={ProfilImg} />
        <PersonalInf>
            <Name>Piotrek</Name>
            <Range>Informatyka</Range>
        </PersonalInf>
    </Account>
);

export default AccountInf;