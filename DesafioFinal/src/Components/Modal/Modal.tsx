import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    background: 'your-color-here',
    border: 'none',
    borderRadius: '8px',
    padding: '20px',
  },
};

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (photoLink: string, description: string) => void;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  const [photoLink, setPhotoLink] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const postData = {
      descricao: description,
      foto: photoLink,
    };
  
    try {
      await postRequest(postData);
      setDescription('');
      setPhotoLink('');
      onRequestClose();
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Adicionar Link da Foto" style={customStyles}>
      <div className="p-4 rounded-[50px] shadow-md bg-white mt-40 ml-80 mr-80">
        <div className='flex'>
        <h2 className="text-xl font-bold mb-4 ml-10 mr-56 mt-4">Criar Nova Publicação</h2>
        <button
              onClick={onRequestClose} 
              className="px-4 py-2 text-red-400 focus:outline-none"
            >
              <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
            </button>
            </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Insira um Link"
            value={photoLink}
            onChange={(e) => setPhotoLink(e.target.value)}
            className="w-72 ml-12 p-2 border border-gray-300 rounded-lg mb-4"
          />
          <input
            type="text"
            placeholder="Insira uma descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-72 ml-12 p-2 border border-gray-300 rounded-lg"
          />
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="ml-2 mr-8 px-4 py-2 bg-red-400 text-white rounded-lg focus:outline-none"
            >
              Compartilhar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

const postRequest = async (postData: { descricao: string; foto: string; }) => {
    try {
      const response = await axios.post('http://localhost:8080/postagem', postData);
      console.log('Resposta da solicitação POST:', response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {

          console.error('Erro de resposta:', error.response.data);
        } else if (error.request) {
          console.error('Erro de solicitação:', error.request);
        } else {
          console.error('Erro geral:', error.message);
        }
      } else {
        console.error('Erro desconhecido:', error);
      }
    }
  };


export default CustomModal;
