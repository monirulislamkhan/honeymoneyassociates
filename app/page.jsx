import HomeBanner from "@/components/home-banner";
import Image from "next/image";
import Link from "next/link";
import { faArrowRightLong, faArrowUpRightFromSquare, faCircleArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
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
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-5"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 94.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-12 md:h-[calc(90vh)] md:max-h-[750px] overflow-hidden items-center pb-16">
            {/* Left Side */}
            <div className="">
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
              <Image src={"/images/home-banner.webp"} alt="Banner" width="1500" className="w-full rounded-2xl lg:h-[550px] object-cover" height="700" />
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="relative py-16">
          <div className="max-w-6xl mx-auto">
            <small className="uppercase text-lg font-semibold inline-block mb-2 text-primary">Our Story</small>
            <p className="text-2xl font-semibold"><strong>Honey Money Associates Ltd.</strong> is allied with several reputed developers in <strong>Delhi, Gurgaon and
              Noida</strong>. The company is an Authorized Sales Organizer for the big league realty developers like <strong>DLF, Ireo, Tata Housing, Emaar MGF, Unitech, 3C, Jaypee Greens, Ansal API, Puri, BPTP,
                Parsvnath</strong> among others. The company is also into original booking of plots, flats and
              commercial spaces built by all the well-established realty developers in the Delhi-NCR region.
              Buyers of property can opt, not just for living purposes, but as a solid investment opportunity
              with good returns.</p>

          </div>
          <div className="grid lg:grid-cols-3 gap-5 max-w-7xl mx-auto py-6 items-center">
            <Image src="/images/story-01.webp" alt="Banner" className="w-full rounded-xl object-cover h-96" width={330} height={450} />

            <Image src="/images/story-02.webp" alt="Banner" className="w-full rounded-xl object-cover h-[550px]" width={330} height={450} />

            <Image src="/images/story-03.webp" alt="Banner" className="w-full rounded-xl object-cover h-96" width={330} height={450} />

          </div>
        </section>

        {/* Fast Facts */}
        <section className="bg-slate-200">
          <div className="mx-auto max-w-6xl px-5 py-28">
            <div className="">
              <div className="text-4xl font-bold mb-7">Fast facts : - Our Pillars of Excellence</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {stats.map(stat => (
                <div className="bg-white p-6 rounded-xl" key={stat.id}>
                  <dl className="mx-auto flex max-w-xs flex-col">
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
        <section className="relative py-42">
          <div className="mx-auto  max-w-7xl">
            <figure className="bg-slate-600 border-primary-200 flex gap-12 rounded-3xl group relative mb-60">
              <div className="">
                <Image src={"/images/hco-real-estates.webp"} quality={100} alt="Banner" width={1130} className="w-full rounded-2xl lg:h-[550px] -rotate-12" height={830} />
              </div>
              <figcaption className="flex flex-col justify-center p-12 max-w-[450px]">
                <span className="inline-flex items-center gap-2 text-primary-300 py-2 px-4 rounded-full bg-slate-700 self-start font-semibold text-sm"><FontAwesomeIcon icon={faStar} /> Get in touch</span>
                <div className="text-4xl font-semibold py-4 text-white">Buy Properties from India HcoRealEstates</div>
                <p className="text-left text-gray-300 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas officiis rerum corporis, dicta consequatur.</p>
                <a target="_blank" className="bg-white text-slate-900 font-semibold py-2.5 px-4 rounded-full inline-flexgap-2 self-start text-lg group-hover:ml-4 transition-all before:absolute before:inset-0 before:z-10" href="https://www.hcorealestates.com/">Start Exploring <FontAwesomeIcon icon={faCircleArrowRight} /></a>
              </figcaption>
            </figure>

            <figure className="bg-slate-600 border-primary-200 flex gap-12 rounded-3xl group relative mb-28">
              <div className="lg:order-last">
                <Image src={"/images/dubai-housing.webp"} quality={100} alt="Banner" width={1130} className="w-full rounded-2xl lg:h-[550px] rotate-25" height={830} />
              </div>
              <figcaption className="flex flex-col justify-center p-12 max-w-[450px]">
                <span className="inline-flex items-center gap-2 text-primary-300 py-2 px-4 rounded-full bg-slate-700 self-start font-semibold text-sm"><FontAwesomeIcon icon={faStar} /> Get in touch</span>
                <div className="text-4xl font-semibold py-4 text-white">Properties For Sale in Dubai</div>
                <p className="text-left text-gray-300 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas officiis rerum corporis, dicta consequatur.</p>
                <a target="_blank" className="bg-white text-slate-900 font-semibold py-2.5 px-4 rounded-full inline-flexgap-2 self-start text-lg group-hover:ml-4 transition-all before:absolute before:inset-0 before:z-10" href="https://www.dubaihousing-ae.com/">Start Exploring <FontAwesomeIcon icon={faCircleArrowRight} /></a>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Our Guiding Principles */}
        <section className="bg-slate-200 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-4xl font-bold mb-20 lg:text-center text-left uppercase ">Our Guiding Principles</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-6  space-y-10">
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


        <section>
          <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
              className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
            />

            <div className="mx-auto max-w-6xl px-5 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">Looking for something specific?</h3>
                <div className="mt-8 text-lg font-medium text-pretty text-gray-300">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                  fugiat veniam occaecat fugiat.
                </div>
                <Link href="#" className="inline-block mt-8 px-8 py-3 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary-600">Get In Touch</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterComponent />
    </>
  );
}
