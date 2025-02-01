import FooterComponent from "@/components/footer";
import Header from "@/components/header";
import MainForm from "@/components/main-form";
import Image from "next/image";

export default function ContactUs() {
  return <>
    <Header />
    <main>
      <section className="relative md:max-h-[450px] md:overflow-hidden">
        <Image src="/images/location-map-mobile.webp" className="block sm:hidden w-screen object-cover" alt="" width={428} height={300} />
        <Image src="/images/location-map.webp" className="hidden sm:block w-screen" alt="" width={1500} height={500} />
      </section>

      <section className="relative -mt-24 md:mb-42">
        <div className="max-w-6xl  mx-6 lg:mx-auto bg-white rounded-2xl lg:p-10 md:p-8">
          {/* White background caontainer */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">

            <div className="">
              <h1 className="mb-3">Contact us</h1>
              <p>Our experienced team is ready to help you 7 days a week, so please do not hesitate to contact us via phone, email, or you can fill enquiry form if you have any queries or problems. We would love to hear from you.</p>
              {/* Address */}
              <ul className="">
                <li><small className="block text-gray-500">Address</small>
                  <span>24, Shivaji Marg, Opp. DLF Tower, Moti Nagar, Block C, Najafgarh Road Industrial Area, Delhi - 110015 (INDIA).</span>
                </li>
              </ul>
            </div>
            {/* Form */}
            <div className="">
              <div className="mb-5 text-3xl font-semibold uppercase">Get in touch with Us</div>
              <MainForm />
            </div>
          </div>
        </div>

      </section>


    </main>
    <FooterComponent />
  </>
}