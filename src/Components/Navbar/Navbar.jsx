"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


const menuItems = [
    ["Programas In-Company", "#home"],
    ["Cursos y Diplomados", "#about"],
    ["Blog", "#why-attend"],
    ["Nosotros", "#nosotros"],
];

export default function Navbar({ locoScroll }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            // yahan window.pageYOffset lenis ke saath bhi work karta hai
            if (window.scrollY > 11) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    // const onScroll = ({ scroll }) => {
    //     setScrolled(scroll > 30); // React state
    // };
    // SmoothLenis.on('scroll', onScroll);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 pt-3 sm:py-1.5 w-full z-[999999] 
    transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] 
    ${scrolled ? "bg-blue/90 backdrop-blur-md shadow-md" : "bg-transparent shadow-none backdrop-blur-0"}`}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-white font-bold text-xl select-none cursor-pointer">
                        <Link href="/" className="hover:text-purple-400 transition">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={80}
                                height={60}
                                className="w-150px"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex font-Manrope font-[700] space-x-9 flex-grow justify-center text-white text-[15px]">
                        {menuItems.map(([label, href]) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className="hover:text-purple-400 transition cursor-pointer"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const element = document.getElementById(href.slice(1));
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right Button */}
                    <div className="hidden min-[840px]:block">
                        <button className="bg-skyBlue font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-6 py-2.5 rounded-md select-none">
                            Contacta con
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="min-[840px]:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            className="text-white focus:outline-none"
                        >
                            {menuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="min-[840px]:hidden bg-blue/90  backdrop-blur-sm px-6 py-4">
                        <ul className="flex flex-col space-y-4 text-white font-medium">
                            {menuItems.map(([label, href]) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        className="hover:text-skyBlue transition block cursor-pointer"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setMenuOpen(false);
                                            const element = document.getElementById(href.slice(1));
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <button className="w-max sm:w-full bg-skyBlue hover:bg-skyBlue transition text-white font-semibold px-5 py-2 rounded-md select-none">
                                    Contact Us
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}
