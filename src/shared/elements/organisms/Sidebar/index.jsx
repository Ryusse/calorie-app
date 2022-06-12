import { Link } from 'react-router-dom';

export const Sidebar = ({ className }) => {
  return (
    <aside
      className={`sticky top-0 col-span-2 h-screen flex flex-col py-14 shadow-01 ${className}`}
    >
      <Link className="flex items-center gap-4 px-3" to="/">
        <svg
          className="mt-3"
          width="30"
          height="32"
          viewBox="0 0 30 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="15"
            cy="12"
            r="11.5"
            stroke="#F76A76"
            strokeDasharray="3 3"
          />
          <g filter="url(#filter0_d_71_3024)">
            <circle cx="15" cy="12" r="5" fill="#F76A76" />
            <circle
              cx="15"
              cy="12"
              r="4.5"
              stroke="#F76A76"
              strokeDasharray="5 5"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_71_3024"
              x="0"
              y="2"
              width="30"
              height="30"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_71_3024"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_71_3024"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <p className="text-primary-red-200 text-heading-04 font-semibold">
          Food diary
        </p>
      </Link>
      <nav className="flex flex-col mt-12 ">
        <ul>
          <li className="p-5 pl-9">
            <Link className="flex gap-3 items-center" to="/Statistics">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_71_3042)">
                  <path
                    d="M15.3333 14.6667H2C1.82319 14.6667 1.65362 14.5964 1.5286 14.4714C1.40357 14.3464 1.33333 14.1768 1.33333 14V0.666667C1.33333 0.489856 1.2631 0.320286 1.13807 0.195262C1.01305 0.0702379 0.843478 0 0.666667 0C0.489856 0 0.320286 0.0702379 0.195262 0.195262C0.0702379 0.320286 0 0.489856 0 0.666667L0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H15.3333C15.5101 16 15.6797 15.9298 15.8047 15.8047C15.9298 15.6797 16 15.5101 16 15.3333C16 15.1565 15.9298 14.987 15.8047 14.8619C15.6797 14.7369 15.5101 14.6667 15.3333 14.6667Z"
                    fill="#A5ABB8"
                  />
                  <path
                    d="M10.0002 13.3337C10.177 13.3337 10.3465 13.2635 10.4716 13.1385C10.5966 13.0135 10.6668 12.8439 10.6668 12.6671V8.00041C10.6668 7.8236 10.5966 7.65403 10.4716 7.529C10.3465 7.40398 10.177 7.33374 10.0002 7.33374C9.82335 7.33374 9.65378 7.40398 9.52876 7.529C9.40373 7.65403 9.3335 7.8236 9.3335 8.00041V12.6671C9.3335 12.8439 9.40373 13.0135 9.52876 13.1385C9.65378 13.2635 9.82335 13.3337 10.0002 13.3337Z"
                    fill="#A5ABB8"
                  />
                  <path
                    d="M4.66667 13.3337C4.84348 13.3337 5.01304 13.2635 5.13807 13.1385C5.26309 13.0135 5.33333 12.8439 5.33333 12.6671V8.00041C5.33333 7.8236 5.26309 7.65403 5.13807 7.529C5.01304 7.40398 4.84348 7.33374 4.66667 7.33374C4.48985 7.33374 4.32029 7.40398 4.19526 7.529C4.07024 7.65403 4 7.8236 4 8.00041V12.6671C4 12.8439 4.07024 13.0135 4.19526 13.1385C4.32029 13.2635 4.48985 13.3337 4.66667 13.3337Z"
                    fill="#A5ABB8"
                  />
                  <path
                    d="M12.6667 13.3333C12.8435 13.3333 13.0131 13.2631 13.1381 13.1381C13.2631 13.013 13.3333 12.8435 13.3333 12.6667V4.66667C13.3333 4.48986 13.2631 4.32029 13.1381 4.19526C13.0131 4.07024 12.8435 4 12.6667 4C12.4899 4 12.3203 4.07024 12.1953 4.19526C12.0702 4.32029 12 4.48986 12 4.66667V12.6667C12 12.8435 12.0702 13.013 12.1953 13.1381C12.3203 13.2631 12.4899 13.3333 12.6667 13.3333Z"
                    fill="#A5ABB8"
                  />
                  <path
                    d="M7.33317 13.3333C7.50999 13.3333 7.67956 13.2631 7.80458 13.1381C7.92961 13.013 7.99985 12.8435 7.99985 12.6667V4.66667C7.99985 4.48986 7.92961 4.32029 7.80458 4.19526C7.67956 4.07024 7.50999 4 7.33317 4C7.15636 4 6.98679 4.07024 6.86177 4.19526C6.73674 4.32029 6.6665 4.48986 6.6665 4.66667V12.6667C6.6665 12.8435 6.73674 13.013 6.86177 13.1381C6.98679 13.2631 7.15636 13.3333 7.33317 13.3333Z"
                    fill="#A5ABB8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_71_3042">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="text-paragraph-02 text-primary-grey-300 font-medium">
                Estadisticas
              </p>
            </Link>
          </li>

          <li className="p-5 pl-9">
            <Link className="flex gap-3 items-center" to="/Food">
              <svg
                width="11"
                height="16"
                viewBox="0 0 11 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.81521 0.571429C1.81521 0.419876 1.75686 0.274531 1.65299 0.167368C1.54913 0.0602039 1.40825 0 1.26137 0C1.11448 0 0.973604 0.0602039 0.869737 0.167368C0.765871 0.274531 0.70752 0.419876 0.70752 0.571429V4C0.707389 4.65866 0.92783 5.29714 1.33153 5.80737C1.73524 6.31761 2.29741 6.66827 2.9229 6.8V15.4286C2.9229 15.5801 2.98126 15.7255 3.08512 15.8326C3.18899 15.9398 3.32986 16 3.47675 16C3.62364 16 3.76451 15.9398 3.86838 15.8326C3.97224 15.7255 4.0306 15.5801 4.0306 15.4286V6.8C4.65609 6.66827 5.21826 6.31761 5.62197 5.80737C6.02567 5.29714 6.24611 4.65866 6.24598 4V0.571429C6.24598 0.419876 6.18763 0.274531 6.08376 0.167368C5.9799 0.0602039 5.83902 0 5.69213 0C5.54525 0 5.40437 0.0602039 5.30051 0.167368C5.19664 0.274531 5.13829 0.419876 5.13829 0.571429V4C5.13847 4.35466 5.03203 4.70064 4.83364 4.99028C4.63525 5.27991 4.35468 5.49892 4.0306 5.61714V0.571429C4.0306 0.419876 3.97224 0.274531 3.86838 0.167368C3.76451 0.0602039 3.62364 0 3.47675 0C3.32986 0 3.18899 0.0602039 3.08512 0.167368C2.98126 0.274531 2.9229 0.419876 2.9229 0.571429V5.61714C2.59882 5.49892 2.31825 5.27991 2.11986 4.99028C1.92147 4.70064 1.81503 4.35466 1.81521 4V0.571429ZM9.56906 15.4286V8H7.90752C7.76063 8 7.61976 7.9398 7.51589 7.83263C7.41202 7.72547 7.35367 7.58012 7.35367 7.42857V2.85714C7.35367 2.09943 7.71478 1.39086 8.2077 0.881143C8.70173 0.372571 9.3885 0 10.1229 0C10.2698 0 10.4107 0.0602039 10.5145 0.167368C10.6184 0.274531 10.6767 0.419876 10.6767 0.571429V15.4286C10.6767 15.5801 10.6184 15.7255 10.5145 15.8326C10.4107 15.9398 10.2698 16 10.1229 16C9.97602 16 9.83514 15.9398 9.73127 15.8326C9.62741 15.7255 9.56906 15.5801 9.56906 15.4286Z"
                  fill="#A5ABB8"
                />
              </svg>
              <p className="text-paragraph-02 text-primary-grey-300 font-medium">
                Alimentos
              </p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-auto flex gap-3 items-center p-5 pl-9">
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_71_3035)">
            <path
              d="M9.77756 11.5556V12.4445C9.77756 13.1517 9.49661 13.83 8.99651 14.3301C8.49642 14.8302 7.81814 15.1111 7.11089 15.1111H3.55534C2.84809 15.1111 2.16982 14.8302 1.66972 14.3301C1.16962 13.83 0.888672 13.1517 0.888672 12.4445V3.55558C0.888672 2.84834 1.16962 2.17006 1.66972 1.66996C2.16982 1.16987 2.84809 0.888916 3.55534 0.888916H7.11089C7.81814 0.888916 8.49642 1.16987 8.99651 1.66996C9.49661 2.17006 9.77756 2.84834 9.77756 3.55558V4.44447M13.3331 11.5556L16.8887 8.00003L13.3331 11.5556ZM16.8887 8.00003L13.3331 4.44447L16.8887 8.00003ZM16.8887 8.00003H4.44423H16.8887Z"
              stroke="#A5ABB8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_71_3035">
              <rect width="17.7778" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="text-paragraph-02 text-primary-grey-300 font-medium">
          Cerrar sesión
        </p>
      </div>
    </aside>
  );
};