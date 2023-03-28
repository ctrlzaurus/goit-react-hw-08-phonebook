import PropTypes from 'prop-types';

import d from './filterContacts.module.css';

const FilterContacts = ({updateFilter}) => {
        return (
          <div className={d.conteinerFilter}>
              <p className={d.titleDesc}>Find contacts by name</p>
              <input 
                  type='text' 
                  name='search'
                  onChange={updateFilter}
                  className={d.input}
              />
          </div>
        )
}

FilterContacts.propTypes = {
    updateFilter: PropTypes.func.isRequired,
}

export default FilterContacts