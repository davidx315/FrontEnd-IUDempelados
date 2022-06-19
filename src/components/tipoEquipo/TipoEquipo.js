import React, { useEffect, useState } from 'react'
import { obtenerTodos, guardar, editarPorId } from '../../services/TipoEquipoServices';
import Tabla from './Tabla';
import Modal from './Modal';

export default function TipoEquipo() {

  const [tipoEquipos, setTipoEquipos] = useState([]);
  const [tipoEquipo, setTipoEquipo] = useState({
    _id: '',
    nombre: '',
    estado: true
  });
  const [error, setError] = useState(false);
  const [hidden] = useState('hidden');
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    const getTipoEquipos = () => {
        obtenerTodos()
        .then(r => {
            //console.log(r);
            setTipoEquipos(r.data)
        }).catch(e => {
            console.log(e)
        })
    }
    getTipoEquipos();
  }, []);

  const changeEstado = e => {
    e.preventDefault();
    setTipoEquipo({
      ...tipoEquipo,
      [e.target.name]: e.target.value 
    })
  }

  const add = e => {
    setLoading(true);
    e.preventDefault();
    console.log(tipoEquipo);
    if(tipoEquipo._id){
      editarEstado();
    }else{
      guardarEstado();
    }
    resetEstado();
  }

  const guardarEstado = () => {
    guardar(tipoEquipo)
    .then(r => {
      setTipoEquipos([...tipoEquipos, r.data]);
      changeError(false)
      setLoading(false);
    }).catch(e => {
      console.log(e);
      changeError(true);
      setLoading(false);
    })
  }

  const closeModal = () => {
    resetEstado()
    changeError(false)
  }

  const changeError = e => {
    setError(e);
  }

  const openEditById = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const id = e.target.getAttribute('data');
      console.log(id)
      const estadoFilter = tipoEquipos.filter(est => est._id === id)[0];
      setTipoEquipo({
        ...estadoFilter
      });
    }, 500)
  }

  const editarEstado = () => {
    editarPorId(tipoEquipo._id, tipoEquipo)
    .then(r => {
      console.log(r.data._id)
      const id = r.data._id;
      if(!r.data.estado){
        const activos = tipoEquipos.filter(est => est._id !== id);
        setTipoEquipos(activos);
      }
      changeError(false)
      setLoading(false);
    }).catch(e => {
      console.log(e);
      changeError(true);
      setLoading(false);
    })
  }

  const resetEstado = () => {
    setTipoEquipo({
      _id: '',
      nombre: '',
      estado: true
    })
  }

  return (
    <div className='container'>
      <button 
        onClick={resetEstado}
        type="button" 
        className="btn btn-outline-primary"
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal"
      >
        <i className="fa-solid fa-plus"></i>
        Agregar
      </button>
      <Tabla
        componentes={tipoEquipos}
        openEditById={openEditById}
      />
      <Modal 
        estado={tipoEquipo}
        loading={loading}
        closeModal={closeModal}
        hidden={hidden}
        changeEstado={changeEstado}
        error={error}
        add={add}
      />
    </div>
  )
}
