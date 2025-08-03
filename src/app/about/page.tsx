import Image from "next/image";
import {  Inter} from 'next/font/google';


const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500'], 
    });



export default function About() {
  const content = [
    {
      title: "3.5",
      description: "Lorem ipsum dolor",
    },
    {
      title: "3.5",
      description: "Lorem ipsum dolor",
    },
    {
      title: "3.5",
      description: "Lorem ipsum dolor",
    },
    {
      title: "3.5",
      description: "Lorem ipsum dolor",
    },
    {
      title: "3.5",
      description: "Lorem ipsum dolor",
    },
    {
      title: "3.5",
      description: "Lorem ipsum dolor",
    },
  ];

  return (
    <section className="h-full p-5 sm:p-20 flex items-center  ">
      <div className="flex flex-col sm:flex-row justify-between w-full">
        {/* Text Content */}
        <div className="flex flex-col justify-between rounded-md flex-1  sm:mb-0">
          <div className="flex flex-col gap-5">
            <p className={`${inter.className} text-2xl font-semibold`}>About Us</p>
            <h1 className={`${inter.className} bg-[linear-gradient(to_right,_#5116E3,_#BA00FF)] bg-clip-text text-transparent text-1xl sm:text-3xl font-bold mb-4 transition-transform duration-300 hover:translate-x-1`}>
              Atheko Premium Laundry is a flagship brand under Collective Core Venture LLP
            </h1>
          </div>
          <p className="text-sm sm:text-base" >Atheko Premium Laundry is a flagship brand under Collective Core Venture LLP, built with a vision to redefine modern fabric care through precision, professionalism, and sustainability.</p>
          <p className="text-sm sm:text-base" >At Atheko, we believe laundry is not just a service it s a commitment to quality. We combine state-of-the-art technology, premium products, and skilled handling to ensure your garments receive the care they deserve. Whether it’s everyday clothing, delicate fabrics, or luxury wear, our team ensures each piece is treated with the highest standards of hygiene and attention.</p>
        </div>

        {/* Photo and Overview */}
        <div className="flex flex-col flex-1 items-end">
          <div className="flex flex-col items-center w-full">
            <div className="mb-4">
              <Image
                src="https://res.cloudinary.com/dzvxebtnl/image/upload/v1746549560/atheko/about_us_gdgnxe.jpg"
                alt="About Us"
                width={500}
                height={500}
                className="rounded-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Overview */}
            <div className="rounded-md p-5 w-full sm:w-[500px] flex flex-row justify-between bg-gray-100 shadow-lg transition-transform duration-300 transform hover:scale-105">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 w-full">
                {content.map((item, index) => (
                  <div key={index} className="flex flex-col text-center">
                    <h1 className={`${inter.className} text-2xl sm:text-4xl font-bold transition-colors duration-300 hover:bg-[linear-gradient(to_right,_#5116E3,_#BA00FF)]  hover:bg-clip-text hover:cursor-pointer  hover:text-transparent`}>
                      {item.title}
                    </h1>
                    <p className={`${inter.className} text-sm text-gray-600`}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
