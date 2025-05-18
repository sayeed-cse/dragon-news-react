import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser ,setUser} = use(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const formData = e.target;
        const name = formData.name.value;
        const photoUrl = formData.photoUrl.value;
        const email = formData.email.value;
        const password = formData.password.value;

        console.log(name, photoUrl, email, password)
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                // setUser(user)
                navigate('/auth/login')

            })
            .catch((error) => {
                const message = error.message;
                console.log(message)
                console.log(error.code)
            })
    }


    return (
        <div className=' min-h-screen flex flex-col items-center'>
            <div className="card bg-base-100 w-full max-w-xl p-5 shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-3xl font-bold py-5 border-b border-gray-300'>Login Your Account</h2>
                    <form onSubmit={handleRegister} className="fieldset text-base">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Your Name" required />
                        {/* Photo url */}
                        <label className="label">Photo url</label>
                        <input type="text" name='photoUrl' className="input w-full" placeholder="Photo Url" required />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" required />


                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p className='text-base text-gray-600 text-center font-medium pt-5'>Already Have An Account ? <Link to='/auth/login' className='text-secondary hover:font-semibold'>Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;