import classNames from 'classnames';
import { FC, useState } from 'react';
import { IProd } from '../../models/IProd';
import catImg from '../../assets/cat.png';

import styles from './Product.module.scss';

interface ProductProps {
  product: IProd;
}

const Product: FC<ProductProps> = ({ product }) => {
  const [activeState, setActiveState] = useState(false);
  const [enter, setEnter] = useState(false);
  const [first, setFirst] = useState(false);

  const setActive = () => {
    if (!product.disable) {
      setActiveState((prev) => !prev);
      setFirst(true);
    }
  };

  const setActiveKey = () => {
    if (!product.disable) {
      setActiveState((prev) => !prev);
    }
  };

  const setMouseLeave = () => {
    setEnter(false);
    setFirst(false);
  };

  const setMouseEnter = () => {
    setEnter(true);
  };

  return (
    <div
      className={classNames(styles.product__card, styles.card, {
        [styles.product__card_disabled]: product.disable,
        [styles.product__card_active]: activeState,
      })}>
      <div
        className={classNames(styles.card__body, {
          [styles.card__body_disabled]: product.disable,
          card__body_active: activeState,
        })}
        onClick={setActive}
        onMouseEnter={setMouseEnter}
        onMouseLeave={setMouseLeave}>
        <div className={styles.card__header}>
          {enter && activeState && !first ? (
            <h4
              className={classNames(styles.card__title_small, {
                [styles.card__title_active]: enter,
              })}>
              Котэ не одобряет?
            </h4>
          ) : (
            <h4 className={styles.card__title_small}>Сказочное заморское яство</h4>
          )}

          <h2 className={styles.card__name}>Нямушка</h2>
          <span className={styles.card__favorit}>с {product.flavor}</span>
          <div className={styles.card__description}>
            <span className={styles.card__serving}>
              <b>{product.serving}</b> порцций
            </span>
            <span className={styles.card__mouse}>
              <b>{product.mouseCount}</b> {product.mouse}
            </span>
          </div>
        </div>
        <img src={catImg} alt="" />
        <div
          className={classNames(styles.card__weight, {
            [styles.card__weight_disabled]: product.disable,
            [styles.card__weight_active]: activeState,
          })}>
          {product.weight}
          <span className={styles.card__weight_kilo}>кг</span>
        </div>
      </div>

      {product.disable ? (
        <div
          className={classNames(styles.card__footer, {
            [styles.card__footer_disabled]: product.disable,
          })}>
          Печалька, c {product.flavor} закончился
        </div>
      ) : activeState ? (
        <div
          className={classNames(styles.card__footer, {
            [styles.card__body_active]: activeState,
          })}>
          {product.footer}
        </div>
      ) : (
        <div className={styles.card__footer}>
          Чего сидишь? Порадуй котэ,{' '}
          <span className={styles._color} onClick={setActiveKey}>
            <span className={styles.card__link}>купи</span>.
          </span>
        </div>
      )}
    </div>
  );
};

export default Product;
