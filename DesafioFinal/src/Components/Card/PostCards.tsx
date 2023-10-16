import { useEffect, useState } from "react";
import { usePostData } from "../../hooks/usePostData";
import { Card } from "./Card";
import Perfil from "../Perfil";

export function PostCards() {
    const {data} = usePostData();
    const [cardCount, setCardCount] = useState(0);
  
    useEffect(() => {
      if (data) {
        setCardCount(data.length);
      }
    }, [data]);
    
    return (
        <div className="p-4 ">
          <Perfil/>
          <div className="ml-96 flex">
          <div className="mr-5">
          <h1 className="text-2xl font-bold ml-2">{cardCount}</h1>
          <h2 className="text-1xl text-gray-500 flex">Post</h2>
          </div>
          <div className="border-r border-gray-300 pr-4"></div>
          <div className="ml-7">
          <h1 className="text-2xl font-bold ml-5">{cardCount}</h1>
          <h2 className="text-1xl text-gray-500">Amigos</h2>
          </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data?.map((postData) => (
              <Card
                key={postData.id}
                foto={postData.foto}
                descricao={postData.descricao}
              />
            ))}
          </div>
        </div>
      );
    }
