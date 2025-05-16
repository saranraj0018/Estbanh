import Logo from "@/Assets/general/logo.svg";

export default function ApplicationLogo({ className }) {
    return (
        <div className={`max-w-40 ` + className}>
            <img src={Logo} />
        </div>
    );
}
