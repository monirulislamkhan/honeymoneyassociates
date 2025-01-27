import HomeBanner from "@/components/home-banner";
import { faArrowUpRightFromSquare } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

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
      <main>
        {/* Banner Section */}
        <HomeBanner />
        {/* About Section */}
        <section className="relative">
          {/* Background Image */}
          <div className="absolute left-0 right-0 w-full h-full z-0">
            <Image src="/images/about.webp" alt="Banner" width={1400} height={600} className="w-screen h-96 opacity-10 object-cover object-bottom" />
          </div>

          <div className="max-w-6xl px-6 mx-auto py-32">
            <div className="grid lg:gap-x-10 lg:grid-cols-2 bg-white relative z-10 py-6">
              <div className="col-span-2">
                {/* Heading */}
                <div className="">
                  <small className="text-base md:text-lg text-zinc-500">About</small>
                  <h1 className="mb-6 text-primary">Honey Money Associates Limited</h1>
                </div>
                <p><strong>Honey Money Associates Ltd.</strong>, a subsidiary of HCO Group of companies, is a professional
                  service provider for all real estate needs. ‘Together we all grow’ is our motto and is in fact the
                  philosophy HCO Group believes in. We would like to let you know that the <strong>Honey Money
                    Associates Ltd.</strong> is in an expansion mode and simultaneously we want to really showcase our
                  ‘portfolio’ of service, which is indivisible from our Group’s inclination for service to humanity.</p>

                <p><strong>Honey Money Associates Ltd.</strong> is allied with several reputed developers in <strong>Delhi, Gurgaon and
                  Noida</strong>. The company is an Authorized Sales Organizer for the big league realty developers like <strong>DLF, Ireo, Tata Housing, Emaar MGF, Unitech, 3C, Jaypee Greens, Ansal API, Puri, BPTP,
                    Parsvnath</strong> among others. The company is also into original booking of plots, flats and
                  commercial spaces built by all the well-established realty developers in the Delhi-NCR region.
                  Buyers of property can opt, not just for living purposes, but as a solid investment opportunity
                  with good returns.</p>
              </div>
              {/* <div className=" hidden lg:block">
                <Image src="/images/about-us-mobile.webp" alt="About" width={600} height={400} className="w-full h-full object-cover" />
              </div> */}
            </div>
          </div>
        </section>

        <section className="bg-slate-200">
          <div className="mx-auto max-w-6xl px-6 py-28">
            <div className="">
              <div className="text-4xl font-bold mb-7">Fast facts</div>
            </div>
            <div className="grid grid-cols-4 gap-6">
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

        <section className="relative py-28">
          <div className="text-center text-4xl font-serif mb-10 px-6">Our Primary Websites</div>
          <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 gap-10">
            <figure className="border group border-primary-200 relative peer">
              <Image src="/images/hcorealestate.webp" alt="About" width={600} height={400} className="w-full" />
              <figcaption className="p-4 lg:p-6 bg-white">
                <h3 className="mb-2 text-primary group-hover:underline">HcoRealEstates.com <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" /></h3>
                <Link href="https://www.hcorealestates.com/" target="_blank" className="absolute inset-0 z-10"></Link>
                <p className="mb-0">Hcorealestates is an intellectual and interactive one-stop web portal for property buyers to find very important information relating to residential and commercial properties for investment.</p>
              </figcaption>
            </figure>
            <figure className="border group border-primary-200 relative peer">
              <Image src="/images/dubai-housing.webp" alt="About" width={600} height={400} className="w-full" />
              <figcaption className="p-4 lg:p-6 bg-white">
                <h3 className="mb-2 text-primary group-hover:underline">HcoRealEstates.com <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" /></h3>
                <Link href="https://www.dubaihousing-ae.com/" target="_blank" className="absolute inset-0 z-10"></Link>
                <p className="mb-0">Hcorealestates is an intellectual and interactive one-stop web portal for property buyers to find very important information relating to residential and commercial properties for investment.</p>
              </figcaption>
            </figure>
          </div>
        </section>


        <section>
          <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
              className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
            />
            <div
              aria-hidden="true"
              className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              />
            </div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
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
      <footer>

      </footer>
    </>
  );
}
