import HomeBanner from "@/components/home-banner";
import Image from "next/image";
import Link from "next/link";
import { faArrowRightLong, faArrowUpRightFromSquare, faCheck, faCircleArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterComponent from "@/components/footer";
import Header from "@/components/header";

const stats = [
  { id: 1, name: 'Victoriously Serving Our Clients With An Exclusively Customized Experience According To Their Needs', value: '21+', lebel: 'Years Of Experience' },
  { id: 2, name: 'Receiving Awards Of Excellence From Renowned Establishments, We Aim To Constantly Strive On The Path Of Victory', value: '200+', lebel: 'Recognitions' },
  { id: 3, name: 'We Are Consistently Fulfilling Our Goal To Fill Our Investors With Real Meaning Of Happiness', value: '20,000+', lebel: 'Satisfied Clients' },
  { id: 4, name: 'We Are Channel Partners With Globally Recognized Real Estate Developers', value: '100+', lebel: 'Collaborating Developers' },
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
      <title>Honey Money Associates Limited Moti Nagar</title>

      {/* Hero Section */}
      <Header />
      <main>
        {/* Banner Section */}
        <div className="relative isolate">
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
              <div className="text-lg lg:text-xl"><strong>Showcasing Diverse Tailor-Made Services </strong>Honey Money Associates Ltd., a comprehensive forum, catering to all aspirations of prospective clients with regard to real estate, printing, advertising, and packaging services. We have taken pride in emerging as a team of professionals, since 2004, offering a wide range of tailor-made solutions that fill each one of our clients with joy and contentment and we have extended our business outside of India.</div>
              {/* <a href="" className="mt-4 inline-flex text-lg items-center gap-2"><span className="font-semibold">Learn More</span>  <FontAwesomeIcon icon={faArrowRightLong} /></a> */}
            </div>
            <div className="">
              <Image src={"/images/home-banner.webp"} alt="Banner" width={700} className="w-full rounded-2xl border border-primary-200 h-120 lg:h-150 object-cover object-top" height={500} />
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="relative py-16">
          <div className="max-w-6xl mx-auto max-xl:px-6">
            <small className="uppercase text-lg font-semibold inline-block mb-2 text-primary">Our Legacy</small>
            <p className="text-2xl font-semibold">Our real estate journey began in 2004 as we took our initial steps by emerging as an authorised channel partner with India’s globally acclaimed real estate developers. Some highly prominent names that I would like to mention here are, DLF Limited, Emaar India, Sobha, Godrej Properties, TATA Realty, Mahindra Lifespaces, Conscient Infrastructure, Larsen and Toubro, Central Park, etc.</p>
            <p className="text-2xl font-semibold">With time, i.e. since 2020, we augmented our business in Dubai’s real estate sector, following which we bloomed as a credible authorised channel partner with many top-notch developers of Dubai, such as Emaar Properties, Binghatti Developers, Nashama Developers, Danube Properties, Ellington Properties, Azizi Developments, Aldar Properties, and many others.
            </p>
            <p className="text-2xl font-semibold">Along with offering our expertise and providing personalised expertise to potential investors, we also help them with acquiring home loans, enhancing their level of comfort and flexibility. We aim to make you a proud investor as we help you with choosing the right property, whether it is residential or commercial.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-5 max-w-7xl mx-auto py-6 items-center max-xl:px-6">
            <Image src="/images/01.webp" alt="Banner" className="w-full rounded-xl object-cover lg:h-96" width={330} quality={90} height={450} />

            <Image src="/images/02.webp" alt="Banner" className="w-full rounded-xl object-cover lg:h-[550px]" quality={90} width={330} height={450} />

            <Image src="/images/03.webp" alt="Banner" className="w-full rounded-xl object-cover lg:h-96" quality={90} width={330} height={450} />
          </div>
        </section>

        {/* Fast Facts */}
        <section className="bg-slate-200">
          <div className="mx-auto max-w-6xl max-xl:px-6 py-28">
            <div className="">
              <div className="text-4xl font-bold mb-7">Our Pillars Of Strength</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map(stat => (
                <div className="bg-white p-6 rounded-xl" key={stat.id}>
                  <dl className="mx-auto flex flex-col">
                    <span className="text-xl block py-4">{stat.lebel}</span>
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
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold py-4 text-white">Buy Properties From HCO Real Estates</div>
                <p className="text-left text-gray-300 md:text-lg">HCO Real Estates is your go-to place when it comes to attaining authentic information and ideal assistance, with respect to top real estate developers in India. By providing a well-crafted experience, will help you to choose the most righteous development, benefiting you in the long run.
                </p>
                <a target="_blank" className="bg-white text-slate-900 font-semibold py-2.5 px-4 rounded-full inline-flexgap-2 self-start text-lg group-hover:ml-4 transition-all before:absolute before:inset-0 before:z-10" href="https://www.hcorealestates.com/">Start Exploring <FontAwesomeIcon icon={faCircleArrowRight} /></a>
              </figcaption>
            </figure>

            <figure className="bg-slate-600 border-primary-200 flex max-lg:flex-col gap-6 lg:gap-12 xl:rounded-3xl group relative lg:mb-20 max-lg:pb-4">
              <div className="max-xl:px-5 max-lg:-mt-12 lg:order-last">
                <Image src={"/images/dubai-housing.webp"} quality={100} alt="Banner" width={1130} className="w-full rounded-xl xl:h-[550px] lg:rotate-25" height={830} />
              </div>
              <figcaption className="flex flex-col justify-center pb-8 px-5 xl:p-12 lg:max-w-[450px]">
                <span className="inline-flex items-center gap-2 text-primary-300 py-2 px-4 rounded-full bg-slate-700 self-start font-semibold text-sm"><FontAwesomeIcon icon={faStar} /> Get in touch</span>
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold py-4 text-white">Buy Properties From Dubai Housing</div>
                <p className="text-left text-gray-300 md:text-lg">At Dubai Housing, we, as channel partners with globally recognized developers emphasize on offering the most accurate guidance and a meticulously crafted experience to our prospective home buyers and investors in choosing the right property and neighbourhood.</p>
                <a target="_blank" className="bg-white text-slate-900 font-semibold py-2.5 px-4 rounded-full inline-flexgap-2 self-start text-lg group-hover:ml-4 transition-all before:absolute before:inset-0 before:z-10" href="https://www.dubaihousing-ae.com/">Start Exploring <FontAwesomeIcon icon={faCircleArrowRight} /></a>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-slate-200 py-16 md:py-20 relative isolate">
          <div className="max-w-6xl mx-auto max-xl:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="col-span-1 lg:order-last">
                <Image src="/images/mission.svg" alt="Banner" className="w-full lg:h-96" width={330} height={450} />
              </div>
              <div className="lg:col-span-1 lg:self-center">
                <div className="text-4xl font-semibold mb-3">Our Mission</div>
                <p>At Honey Money Associates Ltd, our first and foremost goal is to identify and comprehend the specifications of our clients in a detailed manner in order to offer them the right opportunities that are dedicatedly crafted according to their needs.</p>

                <p>As we have teamed up with top real estate developers and become their channel partners, we endeavour on a path where we guide our clients to come across various options, with regard to real estate developments. <strong>  We deliver what we claim</strong> and this motto lies at the core of Honey Money Associates Limited.</p>
                <p>In this technology-driven world which indeed plays a key role in real estate, our goal is to offer ideally crafted options and accordingly solutions to our respective clientele. We keep our clients updated by offering them insights on the recent market trends so that they can have authentic information, with regard to the amount of capital appreciation on a particular property along with a location.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 lg:py-32">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-4xl font-semibold mb-10">Our Vission</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* <div className="col-span-1">
                <Image src="/images/vission.svg" alt="Banner" className="w-full lg:h-96" width={330} height={450} />
              </div> */}
              <div className="p-8 border border-slate-200 bg-slate-100 rounded-md">
                <div className="font-semibold text-xl mb-2">Ideal Assistance</div>
                <div className="">Guiding People To Choose An Ideal Property From An Extensive Range Of Options
                </div>
              </div>
              <div className="p-8 border border-slate-200 bg-slate-100 rounded-md">
                <div className="font-semibold text-xl mb-2">Analysis Of Recent Trends</div>
                <div className="">Providing Accurate Information On The Statistics Of Real Estate Sector</div>
              </div>
              <div className="p-8 border border-slate-200 bg-slate-100 rounded-md">
                <div className="font-semibold text-xl mb-2">Ensuring Transparency</div>
                <div className="">Adhering To Ethical Business Practices As We Deliver Our Services</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="relative py-24 sm:py-32 bg-primary-200 grid lg:grid-cols-2">
            {/* <Image alt="Seeking A More Custom-Made Experience?" src="/images/our-office.webp" width={1400} height={550} className="absolute inset-0 -z-10 size-full object-cover lg:h-[600px]" /> */}
            <div className=""></div>


            <div className="mx-auto max-w-6xl px-5 lg:px-8">
              <h3 className="text-3xl font-semibold tracking-tight text-primary sm:text-5xl">Seeking A More Custom-Made Experience?</h3>
              <div className="mt-8 text-lg">We are all ears to each one of your wants and needs, specializing in making your experience worth remembering for an entire lifetime. We will give you a much-personalized guidance, ultimately filling you with gratitude and contentment.</div>
              <Link href="/contact-us/" className="inline-block mt-8 px-8 py-2 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary-600">Get In Touch</Link>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
}
