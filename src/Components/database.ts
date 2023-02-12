export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      classes: {
        Row: {
          id: number
          name: string | null
          owner: string | null
          pin: number | null
          timestamp: string | null
        }
        Insert: {
          id?: number
          name?: string | null
          owner?: string | null
          pin?: number | null
          timestamp?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          owner?: string | null
          pin?: number | null
          timestamp?: string | null
        }
      }
      messages: {
        Row: {
          class: number
          content: string | null
          created_at: string | null
          id: number
          is_reaction: boolean
          upvotes: number
          user: string | null
        }
        Insert: {
          class: number
          content?: string | null
          created_at?: string | null
          id?: number
          is_reaction?: boolean
          upvotes?: number
          user?: string | null
        }
        Update: {
          class?: number
          content?: string | null
          created_at?: string | null
          id?: number
          is_reaction?: boolean
          upvotes?: number
          user?: string | null
        }
      }
      profiles: {
        Row: {
          name: string
          pronouns: string | null
          user_id: string
        }
        Insert: {
          name: string
          pronouns?: string | null
          user_id: string
        }
        Update: {
          name?: string
          pronouns?: string | null
          user_id?: string
        }
      }
      upvotes: {
        Row: {
          id: number
          message: number | null
          user: string | null
        }
        Insert: {
          id?: number
          message?: number | null
          user?: string | null
        }
        Update: {
          id?: number
          message?: number | null
          user?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}