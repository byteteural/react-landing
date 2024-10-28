import { HashLink as Let } from 'react-router-hash-link';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-100 py-6 px-8">
            <div className="flex items-center justify-center">
                <p className="text-center text-sm md:text-base">
                    {/* บริษัท เอ็น วี พี พร็อพเพอร์ตี้ จำกัด <br />
                    เลขที่ 72/51 หมู่บ้านมั่นคง ม.2 ถ.บางกรวย-ไทรน้อย ต.บางบัวทอง <br />
                    อ.บางบัวทอง นนทบุรี 11110 */}
                    บริษัท เอ็น วี พี พร็อพเพอร์ตี้  จำกัด สำนักงานใหญ่<br />
                    72/51 หมู่ที่ 2 ถนนบางกรวย-ไทรน้อย ตำบลบางบัวทอง <br />
                    อำเภอบางบัวทอง จังหวัด นนทบุรี 11110<br />
                    โทรศัพท์ 02-149-9304, 086-554-7966
                    <p>
                        E-mail: <a href="mailto:kisttisak66@gmail.com" className="text-blue-400">kisttisak66@gmail.com</a>
                    </p>
                </p>
            </div>
            <div className="mt-4 text-center text-xs md:text-sm font-mono">
                © 2024 NVP Property Co., Ltd. All rights reserved.
            </div>
        </footer>
        // <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">

        //     <nav className="grid grid-flow-col gap-4">
        //         <Let smooth to="#about">About us</Let>
        //         <Let smooth to="#service">Service</Let>
        //         <Link to="/contact">Contact</Link>
        //     </nav>
        //     <aside>
        //         <p>Copyright © {new Date().getFullYear()} - All right reserved by NVP Property Co., Ltd.</p>
        //     </aside>
        // </footer >
    )
}
