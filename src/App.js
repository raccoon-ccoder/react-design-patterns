import { SplitScreen } from "./components/split-screen";

const LeftSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "red" }}>{title}</h2>;
};

const RightSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "green" }}>{title}</h2>;
};

// 위 방법(props)보다 자식 요소를 하위 구성요소로 전달하는 방법이 훨씬 더 좋음
function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComponent title={"i am left"} />
      <RightSideComponent title={"i am right"} />
    </SplitScreen>
  );
}

export default App;
