/*
  # Create Form Submissions Table

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting the form
      - `email` (text) - Email address of the submitter
      - `office_type` (text) - Type of office selected (Virtual Office or Physical Office)
      - `message` (text) - Message from the submitter
      - `created_at` (timestamptz) - Timestamp of when the form was submitted

  2. Security
    - Enable RLS on `form_submissions` table
    - Add policy for service role to insert form submissions (for backend operations)
    - Form submissions are write-only from the frontend perspective for privacy

  3. Notes
    - This table stores all contact form submissions for tracking and follow-up
    - The created_at timestamp helps with organizing and prioritizing leads
    - RLS ensures that only authorized operations can access submission data
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  office_type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert their own form submissions
CREATE POLICY "Anyone can submit the contact form"
  ON form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);