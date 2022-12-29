import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div className='flex justify-center bg-gray-800 bg-cover'>
            <div className="w-full max-w-md p-4 mt-10 rounded-md shadow sm:p-8 dark:bg-gray-300 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center text-gray-600">Login to your account</h2>
                <p className="text-sm text-center dark:text-gray-600">Dont have account?
                    <Link to="/signup" rel="noopener noreferrer" className="no-underline text-base font-semibold"> Sign up here</Link>
                </p>
                <div className="my-6">
                    <button className="flex items-center gap-2 w-full px-8 py-3 font-semibold rounded-md dark:bg-gray-400 hover:bg-gray-500 dark:text-gray-900">
                        <FcGoogle />
                        Login with google</button>

                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-500" />
                    <p className="px-3 dark:text-gray-700">OR</p>
                    <hr className="w-full dark:text-gray-500" />
                </div>
                <form noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm text-gray-700">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm text-gray-700">Password</label>
                                <Link rel="noopener noreferrer" href="#" className="text-sm font-semibold no-underline hover:text-gray-700 dark:text-gray-700">Forgot password?</Link>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                    </div>
                    <button className="w-full px-8 py-3 font-semibold rounded-md dark:bg-gray-400 hover:bg-gray-500  dark:text-gray-900">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;