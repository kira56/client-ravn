import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { logout } from "src/actions/auth.action";
import Orders from "./orders.section";
import Swal from 'sweetalert2'
import Profile from "./profile";

const settings = [
    {
        title: "Profile",
    },
    {
        title: "Orders",
    },
];

const ClientContent = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    const { user } = useSelector(state => state.auth)

    const finish = () => {

        Swal.fire({
            title: 'Logout',
            text: "Do you want to log out?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logout())
            }
        })
    }

    return (
        <section>
            <div className="row">
                <aside className="col-3 mt-5">
                    <ul className="list-group">
                        {settings.map((item, index) => (
                            <li
                                key={index}
                                className={
                                    index === value ? "list-group-item active" : "list-group-item"
                                }
                                role="button"
                                onClick={() => setValue(index)}>
                                {item.title}
                            </li>
                        ))}
                        <li className="list-group-item" role="button" onClick={finish}>Logout</li>
                    </ul>
                </aside>
                <div className="col-7">
                    {value === 0 && <Profile {...user} />}
                    {value === 1 && <Orders />}
                </div>
            </div>
        </section>
    );
};

export default ClientContent;
