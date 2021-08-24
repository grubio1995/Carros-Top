import './styles.css';

import Button from 'components/Button';
import Input from 'components/Input';

const CarSearch = () => {
  return (
    <div className="base-card">
      <div className="search-card">
        <div className="button-container">
          <Button texto={'BUSCAR'} />
        </div>
        <div className="edit-container">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default CarSearch;
