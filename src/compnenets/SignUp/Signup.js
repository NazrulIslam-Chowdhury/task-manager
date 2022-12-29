import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Signup = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const createUserOnSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const displayName = (form.first.value) + (' ') + (form.last.value);
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password !== confirm) {
            return alert('Confirm password did not match')
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                toast.success('Your id created successfully');

                const userInfo = {
                    displayName: displayName
                }

                updateUser(userInfo)
                    .then(() => { })
                    .catch((error) => console.error(error))
            })
            .catch((error) => console.error(error))
        navigate('/');
        form.reset();
    }

    return (
        <div className='flex justify-center bg-gray-800 bg-cover'>
            <div className="w-full max-w-md p-4 mt-10 rounded-md shadow sm:p-8 dark:bg-gray-300 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center text-gray-600">Sign Up</h2>
                <p className="text-sm text-center dark:text-gray-600">already have account?
                    <Link to="/login" rel="noopener noreferrer" className="no-underline text-base font-semibold"> Login here</Link>
                </p>
                <form onSubmit={createUserOnSubmit} noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm text-gray-700">First Name</label>
                            <input type="text" name="first" id="first name" placeholder="First Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm text-gray-700">Last Name</label>
                            <input type="text" name="last" id="last name" placeholder="Last Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm text-gray-700">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm text-gray-700">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm text-gray-700">Confirm Password</label>
                            </div>
                            <input type="password" name="confirm" id="confirm password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        </div>
                    </div>
                    <button className="w-full px-8 py-3 font-semibold rounded-md dark:bg-gray-400 hover:bg-gray-500  dark:text-gray-900">Sign in</button>
                    <Toaster />
                </form>
            </div>
        </div>
    );
};

export default Signup;