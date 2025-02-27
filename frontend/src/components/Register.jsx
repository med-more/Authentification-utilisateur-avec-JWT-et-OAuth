import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function validateForm() {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when typing
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    toast.success("Registration successful!", {
      icon: "🎉",
      style: { borderRadius: "10px", background: "#333", color: "#fff" },
    });

    console.log(formData);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#141e30] to-[#243b55] p-4">
      <Toaster position="top-center" />
      <div className="w-full max-w-md rounded-xl shadow-lg bg-white p-4 min-h-[250px] overflow-auto">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">Create an Account</h2>
          <p className="text-gray-500 text-sm">Enter your details below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 mt-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.firstName ? "border-red-500" : "focus:ring-indigo-500"
                }`}
              />
              {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.lastName ? "border-red-500" : "focus:ring-indigo-500"
                }`}
              />
              {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500" : "focus:ring-indigo-500"
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.phone ? "border-red-500" : "focus:ring-indigo-500"
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.password ? "border-red-500" : "focus:ring-indigo-500"
              }`}
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.confirmPassword ? "border-red-500" : "focus:ring-indigo-500"
              }`}
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
          >
            Create Account
          </button>

          <p className="text-center text-xs text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
