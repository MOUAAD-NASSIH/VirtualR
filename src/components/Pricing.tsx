import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";

function Pricing() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-6 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((pricing, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl min-h-[580px]">
              <p className="text-2xl sm:text-3xl lg:text-4xl mb-8">
                {pricing.title}
                {pricing.title == "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-nowrap text-[16px] sm:text-xl lg:text-2xl ">
                    {" "}
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{pricing.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {pricing.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 className="min-w-[24px]" />
                    <span className="ml-2 text-sm sm:text-[16px] lg:text-text-xl">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight sm:text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
