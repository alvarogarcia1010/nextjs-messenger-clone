import Head from 'next/head'
import type { NextPage } from 'next'
import styles from 'styles/Messenger.module.css'
import Conversation from 'components/Conversations/Conversation'

const Messenger : NextPage = () => {
  return (
    <div>
      <Head>
        <title>Messenger Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.messenger}>
        <div className={styles.chatMenu}>
          <div className={styles.chatMenuWrapper}>
            <input placeholder="Search for friends" className={styles.chatMenuInput} />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className={styles.chatBox}>
          <div className={styles.chatBoxWrapper}>box</div>
        </div>
        <div className={styles.chatOnline}>
          <div className={styles.chatOnlineWrapper}>online</div>
        </div>
      </div>
    </div>
  )
}

export default Messenger