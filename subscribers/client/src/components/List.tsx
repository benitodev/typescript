import {Sub} from '../types'
interface Props {
  subs: Array<Sub>
}

const List = ({subs}: Props) => {
    return (<ul>
        {subs.map(sub => {
         return <li key={sub.nick}> 
         <img src={sub.avatar} alt={sub.nick}/> 
         <h4>{sub.nick}</h4> 
         <small>{sub.subMonths}</small> 
         <p>{sub.description?.substring(0, 100)}</p>
         </li>
        })
        }
      </ul>)
}

export default List