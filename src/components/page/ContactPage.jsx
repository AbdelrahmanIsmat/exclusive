import phone from "../../assets/icons-phone.svg";
import mail from "../../assets/icons-mail.svg";
import Button from "../common/Button";
const ContactPage = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-4 my-20">
      <div className="font-Poppins shadow p-6 sm:p-8 md:p-10  md:max-w-85">
        {/* Call */}
        <div className="flex items-center gap-4 mb-3">
          <img src={phone} alt="phone" className="w-6 h-6" />
          <p className="font-medium">Call To Us</p>
        </div>
        <p className="text-[14px]  mb-1">
          We are available 24/7, 7 days a week.
        </p>
        <p className="text-[14px] mb-6">Phone: +8801611112222</p>
        <hr className="my-8 text-gray-500" />

        {/* Mail */}
        <div className="flex items-center gap-4 mb-3">
          <img src={mail} alt="mail" className="w-6 h-6" />
          <p className="font-medium">Write To Us</p>
        </div>

        <p className="text-[14px]  mb-1">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="text-[14px]">Email: customer@exclusive.com</p>
        <p className="text-[14px]">Email: support@exclusive.com</p>
      </div>
      <div className="flex flex-col gap-6 p-6 sm:p-8 bg-white shadow-md rounded-md">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Name */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full py-3 px-4 bg-gray-100 text-sm rounded outline-none focus:ring-2 focus:ring-red-500"
            />
            <span className="absolute top-3 right-3 text-red-500">*</span>
          </div>

          {/* Email */}
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full py-3 px-4 bg-gray-100 text-sm rounded outline-none focus:ring-2 focus:ring-red-500"
            />
            <span className="absolute top-3 right-3 text-red-500">*</span>
          </div>

          {/* Phone */}
          <div className="relative w-full">
            <input
              type="tel"
              placeholder="Your Phone"
              required
              className="w-full py-3 px-4 bg-gray-100 text-sm rounded outline-none focus:ring-2 focus:ring-red-500"
            />
            <span className="absolute top-3 right-3 text-red-500">*</span>
          </div>
        </div>

        {/* Message */}
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full py-3 px-4 bg-gray-100 text-sm rounded outline-none resize-none focus:ring-2 focus:ring-red-500"
        />
        {/* Button */}
        <div className="flex justify-end">
          <Button>Send Message</Button>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
