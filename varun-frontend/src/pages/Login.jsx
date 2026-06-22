import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import InputField from "../components/InputField";
import gaintlogo from "../images/gaintlogo.png";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter email and password.");
      return;
    }

    setError("");
    navigate("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col bg-white lg:flex-row">
      <div className="flex w-full bg-white px-8 py-8 sm:px-12 lg:w-1/2 lg:px-20">
        <div className="relative h-screen w-full">
          <div className="absolute left-0 top-4">
            <Logo />
          </div>

          <div className="flex h-full items-center justify-center">
            <div className="w-full max-w-[520px]">
              <h2 className="mb-5 text-4xl font-bold leading-[1.15] text-slate-900">
                Login to your account
              </h2><br/> 
              <form className="space-y-6" onSubmit={handleSubmit}>
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="name@org.gov"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                <br/>
                <InputField
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                /> <br/>

                {error && (
                  <p className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-slate-800 py-3 font-medium text-white transition hover:bg-slate-900"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="relative hidden w-1/2 items-center justify-center overflow-hidden bg-black lg:flex">
        <div className="relative text-center text-white">
          <h2 className="mb-4 text-4xl font-bold">UNIPS</h2>

          <p className="max-w-sm text-slate-400">(placeholder for now)</p>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">
            powered by
          </p>
          <img src={gaintlogo} alt="gaint" className="w-[200px] object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Login;
