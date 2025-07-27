// API response types

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface CreatePostRequest {
  title: string;
  content: string;
  user_id: string;
}

export interface UProGold {
  userId: string;
  upro_gold: number;
}