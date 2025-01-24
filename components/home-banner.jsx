import Image from "next/image";

export default function HomeBanner() {
  return <>
    <section className="">
      <Image src="/images/banner.webp" alt="Banner" width="1500" className="hidden sm:block w-screen lg:max-h-[700px]" height="700" />
    </section>
  </>
}