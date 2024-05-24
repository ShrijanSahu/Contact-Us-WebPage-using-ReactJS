import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import {MdMessage} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import {HiMail} from "react-icons/hi";

const ContactForm = () => {
  return (
    <section className ={styles.container}>
        <div className = {styles.contact_form}>
            <div className = {styles.top_btn}>
            <Button text = "VIA SUPPORT CHAT" icon ={<MdMessage fontSize = "15px"/>} />
             <Button text = "VIA TEXT CALL" icon ={<FaPhoneAlt /> }/>
            </div> 
            <Button isOutline = {true}
            text = "VIA EMAIL FORM" icon ={<HiMail /> }/>
        
        <form>
            <div className={styles.form_style1}>
         <div className = {styles.form_style}>
           <label htmlFor="name"> Name </label>
            <input type="text" name = "name" />
         </div>
         <div className = {styles.form_style}>
           <label htmlFor="email"> email </label>
            <input type="text" name="email" />
         </div>
         <div className = {styles.form_style}>
           <label htmlFor="text"> text </label>
            <textarea name="text" />
         </div>
         </div>
        </form>
         
       <Button text = "SUBMIT" />

        </div>
        <div className = {styles.contact_image}>
            <img src="./images/contact.png.svg" alt="" />
        </div>
    </section>
  )
}

export default ContactForm
