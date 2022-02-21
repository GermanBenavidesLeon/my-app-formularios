import React, { Fragment } from 'react';
import './formulary.css'



const FormularyUser = () => {
  return (
    <Fragment>
      <form class="row g-8 formulary">
        <div class="col-9 mt-2 mx-4">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Jon Doe"/>
        </div>
        <div class="col-md-9 mx-4">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4"/>
        </div>
        <div class="col-md-9 mx-4">
            <label for="inputEmail5" class="form-label">Confirmar Email</label>
            <input type="email" class="form-control" id="inputEmail5"/>
        </div>
        <div class="col-md-9 mx-4">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4"/>
        </div>
        <div class="col-md-4 mx-4">
            <label for="inputState" class="form-label">Select Role</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Admon</option>
              <option>User</option>
            </select>
        </div>
        <div class="col-md-9 mb-3 mx-4">
            <label for="formFileMultiple" class="form-label">Upload your photo</label>
            <input class="form-control" type="file" id="formFileMultiple" multiple/>
        </div>
        <div class="col-10 mb-3 mx-4">
            <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
    </Fragment>
  )
}

export default FormularyUser