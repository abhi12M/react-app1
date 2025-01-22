import { useContext } from "react";
import { UserContext } from "../UserContextComonent";
const Child2 = (props) => {
    const { user, handleNameChange } = useContext(UserContext);
    return (
        <>
            <p>Child2 component: {props.dataFromParent}</p>
            <p>User: {user}</p>
            <button onClick={() => { props.dataFromChild('data from child 2.') }}>click</button>
            <button onClick={() => handleNameChange('Raj')}>change user</button>
        </>
    );
}
export default Child2;