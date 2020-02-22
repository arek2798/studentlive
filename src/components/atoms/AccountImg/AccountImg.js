import React from 'react';
import styled from 'styled-components';

const ImgBg = styled.div`
    text-align: center;
    width: 45px;
    min-width: 45px;
    height: 45px;
    background: #ebebeb;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    margin-left: 24px;
    margin-right: 10px;

    img {
        width: 27px;
        height: 37px;
        position: relative;
        top: 8px;
    }
`

const AccountImg = ({ imgSrc }) => (
    <ImgBg>
        <img src={imgSrc} alt="" />
    </ImgBg>
)

export default AccountImg;