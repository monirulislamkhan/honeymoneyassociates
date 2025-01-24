import HomeBanner from "@/components/home-banner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        {/* Banner Section */}
        <HomeBanner />
        {/* About Section */}
        <section className="relative">
          {/* Background Image */}
          <div className="absolute left-0 right-0 w-full h-full z-0">
            <Image src="/images/about.webp" alt="Banner" width={1400} height={600} className="w-screen h-96 opacity-10 object-cover object-bottom" />
          </div>

          <div className="container max-w-6xl mx-auto px-5 py-32">
            <div className="grid md:grid-cols-2 bg-white relative z-10 p-6">
              <div className="">
                <div className="">
                  <small>About</small>
                  <h1 className="text-5xl font-semibold">Honey Money Associates Limited</h1>
                </div>
                <p><strong>Honey Money Associates Ltd.</strong>, a subsidiary of HCO Group of companies, is a professional
                  service provider for all real estate needs. ‘Together we all grow’ is our motto and is in fact the
                  philosophy HCO Group believes in. We would like to let you know that the <strong>Honey Money
                    Associates Ltd.</strong> is in an expansion mode and simultaneously we want to really showcase our
                  ‘portfolio’ of service, which is indivisible from our Group’s inclination for service to humanity.</p>

                <p><strong>Honey Money Associates Ltd.</strong> is allied with several reputed developers in <strong>Delhi, Gurgaon and
                  Noida</strong>. The company is an Authorized Sales Organizer for the big league realty developers like
                  <strong>DLF, Ireo, Tata Housing, Emaar MGF, Unitech, 3C, Jaypee Greens, Ansal API, Puri, BPTP,
                    Parsvnath</strong> among others. The company is also into original booking of plots, flats and
                  commercial spaces built by all the well-established realty developers in the Delhi-NCR region.
                  Buyers of property can opt, not just for living purposes, but as a solid investment opportunity
                  with good returns.</p>

                <p>By any yardstick, we are definitely a top-notch realty firm with an aim to make our mark both in
                  business and in social service. We would like to distinguish our services through sheer quality
                  and fulfillment of consumers’ purpose.</p>

                <p>It is worthwhile on our part to point out that <strong>Honey Money Associates Ltd.</strong> enjoys high
                  reputation in providing reliable, personalized and professional services. The company is a
                  subsidiary of HCO Group of companies, which has diversified interests in several sectors.</p>

              </div>
              <div className=""></div>
            </div>
          </div>

        </section>


      </main>
    </>
  );
}
