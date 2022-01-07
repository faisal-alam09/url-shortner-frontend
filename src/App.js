import './App.css';
import Result from './Views/Result';

function App() {
  return (
    <div className='bg-dark text-white' style={{ position: 'relative', height: "100%", textAlign: 'center' }}>
      <div style={{ width: '50%', minWidth: "300px", position: 'relative', top: '20%', display: 'inline-block' }} >
        <div className="input-group input-group-lg">
          <input type="text" className="form-control" placeholder="URL" aria-describedby="sizing-addon1" />
        </div>
        <div className="input-group input-group-lg" style={{ left: '33%', top: '30px' }}>
          <button type="button" className="btn btn-primary">Generate Short Url</button>
        </div>
        <Result />
      </div>
    </div>
  );
}

export default App;
