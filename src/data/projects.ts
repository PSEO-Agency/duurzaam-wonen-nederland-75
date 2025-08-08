
import { Project, ProjectCategory } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Moderne villa met kunststof kozijnen',
    slug: 'moderne-villa-kunststof-kozijnen',
    description: 'Volledige kozijnvervanging voor een moderne villa in Enschede met als resultaat 30% energiebesparing.',
    location: 'Enschede',
    project_type: 'kozijnen',
    completion_date: '2023-06-15',
    image_url: '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png',
    featured_image: '/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png',
    gallery_images: ['/lovable-uploads/f45432a2-b79e-4472-b5b9-daaf325d7017.png', '/lovable-uploads/c5500638-e554-4499-8490-7c52a4ec2a55.png'],
    is_featured: true,
    is_active: true,
    sort_order: 0,
    created_at: '2023-05-20T08:30:00Z',
    updated_at: '2023-05-20T08:30:00Z'
  },
  {
    id: '2',
    title: 'Renovatie jaren 30 woning',
    slug: 'renovatie-jaren-30-woning',
    description: 'Volledige verduurzaming van een karakteristieke jaren 30 woning in Hengelo met behoud van authentieke uitstraling.',
    location: 'Hengelo',
    project_type: 'renovatie',
    completion_date: '2023-04-10',
    image_url: '/lovable-uploads/78d706ca-fb91-4c03-82ca-97b0b0c127eb.png',
    featured_image: '/lovable-uploads/78d706ca-fb91-4c03-82ca-97b0b0c127eb.png',
    gallery_images: ['/lovable-uploads/78d706ca-fb91-4c03-82ca-97b0b0c127eb.png', '/lovable-uploads/16c4e987-ea24-4f28-adf8-f1e4a100cc98.png'],
    is_featured: true,
    is_active: true,
    sort_order: 0,
    created_at: '2023-03-05T10:15:00Z',
    updated_at: '2023-03-05T10:15:00Z'
  },
  {
    id: '3',
    title: 'Dakkapel plaatsing Oldenzaal',
    slug: 'dakkapel-plaatsing-oldenzaal',
    description: 'Prefab dakkapel geplaatst in één dag, waarmee een zolderruimte is getransformeerd tot volwaardige slaapkamer.',
    location: 'Oldenzaal',
    project_type: 'dakkapel',
    completion_date: '2023-08-21',
    image_url: '/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png',
    featured_image: '/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png',
    gallery_images: ['/lovable-uploads/99e8ffe7-223a-46ac-be41-cb3fa5043750.png', '/lovable-uploads/78d706ca-fb91-4c03-82ca-97b0b0c127eb.png'],
    is_featured: false,
    is_active: true,
    sort_order: 0,
    created_at: '2023-08-01T14:45:00Z',
    updated_at: '2023-08-01T14:45:00Z'
  },
  {
    id: '4',
    title: 'Aanbouw keuken Enschede',
    slug: 'aanbouw-keuken-enschede',
    description: 'Uitbreiding woning met aanbouw voor moderne keuken, gerealiseerd in houtskeletbouw met veel glas voor optimale lichtinval.',
    location: 'Enschede',
    project_type: 'aanbouw',
    completion_date: '2023-03-20',
    image_url: '/lovable-uploads/73d57948-a36b-408e-bb8c-aad91f4b7495.png',
    featured_image: '/lovable-uploads/73d57948-a36b-408e-bb8c-aad91f4b7495.png',
    gallery_images: ['/lovable-uploads/73d57948-a36b-408e-bb8c-aad91f4b7495.png', '/lovable-uploads/ab9628a0-733d-4736-833b-7a03e543c615.png'],
    is_featured: true,
    is_active: true,
    sort_order: 0,
    created_at: '2023-01-12T11:30:00Z',
    updated_at: '2023-01-12T11:30:00Z'
  },
  {
    id: '5',
    title: 'Nieuwbouw tiny house',
    slug: 'nieuwbouw-tiny-house',
    description: 'Zelfvoorzienend tiny house met minimale ecologische voetafdruk, gerealiseerd met duurzame materialen en hernieuwbare energie.',
    location: 'Diepenheim',
    project_type: 'nieuwbouw',
    completion_date: '2023-07-05',
    image_url: '/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png',
    featured_image: '/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png',
    gallery_images: ['/lovable-uploads/e923780c-9e14-408a-a016-0b63db9b8daa.png', '/lovable-uploads/bdbc3ea9-f728-449f-9b70-38036a7ea785.png'],
    is_featured: false,
    is_active: true,
    sort_order: 0,
    created_at: '2023-04-18T09:20:00Z',
    updated_at: '2023-04-18T09:20:00Z'
  }
];

export const getProjectCategories = (): ProjectCategory[] => {
  return ['renovatie', 'nieuwbouw', 'verduurzaming', 'kozijnen', 'dakkapel', 'aanbouw'];
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getRelatedProjects = (currentProjectId: string, projectType: string, count: number = 3): Project[] => {
  return projects
    .filter(project => project.id !== currentProjectId && project.project_type === projectType)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};
