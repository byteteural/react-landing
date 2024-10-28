import React, { useLayoutEffect } from 'react';
import img1 from '../assets/clean/image11.jpeg'
import img2 from '../assets/clean/image12.jpeg'
import img3 from '../assets/clean/image13.jpeg'
import img4 from '../assets/clean/image14.jpeg'
import img5 from '../assets/clean/image15.jpeg'
import img6 from '../assets/clean/image16.jpeg'
import img7 from '../assets/clean/image17.jpeg'
import img8 from '../assets/clean/image18.jpeg'
import img9 from '../assets/clean/image19.jpeg'
import img10 from '../assets/clean/image20.jpg'
import img11 from '../assets/clean/image21.jpeg'
import img12 from '../assets/clean/image22.jpeg'
import img13 from '../assets/clean/image23.jpeg'
import img14 from '../assets/clean/image24.jpeg'
import img15 from '../assets/clean/image25.jpeg'
import img16 from '../assets/clean/image26.jpeg'
import img17 from '../assets/clean/image27.jpeg'
import img18 from '../assets/clean/image28.jpg'
import img19 from '../assets/clean/image29.jpg'
import img20 from '../assets/clean/image30.jpeg'
import img21 from '../assets/clean/image31.jpeg'
import img22 from '../assets/clean/image32.jpeg'
import img23 from '../assets/clean/image33.jpeg'
import img24 from '../assets/clean/image34.jpeg'
import img25 from '../assets/clean/image35.jpeg'
import img26 from '../assets/clean/image36.jpeg'
import img27 from '../assets/clean/image37.jpeg'
import img28 from '../assets/clean/image38.jpeg'
import img29 from '../assets/clean/image39.jpg'
import img30 from '../assets/clean/image40.jpeg'
import img31 from '../assets/clean/image41.jpg'
import img32 from '../assets/clean/image43.jpeg'
import img33 from '../assets/clean/image44.jpeg'
import img34 from '../assets/clean/image45.jpeg'
import img35 from '../assets/clean/image46.jpeg'
import img36 from '../assets/clean/image47.jpeg'
import img37 from '../assets/clean/image48.jpeg'



export default function Cleaning() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className='bg-dark font-custom'>
            <div className=" flex items-center justify-center min-h-fit px-8 py-20">
                <div className="max-w-4xl w-full">
                    <h1 className="text-2xl font-bold text-white mb-8">งานทำความสะอาด</h1>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-900 font-semibold text-lg px-4 justify-items-center">
                        {[
                            { img: img1, name: '' },
                            { img: img2, name: '' },
                            { img: img3, name: '' },
                            { img: img4, name: '' },
                            { img: img5, name: '' },
                            { img: img6, name: '' },
                            { img: img7, name: '' },
                            { img: img8, name: '' },
                            { img: img9, name: '' },
                            { img: img10, name: '' },
                            { img: img11, name: '' },
                            { img: img12, name: '' },
                            { img: img13, name: '' },
                            { img: img14, name: '' },
                            { img: img15, name: '' },
                            { img: img16, name: '' },
                            { img: img17, name: '' },
                            { img: img18, name: '' },
                            { img: img19, name: '' },
                            { img: img20, name: '' },
                            { img: img21, name: '' },
                            { img: img22, name: '' },
                            { img: img23, name: '' },
                            { img: img24, name: '' },
                            { img: img25, name: '' },
                            { img: img26, name: '' },
                            { img: img27, name: '' },
                            { img: img28, name: '' },
                            { img: img29, name: '' },
                            { img: img30, name: '' },
                            { img: img31, name: '' },
                            { img: img32, name: '' },
                            { img: img33, name: '' },
                            { img: img34, name: '' },
                            { img: img35, name: '' },
                            { img: img36, name: '' },
                            { img: img37, name: '' },
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