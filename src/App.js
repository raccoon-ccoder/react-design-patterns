import {
  StepOne,
  StepThree,
  StepTwo,
} from "./4-controllered&uncontrollered/components/Steps";

import { UncontrolledFlow } from "./4-controllered&uncontrollered/4-23.uncontrolled-flow/uncotrolled-flow";

function App() {
  return (
    <>
      <UncontrolledFlow
        onDone={(data) => {
          console.log(data);
          alert("Done");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
}

export default App;
