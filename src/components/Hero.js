import { ArrowDown, HelpCircle } from "./Icons";

const Hero = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="relative w-full max-w-[400px] mx-auto lg:mx-0 mb-8 lg:mb-0">
          {/* Phone mockups using the two separate phone images */}
          <div className="relative w-full h-[450px] flex justify-center">
            {/* First phone (positioned to the left and back) */}
            <div className="absolute top-0 left-[8%] w-2/3 z-10">
              <img
                src="/assets/imgs/phone1.png"
                alt="Phone showing pairing screen"
                className="w-full"
              />
            </div>
            {/* Second phone (positioned to the right and front, slightly tilted) */}
            <div className="absolute top-16 right-[8%] w-2/3 z-20">
              <img
                src="/assets/imgs/phone2.png"
                alt="Phone showing search actions"
                className="w-full"
                style={{ transform: "rotate(5deg)" }} // Add rotation here
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-0 text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold text-primary-700 mb-4 sm:mb-6">
            IoT-based Object Locator
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-8 text-gray-800 max-w-[90%] sm:max-w-lg mx-auto sm:mx-0 text-justify sm:text-center lg:text-left lg:mx-0">
            Attach the microcontroller to your desired object, pair your device,
            and then you may now perform specific search actions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white transition-colors duration-300 rounded-xl py-3 px-6 flex items-center justify-center">
              <ArrowDown className="w-5 h-5 mr-2" />
              Download APK
            </button>
            <button className="bg-primary-700 text-white hover:bg-primary-800 transition-colors duration-300 rounded-xl py-3 px-6 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 mr-2" />
              How to Use?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
