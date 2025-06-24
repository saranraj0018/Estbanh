import InputLabel from "@/shared/InputLabel";
import TextInput from "@/shared/TextInput";
import InputError from "@/shared/InputError";
import FormSubmitButtons from "@/shared/FormSubmitButtons";
import Heading from "@/shared/Heading";

export default function RoleForm({
    data,
    setData,
    errors,
    onSubmit,
    permissions,
}) {
    const handleCheckboxChange = (permissionValue) => {
        setData(
            "permissions",
            data.permissions.includes(permissionValue)
                ? data.permissions.filter((p) => p !== permissionValue)
                : [...data.permissions, permissionValue]
        );
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
        >
            <div>
                <InputLabel htmlFor="role_name" value="Role Name *" />
                <TextInput
                    id="role_name"
                    type="text"
                    name="role_name"
                    value={data.role_name}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("role_name", e.target.value)}
                    placeholder="i.e., Admin, Manager"
                />
                <InputError message={errors.role_name} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="permissions" value="Permissions *" />
                <div className="grid grid-cols-2 gap-4 mt-2">
                    {Object.entries(permissions).map(([group, perms]) => (
                        <div key={group} className="space-y-3">
                            <div className="mb-4">
                                <Heading className="">
                                    {group.toLocaleUpperCase()}
                                </Heading>
                                {Object.entries(perms).map(([label, name]) => (
                                    <div
                                        key={name}
                                        className="flex gap-2 items-center"
                                    >
                                        <input
                                            type="checkbox"
                                            value={name}
                                            checked={data.permissions.includes(
                                                name
                                            )}
                                            onChange={(e) => {
                                                const checked =
                                                    e.target.checked;
                                                const value = e.target.value;
                                                setData(
                                                    "permissions",
                                                    checked
                                                        ? [
                                                              ...data.permissions,
                                                              value,
                                                          ]
                                                        : data.permissions.filter(
                                                              (p) => p !== value
                                                          )
                                                );
                                            }}
                                        />
                                        <InputLabel>{label}</InputLabel>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <InputError message={errors.permissions} className="mt-2" />
            </div>

            <div className="mt-8">
                <FormSubmitButtons />
            </div>
        </form>
    );
}
