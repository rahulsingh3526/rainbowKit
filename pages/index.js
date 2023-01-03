import { ConnectButton } from '@rainbow-me/rainbowkit'
import styles from '../styles/Home.module.css'
import { useConnect, useDisconnect } from 'wagmi'


export default function Home() {
  const connect = useConnect({
    onSuccess(data) {
      console.log('Connect',data)
    },
  })

  return (
    <>
      <main className={styles.main}>
       <ConnectButton />
        
      </main>
    </>
  )
}
