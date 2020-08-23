import React from 'react'
import './Navigation.scss';
import { NavLink, Link } from 'react-router-dom';

import Logo from '../../assets/brand-logo.svg';
  

const Navigation = (props) => {
    const paths = [
        {
            path: '/',
            label: 'Home'
        },
        {
            path: '/books',
            label: 'Books'
        },
    ]

    const generateRandomID = () => Math.random().toString().split('.')[1]

    return (
        <div className="navigation">
            <Link to="/">
                <img className="navigation__brand-logo" src={Logo} alt="logo" />
            </Link>
            <div className="navigation__links">
                {paths.map( path => (
                    <NavLink 
                        exact
                        className={'navigation__links-link'}
                        activeClassName={'navigation__links-link active'} 
                        key={`${path.path}-${generateRandomID()}`} 
                        to={path.path}
                    >
                        {path.label}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Navigation;