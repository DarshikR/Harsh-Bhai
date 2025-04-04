import { FaGoogle, FaLinkedinIn, FaPinterestP, FaSearch, FaTwitter, FaUser } from "react-icons/fa"

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm hidden lg:flex text-sm">
                <div className="navbar-start">
                    <a className="px-3 border-r-2" href="tel:1234567890">1234567890</a>
                    <a className="px-3" href="mailto:demo@gmail.com">demo@gmail.com</a>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 items-center">
                        <li><a><FaTwitter /></a></li>
                        <li><a><FaLinkedinIn /></a></li>
                        <li><a><FaGoogle /></a></li>
                        <div className="border-r-2 me-2 pe-2">
                            <li><a><FaPinterestP /></a></li>
                        </div>
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
            <div className="navbar bg-base-100 shadow-sm">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Tours</a></li>
                            <li><a>destination</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Pages</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Tours</a></li>
                        <li><a>destination</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Pages</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="ml-auto">
                    <ul className="menu menu-horizontal items-center">
                        <li><a><FaSearch /></a></li>
                        {/* <li><a><FaUser /></a></li> */}
                        <li><a>Login</a></li>
                        /
                        <li><a>SignUp</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar