-- Cloudflare D1 Database Schema for Roswalt Ryla Form Submissions
CREATE TABLE IF NOT EXISTS enquiries (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL,           -- 'lead_gate', 'layout_request', or 'contact'
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  budget TEXT,
  buyer_type TEXT,
  visit_date TEXT,
  message TEXT,
  layout_name TEXT,
  layout_type TEXT,
  layout_area TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
