import React from 'react';
import '../../css/UsersList.css';

const UsersList = () => {
    return (
        <div className="users-list-container">
            <h2>Users List</h2>
            <table className="Userstable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Points</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>Doctor</td>
                        <td>100</td>
                        <td>john.doe@example.com</td>
                        <td>
                            <div className="Actionbutton">
                            <button>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;