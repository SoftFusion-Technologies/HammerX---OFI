import React from "react";

const Footer = () => {
    return (
        <>
            <footer class="bg-gray-200 rounded-lg shadow dark:bg-gray-900 ">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="https://www.hammer.ar/image/logohammerorange.png" class="h-8" alt="Hammer Logo" />
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="https://spartansgym.netlify.app" class="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="https://spartansgym.netlify.app" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="https://spartansgym.netlify.app" class="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="https://spartansgym.netlify.app" class="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://spartansgym.netlify.app" class="hover:underline">Hammer™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
