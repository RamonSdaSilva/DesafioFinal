import { useEffect, useState } from "react";
import { usePostData } from "../../hooks/usePostData";
import { Card } from "./Card";

export function CardFeed() {
    const {data} = usePostData();
    const [,setCardCount] = useState(0);
  
    useEffect(() => {
      if (data) {
        setCardCount(data.length);
      }
    }, [data]);
    return (
        <div className="p-4 mt-16 ml-72">
          <div className=" lg:grid-cols-1 gap-4 ml-97">
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
