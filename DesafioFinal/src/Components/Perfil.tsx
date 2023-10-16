import { useInfoData } from "../hooks/useInfoData";

function Perfil() {
    const { INFO } = useInfoData();

    return (
        <div className="flex items-center space-x-4">
            {INFO?.map((infoData) => (
                <div className="flex ml-40 mb-16 mt-10">
                    <div key={infoData.id} className="relative flex items-center justify-center w-56 h-56 rounded-full overflow-hidden border-2 border-gray-500">
                        <img src={infoData.foto} className="w-full h-full object-cover" />
                    </div>

                    <div className="">
                        <h2 className="text-3xl font-semibold mt-9 ml-12">{infoData.username}</h2>
                        <p className="text-1xl mt-2 ml-12">{infoData.nome}</p>
                        <p className="text-1xl mt-2 ml-12">{infoData.descricao}</p>
                        <div>
                            <button type="submit" className="ml-12 w-20 h-8 bg-red-400 rounded-[10px] shadow text-white mt-4">Adicionar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Perfil;