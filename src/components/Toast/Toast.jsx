import React from 'react';
import { useCart } from '../../stores/CartContext';
import styles from './Toast.module.scss';

export const ToastContainer = () => {
  const { toasts, removeToast } = useCart();

  return (
    <div className={styles.container}>
      {toasts.map((toast) => (
        <div key={toast.id} className={styles.toast}>
          <div className={styles.icon}>✓</div>
          <div className={styles.message}>{toast.message}</div>
          <button className={styles.close} onClick={() => removeToast(toast.id)}>
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};
