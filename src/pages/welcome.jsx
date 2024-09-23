import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Slider from "react-slick";
import realestate from "../assets/images/realestate.jpg";
import realestate2 from "../assets/images/realestate2.jpg";
import logo from "../assets/images/logo.png";

const Welcome = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="font-semibold min-h-screen flex flex-col items-center">
            <div className="flex justify-center mt-8">
                <img src={logo} alt="Logo" className="h-24" />
            </div>
            <div className="w-full max-w-lg mt-8">
                <Slider {...settings}>
                    <div>
                        <img src={realestate} alt="Slide 1" className="w-full h-auto" /> {/* Replace with slide image paths */}
                    </div>
                    <div>
                        <img src={realestate2} alt="Slide 2" className="w-full h-auto" />
                    </div>
                </Slider>
            </div>
            <div className="text-center mt-4 p-4">
                <p className="text-wrap">
                    ก่อตั้งขึ้นโดยทีมงานที่มีประสบการณ์ในด้านบริหารจัดการอสังหาริมทรัพย์ เช่น อาคารสำนักงาน อาคารชุด  หมู่บ้าน และเซอร์วิสอพาร์ทเม้นท์ ทั้งในกรุงเทพฯ และปริมณฑล เพื่อตอบสนองความต้องการของลูกค้าแบบครบวงจรในการดำเนินการให้คำปรึกษาด้านระบบการบริหารจัดการอสังหาริมทรัพย์ที่มีมาตรฐานและมีประสิทธิภาพสูงสุด
                </p>
            </div>
            <div className="flex space-x-4 mt-8">
                <AnchorLink href="#home" className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800">
                    Home
                </AnchorLink>
                <AnchorLink href="#contact" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
                    Contact
                </AnchorLink>
            </div>
        </div>
    );
};

export default Welcome;
