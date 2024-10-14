export default function (props: any) {
  return (
    <>
      <div className="flex items-center ps-4 shadow-switch-1 mb-4 rounded-xl">
        <input
          checked
          id={props.id}
          type="radio"
          value=""
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
        />
        <label
          htmlFor={props.id}
          className="w-full flex items-center gap-4 ms-8 py-4 text-md font-medium"
        >
          <span>
            <img className="w-8" src={props.icon} alt="paypalIcon" />
          </span>
          {props.text}
        </label>
      </div>
    </>
  );
}
