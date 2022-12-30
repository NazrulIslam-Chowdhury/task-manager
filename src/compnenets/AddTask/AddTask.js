import { CFormSelect } from '@coreui/react';
import React from 'react';

const AddTask = () => {
    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Profile</p>
                            <p className="text-xs">Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="text-sm">Title</label>
                                <input id="username" type="text" placeholder="tile" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className='col-span-full'>
                                <label htmlFor="">Category</label>
                                <CFormSelect className='flex' aria-label="Default select example">

                                    <option className='hover:bg-violet-200'>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>

                                </CFormSelect>
                            </div>
                            <div className="col-span-full">
                                <label for="bio" className="text-sm">Bio</label>
                                <textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                            </div>
                            <div className="col-span-full">
                                <label for="bio" className="text-sm">Photo</label>
                                <div className="flex items-center space-x-2">
                                    <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                                    <button className="px-4 py-2 border rounded-md dark:border-gray-100">Change</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddTask;