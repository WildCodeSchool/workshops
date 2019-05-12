import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="logo" src="https://pastebin.com/i/pastebin_logo_side_outline.png" alt="pastebin" />
      <form className="col-10 offset-1">
        <div className="form-group">
          <label htmlFor="api_paste_name">Filename</label>
          <input type="text" className="form-control" id="api_paste_name" name="api_paste_name" />
        </div>
        <div className="form-group">
          <label htmlFor="api_paste_expire_date">Expiration</label>
          <select className="custom-select" id="api_paste_expire_date" name="api_paste_expire_date">
            <option value="10M" selected>10 Minutes</option>
            <option value="1H" >1 Hour</option>
            <option value="1D" >1 Day</option>
          </select>
        </div>
        <div class="form-group">
          <label for="api_paste_code">Code</label>
          <textarea class="form-control" id="api_paste_code" name="api_paste_code" rows="3"></textarea>
        </div>
        <input type="hidden" name="api_paste_private" value="0" />
        <input type="hidden" name="api_option" value="paste" />
        <input type="hidden" name="api_user_key" value="" />
        <input type="hidden" name="api_dev_key" value="dc2d94ed4b463f7ee5e73cb4fac5a18f" />
        <div className="form-group">
          <button type="submit" className="btn btn-info">Submit</button>
        </div>
        <p>Your link is: ~~~~</p>
      </form>


    </div>
  );
}

export default App;
