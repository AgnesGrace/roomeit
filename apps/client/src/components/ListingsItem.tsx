import { Room } from '../types/customTypes'
import moment from 'moment'
import { Link } from 'react-router-dom'
interface Proptypes {
  room: Room
}

const ListingsItem: React.FC<Proptypes> = ({ room }) => {
  return (
    <div
      className=" card w-96 bg-base-100 shadow-xl"
      key={room.id}
      data-aos="zoom-in-down"
    >
      <figure className="px-10 pt-10 ">
        <img src={room.images[0]} alt="Shoes" className="rounded-xl " />
      </figure>
      <div className="card-body items-center text-center">
        <div className="flex gap-8 justify-between">
          <div>
            <h2 className="card-title">{room.type}</h2>
            <p>{room.description.slice(0, 17) + '...'}</p>
          </div>
          <div className="flex-1">
            <h2 className="card-title">€{room.price}</h2>
            <p>{moment(room.createdAt).fromNow()}</p>
          </div>
        </div>
        <div className="card-actions">
          <Link
            to={`/${'main-roomeit/room' || room}/${room.id}`}
            className="btn bg-black hover:bg-slate-800"
          >
            More...
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ListingsItem
