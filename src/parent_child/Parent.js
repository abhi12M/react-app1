import Child1 from "./Child1";
import Child2 from "./Child2";
import { useState } from 'react';

const Parent = () => {
    const [data] = useState('data from parent.');
    const [childData, setChildData] = useState(null);
    const [childData1, setChildData1] = useState(null);
    function handleChild1Data(data) {
        setChildData1(data);
    }
    return (
        <>
            <p>parent component: {childData} {childData1}</p>
            <Child1 dataFromParent={data} dataFromChild={(data) => setChildData(data)} />
            <Child2 dataFromParent={data} dataFromChild={handleChild1Data} />
        </>
    )

}
export default Parent;

