import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {
    const { user,logOut } = use(AuthContext);
    // console.log(user.name)
    const navigate = useNavigate();

    const handleLogout = () =>{
        logOut()
        .then(()=>{
            alert('you logged Out successfully');
            navigate('/')
            
        })
        .catch((error)=>{
            const message = error.message;
            alert(message);
        })
    }

    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-5 text-lg text-base-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-2">
                <img src={userIcon} alt="" />
                {
                    user ?
                        <button onClick={handleLogout} className='btn btn-primary px-10'>Log Out</button>
                        :
                        <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;