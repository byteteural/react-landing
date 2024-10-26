export default function Contact() {
  return (
    <div className="bg-dark">
      <div className="flex items-center justify-center min-h-screen px-8 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <h1 className="text-3xl font-bold mb-4">บริษัท เอ็นวีพี พร็อพเพอร์ตี้ จำกัด</h1>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Our Address</h3>
            <p className="mb-2">72/51 หมู่ที่ 2 ถนนบางกรวย-ไทรน้อย ตำบลบางบัวทอง</p>
            <p className="mb-2">อำเภอบางบัวทอง จังหวัด นนทบุรี 11110</p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Phone</h3>
            <p className="mb-2">โทรศัพท์: 02-149-9304, 086-554-7966</p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Email</h3>
            <p>E-mail: <a href="mailto:kisttisak66@gmail.com" className="text-blue-400">kisttisak66@gmail.com</a></p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-96">
        <iframe className="absolute top-0 left-0 w-full h-full" style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.5929890224415!2d100.42190487591907!3d13.923259493299046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a72c07d15aa3%3A0xa12f82f6fddd8450!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4reC5h-C4mSDguKfguLUg4Lie4Li1IOC4nuC4o-C5h-C4reC4nuC5gOC4nuC4reC4o-C5jOC4leC4teC5iSDguIjguLPguIHguLHguJQ!5e0!3m2!1sen!2sth!4v1729983366402!5m2!1sen!2sth"
          frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
        </iframe>
      </div>
    </div>
  );
}
