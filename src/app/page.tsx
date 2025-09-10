import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-green-700 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 w-full h-[250px] md:h-[230px] -translate-x-1/2 translate-y-1/3 rounded-[406px] md:rounded-[1100px] bg-green-300 blur-[220px] md:blur-[475px]"></div>
          <div className="relative z-10 m-auto max-w-screen-2xl overflow-hidden px-6 md:px-10 lg:px-14">
            <h1 className="font-bold leading-tight m-0 p-0 w-auto tracking-tight md:tracking-tighter mt-[48px] z-1 leading-small text-center text-[50px] text-white md:mt-[80px] md:p-0 md:text-4xl lg:text-[100px]">
              The first<br />
              <span className="bg-[linear-gradient(116deg,_#00FF80_16.51%,_#A987FF_54.85%,_#EA06FF_94.62%)] bg-clip-text text-transparent">
                AI-powered
              </span>{" "}
              Mortgage
            </h1>
            <p className="font-normal leading-body m-0 p-0 text-white text-[18px] md:text-[24px] text-center mt-[32px] md:mt-[18px]">
              Our tech unlocks lower rates, higher chances of approval,<br />
              and a lightning‑fast process from approval<br />
              to closing. Over $100 billion funded.
            </p>
            <div className="w-auto text-center mt-8 md:mt-10">
              <a 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-green-600 text-white hover:bg-green-800 h-16 px-12 py-5 w-full sm:w-fit"
                href="/start"
              >
                Get started
              </a>
              <div className="mt-3 flex items-center justify-center gap-1 text-xs text-green-200">
                <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 6H8.5V10.5H7.5V6ZM6.5 1.5H9.5V2.5H6.5V1.5Z" className="fill-green-200"></path>
                  <path className="fill-green-200" d="M13.9987 5.00055L13.2887 4.29555L12.1637 5.42055C11.2429 4.35706 9.94762 3.68926 8.54717 3.5559C7.14671 3.42254 5.74872 3.83386 4.64365 4.70442C3.53857 5.57497 2.81139 6.83782 2.61318 8.23057C2.41497 9.62333 2.76098 11.0389 3.57931 12.1832C4.39765 13.3275 5.62539 14.1125 7.00745 14.3751C8.3895 14.6377 9.81961 14.3578 11.0006 13.5934C12.1817 12.8291 13.0228 11.6391 13.3493 10.2707C13.6758 8.90233 13.4625 7.46077 12.7537 6.24554L13.9987 5.00055ZM7.99875 13.5005C7.10873 13.5005 6.2387 13.2366 5.49868 12.7422C4.75866 12.2477 4.18189 11.5449 3.84129 10.7226C3.5007 9.90035 3.41158 8.99555 3.58522 8.12264C3.75885 7.24972 4.18743 6.4479 4.81677 5.81856C5.44611 5.18923 6.24793 4.76064 7.12084 4.58701C7.99376 4.41338 8.89856 4.50249 9.72082 4.84309C10.5431 5.18368 11.2459 5.76046 11.7404 6.50048C12.2348 7.2405 12.4987 8.11053 12.4987 9.00055C12.4987 10.194 12.0246 11.3386 11.1807 12.1825C10.3368 13.0264 9.19222 13.5005 7.99875 13.5005Z"></path>
                </svg>
                <span className="mr-1">3 min</span>
                <span>| No hard credit check </span>
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center md:flex-row">
              <div className="mt-10 px-4 md:mt-12">
                <img 
                  alt="Better Mortgage" 
                  width="510" 
                  height="810" 
                  decoding="async" 
                  className="w-full max-w-[510px] h-auto" 
                  src="https://media.better.com/better-com/homepage/ai-powered-fico.webp" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="section m-auto flex max-w-screen-2xl flex-col justify-between gap-x-3xl p-6 px-6 py-16 md:px-10 md:flex-row-reverse xl:p-[120px]">
          <div className="flex flex-col justify-center md:max-w-[507px]">
            <h2 className="font-bold text-gray-900 leading-heading m-0 p-0 w-auto tracking-tight md:tracking-tighter mb-6 text-3xl leading-small md:text-3xl lg:text-[88px]">
              Find out why we’re better.
            </h2>
            <a 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-green-700 text-white hover:bg-gray-900 h-16 px-12 py-5 mb-6 w-full md:w-fit"
              href="/b/our-stories"
            >
              See all our stories
            </a>
            <div className="mb-12 flex items-end justify-center gap-2 leading-small text-gray-600 md:justify-start">
              <svg width="90" height="23" viewBox="0 0 90 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_328_4813" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} x="0" y="0" width="90" height="23">
                  <path d="M89.5 0.343384H0.5V22.3434H89.5V0.343384Z" fill="white"></path>
                </mask>
                <g mask="url(#mask0_328_4813)">
                  <path d="M23.8906 8.13831H32.9052V9.83207H29.3651V19.3455H27.4151V9.83207H23.8906V8.13831ZM32.5147 11.2301H34.1834V12.7997H34.2148C34.2722 12.5673 34.3751 12.3487 34.5173 12.1569C34.6739 11.9414 34.8589 11.7486 35.0673 11.5836C35.281 11.4102 35.5194 11.27 35.7744 11.1676C36.0268 11.0641 36.2968 11.0104 36.5695 11.0095C36.7127 11.0067 36.8558 11.0117 36.9984 11.0245C37.077 11.0356 37.1555 11.0459 37.2404 11.0561V12.7831C37.1155 12.7618 36.9882 12.7435 36.8578 12.7277C36.7311 12.7121 36.6036 12.7042 36.4759 12.7041C36.1829 12.7023 35.8931 12.7641 35.6259 12.8852C35.3576 13.0079 35.1205 13.1901 34.9322 13.418C34.7214 13.6751 34.5613 13.9704 34.4608 14.2878C34.3403 14.6738 34.2825 15.0766 34.2895 15.4811V19.3423H32.5147V11.2301ZM45.3993 19.3455H43.6521V18.2139H43.6207C43.3959 18.6281 43.0574 18.9685 42.6457 19.1945C42.2463 19.4316 41.7918 19.559 41.3282 19.5637C40.2675 19.5637 39.5007 19.3002 39.0278 18.7729C38.5548 18.2458 38.3191 17.448 38.3207 16.3794V11.2301H40.0954V16.2062C40.0954 16.9178 40.2306 17.4187 40.5008 17.7086C40.7711 17.9986 41.1506 18.1452 41.6393 18.1483C41.96 18.1592 42.2793 18.1006 42.5757 17.9767C42.8117 17.8721 43.0199 17.7134 43.1838 17.5133C43.3457 17.3085 43.4603 17.07 43.5193 16.8151C43.5887 16.5273 43.6228 16.232 43.6207 15.9358V11.2301H45.3986L45.3993 19.3455ZM48.4233 16.74C48.4757 17.2634 48.6731 17.6295 49.0158 17.8383C49.3892 18.0567 49.8158 18.1662 50.2476 18.1546C50.4381 18.1531 50.6283 18.1402 50.8172 18.1159C51.0228 18.0917 51.2244 18.0414 51.4175 17.9664C51.5953 17.9 51.7534 17.7893 51.8771 17.6445C52.0017 17.4873 52.0606 17.2874 52.0412 17.0871C52.0394 16.981 52.0163 16.8762 51.9734 16.7792C51.9304 16.6822 51.8686 16.5949 51.7914 16.5225C51.617 16.3651 51.4129 16.2449 51.1911 16.1691C50.9189 16.0728 50.6401 15.9967 50.3568 15.9413C50.0426 15.8791 49.7254 15.8111 49.4054 15.7374C49.0809 15.6665 48.7606 15.5775 48.4461 15.4709C48.151 15.3722 47.8724 15.2293 47.6196 15.047C47.3745 14.8682 47.1744 14.6342 47.0351 14.3638C46.8802 14.0442 46.8051 13.6913 46.8167 13.3359C46.8032 12.942 46.9153 12.5541 47.1364 12.2288C47.3508 11.929 47.6295 11.6817 47.952 11.5053C48.2924 11.3173 48.6614 11.1872 49.044 11.1202C49.422 11.0495 49.8057 11.013 50.1902 11.0111C50.5916 11.0095 50.9917 11.054 51.3828 11.1439C51.748 11.2272 52.0962 11.3732 52.4121 11.5757C52.7199 11.7758 52.9808 12.0411 53.1765 12.353C53.3897 12.7031 53.5202 13.0977 53.5583 13.5066H51.6987C51.6154 13.0771 51.4206 12.7892 51.1142 12.6431C50.7839 12.4919 50.4242 12.4168 50.0614 12.4233C49.9126 12.4248 49.7642 12.4354 49.6167 12.4549C49.4515 12.4741 49.2892 12.5137 49.1336 12.5728C48.9887 12.6259 48.8579 12.7116 48.7509 12.8234C48.6438 12.9407 48.5872 13.096 48.5939 13.2552C48.5902 13.3554 48.6087 13.4552 48.6478 13.5475C48.6869 13.6398 48.7457 13.7222 48.8201 13.789C48.9943 13.9385 49.1954 14.053 49.4125 14.1266C49.6846 14.2229 49.9634 14.2987 50.2468 14.3535C50.5611 14.4167 50.8835 14.485 51.214 14.5584C51.5354 14.6311 51.8529 14.7201 52.1653 14.8248C52.4633 14.9223 52.7448 15.0653 52.9997 15.2487C53.244 15.4273 53.4463 15.6578 53.5922 15.924C53.7518 16.2336 53.8297 16.5794 53.8184 16.9282C53.8184 17.4095 53.7092 17.8175 53.4908 18.1523C53.2734 18.4864 52.9825 18.7656 52.6407 18.9683C52.2805 19.1827 51.8881 19.3364 51.4787 19.4238C51.0639 19.5166 50.6403 19.5641 50.2153 19.5653C49.7385 19.5698 49.2632 19.5115 48.8013 19.3921C48.3971 19.2903 48.0161 19.1118 47.6785 18.8662C47.3649 18.6356 47.1085 18.3349 46.9298 17.9877C46.7387 17.6 46.6401 17.1727 46.6415 16.74H48.4233ZM54.2866 11.2301H55.6277V8.79779H57.4057V11.2301H59.0123V12.5649H57.4065V16.8965C57.4051 17.0592 57.413 17.2219 57.43 17.3837C57.441 17.5052 57.4783 17.6229 57.5392 17.7284C57.5994 17.8254 57.6897 17.8999 57.7961 17.9403C57.9473 17.9941 58.1073 18.0182 58.2676 18.0115C58.3925 18.0115 58.5174 18.0115 58.6415 18.0035C58.7679 17.9979 58.8935 17.9794 59.0162 17.9482V19.3297C58.8183 19.3502 58.6234 19.3716 58.4388 19.3921C58.2473 19.4136 58.0548 19.4241 57.8621 19.4238C57.4808 19.4349 57.1 19.3898 56.7315 19.2901C56.4775 19.2196 56.2461 19.0833 56.0606 18.8947C55.8943 18.7118 55.781 18.4865 55.733 18.2432C55.6718 17.9489 55.6378 17.6495 55.6316 17.3488V12.5649H54.2874L54.2866 11.2301ZM60.2576 11.2301H61.9443V12.3292H61.9758C62.2004 11.8827 62.5687 11.5259 63.0207 11.3171C63.4766 11.1111 63.9713 11.0068 64.471 11.0111C65.0425 10.9981 65.6099 11.1131 66.1319 11.3479C66.5903 11.5612 66.9936 11.8781 67.3104 12.2739C67.6298 12.682 67.868 13.1484 68.0119 13.6473C68.1714 14.1927 68.2507 14.7585 68.2476 15.3269C68.2482 15.8612 68.1773 16.3931 68.037 16.9084C67.9083 17.3965 67.6915 17.8568 67.3976 18.2661C67.1115 18.6584 66.7408 18.9804 66.3134 19.2079C65.8776 19.4435 65.363 19.5613 64.7695 19.5613C64.5081 19.5613 64.2473 19.5374 63.9902 19.4901C63.7327 19.4442 63.4814 19.368 63.2414 19.2632C63.0039 19.1596 62.7809 19.0247 62.5783 18.8623C62.3777 18.7026 62.2062 18.5089 62.0717 18.2898H62.0402V22.3392H60.2607L60.2576 11.2301ZM66.4642 15.2961C66.4649 14.9355 66.4176 14.5765 66.3236 14.2286C66.2385 13.9006 66.097 13.5902 65.9056 13.3113C65.7216 13.0477 65.482 12.8281 65.204 12.6685C64.9088 12.5025 64.575 12.4184 64.2368 12.425C63.4884 12.425 62.9246 12.6864 62.5454 13.2093C62.1662 13.7323 61.9763 14.4279 61.9758 15.2961C61.9727 15.6804 62.0227 16.0634 62.1243 16.434C62.2105 16.7611 62.3603 17.0677 62.565 17.3362C62.7566 17.5827 62.9975 17.7858 63.2721 17.9324C63.5687 18.0843 63.898 18.1599 64.2306 18.1523C64.5898 18.1636 64.9455 18.0771 65.2598 17.9015C65.536 17.7383 65.7731 17.5159 65.9543 17.25C66.1411 16.9742 66.2744 16.6655 66.3471 16.3399C66.4263 15.9976 66.4667 15.6475 66.4673 15.2961H66.4642ZM69.599 8.13831H71.38V9.83207H69.6021L69.599 8.13831ZM69.599 11.2301H71.38V19.3455H69.6021L69.599 11.2301ZM72.9655 8.13831H74.7434V19.3455H72.9686L72.9655 8.13831ZM80.1855 19.5653C79.5966 19.5746 79.0117 19.4646 78.4657 19.2419C77.9813 19.0415 77.5452 18.739 77.1868 18.3546C76.8314 17.966 76.5608 17.5067 76.3924 17.0064C76.0289 15.8899 76.0289 14.6856 76.3924 13.5691C76.5608 13.0682 76.8316 12.6083 77.1876 12.2193C77.5464 11.8364 77.9821 11.5348 78.4657 11.3345C79.5753 10.9064 80.8029 10.9064 81.9124 11.3345C82.3961 11.5357 82.8319 11.8381 83.1907 12.2217C83.5467 12.6108 83.8179 13.0705 83.9865 13.5715C84.35 14.688 84.35 15.8923 83.9865 17.0089C83.8179 17.5098 83.5467 17.9696 83.1907 18.3586C82.832 18.7414 82.3961 19.0425 81.9124 19.2419C81.3653 19.465 80.779 19.5749 80.1887 19.5653H80.1855ZM80.1855 18.1523C80.5446 18.1612 80.8996 18.0747 81.2148 17.9015C81.5005 17.739 81.746 17.5136 81.9328 17.2421C82.123 16.9628 82.2628 16.652 82.3461 16.324C82.5221 15.6421 82.5221 14.9263 82.3461 14.2443C82.2649 13.9154 82.1249 13.6041 81.9328 13.3255C81.7443 13.0579 81.499 12.8356 81.2148 12.6748C80.8966 12.5095 80.5436 12.4233 80.1855 12.4233C79.8275 12.4233 79.4746 12.5095 79.1564 12.6748C78.8724 12.8356 78.6274 13.0579 78.439 13.3255C78.2468 13.6038 78.1067 13.9153 78.0258 14.2443C77.8487 14.9262 77.8487 15.6423 78.0258 16.324C78.1087 16.6522 78.2486 16.9629 78.439 17.2421C78.6258 17.5136 78.8709 17.739 79.1564 17.9015C79.4725 18.0753 79.8287 18.1617 80.1887 18.1523H80.1855ZM84.7707 11.2301H86.1117V8.79779H87.8896V11.2301H89.4955V12.5649H87.8896V16.8965C87.8884 17.0592 87.8963 17.2219 87.9132 17.3837C87.9241 17.5052 87.9614 17.6229 88.0224 17.7284C88.0824 17.8256 88.1728 17.9002 88.2794 17.9403C88.4306 17.9941 88.5906 18.0182 88.7507 18.0115C88.8756 18.0115 88.9997 18.0115 89.1246 18.0035C89.2509 17.998 89.3762 17.9794 89.4987 17.9482V19.3297C89.3014 19.3502 89.1058 19.3716 88.922 19.3921C88.7305 19.4136 88.5379 19.4241 88.3453 19.4238C87.9637 19.4348 87.5827 19.3897 87.214 19.2901C86.96 19.2196 86.729 19.0833 86.5439 18.8947C86.3774 18.7118 86.2641 18.4865 86.2162 18.2432C86.155 17.9489 86.1211 17.6495 86.1149 17.3488V12.5649H84.7738L84.7707 11.2301Z" fill="#292B29"></path>
                  <path d="M21.8162 8.1385L13.6738 8.13691L11.1581 0.343384L8.6425 8.13612L0.5 8.13454L7.08766 12.9533L4.57203 20.7485L11.1589 15.9312L17.7443 20.7485L15.2285 12.9557L21.8162 8.1385Z" fill="#23AD7A"></path>
                  <path d="M15.8002 14.7214L15.2298 12.955L11.1602 15.9305L15.8002 14.7214Z" fill="#00532C"></path>
                </g>
              </svg>
              <span><strong>Excellent</strong></span>
              <span><strong>4.4</strong> out of 5</span>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:flex-col-reverse">
            <div className="flex gap-x-2 overflow-scroll [&::-webkit-scrollbar]:hidden">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border hover:shadow-green-200 hover:border-green-200 hover:shadow-[0_0_0_4px_inset] hover:text-green-700 h-12 px-6 py-3 w-auto shadow-green-200 border-green-200 shadow-[0_0_0_4px_inset] text-green-700">
                Paul
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-900 hover:shadow-green-200 hover:border-green-200 hover:shadow-[0_0_0_4px_inset] hover:text-green-700 h-12 px-6 py-3 w-auto">
                Amanda
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-900 hover:shadow-green-200 hover:border-green-200 hover:shadow-[0_0_0_4px_inset] hover:text-green-700 h-12 px-6 py-3 w-auto">
                Tiara
              </button>
            </div>
            <div className="relative flex justify-center overflow-hidden rounded-lg w-[341px] h-[606px]">
              <button className="relative w-full h-full" aria-label="Play video for Paul">
                <img 
                  alt="Paul-thumbnail" 
                  loading="lazy" 
                  className="absolute h-full w-full left-0 top-0 right-0 bottom-0 object-cover color-transparent" 
                  src="https://media.better.com/better-com/homepage/social-proof/still-quote-Paul.webp"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="text-white size-16">
                    <path d="m478.409978 235.509653-407.739696-212.7793002c-10.6898048-5.3385488-23.670282 2.2879494-23.670282 14.4903466v425.5586016c0 12.202397 12.9804772 19.828895 23.670282 14.490346l407.739696-212.7793c11.453363-6.101199 11.453363-22.879495 0-28.980694z" fill="currentColor"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section w-full pb-6 lg:pb-12">
          <div className="m-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]">
            <div className="justify-left flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between">
              <h2 className="font-bold text-gray-900 leading-heading m-0 p-0 text-xl md:text-2xl md:tracking-tight w-full max-w-lg !text-3xl tracking-tight">
                Got questions?<br />We&#x27;ve got answers
              </h2>
              <div className="flex gap-3 overflow-x-scroll lg:gap-6 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border hover:shadow-green-200 hover:border-green-200 hover:shadow-[0_0_0_4px_inset] hover:text-green-700 h-12 px-6 py-3 w-auto shadow-green-200 border-green-200 shadow-[0_0_0_4px_inset] text-green-700">
                  Our products
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-900 hover:shadow-green-200 hover:border-green-200 hover:shadow-[0_0_0_4px_inset] hover:text-green-700 h-12 px-6 py-3 w-auto">
                  Calculators
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-900 hover:shadow-green-200 hover:border-green-200 hover:shadow-[0_0_0_4px_inset] hover:text-green-700 h-12 px-6 py-3 w-auto">
                  Guides &amp; FAQs
                </button>
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-8 lg:gap-6">
              <a 
                className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-lg bg-green-50 px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>*]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px] lg:[&:nth-child(2)]:max-w-none lg:[&:nth-child(2)]:basis-3/5 lg:[&:nth-child(2)]:flex-row lg:[&:nth-child(2)]:gap-10 lg:[&:nth-child(3)>*]:flex-1 lg:[&:nth-child(3)>img]:h-[100%] lg:[&:nth-child(3)>img]:max-w-[285px] lg:[&:nth-child(3)]:max-w-none lg:[&:nth-child(3)]:basis-3/5 lg:[&:nth-child(3)]:flex-row-reverse lg:[&:nth-child(3)]:gap-10"
                href="/content/ai-mortgage-lending"
              >
                <div className="flex flex-col gap-6">
                  <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-gray-900 lg:text-xl">
                    How AI Mortgage Lending is Transforming the Home Loan Process
                  </h4>
                  <div className="flex items-end justify-between">
                    <div className="group">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" className="transition ease-universal duration-300 fill-transparent hover:fill-green-800 [&_path]:fill-green-800 group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.843384" width="47" height="47" rx="23.5" stroke="#A4A8A4"></rect>
                        <path d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z" fill="#004733"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <img 
                  alt="Woman on cellphone, seeing how AI is making the mortgage process easier and faster" 
                  loading="lazy" 
                  width="200" 
                  height="200" 
                  className="w-full rounded-lg object-cover h-[160px] md:h-[130px]" 
                  src="https://media.better.com/better-com/homepage/learning-center/ai-mortgage.webp" 
                />
              </a>
              <a 
                className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-lg bg-green-50 px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>*]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px] lg:[&:nth-child(2)]:max-w-none lg:[&:nth-child(2)]:basis-3/5 lg:[&:nth-child(2)]:flex-row lg:[&:nth-child(2)]:gap-10 lg:[&:nth-child(3)>*]:flex-1 lg:[&:nth-child(3)>img]:h-[100%] lg:[&:nth-child(3)>img]:max-w-[285px] lg:[&:nth-child(3)]:max-w-none lg:[&:nth-child(3)]:basis-3/5 lg:[&:nth-child(3)]:flex-row-reverse lg:[&:nth-child(3)]:gap-10"
                href="/b/one-day-mortgage"
              >
                <div className="flex flex-col gap-6">
                  <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-gray-900 lg:text-xl">
                    One Day Mortgage<sup>1</sup>
                  </h4>
                  <p className="hidden flex-1 md:flex-none text-sm text-gray-900 md:block">
                    Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.<sup>1</sup>
                  </p>
                  <div className="flex items-end justify-between">
                    <div className="group">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" className="transition ease-universal duration-300 fill-transparent hover:fill-green-800 [&_path]:fill-green-800 group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.843384" width="47" height="47" rx="23.5" stroke="#A4A8A4"></rect>
                        <path d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z" fill="#004733"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <img 
                  alt="One day mortgage" 
                  loading="lazy" 
                  width="200" 
                  height="200" 
                  className="w-full rounded-lg object-cover h-[160px] md:h-[130px]" 
                  src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp" 
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}