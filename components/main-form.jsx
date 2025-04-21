"use client"
import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react';


export default function MainForm() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new URLSearchParams();
        formData.append('token1', process.env.token1);
        formData.append('token2', process.env.token2);
        const finalresult = await fetch(process.env.API_URL + 'countries.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData,
        });
        const result = await finalresult.json();
        setCountries(result.countries);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const ref = useRef(null);
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState("");
  const [mobileNo, setMobileNo] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new URLSearchParams();
    formData.append('token1', process.env.token1);
    formData.append('token2', process.env.token2);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('country', country);
    formData.append('mobileNo', mobileNo);
    formData.append('message', message);
    const finalresult = await fetch(process.env.API_URL + 'honeymoneywebhook.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
    const data = await finalresult.json();
    setIsSubmitting(false);
    if (data.error == true) {
      setError(data.message);
    } else {
      router.push('/thank-you/');
    }
  };

  return <>
    <form onSubmit={handleSubmit}>
      {/* Name Field */}
      <div className="relative mb-7">
        <input type="text" id="nameField" value={name} onChange={(e) => setName(e.target.value)} className="form-input peer" placeholder="Enter Your Name" required />
        <label htmlFor="nameField" className="form-float-label">Enter Your Name</label>
      </div>

      {/* Email Field */}
      <div className="relative mb-7">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="emailField" className="form-input peer" placeholder="Email Address" />
        <label htmlFor="emailField" className="form-float-label">Email Address</label>
      </div>

      {/* Country Field and Mobile Field */}
      <div className="mb-7 relative grow-1">
        <select id="countries" value={country} onChange={e => setCountry(e.target.value)} className="form-input peer appearance-auto" required>
          <option value="">Select Country</option>
          {countries.map(function (country) {
            return (
              <option key={country.id} value={country.id}>{country.name}</option>
            );
          })}
        </select>
        <label htmlFor="countries" className="form-float-label">Select Country</label>
      </div>

      {/* Number Field */}
      <div className="relative mb-7">
        <input type="tel" value={mobileNo} onChange={e => setMobileNo(e.target.value)} id="numberField" className="form-input peer" placeholder="Enter Mobile No." required />
        <label htmlFor="numberField" className="form-float-label">Enter Mobile No.</label>
      </div>

      {/* Message Field */}
      <div className="relative mb-7">
        <textarea type="email" value={message} onChange={e => setMessage(e.target.value)} id="messageField" className="form-input peer" placeholder="Enter Your Message" required />
        <label htmlFor="messageField" className="form-float-label">Enter Your Message</label>
      </div>


      <div className="flex flex-wrap">
        <button disabled={isSubmitting} type="submit" className="py-2 w-full border border-transparent rounded-md shadow-sm  font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 cursor-pointer text-lg uppercase ">{isSubmitting ? "Submitting..." : "Submit"}</button>
      </div>
    </form>
  </>
}