/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const BrandBar = () => {
  return (
    <div className="bg-gray-900 py-2 sm:py-3 space-x-8  flex items-center justify-center">
      <div className="container mx-auto flex justify-start items-center">
        <Link href="https://figpin.com">
          <a className="mr-4">
            <img src="/Figpin.png" alt="Logo 1" className="h-4 pl-2 w-auto" />
          </a>
        </Link>
        <span className="text-white"> | </span>
        <Link href="https://cybercel.com">
          <a>
            <img src="/CyberCel.png" alt="Logo 2" className="h-4 pl-4 w-auto grayscale-0" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BrandBar;
