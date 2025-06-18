
-- Update the admin_auth record with the correct password hash for 'pSEODWNAdmin@1'
-- Using a proper bcrypt hash for the password 'pSEODWNAdmin@1'
UPDATE admin_auth 
SET 
  password_hash = '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
WHERE email = 'admin@duurzaamwonen.info';

-- Verify the record exists and is active
SELECT email, is_active, created_at FROM admin_auth WHERE email = 'admin@duurzaamwonen.info';
