import Marquee from "react-fast-marquee";
import img1 from '../assets/logo/ananda.png';
import img2 from '../assets/logo/CapitaLand.png';
import img3 from '../assets/logo/fragant.png';
import img4 from '../assets/logo/land-and-house-logo.png';
import img5 from '../assets/logo/scasset.png';
import img6 from '../assets/logo/supalai.png';
import img7 from '../assets/logo/TCCCapitaLand.png';

export default function Customer() {
    return (
        <div className="bg-dark flex items-center justify-center py-12 px-4 min-h-screen">
            <div className="w-full max-w-screen-2xl">
                <div className="font-bold text-center">
                    <h1 className="badge badge-neutral badge-lg text-lg text-gray-300">Our Partner</h1>
                    <h1 className="text-xl text-gray-900 pt-2">คู่ค้าของเรา</h1>
                </div>
                {/* <div className="relative flex overflow-hidden py-5 group"> */}
                <div className="flex justify-center pt-8">
                    <div className="relative flex overflow-hidden py-5 w-full">
                        <Marquee
                            speed={80}
                            pauseOnHover={true}
                            gradient={true}
                            gradientColor='#dfdfdf'
                            gradientWidth={70}
                        >
                            <div className="image_wrapper mx-6">
                                <img src={img1} alt="Ananda Partner" className="md:h-2/5" loading="lazy" />
                            </div>
                            <div className="image_wrapper mx-6">
                                <img src={img2} alt="CapitaLand Partner" className="md:h-2/5" loading="lazy" />
                            </div>
                            <div className="image_wrapper mx-6">
                                <img src={img3} alt="Fragant Partner" className="md:h-2/5" loading="lazy" />
                            </div>
                            <div className="image_wrapper mx-6">
                                <img src={img4} alt="Land and House Partner" className="md:h-2/5" loading="lazy" />
                            </div>
                            <div className="image_wrapper mx-6">
                                <img src={img5} alt="SC Asset Partner" className="md:h-2/5" loading="lazy" />
                            </div>
                            <div className="image_wrapper mx-6">
                                <img src={img6} alt="Supalai Partner" className="md:h-2/5" loading="lazy" />
                            </div>
                            <div className="image_wrapper mx-6">
                                <img src={img7} alt="TCC CapitaLand Partner" className="md:h-2/5" loading="lazy" />
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
}
