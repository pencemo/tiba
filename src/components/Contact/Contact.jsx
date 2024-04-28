import React, {useState} from 'react'
import { MapPin, ArrowRight, PhoneCall, MailOpen } from 'lucide-react';

function Contact() {

    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
  return (
    <div className='w-full min-h-screen flex items-center pt-100 bg-zinc-900'>
      {/* <!-- Contact Us --> */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-20 max-lg:mt-44">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
            <div className="text-center">
            <h1 className="text-3xl font-bold  sm:text-4xl text-white">
                Contact us
            </h1>
            <p className="mt-1 text-neutral-400">
                We'd love to talk about how we can help you.
            </p>
            </div>

            <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            {/* <!-- Card --> */}
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 border-neutral-700">
                <h2 className="mb-8 text-xl font-semibold text-neutral-200">
                Fill in the form
                </h2>

                <form>
                <div className="grid gap-4">
                    {/* <!-- Grid --> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="hs-firstname-contacts-1" className="sr-only">Full Name</label>
                        <input type="text" id="hs-firstname-contacts-1" className="py-3 px-4 block w-full  rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-500" placeholder="Full Name" />
                    </div>

                    <div>
                        <label htmlFor="hs-lastname-contacts-1" className="sr-only">Subject</label>
                        <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-3 px-4 block w-full  rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-500" placeholder="Subject" />
                    </div>
                    </div>
                    {/* <!-- End Grid --> */}

                    <div>
                    <label htmlFor="hs-email-contacts-1" className="sr-only">Email</label>
                    <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autoComplete="email" className="py-3 px-4 block w-full  rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-500" placeholder="Email" />
                    </div>

                    <div>
                    <label htmlFor="hs-phone-number-1" className="sr-only">Phone Number</label>
                    <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="py-3 px-4 block w-full rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-500" placeholder="Phone Number" />
                    </div>

                    <div>
                    <label htmlFor="hs-about-contacts-1" className="sr-only">Message</label>
                    <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="py-3 px-4 block w-full  rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-500" placeholder="Message"></textarea>
                    </div>
                </div>
                {/* <!-- End Grid --> */}

                <div className="mt-4 grid">
                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Send inquiry</button>
                </div>

                <div className="mt-3 text-center">
                    <p className="text-sm text-neutral-500">
                    We'll get back to you in 1-2 business days.
                    </p>
                </div>
                </form>
            </div>
            {/* <!-- End Card --> */}

            <div className="divide-y divide-neutral-800">
                {/* <!-- Icon Block --> */}
                <div className="flex gap-x-7 py-6">
                <svg className="flex-shrink-0 size-6 mt-1.5 text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                <div className="grow">
                    <h3 className="font-semibold  text-neutral-200">Knowledgebase</h3>
                    <p className="mt-1 text-sm  text-neutral-500">We're here to help with any questions or code.</p>
                    <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-neutral-400 hover:text-neutral-200" href="#">
                    Contact support
                    <ArrowRight strokeWidth={1.5} className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" />
                    </a>
                </div>
                </div>
                {/* <!-- End Icon Block --> */}

                {/* <!-- Icon Block --> */}
                <div className="flex gap-x-7 py-6">
                <MapPin strokeWidth={1.5} className="flex-shrink-0 size-6 mt-1.5 text-neutral-200" />
                <div className="grow">
                    <h3 className="font-semibold text-neutral-200">Location</h3>
                    <p className="mt-1 text-sm text-neutral-500">Search our FAQ for answers to anything you might ask.</p>
                    <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-neutral-400 hover:text-neutral-200" href="#">
                    Visit store
                    <ArrowRight strokeWidth={1.5} className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" />
                    </a>
                </div>
                </div>
                {/* <!-- End Icon Block --> */}
                

                {/* <!-- Icon Block --> */}
                <div className=" flex gap-x-7 py-6">
                <PhoneCall strokeWidth={1.5} className="flex-shrink-0 size-6 mt-1.5 text-neutral-200" />
                <div className="grow">
                    <h3 className="font-semibold  text-neutral-200">Connect Us</h3>
                    <p className="mt-1 text-sm  text-neutral-500">Check out our development quickstart guide.</p>
                    <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-neutral-400 hover:text-neutral-200" href="#">
                    +91 0123 456 789
                    <ArrowRight strokeWidth={1.5} className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" />
                    </a>
                </div>
                </div>
                {/* <!-- End Icon Block --> */}

                {/* <!-- Icon Block --> */}
                <div className=" flex gap-x-7 py-6">
                <MailOpen strokeWidth={1.5} className="flex-shrink-0 size-6 mt-1.5  text-neutral-200" />
                <div className="grow">
                    <h3 className="font-semibold  text-neutral-200">Contact us by email</h3>
                    <p className="mt-1 text-sm  text-neutral-500">If you wish to write us an email instead please use</p>
                    <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium  text-neutral-400 hover:text-neutral-200" href="#">
                    example@site.com
                    <ArrowRight strokeWidth={1.5} className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" />
                    </a>
                </div>
                </div>
                {/* <!-- End Icon Block --> */}
            </div>
            </div>
        </div>
        </div>
        {/* <!-- End Contact Us --> */}
















        
    </div>
  )
}

export default Contact
