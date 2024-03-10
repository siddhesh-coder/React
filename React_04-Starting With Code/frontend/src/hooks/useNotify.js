import toast from "react-hot-toast";

const useNotify = () => {
  const notify = ({message}) => toast.success(message, { style: { backgroundColor: "rgb(0,0,0,90)", color: "white", fontWeight: "600" } });
  return notify;
};

export default useNotify;
