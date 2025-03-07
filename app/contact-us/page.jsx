import FooterComponent from "@/components/footer";
import Header from "@/components/header";
import MainForm from "@/components/main-form";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function ContactUs() {
  return <>
    <Header />
    <main>
      <section className="relative md:max-h-[450px] md:overflow-hidden">
        <Image src="/images/location-map-mobile.webp" className="block sm:hidden w-screen object-cover" alt="" width={428} height={300} />
        <Image src="/images/location-map.webp" className="hidden sm:block w-screen" alt="" width={1500} height={500} />
      </section>

      <section className="relative -mt-24">
        <div className="max-w-6xl  mx-6 lg:mx-auto bg-white rounded-2xl lg:p-10 md:p-8">
          {/* White background caontainer */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div className="">
              <h1 className="mb-3">Contact us</h1>
              <p>Our experienced team is ready to help you 7 days a week, so please do not hesitate to contact us via phone, email, or you can fill enquiry form if you have any queries or problems. We would love to hear from you.</p>
              {/* Address */}
              <ul className="border-t border-primary-600/20 divide-y divide-primary-600/20 flex flex-col *:py-4">
                <li><span className="block text-gray-500 text-sm">Phone No.</span>
                  <a className="text-xl flex gap-2 items-center text-primary hover:text-primary-900" href="tel:+919811999666"><FontAwesomeIcon icon={faPhone} className="text-sm" /> +91 9811 999 666</a>
                </li>
                <li><span className="block text-gray-500 text-sm">Phone No.</span>
                  <a className="text-xl flex gap-2 items-center text-primary hover:text-primary-900" href="tel:+911149500000"><FontAwesomeIcon icon={faPhone} className="text-sm" /> +91 11 49500000 (30 Lines)</a>
                </li>
                <li><span className="block text-gray-500">Email</span><a className="text-xl flex gap-2 items-center text-primary hover:text-primary-900" href="mailto:info@honeymoneyassociates.com"><FontAwesomeIcon icon={faEnvelope} className="text-sm" /> info@honeymoneyassociates.com</a></li>

              </ul>
            </div>
            {/* Form */}
            <div className="">
              <div className="border border-primary-600/20 p-10 rounded-xl">
                <div className="mb-5 text-2xl font-semibold uppercase">Get in touch with Us</div>
                <MainForm />
              </div>
            </div>
          </div>

          {/* Office location */}
          <div className="grid md:grid-cols-2 gap-8 py-16">
            <div className="bg-primary-50 rounded-xl p-8 border border-primary-200">
              <span className="flex justify-center items-center size-10 bg-primary-400 rounded-full mb-2"><FontAwesomeIcon icon={faLocationDot} className="text-xl text-primary-100" /></span>
              <div className="font-serif text-2xl text-primary-900 mb-2 font-medium">Corporate Office</div>
              <div className=" text-primary-800">24, Shivaji Marg, Opp. DLF Tower, Moti Nagar,
                Block C, Najafgarh Road Industrial Area,
                Delhi - 110015 (INDIA).
              </div>
            </div>
            <div className="bg-primary-50 rounded-xl p-8 border border-primary-200">
              <span className="flex justify-center items-center size-10 bg-primary-400 rounded-full mb-2"><FontAwesomeIcon icon={faLocationDot} className="text-xl text-primary-100" /></span>
              <div className="font-serif text-2xl text-primary-900 mb-2 font-medium">Gurgaon Office</div>
              <div className=" text-primary-800">Office Number - 1612 & 1614, Corporate Greens, Tower - 4, Sector - 74A, Gurugram</div>
            </div>
            <div className="bg-primary-50 rounded-xl p-8 border border-primary-200">
              <span className="flex justify-center items-center size-10 bg-primary-400 rounded-full mb-2"><FontAwesomeIcon icon={faLocationDot} className="text-xl text-primary-100" /></span>
              <div className="font-serif text-2xl text-primary-900 mb-2 font-medium">Dubai Office</div>
              <div className=" text-primary-800">515, Al Khaleej Centre, Bur Dubai UAE.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <FooterComponent />
  </>
}