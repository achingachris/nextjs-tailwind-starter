const FAQs = () => {
  return (
<>
  {/* FAQ */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
        You might be wondering...
      </h2>
    </div>
    {/* End Title */}
    <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-neutral-700">
      <div className="py-8 first:pt-0 last:pb-0">
        <div className="flex gap-x-5">
          <svg
            className="shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500"
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
            <circle cx={12} cy={12} r={10} />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
          <div className="grow">
            <h3 className="md:text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Do you make custom software?
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              At the moment, No. We are afraid to make deals with funny deadlines and requests.
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 first:pt-0 last:pb-0">
        <div className="flex gap-x-5">
          <svg
            className="shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500"
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
            <circle cx={12} cy={12} r={10} />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
          <div className="grow">
            <h3 className="md:text-lg font-semibold text-gray-800 dark:text-neutral-200">
              What about updating existing websites for businesses?
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              Still No, but if you make sense, we will make some good recommendations from our pool of developers
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 first:pt-0 last:pb-0">
        <div className="flex gap-x-5">
          <svg
            className="shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500"
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
            <circle cx={12} cy={12} r={10} />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
          <div className="grow">
            <h3 className="md:text-lg font-semibold text-gray-800 dark:text-neutral-200">
              If you were to make custom website/software, how much would you charge?
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              For websites, our charges would start from 1000USD and for mobile apps, 5000USD. We give free consultations for upto 10minutes, you can let us hear you out
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 first:pt-0 last:pb-0">
        <div className="flex gap-x-5">
          <svg
            className="shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500"
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
            <circle cx={12} cy={12} r={10} />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
          <div className="grow">
            <h3 className="md:text-lg font-semibold text-gray-800 dark:text-neutral-200">
              So what TF do you do?
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              For now, we are building our ideas, testing them out. If they work out we are happy, if they don&apos;t we may need to start building custom websites and softwares for businesses and people out here.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End FAQ */}
</>


  )
}

export default FAQs