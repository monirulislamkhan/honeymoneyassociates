import Header from "@/components/header"
import FooterComponent from "@/components/footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons"
export default function ThankYou() {
  return <>
    <Header />
    <main>
      <section className="relative py-16 max-w-6xl mx-auto border-t border-t-primary-200 min-h-[calc(95vh-9rem)] text-center flex flex-col items-center justify-center px-6">
        <FontAwesomeIcon className="text-7xl lg:text-8xl text-primary" icon={faThumbsUp} />
        <div className="text-4xl lg:text-6xl  font-serif font-medium mt-6 uppercase text-primary">Thank You</div>
        <div className="text-xl mt-3">We at Honeymoneyassociates.com would like to thank you for your interest in our services and contacting us.</div>
      </section>

    </main>

    <FooterComponent />
  </>
}