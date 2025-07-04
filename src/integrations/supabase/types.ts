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
      faqs: {
        Row: {
          answer: string
          category: string | null
          created_at: string
          id: string
          is_active: boolean | null
          question: string
          sort_order: number | null
          updated_at: string
        }
        Insert: {
          answer: string
          category?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          question: string
          sort_order?: number | null
          updated_at?: string
        }
        Update: {
          answer?: string
          category?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          question?: string
          sort_order?: number | null
          updated_at?: string
        }
        Relationships: []
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
      og_images: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_url: string
          page_id: string | null
          page_slug: string | null
          page_type: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_url: string
          page_id?: string | null
          page_slug?: string | null
          page_type: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string
          page_id?: string | null
          page_slug?: string | null
          page_type?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
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
      product_faqs: {
        Row: {
          created_at: string
          faq_id: string
          id: string
          product_id: string
          sort_order: number | null
        }
        Insert: {
          created_at?: string
          faq_id: string
          id?: string
          product_id: string
          sort_order?: number | null
        }
        Update: {
          created_at?: string
          faq_id?: string
          id?: string
          product_id?: string
          sort_order?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_faqs_faq_id_fkey"
            columns: ["faq_id"]
            isOneToOne: false
            referencedRelation: "faqs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_faqs_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_locations: {
        Row: {
          created_at: string
          id: string
          product_id: string
          region_id: string
          sort_order: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          product_id: string
          region_id: string
          sort_order?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string
          region_id?: string
          sort_order?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_locations_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_locations_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "regions"
            referencedColumns: ["id"]
          },
        ]
      }
      product_projects: {
        Row: {
          created_at: string
          id: string
          product_id: string
          project_id: string
          sort_order: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          product_id: string
          project_id: string
          sort_order?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string
          project_id?: string
          sort_order?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_projects_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_projects_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          benefits: Json | null
          benefits_cta_link: string | null
          benefits_cta_text: string | null
          benefits_description: string | null
          benefits_main_content: Json | null
          benefits_stats: Json | null
          benefits_title: string | null
          category_id: string | null
          created_at: string
          description: string | null
          faq: Json | null
          faq_description: string | null
          faq_title: string | null
          features: Json | null
          hero_background_image: string | null
          hero_badge: string | null
          hero_certification_logos: Json | null
          hero_description: string | null
          hero_guarantees: Json | null
          hero_image_url: string | null
          hero_primary_button_link: string | null
          hero_primary_button_text: string | null
          hero_secondary_button_link: string | null
          hero_secondary_button_text: string | null
          hero_title: string | null
          icon_name: string | null
          id: string
          information_did_you_know: Json | null
          information_image: string | null
          information_image_alt: string | null
          information_tabs: Json | null
          information_title: string | null
          intro_text: string | null
          introduction_content: Json | null
          introduction_cta_link: string | null
          introduction_cta_text: string | null
          introduction_quick_links: Json | null
          introduction_title: string | null
          is_active: boolean | null
          meta_description: string | null
          meta_title: string | null
          name: string
          options_categories: Json | null
          options_description: string | null
          options_title: string | null
          preview_image: string | null
          pricing_info: string | null
          quick_links: Json | null
          seo_canonical_url: string | null
          seo_description: string | null
          seo_title: string | null
          services_description: string | null
          services_items: Json | null
          services_title: string | null
          show_regions: boolean | null
          slug: string
          sort_order: number | null
          template_type: string | null
          updated_at: string
          what_are_content: Json | null
          what_are_description: string | null
          what_are_title: string | null
          what_are_video_title: string | null
          what_are_video_url: string | null
          workflow_steps: Json | null
        }
        Insert: {
          benefits?: Json | null
          benefits_cta_link?: string | null
          benefits_cta_text?: string | null
          benefits_description?: string | null
          benefits_main_content?: Json | null
          benefits_stats?: Json | null
          benefits_title?: string | null
          category_id?: string | null
          created_at?: string
          description?: string | null
          faq?: Json | null
          faq_description?: string | null
          faq_title?: string | null
          features?: Json | null
          hero_background_image?: string | null
          hero_badge?: string | null
          hero_certification_logos?: Json | null
          hero_description?: string | null
          hero_guarantees?: Json | null
          hero_image_url?: string | null
          hero_primary_button_link?: string | null
          hero_primary_button_text?: string | null
          hero_secondary_button_link?: string | null
          hero_secondary_button_text?: string | null
          hero_title?: string | null
          icon_name?: string | null
          id?: string
          information_did_you_know?: Json | null
          information_image?: string | null
          information_image_alt?: string | null
          information_tabs?: Json | null
          information_title?: string | null
          intro_text?: string | null
          introduction_content?: Json | null
          introduction_cta_link?: string | null
          introduction_cta_text?: string | null
          introduction_quick_links?: Json | null
          introduction_title?: string | null
          is_active?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          name: string
          options_categories?: Json | null
          options_description?: string | null
          options_title?: string | null
          preview_image?: string | null
          pricing_info?: string | null
          quick_links?: Json | null
          seo_canonical_url?: string | null
          seo_description?: string | null
          seo_title?: string | null
          services_description?: string | null
          services_items?: Json | null
          services_title?: string | null
          show_regions?: boolean | null
          slug: string
          sort_order?: number | null
          template_type?: string | null
          updated_at?: string
          what_are_content?: Json | null
          what_are_description?: string | null
          what_are_title?: string | null
          what_are_video_title?: string | null
          what_are_video_url?: string | null
          workflow_steps?: Json | null
        }
        Update: {
          benefits?: Json | null
          benefits_cta_link?: string | null
          benefits_cta_text?: string | null
          benefits_description?: string | null
          benefits_main_content?: Json | null
          benefits_stats?: Json | null
          benefits_title?: string | null
          category_id?: string | null
          created_at?: string
          description?: string | null
          faq?: Json | null
          faq_description?: string | null
          faq_title?: string | null
          features?: Json | null
          hero_background_image?: string | null
          hero_badge?: string | null
          hero_certification_logos?: Json | null
          hero_description?: string | null
          hero_guarantees?: Json | null
          hero_image_url?: string | null
          hero_primary_button_link?: string | null
          hero_primary_button_text?: string | null
          hero_secondary_button_link?: string | null
          hero_secondary_button_text?: string | null
          hero_title?: string | null
          icon_name?: string | null
          id?: string
          information_did_you_know?: Json | null
          information_image?: string | null
          information_image_alt?: string | null
          information_tabs?: Json | null
          information_title?: string | null
          intro_text?: string | null
          introduction_content?: Json | null
          introduction_cta_link?: string | null
          introduction_cta_text?: string | null
          introduction_quick_links?: Json | null
          introduction_title?: string | null
          is_active?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          name?: string
          options_categories?: Json | null
          options_description?: string | null
          options_title?: string | null
          preview_image?: string | null
          pricing_info?: string | null
          quick_links?: Json | null
          seo_canonical_url?: string | null
          seo_description?: string | null
          seo_title?: string | null
          services_description?: string | null
          services_items?: Json | null
          services_title?: string | null
          show_regions?: boolean | null
          slug?: string
          sort_order?: number | null
          template_type?: string | null
          updated_at?: string
          what_are_content?: Json | null
          what_are_description?: string | null
          what_are_title?: string | null
          what_are_video_title?: string | null
          what_are_video_url?: string | null
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
      projects: {
        Row: {
          completion_date: string | null
          created_at: string
          description: string | null
          featured_image: string | null
          gallery_images: Json | null
          id: string
          image_url: string | null
          is_active: boolean | null
          is_featured: boolean | null
          location: string | null
          project_type: string | null
          sort_order: number | null
          title: string
          updated_at: string
        }
        Insert: {
          completion_date?: string | null
          created_at?: string
          description?: string | null
          featured_image?: string | null
          gallery_images?: Json | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          is_featured?: boolean | null
          location?: string | null
          project_type?: string | null
          sort_order?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          completion_date?: string | null
          created_at?: string
          description?: string | null
          featured_image?: string | null
          gallery_images?: Json | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          is_featured?: boolean | null
          location?: string | null
          project_type?: string | null
          sort_order?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: []
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
