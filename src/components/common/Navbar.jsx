import menuConfigs from "../../configs/menu.config";
import { FaGoogle, FaLinkedinIn, FaPinterestP, FaSearch, FaTwitter, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/logo.svg";

const Navbar = () => {

    return (
        <>
            <div className="navbar bg-base-300 shadow-sm hidden lg:flex text-sm">
                <div className="navbar-start">
                    <a className="px-3" href="tel:1234567890">1234567890</a>
                    <vr class="border-[#6f748a] border hidden md:block h-5 mx-2.5"></vr>
                    <a className="px-3" href="mailto:demo@gmail.com">demo@gmail.com</a>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 items-center">
                        <li><a><FaTwitter /></a></li>
                        <li><a><FaLinkedinIn /></a></li>
                        <li><a><FaGoogle /></a></li>
                        <li><a><FaPinterestP /></a></li>
                        <vr class="border-[#6f748a] border hidden md:block h-5 mx-2.5"></vr>
                        <li className="">
                            <details>
                                <summary>IND</summary>
                                <ul className="p-2">
                                    <li><a>EUR</a></li>
                                    <li><a>IND</a></li>
                                    <li><a>USA</a></li>
                                    <li><a>UAE</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
                {/* <div className=""> */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {menuConfigs.menus.map((menus, index) => (
                            <li key={index}>
                                <NavLink to={menus.path}>{menus.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl ps-0 lg:ps-[1rem]">
                    <img className="h-5 sm:h-8 drop-shadow-[2px_4px_25px_black]" src={Logo} alt="" />
                    <h3 className='text-lg sm:text-xl'>Dira Service</h3>
                </a>
                {/* </div> */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuConfigs.menus.map((menus, index) => (
                            <li key={index}>
                                <NavLink to={menus.path}>{menus.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="ml-auto">
                    <ul className="menu menu-horizontal items-center">
                        <li><a><FaSearch /></a></li>
                        <li className="sm:hidden"><a><FaUser /></a></li>
                        <li className="hidden sm:flex sm:flex-row items-center pointer-events-none"><a className="pointer-events-auto">Login</a>/</li>
                        <li className="hidden sm:block"><a>SignUp</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar