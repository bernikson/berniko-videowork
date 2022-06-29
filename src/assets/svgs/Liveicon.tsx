import React from "react";

const Liveicon = ({ width, height }: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.5823 5.23413C25.726 5.88124 25.8014 6.55342 25.8014 7.23761C25.8014 10.0837 24.4994 12.7174 22.3879 14.1977C22.1089 14.3934 21.7229 14.3257 21.5271 14.0464C21.3316 13.7674 21.3994 13.3814 21.6784 13.1856C23.4795 11.9234 24.5654 9.66514 24.5654 7.23777C24.5654 4.81085 23.4795 2.55255 21.6784 1.2899C21.3994 1.09441 21.3316 0.708533 21.5271 0.429309C21.7228 0.149852 22.1089 0.0820992 22.3879 0.278028C23.6591 1.16881 24.6365 2.47724 25.2132 3.99802H27.4266C28.3745 3.99802 29.2831 4.37455 29.9535 5.04451C30.6235 5.71493 31 6.62352 31 7.5714V20.9872C31 21.9351 30.6235 22.8441 29.9535 23.5141C29.2831 24.1845 28.3745 24.5608 27.4266 24.5608H19.0379V27.572H21.7901C22.1313 27.572 22.4081 27.8488 22.4081 28.19C22.4081 28.5312 22.1313 28.8079 21.7901 28.8079H9.30975C8.96854 28.8079 8.69176 28.5312 8.69176 28.19C8.69176 27.8488 8.96855 27.572 9.30975 27.572H12.0619V24.5608H3.67324C2.72535 24.5608 1.81677 24.1843 1.14635 23.5141C0.476379 22.8442 0.0998535 21.9351 0.0998535 20.9872V7.5714C0.0998535 6.62352 0.476385 5.71493 1.14635 5.04451C1.81677 4.37454 2.72535 3.99802 3.67324 3.99802H5.88667C6.46337 2.47724 7.44077 1.16881 8.71189 0.278028C8.9909 0.082321 9.37697 0.150074 9.57271 0.429309C9.76819 0.708317 9.70044 1.09439 9.42143 1.2899C7.62029 2.55232 6.53445 4.81062 6.53445 7.23777C6.53445 9.66514 7.62029 11.9232 9.42143 13.1856C9.70043 13.3813 9.76819 13.7674 9.57271 14.0464C9.377 14.3259 8.99094 14.3937 8.71189 14.1977C6.6002 12.7176 5.29848 10.0839 5.29848 7.23761C5.29848 6.55342 5.37378 5.88118 5.51751 5.23413H3.67327C3.05329 5.23413 2.45862 5.48049 2.02033 5.91877C1.58205 6.35728 1.33569 6.95173 1.33569 7.57171V19.5397H12.3773L13.6801 9.58997C12.9886 9.03905 12.545 8.19004 12.545 7.23817C12.545 5.57989 13.8914 4.23348 15.5497 4.23348C17.2079 4.23348 18.5544 5.57989 18.5544 7.23817C18.5544 8.19004 18.1107 9.03931 17.4192 9.58997L18.7221 19.5397H29.7636V7.57171C29.7636 6.95173 29.5173 6.35745 29.079 5.91877C28.6407 5.48049 28.046 5.23413 27.4261 5.23413H25.5818H25.5823ZM13.2976 24.5609V27.572H17.8022V24.5609H13.2976ZM29.7639 20.7754H1.33534V20.9873C1.33534 21.6075 1.5817 22.2019 2.01998 22.6402C2.45827 23.0787 3.05294 23.3251 3.67292 23.3251H27.4268C28.0468 23.3251 28.6415 23.0787 29.0798 22.6402C29.5181 22.2019 29.7644 21.6075 29.7644 20.9873V20.7754H29.7639ZM14.8518 10.1609L13.624 19.5396H17.4753L16.2475 10.1609C16.0234 10.2142 15.7899 10.2426 15.5498 10.2426C15.3094 10.2426 15.0762 10.2142 14.852 10.1609H14.8518ZM11.9955 11.2087C10.61 10.365 9.76432 8.86001 9.76432 7.23772C9.76432 5.61583 10.61 4.11087 11.9955 3.26694C12.2869 3.08967 12.3791 2.70914 12.2021 2.41789C12.0246 2.12644 11.6441 2.03426 11.3526 2.2113C9.59877 3.27935 8.52827 5.18444 8.52827 7.23773C8.52827 9.29142 9.59877 11.1965 11.3526 12.2644C11.644 12.4417 12.0245 12.3492 12.2021 12.0578C12.3794 11.7663 12.2869 11.3858 11.9955 11.2087V11.2087ZM19.7467 12.2643C21.5005 11.1963 22.571 9.29118 22.571 7.23766C22.571 5.18443 21.5005 3.27934 19.7467 2.21124C19.4552 2.03397 19.0747 2.12638 18.8972 2.41783C18.7199 2.70928 18.8123 3.08978 19.1038 3.26687C20.4892 4.11057 21.3349 5.61559 21.3349 7.23765C21.3349 8.85994 20.4892 10.365 19.1038 11.2087C18.8123 11.3859 18.7201 11.7665 18.8972 12.0577C19.0747 12.3492 19.4552 12.4413 19.7467 12.2643V12.2643ZM15.5495 5.46911C16.5256 5.46911 17.318 6.26174 17.318 7.23761C17.318 8.2137 16.5256 9.0065 15.5495 9.0065C14.5734 9.0065 13.781 8.21387 13.781 7.23761C13.781 6.26174 14.5734 5.46911 15.5495 5.46911Z"
        fill="#FC6B3F"
      />
    </svg>
  );
};

export default Liveicon;
