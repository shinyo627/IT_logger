import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech: { firstName, lastName, id }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: 'Technician deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        {/* secondary-content moves it to the right in the item from materialize rule */}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
