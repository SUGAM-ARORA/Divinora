/*
  # Bookmarks System

  1. New Tables
    - `bookmarks`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `content_type` (text) - deity, story, teaching, festival, text
      - `content_id` (text) - identifier for the content
      - `title` (text) - title of the bookmarked content
      - `description` (text, optional) - description of the content
      - `category` (text, optional) - category/religion of the content
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `bookmarks` table
    - Add policies for users to manage their own bookmarks
*/

CREATE TABLE IF NOT EXISTS bookmarks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  content_type text NOT NULL CHECK (content_type IN ('deity', 'story', 'teaching', 'festival', 'text')),
  content_id text NOT NULL,
  title text NOT NULL,
  description text,
  category text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, content_id)
);

ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own bookmarks"
  ON bookmarks
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own bookmarks"
  ON bookmarks
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own bookmarks"
  ON bookmarks
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS bookmarks_user_id_idx ON bookmarks(user_id);
CREATE INDEX IF NOT EXISTS bookmarks_content_type_idx ON bookmarks(content_type);
CREATE INDEX IF NOT EXISTS bookmarks_created_at_idx ON bookmarks(created_at DESC);