import React from "react";
import playstore from "../../public/images/playstore.png";
import appstore from "../../public/images/appstore.png";
import Image from "next/image";
import Link from "next/link";
type Props = {
  title: string;
};

type Desc = {
  description: string;
};

const Footer = () => {
  return (
    <footer className="flex items-start bg-[#050038]   ">
      <div className="flex flex-col items-center gap-[100px] pt-10 w-full">
        <div className="flex items-start pr-10">
          <Ul_1 title={"Product"} />
          <Ul_2 title={"Solutions"} />
          <Ul_3 title={"Resources"} />
          <Ul_4 title={"Company"} />
        </div>
        <div className="flex items-start justify-between w-full border-solid border-t border-[#9B99AF]">
          <div className="flex  h-[82px]  justify-center px-4 gap-6    text-yellow-50">
            <div className="flex w-[875.188px]  justify-center items-start gap-6 pt-[28.5px] pb-[26px] px-0">
              <Link href={""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M22 6.81605C21.2642 7.13762 20.4733 7.3542 19.6433 7.45182C20.4908 6.95223 21.1417 6.1606 21.4475 5.2172C20.655 5.67988 19.7767 6.01621 18.8417 6.19752C18.0942 5.41245 17.0267 4.92188 15.8467 4.92188C13.1975 4.92188 11.2508 7.35501 11.8492 9.88085C8.44 9.71268 5.41667 8.10482 3.3925 5.66101C2.3175 7.47643 2.835 9.85133 4.66167 11.054C3.99 11.0326 3.35667 10.8513 2.80417 10.5486C2.75917 12.4198 4.12167 14.1705 6.095 14.5601C5.5175 14.7144 4.885 14.7504 4.24167 14.629C4.76333 16.2336 6.27833 17.401 8.075 17.4338C6.35 18.7652 4.17667 19.36 2 19.1073C3.81583 20.2533 5.97333 20.9219 8.29 20.9219C15.9083 20.9219 20.2125 14.588 19.9525 8.9071C20.7542 8.33697 21.45 7.62573 22 6.81605Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href={""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.8962 22.8823C17.9992 22.4291 22 18.1427 22 12.9219C22 7.39902 17.5228 2.92188 12 2.92188C6.47715 2.92188 2 7.39902 2 12.9219C2 17.7698 5.44966 21.8119 10.0282 22.7276V15.5099H7.625V12.6208H10.0282V10.4893C10.0282 8.01614 11.4801 6.67188 13.6043 6.67188C14.6199 6.67188 15.4925 6.74615 15.75 6.78328V9.37525H14.2766C13.118 9.37525 12.8962 9.9397 12.8962 10.7789V12.6208H15.6499L15.2923 15.5099H12.8962V22.8823Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href={""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M19.0002 2.92188H5C3 2.92188 2 3.92188 2 5.92188L2.00059 19.9219C2.00059 21.9219 3.00021 22.9219 5.00021 22.9219H19.0002C21.0002 22.9219 22.0002 21.9219 22.0002 19.9219V5.92188C22.0002 3.92188 21.0002 2.92188 19.0002 2.92188ZM8.66687 18.7553H6.16687V9.58854H8.66687V18.7553ZM7.41687 8.53187C6.61187 8.53187 5.95854 7.87355 5.95854 7.06188C5.95854 6.25021 6.61187 5.59187 7.41687 5.59187C8.22187 5.59187 8.87521 6.25021 8.87521 7.06188C8.87521 7.87355 8.22271 8.53187 7.41687 8.53187ZM18.6669 18.7553H16.1669V14.0853C16.1669 11.2786 12.8335 11.4911 12.8335 14.0853V18.7553H10.3335V9.58854H12.8335V11.0594C13.9969 8.90438 18.6669 8.74521 18.6669 13.1228V18.7553Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href={""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M19.0002 2.92188H5C3 2.92188 2 3.92188 2 5.92188L2.00059 19.9219C2.00059 21.9219 3.00021 22.9219 5.00021 22.9219H19.0002C21.0002 22.9219 22.0002 21.9219 22.0002 19.9219V5.92188C22.0002 3.92188 21.0002 2.92188 19.0002 2.92188ZM8.66687 18.7553H6.16687V9.58854H8.66687V18.7553ZM7.41687 8.53187C6.61187 8.53187 5.95854 7.87355 5.95854 7.06188C5.95854 6.25021 6.61187 5.59187 7.41687 5.59187C8.22187 5.59187 8.87521 6.25021 8.87521 7.06188C8.87521 7.87355 8.22271 8.53187 7.41687 8.53187ZM18.6669 18.7553H16.1669V14.0853C16.1669 11.2786 12.8335 11.4911 12.8335 14.0853V18.7553H10.3335V9.58854H12.8335V11.0594C13.9969 8.90438 18.6669 8.74521 18.6669 13.1228V18.7553Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href={""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M22.9991 10.6314C23.0485 9.20003 22.7355 7.77939 22.0891 6.50137C21.6505 5.97697 21.0418 5.62308 20.3691 5.50137C17.5866 5.2489 14.7926 5.14542 11.9991 5.19137C9.2157 5.14333 6.43176 5.24347 3.65905 5.49137C3.11087 5.59109 2.60357 5.84822 2.19905 6.23137C1.29905 7.06137 1.19905 8.48137 1.09905 9.68137C0.953962 11.8389 0.953962 14.0038 1.09905 16.1614C1.12798 16.8368 1.22854 17.5072 1.39905 18.1614C1.51963 18.6664 1.76357 19.1337 2.10905 19.5214C2.51632 19.9248 3.03543 20.1966 3.59905 20.3014C5.75497 20.5675 7.92727 20.6778 10.0991 20.6314C13.5991 20.6814 16.669 20.6314 20.299 20.3514C20.8765 20.253 21.4102 19.9809 21.8291 19.5714C22.109 19.2913 22.3181 18.9485 22.4391 18.5714C22.7967 17.474 22.9723 16.3255 22.959 15.1714C22.9991 14.6114 22.9991 11.2314 22.9991 10.6314ZM9.73905 15.7714V9.58137L15.659 12.6914C13.9991 13.6114 11.809 14.6514 9.73905 15.7714Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href={""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 12.4219C24 19.0493 18.6275 24.4219 12 24.4219C5.37259 24.4219 0 19.0493 0 12.4219C0 5.79446 5.37259 0.421875 12 0.421875C18.6275 0.421875 24 5.79446 24 12.4219ZM6.12377 14.4219C6.04208 13.7667 6 13.0992 6 12.4219C6 11.7446 6.04209 11.0771 6.1238 10.4219H2.20004C2.06887 11.0681 2 11.7369 2 12.4219C2 13.1068 2.06887 13.7756 2.20004 14.4219H6.12377ZM6.50405 16.4219H2.83209C4.0096 19.1169 6.34063 21.1925 9.20108 22.0249C7.96156 20.3755 7.03345 18.4787 6.50405 16.4219ZM8.57976 16.4219H15.4203C14.7623 18.6328 13.5728 20.6148 12 22.2199C10.4272 20.6148 9.23776 18.6328 8.57976 16.4219ZM15.8583 14.4219H8.14179C8.04836 13.7687 8 13.1009 8 12.4219C8 11.7428 8.04836 11.0751 8.14179 10.4219H15.8583C15.9516 11.0751 16 11.7428 16 12.4219C16 13.1009 15.9516 13.7687 15.8583 14.4219ZM17.8763 14.4219C17.9579 13.7667 18 13.0992 18 12.4219C18 11.7446 17.9579 11.0771 17.8763 10.4219H21.8C21.9312 11.0681 22 11.7369 22 12.4219C22 13.1068 21.9312 13.7756 21.8 14.4219H17.8763ZM17.496 16.4219H21.1679C19.9904 19.1169 17.6593 21.1925 14.7989 22.0249C16.0384 20.3755 16.9665 18.4787 17.496 16.4219ZM12 2.62392C10.4272 4.22892 9.23776 6.21096 8.57976 8.42188H15.4203C14.7623 6.21096 13.5728 4.22892 12 2.62392ZM14.7989 2.81885C16.0384 4.46826 16.9665 6.36504 17.4959 8.42188H21.1679C19.9904 5.72685 17.6593 3.65114 14.7989 2.81885ZM2.83209 8.42188H6.50408C7.03348 6.36504 7.9616 4.46826 9.20111 2.81885C6.34064 3.65114 4.0096 5.72685 2.83209 8.42188Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Manage Cookies</p>
            </div>
          </div>
          <div className="flex self-center px-2  gap-3 ">
            <Image src={appstore} alt={"appstore"} />
            <Image src={playstore} alt={"playstore"} />
          </div>
        </div>
      </div>
    </footer>
  );
};

const Ul_1 = (prop: Props) => {
  return (
    <div className="flex flex-col items-start gap-6 pt-0 pb-5 px-2.5">
      <div className=" text-white [font-family:Inter] text-lg not-italic font-bold leading-6">
        {prop.title}
        <ul className="flex flex-col items-start gap-[18px]">
          <li className="flex flex-col items-start gap-[7px] pl-0 pr-[69px] pt-0 pb-px text-white">
            <List description={"Online whiteboard"} />
            <List description={"Apps & Integrations"} />
            <List description={"Templates"} />
            <List description={"Miroverse"} />
            <List description={"Miro Developer Platform"} />
            <List description={"for any Devices"} />
            <List description={"Accessibility"} />
            <List description={"Changelog"} />
          </li>
          <div className="flex w-[108.609px] justify-center items-end gap-[5px]">
            <p className=" text-white bg-yellow-400 [font-family:Inter] text-base not-italic font-normal leading-6 border border-solid p-1 rounded-xl border-red-500">
              View demo →
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

const Ul_2 = (prop: Props) => {
  return (
    <div className="flex flex-col items-start gap-6 pt-0 pb-5 px-2.5">
      <div className=" text-white [font-family:Inter] text-lg not-italic font-bold leading-6">
        {prop.title}
        <div className="flex flex-col items-start gap-[18px]">
          <li className="flex flex-col items-start gap-[7px] pl-0 pr-[69px] pt-0 pb-px text-white">
            <List description={"Meetings and Workshops"} />
            <List description={"Brainstorming & Ideation"} />
            <List description={"Agile Workflows"} />
            <List description={"Diagramming"} />
            <List description={"Research & Design"} />
            <List description={"Strategy & Planning"} />
            <List description={"Mind Map"} />
            <List description={"Concept Map"} />
            <List description={"Online Sticky Notes"} />
            <List description={"Flowchart"} />
            <List description={"Wireframing"} />
          </li>
        </div>
      </div>
    </div>
  );
};

const Ul_3 = (prop: Props) => {
  return (
    <div className="flex flex-col items-start gap-6 pt-0 pb-5 px-2.5">
      <div className=" text-white [font-family:Inter] text-lg not-italic font-bold leading-6">
        {prop.title}
        <div className="flex flex-col items-start gap-[18px]">
          <li className="flex flex-col items-start gap-[7px] pl-0 pr-[69px] pt-0 pb-px text-white">
            <List description={"Masha Academy"} />
            <List description={"Blog"} />
            <List description={"Status"} />
            <List description={"Professional Network"} />
            <List description={"Events"} />
          </li>
        </div>
      </div>
    </div>
  );
};

const Ul_4 = (prop: Props) => {
  return (
    <div className="flex flex-col items-start gap-6 pt-0 pb-5 px-2.5">
      <div className=" text-white [font-family:Inter] text-lg not-italic font-bold leading-6">
        {prop.title}
        <div className="flex flex-col items-start gap-[18px]">
          <li className="flex flex-col items-start gap-[7px] pl-0 pr-[69px] pt-0 pb-px text-white">
            <List description={"About us"} />
            <List description={"Careers 🚀"} />
            <List description={"Miro in the News"} />
            <List description={"Customer Stories"} />
          </li>
        </div>
      </div>
    </div>
  );
};

const List = (desc: Desc) => {
  return (
    <span className=" text-white [font-family:Inter] text-base not-italic font-normal leading-6">
      {desc.description}
    </span>
  );
};

export default Footer;
