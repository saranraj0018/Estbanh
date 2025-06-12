export default function DangerButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center font-inter rounded-lg shadow-sm border-1  px-4 py-2 text-[13px] font-medium capitalize tracking-widest text-white transition duration-150 ease-in-out active:bg-red-700 hover:bg-red-700 bg-red-500 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
