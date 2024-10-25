import { HashLink as Let } from 'react-router-hash-link';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        // <footer className="bg-gray-800 text-gray-100 py-6 px-8">
        //     <div className="flex items-center justify-center">
        //         <p className="text-center text-sm md:text-base">
        //             {/* บริษัท เอ็น วี พี พร็อพเพอร์ตี้ จำกัด <br />
        //             เลขที่ 72/51 หมู่บ้านมั่นคง ม.2 ถ.บางกรวย-ไทรน้อย ต.บางบัวทอง <br />
        //             อ.บางบัวทอง นนทบุรี 11110 */}
        //             บริษัท เอ็น วี พี พร็อพเพอร์ตี้  จำกัด สำนักงานใหญ่<br />
        //             72/51 หมู่ที่ 2 ถนนบางกรวย-ไทรน้อย ตำบลบางบัวทอง <br />
        //             อำเภอบางบัวทอง จังหวัด นนทบุรี 11110<br />
        //             โทรศัพท์ 02-149-9304, 086-554-7966 E-mail kisttisak66@gmail.com
        //         </p>
        //     </div>
        //     <div className="mt-4 text-center text-xs md:text-sm font-mono">
        //         © 2024 NVP Property Co., Ltd. All rights reserved.
        //     </div>
        // </footer>
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">

            <nav className="grid grid-flow-col gap-4">
                <Let smooth to="#about">About us</Let>
                <Let smooth to="#service">Service</Let>
                <Link to="/contact">Contact</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link to="https://www.w3schools.com/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </Link>
                    <Link to="https://www.w3schools.com/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </Link>
                    <Link to="https://www.w3schools.com/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </Link>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by NVP Property Co., Ltd.</p>
            </aside>
        </footer >
    )
}
