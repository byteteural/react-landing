import img1 from '../assets/estate/TheBangkokNarathiwas.png'
import img2 from '../assets/estate/Centric-Tiwanon-Station.png'
import img3 from '../assets/estate/chambers-cher.png'
import { Link } from "react-router-dom";

export default function Experience() {
    return (
        <div className="bg-dark flex items-center justify-center min-h-fit px-8 py-4 pt-16 font-custom">
            <div>
                <div className="font-bold text-center">
                    <h1 className="badge badge-neutral badge-lg text-lg text-gray-300 opacity-75">Experience</h1>
                    <h1 className="text-xl text-gray-900 pt-2">ประสบการณ์</h1>
                </div>
                <div className="col md:w-8/12 mx-auto text-center mb-8">
                    <p className="text-lg font-light text-gray-900">
                        เรามีประสบการณ์มากมายที่พร้อมตอบสนองความต้องการของลูกค้า และนี่คือโครงการบางส่วนที่เราได้รับมอบหมายให้ดูแลและจัดการ
                    </p>
                </div>
                <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-900 font-custom text-lg px-4 justify-items-center">
                    {[
                        { img: img1, name: 'The Bangkok Narathiwas' },
                        { img: img2, name: 'Centric Tiwanon Station' },
                        { img: img3, name: 'Chambers Cher Ratchada Ramintra' },
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
                </ol>
                <div className="flex items-center justify-center mt-8">
                    <Link to="/Ourexperience" className="btn btn-outline btn-primary btn-xs sm:btn-sm md:btn-md">
                        เพิ่มเติม...
                    </Link>
                </div>
            </div>
        </div>
    )
}
