import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyTask = () => {
    const { data: tasks = [] } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await fetch('https://task-manager-server-ashy-seven.vercel.app/tasks');
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <h1>This is my task:{tasks.length}</h1>
        </div>
    );
};

export default MyTask;