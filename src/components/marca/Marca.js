import React, { useEffect, useState } from 'react'
import { obtenerTodos, guardar, editarPorId } from '../../services/MarcaServices';
import TablaModulos from '../interfaceUsuario/TablaModulos';
import Modal from './Modal';

export default function Marcas() {

  const [marcas, setMarcas] = useState([]);
  const [marca, setMarca] = useState({
    _id: '',
    nombre: '',
    estado: true
  });
  const [error, setError] = useState(false);
  const [hidden] = useState('hidden');
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    const getMarcas = () => {
        obtenerTodos()
        .then(r => {
            setMarcas(r.data)
        }).catch(e => {
            console.log(e)
        })
    }
    getMarcas();
  }, []);

  const changeMarca = e => {
    e.preventDefault();
    setMarca({
      ...marca,
      [e.target.name]: e.target.value 
    })
  }

  const addMarcas = e => {
    setLoading(true);
    e.preventDefault();
    console.log(marca);
    if(marca._id){
      editarMarca();
    }else{
      guardarEstado();
    }
    resetMarca();
  }

  const guardarEstado = () => {
    guardar(marca)
    .then(r => {
      setMarcas([...marcas, r.data]);
      changeError(false)
      setLoading(false);
    }).catch(e => {
      console.log(e);
      changeError(true);
      setLoading(false);
    })
  }

  const closeModal = () => {
    resetMarca()
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
      const estadoFilter = marcas.filter(est => est._id === id)[0];
      setMarca({
        ...estadoFilter
      });
    }, 500)
  }

  const editarMarca = () => {
    editarPorId(marca._id, marca)
    .then(r => {
      console.log(r.data._id)
      const id = r.data._id;
      if(!r.data.estado){
        const activos = marcas.filter(est => est._id !== id);
        setMarcas(activos);
      }
      changeError(false)
      setLoading(false);
    }).catch(e => {
      console.log(e);
      changeError(true);
      setLoading(false);
    })
  }

  const resetMarca = () => {
    setMarca({
      _id: '',
      nombre: '',
      estado: true
    })
  }

  return (
    <div className='container'>
      <button 
        onClick={resetMarca}
        type="button" 
        className="btn btn-outline-primary"
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal"
      >
        <i className="fa-solid fa-plus"></i>
        Agregar
      </button>
      <TablaModulos 
        componentes={marcas}
        openEditById={openEditById}
      />
      <Modal 
        marca={marca}
        loading={loading}
        closeModal={closeModal}
        hidden={hidden}
        changeEstado={changeMarca}
        error={error}
        add={addMarcas}
      />
    </div>
  )
}
