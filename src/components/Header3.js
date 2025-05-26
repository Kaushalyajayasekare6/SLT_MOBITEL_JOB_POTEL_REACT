const Header3 = () => {
  const header = document.createElement('header');
  header.className = 'header';

  const logoContainer = document.createElement('div');
  logoContainer.className = 'logo-container';

  const logoImg = document.createElement('img');
  logoImg.src = '../IMAGES/home/1.png';
  logoImg.alt = 'SLTMobitel Logo';
  logoImg.className = 'logo';

  const logoText = document.createElement('h2');
  logoText.textContent = 'Training Program';

  logoContainer.appendChild(logoImg);
  logoContainer.appendChild(logoText);

  const nav = document.createElement('nav');
  nav.className = 'nav';

  const navList = document.createElement('ul');
  
  const homeItem = document.createElement('li');
  const homeLink = document.createElement('a');
  homeLink.href = '../HTML_FILES/home.html';
  homeLink.textContent = 'Home';
  homeItem.appendChild(homeLink);

  const logoutItem = document.createElement('li');
  const logoutLink = document.createElement('a');
  logoutLink.href = '../HTML_FILES/login.html';
  logoutLink.textContent = 'Logout';
  logoutItem.appendChild(logoutLink);

  navList.appendChild(homeItem);
  navList.appendChild(logoutItem);
  nav.appendChild(navList);
  
  header.appendChild(logoContainer);
  header.appendChild(nav);

  return header;
};

export default Header3;