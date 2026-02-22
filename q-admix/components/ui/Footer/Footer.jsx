const Footer = () => {
  return (
    <footer className="mt-20 w-full bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-gray-400 mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-purple-400 mb-2">Q-Admix™</h2>
            <div className="w-12 h-0.5 bg-purple-400 mb-3"></div>
            <p className="text-lg">The Quantum Way to Profitable Ads</p>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold text-white up0aqWpercase">Company</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://yablokolabs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  data-cursor="pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://yablokolabs.com/#contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  data-cursor="pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            © 2025-2026{" "}
            <a
              href="https://yablokolabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-400 transition-colors"
            >
              Yabloko Labs.
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
