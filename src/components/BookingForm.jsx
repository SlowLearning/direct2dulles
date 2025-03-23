'use client'

import { useState, useRef } from 'react'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { TextField, SelectField } from '@/components/Fields'
import Script from 'next/script'

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const formRef = useRef(null)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const formData = new FormData(e.target)
    const formDataObj = Object.fromEntries(formData.entries())
    
    // Create email content
    const emailBody = `
      Booking Request Details:
      
      Name: ${formDataObj.first_name} ${formDataObj.last_name}
      Email: ${formDataObj.email}
      Phone: ${formDataObj.phone}
      
      Pickup Address: ${formDataObj.pickup_address}
      Pickup Date: ${formDataObj.pickup_date}
      Pickup Time: ${formDataObj.pickup_time}
      
      Flight Number: ${formDataObj.flight_number || 'Not provided'}
      Passengers: ${formDataObj.passengers}
      Luggage: ${formDataObj.luggage}
      
      Special Requests: ${formDataObj.special_requests || 'None'}
    `
    
    // Use EmailJS to send the email
    window.emailjs.send(
      'default_service', // Replace with your EmailJS service ID
      'template_booking', // Replace with your EmailJS template ID
      {
        to_email: 'greyweissend@gmail.com',
        from_name: `${formDataObj.first_name} ${formDataObj.last_name}`,
        from_email: formDataObj.email,
        subject: 'New direct2dulles Booking Request',
        message: emailBody,
      }
    ).then(() => {
      setLoading(false)
      setSubmitted(true)
    }).catch((err) => {
      console.error('Email send failed:', err)
      setLoading(false)
      setError('There was an error submitting your booking. Please try again or contact us directly.')
    })
  }

  return (
    <>
      {/* EmailJS Script */}
      <Script 
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        onLoad={() => {
          window.emailjs.init("YOUR_EMAILJS_PUBLIC_KEY") // You'll need to replace this with your actual public key
        }}
      />
      
      <section
        id="book-now"
        aria-labelledby="book-now-title"
        className="py-20 sm:py-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2
              id="book-now-title"
              className="text-3xl font-medium tracking-tight text-slate-900"
            >
              Book Your Ride
            </h2>
            <p className="mt-2 text-lg text-slate-600">
              Reserve your premium transportation from Richmond to Dulles Airport. Complete the form below and we'll confirm your booking right away.
            </p>

            {!submitted ? (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-10 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2"
              >
                <TextField
                  label="First name"
                  id="first_name"
                  name="first_name"
                  type="text"
                  autoComplete="given-name"
                  required
                />
                <TextField
                  label="Last name"
                  id="last_name"
                  name="last_name"
                  type="text"
                  autoComplete="family-name"
                  required
                />
                <TextField
                  className="sm:col-span-2"
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <TextField
                  className="sm:col-span-2"
                  label="Phone number"
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                />
                <TextField
                  className="sm:col-span-2"
                  label="Pickup address"
                  id="pickup_address"
                  name="pickup_address"
                  type="text"
                  required
                />
                <TextField
                  label="Pickup date"
                  id="pickup_date"
                  name="pickup_date"
                  type="date"
                  required
                />
                <TextField
                  label="Pickup time"
                  id="pickup_time"
                  name="pickup_time"
                  type="time"
                  required
                />
                <TextField
                  label="Flight number"
                  id="flight_number"
                  name="flight_number"
                  type="text"
                  placeholder="Optional"
                />
                <SelectField
                  label="Number of passengers"
                  id="passengers"
                  name="passengers"
                >
                  <option value="1">1 passenger</option>
                  <option value="2">2 passengers</option>
                  <option value="3">3 passengers</option>
                  <option value="4">4 passengers</option>
                </SelectField>
                <SelectField
                  label="Number of luggage items"
                  id="luggage"
                  name="luggage"
                >
                  <option value="1">1 suitcase</option>
                  <option value="2">2 suitcases</option>
                  <option value="3">3 suitcases</option>
                  <option value="4">4 suitcases</option>
                  <option value="5+">5+ suitcases</option>
                </SelectField>
                <div className="sm:col-span-2">
                  <label htmlFor="special_requests" className="mb-3 block text-sm font-medium text-gray-700">
                    Special requests
                  </label>
                  <textarea
                    id="special_requests"
                    name="special_requests"
                    rows={3}
                    className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-hidden focus:ring-blue-500 sm:text-sm"
                    placeholder="Child seats, accessibility needs, etc."
                  />
                </div>

                {error && (
                  <div className="sm:col-span-2 rounded-md bg-red-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">Submission Error</h3>
                        <div className="mt-2 text-sm text-red-700">
                          <p>{error}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="sm:col-span-2 pt-4">
                  <Button
                    type="submit"
                    color="blue"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Book Now - $149 Flat Rate'}
                  </Button>
                  <p className="mt-4 text-sm text-gray-500 text-center">
                    By booking, you agree to our terms and conditions. We'll send you a confirmation email immediately after booking.
                  </p>
                </div>
              </form>
            ) : (
              <div className="mt-10 rounded-lg bg-green-50 p-6 text-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12 mx-auto text-green-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-green-800">Booking Request Received!</h3>
                <p className="mt-2 text-green-700">
                  Thank you for booking with direct2dulles. We've received your request and will send a confirmation email shortly. If you have any questions, please contact us at (804) 662-0327.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  color="blue"
                  className="mt-6"
                >
                  Book Another Ride
                </Button>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}