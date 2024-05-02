import "./card.css";

const Card = (props) => {
  return (
    <>
      <div className="card p-5 ">
        <div className="flex items-center space-x-2 text-zinc-950 dark:text-zinc-950 rounded-xl shadow-md">
          ⏳ Posted 10 days ago
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-zinc-900 ">{props.role}</h3>
          <p className="text-zinc-950 ">{props.place}</p>
          <p className="text-zinc-600 font-semibold flex items-center">
            Estimated Salary: ₹{props.minsal} - ₹{props.maxsal} LPA✅
          </p>
        </div>
        <div className="mt-4">
          <h4 className="text-zinc-700 dark:text-zinc-200 font-semibold">
            About Company:
          </h4>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm">
            {props.about}
          </p>
          <a
            href="#"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            View job
          </a>
        </div>
        <div className="mt-4">
          <p className="text-zinc-600 ">Minimum Experience</p>
          <p className="text-zinc-900 ">{props.exp} years</p>
        </div>
        <div className="mt-6 flex flex-col">
          <button className="bg-green-500 dark:bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600">
            Easy Apply
          </button>
          <button className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 mt-2">
            Unlock referral asks
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
