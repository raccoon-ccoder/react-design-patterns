import { LargeAuthorListItems } from "./components/2-8.list/authors/LargeListItems";
import { LargeBookListItem } from "./components/2-8.list/books/LargeListItems";
import { NumberedList } from "./components/2-8.list/lists/Numbered";
import { RegularList } from "./components/2-8.list/lists/Regular";
import { SmalBookListItem } from "./components/2-8.list/books/SmallListItems";
import { SmallAuthorListItems } from "./components/2-8.list/authors/SmallListItems";
import { authors } from "./components/2-8.list/data/authors";
import { books } from "./components/2-8.list/data/books";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItems}
      />
      <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItems}
      />
      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={SmalBookListItem}
      />
      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeBookListItem}
      />
    </>
  );
}

export default App;
