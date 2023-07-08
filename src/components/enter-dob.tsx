type EnterDateOfBirthTypes = {
  handleInput: (value: string) => void;
  handleEnter: (value: string) => void;
  dateOfBirth: string;
  error: boolean;
};

const EnterDateOfBirth = ({
  handleInput,
  dateOfBirth,
  error,
  handleEnter,
}: EnterDateOfBirthTypes) => {
  return (
    <div className="border border-solid border-[#323232] h-max p-8 rounded-md flex flex-col items-center justify-center w-full">
      <input
        type="text"
        placeholder="DD-MM-YYYY"
        className={`input input-ghost w-full bg-[#212121] outline-none border border-solid ${
          error ? "border-2 border-[#CD1818] mb-1" : "border-[#323232] mb-6"
        } py-2 rounded-md text-center`}
        value={dateOfBirth}
        onChange={(e) => handleInput(e.target.value)}
      />
      {error && (
        <p className="text-sm mx-auto mb-4 text-[#CD1818]">
          That doesn't look like a valid date
        </p>
      )}
      <button
        className="p-2 rounded-md border border-solid border-[#323232] w-full"
        onClick={handleEnter}
      >
        Enter
      </button>
    </div>
  );
};

export default EnterDateOfBirth;
