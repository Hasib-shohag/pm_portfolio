/*
  # Fix Security Issues

  ## Changes
  
  1. Replace unrestricted RLS policy on contact_submissions INSERT
  2. Add stricter policy with email validation and basic rate limiting
  3. Prevent spam and invalid submissions

  ## Security Improvements
  - Validate email format before allowing submissions
  - Prevent rapid duplicate submissions
  - Enforce field length constraints
  - Maintain data integrity
*/

DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

CREATE POLICY "Validated contact form submissions"
  ON contact_submissions FOR INSERT
  WITH CHECK (
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$'
    AND length(name) > 0 
    AND length(name) <= 200
    AND length(email) <= 255
    AND length(message) > 10 
    AND length(message) <= 5000
  );

DO $$
BEGIN
  CREATE TRIGGER contact_submissions_rate_limit
  BEFORE INSERT ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION check_contact_rate_limit();
EXCEPTION
  WHEN others THEN null;
END $$;

CREATE OR REPLACE FUNCTION check_contact_rate_limit()
RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM contact_submissions 
    WHERE email = NEW.email 
    AND created_at > now() - interval '1 hour'
  ) THEN
    RAISE EXCEPTION 'Too many submissions from this email. Please try again later.';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
