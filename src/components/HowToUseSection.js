import { FaRegHandPaper } from "react-icons/fa";
import { Bluetooth, Search } from "./Icons";

const HowToUseSection = () => {
  return (
    <section id="how-to-use" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-primary-700 mb-12">
          with only <span className="text-primary-700">3</span> simple steps,
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="relative bg-white p-8 rounded-2xl shadow-sm">
            <span className="absolute -top-10 left-0 text-[120px] font-bold text-primary-200 leading-none opacity-50">
              1
            </span>
            <div className="relative">
              <div className="flex flex-col items-center mb-4">
                <FaRegHandPaper className="w-12 h-12 text-primary-700 mb-2" /> {/* Updated Hand Icon */}
                <h3 className="text-2xl font-bold text-primary-700">Attach It</h3>
              </div>
              <p className="text-gray-600 text-center">
                Attach the microcontroller to the specific object that you want to secure and search later on.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white p-8 rounded-2xl shadow-sm">
            <span className="absolute -top-10 left-0 text-[120px] font-bold text-primary-200 leading-none opacity-50">
              2
            </span>
            <div className="relative">
              <div className="flex flex-col items-center mb-4">
                <Bluetooth className="w-12 h-12 text-primary-700 mb-2" />
                <h3 className="text-2xl font-bold text-primary-700">Pair Device</h3>
              </div>
              <p className="text-gray-600 text-center">
                Open your Bluetooth, click the pair device button then make sure that the object is within the 10-15
                meters range only to establish connection
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white p-8 rounded-2xl shadow-sm">
            <span className="absolute -top-10 left-0 text-[120px] font-bold text-primary-200 leading-none opacity-50">
              3
            </span>
            <div className="relative">
              <div className="flex flex-col items-center mb-4">
                <Search className="w-12 h-12 text-primary-700 mb-2" />
                <h3 className="text-2xl font-bold text-primary-700">Search it</h3>
              </div>
              <p className="text-gray-600 text-center">
                After establishing the connection you may now be able to perform specific search features such as camera
                live feed, buzzer for audible sound, LED lights just in case it is within a dark environment.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-700">
            Once you already found it, pick up your stuff and{" "}
            <span className="text-primary-700 font-medium">continue your lovely day.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
