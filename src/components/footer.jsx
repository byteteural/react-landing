import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-100 py-6 px-8">
            <div className="flex items-center justify-center">
                <p className="text-center text-sm md:text-base">
                    บริษัท เอ็น วี พี พร็อพเพอร์ตี้ จำกัด <br />
                    เลขที่ 72/51 หมู่บ้านมั่นคง ม.2 ถ.บางกรวย-ไทรน้อย ต.บางบัวทอง <br />
                    อ.บางบัวทอง นนทบุรี 11110
                </p>
            </div>
            <div className="mt-4 text-center text-xs md:text-sm">
                © 2024 NVP Property Co., Ltd. All rights reserved.
            </div>
        </footer>
    )
}
