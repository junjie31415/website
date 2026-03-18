// Programmer: Junjie Zhao
// Email: jzhao58@u.rochester.edu


// Shared head information
var SHARED_HEADER_HTML = [
  '<header class="site-header">',
  '  <div class="container topbar">',
  '    <div class="brand">',
  '      <h1>Junjie Zhao</h1>',
  '      <p>Undergraduate Student @ Department of Computer Science, University of Rochester</p>',
  '    </div>',
  '    <nav class="site-nav" aria-label="Main navigation">',
  '      <ul>',
  '        <li><a href="index.html" data-page-link="home">Home</a></li>',
  '        <li><a href="research.html" data-page-link="research">Research</a></li>',
  '        <li><a href="projects.html" data-page-link="projects">Projects</a></li>',
  '        <li><a href="interests.html" data-page-link="interests">Interests</a></li>',
  '        <li><a href="cv.html" data-page-link="cv">CV</a></li>',
  '        <li><a href="contact.html" data-page-link="contact">Contact</a></li>',
  '      </ul>',
  '    </nav>',
  '  </div>',
  '</header>'
].join('');

// Shared foot information
var SHARED_FOOTER_HTML = [
  '<footer class="site-footer">',
  '  <div class="container">',
  '    <p>Junjie Zhao Academic Personal Website</p>',
  '    <p class="meta-line">Updated in February 2026</p>',
  '  </div>',
  '</footer>'
].join('');

// Pages navigation
function markActiveNav(pageName) {
  var pageLinks = document.querySelectorAll('#site-header [data-page-link]');

  pageLinks.forEach(function (link) {
    var isActive = link.getAttribute('data-page-link') === pageName;
    link.classList.toggle('active', isActive);
  });
}

// Inject the head and foot section into each page
function injectLayout() {
  var headerRoot = document.getElementById('site-header');
  var footerRoot = document.getElementById('site-footer');
  var pageName = document.body ? document.body.getAttribute('data-page') : '';

  if (!headerRoot || !footerRoot) {
    return;
  }

  headerRoot.innerHTML = SHARED_HEADER_HTML;
  footerRoot.innerHTML = SHARED_FOOTER_HTML;
  markActiveNav(pageName);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectLayout);
} else {
  injectLayout();
}