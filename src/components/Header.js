import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const {user} = useContext(AuthContext);
    console.log('context', user)
    return (
        <div>
                <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="btn btn-ghost normal-case text-xl" to={'/'}>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to={'/login'}>Log In</Link>
                <Link className="btn btn-ghost normal-case text-xl" to={'/register'}>Register</Link>
                {user?.displayName && <span>Welcome, {user.displayName}</span>}
                </div>
        </div>
    );
};

export default Header;
