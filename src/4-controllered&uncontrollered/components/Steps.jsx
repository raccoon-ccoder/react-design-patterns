export const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1: Enter your name:</h1>
      <button onClick={() => goNext({ name: "myName" })}>Next</button>
    </>
  );
};
export const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2: Enter your age:</h1>
      <button onClick={() => goNext({ age: "26" })}>Next</button>
    </>
  );
};
export const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Finished!</h1>
      <button onClick={() => goNext({})}>Next</button>
    </>
  );
};
export const StepFourth = ({ goNext }) => {
  return (
    <>
      <h1>Step #4: Enter your country</h1>
      <button onClick={() => goNext({ country: "korea" })}>Next</button>
    </>
  );
};
