import "./App.css";
import Header from "./components/Header";
// import { Fields } from './components/Fields';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const add = () => {
    setData([...data, { name: name, email: email }]);
    setName("");
    setEmail("");
  };

  const remove = (idx) => {
    let arr = data;
    arr.splice(idx, 1);
    setData([...arr]);
  };

  return (
    <div className="App">
      <Header></Header>

      {/* form section */}
      <div>
        <Stack className="form" direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={add} variant="contained">
            <AddIcon></AddIcon>
          </Button>
        </Stack>
      </div>

      {/* Data show */}
      <div className="datashow">
        <div className="datapart">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        <div>
          {data.map((ele, idx) => {
            return (
              <div key={idx} className="datapart">
                <h5>{ele.name}</h5>
                <h5>{ele.email}</h5>
                <Button
                  onClick={() => remove(idx)}
                  variant="outlined"
                  color="error"
                >
                  <DeleteIcon></DeleteIcon>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
