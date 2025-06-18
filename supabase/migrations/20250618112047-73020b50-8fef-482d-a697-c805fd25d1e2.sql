
-- First, let's check what's currently in the admin_auth table
SELECT * FROM admin_auth;

-- Delete any existing records to start fresh
DELETE FROM admin_auth;

-- Insert the admin record with a proper bcrypt hash for the password 'pSEODWNAdmin@1'
-- This is a bcrypt hash of 'pSEODWNAdmin@1' with salt rounds 10
INSERT INTO admin_auth (email, password_hash, is_active)
VALUES (
  'admin@duurzaamwonen.info',
  '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn98U2GTU3G.Dej7pJ/e.5B15tCu',
  true
);

-- Verify the record was created correctly
SELECT email, password_hash, is_active, created_at FROM admin_auth WHERE email = 'admin@duurzaamwonen.info';
