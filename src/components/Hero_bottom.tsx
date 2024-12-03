import React from 'react'
import Image from 'next/image'


function Hero_bottom() {
  return (
    <>
      <section className="w-full overflow-x-hidden flex flex-wrap md:flex-row sm:flex-col px-[8px] bg-headerColor gap-[32px] md:gap-[64px]">
        {/* Left Div */}
        <div className="w-full sm:w-auto md:w-[320px] py-[40px] sm:py-[20px] text-center md:text-left">
          <h1 className="text-[20px] sm:text-[18px] md:text-[24px] leading-[28px] sm:leading-[26px] md:leading-[33px] font-bold">
            Trusted by 2000+ companies worldwide.
          </h1>
        </div>

        {/* Right Div */}
        <div className="w-full md:w-[880px] flex flex-wrap justify-center items-center gap-[16px] md:gap-[19px] py-[40px] sm:py-[20px]">
          <Image
            src={"/image3.png"}
            alt="picture logo1"
            width={80}
            height={25}
            className="sm:w-[80px] sm:h-[25px] md:w-[123px] md:h-[38px]"
          />
          <Image
            src={"/image2.png"}
            alt="picture logo2"
            width={80}
            height={25}
            className="sm:w-[80px] sm:h-[25px] md:w-[123px] md:h-[38px]"
          />
          <Image
            src={"/image3.png"}
            alt="picture logo3"
            width={80}
            height={25}
            className="sm:w-[80px] sm:h-[25px] md:w-[123px] md:h-[38px]"
          />
          <Image
            src={"/image4.png"}
            alt="picture logo4"
            width={80}
            height={25}
            className="sm:w-[80px] sm:h-[25px] md:w-[123px] md:h-[38px]"
          />
          <Image
            src={"/image5.png"}
            alt="picture logo5"
            width={80}
            height={25}
            className="sm:w-[80px] sm:h-[25px] md:w-[123px] md:h-[38px]"
          />
          <Image
            src={"/image6.png"}
            alt="picture logo6"
            width={80}
            height={25}
            className="sm:w-[80px] sm:h-[25px] md:w-[123px] md:h-[38px]"
          />
        </div>
      </section>
    </>
  );
}

export default Hero_bottom;
