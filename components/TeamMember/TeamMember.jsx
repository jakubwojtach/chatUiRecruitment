import styles from './TeamMember.module.scss';
import Image from 'next/image'
import removePic from '../../public/TrashIcon.svg';
import PropTypes from 'prop-types';

const teamMember = ({
  name, picture, onRemove, isSpecial, id
}) => {
  const handleRemove = () => {
    onRemove(id);
  }
  return (
    <div className={styles.container}>
    <div className={styles.userContainer}>
      <div className={`${styles.avatar} ${isSpecial ? 'special' : ''}`}>
        <Image src={picture.medium} alt={name} width={44} height={44}/>
      </div>
      <p className={styles.userName}>
        {name}
      </p>
    </div>
    <div className={styles.buttonsContainer}>
      <button
        className={`button smallPadding ${isSpecial ? 'violetBg' : ''} darkGrayBg`}
      >
        full access
      </button>
      <button
        className={`button smallPadding grayBg`}
      >
        regular access
      </button>
      <button
        className={`button darkGrayBg remove`}
        onClick={handleRemove}
      >
        <Image src={removePic} alt="Remove" />
      </button>
    </div>
  </div>
  );
}

teamMember.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  isSpecial: PropTypes.bool,
  id: PropTypes.oneOfType(PropTypes.string, PropTypes.number).isRequired,
};

teamMember.defaultProps = {
  isSpecial: false,
};
export default teamMember;