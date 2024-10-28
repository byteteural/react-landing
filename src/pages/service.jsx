import { Link } from "react-router-dom"

Link
export default function Service() {
  return (
    <div className="bg-dark flex items-center justify-center min-h-fit px-8 py-4 pt-16">
      <div>
        <div className="font-bold text-center">
          <h1 className='badge badge-neutral badge-lg text-lg text-gray-300 opacity-75'>Our services</h1>
          <h1 className=' text-xl text-gray-900 pt-2'>บริการของเรา</h1>
        </div>
        <div className='flex flex-wrap justify-center gap-8 pt-6 text-gray-900 font-semibold'>
          <div className='card bg-gray-50 w-96 h-80 shadow-lg hover:shadow-2xl duration-500'>
            <div className='card-body'>
              <div className='badge badge-error badge-outline'>Management</div>
              <h2 className='card-title pb-3'>งานบริหารและการจัดการ</h2>
              <p className="text-balance">
                • บริหารจัดการอาคารที่อยู่<br />
                <p className="indent-3">อาศัยและอาคารสำนักงาน</p>
                • บริหารจัดการหมู่บ้านจัดสรร<br />
                • บริการงานรักษาความปลอดภัย<br />
                • บริการงานรักษาความสะอาดทั่วไป<br />
                • บริการงานจัดสวนและดูแลรักษาสวน<br />
                • บริการงานดูแลสระว่ายน้ำ
              </p>
              <Link to="/Maintenance" className="text-blue-400">ตัวอย่างงาน</Link>
            </div>
          </div>

          <div className='card bg-gray-50 w-96 h-80 shadow-lg hover:shadow-2xl duration-500'>
            <div className='card-body'>
              <div className='badge badge-error badge-outline'>Consult</div>
              <h2 className='card-title pb-3'>งานที่ปรึกษาและบำรุงรักษา</h2>
              <p className="text-balance ">
                • เป็นที่ปรึกษาและบริหารจัดการ<br />
                <p className="indent-3">อาคารที่อยู่อาศัย, สำนักงาน</p>
                <p className="indent-3">และจัดการหมู่บ้านจัดสรร</p>
                • รับจดทะเบียนนิติบุคคลอาคารชุดและ<br />
                <p className="indent-3">นิติบุคคลหมู่บ้านจัดสรร</p>
                • รับจัดทำบัญชีอาคารชุดและหมู่บ้านจัดสรร<br />
                • บำรุงรักษางานระบบวิศวกรรมทุกระบบ
              </p>
              <Link to="/Maintenance" className="text-blue-400">ตัวอย่างงาน</Link>
            </div>
          </div>

          <div className='card bg-gray-50 w-96 h-80 shadow-lg hover:shadow-2xl duration-500'>
            <div className='card-body'>
              <div className='badge badge-error badge-outline'>Cleaning</div>
              <h2 className='card-title pb-3'>งานทำความสะอาด</h2>
              <p className="text-warp">
                เราคือผู้เชี่ยวชาญในการทำความสะอาดทุก
                รูปแบบไม่ว่าจะเป็นการทำความสะอาดสำนักงานใหม่ก่อนย้ายเข้าทำความสะอาดสำนักงานครั้งใหญ่ประจำปีด้วยประสบการณ์ด้านการทำความสะอาดมายาวนานและด้วยบุคลากรที่มีใจรักในงานทำความสะอาดรวมถึงการใช้อุปกรณ์
              </p>
              <Link to="/Cleaning" className="text-blue-400">ตัวอย่างงาน</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

