import React from "react";

function Navbar(){



return(
<div>
<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
  <img src="https://cdn.icon-icons.com/icons2/1829/PNG/512/gamepad-115834_115795.png" alt="Bootstrap" width="30" height="24"/>
    <a class="navbar-brand ms-5 " href="#">Gamers Life</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse ms-4 " id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#noticias">Noticias</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#video">Video</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

);


}



export default Navbar;