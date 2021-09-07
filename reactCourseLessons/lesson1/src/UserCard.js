import React, { useState } from 'react';

function UserCard({ name, description }) {
    return (
        <div>
            <h3>
                { name }
            </h3>
            <p>
                { description }
            </p>
        </div>
    )
}

export default UserCard;
