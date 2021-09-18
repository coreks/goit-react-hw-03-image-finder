import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = () => {
  return (
    <div className="Loading">
      <Loader
        type="Oval"
        color="#00BFFF"
        height={60}
        width={60}
        timeout={2500}
      />
    </div>
  );
};

export default Spinner;
