import "./App.css";
import Header from "./Header.js";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { useState ,useEffect } from "react";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
      setAddItem((oldData) => {
        return [note, ...oldData];
      });
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="task_container">
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
