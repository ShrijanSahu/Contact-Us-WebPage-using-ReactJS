import styles from './ContactHeader.module.css';

const ContactHeader = () => {
  return (
    <div className = {`${styles.contact_section} container`}>
      <h1>CONTACT US</h1>
      <p>LETS CONNECT: WE ARE HERE TO HELP AND WE WOULD LOVE TO HEAR FROM YOU, WEATHER YOU HAVE A QUESTION COMMENT OR JUST WANT TO CHAT, YOU CAN JUST REACH OUT TO US USING THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL OR SOCIAL MEDIA.</p>
    </div>
  )
}

export default ContactHeader
