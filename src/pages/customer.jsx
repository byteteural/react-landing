import Marquee from "react-fast-marquee";
import img1 from '../assets/logo/ananda.png'
import img2 from '../assets/logo/CapitaLand.png'
import img3 from '../assets/logo/fragant.png'
import img4 from '../assets/logo/land-and-house-logo.png'
import img5 from '../assets/logo/scasset.png'
import img6 from '../assets/logo/supalai.png'
import img7 from '../assets/logo/TCCCapitaLand.png'

export default function Customer() {
    return (
        <div className="bg-dark flex items-center justify-center h-screen py-4">
            <div>
                <div className="font-bold text-center">
                    <h1 className="badge badge-neutral badge-lg text-lg text-gray-300">Our Partner</h1>
                    <h1 className="text-xl text-gray-900 pt-2">คู่ค้าของเรา</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-8 pt-6 text-gray-900 font-semibold">
                    <div className="relative flex overflow-hidden py-5 group">
                        <div className="overflow-hidden">
                            <div className="overflow-hidden">
                                <div className="overflow-hidden">
                                    <Marquee speed={150} delay={0} pauseOnHover={true} gradient={200} gradientColor="#dfdfdf" gradientWidth={90}>
                                        <div className="image_wrapper">
                                            <img src={img1} alt="" />
                                        </div>
                                        <div className="image_wrapper">
                                            <img src={img2} alt="" />
                                        </div>
                                        <div className="image_wrapper">
                                            <img src={img3} alt="" />
                                        </div>
                                        <div className="image_wrapper">
                                            <img src={img4} alt="" />
                                        </div>
                                        <div className="image_wrapper">
                                            <img src={img5} alt="" />
                                        </div>
                                        <div className="image_wrapper">
                                            <img src={img6} alt="" />
                                        </div>
                                        <div className="image_wrapper">
                                            <img src={img7} alt="" />
                                        </div>
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
