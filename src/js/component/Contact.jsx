import React from "react";

function Contact(){

return(
    <div class="container" id="contacto">
        <div class="row justify-content-md-center">
            <div class="col-6">
        <div class="mb-3">
            <h3 class="mb-4 mt-2">¿Como podemos ayudarte?</h3>
  <label for="exampleFormControlInput1" class="form-label">Tu correo</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Tu mensaje</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button type="button" class="btn btn-lg btn-primary mt-3" disabled>Enviar</button>
</div>
</div>
</div>
    </div>
)


}

export default Contact