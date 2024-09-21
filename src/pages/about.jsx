import React from 'react'

export default function About() {
  return (
    <div className="bg-dark flex items-center justify-center h-screen px-8 py-4">
      <div>
        <div className="font-bold text-center">
          <h1 className='badge badge-neutral badge-lg text-lg text-gray-300'>About</h1>
          <h1 className=' text-xl text-gray-900 pt-2'>เกี่ยวกับเรา</h1>
        </div>
        <div>
          <p className='text-wrap'>
            บริษัท เอ็น วี พี  พร็อพเพอร์ตี้  จำกัด หรือชื่อย่อว่า “NVP”  ซึ่งก่อตั้งขึ้นโดยทีมงานที่มีประสบการณ์ในด้านบริหารจัดการอสังหาริมทรัพย์ เช่น อาคารสำนักงาน อาคารชุด  หมู่บ้าน และเซอร์วิสอพาร์ทเม้นท์ ทั้งในกรุงเทพฯ และปริมณฑล เพื่อตอบสนองความต้องการของลูกค้าแบบครบวงจรในการดำเนินการให้คำปรึกษาด้านระบบการบริหารจัดการอสังหาริมทรัพย์ที่มีมาตรฐานและมีประสิทธิภาพสูงสุด
          </p>
        </div>
      </div>
    </div>
  )
}
