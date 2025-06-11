import React from "react";
import ApplicationLogo from "../ApplicationLogo";
import { Link, usePage } from '@inertiajs/react'


const Sidebar = () => {
    
    const { route } = usePage().props

    return (
        <div className={`w-1/4 border-2 shadow-sm border-gray-200`}>
            <div className="p-2">
                <ApplicationLogo className={`w-10`} />
            </div>
            <ul className="mt-2 pt-2 h-[90%] px-2">
                <li className={`w-full rounded-md ${route.uri == 'admin/dashboard' ? 'bg-indigo-100' : ''}`}>
                    <Link
                        href="/admin"
                        className="w-full px-2 py-2 rounded-lg flex gap-4 items-center"
                    >
                        <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                                stroke="#1C274C"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="text-[13px] font-[450] mt-[0.09em]">
                            Dashboard
                        </span>
                    </Link>
                </li>

                <li className="w-full mt-3" >
                    <span
                        className=" w-full px-2 py-2 rounded-lg flex gap-4 items-center text-gray-500"
                    >
                        <span className="font-primary text-[13px] font-[450] mt-[0.09em] flex-1 ">
                            Management Section
                        </span>

                        <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 9L11.7874 14.7874V14.7874C11.9048 14.9048 12.0952 14.9048 12.2126 14.7874V14.7874L18 9"
                                stroke="#323232"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </li>

                <ul>
                    <li  className={`w-full rounded-md ${route.uri == 'admin/categories' ? 'bg-indigo-100' : ''}`}>
                        <Link
                            href="/admin/categories"
                            className=" w-full px-2 py-2 rounded-lg flex gap-4 items-center"
                        >
                            <svg
                                width="18px"
                                height="18px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text-[13px] font-[450] mt-[0.09em]">
                                Categories
                            </span>
                        </Link>
                    </li>

                    <li className={`w-full rounded-md ${route.uri == 'admin/sub-categories' ? 'bg-indigo-100' : ''}`}>
                        <Link
                            href="/admin/sub-categories"
                            className=" w-full px-2 py-2 rounded-lg flex gap-4 items-center"
                        >
                            <svg
                                width="18px"
                                height="18px"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="240"
                                    height="32"
                                    x="256"
                                    y="56"
                                    fill="var(--ci-primary-color, #000000)"
                                    className="ci-primary"
                                />
                                <rect
                                    width="240"
                                    height="32"
                                    x="256"
                                    y="162.667"
                                    fill="var(--ci-primary-color, #000000)"
                                    className="ci-primary"
                                />
                                <rect
                                    width="240"
                                    height="32"
                                    x="256"
                                    y="269.333"
                                    fill="var(--ci-primary-color, #000000)"
                                    className="ci-primary"
                                />
                                <rect
                                    width="168"
                                    height="32"
                                    x="328"
                                    y="376"
                                    fill="var(--ci-primary-color, #000000)"
                                    className="ci-primary"
                                />
                                <path
                                    fill="var(--ci-primary-color, #000000)"
                                    d="M161.231,408H167.2v68.783L302,393,167.2,306.772V376h-5.965C98.8,376,48,311.4,48,232S98.8,88,161.231,88H216V56H161.231C121.783,56,84.91,74.755,57.4,108.81,30.7,141.866,16,185.616,16,232s14.7,90.134,41.4,123.19C84.91,389.245,121.783,408,161.231,408ZM199.2,365.228,242,392.609,199.2,419.217Z"
                                    className="ci-primary"
                                />
                            </svg>
                            <span className="text-[13px] font-[450] mt-[0.09em]">
                                Sub Categories
                            </span>
                        </Link>
                    </li>

                    <li className={`w-full rounded-md ${route.uri == 'admin/products' ? 'bg-indigo-100' : ''}`}>
                        <Link
                            href="/admin/products"
                            className=" w-full px-2 py-2 rounded-lg flex gap-4 items-center"
                        >
                            <svg
                                width="18px"
                                height="18px"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fill="none" fillRule="evenodd">
                                    <path d="m0 0h32v32h-32z" />

                                    <path
                                        d="m19 1.73205081 7.8564065 4.53589838c1.8564064 1.07179677 3 3.05255889 3 5.19615241v9.0717968c0 2.1435935-1.1435936 4.1243556-3 5.1961524l-7.8564065 4.5358984c-1.8564065 1.0717968-4.1435935 1.0717968-6 0l-7.85640646-4.5358984c-1.85640646-1.0717968-3-3.0525589-3-5.1961524v-9.0717968c0-2.14359352 1.14359354-4.12435564 3-5.19615241l7.85640646-4.53589838c1.8564065-1.07179677 4.1435935-1.07179677 6 0zm-4.791172 1.6195783-.208828.11247251-7.85640646 4.53589838c-1.17246724.67692428-1.91843145 1.89771701-1.99370617 3.2394348l-.00629383.2246668v9.0717968c0 1.3538485.68425541 2.6102689 1.80857977 3.3463176l.19142023.117784 7.85640646 4.5358984c1.1688485.674835 2.5938608.7123258 3.791172.1124725l.208828-.1124725 7.8564065-4.5358984c1.1724672-.6769243 1.9184314-1.897717 1.9937061-3.2394348l.0062939-.2246668v-9.0717968c0-1.3538485-.6842555-2.61026887-1.8085798-3.34631759l-.1914202-.11778401-7.8564065-4.53589838c-1.1688485-.67483501-2.5938608-.71232584-3.791172-.11247251zm8.8114886 8.20574889c.259282.4876385.0741624 1.0931371-.4134761 1.3524191l-5.6183556 2.9868539.0000413 6.7689186c0 .5522848-.4477152 1-1 1-.5522847 0-1-.4477152-1-1l-.0000413-6.7689186-5.61827304-2.9868539c-.48763849-.259282-.67275801-.8647806-.41347603-1.3524191.25928199-.4876385.86478067-.672758 1.35241917-.4134761l5.6793299 3.0187491 5.6794125-3.0187491c.4876385-.2592819 1.0931372-.0741624 1.3524192.4134761z"
                                        fill="#000000"
                                        fillRule="nonzero"
                                    />
                                </g>
                            </svg>
                            <span className="text-[13px] font-[450] mt-[0.09em]">
                                Products
                            </span>
                        </Link>
                    </li>
                </ul>

                <li className="w-full mt-3">
                    <span
                        className=" w-full px-2 py-2 rounded-lg flex gap-4 items-center text-gray-500"
                    >
                        <span className="font-primary text-[13px] font-[450] mt-[0.09em] flex-1 ">
                            Transactions
                        </span>

                        <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 9L11.7874 14.7874V14.7874C11.9048 14.9048 12.0952 14.9048 12.2126 14.7874V14.7874L18 9"
                                stroke="#323232"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </li>

                <ul>
                    <li className={`w-full rounded-md ${route.uri == 'admin/orders' ? 'bg-indigo-100' : ''}`}>
                        <Link
                            href="/admin/orders"
                            className=" w-full px-2 py-2 rounded-lg flex gap-4 items-center"
                        >
                            <svg
                                width="18px"
                                height="18px"
                                viewBox="0 0 1024 1024"
                                fill="#000000"
                                className="icon"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M53.6 1023.2c-6.4 0-12.8-2.4-17.6-8-4.8-4.8-7.2-11.2-6.4-18.4L80 222.4c0.8-12.8 11.2-22.4 24-22.4h211.2v-3.2c0-52.8 20.8-101.6 57.6-139.2C410.4 21.6 459.2 0.8 512 0.8c108 0 196.8 88 196.8 196.8 0 0.8-0.8 1.6-0.8 2.4v0.8H920c12.8 0 23.2 9.6 24 22.4l49.6 768.8c0.8 2.4 0.8 4 0.8 6.4-0.8 13.6-11.2 24.8-24.8 24.8H53.6z m25.6-48H944l-46.4-726.4H708v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8s-44.8-20-44.8-44.8c0-14.4 7.2-27.2 20-36h0.8v-57.6H363.2v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8-24.8 0-44.8-20-44.8-44.8 0-14.4 7.2-27.2 20-36h0.8v-57.6H125.6l-46.4 726.4zM512 49.6c-81.6 0-148.8 66.4-148.8 148.8v3.2h298.4l-0.8-1.6v-1.6c0-82.4-67.2-148.8-148.8-148.8z"
                                    fill=""
                                />
                            </svg>
                            <span className="text-[13px] font-[450] mt-[0.09em]">
                                Orders
                            </span>
                        </Link>
                    </li>
                </ul>
            </ul>
        </div>
    );
};

export default Sidebar;
