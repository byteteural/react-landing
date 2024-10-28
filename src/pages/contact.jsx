import { IoLocationSharp, IoChatboxEllipsesOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="bg-dark">
      <div className=" flex items-center justify-center min-h-fit py-32 text-white">
        <div className="container text-center">
          <div className="mb-12">
            <h1 className="badge badge-neutral badge-lg text-lg text-gray-300 opacity-75">Contact us</h1>
            <h1 className="text-4xl font-semibold mb-3">ติดต่อเรา</h1>
            <p>บริษัท เอ็นวีพี พร็อพเพอร์ตี้ จำกัด</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="rounded-full w-16 h-16 bg-primary flex items-center justify-center mb-4">
                <BsFillTelephoneFill className="text-white text-3xl" />
              </div>
              <h4 className="font-semibold mb-2">โทรศัพท์</h4>
              <p>02-149-9304</p>
              <p>086-554-7966</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full w-16 h-16 bg-primary flex items-center justify-center mb-4">
                <IoLocationSharp className="text-white text-3xl" />
              </div>
              <h4 className="font-semibold mb-2">สำนักงาน</h4>
              <p>72/51 หมู่ที่ 2 ถนนบางกรวย-ไทรน้อย </p>
              <p>ตำบลบางบัวทอง</p>
              <p>อำเภอบางบัวทอง จังหวัด นนทบุรี 11110</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full w-16 h-16 bg-primary flex items-center justify-center mb-4">
                <IoChatboxEllipsesOutline className="text-white text-3xl" />
              </div>
              <h4 className="font-semibold mb-2">ช่องทางติดต่ออื่น</h4>
              <p>
                E-mail: <a href="mailto:kisttisak66@gmail.com" className="text-blue-400">kisttisak66@gmail.com</a>
              </p>
              <p>
                Line: <a href="https://line.me/ti/p/~0865547966" className="text-blue-400">@NVPkisttisak</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-96 mt-12">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.5929890224415!2d100.42190487591907!3d13.923259493299046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a72c07d15aa3%3A0xa12f82f6fddd8450!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4reC5h-C4mSDguKfguLUg4Lie4Li1IOC4nuC4o-C5h-C4reC4nuC5gOC4nuC4reC4o-C5jOC4leC4teC5iSDguIjguLPguIHguLHguJQ!5e0!3m2!1sen!2sth!4v1729983366402!5m2!1sen!2sth"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
}
