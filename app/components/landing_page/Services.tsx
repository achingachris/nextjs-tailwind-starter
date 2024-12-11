import React from 'react'

const Services = () => {
  return (
    <>
  {/* Icon Blocks */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
      {/* Icon Block */}
      <div>
        <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
          <svg
            className="shrink-0 size-6 text-blue-600 dark:text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width={10} height={14} x={3} y={8} rx={2} />
            <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
            <path d="M8 18h.01" />
          </svg>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Responsive
          </h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Responsive, and mobile-first project on the web
          </p>
        </div>
      </div>
      {/* End Icon Block */}
      {/* Icon Block */}
      <div>
        <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
          <svg
            className="shrink-0 size-6 text-blue-600 dark:text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 7h-9" />
            <path d="M14 17H5" />
            <circle cx={17} cy={17} r={3} />
            <circle cx={7} cy={7} r={3} />
          </svg>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Customizable
          </h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Components are easily customized and extendable
          </p>
        </div>
      </div>
      {/* End Icon Block */}
      {/* Icon Block */}
      <div>
        <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
          <svg
            className="shrink-0 size-6 text-blue-600 dark:text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Documentation
          </h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Every component and plugin is well documented
          </p>
        </div>
      </div>
      {/* End Icon Block */}
      {/* Icon Block */}
      <div>
        <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
          <svg
            className="shrink-0 size-6 text-blue-600 dark:text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </svg>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            24/7 Support
          </h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Contact us 24 hours a day, 7 days a week
          </p>
        </div>
      </div>
      {/* End Icon Block */}
    </div>
  </div>
  {/* End Icon Blocks */}
</>

  )
}

export default Services