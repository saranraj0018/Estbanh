export default function AppButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center font-inter rounded-lg shadow-sm  px-4 py-2 text-[13px] font-medium capitalize tracking-widest text-black transition duration-150 ease-in-out active:bg-gray-800 hover:bg-gray-800 hover:text-white  bg-[#FFB02E] ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
