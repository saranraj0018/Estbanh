export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center font-inter rounded-lg shadow-sm border-2 border-gray-300 px-4 py-2 text-[13px] font-medium capitalize tracking-widest text-black transition duration-150 ease-in-out active:bg-gray-400 hover:bg-gray-100 bg-gray-50 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
