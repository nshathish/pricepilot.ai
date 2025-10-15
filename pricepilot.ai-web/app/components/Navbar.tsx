import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/pricepilot-logo.svg"
              alt="PricePilot Logo"
              width={48}
              height={48}
            />
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <span className="text-xl font-semibold text-gray-900">
                  PRICE
                </span>
                <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  PILOT
                </span>
                <span className="px-2 py-0.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded">
                  .ai
                </span>
              </div>
              <span className="text-xs font-semibold text-gray-900">
                Where Discounts Meet Intelligence
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
