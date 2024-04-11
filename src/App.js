import Header from './component/header';
import './App.css';
import Title from './component/title';
import Card from './component/card1';
import Card2 from './component/card2';
import Card3 from './component/card3';
import Card4 from './component/card4';

function App() {
  return (
    <div className="">
      <Header />
      <Title />

      <div className='flex'>
        <Card />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
    </div>
  );
}

export default App;
