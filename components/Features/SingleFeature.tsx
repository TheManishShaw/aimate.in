import { Feature } from "@/types/feature";
import Image from "next/image";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, image, title, paragraph, url } = feature;
  return (
    <>
      <div className="wrapper bg-gray-400 text-gray-900 group transform cursor-pointer antialiased  transition-all duration-200 ease-in-out hover:scale-105">
        <Link href={url}>
          <img
            src={image}
            alt=" random imgee"
            className="h-72 w-full  rounded-lg object-cover object-center shadow-md "
          />

          <div className="relative -mt-16 px-4  duration-200 group-hover:-translate-y-6 ">
            <div className="rounded-lg bg-white p-6 text-primary shadow-lg dark:bg-dark">
              <h4 className="mt-1 truncate text-xl font-bold uppercase leading-tight text-black group-hover:underline dark:text-white">
                {title}
              </h4>

              <div className="mt-1 text-base font-medium leading-relaxed text-body-color">
                {paragraph}
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* <div className="w-full">
        <div className="wow fadeInUp" data-wow-delay=".15s">
          <div className="mb-10 flex   items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            <Image
              src={image}
              className=" rounded-xl"
              alt="about image"
              width={400}
              height={400}
              priority
            />
            {icon}
          </div>
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>
      </div> */}
    </>
  );
};

export default SingleFeature;
