import React from 'react';
import logo from './../assets/logo.png';
import "./../styles/Footer.css";

export function FooterPage() {
    return (
        <footer className="bg-gray-800 text-white py-20 mt-5">
            <div class="new_footer_top">
                <div class="footer_bg">
                    <div class="footer_bg_one"></div>
                    <div class="footer_bg_two"></div>
                </div>
            </div>
            <div className="container mx-auto pt-10 flex flex-wrap justify-center align-center items-center">

                <div className="flex items-center mx-2">
                  
                    <img src={logo} alt="Logo" className="h-8 mr-4" />
                    <p className="text-sm">© 2024 GPLX_STU All Rights Reserved.</p>
                </div>
                <div className="flex items-center space-x-6 mx-2">
                    <a href="#" className="text-base leading-6 hover:text-gray-300 hover:underline active:text-red-300">Home</a>
                    <a href="/hoc-ly-thuyet" className="text-base leading-6 hover:text-gray-300 hover:underline active:text-red-300">Học lý thuyết</a>
                    <a href="/thi-ly-thuyet" className="text-base leading-6 hover:text-gray-300 hover:underline active:text-red-300">Thi thử</a>
                </div>
            </div>

        </footer>
    );
}
