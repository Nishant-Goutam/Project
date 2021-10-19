import logo from "./logo.svg";
import "./App.css";
import List from './components/List'
import Item from "./components/Item";
import data from './dummy.json';
console.log(data)
function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <List id = 'list-1'className = 'list' >
          {
            data.map((d, idx) => {
              return (<Item id = {`item-${d.id}`} key={idx} className='item' >
                <p>{ d.name}</p>
          </Item>)
            })
          }
        </List>

        <List id = 'list-2'className = 'list' >
          
        </List>
      </main>
    </div>
  );
}

export default App;
