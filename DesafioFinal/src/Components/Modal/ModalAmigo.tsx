import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAmigos: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white w-80 h-96 rounded-lg z-50">
      <button
          onClick={onClose}
          className="text-red-500 ml-64 font-semibold py-2 px-4 rounded mt-4"
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
        <h2 className="text-xl font-semibold mb-4 ml-8">Amigos</h2>
        <hr className="border-t border-gray-400 mb-4 ml-3 mr-3" />
      </div>
    </div>
  );
};

export default ModalAmigos;
