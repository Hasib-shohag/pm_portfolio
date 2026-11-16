/*
  # Extend blog_posts for the Writing section

  ## What this migration does

  1. Adds three new columns to `blog_posts`:
     - `category` (text) - a short category label shown as a tag on each entry.
     - `source_url` (text) - the LinkedIn URL the "Read on LinkedIn" link opens.
     - `show_date` (boolean, default true) - whether the published date is shown
       on the entry (false hides the date while keeping ordering intact).
  2. Deletes all existing placeholder rows in `blog_posts` so the old sample
     article no longer appears.
  3. Inserts 7 published posts sourced from LinkedIn, ordered by `published_at`
     in the Writing section. `published` is true for all of them.
  4. Re-asserts RLS so anonymous users can only SELECT published rows. The
     existing SELECT policy (`published = true`) already enforces this, so we
     drop and recreate it to be explicit and keep the migration self-contained.

  ## Important notes
  - No data that matters is lost: the only existing row is the placeholder
    article from the original seed migration.
  - RLS remains enabled. Anonymous visitors can still read only published
    posts; nothing else changes.
  - The new columns are nullable / defaulted so the table stays compatible
    with any row that predates the migration (there are none after the DELETE).
*/

ALTER TABLE blog_posts
  ADD COLUMN IF NOT EXISTS category text,
  ADD COLUMN IF NOT EXISTS source_url text,
  ADD COLUMN IF NOT EXISTS show_date boolean NOT NULL DEFAULT true;

DELETE FROM blog_posts;

INSERT INTO blog_posts
  (title, slug, excerpt, content, published, published_at, tags, category, source_url, show_date)
VALUES
  (
    'Our support inbox was quiet. That worried our team.',
    'quiet-support-inbox',
    'Few support tickets looked like good news. The real signal was who stopped using the product, and when.',
    'Few support tickets looked like good news. The real signal was who stopped using the product, and when.',
    true,
    '2026-10-24T00:00:00+00:00'::timestamptz,
    ARRAY['ProductManagement', 'UserRetention', 'SaaS'],
    'Product · SaaS',
    'https://www.linkedin.com/feed/update/urn:li:activity:7519643434970791936/',
    true
  ),
  (
    'The most important credit feature on a lending platform I managed wasn’t a credit feature.',
    'credit-feature-that-wasnt',
    'Lending tied to earning power can compete on outcomes, not just on rate.',
    'Lending tied to earning power can compete on outcomes, not just on rate.',
    true,
    '2026-10-18T00:00:00+00:00'::timestamptz,
    ARRAY['Fintech', 'Lending'],
    'Fintech · Lending',
    'https://www.linkedin.com/feed/update/urn:li:activity:7517489882240507904/',
    true
  ),
  (
    'Project problems rarely start with a crisis.',
    'harmless-sentences',
    'They start with a sentence that sounds harmless. Those sentences are dangerous because they sound like progress.',
    'They start with a sentence that sounds harmless. Those sentences are dangerous because they sound like progress.',
    true,
    '2026-10-09T00:00:00+00:00'::timestamptz,
    ARRAY['ProjectManagement', 'FinTech', 'Delivery'],
    'Project Delivery',
    'https://www.linkedin.com/feed/update/urn:li:activity:7514278617770639360/',
    true
  ),
  (
    'Most wallets are built for one country. We worked on one that couldn’t be.',
    'multi-country-wallet',
    'In fintech, the currency question decides your architecture, your compliance scope and your delivery plan, before anyone writes a line of code.',
    'In fintech, the currency question decides your architecture, your compliance scope and your delivery plan, before anyone writes a line of code.',
    true,
    '2026-10-06T00:00:00+00:00'::timestamptz,
    ARRAY['FinTech', 'CrossBorderPayments', 'DigitalWallets'],
    'Fintech · Cross-border',
    'https://www.linkedin.com/feed/update/urn:li:activity:7513100864245579776/',
    true
  ),
  (
    'Velocity tells you how fast a team is moving. It doesn’t tell you what it’s costing.',
    'velocity-vs-cost',
    'Velocity is about pace. CPI is about whether the pace is affordable.',
    'Velocity is about pace. CPI is about whether the pace is affordable.',
    true,
    '2026-10-05T00:00:00+00:00'::timestamptz,
    ARRAY['ProjectManagement', 'Agile', 'EarnedValue'],
    'Project Delivery · Agile',
    'https://www.linkedin.com/feed/update/urn:li:activity:7512843009458241537/',
    true
  ),
  (
    'The most useful thing we did on one client’s fintech launch was help them decide what not to build.',
    'decide-what-not-to-build',
    'Help the client see which part has to be perfect on day one, and which can wait until they know it’s worth it.',
    'Help the client see which part has to be perfect on day one, and which can wait until they know it’s worth it.',
    true,
    '2026-10-01T00:00:00+00:00'::timestamptz,
    ARRAY['Product', 'MVP', 'Fintech'],
    'Product · MVP',
    'https://www.linkedin.com/in/hasibcuetmie/recent-activity/all/',
    false
  ),
  (
    'A startup idea that started with my mother’s doctor appointments.',
    'startup-idea-mothers-doctor',
    'Some of the most meaningful startup ideas start with a problem you personally experience and keep asking why it is still happening this way.',
    'Some of the most meaningful startup ideas start with a problem you personally experience and keep asking why it is still happening this way.',
    true,
    '2026-09-30T00:00:00+00:00'::timestamptz,
    ARRAY['Startups', 'Healthcare'],
    'Healthcare · Startups',
    'https://www.linkedin.com/in/hasibcuetmie/recent-activity/all/',
    false
  );

-- Keep RLS explicit: anonymous users can only SELECT published rows.
DROP POLICY IF EXISTS "Anyone can view published blog posts" ON blog_posts;
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (published = true);
