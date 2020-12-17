import React from 'react';
import styled from 'styled-components';

const Border = styled.div`
    width: 98px;
    height: 98px;
    border-radius: 50%;
    margin: auto;
    border: 4px solid rgba(150, 150, 150, 0.3);
    
    @media (max-width: 800px) {
        width: 63px;
        height: 63px;
        margin: 0 10px 0 25px;
    }
`

const ImgBg = styled.div`
    text-align: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 4px solid #2F3438;
    background: #F3D89F;
    overflow: hidden;
    position: relative;

    img {
        height: 90%;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    @media (max-width: 800px) {
        width: 55px;
        height: 55px;
    }
`

const AccountImg = ({ avatarOption }) => (
    <Border>
        <ImgBg>
            <img src={avatarOption} alt="" />
        </ImgBg>
    </Border>
)

export default AccountImg;