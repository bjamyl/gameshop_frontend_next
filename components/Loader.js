import { ClipLoader } from "react-spinners";
export default function Loader() {
  return (
    <div className="bg-slate-100 h-screen flex flex-col items-center justify-center">
      <ClipLoader color={"#2a3bdb"} size={100} />
    </div>
  );
}
