import React, { useRef, useState } from 'react';
import banner from '../../assets/banner.png';
import { GrAdd } from 'react-icons/gr';
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import toast from 'react-hot-toast';

const Home = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    const addTask = (e) => {
        const task = ref.current.value;
        console.log(task);
        const taskTitle = {
            task_title: task
        }
        fetch('https://task-manager-server-ashy-seven.vercel.app/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(taskTitle)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Task added successfully')
                }
            })
    }


    return (
        <section className="dark:bg-gray-800 dark:text-gray-200">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Add a
                        <span className="dark:text-violet-400"> Task</span> and complete the
                        <span className="dark:text-violet-400"> Task</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                        <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                    </p>
                    <div className="flex justify-center">
                        <button onClick={() => setVisible(!visible)} rel="noopener noreferrer" className="flex items-center gap-5 px-8 py-3 shadow-2xl shadow-violet-600 hover:bg-violet-300 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"><GrAdd /> Add a task</button>
                    </div>

                    {/* modal */}
                    <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
                        <CModalHeader className='bg-gray-400'>
                            <CModalTitle>Task title</CModalTitle>
                        </CModalHeader>
                        <CModalBody className='bg-gray-400'>
                            <textarea ref={ref} name='task' id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                        </CModalBody>
                        <CModalFooter>
                            <CButton onClick={addTask} color="secondary">Add</CButton>
                        </CModalFooter>
                    </CModal>


                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={banner} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Home;