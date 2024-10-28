import React, { useLayoutEffect } from 'react';
import img1 from '../assets/estate/TheBangkokNarathiwas.png'
import img2 from '../assets/estate/Centric-Tiwanon-Station.png'
import img3 from '../assets/estate/chambers-cher.png'
import img4 from '../assets/estate/Supalaiasariwa.png'
import img5 from '../assets/estate/IdeoSathorn.png'
import img6 from '../assets/estate/Prime.png'
import img7 from '../assets/estate/VillaAsoke.png'
import img8 from '../assets/estate/supailaimontara.jpg'
import img9 from '../assets/estate/supalaipark.jpg'
import img10 from '../assets/estate/supalairiverplace.jpg'
import img11 from '../assets/estate/dcondorama.jpeg'
import img12 from '../assets/estate/dcondoramkham.jpg'
import img13 from '../assets/estate/BanSuanPhutthamonthon.jpg'
import img14 from '../assets/estate/meameen.jpg'
import img15 from '../assets/estate/lapawan22.jpg'
import img16 from '../assets/estate/lapawan23.jpg'
import img17 from '../assets/estate/baannontakorn.jpg'
import img18 from '../assets/estate/trrtower.jpg'

export default function Ourexperience() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className='bg-dark font-custom'>
            <div className=" flex items-center justify-center min-h-fit px-8 py-20">
                <div className="max-w-4xl w-full">
                    <h1 className="text-2xl font-bold text-white mb-8">ประสบการณ์</h1>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-900 font-semibold text-lg px-4 justify-items-center">
                        {[
                            { img: img1, name: 'The Bangkok Narathiwas' },
                            { img: img2, name: 'Centric Tiwanon Station' },
                            { img: img3, name: 'Chambers Cher Ratchada Ramintra' },
                            { img: img4, name: 'Supalai casariwa' },
                            { img: img5, name: 'Ideo Sathorn Thaphra' },
                            { img: img6, name: 'Prime Sukhumvit 11' },
                            { img: img7, name: 'Villa Asoke' },
                            { img: img8, name: 'Supalai Montara' },
                            { img: img9, name: 'Supalai Park Srinakarin' },
                            { img: img10, name: 'Supalai River Place' },
                            { img: img11, name: 'D Condo Ramindra' },
                            { img: img12, name: 'D Condo Ramkhamhaeng' },
                            { img: img13, name: 'หมู่บ้านบ้านสวนพุทธมณฑล' },
                            { img: img14, name: 'การไฟฟ้านครหลวงเขตมีนบุรี' },
                            { img: img15, name: 'หมู่บ้านจัดสรร ลภาวัน 22' },
                            { img: img16, name: 'หมู่บ้านจัดสรร ลภาวัน 23' },
                            { img: img17, name: 'หมู่บ้านจัดสรรบ้าน นนทกร เทพารัก' },
                            { img: img18, name: 'TRR Tower' },
                        ].map((item, index) => (
                            <li key={index} className="w-full mb-6">
                                <div className="text-center">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="mx-auto mb-6 w-full h-48 object-cover rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-400"
                                    />
                                    <h5>{item.name}</h5>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

