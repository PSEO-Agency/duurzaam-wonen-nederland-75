
-- Update admin credentials with the new email and password
UPDATE admin_auth 
SET 
  email = 'admin@duurzaamwonen.info',
  password_hash = '$2b$10$X8qJ9vR3mL2nP7wK5sA4tOZxY6uI8pQ1rE3nM9vB7cL4dF5gH8jK6m',
  updated_at = now()
WHERE email = 'admin@example.com';

-- If no existing record, insert the new admin
INSERT INTO admin_auth (email, password_hash, is_active)
SELECT 'admin@duurzaamwonen.info', '$2b$10$X8qJ9vR3mL2nP7wK5sA4tOZxY6uI8pQ1rE3nM9vB7cL4dF5gH8jK6m', true
WHERE NOT EXISTS (SELECT 1 FROM admin_auth WHERE email = 'admin@duurzaamwonen.info');
