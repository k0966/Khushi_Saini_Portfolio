function Timeline({ items }) {
  return (
    <ol className="relative border-l border-gray-300 dark:border-gray-600">
      {items.map((item, idx) => (
        <li key={idx} className="mb-10 ml-6">
          <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-200 dark:bg-blue-700 rounded-full ring-8 ring-white dark:ring-gray-900">
            {item.icon}
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold">{item.title}</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{item.date}</time>
          <p className="mb-4 text-base font-normal">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
export default Timeline;