import Header3 from '../components/Header3.js';
import '../assets/css/acceptcv/acceptcv.css';

const AcceptedCVs = () => {
  const container = document.createElement('div');
  container.className = 'accepted-cvs-container';

  // Add header
  container.appendChild(Header3());

  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  // Create sidebar
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';

  const sidebarNav = document.createElement('nav');
  const sidebarList = document.createElement('ul');

  const menuItems = [
    { text: 'Job Creation', link: '../HTML_FILES/jobcreation.html' },
    { text: 'Modification', link: '../HTML_FILES/jobmodification.html' },
    { text: 'Received CVs', link: '../HTML_FILES/recivedcv.html' },
    { text: 'Accepted CVs', link: '../HTML_FILES/acceptcv.html', active: true }
  ];

  menuItems.forEach(item => {
    const li = document.createElement('li');
    if (item.active) li.className = 'active';
    
    const arrow = document.createElement('span');
    arrow.className = 'arrow';
    arrow.textContent = '▶';
    
    const a = document.createElement('a');
    a.href = item.link;
    a.textContent = item.text;
    
    li.appendChild(arrow);
    li.appendChild(a);
    sidebarList.appendChild(li);
  });

  sidebarNav.appendChild(sidebarList);
  sidebar.appendChild(sidebarNav);
  wrapper.appendChild(sidebar);

  // Create main content
  const main = document.createElement('main');
  const content = document.createElement('section');
  content.className = 'content';

  const card = document.createElement('div');
  card.className = 'card';

  const heading = document.createElement('h2');
  heading.textContent = 'Accepted CVs';
  card.appendChild(heading);

  const tableContainer = document.createElement('div');
  tableContainer.className = 'table-container';

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Create table header
  const headerRow = document.createElement('tr');
  const headers = ['Job Title', 'Name', 'Gender', 'Field', 'Contact Number', 'CV'];
  
  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create empty table rows (2 rows as in the example)
  for (let i = 0; i < 2; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
      const td = document.createElement('td');
      row.appendChild(td);
    }
    tbody.appendChild(row);
  }
  
  table.appendChild(tbody);
  tableContainer.appendChild(table);
  card.appendChild(tableContainer);
  content.appendChild(card);
  main.appendChild(content);
  wrapper.appendChild(main);
  container.appendChild(wrapper);

  return container;
};

export default AcceptedCVs;