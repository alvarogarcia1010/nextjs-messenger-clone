/* eslint-disable @next/next/no-img-element */
import useDateTimeFormat from 'hooks/useDateTimeFormat'
import useTimeAgo from 'hooks/useTimeAgo'
import styles from './Message.module.css'

const Message = ({ text, createdAt, own }:any) => {
  const timeago = useTimeAgo(createdAt)
  const createdAtFormated = useDateTimeFormat(createdAt)

  return (
    <div className={own ? `${styles.message} ${styles.own}` : styles.message}>
      <div className={styles.messageTop}>
        <img
          src="https://secure.gravatar.com/avatar/47dc454dc555e624caf972e9ecb3a67c?s=1000&r=x&d=mm"
          alt="Vercel Logo"
          className={styles.messageImage}
        />
        <p className={styles.messageText}>{text}</p>
      </div>
      <div className={styles.messageBottom}>
        <time title={createdAtFormated} className={styles.messageBottomText}>
          {timeago}
        </time>
      </div>
    </div>
  )
}
export default Message
