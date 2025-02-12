import { forwardRef, useRef } from 'react';

// Child Component that accepts a forwarded ref
const Child = forwardRef((props, ref) => {
    return <input ref={ref} {...props} />;
});

const RefForward = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        // Focus the input element inside the child component using the forwarded ref
        inputRef.current.focus();
    };

    return (
        <div>
            <h1>Ref Forwarding Example</h1>
            <Child ref={inputRef} placeholder="Focus me from parent!" type="text" />
            <button onClick={focusInput}>Focus Input from parent button</button>
        </div>
    );
};

export default RefForward;
