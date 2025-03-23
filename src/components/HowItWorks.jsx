import { Container } from '@/components/Container'

const steps = [
  {
    name: 'Book your ride',
    description:
      'Reserve online or call us directly. Choose your pickup date, time, and location in Richmond.',
    icon: function BookIcon() {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      )
    },
  },
  {
    name: 'Receive confirmation',
    description:
      'Get an immediate booking confirmation with all your trip details via email and text message.',
    icon: function ConfirmIcon() {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
    },
  },
  {
    name: 'Driver arrives',
    description:
      'Your professional driver arrives at your door at the scheduled time in a premium vehicle.',
    icon: function CarIcon() {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      )
    },
  },
  {
    name: 'Relax and arrive',
    description:
      'Enjoy a comfortable ride and arrive at Dulles Airport with plenty of time before your flight.',
    icon: function ArriveIcon() {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
      )
    },
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="How It Works"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Getting to Dulles Airport from Richmond has never been easier. Our simple 4-step process gets you there with zero stress.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-4">
            {steps.map((step, stepIdx) => (
              <div key={step.name} className="group relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  <step.icon />
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-sm font-bold text-blue-600">
                    STEP {stepIdx + 1}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {step.name}
                </h3>
                <p className="mt-2 text-sm text-slate-700">
                  {step.description}
                </p>
                {stepIdx < steps.length - 1 && (
                  <div className="absolute top-6 left-0 hidden w-full lg:block">
                    <div className="ml-16 mt-px h-[2px] w-[calc(100%-24px)] bg-slate-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}