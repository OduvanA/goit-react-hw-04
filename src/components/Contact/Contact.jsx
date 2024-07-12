import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css"

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p><IoPerson className={css.icon} size="14" />{name}</p>
        <p><FaPhone className={css.icon} size="14" />{number}</p> 
      </div>
      
      <button className={css.button} onClick={() => onDelete(id)} >Delete</button>
    </div>
  )

} 