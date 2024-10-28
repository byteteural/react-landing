import Marquee from "react-fast-marquee";
import img1 from '../assets/logo/ananda.png';
import img4 from '../assets/logo/land-and-house-logo.png';
import img5 from '../assets/logo/scasset.png';
import img6 from '../assets/logo/supalai.png';
import img2 from '../assets/logo/mea.png';
import img3 from '../assets/logo/theprime.png';
import img7 from '../assets/logo/lopval.png';
import img8 from '../assets/logo/villasoke.png';

export default function Customer() {
    return (
        <div className="bg-dark flex items-center justify-center px-4 min-h-fit py-6">
            <div className="w-full max-w-screen-2xl">
                <div className="font-bold text-center">
                    <h1 className="badge badge-neutral badge-lg text-lg text-gray-300 opacity-75">Our Customer</h1>
                    <h1 className="text-xl text-gray-900 pt-2">ลูกค้าของเรา</h1>
                </div>
                {/* <div className="relative flex overflow-hidden py-5 group"> */}
                <div className="flex justify-center">
                    <div className="relative flex overflow-hidden w-full">
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
                                <img src={img2} alt="MEA" className="md:h-2/5" loading="lazy" />
                            </div>
                            <div className="image_wrapper mx-6">
                                <img src={img3} alt="The prime" className="md:h-3/5" loading="lazy" />
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
                                <img src={img7} alt="Lapawan" className="md:h-4/5" loading="lazy" />
                            </div>
                            <div className="image_wrapper mx-6">
                                <img src={img8} alt="Villa Asoke" className="md:h-2/5" loading="lazy" />
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
}
