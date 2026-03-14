/*
  # Portfolio Database Schema

  ## Tables Created
  
  ### 1. blog_posts
  Stores blog articles for the Product Notes section
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Blog post title
  - `slug` (text, unique) - URL-friendly identifier
  - `excerpt` (text) - Short description
  - `content` (text) - Full blog content in markdown
  - `published` (boolean) - Publication status
  - `published_at` (timestamptz) - Publication timestamp
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  - `tags` (text array) - Category tags
  
  ### 2. contact_submissions
  Stores contact form submissions
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Sender name
  - `email` (text) - Sender email
  - `message` (text) - Contact message
  - `created_at` (timestamptz) - Submission timestamp
  - `read` (boolean) - Read status
  
  ## Security
  - Enable RLS on both tables
  - blog_posts: Public read access for published posts
  - contact_submissions: Public insert only, authenticated read
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL DEFAULT '',
  content text NOT NULL,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  tags text[] DEFAULT '{}'::text[]
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  USING (published = true);

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);
