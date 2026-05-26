import { Feature, Testimonial, InteractiveTask } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'aesthetic-space',
    title: 'Aesthetic Spaces',
    description: 'Transform your dashboard into custom styled pastel workspace layouts. Designed to inspire focus, visual clarity, and calm.',
    iconName: 'LayoutGrid',
    colorClass: 'bg-[#fff0f6]/80 text-[#eb2f96] border-[#ffd6e7]',
    accentColor: '#eb2f96',
    badgeText: 'Inspire'
  },
  {
    id: 'flow-timer',
    title: 'Mindful Flow Blocks',
    description: 'Structure your day with our signature soft audio loops and smooth visual intervals. Cultivate a deeply focused rhythm without anxiety.',
    iconName: 'Sparkles',
    colorClass: 'bg-[#e6f7ff]/80 text-[#1890ff] border-[#bae7ff]',
    accentColor: '#1890ff',
    badgeText: 'Focus'
  },
  {
    id: 'scrapbooks',
    title: 'Creative Canvas',
    description: 'Capture instant thoughts, mood references, and design captures. Drag and drop sticky stickers onto Polaroid polar grids.',
    iconName: 'Heart',
    colorClass: 'bg-[#fff2e8]/80 text-[#fa541c] border-[#ffd8bf]',
    accentColor: '#fa541c',
    badgeText: 'Play'
  },
  {
    id: 'insights',
    title: 'Gentle Routines',
    description: 'Build kind habits through organic streak bubbles rather than harsh checklists. Celebrate the tiny victories every day.',
    iconName: 'CalendarRange',
    colorClass: 'bg-[#f6ffed]/80 text-[#52c41a] border-[#d9f7be]',
    accentColor: '#52c41a',
    badgeText: 'Grow'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Chloe Evans',
    username: '@chloe.creates',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    comment: 'It is the first digital organiser that actually makes me feel peaceful while using it. The soft rainbow background waves are complete pure serotonin.',
    rating: 5,
    bgPastel: 'bg-[#fff0f6]/40 border-[#ffadd2]/30',
    iconColor: 'text-[#eb2f96]'
  },
  {
    id: 't2',
    name: 'Kaito Sato',
    username: '@softcode_kai',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    comment: 'Most SaaS tools feel cold and hyper-corporate. This is a delightful return to a playful, elegant, and dreamy interface style. A true masterpiece.',
    rating: 5,
    bgPastel: 'bg-[#e6f7ff]/40 border-[#91d5ff]/30',
    iconColor: 'text-[#1890ff]'
  },
  {
    id: 't3',
    name: 'Amélie Laurent',
    username: '@mle.design',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    comment: 'Absolute aesthetic perfection. The smooth gestures, soft lighting, and rounded typography feel custom-tailored for creative minds.',
    rating: 5,
    bgPastel: 'bg-[#f9f0ff]/40 border-[#d3adf7]/30',
    iconColor: 'text-[#722ed1]'
  }
];

export const INITIAL_TASKS: InteractiveTask[] = [
  { id: 'task-1', text: 'Select a cozy ambient theme', completed: true, category: 'Dreaming', color: 'bg-indigo-100 text-indigo-700' },
  { id: 'task-2', text: 'Pin thoughts on the Polaroid board', completed: false, category: 'Writing', color: 'bg-rose-100 text-rose-700' },
  { id: 'task-3', text: 'Explore the soft habit tracking bubbles', completed: false, category: 'Creating', color: 'bg-orange-100 text-orange-700' },
  { id: 'task-4', text: 'Enjoy a mini 5-minute breathing block', completed: false, category: 'Unwinding', color: 'bg-emerald-100 text-emerald-700' }
];

export const AVATAR_STROLLERS = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150',
  'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=150'
];
