import Checkbox from "@/Shared/Checkbox";
import InputError from "@/Shared/InputError";
import TextInput from "@/Shared/TextInput";
import Text from "@/Shared/Text";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import ApplicationLogo from "@/Shared/ApplicationLogo";
import AppButton from "@/Shared/AppButton";

const UserLogin = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="flex justify-center items-center h-screen flex-col">
                <div className="mb-4">
                    <Link href="/">
                        <ApplicationLogo className="h-24 w-24 fill-current text-gray-500" />
                    </Link>
                </div>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="w-[320px] mt-10">
                    <div className="mb-5 text-center">
                        <h1 className="text-2xl font-bold">Welcome Back</h1>
                        <span className="text-[14px] font-light text-gray-400">Build, Repair, Succeed!</span>
                    </div>

                    <div>
                        {/* <InputLabel htmlFor="email" value="Email" /> */}

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
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            placeholder="Your password"
                        />

                        <div className="flex justify-end items-center mt-3">
                            <Link href="#">
                                <Text className="text-black font-meduim">
                                    Forgot password?
                                </Text>
                            </Link>
                        </div>

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>


                    <div className="mt-10">
                        <AppButton
                            className="w-full text-center justify-center"
                            disabled={processing}
                        >
                            Sign In
                        </AppButton>
                        <Text className="text-center mt-4 mb-3 font-bold hover:underline ">
                            <a href="#" className="font-medium text-gray-500">
                                Dont have an account? <span className="font-semibold text-gray-900">Sign up</span>
                            </a>
                        </Text>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
};

export default UserLogin;
