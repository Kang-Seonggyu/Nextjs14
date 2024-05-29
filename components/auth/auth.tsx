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

  async function loginAPI() {
    const res = await fetch('http://localhost:5174/test/login', {
      method: 'POST',
      body: JSON.stringify({ email: form.email, password: form.password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return res.json()
  }

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = loginAPI()

    console.log(res)
  }

  return (
    <div id={styles.authbox}>
      <div id={styles.btn} onClick={AuthBoxClick}>
        <Image src="/profile.svg" alt="profile" width={20} height={20} />
        <span>LOG IN</span>
      </div>
      {info && (
        <div id={styles.myInfo}>
          <button>LOG OUT</button>
        </div>
      )}

      <Modal open={modal} setOpen={setModal}>
        <form onSubmit={login} id={styles.modalLogin}>
          <h3>Log In</h3>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setForm((prev) => ({ ...prev, password: e.target.value }))
            }
            required
          />
          <button type="submit">Login</button>
        </form>
      </Modal>
    </div>
  )
}
