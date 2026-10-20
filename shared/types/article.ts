export interface ArticleData {
  title: string;
  meta_description: string;
  img?: string;
  img_alt?: string;
  img_width?: number;
  img_height?: number;
  date: string;
  datePublished?: string;
  dateModified?: string;
  actor: string;
  actor_img?: string;
  actor_label?: string;
  actor_description?: string;
  tags: string[];
  content: unknown[];
}
