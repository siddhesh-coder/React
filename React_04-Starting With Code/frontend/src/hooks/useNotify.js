import { toast } from "react-toastify";

const useNotify = ({ message }) => {
  const notify = () => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return notify;
};

export default useNotify;
