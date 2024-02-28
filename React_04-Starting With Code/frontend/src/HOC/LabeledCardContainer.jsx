export default LabeledCardContainer = (CardContainer) => {
  return (props) => {
    return (
      <div className="relative">
        <label className=" absolute left-[23px] top-4 inline-flex h-[35px] animate-shimmer1 
        items-center justify-center border-slate-800 
        bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] 
        px-6 font-medium text-slate-400 transition-colors z-10">
          PROMOTED
        </label>
        <CardContainer {...props} />
      </div>
    );
  };
};

<button className="">Shimmer</button>;
