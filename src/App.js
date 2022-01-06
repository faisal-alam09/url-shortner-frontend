import logo from './logo.svg';
import './App.css';
import modal from './Views/modal';

function App() {
  return (
    <div className="App">
      <div className='container bg-dark text-white'>
        <div style={{ width: '50%', position: 'absolute', top: '30%', left: '24%' }} >
          <div class="input-group input-group-lg">
            <input type="text" class="form-control" placeholder="URL" aria-describedby="sizing-addon1" />
          </div>
          <div class="input-group input-group-lg" style={{left:'33%' , top:'30px'}}>
            <button type="button" class="btn btn-primary">Generate Short Url</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
