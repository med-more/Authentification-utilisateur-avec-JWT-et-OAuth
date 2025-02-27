import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function validateForm() {
    let newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }
    toast.success("Login successful! ✅");
    console.log(formData);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 p-4">
      <Toaster position="top-center" />
      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-white/20">
        <h2 className="text-center text-2xl font-bold text-white drop-shadow-lg">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <InputField name="email" placeholder="Email" value={formData.email} error={errors.email} onChange={setFormData} formData={formData} />
          <PasswordField name="password" placeholder="Password" value={formData.password} error={errors.password} onChange={setFormData} formData={formData} show={showPassword} toggle={() => setShowPassword(!showPassword)} />

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-lg hover:shadow-blue-500/50">
            Login
          </button>

          <p className="text-center text-gray-300">
            Don't have an account? <Link to="/" className="underline text-blue-400 hover:text-blue-500 transition duration-300">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

const InputField = ({ name, placeholder, value, error, onChange, formData }) => (
  <div>
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="w-full p-3 border border-gray-700 bg-black text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      value={value}
      onChange={(e) => onChange({ ...formData, [name]: e.target.value })}
    />
    {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
  </div>
);

const PasswordField = ({ name, placeholder, value, error, onChange, formData, show, toggle }) => (
  <div className="relative">
    <input
      type={show ? "text" : "password"}
      name={name}
      placeholder={placeholder}
      className="w-full p-3 border border-gray-700 bg-black text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      value={value}
      onChange={(e) => onChange({ ...formData, [name]: e.target.value })}
    />
    <button type="button" className="absolute right-3 top-3 text-gray-400 hover:text-blue-400 transition duration-300" onClick={toggle}>
      {show ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
    {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
  </div>
);
