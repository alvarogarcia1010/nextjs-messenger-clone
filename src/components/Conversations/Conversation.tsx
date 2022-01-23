/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image'
import styles from './Conversation.module.css'

interface User {
  name: string,
  imageUrl: string,
  onClick: () => void
}

const Conversation = ({ name, imageUrl, onClick }:User) => (
  <div className={styles.conversation} onClick={onClick}>
    <Image
      src={imageUrl}
      alt="Vercel Logo"
      width={40}
      height={40}
      className={styles.conversationImage}
    />
    <span className={styles.conversationName}>{name}</span>
  </div>
)

export default Conversation
