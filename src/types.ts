export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic rendering
  colorClass: string; // e.g. bg-pastel-pink, border-pink-200
  accentColor: string; // e.g. text-pink-500
  badgeText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  username: string;
  avatar: string;
  comment: string;
  rating: number;
  bgPastel: string;
  iconColor: string;
}

export interface InteractiveTask {
  id: string;
  text: string;
  completed: boolean;
  category: 'Dreaming' | 'Writing' | 'Creating' | 'Unwinding';
  color: string;
}

export interface PolaroidNote {
  id: string;
  content: string;
  sticker: string;
  rotation: string; // CSS rotate class e.g. -rotate-2, rotate-3
  createdAt: string;
}
