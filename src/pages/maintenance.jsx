import React, { useLayoutEffect } from 'react';
import img1 from '../assets/maintain/image17.jpeg'
import img2 from '../assets/maintain/image18.jpeg'
import img3 from '../assets/maintain/image19.jpeg'
import img4 from '../assets/maintain/image20.jpeg'
import img5 from '../assets/maintain/image21.jpeg'
import img6 from '../assets/maintain/image22.jpeg'
import img7 from '../assets/maintain/image23.jpeg'
import img8 from '../assets/maintain/image24.jpeg'
import img9 from '../assets/maintain/image25.jpeg'
import img10 from '../assets/maintain/image26.jpeg'
import img11 from '../assets/maintain/image27.jpeg'
import img12 from '../assets/maintain/image28.jpeg'
import img13 from '../assets/maintain/image29.jpeg'
import img14 from '../assets/maintain/image30.jpeg'
import img15 from '../assets/maintain/image31.jpeg'
import img16 from '../assets/maintain/image32.jpeg'
import img17 from '../assets/maintain/image33.jpeg'
import img18 from '../assets/maintain/image34.jpeg'
import img19 from '../assets/maintain/image35.jpeg'
import img20 from '../assets/maintain/image36.jpeg'
import img21 from '../assets/maintain/image37.jpeg'
import img22 from '../assets/maintain/image38.jpeg'
import img23 from '../assets/maintain/image39.jpeg'
import img24 from '../assets/maintain/image40.jpeg'
import img25 from '../assets/maintain/image41.jpeg'
import img26 from '../assets/maintain/image42.jpeg'
import img27 from '../assets/maintain/image43.jpeg'
import img28 from '../assets/maintain/image44.jpeg'
import img29 from '../assets/maintain/image45.jpeg'
import img30 from '../assets/maintain/image46.jpeg'
import img31 from '../assets/maintain/image47.jpeg'
import img32 from '../assets/maintain/image48.jpeg'
import img33 from '../assets/maintain/image49.jpeg'

export default function Maintenance() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className='bg-dark font-custom'>
            <div className=" flex items-center justify-center min-h-fit px-8 py-20">
                <div className="max-w-4xl w-full">
                    <h1 className="text-2xl font-bold text-white mb-8">การจัดการและบำรุงรักษา</h1>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-900 font-semibold text-lg px-4 justify-items-center">
                        {[
                            { img: img1, name: 'MAIN DISTRIBUTION  BOARD' },
                            { img: img2, name: 'GENERATOR' },
                            { img: img3, name: 'TRANSFORMER' },
                            { img: img4, name: 'LIFT SYSTEM' },
                            { img: img5, name: 'FIRE PUMP & JOKEY PUMP' },
                            { img: img6, name: 'FIRE PUMP & JOKEY PUMP' },
                            { img: img7, name: 'FIRE ALARM SYSTEM' },
                            { img: img8, name: 'FIRE ALARM SYSTEM' },
                            { img: img11, name: 'FIRE ALARM SYSTEM' },
                            { img: img10, name: 'PRESSURIZED FAN' },
                            { img: img9, name: 'FIRE HOSE CABINET' },
                            { img: img12, name: 'TRANSFER PUMP' },
                            { img: img13, name: 'BOOSTER PUMP' },
                            { img: img14, name: 'SEWAGE PUMP & DRAINAGE PUMP' },
                            { img: img15, name: 'FOUNTAIN PUMP' },
                            { img: img16, name: 'SWIMMING POOL  SYSTEM' },
                            { img: img17, name: 'SWIMMING POOL  SYSTEM' },
                            { img: img18, name: 'SWIMMING POOL  SYSTEM' },
                            { img: img19, name: 'FIRE PROTECTION GRAPHIC' },
                            { img: img20, name: 'FIRE PROTECTION GRAPHIC' },
                            { img: img21, name: 'LIGHTING CONTOL  SYSTEM' },
                            { img: img22, name: 'LIGHTING CONTOL  SYSTEM' },
                            { img: img23, name: 'MATV SYSTEM' },
                            { img: img24, name: 'MATV SYSTEM' },
                            { img: img25, name: 'EMERGENCY & FIRE EXIT' },
                            { img: img26, name: 'EMERGENCY & FIRE EXIT' },
                            { img: img27, name: 'CCTV SYSTEM' },
                            { img: img28, name: 'CCTV SYSTEM' },
                            { img: img29, name: 'PABX  SYSTEM' },
                            { img: img30, name: 'PABX  SYSTEM' },
                            { img: img31, name: 'ACCESS CONTROL  SYSTEM' },
                            { img: img32, name: 'ACCESS CONTROL  SYSTEM' },
                            { img: img33, name: 'ACCESS CONTROL  SYSTEM' },
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
    )
}
