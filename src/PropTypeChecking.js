import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ name = 'ajay', age, fruits, users }) => {
    // const UserProfile = ({ name = 'ajay', age }) => {
    //     const { name, age } = props;
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>Fruits: {fruits.join(', ')}</p>
            <p>{users.name}</p>
        </div>
    );
};
UserProfile.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    fruits: PropTypes.arrayOf(PropTypes.oneOf(['apple', 'mango'])),
    users: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
};
export default UserProfile;
