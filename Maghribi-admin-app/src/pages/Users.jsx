import { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        await axios.get('/users')
            .then((response) => {
                setUsers(response.data);
            })
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Users List</h1>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead class="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">name</th>
                                        <th scope="col" class="px-6 py-4">email</th>
                                        <th scope="col" class="px-6 py-4">phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap px-6 py-4">{user.firstName} {user.lastName}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{user.email}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{user.phone}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users