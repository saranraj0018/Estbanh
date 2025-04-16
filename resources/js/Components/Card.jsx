export default function Card({ className = '', children, ...props }) {
    return (
        <div className={`mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-sm border-[1px] border-gray-200 rounded-2xl ` + className}>
            {children}
       </div>
    );
}
