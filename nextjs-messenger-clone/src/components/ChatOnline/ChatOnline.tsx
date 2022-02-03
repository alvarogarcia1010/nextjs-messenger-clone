/* eslint-disable @next/next/no-img-element */
import styles from './ChatOnline.module.css'

const ChatOnline = () => (
  <div className={styles.chatOnline}>
    <div className={styles.chatOnlineFriend}>
      <div className={styles.chatOnlineImgContainer}>
        <img
          src="https://secure.gravatar.com/avatar/47dc454dc555e624caf972e9ecb3a67c?s=1000&r=x&d=mm"
          alt="Vercel Logo"
          className={styles.chatOnlineImg}
        />
        <div className={styles.chatOnlineBadge} />
      </div>
      <span className={styles.chatOnlineName}>
        John Doe
      </span>
    </div>
  </div>
)

export default ChatOnline
