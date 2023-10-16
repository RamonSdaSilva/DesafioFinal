import { useEffect, useState } from "react";
import CustomModal from "../Modal/Modal";
import { Postagem } from "../../interface/Postagem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CardFeed } from "../Card/CardFeed";
import ModalAmigos from "../Modal/ModalAmigo";

export function Feed() {
  const [, setPostagens] = useState<Postagem[]>([]);

  useEffect(() => {
    async function fetchPostagens() {
      try {
        const response = await axios.get<Postagem[]>('http://localhost:8080/postagem');

        setPostagens(response.data);
      } catch (error) {
        console.error('Erro ao buscar as postagens:', error);
      }
    }

    fetchPostagens();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (photoLink: string) => {
    console.log('Link da foto:', photoLink);
    closeModal();
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Dashboard');
  }

  const handleClickConfig = () => {
    navigate("/Configuracao");
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModalAmigo = () => {
    setIsOpen(true);
  };

  const closeModalAmigo = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex h-screen">
      <nav className="w-1/6 p-4 ml-4">
        <div className="relative flex items-center">
          <span className="ml-2">
            <svg width="187" height="37" viewBox="0 0 187 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M52.2941 7.29622H50.1797C49.0679 7.29622 48.2142 7.57417 47.6186 8.13006C47.0428 8.68596 46.755 9.59921 46.755 10.8698H45.8616V8.33852C45.8616 6.75025 46.7053 5.95612 48.3929 5.95612H62.3895V7.29622H56.1655V25.611H52.2941V7.29622Z" fill="#303030" />
              <path d="M68.3137 25.9088C66.9438 25.9088 65.7427 25.5911 64.7103 24.9558C63.6779 24.3205 62.8738 23.4569 62.2981 22.3649C61.7422 21.2532 61.4642 20.0024 61.4642 18.6127C61.4642 17.0641 61.7422 15.7438 62.2981 14.6519C62.8738 13.56 63.658 12.736 64.6507 12.1802C65.6434 11.6044 66.7651 11.3165 68.0159 11.3165C69.2468 11.3165 70.3586 11.5647 71.3512 12.061C72.3439 12.5574 73.1281 13.2622 73.7039 14.1754C74.2796 15.0688 74.5675 16.1012 74.5675 17.2726C74.5675 17.6498 74.5476 18.0766 74.5079 18.5531L74.4484 19.1487H65.4846C65.4846 21.0348 65.7724 22.4146 66.3482 23.2881C66.9239 24.1418 67.728 24.5687 68.7604 24.5687C69.7133 24.5687 70.5075 24.3602 71.1428 23.9433C71.7979 23.5065 72.4233 22.8911 73.0189 22.0969L73.9421 22.7819C73.3664 23.6753 72.6417 24.4198 71.7682 25.0154C70.9145 25.611 69.763 25.9088 68.3137 25.9088ZM70.5472 17.8086C70.5472 15.9424 70.3288 14.6221 69.892 13.8478C69.4552 13.0537 68.8299 12.6566 68.0159 12.6566C67.2614 12.6566 66.646 13.0636 66.1695 13.8776C65.7129 14.6718 65.4846 15.9821 65.4846 17.8086H70.5472Z" fill="#303030" />
              <path d="M81.4404 25.9088C79.8323 25.9088 78.5815 25.5514 77.6881 24.8367C76.8146 24.1021 76.3778 23.1194 76.3778 21.8885C76.3778 20.8958 76.6061 20.0719 77.0627 19.4167C77.5392 18.7616 78.3631 18.2652 79.5345 17.9277C80.7058 17.5902 82.3338 17.4215 84.4184 17.4215H84.8651C84.8651 15.6942 84.6269 14.4732 84.1504 13.7585C83.6739 13.0239 82.9691 12.6566 82.036 12.6566C81.2617 12.6566 80.6264 12.8452 80.1301 13.2225C79.6338 13.5997 79.2764 14.3045 79.058 15.3368H77.4201C77.4201 14.6618 77.4598 14.0861 77.5392 13.6096C77.6385 13.1331 77.8469 12.7162 78.1646 12.3588C78.7801 11.664 80.2691 11.3165 82.6316 11.3165C84.617 11.3165 86.1258 11.8426 87.1582 12.8949C88.2104 13.9273 88.7365 15.4857 88.7365 17.5704V25.611H86.2052L85.1629 24.2709H85.014C84.8353 24.5488 84.5574 24.8268 84.1802 25.1047C83.5052 25.6408 82.5919 25.9088 81.4404 25.9088ZM82.3338 24.4198C82.7507 24.4198 83.1081 24.3404 83.4059 24.1815C83.7037 24.0028 83.9916 23.7646 84.2695 23.4668C84.5276 23.1889 84.7261 22.8613 84.8651 22.4841V18.7616H84.4184C83.0088 18.7616 81.9864 19.0196 81.3511 19.5358C80.7158 20.0322 80.3981 20.8164 80.3981 21.8885C80.3981 22.7025 80.5669 23.3278 80.9044 23.7646C81.2419 24.2014 81.7184 24.4198 82.3338 24.4198Z" fill="#303030" />
              <path d="M98.5072 25.9088C96.9785 25.9088 95.6781 25.5812 94.606 24.926C93.5339 24.2709 92.7199 23.3973 92.164 22.3054C91.628 21.1936 91.36 19.9627 91.36 18.6127C91.36 17.2626 91.628 16.0416 92.164 14.9497C92.7199 13.8379 93.5339 12.9544 94.606 12.2993C95.6781 11.6441 96.9785 11.3165 98.5072 11.3165C100.89 11.3165 102.428 11.664 103.123 12.3588C103.461 12.6963 103.669 13.143 103.748 13.6989C103.828 14.2548 103.868 15.1979 103.868 16.528H102.974C102.895 15.2773 102.508 14.3243 101.813 13.6692C101.118 12.9941 100.165 12.6566 98.9539 12.6566C97.862 12.6566 96.9884 13.1629 96.3332 14.1754C95.6979 15.1681 95.3803 16.6472 95.3803 18.6127C95.3803 22.5833 96.6211 24.5687 99.1028 24.5687C100.056 24.5687 100.85 24.3602 101.485 23.9433C102.14 23.5065 102.766 22.8911 103.361 22.0969L104.285 22.7819C103.709 23.6753 102.984 24.4198 102.111 25.0154C101.237 25.611 100.036 25.9088 98.5072 25.9088Z" fill="#303030" />
              <path d="M106.848 9.82753C106.848 8.815 106.709 8.0705 106.431 7.59402C106.154 7.09769 105.598 6.84952 104.764 6.84952H104.466V5.95612H108.04C108.754 5.95612 109.3 6.07524 109.678 6.31348C110.055 6.55172 110.323 6.94879 110.482 7.50468C110.64 8.04072 110.72 8.815 110.72 9.82753V12.4482C110.898 12.3092 111.206 12.1206 111.643 11.8824C112.437 11.5051 113.221 11.3165 113.996 11.3165C115.604 11.3165 116.944 11.7335 118.016 12.5673C119.108 13.3813 119.654 14.7809 119.654 16.7663V25.611H115.782V16.9152C115.782 15.4857 115.524 14.4434 115.008 13.7883C114.512 13.1331 113.877 12.8055 113.102 12.8055C112.566 12.8055 112 12.9842 111.405 13.3416C111.167 13.4806 110.938 13.6493 110.72 13.8478V25.611H106.848V9.82753Z" fill="#303030" />
              <path d="M128.973 31.567C126.71 31.567 124.923 31.1997 123.613 30.4651C122.323 29.7504 121.677 28.5791 121.677 26.9511C121.677 25.9584 122.074 25.1345 122.868 24.4793C123.663 23.8242 124.606 23.3576 125.698 23.0797C124.804 22.8017 124.357 22.2558 124.357 21.4418C124.357 20.7667 124.755 20.2704 125.549 19.9528C124.695 19.655 123.98 19.1388 123.405 18.4042C122.849 17.6696 122.571 16.8556 122.571 15.9622C122.571 14.3342 123.146 13.153 124.298 12.4184C125.469 11.6838 127.028 11.3165 128.973 11.3165H135.227V12.1206L132.547 12.478C133.381 12.7956 134.056 13.282 134.572 13.9372C135.108 14.5923 135.376 15.2674 135.376 15.9622C135.376 17.5902 134.82 18.7616 133.708 19.4763C132.616 20.191 131.038 20.5484 128.973 20.5484C127.941 20.5484 127.187 20.6079 126.71 20.727C126.234 20.8263 125.995 21.0645 125.995 21.4418C125.995 21.7594 126.234 21.9679 126.71 22.0671C127.187 22.1664 127.941 22.226 128.973 22.2458C131.118 22.2855 132.865 22.7124 134.215 23.5264C135.585 24.3205 136.27 25.4621 136.27 26.9511C136.27 28.5791 135.614 29.7504 134.304 30.4651C133.014 31.1997 131.237 31.567 128.973 31.567ZM128.973 19.3572C130.562 19.3572 131.356 18.2255 131.356 15.9622C131.356 14.8504 131.137 13.9967 130.701 13.4011C130.264 12.8055 129.688 12.5077 128.973 12.5077C128.239 12.5077 127.653 12.7956 127.216 13.3714C126.799 13.9471 126.591 14.8107 126.591 15.9622C126.591 18.2255 127.385 19.3572 128.973 19.3572ZM128.973 30.2269C130.006 30.2269 130.81 29.9489 131.386 29.393C131.961 28.857 132.249 28.043 132.249 26.9511C132.249 26.0775 131.971 25.3529 131.415 24.7771C130.879 24.1815 130.145 23.7944 129.212 23.6157L127.812 23.4668C127.117 23.7646 126.591 24.1915 126.234 24.7474C125.876 25.3032 125.698 26.0378 125.698 26.9511C125.698 28.043 125.985 28.857 126.561 29.393C127.137 29.9489 127.941 30.2269 128.973 30.2269Z" fill="#303030" />
              <path d="M148.195 11.9121C148.552 12.1702 148.81 12.4581 148.969 12.7758C149.128 13.0736 149.207 13.2324 149.207 13.2522L147.688 14.4137C147.549 14.235 147.371 14.0464 147.152 13.8478C146.715 13.4508 146.209 13.2522 145.633 13.2522C144.482 13.2522 143.599 13.56 142.983 14.1754L143.043 14.6221C143.082 14.9795 143.102 15.3071 143.102 15.6049V25.611H139.231V15.4857C139.231 14.4732 139.092 13.7287 138.814 13.2522C138.556 12.7559 138.01 12.5077 137.176 12.5077H136.878V11.6143H139.826C140.501 11.6143 141.027 11.7037 141.405 11.8824C141.802 12.0412 142.11 12.3191 142.328 12.7162C143.4 11.7831 144.651 11.3165 146.08 11.3165C146.934 11.3165 147.639 11.5151 148.195 11.9121Z" fill="#303030" />
              <path d="M155.222 25.9088C153.614 25.9088 152.363 25.5514 151.469 24.8367C150.596 24.1021 150.159 23.1194 150.159 21.8885C150.159 20.8958 150.387 20.0719 150.844 19.4167C151.321 18.7616 152.144 18.2652 153.316 17.9277C154.487 17.5902 156.115 17.4215 158.2 17.4215H158.646C158.646 15.6942 158.408 14.4732 157.932 13.7585C157.455 13.0239 156.75 12.6566 155.817 12.6566C155.043 12.6566 154.408 12.8452 153.911 13.2225C153.415 13.5997 153.058 14.3045 152.839 15.3368H151.201C151.201 14.6618 151.241 14.0861 151.321 13.6096C151.42 13.1331 151.628 12.7162 151.946 12.3588C152.561 11.664 154.05 11.3165 156.413 11.3165C158.398 11.3165 159.907 11.8426 160.94 12.8949C161.992 13.9273 162.518 15.4857 162.518 17.5704V25.611H159.987L158.944 24.2709H158.795C158.617 24.5488 158.339 24.8268 157.962 25.1047C157.287 25.6408 156.373 25.9088 155.222 25.9088ZM156.115 24.4198C156.532 24.4198 156.889 24.3404 157.187 24.1815C157.485 24.0028 157.773 23.7646 158.051 23.4668C158.309 23.1889 158.507 22.8613 158.646 22.4841V18.7616H158.2C156.79 18.7616 155.768 19.0196 155.132 19.5358C154.497 20.0322 154.179 20.8164 154.179 21.8885C154.179 22.7025 154.348 23.3278 154.686 23.7646C155.023 24.2014 155.5 24.4198 156.115 24.4198Z" fill="#303030" />
              <path d="M166.452 15.4857C166.452 14.4732 166.313 13.7287 166.035 13.2522C165.777 12.7559 165.231 12.5077 164.397 12.5077H164.099V11.6143H167.047C168.338 11.6143 169.181 11.9915 169.579 12.746H169.698C170.79 11.793 172.04 11.3165 173.45 11.3165C174.423 11.3165 175.267 11.5051 175.981 11.8824C176.716 12.2397 177.242 12.6169 177.56 13.014C178.036 12.4978 178.602 12.0908 179.257 11.793C179.912 11.4754 180.756 11.3165 181.788 11.3165C185.263 11.3165 187 13.143 187 16.7961V25.611H183.128V16.7663C183.128 15.3964 182.91 14.3938 182.473 13.7585C182.037 13.1232 181.461 12.8055 180.746 12.8055C180.21 12.8055 179.714 12.9147 179.257 13.1331C178.8 13.3317 178.443 13.5997 178.185 13.9372C178.225 14.0166 178.304 14.235 178.423 14.5923C178.582 15.1879 178.661 15.9225 178.661 16.7961V25.611H174.79V16.7663C174.79 15.3964 174.572 14.3938 174.135 13.7585C173.698 13.1232 173.122 12.8055 172.408 12.8055C171.991 12.8055 171.554 12.9346 171.097 13.1927C170.661 13.4309 170.333 13.6989 170.115 13.9967L170.204 14.4137C170.283 14.6519 170.323 15.039 170.323 15.5751V25.611H166.452V15.4857Z" fill="#303030" />
              <circle cx="18.4636" cy="18.4637" r="18.4637" transform="rotate(90 18.4636 18.4637)" fill="url(#paint0_linear_604_1736)" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7916 18.1142C14.7916 20.271 13.0432 22.0194 10.8865 22.0194C8.72972 22.0194 6.98134 20.271 6.98134 18.1142C6.98134 15.9575 8.72972 14.2091 10.8865 14.2091C13.0432 14.2091 14.7916 15.9575 14.7916 18.1142ZM16.9071 19.6102C17.0495 19.0354 17.5303 18.5737 18.1224 18.5737C18.7146 18.5737 19.1954 19.0354 19.3378 19.6102C20.0071 22.3129 22.4488 24.3165 25.3584 24.3165C26.8388 24.3165 28.198 23.7979 29.2643 22.9324V24.3168C29.2643 24.9511 29.7786 25.4653 30.4129 25.4653C31.0472 25.4653 31.5615 24.9511 31.5615 24.3168V18.5739C31.5615 18.5257 31.5585 18.4781 31.5527 18.4314C31.558 18.3263 31.5607 18.2206 31.5607 18.1142C31.5607 14.6888 28.7838 11.912 25.3584 11.912C23.2699 11.912 21.4224 12.9443 20.2985 14.5265C19.7834 15.2517 19.0119 15.8171 18.1224 15.8171C17.2329 15.8171 16.4615 15.2517 15.9464 14.5265C14.8225 12.9443 12.975 11.912 10.8865 11.912C7.46105 11.912 4.6842 14.6888 4.6842 18.1142C4.6842 21.5397 7.46105 24.3165 10.8865 24.3165C13.7961 24.3165 16.2378 22.3129 16.9071 19.6102ZM29.2635 18.1142C29.2635 20.271 27.5152 22.0194 25.3584 22.0194C23.2017 22.0194 21.4533 20.271 21.4533 18.1142C21.4533 15.9575 23.2017 14.2091 25.3584 14.2091C27.5152 14.2091 29.2635 15.9575 29.2635 18.1142Z" fill="white" />
              <mask id="path-4-inside-1_604_1736" fill="white">
                <path d="M4.87552 16.5838C5.2336 15.1776 6.07343 13.9414 7.24884 13.0904L8.64103 15.0134C7.91553 15.5387 7.39716 16.3017 7.17614 17.1696L4.87552 16.5838Z" />
              </mask>
              <path d="M4.87552 16.5838C5.2336 15.1776 6.07343 13.9414 7.24884 13.0904L8.64103 15.0134C7.91553 15.5387 7.39716 16.3017 7.17614 17.1696L4.87552 16.5838Z" stroke="#EE5A8F" stroke-width="14.2748" mask="url(#path-4-inside-1_604_1736)" />
              <defs>
                <linearGradient id="paint0_linear_604_1736" x1="18.4636" y1="-8.87519e-09" x2="18.7614" y2="45.2657" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#EE5A8F" />
                  <stop offset="1" stop-color="#FFB629" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <ul className="space-y-6 list-none mr-4">
          <button className="w-full h-16 mt-11 px-4 py-2 text-left border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Feed
          </button>
          <ModalAmigos isOpen={isOpen} onClose={closeModalAmigo} />
          <button onClick={openModalAmigo} className="w-full h-16 px-4 py-2 text-left border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Amigos
          </button>
          <button onClick={handleClick} className="w-full h-16 px-4 py-2 text-left border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Perfil
          </button>
          <button onClick={handleClickConfig} className="w-full h-16 px-4 py-2 text-left border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Configurações
          </button>
          <button
            onClick={openModal}
            className="w-full h-16 px-4 py-2 text-left border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Criar
          </button>
          <div className="w-5/6 p-4">
          </div>
          <CustomModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            onSubmit={handleModalSubmit}
          />
        </ul>
      </nav>
      <CardFeed />

    </div>
  );
}