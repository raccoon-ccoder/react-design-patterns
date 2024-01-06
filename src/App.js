import { UserInfo } from "./3-container/components/user-info";
import { UserLoader } from "./3-container/3-14.user/user-loader";

function App() {
  return (
    <>
      <UserLoader userId={"1"}>
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
