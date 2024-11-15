import { p } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdContacts } from "react-icons/md";

const Footer = () => {
    return (
        <>
        <footer className="w-full p-[1%] flex justify-center flex-col dark:bg-[#1c1c20] bg-[#F9F9F8] dark:text-white">
            <div className="w-full flex justify-center max-[400px]:flex-col">
            <div className="w-[25%] max-[400px]:w-full max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center max-[400px]:justify-center p-[2%]">
                <p className="fascinate text-3xl">DevPlay</p>
                <p className="text-bg-gray-500 text-2xl ">The best games platform anytime, anywhere</p>
            </div>
            <div className="w-[25%] max-[400px]:w-full max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center p-[2%]">
                <p className="text-2xl text-gray-400 dark:text-gray-500 font-bold my-[1%]">Resources</p>
                <ul className="max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center font-semibold text-gray-600 dark:text-gray-300">
                    <li><p className="no-underline cursor-pointer transition-all duration-500 ease-in-out hover:text-indigo-700 dark:hover:text-[#8d40e4]">Distribute On DevPlay Games</p></li>
                    <li><p className="no-underline cursor-pointer transition-all duration-500 ease-in-out hover:text-indigo-700 dark:hover:text-[#8d40e4]">Support-A-Creator</p></li>
                    <li><p className="no-underline cursor-pointer transition-all duration-500 ease-in-out hover:text-indigo-700 dark:hover:text-[#8d40e4]">Fan Art Policy</p></li>
                </ul>
            </div>
            <div className="w-[25%] max-[400px]:w-full max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center p-[2%]">
                <p className="text-2xl text-gray-400 dark:text-gray-500 font-bold my-[1%]">Made By DevPlay Games</p>
                <ul className="max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center font-semibold text-gray-600 dark:text-gray-300">
                    <li><p className="no-underline cursor-pointer transition-all duration-500 ease-in-out hover:text-indigo-700 dark:hover:text-[#8d40e4]">Battle Breaker</p></li>
                    <li><p className="no-underline cursor-pointer transition-all duration-500 ease-in-out hover:text-indigo-700 dark:hover:text-[#8d40e4]">Fortnite</p></li>
                    <li><p className="no-underline cursor-pointer transition-all duration-500 ease-in-out hover:text-indigo-700 dark:hover:text-[#8d40e4]">Robo Recall</p></li>
                </ul>
            </div>
            <div className="w-[25%] max-[400px]:w-full max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center p-[2%]">
                <p className="text-2xl text-gray-400 dark:text-gray-500 font-bold my-[1%]">Quick ps</p>
                <ul className="max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center font-semibold text-gray-600 dark:text-gray-300">
                    <li><p className="no-underline cursor-pointer transition-all duration-500 ease-in-out hover:text-indigo-700 dark:hover:text-[#8d40e4]" to="/about">About</p></li>
                    <li><p className="no-underline cursor-pointer transition-all duration-500 ease-in-out hover:text-indigo-700 dark:hover:text-[#8d40e4]" to="/contact">Contact Us</p></li>
                    <li><p className="no-underline cursor-pointer transition-all duration-500 ease-in-out hover:text-indigo-700 dark:hover:text-[#8d40e4]">FAQs</p></li>
                </ul>
            </div>
            </div>
            <div className="w-full border-b-[1px] border-gray-800 dark:border-gray-400"></div>
            <div className="w-full gap-4 p-[4%] min-[750px]:p-[2%] flex items-center justify-center">
            <FaFacebookSquare className="text-3xl dark:text-white cursor-pointer"/>
            <FaInstagramSquare  className="text-3xl dark:text-white cursor-pointer"/>
            <FaTwitterSquare  className="text-3xl dark:text-white cursor-pointer"/>
            <MdContacts  className="text-3xl dark:text-white cursor-pointer"/>
            <IoLogoYoutube  className="text-3xl dark:text-white cursor-pointer"/>
            </div>
        </footer>
        </>
    )
}
export default Footer;