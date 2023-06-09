import type { SetStateAction } from "react";
import { useState } from "react";
import Navbar from "~/components/navbar";

export default function Index() {
  const [email, setEmail] = useState('');
  function handleEmailChange(value: SetStateAction<string>) {
    setEmail(value);
  }

  return (
    <div className="h-screen w-screen mx-auto text-white">
      <div className="relative mx-auto">
        <div className="container absolute top-0 left-0 flex flex-col items-center h-[100vh] w-full bg-clip-content">
          <Navbar />
          <div className="static h-full px-3 flex flex-col justify-center items-center z-10 mx-auto -mt-[12vh] space-y-3">
            <span className="flex container items-center">
              <p className="font-rubik text-md uppercase text-white">coming soon</p><div className="ml-1 w-2.5 bg-white h-0.5"></div>
            </span>
            <h1 className="-mt-1 max-w-sm font-rubik font-bold text-gray-5 text-4xl whitespace-normal">Sign up to stay updated</h1>
            <div className="container" id="mc_embed_signup">
              <form action="https://choosefleet.us21.list-manage.com/subscribe/post?u=aa9300a32dde53976a2364262&amp;id=046defb154&amp;f_id=00a4aae1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="flex flex-col" target="_self">
                <div className="mt-3 inline-flex sm:h-7 h-9 outline outline-1 outline-solid outline-gray-60" id="mc_embed_signup_scroll">
                  <div className="flex w-full">
                    <input type="email" value={email} onChange={(e) => handleEmailChange(e.target.value)} placeholder="Enter your email here" name="EMAIL" className="focus:outline-none focus:bg-white focus:text-gray-80 bg-gray-5 bg-opacity-90 w-full text-gray-50 pl-3 font-rubik text-xs rounded-none" id="mce-EMAIL" required />
                    <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                  </div>
                  <input type="submit" className="active:bg-gray-90 active:text-gray-50 cursor-pointer bg-gray-80 text-gray-5 font-rubik text-xs px-4 rounded-none" value="Submit" name="Submit" id="mc-embedded-subscribe" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <img className="sm:visible invisible absolute left-0 h-[100vh] w-[100vw] object-cover" src="/sil-bg.svg" alt="sil-bg" />
        <img className="sm:invisible absolute left-0 w-[100vw] h-[100vh] object-cover" src="/sil-bg-sm.svg" alt="sil-bg" />
      </div>
    </div>
  );
}

