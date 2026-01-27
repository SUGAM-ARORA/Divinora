import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { BookmarksList } from '@/components/bookmark-system';

export const metadata: Metadata = {
  title: 'My Bookmarks | Divinora',
  description: 'View and manage your saved spiritual content, teachings, and sacred texts.',
};

export default function BookmarksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20">
      <Navbar />
      <div className="nav-container py-8">
        <BookmarksList />
      </div>
    </div>
  );
}