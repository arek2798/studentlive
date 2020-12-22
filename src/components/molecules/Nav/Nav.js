import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Home, Grid, Calendar, List, Bookmark, CheckSquare } from 'react-feather';

const NavList = styled.ul`
    text-align: left;
    position: relative;
    list-style: none;
`

const NavListItem = styled.li`
    width: 220px;

    &:hover a:not(.active){
        transform: translateX(10px);
    }
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    padding: 18px 0 18px 43px;
    transition: color,padding-left,transform .3s ease-in-out;
    color: #DEDEDE;

    svg{
        margin-right: 7px;
        top: 3px;
    }

    &.active {
        color: #F67280;
        font-size: 16px;
        font-weight: 500;
        border-left: 5px solid #F67280;
        padding-left: 38px;
    }

    @media (max-width: 800px) {
        padding: 13px 0 13px 43px;
    }
`

const Nav = () => (
    <NavList>
        <NavListItem>
            <StyledNavLink to="/dashboard" activeClassName="active">
                <Home size={20} />
                panel główny
            </StyledNavLink>
        </NavListItem>
        <NavListItem>
            <StyledNavLink to="/schedule" activeClassName="active">
                <Grid size={20} />
                plan zajęć
            </StyledNavLink>
        </NavListItem>
        <NavListItem>
            <StyledNavLink to="/calendar" activeClassName="active">
                <Calendar size={20} />
                kalendarz
            </StyledNavLink>
        </NavListItem>
        <NavListItem>
            <StyledNavLink to="/subjects" activeClassName="active">
                <List size={20} />
                przedmioty
            </StyledNavLink>
        </NavListItem>
        <NavListItem>
            <StyledNavLink to="/notes" activeClassName="active">
                <Bookmark size={20} />
                notatki
            </StyledNavLink>
        </NavListItem>
        <NavListItem>
            <StyledNavLink to="/todo" activeClassName="active">
                <CheckSquare size={20} />
                do zrobienia
            </StyledNavLink>
        </NavListItem>
    </NavList>
);

export default Nav;