import React from 'react'

export default function Modal({marca, loading, closeModal, hidden, changeEstado, error, add}) {
  return (
<div 
    className="modal fade" id="exampleModal" 
    tabIndex="-1" 
    aria-labelledby="exampleModalLabel" 
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{marca._id ? 'Editar Estado': 'Nuevo Estado'}</h5>
          {
            (loading && <div class="spinner-grow spinner-grow-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>)
          }
          
          <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="modal" 
            aria-label="Close"
            onClick={closeModal}
          >
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={add}>
            <input type={hidden} name="_id" value={marca._id}></input>
            <div className="mb-3">
              <label 
                htmlFor="recipient-name" 
                className="col-form-label"
              >
                Nombre:
              </label>
              <input 
                disabled={marca._id ? true : false}
                readOnly={marca._id ? true : false}
                required
                value={marca.nombre}
                name="nombre"
                type="text" 
                className="form-control"
                onChange={changeEstado}                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label">Estado:</label>
              <select
                disabled={marca._id ? false : true}
                readOnly={marca._id ? false : true}
                required
                className="form-select" 
                aria-label="Default select example"
                value={marca.estado}
                name="marca"
                onChange={changeEstado}
              >
                <option value={true}>Activo</option>
                <option value={false}>Inactivo</option>
              </select>
            </div>
            <div className="modal-footer">
            <div className={error ? 'alert alert-danger': 'd-none'} role="alert">
              ??Ha ocurrido un error!
            </div>
              <button 
                type="button" 
                className="btn btn-secondary" data-bs-dismiss="modal"
                onClick={closeModal}
              >
                Close
              </button>
              {
                loading ? (<button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
                  </button>) : (<button type="submit" className="btn btn-primary">
                    Guardar
                  </button>)
              }
            </div>
          </form>
            </div>
        </div>
        </div>
    </div>
  )
}