import { logohammer } from "../../images";
import "../../styles/footer/footer.css"

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-200  shadow dark:bg-gray-900 ">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logohammer} className="h-8" alt="Hammer Logo" />
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Beneficios</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Pautas de Convivencia Hammer</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Legales</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Hammer™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
