import './App.css';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import Models from './components/Models';
import UploadFile from './components/UploadFile'

function App() {
  return (
    <div className="App">
      <Header />
      <UploadFile />
      <ImageGrid />
    </div>
  );
}

export default App;
