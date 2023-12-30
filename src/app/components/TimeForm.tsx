'use client';

import SubmitButton from './SubmitButton';
import TimeInput from './TimeInput';

type TimeFormProps = {
  onSetTimeLeft: React.Dispatch<React.SetStateAction<string>>;
};

const TimeForm = ({ onSetTimeLeft }: TimeFormProps): React.JSX.Element => {
  const calcTimeLeft = (time: string) => {
    const presentTime = new Date();
    const targetTime = new Date(time);

    if (isNaN(Date.parse(time))) {
      onSetTimeLeft(
        'Invalid date format. Please use a valid format like 2024-06-27T11:57:43.000Z',
      );

      return;
    }

    if (targetTime.toISOString() !== time) {
      onSetTimeLeft(
        'Invalid date format. Please use a valid format like 2024-06-27T11:57:43.000Z',
      );

      return;
    }

    if (targetTime < presentTime) {
      return onSetTimeLeft('Date has already expired!');
    }

    let diff = targetTime.getTime() - presentTime.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    onSetTimeLeft(
      days +
        ' days ' +
        hours +
        ' hours ' +
        minutes +
        ' minutes ' +
        seconds +
        ' seconds left',
    );
  };

  const onSubmitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      time: { value: string };
    };
    const time = target.time.value;
    calcTimeLeft(time);
  };

  return (
    <div>
      <form
        className="flex justify-center flex-col items-center gap-6"
        onSubmit={onSubmitForm}
      >
        <TimeInput />
        <SubmitButton buttonText="Get Time Left" />
      </form>
    </div>
  );
};

export default TimeForm;
