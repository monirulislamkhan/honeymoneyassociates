import FooterComponent from "@/components/footer";
import Header from "@/components/header";

export default function ContactUs() {
  return <>
    <Header />
    <main>
      <div className="max-w-6xl mx-auto p-8">
        <form className="grid grid-cols-1 gap-4">
          <label className="block">
            <span className="block text-sm font-medium text-gray-700">Name</span>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-gray-700">Email</span>
            <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-gray-700">Country</span>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-gray-700">Phone</span>
            <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-gray-700">Message</span>
            <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </label>
          <div className="text-center">
            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send
            </button>
          </div>
        </form>
      </div>
    </main>
    <FooterComponent />
  </>
}