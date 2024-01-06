import { DatasourceLoader } from "./3-container/3-16.datasource/datasource-loader";
import { DatasourceLoaderWithRender } from "./3-container/3-17.datasource-render/datasource-loader-with-render";
import axios from "axios";

const getDataFromServer = async (resourcUrl) => {
  const response = await axios.get(resourcUrl);
  return response.data;
};

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const Message = ({ message }) => <h1>{message}</h1>;

function App() {
  return (
    <>
      <DatasourceLoaderWithRender
        getData={() => getDataFromLocalStorage("test")}
        render={(datasource) => <Message message={datasource} />}
      />
      <DatasourceLoader
        getData={() => getDataFromLocalStorage("test")}
        resourceName="message"
      >
        <Message />
      </DatasourceLoader>
    </>
  );
}

export default App;
