import { FaRegLightbulb } from "react-icons/fa"; // Import the lightbulb icon

const ProcessSection = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Large header text */}
        <div className="text-center mb-12">
          <h2 className="text-7xl lg:text-7xl font-regular text-primary-700 tracking-tight">
            simply attach it. pair it. <span className="font-normal">search it.</span><br/>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 relative">
          {/* Left side with bags */}
          <div className="relative w-full lg:w-1/3 flex justify-center cursor-pointer">
            <div className="relative w-full max-w-[280px]">
              <img src="/assets/imgs/campbag.png" alt="Camping backpack" className="w-full" />
              <img
                src="/assets/imgs/smallbag.png"
                alt="Small bag with items"
                className="absolute bottom-0 right-0 w-1/2 transform translate-x-1/4"
              />
              {/* Showcard always visible with rounded borders */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[-12px] opacity-100 bg-black text-white p-4 rounded-xl shadow-md relative">
                <div className="flex items-center space-x-2">
                  <FaRegLightbulb className="text-white" />
                  <div>
                    <h3 className="text-sm font-semibold">Your personal stuff</h3>
                    <p className="text-xs">Where you will attach or place beside the hardware</p>
                  </div>
                </div>
                {/* The arrow/triangle pointer */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[-10px] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[10px] border-b-black border-l-transparent border-r-transparent"></div>
              </div>
            </div>
          </div>

          {/* Center with microcontroller */}
          <div className="relative w-full lg:w-1/3 flex flex-col items-center justify-center cursor-pointer">
            <img src="/assets/imgs/microcontroller.png" alt="Microcontroller" className="w-32 lg:w-40 mb-4" />
            {/* Showcard always visible with rounded borders */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-12px] opacity-100 bg-black text-white p-4 rounded-xl shadow-md relative">
              <div className="flex items-center space-x-2">
                <FaRegLightbulb className="text-white" />
                <div>
                  <h3 className="text-sm font-semibold">Hardware to be attached</h3>
                  <p className="text-xs">ESP32-CAM with integrated active buzzer module and LED light.</p>
                </div>
              </div>
              {/* The arrow/triangle pointer */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[-10px] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[10px] border-b-black border-l-transparent border-r-transparent"></div>
            </div>
          </div>

          {/* Right side with phone hand */}
          <div className="relative w-full lg:w-1/3 flex justify-center cursor-pointer">
            <div className="relative w-full max-w-[280px]">
              <img src="/assets/imgs/phonehand.png" alt="Hand holding phone" className="w-full" />
              {/* Showcard always visible with rounded borders */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[-12px] opacity-100 bg-black text-white p-4 rounded-xl shadow-md relative">
                <div className="flex items-center space-x-2">
                  <FaRegLightbulb className="text-white" />
                  <div>
                    <h3 className="text-sm font-semibold">Mobile application to be installed</h3>
                    <p className="text-xs">Access and control via your phone</p>
                  </div>
                </div>
                {/* The arrow/triangle pointer */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[-10px] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[10px] border-b-black border-l-transparent border-r-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
