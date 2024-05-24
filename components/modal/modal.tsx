'use client'

import styles from './modal.module.css'

export default function Modal({
  open,
  setOpen,
  children,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}) {
  const outsideClick = (e: React.MouseEvent) => {
    setOpen(false)
  }

  const modalClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  if (open)
    return (
      <div className={styles.blackBg} onClick={outsideClick}>
        <div className={styles.modalBox} onClick={modalClick}>
          {children}
        </div>
      </div>
    )
  else return null
}
