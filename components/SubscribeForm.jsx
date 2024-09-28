"use client";

import NotificationButton from "./NotificationButton";

const SubscribeForm = () => {
  return(
    <section className="w-full flex flex-col items-center px-5 pt-10 pb-14 border-t-[1px] border-t-slate-800">
      <form className="flex flex-col space-y-5 items-center w-full" action="" onSubmit={(e) => e.preventDefault()}>
        <div>
          <h1 className=" text-4xl font-bold">Subscribe</h1>
        </div>
        <div className="flex text-sm flex-col tablet:flex-row w-full tablet:space-x-3">
          <input className="w-full py-5 px-3  border-b-[1px] border-b-slate-200" type="text" placeholder="First Name" />
          <input className="w-full py-5 px-3  border-b-[1px] border-b-slate-200" type="text" placeholder="Last Name" />
          <input className="w-full py-5 px-3  border-b-[1px] border-b-slate-200" type="email" placeholder="E-Mail" />
          <NotificationButton buttonText={"Subscribe"} message={'You have sucessfully subscribed.'}/>
        </div>
      </form>
    </section>
  );
};

export default SubscribeForm;