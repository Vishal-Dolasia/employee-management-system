import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const NavigatoToDashboard = ()=>{
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h6v6m-7 4h8a2 2 0 002-2V7.828a2 2 0 00-.586-1.414l-2.828-2.828A2 2 0 0013.172 3H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">Employee Management</h1>
          <p className="text-gray-500 text-sm mt-2">Sign in to your HR dashboard</p>
        </div>
        <div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-black mb-2">Email</label>
            <input type="email" placeholder="you@company.com" className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm outline-none" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-black mb-2">Password</label>
            <input type="password" placeholder="Enter your password" className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm outline-none" />
          </div>
          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center gap-2"><input type="checkbox" className="w-4 h-4" /><span className="text-black">Remember me</span></label>
            <button className="font-semibold text-black">Forgot password?</button>
          </div>
          <button 
          className="w-full bg-black text-white text-sm font-semibold py-3 rounded-lg hover:bg-gray-900 transition mb-4"
          onClick={NavigatoToDashboard}>Sign In</button>
          <p className="text-center text-gray-500 text-xs">Need help? Contact your HR administrator</p>
        </div>
      </div>
    </div>
  );
}

export default Login;