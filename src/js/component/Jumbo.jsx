import React from "react";

function Jumbo(){

return(
<div class = "container">
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_Overwatch2WatchpointPack_image1600w.jpg" class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src="https://www.somosxbox.com/wp-content/uploads/2022/10/2x1_NSwitch_ReturnToMonkeyIsland_image1600w.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft_image1600w.jpg" class="d-block w-100 " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<hr class="mt-5" size="10px" color="black" />
</div>

);


}



export default Jumbo;