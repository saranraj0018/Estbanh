import { InputError, InputLabel } from "@/shared";

const Field = ({ label, error, children }) => (
    <div className="w-full">
        <InputLabel value={label} />
        {children}
        <InputError message={error} className="mt-2" />
    </div>
);


export default Field;