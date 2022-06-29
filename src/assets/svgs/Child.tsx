import React from "react";

const Child = ({ width, height }: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.9238 15.4584C20.7603 14.9541 20.2942 14.4463 19.4625 14.2767C19.4862 14.2104 19.5085 14.1453 19.5291 14.0836C19.5554 14.0054 19.5806 13.9299 19.6069 13.8601C19.9048 13.0771 20.1248 12.2118 20.2615 11.2898C20.3969 10.3854 20.3052 9.51782 20.1995 8.70671C20.1593 8.39551 20.0912 7.99255 19.9809 7.59657C20.0024 7.58904 20.0238 7.57948 20.0446 7.5682C20.1853 7.4909 20.2687 7.33921 20.2586 7.17884C20.1908 6.09033 19.1157 4.70984 18.365 4.13143C17.6676 3.59356 16.9063 3.30379 16.2544 3.09102C16.1554 3.05889 16.0555 3.03196 15.9586 3.00678C15.8402 2.97552 15.661 2.92862 15.6366 2.92428C15.6366 2.92399 15.6303 2.8823 15.665 2.77404C15.7229 2.59224 15.8248 2.41478 15.9328 2.22662C16.1302 1.88271 16.354 1.49307 16.354 0.984119C16.354 0.859639 16.2981 0.741822 16.202 0.662792C16.1056 0.583763 15.9791 0.552208 15.8572 0.577108C15.2247 0.704485 14.6973 1.2053 14.323 1.75239C14.2552 1.44033 14.2098 1.14042 14.2338 0.850938C14.2483 0.671455 14.1455 0.502688 13.9788 0.43379C13.8129 0.365182 13.6204 0.41121 13.5034 0.548717C13.1378 0.98005 13.0533 1.44032 13.0411 1.87778C10.3237 0.529375 5.71047 2.40203 3.63455 3.86188C2.24042 4.84211 0.842146 6.97273 1.01445 8.70642C1.02863 8.84711 1.11258 8.96898 1.23533 9.03295C1.22751 9.16293 1.22635 9.2906 1.22491 9.41363L1.22259 9.57516C1.21883 9.76101 1.33896 9.92689 1.51671 9.98073C1.54277 9.98855 1.56853 9.99405 1.59459 9.99666C1.5998 10.2372 1.61514 10.5241 1.64119 10.868C1.73006 12.0572 2.16111 13.207 2.64395 14.2738C1.80356 14.4406 1.33342 14.9509 1.16905 15.4576C0.953089 16.1248 1.15255 17.1088 2.35856 17.8684C2.92827 18.2305 3.51332 18.1631 3.86333 18.1234C3.90415 18.1188 3.95336 18.113 3.99505 18.1095C4.95438 19.4571 5.73252 19.9724 6.50984 20.4196C7.71729 21.115 9.04368 21.3283 9.66404 21.3926C9.67012 21.6369 9.66028 22.0121 9.64146 22.378C9.63509 22.3797 9.62959 22.3812 9.62351 22.3829C9.61077 22.3314 9.60122 22.2917 9.59659 22.2692C9.57806 22.1062 9.46314 21.9661 9.30074 21.9186C9.07349 21.852 8.86708 21.7825 8.67052 21.7058C8.52838 21.6502 8.36627 21.6777 8.24932 21.7776C8.1784 21.8384 8.10371 21.9073 8.0186 21.986L7.92539 22.0717C7.91439 22.0795 7.90396 22.0882 7.89325 22.0972C7.81943 22.162 7.52763 22.5505 7.17388 23.0354C5.70128 23.6723 5.00681 24.3697 4.20147 25.4986C3.58631 26.3882 3.38109 27.9486 3.31765 29.101C3.29363 29.5387 3.29276 30.003 3.3055 30.4433C3.3055 30.4442 3.30492 30.4447 3.30492 30.4456C3.30492 30.4468 3.3055 30.4476 3.3055 30.4488C3.322 31.0141 3.36108 31.5381 3.40711 31.9023C3.45748 32.2795 3.73654 32.3628 4.46982 32.3628C4.7046 32.3628 4.98568 32.3544 5.32059 32.344C5.76147 32.3307 6.25998 32.3159 6.80594 32.3159L7.72711 32.3183C8.87808 32.322 10.4544 32.3275 11.1054 32.3159L12.4153 32.3229L13.318 32.3206C13.7169 32.3188 14.2278 32.3168 15.164 32.3157C15.5349 32.3171 15.8837 32.3185 16.2169 32.3217C18.0855 32.3385 18.5846 32.3437 18.6497 31.8293C18.6914 31.4958 18.7082 31.0344 18.701 30.4563C18.701 30.4525 18.7033 30.4494 18.7033 30.4453C18.7033 30.441 18.701 30.4375 18.701 30.4334C18.6957 30.0421 18.6798 29.5988 18.6523 29.1007C18.5895 27.95 18.3851 26.3908 17.7647 25.4934C17.0106 24.4388 16.3952 23.7895 15.1217 23.1685C15.0491 23.1332 14.9729 23.128 14.8988 23.1355C14.5127 22.6043 14.1858 22.1672 14.107 22.0977C14.0969 22.089 14.0865 22.0806 14.0758 22.0731L13.9817 21.9865C13.8966 21.9078 13.8219 21.8389 13.751 21.7781C13.6352 21.6785 13.4725 21.6507 13.3298 21.7063C13.1332 21.783 12.9268 21.8525 12.6996 21.9191C12.5812 21.9538 12.4894 22.0381 12.4405 22.144C12.428 21.8545 12.4217 21.5798 12.4231 21.3963C13.0878 21.3355 14.5708 21.1247 15.8049 20.4143C16.5335 19.9952 17.1218 19.4978 18.0988 18.1103C18.1405 18.1141 18.1891 18.1196 18.2302 18.1242C18.5799 18.1639 19.1655 18.2307 19.7326 17.87C20.9403 17.1095 21.1401 16.1256 20.9241 15.4583L20.9238 15.4584ZM2.46787 10.7988C2.40331 9.93877 2.42329 9.51435 2.44789 9.37132C2.53532 9.25958 2.56311 9.10615 2.50782 8.9643C2.44384 8.80017 2.28694 8.7 2.12106 8.7C2.1199 8.7 2.11875 8.7 2.1173 8.70029C2.14075 8.61402 2.17317 8.53326 2.21862 8.45886C2.32688 8.28054 2.28636 8.04953 2.12338 7.91926C2.05535 7.86484 1.97516 7.83502 1.89352 7.82924C2.15117 6.60037 3.14469 5.22129 4.11129 4.54186C6.55338 2.82433 11.1944 1.27591 13.1992 2.96587C13.3225 3.07009 13.4953 3.09325 13.6418 3.02493C13.6806 3.00698 13.7159 2.98295 13.7469 2.95487C13.7527 2.98614 13.7582 3.01711 13.7631 3.04809C13.7944 3.23886 13.9527 3.38273 14.1452 3.39547C14.336 3.41139 14.5138 3.28692 14.5699 3.10193C14.6533 2.82722 14.7951 2.53396 14.972 2.26851C14.9355 2.34928 14.9022 2.43352 14.8739 2.5221C14.7746 2.83446 14.7839 3.09123 14.9025 3.30721C15.0829 3.6352 15.4358 3.72812 15.7475 3.81005C15.8286 3.83118 15.9128 3.85318 15.9968 3.88068C16.5815 4.07145 17.2604 4.32881 17.8582 4.7894C18.2556 5.09567 18.702 5.61823 19.0176 6.14536C18.8332 6.10338 18.6447 6.1882 18.5558 6.36016C18.4513 6.56395 18.5315 6.81407 18.735 6.91915C18.735 6.91915 18.7353 6.91915 18.7353 6.91944C18.9429 7.02626 19.2396 7.76413 19.376 8.81439C19.4735 9.56704 19.5592 10.369 19.4396 11.1682C19.312 12.0317 19.107 12.8386 18.8306 13.5658C18.8005 13.6451 18.7715 13.7308 18.7414 13.8199C18.7113 13.9103 18.6797 14.0041 18.6453 14.0935C18.4018 13.049 18.0081 11.2091 17.9844 10.9992C17.9754 10.9002 17.9471 10.7259 17.9126 10.5152C17.8559 10.171 17.7076 9.27067 17.7615 9.02893C17.8706 8.85553 17.8368 8.62394 17.6746 8.48962C17.4981 8.34343 17.2361 8.36775 17.0907 8.54376L17.0896 8.54491C16.7969 8.89808 16.6739 9.26545 16.5963 9.53411C16.1224 9.17833 15.5417 8.33504 15.141 7.58499L14.503 5.83618C14.4309 5.63817 14.2216 5.52441 14.0164 5.57507C13.8114 5.62428 13.6757 5.81968 13.7014 6.02898C13.7388 6.33352 13.5978 6.68379 13.2941 7.04219C12.6237 7.83278 11.0911 8.70555 8.69333 9.01066C8.82186 8.71741 8.91102 8.39231 8.99324 8.09416C9.08645 7.75488 9.17445 7.43471 9.29344 7.21294C9.39968 7.01464 9.32817 6.76771 9.13305 6.65626C8.93736 6.5448 8.68898 6.60936 8.57261 6.80186C8.07991 7.61587 7.36198 8.33005 6.66951 8.99154C6.22572 9.41535 5.73648 9.6698 5.21861 9.93961C5.19111 9.95409 5.16361 9.96827 5.13582 9.98274C5.12945 9.79313 5.10571 9.59831 5.04637 9.40551C4.98471 9.20576 4.78265 9.08563 4.57856 9.11921C4.37274 9.1551 4.22597 9.33834 4.23523 9.54706C4.25752 10.0383 4.14984 10.5389 4.03751 11.009L3.96688 11.3011C3.81461 11.9296 3.65684 12.5795 3.58012 13.2048C3.56304 13.3423 3.54741 13.4786 3.53178 13.6144C3.51325 13.7788 3.49501 13.9407 3.47417 14.1005C2.98118 13.0314 2.55241 11.9334 2.46763 10.7988L2.46787 10.7988ZM8.42952 22.7339C8.43734 22.7279 8.44457 22.7215 8.45181 22.7151L8.58179 22.5953C8.59163 22.5863 8.60089 22.5776 8.61016 22.5689C8.68427 22.595 8.75982 22.6202 8.83711 22.6451C8.96883 23.1847 9.34892 24.5968 10.4267 28.4738L7.20354 27.9565L7.58045 26.4894C7.62503 26.3148 7.55208 26.131 7.39981 26.0352C6.97716 25.7692 6.67957 25.5816 6.46479 25.451C7.01683 24.6712 8.23879 22.9606 8.42955 22.7339L8.42952 22.7339ZM9.99535 23.7813H12.0044C11.7296 24.7928 11.3533 26.1577 10.9998 27.434C10.6464 26.1577 10.27 24.7928 9.99528 23.7813H9.99535ZM17.8501 31.4745C17.5094 31.504 16.8088 31.4974 16.2246 31.4919C15.8882 31.489 15.5293 31.4878 15.1628 31.4858C14.2255 31.487 13.7136 31.489 13.3139 31.4907L12.4173 31.493L11.1002 31.4861C10.4485 31.4974 8.87691 31.4922 7.72912 31.4884L6.80625 31.4861C6.28315 31.487 5.74353 31.5009 5.29481 31.5148C4.89445 31.5266 4.45301 31.5402 4.20052 31.5301C4.18142 31.3315 4.16521 31.1031 4.15247 30.8611L17.8714 30.8608C17.8691 31.0927 17.8621 31.3 17.8497 31.4745H17.8501ZM17.085 25.9705C17.4744 26.5341 17.7436 27.6918 17.8235 29.1464C17.8409 29.4634 17.8533 29.7569 17.8617 30.0305L4.12793 30.0308C4.12561 29.73 4.13053 29.4287 4.14588 29.1467C4.2278 27.6686 4.49007 26.5407 4.88059 25.976C5.24824 25.4607 5.57392 25.0615 5.96591 24.7199C5.70567 25.087 5.52184 25.3484 5.51634 25.3565C5.42139 25.4983 5.42313 25.6842 5.52039 25.8243C5.5699 25.8952 5.6388 25.9473 5.71608 25.9763C5.82754 26.0356 6.25916 26.3002 6.70091 26.5764L6.28636 28.1905C6.25771 28.3034 6.27739 28.4236 6.34137 28.5211C6.40505 28.6187 6.50724 28.685 6.62275 28.7032L10.9341 29.3954C10.9564 29.3994 10.9781 29.4009 11.0001 29.4009C11.0221 29.4009 11.0438 29.3991 11.0658 29.3956L15.3771 28.7035C15.4926 28.685 15.5948 28.6187 15.6585 28.5214C15.7225 28.4238 15.7425 28.3037 15.7135 28.1908L15.299 26.5767C15.7407 26.3005 16.1723 26.0359 16.2838 25.9766C16.3611 25.9476 16.43 25.8955 16.4795 25.8246C16.5767 25.6845 16.5785 25.4986 16.4835 25.3568C16.4783 25.3489 16.3148 25.1165 16.0785 24.7827C16.4378 25.1101 16.7415 25.4894 17.0854 25.9704L17.085 25.9705ZM13.0754 22.9885C13.076 22.9868 13.0771 22.9853 13.0777 22.9836C13.0783 22.9816 13.0777 22.9795 13.0783 22.9775C13.1136 22.8415 13.1417 22.7306 13.1625 22.6449C13.2398 22.62 13.3154 22.5945 13.3895 22.5688C13.3987 22.5774 13.408 22.5861 13.4178 22.5951L13.5478 22.7149C13.5519 22.7187 13.5559 22.7219 13.56 22.7254C13.7806 22.9891 14.9883 24.6785 15.5348 25.4506C15.32 25.5811 15.0224 25.7687 14.5998 26.0347C14.4475 26.1309 14.3746 26.3147 14.4191 26.4889L14.7961 27.9561L11.5729 28.4734C12.4747 25.2288 12.8872 23.7136 13.0753 22.9885L13.0754 22.9885ZM19.288 17.1681C18.9676 17.3725 18.6251 17.3337 18.3237 17.2987C18.047 17.268 17.7013 17.2275 17.4981 17.5193C16.561 18.8671 16.0347 19.3237 15.3904 19.6942C13.9626 20.5161 12.0651 20.589 12.0459 20.5896C11.8911 20.5948 11.7521 20.6857 11.6852 20.8255C11.6476 20.9048 11.5321 21.146 11.6415 22.7384C11.647 22.8177 11.6783 22.8892 11.7226 22.9509H10.3692C10.4138 22.8895 10.4448 22.8177 10.4503 22.7384C10.5594 21.1462 10.4439 20.9048 10.406 20.8257C10.3391 20.6862 10.2002 20.5953 10.0456 20.5898C10.0285 20.5892 8.34864 20.5215 6.92286 19.7002C6.18089 19.2735 5.49398 18.8147 4.59364 17.5195C4.391 17.2277 4.0468 17.2671 3.768 17.2986C3.46635 17.3333 3.12447 17.3721 2.8014 17.1669C2.1379 16.7492 1.80672 16.1786 1.95753 15.7131C2.07709 15.3446 2.47021 15.111 3.01098 15.0583C3.05875 15.1579 3.1068 15.2583 3.15399 15.3559L3.25646 15.5675C3.32565 15.7117 3.47155 15.8023 3.63019 15.8023C3.64003 15.8023 3.64959 15.802 3.65943 15.8014C3.82878 15.7895 3.97381 15.6755 4.02592 15.5134C4.22161 14.8991 4.29051 14.2926 4.3571 13.7058C4.37244 13.5732 4.38749 13.4395 4.40399 13.3043C4.47521 12.7262 4.62689 12.1 4.77367 11.4944L4.84488 11.1997C4.85501 11.1563 4.86543 11.1123 4.87615 11.068C4.88859 11.0622 4.90162 11.0555 4.91378 11.048C5.14595 10.9105 5.3758 10.7912 5.60189 10.6734C6.11573 10.4059 6.64637 10.1298 7.1472 9.67814C7.21175 9.8362 7.38631 9.94649 7.54929 9.93665H7.55132C10.8981 9.79393 13.0391 8.62441 13.9272 7.57674C14.0092 7.48034 14.083 7.3825 14.149 7.28436L14.3716 7.8946C14.378 7.91255 14.3881 7.93397 14.3971 7.95105C14.7395 8.59719 15.639 10.1355 16.5839 10.4635C16.7295 10.5138 16.8797 10.5043 17.0082 10.4374C17.0247 10.429 17.0404 10.4198 17.0551 10.4099C17.0673 10.4863 17.0798 10.5654 17.0936 10.6476C17.124 10.8337 17.1501 10.9874 17.1582 11.0743C17.162 11.1122 17.8767 15.0839 18.2203 15.3028C18.3289 15.372 18.4644 15.3868 18.5848 15.3439C18.7654 15.2791 18.9067 15.1749 19.0245 15.0521C19.5968 15.0932 20.0096 15.3306 20.1333 15.7125C20.2847 16.1788 19.9535 16.7494 19.288 17.168L19.288 17.1681Z"
        fill="#FC6B3F"
        stroke="#FC6B3F"
        stroke-width="0.2"
      />
    </svg>
  );
};

export default Child;
