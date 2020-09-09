import React ,{useEffect ,useState}from 'react';

function App() {
  const [state, setstate] = useState([{}]);
  useEffect(() => {
    setInterval(() => {
 fetch("/api/books")
 .then(res=>res.json())
 .then(data=>{ setstate(data);})
}, 2000)
  }, []) 
  const addbook=()=>{
       const title=prompt("Enter the Book name")
       const author=prompt("Enter the Book Author name")
       fetch("/api/add",{
         method: "POST",
         body: JSON.stringify({title,author})
        })
         .then(res=>res.json())
          .then(data=>(data))
     
  }
  return (
    <div className="App">
    {state.map((boo ,ind )=>{return(<h2 key={ind}>Book Name is {boo.title} and his Author is {boo.author}</h2>)})}
    <button   onClick={addbook}>Add Book</button>
    </div>
  );
}

export default App;
