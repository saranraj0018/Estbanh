const Section = ({ title, subtitle, children }) => (
    <div className="mb-5">
        <div className="flex justify-between items-center">
            <h1 className="font-bold">{title}</h1>
            {children}
        </div>
        <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
);

export default Section;