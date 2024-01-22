import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {SignatureProps} from './types';

const Signature = ({state, optionalState}: SignatureProps) => {
  return (
    <div className="flex border-r-2 border-black">
      <div className="w-1/2 p-4">
        <img src={state.photo} alt="User" />
      </div>
      <div className="w-1/2 p-4 text-left">
        <h1>{state.fullName}</h1>
        <p>
          {state.position +
            (optionalState.company?.isSelected && optionalState.company.value
              ? ' | ' + optionalState.company.value
              : '')}
        </p>
        {optionalState.phone?.isSelected && (
          <p>
            <FontAwesomeIcon icon={faPhone} /> {optionalState.phone.value}
          </p>
        )}
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> {state.email}
        </p>
        {optionalState.website?.isSelected && (
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {optionalState.website.isSelected}
          </p>
        )}
        <div className="flex space-x-4">
          {optionalState.github?.isSelected && (
            <a
              href={optionalState.github.value}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}

          {optionalState.linkedin?.isSelected && (
            <a
              href={optionalState.linkedin?.value}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          )}
          {optionalState.soundcloud?.isSelected && (
            <a
              href={optionalState.soundcloud.value}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faSoundcloud} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signature;
