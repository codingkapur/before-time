import { useState } from "react";
import EnterDateOfBirth from "./components/enter-dob";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import EnterLifeExpectancy from "./components/enter-life-expectancy";
dayjs.extend(customParseFormat);

function App() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [error, setError] = useState(false);

  const validateInput = (input: string) => {
    return dayjs(input, "DD-MM-YYYY", true).isValid();
  };

  const handleInput = (input: string) => {
    setDateOfBirth(input);
  };
  const handleEnter = () => {
    if (!validateInput(dateOfBirth)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    // Main Container
    <div className="h-screen w-screen bg-[#212121] flex flex-col items-center justify-center text-[#F0EEED] p-4">
      {/* Type writer effect -> You're going to die one day. 
      We're alive for a limited amount of time. What do you want to do with that time?
      How much time do you have to do the things you want to do?
      Enter your date of birth  */}
      <EnterDateOfBirth
        handleInput={handleInput}
        dateOfBirth={dateOfBirth}
        handleEnter={handleEnter}
        error={error}
      />
      <EnterLifeExpectancy />
    </div>
  );
}

export default App;
