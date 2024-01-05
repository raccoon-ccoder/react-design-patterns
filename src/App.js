import { LargeBookListItem } from "./components/2-8.list/books/LargeListItems";
import { Modal } from "./components/2-10.modal/Modal";
import { books } from "./components/2-8.list/data/books";

function App() {
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
    </>
  );
}

export default App;
