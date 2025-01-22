import { useContext } from "react";
import { UserContext } from "../UserContextComonent";

const Child1 = (props) => {
    const { user, handleNameChange } = useContext(UserContext);
    return (
        <>
            <p> Child component: {props.dataFromParent}</p>
            <button onClick={() => { props.dataFromChild('data from child1') }}>send to parent</button>
            <p>User: {user}</p>
            <button onClick={() => handleNameChange('Abhishek')}>change user</button>
        </>
    );
}
export default Child1;