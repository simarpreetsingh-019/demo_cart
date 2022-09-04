import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
        

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" 
          href="#">
            First Demo Cart   
          <h4 className=''>
          
        </h4>
        </a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
          <i class="fa-solid fa-cart-arrow-down ">{this.props.countTotalItem}</i>
          </a>
        </li>
        </ul>
        
        
      </div>
    </nav>
    );
  }
}

export default Navbar;