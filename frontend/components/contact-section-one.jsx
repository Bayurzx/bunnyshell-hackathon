export function ContactSectionOne() {
  return (
    <section style={{ "borderTop": "7px solid black" }} className="px-8 py-8 lg:py-48">
      <div className="container mx-auto mb-20 text-center">
        <p className="mb-2 block font-sans text-base font-bold leading-relaxed text-pink-500 antialiased">
          Contact us
        </p>
        <h1 className="mb-4 block font-sans text-5xl font-semibold leading-tight tracking-normal text-blue-gray-900 antialiased">
          Got a question?
        </h1>
        <p className="mx-auto block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
          We&apos;d like to talk more about what you need
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <div className="grid justify-center p-6 text-center">
            <div className="mx-auto mb-8 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h5 className="mb-1 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Email
            </h5>
            <p className="mb-4 block px-8 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Our friendly team is here to help.
            </p>
            <p className="block px-12 font-sans text-base font-normal leading-relaxed text-pink-500 antialiased">
              onlinesafety@iglumtech.com
            </p>
          </div>
        </div>
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <div className="grid justify-center p-6 text-center">
            <div className="mx-auto mb-8 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h5 className="mb-1 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Office
            </h5>
            <p className="mb-4 block px-8 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Come say hello at your office HQ.
            </p>
            <p className="block px-12 font-sans text-base font-normal leading-relaxed text-pink-500 antialiased">
              Lagos, Nigeria
            </p>
          </div>
        </div>
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <div className="grid justify-center p-6 text-center">
            <div className="mx-auto mb-8 grid h-12 w-12 place-items-center rounded-full bg-pink-100/80 p-2.5 text-pink-500 ring-8 ring-pink-100/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h5 className="mb-1 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Phone
            </h5>
            <p className="mb-4 block px-8 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Mon-Fri from 8am to 5pm
            </p>
            <p className="block px-12 font-sans text-base font-normal leading-relaxed text-pink-500 antialiased">
              +234 802 5224 043 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSectionOne;
