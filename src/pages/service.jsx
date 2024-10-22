
export default function Service() {
  return (
    <div className="bg-dark flex items-center justify-center min-h-screen px-8 py-4">
      <div>
        <div className="font-bold text-center">
          <h1 className='badge badge-neutral badge-lg text-lg text-gray-300'>Our services</h1>
          <h1 className=' text-xl text-gray-900 pt-2'>บริการของเรา</h1>
        </div>
        <div className='flex flex-wrap justify-center gap-8 pt-6 text-gray-900 font-semibold'>
          <div className='card bg-teal-50 w-96 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title pb-3'>งานบริหารและการจัดการ</h2>
              <p>
                บริหารจัดการอาคารที่อยู่อาศัยและอาคารสำนักงาน
              </p>
              <p>
                บริหารจัดการหมู่บ้านจัดสรร
              </p>
              <p>
                บริการงานรักษาความปลอดภัย
              </p>
              <p>
                บริการงานรักษาความสะอาดทั่วไป
              </p>
              <p>
                บริการงานจัดสวนและดูแลรักษาสวน
              </p>
              <p>
                บริการงานดูแลสระว่ายน้ำ
              </p>
            </div>
          </div>

          <div className='card bg-teal-50 w-96 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title pb-3'>งานที่ปรึกษาและบำรุงรักษา</h2>
              <p>
                เป็นที่ปรึกษาและบริหารจัดการอาคารที่อยู่อาศัย และสำนักงาน
              </p>
              <p>
                เป็นที่ปรึกษาและบริหารจัดการหมู่บ้านจัดสรร
              </p>
              <p>
                รับจดทะเบียนนิติบุคคลอาคารชุดและนิติบุคคลหมู่บ้านจัดสรร
              </p>
              <p>
                รับจัดทำบัญชีอาคารชุด และหมู่บ้านจัดสรร
              </p>
              <p>
                บำรุงรักษางานระบบวิศวกรรมทุกระบบ
              </p>
            </div>
          </div>

          <div className='card bg-teal-50 w-96 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title pb-3'>งานทำความสะอาด</h2>
              <p>
                เราคือผู้เชี่ยวชาญในการทำความสะอาดทุกรูปแบบ ไม่ว่าจะเป็นการทำความสะอาดสำนักงานใหม่ก่อนย้ายเข้า ทำความสะอาดสำนักงานครั้งใหญ่ประจำปี ด้วยประสบการณ์ด้านการทำความสะอาดมายาวนาน และด้วยบุคลากรที่มีใจรักในงานทำความสะอาด รวมถึงการใช้อุปกรณ์
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

