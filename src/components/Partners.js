import React from 'react';
import { ReactComponent as RemotiveLogo } from '../icons/remotive-logo.svg';
import { ReactComponent as IconFinderLogo } from '../icons/iconfinder.svg';

const Partners = () => {
  return (
    <div className="partners">
        <a href="https://remotive.com/">
            <RemotiveLogo/>
        </a>
        <a href="https://www.iconfinder.com/">
            <IconFinderLogo/>
        </a>
    </div>
  );
};

export default Partners