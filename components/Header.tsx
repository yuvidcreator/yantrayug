import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from 'react';


export const navLinks = [
    { 
        name: "Home", 
        path: "/" 
    },
    { 
        name: "Store", 
        path: "/store" 
    },
    {
        name: "About Us",
        path: "/about",
    },
    {
        name: "Contact",
        path: "/contact",
    },
    {
        name: "Privacy Policy",
        path: "/privacy-policy",
    },
    // {
    //     name: "Contact Us",
    //     path: "#contact",
    // },
];

interface Props {
    // any props that come into the component
}


const MobileNav = ({ open, setOpen }) => {
    const router = useRouter();

    return (
        <>
            <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter`}>
                <div className="flex items-center filter bg-white h-20 ml-4"> 
                    {/*logo container*/}
                        <Image 
                        src="/vercel.svg" 
                        alt="" 
                        width={180} 
                        height={57} 
                        className="cursor-pointer" 
                        onClick={() => router.push("/")}
                        />
                </div>
                <div className="flex sticky flex-col ml-6 my-4 space-y-4">
                    {navLinks.map((link, index) => {
                        return (
                            <ul>
                                <Link href={link.path}>
                                    <a className="text-md font-medium inline-flex">
                                        <li key={index}>{link.name}</li>
                                    </a>
                                </Link>
                            </ul>
                        );
                    })}
                    {/* <Link href="/">
                        <a className="text-md font-medium inline-flex" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <HomeIcon className="h-4 mr-2" />
                            Home
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="text-md font-normal inline-flex" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <UserGroupIcon className="h-4 mr-2" />
                            About
                        </a>
                    </Link>
                    <Link href="/services">
                        <a className="text-md font-normal inline-flex" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <ServerIcon className="h-4 mr-2" />
                            Services
                        </a>
                    </Link>
                    <Link href="/classes">
                        <a className="text-md font-normal inline-flex" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <FolderIcon className="h-4 mr-2" />
                            Classes
                        </a>
                    </Link>
                    <Link href="/gallery">
                        <a className="text-md font-normal inline-flex" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <PhotographIcon className="h-4 mr-2" />
                            Gallery
                        </a>
                    </Link>
                    <Link href="tel:+91-7038298223">
                        <a className="text-md font-normal inline-flex" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            <DotsCircleHorizontalIcon className="h-4 mr-2" />
                            Contact us
                        </a>
                    </Link> */}
                    

                    {/* <div className="flex text-white mt-8 space-x-4">
                        <button className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button> 
                        <button className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div> */}
                </div>

                {/* <Link href="https://wa.me/917208875838/" passHref>
                    <button className="uppercase mt-8 border px-4 py-1 ml-6 rounded font-medium text-white tracking-wide hover:bg-white hover:text-black transition duration-200">
                        Appointments
                    </button>
                </Link> */}
            </div>
        </>
    )
}


const Header = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-[1000] bg-white flex items-center px-2 h-[63px] lg:px-12 shadow-md">
            <div>
            <Image 
                src="/vercel.svg" 
                alt="" 
                width={180} 
                height={57} 
                className="cursor-pointer" 
                onClick={() => router.push("/")}
            />
            </div>
            <nav className="w-10/12 flex justify-end items-center text-black">
                <MobileNav open={open} setOpen={setOpen} />
                <div className="z-50 flex relative w-8 h-6 flex-col justify-between items-center md:hidden mr-4" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-0.5 w-8 bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`h-0.5 w-8 bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-0.5 w-8 bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>
            
                {navLinks.map((link, index) => {
                    return (
                        <div className="hidden md:flex justify-between">
                            <ul className="hidden ml-4 md:flex items-center space-x-4">
                                <Link href={link.path}>
                                    <a className="header-link group">
                                        <li key={index}>{link.name}</li>
                                    </a>
                                </Link>
                            </ul>
                        </div>
                    );
                })}
            </nav>
        </header>
        )
}

export default Header