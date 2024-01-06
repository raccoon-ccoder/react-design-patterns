import { BookInfo } from "./3-container/components/book-info";
import { DatasourceLoader } from "./3-container/3-16.datasource/datasource-loader";
import { DatasourceLoaderWithRender } from "./3-container/3-17.datasource-render/datasource-loader-with-render";
import { UserInfo } from "./3-container/components/user-info";
import axios from "axios";

const getDataFromServer = async (resourcUrl) => {
  const response = await axios.get(resourcUrl);
  return response.data;
};

function App() {
  return (
    <>
      <DatasourceLoaderWithRender
        getData={() => getDataFromServer("/users/3")}
        render={(datasource) => <UserInfo user={datasource} />}
      ></DatasourceLoaderWithRender>
      <DatasourceLoader
        getData={() => getDataFromServer("/books/3")}
        resourceName={"book"}
      >
        <BookInfo />
      </DatasourceLoader>
    </>
  );
}

export default App;
