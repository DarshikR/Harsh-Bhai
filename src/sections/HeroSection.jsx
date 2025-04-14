import Hero1 from '../assets/HeroImg1.png';
import Hero2 from '../assets/HeroImg.png';
import SearchBar from '../components/common/SearchBar';

const HeroSection = () => {
    return (
        <>
            <div className="hero bg-[#16377e] min-h-[calc(100dvh-80px)] text-white">
                <div className="w-full flex flex-col">
                    <div className='hero-content w-full justify-between flex-col md:flex-row-reverse mx-auto'>
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
                            <h1 className="text-2xl text-center md:text-left sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold font-kaushan text-[#f8d448]">Explore The</h1>
                            <h1 className="text-4xl text-center md:text-left sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold">Travel & <br className='hidden md:block' /> Adventures</h1>
                            <p className="py-6 text-center md:text-left xl:text-2xl">
                                Find awesome hotel, tour, car and activities in India
                            </p>
                        </div>
                    </div>
                    <SearchBar />
                </div>
            </div>
        </>
    )
}

export default HeroSection;