export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
          tags: string[];
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          excerpt?: string;
          content: string;
          published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
          tags?: string[];
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          excerpt?: string;
          content?: string;
          published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
          tags?: string[];
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          message: string;
          created_at: string;
          read: boolean;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          message: string;
          created_at?: string;
          read?: boolean;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          message?: string;
          created_at?: string;
          read?: boolean;
        };
      };
    };
  };
}
