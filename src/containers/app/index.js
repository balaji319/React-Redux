import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Themes from '../themes'
  
import 'bootstrap/dist/css/bootstrap.css';


  
var style = { 

            backgroundColor: '#357ab7',
            borderColor: '#367ab7',
        };

var text_style={
        color: 'white',
}
const App = () => (
  <div >
    <header>
      <nav class="navbar navbar-inverse" style={style}>
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>                        
            </button>
            <a class="navbar-brand" href="#">Logo</a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#" ><Link to="/" style={text_style}>Home</Link></a></li>
              <li><a href="#"><Link to="/about-us" style={text_style}>About</Link></a></li>
              <li><a href="#"><Link to="/themes" style={text_style}>Themes </Link></a></li>
              <li><a href="#" style={text_style}>Contact</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> <Link to="/login" style={text_style}>Login </Link></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main >
<div class="container-fluid text-center">    
  <div class="row content">
    <div class="col-sm-2 sidenav">

    <div class="list-group">
        <span href="#" class="list-group-item active">
            Submenu
            <span class="pull-right" id="slide-submenu">
                <i class="fa fa-times"></i>
            </span>
        </span>
        <a href="#" class="list-group-item">
            <i class="fa fa-comment-o"></i> Lorem ipsum
        </a>
        <a href="#" class="list-group-item">
            <i class="fa fa-search"></i> Lorem ipsum
        </a>
        <a href="#" class="list-group-item">
            <i class="fa fa-user"></i> Lorem ipsum
        </a>
        <a href="#" class="list-group-item">
            <i class="fa fa-folder-open-o"></i> Lorem ipsum <span class="badge">14</span>
        </a>
        <a href="#" class="list-group-item">
            <i class="fa fa-bar-chart-o"></i> Lorem ipsumr <span class="badge">14</span>
        </a>
        <a href="#" class="list-group-item">
            <i class="fa fa-envelope"></i> Lorem ipsum
        </a>
    </div>  
    </div>
    <div class="col-sm-8 text-left"> 
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
       <Route exact path="/themes" component={Themes} />

    </div>
    <div class="col-sm-2 sidenav">
      <div class="well">
        <p>ADS</p>
      </div>
      <div class="well">
        <p>ADS</p>
      </div>
    </div>
  </div>
</div>
</main>
</div>
)

export default App
