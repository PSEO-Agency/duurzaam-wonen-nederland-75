
-- First, let's check if the admin_auth table exists and see its structure
SELECT table_name, column_name, data_type, is_nullable, column_default 
FROM information_schema.columns 
WHERE table_name = 'admin_auth' 
ORDER BY ordinal_position;

-- Check if there are any records in the table
SELECT COUNT(*) as record_count FROM admin_auth;

-- Delete any existing records to start completely fresh
DELETE FROM admin_auth;

-- Insert the admin record with the correct credentials
INSERT INTO admin_auth (email, password_hash, is_active) 
VALUES (
  'admin@duurzaamwonen.info',
  '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
  true
);

-- Verify the record was inserted correctly
SELECT id, email, password_hash, is_active, created_at, updated_at 
FROM admin_auth 
WHERE email = 'admin@duurzaamwonen.info';

-- Also check the total count again to make sure we have exactly one record
SELECT COUNT(*) as total_records FROM admin_auth;
