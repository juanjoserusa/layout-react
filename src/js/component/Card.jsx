import React from "react";


function Card(){
return (<div id="noticias"class="container">
<div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
  <div class="col">
    <div class="card h-100 border border-2">
      <img src="https://pbs.twimg.com/media/FdWUJKUXoAEaSeG.jpg:large" class="rounded card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Nueva temporada activa</h5>
        <h6 class="card-subtitle fw-light fst-italic">Overwatch 2</h6>
        <p class="card-text">Activision Blizzard muestra parte del contenido que llegará con la primera temporada disponible a partir del 4 de octubre</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 border border-2">
      <img src="https://as01.epimg.net/meristation/imagenes/2022/10/17/noticias/1666008613_095594_1666008698_noticia_normal.jpg" class="rounded card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">Anunciada la versión 1.20</h5>
        <h6 class="card-subtitle fw-light fst-italic">Minecraft</h6>
        <p class="card-text">El Minecraft Live 2022 ha terminado, lo cual ha supuesto un torrente de novedades para las obras de Mojang.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 border border-2">
      <img src="https://as01.epimg.net/meristation/imagenes/2022/06/29/noticias/1656485441_143214_1656485489_noticia_normal.jpg" class="card-img-top rounded" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">Todo lo que debes saber sobre Monkey Island</h5>
        <h6 class="card-subtitle fw-light fst-italic">Monkey Island</h6>
        <p class="card-text">Todo sobre la nueva aventura gráfica Return to Monkey Island de Ron Gilbert: trama, jugabilidad, diseño, fecha de lanzamiento y plataformas.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 border border-2">
      <img src="https://i.blogs.es/8bb7d2/header-jan18/450_1000.webp" class="rounded card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">Microsoft compra Activision-Blizzard</h5>
        <h6 class="card-subtitle fw-light fst-italic">Noticias</h6>
        <p class="card-text">¡Bombazo! Microsoft compra Activision Blizzard por 68.700 millones de dólares en la mayor operación de la historia de los videojuegos</p>
      </div>
    </div>
  </div>
</div>
<hr class="mt-5" size="10px" color="black" />
</div>);

}

export default Card