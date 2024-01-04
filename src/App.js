import { LargeAuthorListItems } from "./components/2-8.list/authors/LargeListItems";
import { RegularList } from "./components/2-8.list/lists/Regular";
import { SmallAuthorListItems } from "./components/2-8.list/authors/SmallListItems";
import { authors } from "./components/2-8.list/data/authors";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItems}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItems}
      />
    </>
  );
}

export default App;
