'use client';

type SubmitButtonProps = {
  buttonText: string;
};

const SubmitButton = ({ buttonText }: SubmitButtonProps): React.JSX.Element => {
  return (
    <button
      type="submit"
      className="text-white text-lg border border-mainRed w-max p-3 rounded-xl"
    >
      {buttonText}
    </button>
  );
};

export default SubmitButton;
