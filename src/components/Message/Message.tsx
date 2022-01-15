/* eslint-disable @next/next/no-img-element */
import styles from './Message.module.css'

const Message = ({ own }:any) => (
  <div className={own ? `${styles.message} ${styles.own}` : styles.message}>
    <div className={styles.messageTop}>
      <img
        src="https://secure.gravatar.com/avatar/47dc454dc555e624caf972e9ecb3a67c?s=1000&r=x&d=mm"
        alt="Vercel Logo"
        className={styles.messageImage}
      />
      <p className={styles.messageText}>Hello this is a message</p>
    </div>
    <div className={styles.messageBottom}>
      <p className={styles.messageBottomText}>1 hour ago</p>
    </div>
  </div>
)

export default Message
