// ---- Mobile nav toggle (used on every page) ----
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (nav) nav.classList.toggle("active");
}

const RK_SUN_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.2" y1="4.2" x2="5.6" y2="5.6"/><line x1="18.4" y1="18.4" x2="19.8" y2="19.8"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.2" y1="19.8" x2="5.6" y2="18.4"/><line x1="18.4" y1="5.6" x2="19.8" y2="4.2"/></svg>';
const RK_MOON_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

// ---- Dark / Light theme toggle (persisted via localStorage) ----
(function initTheme() {
  const saved = localStorage.getItem('rk-theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();

function toggleTheme() {
  const root = document.documentElement;
  const isLight = root.getAttribute('data-theme') === 'light';
  if (isLight) {
    root.removeAttribute('data-theme');
    localStorage.setItem('rk-theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('rk-theme', 'light');
  }
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.innerHTML = root.getAttribute('data-theme') === 'light' ? RK_MOON_ICON : RK_SUN_ICON;
}

// Sync the toggle button icon with the active theme once the page loads
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.innerHTML = document.documentElement.getAttribute('data-theme') === 'light' ? RK_MOON_ICON : RK_SUN_ICON;
  }
});

// ---- Back-to-top button (only present on pages that have #topBtn) ----
window.onscroll = function () {
  const topBtn = document.getElementById('topBtn');
  if (topBtn) {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
  }
};

// ---- Generic blog post search (used on Tech / English / Hindi blog pages) ----
function filterBlogPosts(inputId, containerId) {
  const input = document.getElementById(inputId);
  const container = document.getElementById(containerId);
  if (!input || !container) return;
  const query = input.value.trim().toLowerCase();
  const posts = container.querySelectorAll('.article-block, .blog-post');
  let visibleCount = 0;

  posts.forEach(post => {
    const text = post.textContent.toLowerCase();
    const tags = (post.getAttribute('data-tags') || '').toLowerCase();
    const match = query === '' || text.includes(query) || tags.includes(query);
    post.style.display = match ? '' : 'none';
    if (match) visibleCount++;
  });

  const noResults = document.getElementById(containerId.replace('Posts', 'NoResults'));
  if (noResults) noResults.style.display = visibleCount === 0 ? 'block' : 'none';
}
function searchPosts() {
  const input = document.getElementById('searchInput');
  const ul = document.getElementById('postLists');
  if (!input || !ul) return;
  const filter = input.value.toUpperCase();
  const li = ul.getElementsByTagName('li');
  for (let i = 0; i < li.length; i++) {
    const txtValue = li[i].textContent || li[i].innerText;
    li[i].style.display = txtValue.toUpperCase().includes(filter) ? "" : "none";
  }
}

// ---- Generic contact form validation (only runs if fields exist) ----
function validateForm() {
  const nameEl = document.getElementById('name');
  const emailEl = document.getElementById('email');
  const messageEl = document.getElementById('message');
  if (!nameEl || !emailEl || !messageEl) return true;

  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const message = messageEl.value.trim();
  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return false;
  }
  return true;
}

// ---- Login/register panel toggle (only runs if those elements exist) ----
const container = document.querySelector('.auth-container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

if (container && registerBtn && loginBtn) {
  registerBtn.addEventListener('click', () => container.classList.add('active'));
  loginBtn.addEventListener('click', () => container.classList.remove('active'));
}

// ---- Comment form (Home page only — guarded so other pages don't error) ----
const commentForm = document.getElementById('commentForm');
if (commentForm) {
  commentForm.addEventListener('submit', function (event) {
    const commentInput = document.getElementById('commentInput');
    const commentList = document.getElementById('commentList');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const commentText = commentInput ? commentInput.value.trim() : "";

    if (commentText !== "") {
      if (commentList) {
        const li = document.createElement('li');
        li.textContent = commentText;
        commentList.appendChild(li);
      }
      if (thankYouMessage) thankYouMessage.style.display = 'block';
      // Form still submits normally to FormSubmit (email) after this.
    } else {
      event.preventDefault();
    }
  });
}
