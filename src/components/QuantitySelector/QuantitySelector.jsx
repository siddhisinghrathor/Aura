import React from 'react';
import styles from './QuantitySelector.module.scss';

const QuantitySelector = () => {
  // TODO: Implement increment/decrement buttons and input bounds validation
  return (
    <div className={styles.selector}>
      <button>-</button>
      <span>1</span>
      <button>+</button>
    </div>
  );
};

export default QuantitySelector;
