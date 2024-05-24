'use client'

import Image from 'next/image'
import styles from './auth.module.css'
import { useState } from 'react'
import Modal from '../modal/modal'

export default function AuthBox() {
  const [modal, setModal] = useState(false)
  const [info, setInfo] = useState(false)

  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const AuthBoxClick = () => {
    if (modal) {
    } else {
      setModal(true)
    }
  }

  return (
    <div id={styles.authbox}>
      <div id={styles.btn} onClick={AuthBoxClick}>
        <Image src="/profile.svg" alt="profile" width={20} height={20} />
        <span>LOG IN</span>
      </div>
      <div id={styles.myInfo}>
        <button>LOG OUT</button>
      </div>
      <Modal open={modal} setOpen={setModal}>
        <div>모달</div>
      </Modal>
    </div>
  )
}
