import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {signIn} = use(AuthContext);

    const handleLogin = (e) =>{
        e.preventDefault();
        const formData =e.target;
        const email = formData.email.value;
        const password = formData.password.value;
        console.log(email,password)

        signIn(email,password)
        .then((userCredential) =>{
            const user = userCredential.user;
            console.log(user)
        })
        .catch(error =>{
            const message = error.message;
            alert(message)
        })
    }

    return (
        <div className=' min-h-screen flex flex-col items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-3xl font-bold py-5 border-b border-gray-300'>Login Your Account</h2>
                    <form onSubmit={handleLogin} className="fieldset text-base">
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p className='text-base text-gray-600 text-center font-medium pt-5'>Don’t Have An Account ? <Link to='/auth/register' className='text-secondary hover:font-semibold'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;