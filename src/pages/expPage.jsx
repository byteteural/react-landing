import img1 from '../assets/estate/Picture1.jpg'
import img2 from '../assets/estate/Picture2.jpg'
import img3 from '../assets/estate/Picture3.jpg'
import img4 from '../assets/estate/Picture4.jpg'
import img5 from '../assets/estate/Picture5.jpg'
import img6 from '../assets/estate/Picture6.jpg'

export default function Ourexperience() {
    return (
        <div className="bg-dark flex items-center justify-center min-h-screen px-8 py-4">
            <div className="max-w-4xl w-full">
                <h1 className="text-4xl font-bold text-white mb-8">ประสบการณ์</h1>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-900 font-semibold text-lg px-4 justify-items-center">
                    {[
                        { img: img1, name: 'The Bangkok Narathiwas' },
                        { img: img2, name: 'Centric Tiwanon Station' },
                        { img: img3, name: 'Chambers Cher Ratchada Ramintra' },
                        { img: img4, name: 'Supalai casariwa' },
                        { img: img5, name: 'Ideo Sathorn Thaphra' },
                        { img: img6, name: 'Prime Sukhumvit 11' },
                    ].map((item, index) => (
                        <li key={index} className="w-full mb-6">
                            <div className="text-center">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="mx-auto mb-6 w-3/4 max-w-xs h-auto shadow-lg transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-400"
                                />
                                <h5>{item.name}</h5>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

