import { ReactComponent as TaskListIcon } from 'assets/svg/task_list.svg';

function NoProductsFound() {
  return (
    <div
      aria-label="products-not-found"
      className="flex flex-col bg-white w-full sm:w-[600px] h-[344px] justify-center items-center rounded-lg"
    >
      <TaskListIcon />
      <h2 className="text-lg leading-4 font-semibold mt-[22px]">
        Ooops.. It's empty here
      </h2>
      <span className="mt-2 text-sm text-gray-500">
        There are no products on the list
      </span>
    </div>
  );
}

export default NoProductsFound;
