/* eslint-disable @next/next/no-img-element */
import styles from './Conversation.module.css'

const Conversation = () => {
  return (
    <div className={styles.conversation}>
      <img
        src="https://secure.gravatar.com/avatar/47dc454dc555e624caf972e9ecb3a67c?s=1000&r=x&d=mm"
        alt="Vercel Logo"
        className={styles.conversationImage}
      />
      <span className={styles.conversationName}>Alvaro García</span>
    </div>
  )
}

export default Conversation
