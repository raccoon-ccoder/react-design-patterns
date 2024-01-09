export const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1</h1>
      <button onClick={() => goNext({ name: "myName" })}>Next</button>
    </>
  );
};
export const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2</h1>
      <button onClick={() => goNext({ age: "10" })}>Next</button>
    </>
  );
};
export const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step #3</h1>
      <button onClick={() => goNext({ country: "korea" })}>Next</button>
    </>
  );
};
