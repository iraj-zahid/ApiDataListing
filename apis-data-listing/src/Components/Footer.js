import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdContacts } from "react-icons/md";

const Footer = () => {
    return (
        <>
        <footer className="w-full p-[1%] flex justify-center flex-col dark:bg-gray-800 dark:text-white">
            <div className="w-full flex justify-center max-[400px]:flex-col">
            <div className="w-[25%] max-[400px]:w-full max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center max-[400px]:justify-center p-[2%]">
                <p className="fascinate text-3xl">SMRT</p>
                <p className="text-bg-gray-500 text-2xl">The best CVS anytime, anywhere</p>
            </div>
            <div className="w-[25%] max-[400px]:w-full max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center p-[2%]">
                <p className="text-2xl">Shop Grocery</p>
                <ul className="max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center">
                    <li><Link>Household Essentials</Link></li>
                    <li><Link>Pantry Staples</Link></li>
                    <li><Link>Frozen Foods</Link></li>
                </ul>
            </div>
            <div className="w-[25%] max-[400px]:w-full max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center p-[2%]">
                <p className="text-2xl">Furniture</p>
                <ul className="max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center">
                    <li><Link>Office Furniture</Link></li>
                    <li><Link>Storage and Organization</Link></li>
                    <li><Link>Outdoor Furniture</Link></li>
                </ul>
            </div>
            <div className="w-[25%] max-[400px]:w-full max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center p-[2%]">
                <p className="text-2xl">Quick Links</p>
                <ul className="max-[400px]:flex max-[400px]:flex-col max-[400px]:items-center">
                    <li><Link  to="/about">About</Link></li>
                    <li><Link  to="/contact">Contact Us</Link></li>
                    <li><Link>FAQs</Link></li>
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