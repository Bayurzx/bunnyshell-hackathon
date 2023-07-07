export function FooterThree() {
  return (
    <>
      <footer className="mt-10 bg-gray-900 px-8 pt-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-8 md:justify-between">
            <div className="text-center md:text-left">
              <h4 className="mb-6 block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
                Material Tailwind
              </h4>
              <p className="mb-12 block font-sans text-base font-light leading-relaxed text-white antialiased">
                Design amazing digital experiences that
                <br /> create more happy in the world.
              </p>
              <ul className="flex flex-wrap items-center justify-center md:justify-start">
                <li>
                  <a
                    href="#"
                    className="py-1 block pr-3 font-sans text-base font-normal leading-relaxed text-white antialiased transition-colors"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-1 block px-3 font-sans text-base font-normal leading-relaxed text-white antialiased transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-1 block px-3 font-sans text-base font-normal leading-relaxed text-white antialiased transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-1 block px-3 font-sans text-base font-normal leading-relaxed text-white antialiased transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-1 block px-3 font-sans text-base font-normal leading-relaxed text-white antialiased transition-colors"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-1 block px-3 font-sans text-base font-normal leading-relaxed text-white antialiased transition-colors"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-8 w-full md:mt-0 md:w-auto">
              <h6 className="mb-3 block font-sans text-base font-semibold leading-relaxed tracking-normal text-white antialiased">
                Get the app
              </h6>
              <div className="flex flex-col gap-2">
                <button
                  className="flex items-center justify-center rounded-lg border border-white py-3.5 px-7 font-sans text-sm font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-white/50 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <img
                    src="/logos/logo-ios.svg"
                    className="-mt-0.5 mr-2 h-6 w-6"
                    alt="ios"
                  />
                  App Store
                </button>
                <button
                  className="flex items-center justify-center rounded-lg border border-white py-3.5 px-7 font-sans text-sm font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-white/50 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-dark="true"
                >
                  <img
                    src="/logos/logo-google-play.svg"
                    className="-mt-0.5 mr-2 h-6 w-6"
                    alt="ios"
                  />
                  Google Play
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
            <p className="block text-center font-sans text-base font-normal leading-relaxed text-white antialiased opacity-60">
              © 2023 Material Tailwind, All rights reserved.
            </p>
            <div className="flex gap-2">
              <button
                className="relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <i className="fa-brands fa-twitter text-2xl not-italic opacity-60"></i>
                </span>
              </button>
              <button
                className="relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <i className="fa-brands fa-linkedin text-2xl not-italic opacity-60"></i>
                </span>
              </button>
              <button
                className="relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <i className="fa-brands fa-facebook text-2xl not-italic opacity-60"></i>
                </span>
              </button>
              <button
                className="relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <i className="fa-brands fa-github text-2xl not-italic opacity-60"></i>
                </span>
              </button>
              <button
                className="relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <i className="fa-brands fa-dribbble text-2xl not-italic opacity-60"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>

  );
}

export default FooterThree;
