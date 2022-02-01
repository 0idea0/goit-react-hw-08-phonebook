import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '..//../redux/contacts';
import contactsSelectors from '../../redux/contacts/selectors';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  const onChange = event => dispatch(filterContact(event.target.value));

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        onChange={onChange}
        value={filter}
        name="filter"
      />
    </label>
  );
};

export default Filter;
