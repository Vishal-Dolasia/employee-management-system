function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-16">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-10 py-14 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-5">
            Contact
          </h2>

          <div className="space-y-2 text-gray-500">
            <p>+91 98765 43210</p>
            <p>hr@emscompany.com</p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-5">
            Navigation
          </h2>

          <div className="flex flex-col gap-2 text-gray-500">
            <button className="hover:text-black transition text-left cursor-pointer">
              Dashboard
            </button>

            <button className="hover:text-black transition text-left cursor-pointer">
              Employees
            </button>

            <button className="hover:text-black transition text-left cursor-pointer">
              Reports
            </button>

            <button className="hover:text-black transition text-left cursor-pointer">
              Attendance
            </button>

            <button className="hover:text-black transition text-left cursor-pointer">
              Settings
            </button>
          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-5">
            Company
          </h2>

          <div className="flex flex-col gap-2 text-gray-500">
            <button className="hover:text-black transition text-left cursor-pointer">
              About
            </button>

            <button className="hover:text-black transition text-left cursor-pointer">
              Privacy Policy
            </button>

            <button className="hover:text-black transition text-left cursor-pointer">
              Terms & Conditions
            </button>

            <button className="hover:text-black transition text-left cursor-pointer">
              Security
            </button>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-5">
            Newsletter
          </h2>

          <p className="text-gray-500 mb-5">
            Get updates about employees, reports and company announcements.
          </p>

          <div className="flex border border-gray-300 rounded-xl overflow-hidden">
            
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 outline-none"
            />

            <button className="bg-black text-white px-5 hover:bg-gray-900 transition cursor-pointer">
              →
            </button>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        
        <div className="max-w-7xl mx-auto px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-gray-500 text-sm">
            © 2026 Employee Management System. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-gray-500">

            <button className="hover:text-black transition cursor-pointer">
              Instagram
            </button>

            <button className="hover:text-black transition cursor-pointer">
              Facebook
            </button>

            <button className="hover:text-black transition cursor-pointer">
              Twitter
            </button>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;