import { CurrentUserLoader } from "./3-container/3-13.currentUser/current-user-loader";
import { UserInfo } from "./3-container/components/user-info";

function App() {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
}

export default App;
