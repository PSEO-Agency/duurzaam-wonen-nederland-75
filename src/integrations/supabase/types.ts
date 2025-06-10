export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      cities: {
        Row: {
          created_at: string
          description: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          name: string
          region_id: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          name: string
          region_id: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          name?: string
          region_id?: string
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cities_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "regions"
            referencedColumns: ["id"]
          },
        ]
      }
      city_services: {
        Row: {
          benefits: Json | null
          city_id: string
          created_at: string
          custom_description: string | null
          custom_meta_description: string | null
          custom_meta_title: string | null
          custom_title: string | null
          features: Json | null
          id: string
          is_active: boolean
          pricing_info: string | null
          service_id: string
          updated_at: string
        }
        Insert: {
          benefits?: Json | null
          city_id: string
          created_at?: string
          custom_description?: string | null
          custom_meta_description?: string | null
          custom_meta_title?: string | null
          custom_title?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean
          pricing_info?: string | null
          service_id: string
          updated_at?: string
        }
        Update: {
          benefits?: Json | null
          city_id?: string
          created_at?: string
          custom_description?: string | null
          custom_meta_description?: string | null
          custom_meta_title?: string | null
          custom_title?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean
          pricing_info?: string | null
          service_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "city_services_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "city_services_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      neighborhoods: {
        Row: {
          city_id: string
          created_at: string
          description: string | null
          id: string
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          city_id: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          city_id?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "neighborhoods_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
        ]
      }
      product_categories: {
        Row: {
          created_at: string
          description: string | null
          icon_name: string | null
          id: string
          is_active: boolean | null
          name: string
          slug: string
          sort_order: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon_name?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          slug: string
          sort_order?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon_name?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          slug?: string
          sort_order?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          benefits: Json | null
          category_id: string | null
          created_at: string
          description: string | null
          faq: Json | null
          features: Json | null
          hero_description: string | null
          hero_image_url: string | null
          hero_title: string | null
          icon_name: string | null
          id: string
          intro_text: string | null
          is_active: boolean | null
          meta_description: string | null
          meta_title: string | null
          name: string
          pricing_info: string | null
          quick_links: Json | null
          slug: string
          sort_order: number | null
          updated_at: string
          what_are_description: string | null
          workflow_steps: Json | null
        }
        Insert: {
          benefits?: Json | null
          category_id?: string | null
          created_at?: string
          description?: string | null
          faq?: Json | null
          features?: Json | null
          hero_description?: string | null
          hero_image_url?: string | null
          hero_title?: string | null
          icon_name?: string | null
          id?: string
          intro_text?: string | null
          is_active?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          name: string
          pricing_info?: string | null
          quick_links?: Json | null
          slug: string
          sort_order?: number | null
          updated_at?: string
          what_are_description?: string | null
          workflow_steps?: Json | null
        }
        Update: {
          benefits?: Json | null
          category_id?: string | null
          created_at?: string
          description?: string | null
          faq?: Json | null
          features?: Json | null
          hero_description?: string | null
          hero_image_url?: string | null
          hero_title?: string | null
          icon_name?: string | null
          id?: string
          intro_text?: string | null
          is_active?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          name?: string
          pricing_info?: string | null
          quick_links?: Json | null
          slug?: string
          sort_order?: number | null
          updated_at?: string
          what_are_description?: string | null
          workflow_steps?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      regions: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          benefits: Json | null
          category_id: string | null
          created_at: string
          description: string | null
          faq: Json | null
          features: Json | null
          hero_description: string | null
          hero_image_url: string | null
          hero_title: string | null
          icon_name: string | null
          id: string
          intro_text: string | null
          is_active: boolean | null
          meta_description: string | null
          meta_title: string | null
          name: string
          pricing_info: string | null
          quick_links: Json | null
          slug: string
          sort_order: number | null
          updated_at: string
          what_are_description: string | null
          workflow_steps: Json | null
        }
        Insert: {
          benefits?: Json | null
          category_id?: string | null
          created_at?: string
          description?: string | null
          faq?: Json | null
          features?: Json | null
          hero_description?: string | null
          hero_image_url?: string | null
          hero_title?: string | null
          icon_name?: string | null
          id?: string
          intro_text?: string | null
          is_active?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          name: string
          pricing_info?: string | null
          quick_links?: Json | null
          slug: string
          sort_order?: number | null
          updated_at?: string
          what_are_description?: string | null
          workflow_steps?: Json | null
        }
        Update: {
          benefits?: Json | null
          category_id?: string | null
          created_at?: string
          description?: string | null
          faq?: Json | null
          features?: Json | null
          hero_description?: string | null
          hero_image_url?: string | null
          hero_title?: string | null
          icon_name?: string | null
          id?: string
          intro_text?: string | null
          is_active?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          name?: string
          pricing_info?: string | null
          quick_links?: Json | null
          slug?: string
          sort_order?: number | null
          updated_at?: string
          what_are_description?: string | null
          workflow_steps?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "services_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "solution_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      solution_categories: {
        Row: {
          created_at: string
          description: string | null
          icon_name: string | null
          id: string
          is_active: boolean | null
          name: string
          slug: string
          sort_order: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon_name?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          slug: string
          sort_order?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon_name?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          slug?: string
          sort_order?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      solution_projects: {
        Row: {
          completion_date: string | null
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          is_featured: boolean | null
          location: string | null
          project_type: string | null
          service_id: string
          title: string
          updated_at: string
        }
        Insert: {
          completion_date?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          location?: string | null
          project_type?: string | null
          service_id: string
          title: string
          updated_at?: string
        }
        Update: {
          completion_date?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          location?: string | null
          project_type?: string | null
          service_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "solution_projects_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
