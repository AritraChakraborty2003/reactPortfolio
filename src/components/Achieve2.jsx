/* eslint-disable react/jsx-key */

const Achieve2 = () => {
  const data = [
    {
      id: "1",
      name: "Code Euler",
      rank: "1st",
      certificateLink:
        "https://drive.google.com/file/d/1Tu88hMMiRHAaftFdKtcTssm7N2wKZ4LJ/view?usp=sharing",
      descr:
        "coding contest held at IIMT College of Engineering, at Infinity Tech Fest 2k22",
    },
    {
      id: "2",
      name: "HackBVP 5.0",
      rank: "1st",
      certificateLink:
        "https://drive.google.com/file/d/1BkphoQTMgMWK2agyaT3zx_tUkP9oROuT/view?usp=sharing",
      descr: "hackathon held at Bhartiya Vidyapeeth,New Delhi",
    },
    {
      id: "3",
      name: "HackMAIT 4.0",
      rank: "2nd",
      certificateLink:
        "https://drive.google.com/file/d/1vP50IxPnOSKym6QAQi2mFVzt2xgpnBxe/view?usp=sharing",
      descr: "hackathon held at MAIT,New Delhi",
    },
    {
      id: "4",
      name: "Ideathon",
      rank: "2nd",
      certificateLink:
        "https://drive.google.com/file/d/1LkmFg8P0v-ZII20Wn1K439IDVnr2mDmT/view?usp=sharing",
      descr: "hackathon held at Lingya's Vidyapeeth,Faridabad,Haryana",
    },
    {
      id: "5",
      name: "Mind Installer",
      rank: "2nd",
      certificateLink:
        "https://drive.google.com/file/d/1xYPPducXhl0jghEAmoC_CNnhvi-VsaYx/view?usp=sharing",
      descr: "hackathon held at IIMT College of Engineering,Greater Noida",
    },
    {
      id: "6",
      name: "Smart-O-Hack",
      rank: "1st",
      certificateLink:
        "https://drive.google.com/file/d/1vCmG98E1oy5A8dwa07Hf39i6uVmAMZcc/view?usp=sharing",
      descr: "hackathon held at MAIT,New Delhi",
    },
    {
      id: "7",
      name: "Software Hackathon",
      rank: "2nd",
      certificateLink:
        "https://drive.google.com/file/d/1Ui6Gs71IBIGVlRVrizGR2fDYJZ-g_sIp/view?usp=sharing",
      descr:
        "hackathon held at IIMT College of Engineering, BCA Department, Greater Noida",
    },
    {
      id: "8",
      name: "SRM Builds 4.0",
      rank: "2nd",
      certificateLink:
        "https://drive.google.com/file/d/1IzyFiqrpPosHADImdqQZF3xqbka9qxoK/view?usp=sharing",
      descr: "hackathon held at SRM Sonepat,Haryana",
    },
    {
      id: "9",
      name: "Technomania",
      rank: "3rd",
      certificateLink:
        "https://drive.google.com/file/d/15kRqVXit01qraiUqUgT3I_NyalDCP5l1/view?usp=sharing",
      descr: "global hackathon held at Sharda University,Greater Noida",
    },
  ];
  return (
    <div className="rightPart w-[100vw] lg:w-[90vmin]  2xl:w-[90vmin] flex justify-center items-center">
      {(data.length > 0 && (
        <div className=" w-[100vw] lg:w-[100vmin]  2xl:w-[90vmin]  pl-7 pr-7 flex flex-col gap-y-5">
          {data.slice(3, 6).map((val) => (
            <ul className="mt-1">
              <li className="text-xl lg:text-[3vmin] pt-2 pb-2">
                {val.id}. Won <b>{val.name}</b> with rank <b>{val.rank}</b> the{" "}
                <a href={val.certificateLink} target="_blank">
                  <u>
                    <b>certificate Link</b>
                  </u>
                </a>
              </li>
              <li className="lg:text-[2.5vmin]">
                <b>Description:</b> {val.descr}
              </li>
            </ul>
          ))}
          <div className="flex linkHolder gap-x-2 mt-10 w-12/12 justify-center pb-5">
            <div className="box rounded-[1vmin] h-[2vmin] w-[2vmin] border-solid border-2 "></div>
            <div className="box rounded-[1vmin] h-[2vmin] w-[2vmin] border-solid border-2 bg-black"></div>
            <div className="box rounded-[1vmin] h-[2vmin] w-[2vmin] border-solid border-2 "></div>
          </div>
        </div>
      )) ||
        (data.length == 0 && <p> Loading... 🙏</p>)}
    </div>
  );
};
export default Achieve2;
