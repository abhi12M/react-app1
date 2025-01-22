//ConditionalComponent.js if else,switch case,ternary
import { useState } from 'react';
import FormComponent from './FormComponent';
import Box from './Box';
import { useSelector } from 'react-redux';

function ConditionalComponent() {
    const [data] = useState('ab');
    const count = useSelector((state) => state.counter.value);

    function check1(data) {
        //if else
        let content;
        if (data) {
            content = <p>value</p>;
        } else {
            content = <p>no value</p>;
        }
        return content;
    }

    function check2(data) {
        //switch case
        switch (data) {
            case 'box':
                return <Box />;
            case 'form':
                return <FormComponent />;
            default:
                return <Box />;
        }
    }
    return (
        <>
            {/* ternary */}
            counter: {count}
            <p>{data ? 'value check from ternary' : 'no value'}</p>
            {data && <h1>Value check from logical &&</h1>}
            {check1('ab')}
            {check2('box')}
        </>
    );
}

export default ConditionalComponent;
