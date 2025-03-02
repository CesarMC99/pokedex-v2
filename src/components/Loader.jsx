import { FaSpinner } from "react-icons/fa";

export const Loader = ({tamaño = "60px"}) => {
  return (
    <div className="flex items-center justify-center">
      <FaSpinner className="spin text-blue-500 text-4xl" style={{height: `${tamaño}`}} />
    </div>
  );
}
