export default function Heading({ className = '', children, ...props }) {
    return (
        <h1 className={`text-gray-900 font-semibold text-[16px] mb-1 ` + className}>{children}</h1>
    );
}
