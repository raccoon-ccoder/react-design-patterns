import {
  StepFourth,
  StepOne,
  StepThree,
  StepTwo,
} from "./4-controllered&uncontrollered/components/Steps";

import { ControlledFlow } from "./4-controllered&uncontrollered/4-25.controlled-flow/cotrolled-flow";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onNext = (dataFromStep) => {
    const nextStepIndex = currentStepIndex + 1;
    const newData = { ...data, ...dataFromStep };

    setCurrentStepIndex(nextStepIndex);
    setData(newData);
  };

  return (
    <ControlledFlow currentIndex={currentStepIndex} onNext={onNext}>
      <StepOne />
      <StepTwo />
      {data.age > 25 && <StepThree />}
      <StepFourth />
    </ControlledFlow>
  );
}

export default App;
