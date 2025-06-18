
-- First, let's make sure we have a clean admin_auth table and insert the correct record
DELETE FROM admin_auth WHERE email = 'admin@duurzaamwonen.info';

-- Insert the admin record with the exact credentials
INSERT INTO admin_auth (email, password_hash, is_active) 
VALUES (
  'admin@duurzaamwonen.info',
  'pSEODWNAdmin@1',
  true
);

-- Verify the record exists
SELECT email, password_hash, is_active, created_at FROM admin_auth WHERE email = 'admin@duurzaamwonen.info';
