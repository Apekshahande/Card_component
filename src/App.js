
import './App.css';
import Card1 from './components/Card1'

function App() {
  return (
    <div className="App">
       <Card1 name = "Nature" Thought = "This Painting Shows the Bond Between Humans and Nature, Look deep into nature, and then you will understand everything better."  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMdYlQFxYimxd6iNERSgEsDcALykernUQ5g&usqp=CAU"> </Card1>

      <Card1 name = "Nature Lover"  Thought= "I Love to spend time with Nature."  img = "https://mk0unseenjapanyswfhm.kinstacdn.com/wp-content/uploads/2020/01/pixta_35581928_S.jpg" className = "image"></Card1>
      <Card1 name = "Nature Friend" Thought = "Save the Tree." img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrZZEeJOqgpYbvt1BPz0cVBuB5hDYoSUPrw&usqp=CAU" ></Card1>
      
    </div>
  );
}

export default App;
