"use client"
import { useState, useRef } from 'react';
// import IntlTelInput from 'intl-tel-input/react';
// import "intl-tel-input/styles";


export default function MainForm() {
  const ref = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, country, number, message });
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
        {/* <IntlTelInput
          ref={ref}
          onChangeNumber={setNumber}
          onChangeCountry={setCountry}
          onChangeValidity={setIsValid}
          // onChangeErrorCode={setErrorCode}
          initOptions={{
            initialCountry: "in",
            excludeCountries: ['af', 'pk'],
            separateDialCode: true,
          }}
          className="peer form-input appearance-auto rounded-r-none"
        /> */}
        <select id="countries" value={country} onChange={e => setCountry(e.target.value)} className="form-input peer appearance-auto">
          <option>Select Country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <label htmlFor="countries" className="form-float-label">Select Country</label>
      </div>

      {/* Number Field */}
      <div className="relative mb-7">
        <input type="tel" value={number} onChange={e => setNumber(e.target.value)} id="numberField" className="form-input peer" placeholder="Enter Mobile No." />
        <label htmlFor="numberField" className="form-float-label">Enter Mobile No.</label>
      </div>

      {/* Message Field */}
      <div className="relative mb-7">
        <textarea type="email" value={message} onChange={e => setMessage(e.target.value)} id="messageField" className="form-input peer" placeholder="Enter Your Message" />
        <label htmlFor="messageField" className="form-float-label">Enter Your Message</label>
      </div>


      <div className="flex flex-wrap">
        <button type="submit" className="py-2 w-full border border-transparent rounded-md shadow-sm  font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 cursor-pointer text-lg uppercase ">Submit</button>
      </div>
    </form>
  </>
}