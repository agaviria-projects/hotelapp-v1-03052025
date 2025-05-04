import { useParams } from "react-router-dom";


export default function RoomDetailsPage() {
    //console.log("parametro",useParams());
    let {id} =useParams();
  return (
    <div>
      <h1>Detalle de Habitación</h1>
      <h2>Habitación #{id}</h2>
    </div>
  )
}
