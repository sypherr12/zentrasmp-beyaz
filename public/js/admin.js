const userId = localStorage.getItem('user_id') || 'player-01';
const inboxList = document.getElementById('inbox-list');
const newTicketForm = document.getElementById('new-ticket-form');
const serverIpEl = document.getElementById('server-ip');
const modal = document.getElementById('modal');
const ticketView = document.getElementById('ticket-view');
const closeModal = document.getElementById('close-modal');

async function loadServerIp() {
  const res = await fetch('/api/server-ip');
  const data = await res.json();
  serverIpEl.textContent = 'IP: ' + data.ip;
}

async function loadInbox() {
  inboxList.innerHTML = 'Yükleniyor...';

  const res = await fetch(`/api/inbox?user_id=${encodeURIComponent(userId)}`);
  const data = await res.json();

  if (!Array.isArray(data) || data.length === 0) {
    inboxList.innerHTML = '<div class="small">Henüz destek talebiniz yok.</div>';
    return;
  }

  inboxList.innerHTML = '';

  data.forEach((ticket) => {
    const row = document.createElement('div');
    row.className = 'ticket-row';
    row.innerHTML = `
      <div>
        <strong>${escapeHtml(ticket.subject)}</strong>
        <div class="small">${escapeHtml(ticket.created_at)} • ${escapeHtml(ticket.status)}</div>
      </div>
      <button class="btn" onclick="openTicket(${ticket.id})">Aç</button>
    `;
    inboxList.appendChild(row);
  });
}

newTicketForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const body = document.getElementById('body').value.trim();

  if (!subject || !body) {
    alert('Konu ve açıklama alanı zorunludur.');
    return;
  }

  await fetch('/api/tickets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: userId, username, subject, body })
  });

  alert('Destek talebiniz gönderildi.');
  document.getElementById('subject').value = '';
  document.getElementById('body').value = '';
  document.getElementById('username').value = '';
  loadInbox();
});

window.openTicket = async function (ticketId) {
  const res = await fetch(`/api/tickets/${ticketId}`);
  const data = await res.json();
  renderTicket(data);
  modal.classList.remove('hidden');
};

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

function renderTicket(data) {
  const ticket = data.ticket;
  const messages = data.messages || [];

  let html = `
    <h3>${escapeHtml(ticket.subject)}</h3>
    <div class="small">Oluşturan: ${escapeHtml(ticket.username)} • ${escapeHtml(ticket.created_at)}</div>
    <div style="margin-top: 14px;">
  `;

  messages.forEach((message) => {
    html += `
      <div class="message ${message.sender === 'admin' ? 'admin' : 'user'}">
        <div class="small">${escapeHtml(message.created_at)} • ${escapeHtml(message.sender)}</div>
        <div>${escapeHtml(message.body)}</div>
      </div>
    `;
  });

  html += `
    </div>
    <div style="margin-top: 16px;">
      <label>Cevap Yaz</label>
      <textarea id="reply-body" placeholder="Cevabınızı yazın..."></textarea>
      <div style="margin-top: 10px;">
        <button class="btn primary" id="send-reply">Gönder</button>
      </div>
    </div>
  `;

  ticketView.innerHTML = html;

  document.getElementById('send-reply').addEventListener('click', async () => {
    const reply = document.getElementById('reply-body').value.trim();
    if (!reply) {
      alert('Boş cevap gönderilemez.');
      return;
    }

    await fetch(`/api/tickets/${ticket.id}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sender: 'user', body: reply })
    });

    alert('Cevap gönderildi.');
    openTicket(ticket.id);
  });
}

function escapeHtml(value) {
  if (!value) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

loadServerIp();
loadInbox();
