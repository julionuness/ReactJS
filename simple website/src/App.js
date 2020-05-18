import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component 
{
  hideToggle()
  {
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
  }

  render()
  {
    return (
      <div>
        <Layout>
            <Drawer>
                <Navigation>
                    <Link to="/" onClick={() => this.hideToggle()}>Login</Link>
                    <Link to="/dashboard" onClick={() => this.hideToggle()}>Dashboard</Link>
                    <Link to="/contact" onClick={() => this.hideToggle()}>Contact</Link>
                </Navigation>
            </Drawer>
            
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
