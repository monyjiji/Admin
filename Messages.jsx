import React from 'react';
import { Link } from "react-router-dom";

import '../../css/Messages.css';

const Messages = () => {
    return (
        <div className="Messages-container">
            <h2>Messages</h2>
            <table className="Messagestable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>
                            <div className="Buttons">
                            <button>Respond</button>
                            <button>Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Dora Dora</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>
                            <div className="Buttons">
                            <Link to="/admin/response">
                            <button>Respond</button>
                            </Link>
                            <button>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Messages;