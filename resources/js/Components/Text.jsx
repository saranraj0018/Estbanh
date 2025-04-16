export default function Text({ className = '', children, ...props }) {
    return (
        <p className={`text-gray-600 font-normal text-[14px] ` + className}>{children}</p>
    );
}
