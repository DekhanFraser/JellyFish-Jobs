function Footer() {
  return (
    <>
      <footer className="mx-auto max-w-7xl px-6 mt-5">
        <div>
          <svg
            width="100%"
            height="261"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="1" width="100%" height="259" rx="6" fill="#5964E0" />
            <mask
              id="a"
              maskUnits="userSpaceOnUse"
              x="0"
              y="1"
              width="730"
              height="259"
            >
              <rect y="1" width="100%" height="259" rx="6" fill="#fff" />
            </mask>
            <g mask="url(#a)">
              <path
                opacity=".081"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M549.888-78.424c21.125-23.963 60.326-15.63 69.879 14.853l114.117 364.163c9.381 29.936-16.962 58.887-47.648 52.364l-366.488-77.899c-30.685-6.522-42.976-43.685-22.23-67.218l252.37-286.263z"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
      </footer>
    </>
  )
}

export default Footer
