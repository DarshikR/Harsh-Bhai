import Hero1 from '../assets/HeroImg1.png';
import Hero2 from '../assets/HeroImg.png';

const HeroSection = () => {
    return (
        <>
            <div className="hero bg-[#16377e] min-h-[calc(100dvh-80px)] text-white">
                <div className="hero-content w-full justify-between flex-col md:flex-row-reverse">
                    <div className='flex gap-4 md:gap-4 flex-wrap justify-center w-fit'>
                        <img
                            src={Hero1}
                            className="w-[calc(50%-10px)] object-cover sm:max-h-50"
                            alt='hero1' />
                        <img
                            className="w-[calc(50%-10px)] object-cover sm:max-h-120"
                            src={Hero2}
                            alt="hero2" />
                    </div>
                    <div>
                        <h1 className="text-2xl text-center md:text-left sm:text-3xl font-bold">Explore The</h1>
                        <h1 className="text-4xl text-center md:text-left sm:text-5xl font-bold">Travel & <br className='hidden md:block' /> Adventures</h1>
                        <p className="py-6 text-center md:text-left">
                            Find awesome hotel, tour, car and activities in India
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;