import HomeBanner from "@/components/home-banner";
import Image from "next/image";
import Link from "next/link";
import { faArrowRightLong, faArrowUpRightFromSquare, faCheck, faCircleArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterComponent from "@/components/footer";
import Header from "@/components/header";

const stats = [
  { id: 1, name: 'Years of Industry Experience', value: '21+' },
  { id: 2, name: 'Awards Recognizing Excellence', value: '200+' },
  { id: 3, name: 'Satisfied Clients', value: '20,000+' },
  { id: 4, name: 'Collaborating Developers', value: '100+' },
  { id: 5, name: 'Ongoing & Completed Projects', value: '200+' },
  { id: 6, name: 'Ongoing & Completed Projects', value: '200+' },
  { id: 7, name: 'Ongoing & Completed Projects', value: '200+' },
  { id: 8, name: 'Ongoing & Completed Projects', value: '200+' },
]

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]




export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Header />
      <main>
        {/* Banner Section */}
        <div className="relative isolate">
          {/*  */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl -sm:top-5"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 94.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-6xl max-xl:px-6 grid lg:grid-cols-2 gap-12 lg:h-[calc(90vh)] lg:max-h-[750px] items-center pb-16">
            {/* Left Side */}
            <div className="py-8">
              <div className="">
                <small className="text-base md:text-lg text-primary font-semibold">We Are</small>
                <h1 className="mb-4 lg:mb-6 uppercase">Honey Money Associates Limited</h1>
              </div>
              <div className="text-lg lg:text-xl"><strong>Honey Money Associates Ltd.</strong>, a subsidiary of HCO Group of companies, is a professional
                service provider for all real estate needs. ‘Together we all grow’ is our motto and is in fact the
                philosophy HCO Group believes in.</div>
              <a href="" className="mt-4 inline-flex text-lg items-center gap-2"><span className="font-semibold">Learn More</span>  <FontAwesomeIcon icon={faArrowRightLong} /></a>
            </div>
            <div className="">
              <Image src={"/images/home-banner.webp"} alt="Banner" width={700} className="w-full rounded-2xl h-96 lg:h-[550px] object-cover" height={500} />
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="relative py-16">
          <div className="max-w-6xl mx-auto max-xl:px-6">
            <small className="uppercase text-lg font-semibold inline-block mb-2 text-primary">Our Story</small>
            <p className="text-2xl font-semibold"><strong>Honey Money Associates Ltd.</strong> is allied with several reputed developers in <strong>Delhi, Gurgaon and
              Noida</strong>. The company is an Authorized Sales Organizer for the big league realty developers like <strong>DLF, Ireo, Tata Housing, Emaar MGF, Unitech, 3C, Jaypee Greens, Ansal API, Puri, BPTP,
                Parsvnath</strong> among others. The company is also into original booking of plots, flats and
              commercial spaces built by all the well-established realty developers in the Delhi-NCR region.
              Buyers of property can opt, not just for living purposes, but as a solid investment opportunity
              with good returns.</p>

          </div>

          <div className="grid lg:grid-cols-3 gap-5 max-w-7xl mx-auto py-6 items-center max-xl:px-6">
            <Image src="/images/story-01.webp" alt="Banner" className="w-full rounded-xl object-cover lg:h-96" width={330} height={450} />

            <Image src="/images/story-02.webp" alt="Banner" className="w-full rounded-xl object-cover lg:h-[550px]" width={330} height={450} />

            <Image src="/images/story-03.webp" alt="Banner" className="w-full rounded-xl object-cover lg:h-96" width={330} height={450} />
          </div>
        </section>

        {/* Fast Facts */}
        <section className="bg-slate-200">
          <div className="mx-auto max-w-6xl max-xl:px-6 py-28">
            <div className="">
              <div className="text-4xl font-bold mb-7">Fast facts : - Our Pillars of Excellence</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {stats.map(stat => (
                <div className="bg-white p-6 rounded-xl" key={stat.id}>
                  <dl className="mx-auto flex flex-col">
                    <dt className="text-lg text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-2xl font-bold  sm:text-4xl">
                      {stat.value}
                    </dd>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Website Details */}
        <section className="relative pt-28 md:py-28 xl:py-42 xl:px-6 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <figure className="bg-slate-600 border-primary-200 flex max-lg:flex-col gap-6 lg:gap-12 xl:rounded-3xl group relative lg:mb-60 mb-28 max-lg:pb-4">
              <div className="max-xl:px-5 max-lg:-mt-12">
                <Image src={"/images/hco-real-estates.webp"} quality={100} alt="Banner" width={1130} className="w-full rounded-xl xl:h-[550px] lg:-rotate-12" height={830} />
              </div>
              <figcaption className="flex flex-col justify-center pb-8 px-5 xl:p-12 lg:max-w-[450px]">
                <span className="inline-flex items-center gap-2 text-primary-300 py-2 px-4 rounded-full bg-slate-700 self-start font-semibold text-sm"><FontAwesomeIcon icon={faStar} /> Get in touch</span>
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold py-4 text-white">Buy Properties from India HcoRealEstates</div>
                <p className="text-left text-gray-300 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas officiis rerum corporis, dicta consequatur.</p>
                <a target="_blank" className="bg-white text-slate-900 font-semibold py-2.5 px-4 rounded-full inline-flexgap-2 self-start text-lg group-hover:ml-4 transition-all before:absolute before:inset-0 before:z-10" href="https://www.hcorealestates.com/">Start Exploring <FontAwesomeIcon icon={faCircleArrowRight} /></a>
              </figcaption>
            </figure>

            <figure className="bg-slate-600 border-primary-200 flex max-lg:flex-col gap-6 lg:gap-12 xl:rounded-3xl group relative lg:mb-20 max-lg:pb-4">
              <div className="max-xl:px-5 max-lg:-mt-12 lg:order-last">
                <Image src={"/images/dubai-housing.webp"} quality={100} alt="Banner" width={1130} className="w-full rounded-xl xl:h-[550px] lg:rotate-25" height={830} />
              </div>
              <figcaption className="flex flex-col justify-center pb-8 px-5 xl:p-12 lg:max-w-[450px]">
                <span className="inline-flex items-center gap-2 text-primary-300 py-2 px-4 rounded-full bg-slate-700 self-start font-semibold text-sm"><FontAwesomeIcon icon={faStar} /> Get in touch</span>
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold py-4 text-white">Buy Properties from India HcoRealEstates</div>
                <p className="text-left text-gray-300 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas officiis rerum corporis, dicta consequatur.</p>
                <a target="_blank" className="bg-white text-slate-900 font-semibold py-2.5 px-4 rounded-full inline-flexgap-2 self-start text-lg group-hover:ml-4 transition-all before:absolute before:inset-0 before:z-10" href="https://www.dubaihousing-ae.com/">Start Exploring <FontAwesomeIcon icon={faCircleArrowRight} /></a>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Our Guiding Principles */}
        <section className="bg-slate-200 py-16 md:py-20">
          <div className="max-w-6xl mx-auto max-xl:px-6">
            <div className="text-4xl font-bold mb-20 lg:text-center text-left uppercase ">Our Guiding Principles</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-6  space-y-10">
              <div className="flex flex-col">
                <div className="mb-4 p-4 bg-slate-400/50 self-start rounded-lg size-14 text-center text-2xl flex justify-center items-center">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <h4 className="mb-2.5 text-xl font-semibold">Customer-Centric Approach</h4>
                <div className="text-slate-700">Your satisfaction is our top priority. We are dedicated to providing personalized service and support to help you find the perfect property.</div>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 p-4 bg-slate-400/50 self-start rounded-lg size-14 text-center text-2xl flex justify-center items-center">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <h4 className="mb-2.5 text-xl font-semibold">Customer-Centric Approach</h4>
                <div className="text-slate-700">Your satisfaction is our top priority. We are dedicated to providing personalized service and support to help you find the perfect property.</div>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 p-4 bg-slate-400/50 self-start rounded-lg size-14 text-center text-2xl flex justify-center items-center">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <h4 className="mb-2.5 text-xl font-semibold">Customer-Centric Approach</h4>
                <div className="text-slate-700">Your satisfaction is our top priority. We are dedicated to providing personalized service and support to help you find the perfect property.</div>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 p-4 bg-slate-400/50 self-start rounded-lg size-14 text-center text-2xl flex justify-center items-center">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <h4 className="mb-2.5 text-xl font-semibold">Customer-Centric Approach</h4>
                <div className="text-slate-700">Your satisfaction is our top priority. We are dedicated to providing personalized service and support to help you find the perfect property.</div>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 p-4 bg-slate-400/50 self-start rounded-lg size-14 text-center text-2xl flex justify-center items-center">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <h4 className="mb-2.5 text-xl font-semibold">Customer-Centric Approach</h4>
                <div className="text-slate-700">Your satisfaction is our top priority. We are dedicated to providing personalized service and support to help you find the perfect property.</div>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 p-4 bg-slate-400/50 self-start rounded-lg size-14 text-center text-2xl flex justify-center items-center">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <h4 className="mb-2.5 text-xl font-semibold">Customer-Centric Approach</h4>
                <div className="text-slate-700">Your satisfaction is our top priority. We are dedicated to providing personalized service and support to help you find the perfect property.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 lg:py-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 max-xl:px-6 md:grid-cols-2 gap-8 md:gap-18">
            <div className="">
              <Image src={"/images/home-banner.webp"} alt="Banner" width="1500" className="w-full rounded-2xl object-cover" height="700" />
            </div>
            <div className="">
              <h2 className="mb-3">Why Choose Us?</h2>
              <p className="text-start mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis neque totam est excepturi, sequi eos!</p>
              <ul className="flex flex-col space-y-8">
                <li className="flex gap-5 items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-2xl text-primary self-start mt-1.5" />
                  <div className="text-slate-700">
                    <span className="block text-xl font-medium">Extensive Property Listings</span> A diverse range of properties to suit every need and budget.
                  </div>
                </li>
                <li className="flex gap-5 items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-2xl text-primary self-start mt-1.5" />
                  <div className="text-slate-700">
                    <span className="block text-xl font-medium">Extensive Property Listings</span> A diverse range of properties to suit every need and budget.
                  </div>
                </li>
                <li className="flex gap-5 items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-2xl text-primary self-start mt-1.5" />
                  <div className="text-slate-700">
                    <span className="block text-xl font-medium">Extensive Property Listings</span> A diverse range of properties to suit every need and budget.
                  </div>
                </li>
                <li className="flex gap-5 items-center">
                  <FontAwesomeIcon icon={faCheck} className="text-2xl text-primary self-start mt-1.5" />
                  <div className="text-slate-700">
                    <span className="block text-xl font-medium">Extensive Property Listings</span> A diverse range of properties to suit every need and budget.
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </section>


        <section>
          <div className="relative isolate overflow-hidden py-24 sm:py-32">
            <Image alt="" src="/images/our-office.webp" width={1400} height={550} className="absolute inset-0 -z-10 size-full object-cover lg:h-[600px]" />
            <div className="absolute inset-0 -z-1 bg-slate-900/75"></div>
            <div className="mx-auto max-w-6xl px-5 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">Looking for something specific?</h3>
                <div className="mt-8 text-lg font-medium text-pretty text-gray-300">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                  fugiat veniam occaecat fugiat.
                </div>
                <Link href="/contact-us/" className="inline-block mt-8 px-8 py-2 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary-600">Get In Touch</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
}
