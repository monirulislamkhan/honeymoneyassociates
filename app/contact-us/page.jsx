import FooterComponent from "@/components/footer";
import Header from "@/components/header";
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">

            <div className="">
              <h1 className="mb-3">Contact us</h1>
              <p>Our experienced team is ready to help you 7 days a week, so please do not hesitate to contact us via phone, email, or you can fill enquiry form if you have any queries or problems. We would love to hear from you.</p>
              {/* Address */}
              <div className="">
                <small>Address</small>
                <span>24, Shivaji Marg, Opp. DLF Tower, Moti Nagar,
                  Block C, Najafgarh Road Industrial Area,
                  Delhi - 110015 (INDIA).</span>
              </div>
            </div>
            {/* Form */}
            <div className="">
              <div className="mb-5 text-3xl font-semibold uppercase">Get in touch with Us</div>
              <form>
                {/* Name Field */}
                <div className="relative mb-7">
                  <input type="text" id="nameField" className="form-input peer" placeholder="Enter Your Name" />
                  <label htmlFor="nameField" className="form-float-label">Enter Your Name</label>
                </div>

                {/* Email Field */}
                <div className="relative mb-7">
                  <input type="email" id="emailField" className="form-input peer" placeholder="Email Address" />
                  <label htmlFor="emailField" className="form-float-label">Email Address</label>
                </div>


                {/* Country Field */}
                <div className="relative mb-7">
                  <select id="countries" className="form-input peer">
                    <option>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <label htmlFor="countries" className="form-float-label">Select an option</label>
                </div>

                {/* Email Field */}
                <div className="relative mb-7">
                  <input type="email" id="emailField" className="form-input peer" placeholder="Email Address" />
                  <label htmlFor="emailField" className="form-float-label">Email Address</label>
                </div>

                <div className="flex">
                  <button type="submit" className="py-2 md:min-w-42 border  border-transparent rounded-md shadow-sm  font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 cursor-pointer text-lg uppercase ">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </section>


    </main>
    <FooterComponent />
  </>
}