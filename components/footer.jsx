
export default function FooterComponent() {
  return (
    <footer className="bg-gray-100">
      {/* <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-4">
        <div className="col-span-1 bg-white p-4 rounded">
          <div className="text-xl font-semibold">Corporate Office :</div>
          <div className=" text-gray-600">24, Shivaji Marg, Opp. DLF Tower, Moti Nagar,
            Block C, Najafgarh Road Industrial Area,
            Delhi - 110015 (INDIA).
          </div>
        </div>
        <div className="col-span-1 bg-white p-4 rounded">
          <div className="text-xl font-semibold">Gurgaon Office :</div>
          <div className=" text-gray-600">Office Number - 1612 & 1614, Corporate Greens, Tower - 4, Sector - 74A, Gurugram
          </div>
        </div>
        <div className="col-span-1 bg-white p-4 rounded">
          <div className="text-xl font-semibold">Dubai Office :</div>
          <div className=" text-gray-600">515, Al Khaleej Centre, Bur Dubai UAE.
          </div>
        </div>
      </div> */}
      {/* <div className="text-sm text-gray-600 mt-4 max-w-6xl mx-auto py-8 border-t border-gray-300 text-center"> */}
      <div className="text-sm text-gray-600 max-w-6xl mx-auto py-8 px-6 text-center">
        &copy; {new Date().getFullYear()} Honey Money Associates Limited. All rights reserved.
      </div>
    </footer>
  );
}
