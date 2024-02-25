export default LabeledCardContainer = (CardContainer) => {
    return (props) => {
      return (
        <div className="relative">
          <label className="absolute top-4 left-[23px] bg-slate-700 text-white p-1 ps-4 rounded-tl-3xl">PROMOTED</label>
          <CardContainer {...props}/>
        </div>
      );
    };
  };
  