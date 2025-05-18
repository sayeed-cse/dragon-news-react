import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5 text-2xl'>Login With</h2>
            <div className='flex flex-col gap-3'>
                {/* Google */}
                <button className="btn btn-info btn-outline">
                    <FcGoogle className='text-2xl'></FcGoogle>
                    Login with Google
                </button>
                {/* GitHub */}
                <button className="btn btn-info btn-outline">
                    <FaGithub className='text-black text-2xl'></FaGithub>
                    Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;