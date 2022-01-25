
import Result from './Result';
import { useState, Suspense } from "react";

import './style.css'

import Header from './Header';
import Footer from './Footer';

import axios from "axios";

import { ApiEndPoint } from '../config';

function Home() {
  const baseUrl = window.location.href;
  const [url, setUrl] = useState("");
  const [targetUrl, settargetUrl] = useState("")
  const [loadDynamicComp, setLoadDynamicComp] = useState(0);

  function submitForm(e) {
    e.preventDefault();
    axios.get(ApiEndPoint + '/registerUrl' , {
      params: {
        url: url
      }
  }).then(resp => {
      console.log("Get Target ", resp.data.message)
      settargetUrl(resp.data.message.target_url)
      setLoadDynamicComp(1)
    });
  }

  return (
    <>
      <Header />
      <div className='bg-dark text-white Home' >
        <div style={{ width: '50%', minWidth: "300px", position: 'relative', padding: '30px 0px 10px 0px', display: 'inline-block' }} >
          <div style={{ display: 'inline-flex' }}>
            <h1>Url-Shortner</h1>
            <h4>(24x7 service)</h4>
          </div>
          <form onSubmit={submitForm}>
            <div className="input-group input-group-lg">
              <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} className="form-control" placeholder="URL" aria-describedby="sizing-addon1" />
            </div>
            <div className="input-group input-group-lg" style={{ padding: '10px', display: 'inline-block' }}>
              <button type="submit" className="btn btn-primary">Generate Short Url</button>
            </div>
          </form>
          {loadDynamicComp ? (
            <Suspense fallback={<div>Loading Result....</div>}>
              <Result url={targetUrl} baseUrl={baseUrl} />
            </Suspense>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
