import { Link } from "react-router-dom";

export default function Hello() {
  return (
    <>
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 p-4">
      <div className="card">
        <div className="relative w-[320px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center">
          <div className="transition-all flex flex-col items-center justify-center duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16 rounded-xl shadow-lg p-4">
            <p className="text-2xl sm:text-3xl font-semibold text-gray-700 font-serif text-center">
              Soon! 🎉
            </p>
          </div>
          <button className="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-xs flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
            Open
          </button>
          <div className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)] rounded-xl"></div>
          <div className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)] rounded-xl"></div>
          <div className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)] rounded-xl"></div>
          <div className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)] rounded-xl"></div>
        </div>
      </div>
      <Link to={"/login"} class="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">LogOut</Link>
    </div>
    </>
  );
}
