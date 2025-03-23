import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How far in advance should I book my ride?',
      answer:
        'We recommend booking at least 24 hours in advance to ensure availability. For holiday periods or busy travel seasons, earlier booking is advised. However, we do accommodate last-minute bookings when possible.',
    },
    {
      question: 'What happens if my flight is delayed?',
      answer: 'No worries! We track all flights and automatically adjust your pickup time based on your actual arrival. There\'s no extra charge for flight delays.',
    },
    {
      question: 'How many pieces of luggage can I bring?',
      answer:
        'Our standard service includes up to 4 regular-sized suitcases plus carry-on items. If you have additional luggage needs, please let us know when booking and we can accommodate accordingly.',
    },
  ],
  [
    {
      question: 'Is the $149 rate per person or for the entire car?',
      answer:
        'The $149 flat rate covers the entire vehicle for up to 4 passengers traveling together. It\'s not per person - it\'s a single rate for the car regardless of whether you have 1 or 4 passengers.',
    },
    {
      question: 'Do you offer child safety seats?',
      answer:
        'Yes, we can provide child safety seats upon request. Please specify this need when booking your ride, including the type of seat required (infant, toddler, or booster).',
    },
    {
      question: 'What if I need to cancel my reservation?',
      answer:
        'We understand plans change. Cancellations made at least 24 hours before your scheduled pickup are fully refunded. Cancellations with less notice may be subject to a cancellation fee.',
    },
  ],
  [
    {
      question: 'How long does the trip from Richmond to Dulles typically take?',
      answer:
        'The journey typically takes about 2 to 2.5 hours, depending on traffic conditions. We recommend scheduling your pickup at least 3 hours before your flight departure time.',
    },
    {
      question: 'Do you offer return trips from Dulles to Richmond?',
      answer: 'Yes, we offer return service from Dulles Airport to Richmond for the same flat rate of $149. You can book a round trip when making your initial reservation.',
    },
    {
      question: 'Are there any additional fees I should know about?',
      answer:
        'Our $149 rate is fully inclusive. There are no hidden fees, no fuel surcharges, no airport fees, and no tolls. The only additional cost would be gratuity for your driver, which is at your discretion.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Have questions about our Richmond to Dulles Airport service? Find answers to common questions below, or contact us directly for more information.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}