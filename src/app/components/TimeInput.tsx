'use client';

const TimeInput = (): React.JSX.Element => {
  return (
    <div>
      <input
        type="text"
        name="time"
        className="border-mainRed outline-none border-2 bg-neutral-900 text-white w-96 h-10 p-3"
        placeholder="Paste the expiration date"
      />
    </div>
  );
};

export default TimeInput;
