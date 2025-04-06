import Logo from '../../../public/logo.svg';
import { FaFacebookSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { LuSend } from 'react-icons/lu';


const Footer = () => {
    return (
        <>
            <footer className="footer min-[425px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-none md:footer-horizontal bg-[#111111] text-white p-10">
                <aside>
                    <div className='flex gap-2 items-center mb-5'>
                        <img src={Logo} alt="" />
                        <h3 className='text-xl'>Dira Service</h3>
                    </div>
                    <p>Need any help?</p>
                    <h5 className='mb-2 leading-snug'><b>Call Us: <span className='text-[#f8d448]'>(888)1234 5678</span></b></h5>
                    <p>Love Street, muscat, oman</p>
                    <a className='leading-snug' href="mailto:demo@gmail.com">demo@gmail.com</a>
                    <div className="grid grid-flow-col gap-4 text-xl mt-5">
                        <a>
                            <FaFacebookSquare />
                        </a>
                        <a>
                            <FaTwitter />
                        </a>
                        <a>
                            <FaLinkedinIn />
                        </a>
                    </div>
                </aside>
                <vr class="border-[#222222] border hidden md:block h-full"></vr>
                <hr class="border-[#222222] border block min-[425px]:hidden w-full"></hr>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Travel Guides</a>
                    <a className="link link-hover">Data Policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Top Destination</h6>
                    <a className="link link-hover">Las Vegas</a>
                    <a className="link link-hover">New York City</a>
                    <a className="link link-hover">San Francisco</a>
                    <a className="link link-hover">Hawaii</a>
                </nav>
                <nav>
                    <h6 className="footer-title pointer-events-none text-[#111111]">bb</h6>
                    <a className="link link-hover">Tokyo</a>
                    <a className="link link-hover">Sydney</a>
                    <a className="link link-hover">Melbourne</a>
                    <a className="link link-hover">Dubai</a>
                </nav>
                <vr class="border-[#222222] border hidden md:block h-full"></vr>
                <hr class="border-[#222222] border block min-[425px]:hidden w-full"></hr>
                <form>
                    <h6 className="footer-title">Sign up Newsletter</h6>
                    <fieldset className="">
                        <div className="join flex sm:flex-col">
                            <div className='relative'>
                                <input
                                    type="text"
                                    placeholder="Enter email..."
                                    className="input input-bordered join-item pl-8 sm:w-45 sm:rounded-lg bg-[#1d232a]" />
                                <LuSend className='absolute top-3.5 left-3 pointer-events-none text-[#8e9195]' />
                            </div>
                            <button className="btn bg-[#f8d448] join-item w-fit sm:mt-2 sm:rounded-lg px-6">Submit</button>
                        </div>
                        <p className='mt-10'>© {new Date().getFullYear()} DiraServices All right reserved</p>
                    </fieldset>
                </form>
            </footer>
        </>
    )
}

export default Footer;