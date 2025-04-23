import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'rounded-lg border-1 border-gray-200 focus:border-indigo-900 ring-0 hover:ring-0 focus:outline-none focus:ring-0  hover:outline-0 outline-0 shadow-sm text-[13px] font-main font-light mt-2 text-gray-700 px-3 py-2' +
                className
            }
            ref={localRef}
        />
    );
});
