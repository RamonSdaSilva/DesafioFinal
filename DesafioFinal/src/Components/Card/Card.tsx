import { useState } from 'react';
import { useInfoData } from '../../hooks/useInfoData';
import ModalExcluir from '../Modal/ModalExcluir';

interface CardProps {
  foto: string;
  descricao: string;
}

export function Card({ foto, descricao }: CardProps) {
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

  const toggleOpcoes = () => {
    setMostrarOpcoes(!mostrarOpcoes);
  };

  const [coracaoVermelho, setCoracaoVermelho] = useState(false);

  const handleClick = () => {
    setCoracaoVermelho(!coracaoVermelho);
    setContadorCliques(contadorCliques + 1);
  };

  const [contadorCliques, setContadorCliques] = useState(0);

  const { INFO } = useInfoData();

  const [modalOpen, setModalOpen] = useState(false);

  const fecharModal = () => {
    setModalOpen(false);
  };

  return (
    <div className=" bg-white border rounded-lg shadow-lg p-4 hover:shadow-xl relative items-center justify-center mt-10">
      {INFO?.map((infoData) => (
        <div className='flex'>
          <div key={infoData.id} className="relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border-2 border-gray-500">
            <img src={infoData.foto}></img>
          </div>
          <div className='flex ml-2 mt-1 text-gray-500'>
            <h2 className='text-[20px]'>@{infoData.username}</h2>
          </div>
        </div>
      ))}
      <h1 className='mt-2 text-gray-500'>{descricao}</h1>
      <img src={foto} className="w-[314px] h-96 rounded-md items-center justify-center mt-4 mb-8" />
      <div className="flex items-center">
        <button
          onClick={handleClick}
          className={`flex bg-transparent border-none outline-none cursor-pointer ${coracaoVermelho ? 'text-red-500' : 'text-gray-500'
            }`}
        >
          <svg className="" width="30" height="30" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 11.9507C44 25.4435 23.6127 36.3649 22.7445 36.816C22.5156 36.9368 22.2598 37 22 37C21.7402 37 21.4844 36.9368 21.2555 36.816C20.3873 36.3649 0 25.4435 0 11.9507C0.00363931 8.7823 1.2879 5.74466 3.57104 3.50423C5.85418 1.26381 8.94973 0.00357122 12.1786 0C16.2348 0 19.7862 1.71165 22 4.60489C24.2137 1.71165 27.7652 0 31.8214 0C35.0503 0.00357122 38.1458 1.26381 40.429 3.50423C42.7121 5.74466 43.9964 8.7823 44 11.9507Z" fill="#F37671" />
          </svg>

        </button>
        <p className='ml-4'>{contadorCliques} Curtidas</p>
      </div>
      {mostrarOpcoes && (
        <div className="absolute top-0 right-0 mt-2 mr-10 flex flex-col bg-white border rounded-lg shadow-lg">
          <button className="px-4 py-2 hover:bg-gray-100" onClick={editarCard}>
            Editar
          </button>
          <div>
            <button className="px-4 py-2 hover:bg-gray-100" onClick={excluirCard}>
              Excluir
              <ModalExcluir isOpen={modalOpen} onClose={fecharModal} children={undefined}/> 
            </button>
            
          </div>
        </div>
      )}
      <button
        className="absolute text-2xl top-2 right-2 transform rotate-90"
        onClick={toggleOpcoes}
      >
        ...
      </button>
    </div>
  );

  function editarCard() {
  }

  function excluirCard() {
  }
}
