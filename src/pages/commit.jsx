import img1 from '../assets/images/creative.jpg'
import img2 from '../assets/images/visualization.jpg'
import img3 from '../assets/images/productive.jpg'

export default function Commitment() {
    return (
        <div className="bg-dark flex items-center justify-center min-h-fit px-8 py-4">
            <div>
                <div className="font-bold text-center">
                    <h1 className='badge badge-neutral badge-lg text-lg text-gray-300 opacity-75'>Core Value</h1>
                    <h1 className=' text-xl text-gray-900 pt-2'>ค่านิยมองค์กร</h1>
                </div>
                <div className='flex flex-wrap justify-center gap-8 pt-6 text-gray-900 font-semibold'>
                    <div className='card bg-gray-50 w-96 shadow-lg hover:shadow-2xl duration-500'>
                        <figure className="px-10 pt-10 hidden md:flex justify-center relative overflow-hidden">
                            <img
                                src={img1}
                                alt=""
                                className="rounded-md md:w-[1300px] w-full h-full object-cover opacity-90 border-2 border-cyan-200 outline outline-offset-8 outline-cyan-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent via-30% z-10 " />
                        </figure>
                        <div className='card-body'>
                            <div className='badge badge-accent badge-outline'>nature</div>
                            <p className="card-title">มุ่งมั่น</p>
                            <p className="text-balance text-sm">มุ่งมั่นเป็นส่วนหนึ่งในการสร้างอนาคตที่สดใสให้กับคุณ เน้นการสร้างความมั่นคงและความสุขให้กับลูกค้าในระยะยาว</p>
                        </div>
                    </div>

                    <div className='card bg-gray-50 w-96 shadow-lg hover:shadow-2xl duration-500'>
                        <figure className="px-10 pt-10 hidden md:flex justify-center relative overflow-hidden">
                            <img
                                src={img2}
                                alt=""
                                className="rounded-md md:w-[1300px] w-full h-full object-cover opacity-90 border-2 border-cyan-200 outline outline-offset-8 outline-cyan-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent via-30% z-10 " />
                        </figure>
                        <div className='card-body'>
                            <div className='badge badge-accent badge-outline'>visualization</div>
                            <p className="card-title">สร้างสรรค์</p>
                            <p className="text-balance text-sm">สร้างสรรค์นวัตกรรมที่อยู่อาศัย ตอบโจทย์ทุกความต้องการ เน้นการนำเทคโนโลยีและวัสดุใหม่ๆ มาใช้ในการก่อสร้าง</p>
                        </div>
                    </div>

                    <div className='card bg-gray-50 w-96 shadow-lg hover:shadow-2xl duration-500'>
                        <figure className="px-10 pt-10 hidden md:flex justify-center relative overflow-hidden">
                            <img
                                src={img3}
                                alt=""
                                className="rounded-md md:w-[1300px] w-full h-full object-cover opacity-90 border-2 border-cyan-200 outline outline-offset-8 outline-cyan-300" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent via-30% z-10 " />
                        </figure>
                        <div className='card-body'>
                            <div className='badge badge-accent badge-outline'>productive</div>
                            <p className="card-title">ประสิทธิภาพ</p>
                            <p className="text-balance text-sm">มอบประสบการณ์การอยู่อาศัยที่เหนือกว่า ด้วยมาตรฐานระดับโลก เน้นคุณภาพและมาตรฐานในการทำงาน</p>
                        </div>
                    </div>
                    <div className='flex text-wrap tracking-wide'>
                        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
                            เราให้บริการด้วยความเป็น
                            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-400 relative m-3 inline-block">
                                <span className="relative text-white">มืออาชีพ</span>
                            </span>
                            เพื่อให้คุณได้รับประสบการณ์ที่ดีที่สุด
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}
