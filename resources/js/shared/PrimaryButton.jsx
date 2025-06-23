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
                `inline-flex items-center font-inter rounded-lg shadow-sm  px-4 py-2 text-[13px] font-medium capitalize tracking-widest text-white transition duration-150 ease-in-out active:bg-gray-800 hover:bg-gray-800 bg-gray-900 ${
                    disabled && 'opacity-25'
                } ` + className
            }
        >
            {children}
        </button>
    );
}
