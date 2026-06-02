import Logo from "../components/Logo"
import InputField from "../components/InputField";
import gaintlogo from "../images/gaintlogo.png"

function Login() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 bg-white flex px-8 py-8 sm:px-12 lg:px-20">
        <div className="w-full h-screen relative">

          <div className="absolute top-4 left-0">
            <Logo/>
          </div>

          <div className="h-full flex items-center justify-center">
            <div className="w-full max-w-[520px]">
              <h2 className="text-4xl font-bold leading-[1.15] text-slate-900 mb-5">
                Login to your account
              </h2>

              <br />

              <p className="text-base leading-7 text-slate-500 mb-10 max-w-[380px]">Username
              </p>

              <form className="space-y-6">
               <InputField/>
                
                <br />

                <div>
                  <div className="flex justify-between items-center mb-2 gap-4">
                    <label className="text-sm font-medium text-slate-800">
                      Password</label>

                    <button
                      type="button" className="text-teal-700 hover:text-teal-800 text-sm font-medium">
                      Forgot password?
                    </button>
                  </div>

                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none text-slate-900 placeholder:text-slate-400 focus:border-teal-600m focus:ring-2 focus:ring-teal-100 transition"/>
                </div>
                <br />
                <button
                  type="submit"
                  className="
                    w-full
                    bg-slate-800
                    hover:bg-slate-900
                    text-white
                    font-medium
                    py-3
                    rounded-xl
                    transition
                  "
                >
                  Login
                </button>
              </form>

              <br />

              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 border-t border-slate-300"></div>

                <span className="text-slate-400 text-sm whitespace-nowrap">
                  or sign in with
                </span>

                <div className="flex-1 border-t border-slate-300"></div>
              </div>

              <button
                type="button"
                className="w-full border border-slate-300 rounded-xl py-3 text-slate-700 font-medium hover:bg-slate-50 transition">
                Google
              </button>

              <p className="text-center mt-8 text-sm text-slate-500">
                Don&apos;t have an account?

                <button
                  type="button"
                  className="text-teal-700 hover:text-teal-800 ml-2 font-medium"
                >
                  Contact admin
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}

<div className=" hidden lg:flex w-1/2 bg-black relative overflow-hidden justify-center items-center">

    <div className="relative text-center text-white">

        <h2 className="text-4xl font-bold mb-4">

            UNIPS

        </h2>

        <p className="text-slate-400 max-w-sm">
            (placeholder for now)
        </p>
    </div>

    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">
            powered by
        </p>
        <img src={gaintlogo} alt="gaint" className="w-[200px] object-contain"/>
    </div>
</div>
    </div>
  );
}

export default Login;
