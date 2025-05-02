import menuConfigs from "../../configs/menu.config";
import { FaGoogle, FaLinkedinIn, FaPinterestP, FaSearch, FaTwitter, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../public/logo.svg";
import Logo1 from "../../assets/logo1.jpg";

const Navbar = () => {

    return (
        <>
            <div className="bg-base-300 shadow-sm hidden lg:flex text-sm h-[40px]">
                <div className="navbar-start">
                    <a className="px-3" href="tel:7069100023">7069100023</a>
                    <vr className="border-[#6f748a] border hidden md:block h-5 mx-2.5"></vr>
                    <a className="px-3" href="mailto:servicesdira@gmail.com">servicesdira@gmail.com</a>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal p-0 items-center">
                        {/* <li><a><FaTwitter /></a></li> */}
                        {/* <li><a><FaLinkedinIn /></a></li> */}
                        <li><Link to='https://g.co/kgs/MhE9SM5' target="_blank"><FaGoogle /></Link></li>
                        {/* <li><a><FaPinterestP /></a></li> */}
                        <vr className="border-[#6f748a] border hidden md:block h-5 mx-2.5"></vr>
                        <li className="">
                            <select defaultValue="IND" className="select h-7 py-0 outline-none border-0 bg-transparent shadow-none focus:shadow-none focus:outline-none ">
                                <option className="dark:bg-[#111111] dark:text-white">IND</option>
                                <option className="dark:bg-[#111111] dark:text-white" disabled>EUR</option>
                                <option className="dark:bg-[#111111] dark:text-white" disabled>USA</option>
                                <option className="dark:bg-[#111111] dark:text-white" disabled>UAE</option>
                            </select>
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
                <a className="btn btn-ghost text-xl px-0 dark:bg-gray-50 overflow-hidden">
                    <img src={Logo1} className="h-20 mix-blend-multiply" alt="" />
                    {/* <img className="h-5 sm:h-8 drop-shadow-[2px_4px_25px_black]" src={Logo} alt="" />
                    <h3 className='text-lg sm:text-xl'>Dira Service</h3> */}
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
                {/* <div className="ml-auto">
                    <ul className="menu menu-horizontal items-center">
                        <li><a><FaSearch /></a></li>
                        <li className="sm:hidden"><a><FaUser /></a></li>
                        <li className="hidden sm:flex sm:flex-row items-center pointer-events-none"><a className="pointer-events-auto">Login</a>/</li>
                        <li className="hidden sm:block"><a>SignUp</a></li>
                    </ul>
                </div> */}
            </div>
        </>
    )
}

export default Navbar