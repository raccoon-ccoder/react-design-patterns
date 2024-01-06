import { BookInfo } from "./3-container/components/book-info";
import { ResourceLoader } from "./3-container/3-15.datasource/resource-loader";
import { UserInfo } from "./3-container/components/user-info";

function App() {
  return (
    <>
      <ResourceLoader resourceUrl={"/users/2"} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl={"/books/1"} resourceName={"book"}>
        <BookInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
