import Checkbox from "@/shared/Checkbox";
import InputError from "@/shared/InputError";
import InputLabel from "@/shared/InputLabel";
import PrimaryButton from "@/shared/PrimaryButton";
import TextInput from "@/shared/TextInput";
import Heading from "@/shared/Heading";
import Text from "@/shared/Text";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminGuestLayout from "@/shared/layouts/AdminGuestLayout";

export default function AdminLogin({ status, canResetPassword }) {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <AdminGuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>

                <div className="mb-5">
                    <Heading>Sign in</Heading>
                    <Text>Login to your account to continue</Text>
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={false}
                        onChange={(e) => setData("email", e.target.value)}
                        placeholder="Your email address"
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-5">
                    <div className="flex justify-between items-center">
                    <InputLabel htmlFor="password" value="Password" />
                    {canResetPassword && (
                        <Link href={route("password.request")}>
                            <Text className="text-black">
                                Forgot your password?
                            </Text>
                        </Link>
                    )}
                    </div>

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                        placeholder="Your password"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-7 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <Text className="ms-2">
                            Remember me
                        </Text>
                    </label>
                </div>

                <div className="mt-4 ">
                    <PrimaryButton className="w-full text-center justify-center" disabled={processing}>
                        Sign In
                    </PrimaryButton>
                    <Text className="text-center mt-4 mb-3 font-bold hover:underline ">
                        <a href="#" className="font-bold text-gray-800">
                            Go back to the front page
                        </a>
                    </Text>
                </div>
            </form>
        </AdminGuestLayout>
    );
}
