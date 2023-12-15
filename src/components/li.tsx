type Props = {
  name: String;
};

const List = (props: Props) => {
  return (
    <div className="w-[100.188px] h-[24px] flex   shrink-0  items-center justify-center ">
      <h6 className=" text-[#050038] text-center px-2 [font-family:Helvetica] text-base not-italic font-normal leading-6">
        {props.name}
      </h6>
      <div className="flex w-2.5 h-2.5 justify-center items-center shrink-0 px-0 py-px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="8"
          viewBox="0 0 13 8"
          fill="none"
        >
          <g clip-path="url(#clip0_1_1991)">
            <path
              d="M1.1875 1L6.1875 6L11.1875 1"
              stroke="#050038"
              stroke-width="1.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_1991">
              <rect
                width="12"
                height="8"
                fill="white"
                transform="translate(0.1875)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default List;
