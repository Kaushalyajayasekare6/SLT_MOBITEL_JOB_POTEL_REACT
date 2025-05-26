import React from 'react';

const Sidebar = ({ activePage }) => {
  return React.createElement('aside', { className: 'sidebar' },
    React.createElement('nav', null,
      React.createElement('ul', null,
        React.createElement('li', { className: activePage === 'jobcreation' ? 'active' : '' },
          React.createElement('span', { className: 'arrow' }, '▶'),
          React.createElement('a', { href: '#/jobcreation' }, 'Job Creation')
        ),
        React.createElement('li', { className: activePage === 'jobmodification' ? 'active' : '' },
          React.createElement('span', { className: 'arrow' }, '▶'),
          React.createElement('a', { href: '#/jobmodification' }, 'Modification')
        ),
        React.createElement('li', { className: activePage === 'recivedcv' ? 'active' : '' },
          React.createElement('span', { className: 'arrow' }, '▶'),
          React.createElement('a', { href: '#/recivedcv' }, 'Received CVs')
        ),
        React.createElement('li', { className: activePage === 'acceptcv' ? 'active' : '' },
          React.createElement('span', { className: 'arrow' }, '▶'),
          React.createElement('a', { href: '#/acceptcv' }, 'Accepted CVs')
        )
      )
    )
  );
};

export default Sidebar;