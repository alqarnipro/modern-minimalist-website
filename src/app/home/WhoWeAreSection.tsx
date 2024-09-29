import Image from "next/image";
import React from "react";

const WhoWeAreSection: React.FC = () => {
  return (
    <section className="relative bg-primary text-white py-16 px-8">
      <div className="container mx-auto ">
        <div className=" flex align-middle justify-between">
          <p className="text-secondary mb-4">Who we are</p>
          <div className="w-2/3 uppercase text-4xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              We drive into your business{" "}
              <span className="text-white">DREAM</span> IN ORDER
            </h2>
            <p className="text-xl mb-8">
              to bring to the surface of underlying value that your brand
              creates for its customers.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <Image
          src="/assets/Container (2).png"
          alt="Left Image"
          width={1200}
          height={700}
          sizes="(max-width: 1200px) 100vw, 1200px"
          quality={75}
        />
      </div>
      <p className="text-secondary mt-8 lg:mt-16 w-1/3 ms-auto">
        With an emphasis on innovation, we stay ahead of the curve, embracing
        emerging trends technology and digital marketing methodology.
      </p>
    </section>
  );
};

export default WhoWeAreSection;
