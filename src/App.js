import { SplitScreen } from "./components/split-screen";

const SideComponent = ({ title, backgroundColor }) => {
  return <h2 style={{ backgroundColor }}>{title}</h2>;
};

function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <SideComponent title={"i am left"} backgroundColor={"green"} />
      <SideComponent title={"i am right"} backgroundColor={"red"} />
    </SplitScreen>
  );
}

export default App;
