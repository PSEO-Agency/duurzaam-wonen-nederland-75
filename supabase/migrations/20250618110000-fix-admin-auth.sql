
-- First, let's see what's currently in the admin_auth table
SELECT * FROM admin_auth;

-- Delete any existing records to start fresh
DELETE FROM admin_auth;

-- Insert the correct admin record
INSERT INTO admin_auth (email, password_hash, is_active)
VALUES (
  'admin@duurzaamwonen.info',
  '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
  true
);

-- Verify the record was created
SELECT email, password_hash, is_active, created_at FROM admin_auth WHERE email = 'admin@duurzaamwonen.info';
