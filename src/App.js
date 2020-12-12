import React from 'react';
import './App.css';

import Login from './components/login/Login'
import Main from './components/content/Main'

import Delhi from './components/content/City/Delhi'
import Up from './components/content/City/Up'
import City from './components/content/comp/City'
import Listbut from './components/content/Listbut'
import Tasl from './components/content/Tasl'
import Page from './components/content/Page/Page'
import Togglepage from './components/content/toggle/Togglepage'
import Application from './components/content/checkbox/Application'
import Checkbox from './components/content/checkbox/Checkbox'
import Loggedin from './components/content/login/Loggedin'
import St from './components/content/stream/St'

import {Route,BrowserRouter as Router} from "react-router-dom"

import Punjab from './components/content/City/Punjab'
import Haryana from './components/content/City/Haryana'
import Mumbai from './components/content/City/Mumbai'
import Hp from './components/content/City/Hp'
import Uk from './components/content/City/Uk'
import Rajasthan from './components/content/City/Rajasthan'
import Gujrat from './components/content/City/Gujrat'
import Chennai from './components/content/City/Chennai'
import Heyd from './components/content/City/Heyd'
import Kol from './components/content/City/Kol'
import Aboutus from './components/content/Aboutus/Aboutus'
import User from './components/content/User/User'
// import Header from './components/demo1/layout/Header'

function App() {
  return (
    <Router>
      <div className="App" >

      <Route path="/" exact component={St}/>
      <Route path="/login" exact component={Loggedin}/>
      <Route path="/main" exact component={Main}/>
      <Route path='/main/delhi' exact component={Delhi} />
      <Route path='/main/up' exact component={Up} />
      <Route path='/main/punjab' exact component={Punjab} />
      <Route path='/main/haryana' exact component={Haryana} />
      <Route path='/main/mumbai' exact component={Mumbai} />
      <Route path='/main/hp' exact component={Hp} />
      <Route path='/main/uk' exact component={Uk} />
      <Route path='/main/rajasthan' exact component={Rajasthan} />
      <Route path='/main/gujrat' exact component={Gujrat} />
      <Route path='/main/chennai' exact component={Chennai} />
      <Route path='/main/heydrabad' exact component={Heyd} />
      <Route path='/main/kol' exact component={Kol} />
      <Route path='/helper' exact component={Page} />
      <Route path='/aboutus' exact component={Aboutus} />
      <Route path='/user' exact component={User} />
      </div>
    </Router>
  )
}

export default App;