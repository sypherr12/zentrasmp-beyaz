:root {
  --bg: #ffffff;
  --card: #fbfbfb;
  --text: #111827;
  --muted: #6b7280;
  --line: #e6edf5;
  --accent: #2563eb;
  --accent-2: #10b981;
  --soft-blue: #eff6ff;
  --shadow: rgba(17, 24, 39, 0.04);
  --warning: #f97316;
}

* {
  box-sizing: border-box;
  font-family: Inter, "Segoe UI", sans-serif;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  line-height: 1.5;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
}

.topbar {
  background: linear-gradient(180deg, #fff, #f8fafc);
  border-bottom: 1px solid var(--line);
  padding: 18px 0;
}

.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

h1 {
  margin: 0;
  font-size: 2rem;
  letter-spacing: -0.04em;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.link-btn {
  color: var(--text);
  text-decoration: none;
  border: 1px solid var(--line);
  background: white;
  border-radius: 12px;
  padding: 8px 12px;
  font-weight: 600;
}

.server-ip {
  color: var(--muted);
  font-weight: 700;
  font-size: 0.95rem;
}

.grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
  gap: 20px;
  padding-top: 24px;
  padding-bottom: 30px;
}

.card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 10px 25px var(--shadow);
}

h2 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 1.4rem;
}

label {
  display: block;
  margin-top: 12px;
  color: var(--muted);
  font-size: 0.9rem;
}

input,
textarea {
  width: 100%;
  border: 1px solid var(--line);
  background: white;
  border-radius: 12px;
  padding: 12px 14px;
  color: var(--text);
  margin-top: 6px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
textarea:focus {
  border-color: rgba(37, 99, 235, 0.4);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.08);
}

textarea {
  min-height: 140px;
  resize: vertical;
}

.btn {
  border: none;
  border-radius: 12px;
  padding: 11px 16px;
  cursor: pointer;
  font-weight: 700;
  transition: transform 0.15s ease, opacity 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn.primary {
  margin-top: 14px;
  background: var(--accent);
  color: white;
}

.btn.secondary {
  background: #eef2ff;
  color: var(--text);
}

.ticket-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border: 1px solid var(--line);
  background: white;
  border-radius: 12px;
  padding: 12px 14px;
  margin-bottom: 10px;
}

.ticket-row strong {
  display: block;
  margin-bottom: 2px;
}

.meta,
.small {
  color: var(--muted);
  font-size: 0.78rem;
}

.message {
  border-radius: 12px;
  padding: 10px 12px;
  margin: 8px 0;
  border-left: 4px solid transparent;
}

.message.user {
  background: #f8fafc;
  border-left-color: var(--accent-2);
}

.message.admin {
  background: #f5f7ff;
  border-left-color: var(--accent);
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(17, 24, 39, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.hidden {
  display: none;
}

.modal-content {
  width: min(760px, 100%);
  position: relative;
}

.close {
  position: absolute;
  top: 14px;
  right: 14px;
  border: 1px solid var(--line);
  background: white;
  border-radius: 10px;
  padding: 7px 10px;
  cursor: pointer;
}

.auth-box {
  max-width: 420px;
  margin: 30px auto 0;
}

.admin-wrap {
  padding-top: 20px;
  padding-bottom: 30px;
}

.admin-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.ticket-list {
  display: block;
}

@media (max-width: 760px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .topbar-inner,
  .admin-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .header-actions {
    width: 100%;
    justify-content: space-between;
  }
}
