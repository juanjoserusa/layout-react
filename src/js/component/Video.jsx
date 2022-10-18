import React from "react";

function Video(){

    return (
        <div id="video">
        <div class="row justify-content-md-center ">
    <div class="col-6 mt-4 mb-4">
        <h1>Los mejores juegos de 2022</h1>
        <div class="embed-responsive embed-responsive-16by9 ">
        <iframe class="mt-3" width="560" height="315" src="https://www.youtube.com/embed/WPK5ts0i1nk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
        </div>
        <div class="container">
        <div class="row">
        <hr class="mt-3" size="10px" color="black" />
        </div>
        </div>
    

</div>
    )
}

export default Video