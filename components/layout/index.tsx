import Header from "./header";
import Footer from "./footer";
import BrandBar from "../brandBar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div
      className="flex flex-col min-h-screen container mx-auto md:w-11/12  lg:w-4/5
    divide-y divide-black-500"
    >
      <div className=" sm:h-16 ">
        <BrandBar />
        <Header />
      </div>
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
