import React from "react";

const Profile = ({ name, email, surname, createdAt, status, role }) => {
    return (
        <section>
            <div className="mt-5">
                <h4>Hey! {name}</h4>

                <span>
                    Surname: {surname}<br />
                    Email: {email}<br />
                    Status : {status ? 'Active' : 'Inactive'} <br />
                    Rol: {role?.name}<br />
                    Created: {createdAt}
                </span>
            </div>
        </section>
    );
};

export default Profile;
