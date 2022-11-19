import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Loader = ({ visible }) => {
  return (
    <>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="red"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: 'center' }}
        wrapperClassName=""
        visible={visible}
      />
    </>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Loader;
