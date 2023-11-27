import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col item-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div
          className="relative w-[300px] h-[300px] 
              sm:w-[350px] md:h-[400px] md:w-[400px]"
        >
          <Image
            src="/bg.svg"
            fill
            className="object-contain"
            alt="Documents"
          />
        </div>
      </div>
    </div>
  );
};
