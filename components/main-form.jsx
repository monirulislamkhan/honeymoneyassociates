"use client"
import { useState } from 'react';
// import { countries } from 'country-flag-icons'
// import { continents, countries, languages } from 'countries-list'
import IntlTelInput from 'intl-tel-input/react';
import "intl-tel-input/styles";


export default function MainForm() {



  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, country, mobile, message });
  }

  return <>
    <form onSubmit={handleSubmit}>

      {/* Name Field */}
      <div className="relative mb-7">
        <input type="text" id="nameField" value={name} onChange={(e) => setName(e.target.value)} className="form-input peer" placeholder="Enter Your Name" />
        <label htmlFor="nameField" className="form-float-label">Enter Your Name</label>
      </div>

      {/* Email Field */}
      <div className="relative mb-7">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="emailField" className="form-input peer" placeholder="Email Address" />
        <label htmlFor="emailField" className="form-float-label">Email Address</label>
      </div>


      {/* Country Field and Mobile Field */}
      <div className="mb-7 relative grow-1">
        <IntlTelInput initOptions={{
          initialCountry: "in",
        }} className="peer form-input appearance-auto rounded-r-none" />
        {/*<select id="countries" value={country} onChange={e => setCountry(e.target.value)} className="peer form-input appearance-auto rounded-r-none">
            {allCountries.map((country, id) => <option value={country.name} key={id}>{country.name}</option>)}
          </select> */}
        {/* <label htmlFor="countries" className="form-float-label">Select Country</label> */}
      </div>

      {/* <div className="relative grow-1 ">
          <input type="tel" id="phoneNo" value={mobile} onChange={e => setMobile(e.target.value)} className="form-input peer rounded-l-none" placeholder="Mobile No." />
          <label htmlFor="phoneNo" className="form-float-label">Mobile No.</label>
        </div> */}

      {/* Message Field */}
      <div className="relative mb-7">
        <textarea type="email" value={message} onChange={e => setMessage(e.target.value)} id="messageField" className="form-input peer" placeholder="Enter Your Message" />
        <label htmlFor="messageField" className="form-float-label">Enter Your Message</label>
      </div>


      <div className="flex">
        <button type="submit" className="py-2 md:min-w-42 border  border-transparent rounded-md shadow-sm  font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 cursor-pointer text-lg uppercase ">Submit</button>
      </div>
    </form>
  </>
}