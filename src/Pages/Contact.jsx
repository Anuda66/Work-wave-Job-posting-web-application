import React from 'react'
import contact from '../assets/contact.jpg'
function Contact() {
  return (
    <div>
      <div className='pt-10 text-2xl text-center text-gray-500'>
        <p>CONTACT <span className='font-medium text-gray-800 '>US</span></p>
      </div>
      
      <div className='flex flex-col justify-center gap-10 my-10 text-sm md:flex-row mb-28'>
        <img src={contact} alt="contact Image" className='w-full md:max-w-[360px]'/>
        <div className='flex flex-col items-start justify-center gap-6 '>
            <form action="#" method="POST" class="space-y-4">
              
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Your Name" required />
              </div>
      
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Your Email" required />
              </div>
      
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" id="phone" name="phone" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Your Phone Number" required />
              </div>
      
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Your Message" required></textarea>
              </div>
      
              <div>
                <button type="submit" class="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Send Message
                </button>
              </div>
              
            </form>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
