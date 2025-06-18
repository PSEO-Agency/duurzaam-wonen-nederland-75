
-- First, let's simplify the admin_auth table and add a simple verification
-- For now, we'll store the plaintext password temporarily for testing
-- In production, this would use proper bcrypt hashing on the backend

-- Clear existing records
DELETE FROM admin_auth;

-- Insert admin record with plaintext password for frontend verification
-- Email: admin@duurzaamwonen.info
-- Password: pSEODWNAdmin@1
INSERT INTO admin_auth (email, password_hash, is_active) 
VALUES (
  'admin@duurzaamwonen.info',
  'pSEODWNAdmin@1',
  true
);

-- Verify the record
SELECT email, password_hash, is_active FROM admin_auth WHERE email = 'admin@duurzaamwonen.info';
