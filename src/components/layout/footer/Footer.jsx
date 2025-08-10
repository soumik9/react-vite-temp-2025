import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-neutral-100 to-neutral-200 border-t border-neutral-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-3 px-4">
                {/* Left side */}
                <p className="text-sm md:text-base text-neutral-600">
                    <span className="font-light">© {new Date().getFullYear()}</span>{" "}
                    <span className="font-semibold text-neutral-800">
                        <span className="text-main-500">Soumik Ahammed</span> | All Rights Reserved
                    </span>
                </p>

                {/* Right side */}
                <div className="flex items-center gap-4">
                    <p className="text-sm text-neutral-700 font-light">Developed by</p>
                    <div className="h-4 w-px bg-neutral-400" />

                    <a
                        href="https://soumikahammed.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-main-500 hover:text-main-600 transition-colors"
                    >
                        Soumik Ahammed
                    </a>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 ml-4">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-main-500 transition-colors"
                        >
                            <FaGithub size={18} />
                        </a>
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-main-500 transition-colors"
                        >
                            <FaLinkedin size={18} />
                        </a>
                        <a
                            href="https://netrosystems.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-main-500 transition-colors"
                        >
                            <FaGlobe size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
