/*
  # Fix Function Search Path Security Issue

  ## Changes
  
  Recreate the `check_contact_rate_limit` function with immutable search_path
  to prevent SQL injection attacks through schema manipulation.

  ## Security Improvements
  - Lock search_path to prevent SQL injection via schema
  - Use SECURITY DEFINER to execute with proper permissions
  - Prevent privilege escalation attacks
*/

DROP TRIGGER IF EXISTS contact_submissions_rate_limit ON contact_submissions;
DROP FUNCTION IF EXISTS check_contact_rate_limit();

CREATE FUNCTION check_contact_rate_limit()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
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
$$;

CREATE TRIGGER contact_submissions_rate_limit
BEFORE INSERT ON contact_submissions
FOR EACH ROW
EXECUTE FUNCTION check_contact_rate_limit();
