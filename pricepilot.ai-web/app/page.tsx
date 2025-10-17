export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-700 rounded-full mb-6">
            <svg
              className="w-10 h-10 text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">
            We'll Be Right Back
          </h1>

          <p className="text-lg text-slate-300 mb-2">
            Our site is currently down for maintenance
          </p>

          <p className="text-slate-400">
            We&#39;re working hard to improve your experience and will be back
            up soon.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <div
            className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-75"
            style={{ animationDelay: '0.15s' }}
          ></div>
          <div
            className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"
            style={{ animationDelay: '0.3s' }}
          ></div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <p className="text-sm text-slate-400">
            If you need immediate assistance, please contact us at{' '}
            <a
              href="mailto:support@example.com"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              support@pricepilot.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
