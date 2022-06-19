import React, { useEffect, useState } from 'react'
import { obtenerTodosUsuarios } from '../../services/UsuarioServices';

export default function Modal({ inventario, changeInventario, loading }) {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const getUsuarios = () => {
            obtenerTodosUsuarios()
                .then(r => {
                    //console.log(r);
                    setUsuarios(r.data)
                }).catch(e => {
                    console.log(e)
                })
        }
        getUsuarios();
    }, []);
    return (
        <div
            className="modal fade" id="modalInventarios"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{inventario._id ? 'Editar Inventario' : 'Nuevo Inventario'}</h5>
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
                        >
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="needs-validation" noValidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="serial" className="form-label">Serial</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="serial"
                                        placeholder=""
                                        name="serial"
                                        value={inventario.serial}
                                        required
                                        onChange={changeInventario}
                                    />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="modelo" className="form-label">Modelo</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="modelo" placeholder=""
                                        required
                                        name="modelo"
                                        value={inventario.modelo}
                                        onChange={changeInventario}
                                    />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="descripcion" className="form-label">Descripción
                                        <span className="text-muted">(Optional)</span>
                                    </label>
                                    <div className="input-group has-validation">
                                        <textarea
                                            name="descripcion"
                                            className="form-control"
                                            id="descripcion"
                                            placeholder="Aquí descripción..."
                                            value={inventario.descripcion}
                                            onChange={changeInventario}
                                        />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="color" className="form-label">Color <span className="text-muted">(Optional)</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="color"
                                        placeholder="verde"
                                        name="color"
                                        value={inventario.color}
                                        onChange={changeInventario}
                                    />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="precio" className="form-label">Precio</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="precio"
                                        name="precio"
                                        placeholder="1000"
                                        value={inventario.precio}
                                        onChange={changeInventario}
                                    />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="usuario" className="form-label">Usuario</label>
                                    <select className="form-select" id="usuario" required="">
                                        <option value="">Selecciona uno...</option>
                                        {/* {usuarios.map(u => {
                                            return (
                                                <option value={u._id}>{u.nombre}</option>
                                            );
                                        })} */}
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="marca" className="form-label">Marca</label>
                                    <select className="form-select" id="marca" required="">
                                        <option value="">Selecciona uno...</option>
                                        {/* {usuarios.map(u => {
                                            return (
                                                <option value={u._id}>{u.nombre}</option>
                                            );
                                        })} */}
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="estado" className="form-label">Estado</label>
                                    <select className="form-select" id="estado" required="">
                                        <option value="">Selecciona uno...</option>
                                        {/* {usuarios.map(u => {
                                            return (
                                                <option value={u._id}>{u.nombre}</option>
                                            );
                                        })} */}
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="tipoEquipo" className="form-label">Tipo Equipo</label>
                                    <select className="form-select" id="tipoEquipo" required="">
                                        <option value="">Selecciona uno...</option>
                                        {/* {usuarios.map(u => {
                                            return (
                                                <option value={u._id}>{u.nombre}</option>
                                            );
                                        })} */}
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}