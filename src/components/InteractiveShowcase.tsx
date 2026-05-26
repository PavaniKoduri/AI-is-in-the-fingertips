import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Check, 
  Plus, 
  Trash2, 
  Heart, 
  Smile, 
  Palette, 
  Coffee, 
  PartyPopper,
  Bookmark,
  Send,
  Camera
} from 'lucide-react';
import { InteractiveTask, PolaroidNote } from '../types';
import { INITIAL_TASKS } from '../data';

interface InteractiveShowcaseProps {
  currentTheme: string;
  setTheme: (theme: string) => void;
  themes: { id: string; name: string; colors: string; text: string; gradient: string }[];
}

export default function InteractiveShowcase({ currentTheme, setTheme, themes }: InteractiveShowcaseProps) {
  // Task State
  const [tasks, setTasks] = useState<InteractiveTask[]>(INITIAL_TASKS);
  const [newTaskText, setNewTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState<'Dreaming' | 'Writing' | 'Creating' | 'Unwinding'>('Creating');

  // Polaroid State
  const [notes, setNotes] = useState<PolaroidNote[]>([
    {
      id: 'note-1',
      content: 'Make today absolutely magical ✨',
      sticker: '🌸',
      rotation: 'rotate-1',
      createdAt: '11:11 AM'
    },
    {
      id: 'note-2',
      content: 'Water the pastel orchids 🌿',
      sticker: '💧',
      rotation: '-rotate-2',
      createdAt: '10:05 AM'
    }
  ]);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [selectedSticker, setSelectedSticker] = useState('💫');

  const stickers = ['🌸', '💫', '🧸', '🌈', '🍦', '🍡', '🍵', '🍋', '☁️', '🎨'];

  // Categories & Colors
  const categoryStyles = {
    Dreaming: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    Writing: 'bg-rose-50 text-rose-600 border-rose-100',
    Creating: 'bg-orange-50 text-orange-600 border-orange-100',
    Unwinding: 'bg-emerald-50 text-emerald-600 border-emerald-100'
  };

  // Handlers
  const handleToggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    
    const colors = {
      Dreaming: 'bg-indigo-100 text-indigo-700',
      Writing: 'bg-rose-100 text-rose-700',
      Creating: 'bg-orange-100 text-orange-700',
      Unwinding: 'bg-emerald-100 text-emerald-700'
    };

    const newTask: InteractiveTask = {
      id: `task-${Date.now()}`,
      text: newTaskText,
      completed: false,
      category: taskCategory,
      color: colors[taskCategory]
    };

    setTasks(prev => [...prev, newTask]);
    setNewTaskText('');
  };

  const handleDeleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteContent.trim()) return;

    const angleOptions = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-3', '-rotate-3'];
    const randomAngle = angleOptions[Math.floor(Math.random() * angleOptions.length)];

    const newNote: PolaroidNote = {
      id: `note-${Date.now()}`,
      content: newNoteContent,
      sticker: selectedSticker,
      rotation: randomAngle,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setNotes(prev => [newNote, ...prev].slice(0, 4)); // Max 4 to prevent clutter
    setNewNoteContent('');
  };

  const handleDeleteNote = (id: string) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  // Calculated Stats
  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  return (
    <section id="interactive-workspace" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-transparent to-white/40">
      
      {/* Decorative Blur Background circles */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#ffadd2]/20 via-[#91d5ff]/15 to-[#ffe58f]/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-purple-100 text-purple-600 font-cute text-sm font-semibold mb-4 shadow-sm"
          >
            <Palette className="w-4 h-4 text-pink-400" />
            <span>Interactive Sandbox Playground</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-800 tracking-tight"
          >
            A soft space for your <span className="text-purple-500 font-medium">highest intentions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto mt-4 font-sans text-base leading-relaxed md:text-lg"
          >
            Try testing our live mini workspaces below. Choose your ambient profile, toggle gentle habits, or post fresh motivational vibes!
          </motion.p>
        </div>

        {/* Workspace custom grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controller & Space Styling panel */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="glass-card rounded-3xl p-6 shadow-sm border-slate-100/60 flex-1 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 flex items-center justify-center text-white shadow-sm">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-slate-800 text-lg">Ambient Profile</h3>
                  <p className="text-xs text-slate-400 font-sans">Click to recolor whole experience</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                {themes.map((theme) => {
                  const isActive = currentTheme === theme.id;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => setTheme(theme.id)}
                      className={`relative group p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 h-28 ${
                        isActive 
                          ? 'border-slate-800 shadow-sm ring-2 ring-slate-800/10' 
                          : 'border-slate-100 bg-white/70 hover:bg-white hover:shadow-sm hover:border-slate-200'
                      }`}
                    >
                      <div className="flex gap-1.5 items-center">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-tr ${theme.gradient} shadow-xs`} />
                        <span className="text-xs font-semibold text-slate-700 font-display">{theme.name}</span>
                      </div>
                      
                      <div className="mt-3 text-[10px] text-slate-400 font-sans leading-tight">
                        Smooth soft flow tuned to cozy {theme.name.toLowerCase()} breezes.
                      </div>

                      {isActive && (
                        <span className="absolute top-2 right-2 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-600"></span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Extra cute stat */}
              <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-xl pointer-events-none" />
                <span className="text-xs text-slate-400 block font-sans">Active Sandbox Users Currently</span>
                <span className="text-2xl font-display font-bold text-slate-700 mt-1 block">8,419 ✨</span>
                <span className="text-[10px] text-teal-600 font-cute mt-0.5 inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" /> Live connection synced
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Workspace Area */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Widget 1: Dynamic Habit Lists */}
            <div className="glass-card rounded-3xl p-6 shadow-sm border-slate-100/60 flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-pink-500 font-bold bg-pink-50 px-2 py-0.5 rounded-full">
                      Productive Flow
                    </span>
                    <h4 className="font-display font-bold text-slate-800 text-lg mt-1">Gentle Rituals</h4>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-sans">
                    <Coffee className="w-4 h-4 text-amber-400" />
                    <span>Focus State</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-6 bg-slate-100 rounded-full h-2 overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    className="absolute h-full rounded-full bg-gradient-to-r from-pink-400 via-purple-300 to-blue-400"
                    transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                  />
                </div>

                {/* Tasks List rendering */}
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  <AnimatePresence initial={false}>
                    {tasks.map((task) => (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`flex items-center justify-between p-2.5 rounded-xl border transition-all duration-300 group/item ${
                          task.completed 
                            ? 'bg-slate-50/50 border-slate-100 opacity-65' 
                            : 'bg-white border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.01)] hover:border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 flex-1 min-w-0">
                          <button
                            onClick={() => handleToggleTask(task.id)}
                            className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                              task.completed 
                                ? 'bg-emerald-400 text-white' 
                                : 'border border-slate-300 hover:border-pink-300 bg-white'
                            }`}
                          >
                            {task.completed && <Check className="w-3.5 h-3.5 stroke-[3px]" />}
                          </button>
                          
                          <span className={`text-xs font-sans truncate ${task.completed ? 'line-through text-slate-400' : 'text-slate-700 font-medium'}`}>
                            {task.text}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${categoryStyles[task.category].split(' ')[0]} ${categoryStyles[task.category].split(' ')[1]}`}>
                            {task.category}
                          </span>
                          
                          <button
                            onClick={() => handleDeleteTask(task.id)}
                            className="text-slate-300 hover:text-rose-400 p-1 opacity-0 group-hover/item:opacity-100 transition-opacity"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {tasks.length === 0 && (
                    <div className="text-center py-8 text-slate-400 text-xs font-sans">
                      🌱 All clear! Feel free to add new sweet goals.
                    </div>
                  )}
                </div>
              </div>

              {/* Add Task Form */}
              <form onSubmit={handleAddTask} className="mt-5 border-t border-slate-100/80 pt-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      className="w-full pl-3 pr-20 py-2 rounded-xl text-xs border border-slate-100 bg-slate-50/50 text-slate-700 placeholder:text-slate-400 focus:outline-hidden focus:border-pink-300 focus:bg-white transition-all font-sans"
                      placeholder="Add a new aesthetic habit..."
                      value={newTaskText}
                      onChange={e => setNewTaskText(e.target.value)}
                    />
                    
                    {/* Category Selector Pill */}
                    <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex gap-1">
                      <select
                        className="text-[9px] bg-white border border-slate-200 rounded-md px-1.5 py-0.5 text-slate-500 focus:outline-hidden font-cute"
                        value={taskCategory}
                        onChange={e => setTaskCategory(e.target.value as any)}
                      >
                        <option value="Creating">Create</option>
                        <option value="Dreaming">Dream</option>
                        <option value="Writing">Write</option>
                        <option value="Unwinding">Rest</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="p-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all shadow-sm"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Widget 2: Polaroid Sticker Board */}
            <div className="glass-card rounded-3xl p-6 shadow-sm border-slate-100/60 flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden bg-radial from-white to-[#fafbfc]">
              
              {/* Cute polaroid styling */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-orange-500 font-bold bg-orange-50 px-2 py-0.5 rounded-full">
                      Mind Mapping
                    </span>
                    <h4 className="font-display font-bold text-slate-800 text-lg mt-1">Creative Pinned Space</h4>
                  </div>
                  <Camera className="w-5 h-5 text-purple-400" />
                </div>

                {/* Pin Space grid */}
                <div className="grid grid-cols-2 gap-3 min-h-48 relative p-1 leading-normal">
                  <AnimatePresence>
                    {notes.map((note) => (
                      <motion.div
                        key={note.id}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className={`bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-slate-100 p-2.5 rounded-sm relative flex flex-col justify-between select-none ${note.rotation} transform duration-300 hover:scale-105 active:scale-95 cursor-pointer group/note`}
                      >
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-3 bg-red-100/80 rounded-sm shadow-xs border-b border-red-200/50" />
                        
                        <div className="text-[10px] text-zinc-500 font-cute text-center tracking-tight leading-relaxed italic pr-4">
                          {note.content}
                        </div>

                        <div className="flex justify-between items-center mt-3 border-t border-slate-50 pt-1.5">
                          <span className="text-[8px] text-slate-400 font-sans">{note.createdAt}</span>
                          <span className="text-sm">{note.sticker}</span>
                        </div>

                        <button
                          onClick={() => handleDeleteNote(note.id)}
                          className="absolute -top-1 -right-1 bg-slate-900/10 hover:bg-rose-500 hover:text-white p-0.5 rounded-full text-zinc-400 hover:scale-110 pointer-events-auto opacity-0 group-hover/note:opacity-100 transition-all"
                        >
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Add Note & sticker board */}
              <form onSubmit={handleCreateNote} className="space-y-3 mt-4 border-t border-slate-100/80 pt-3">
                {/* Sticker picker */}
                <div className="flex justify-between items-center gap-1">
                  <span className="text-[9px] text-slate-400 font-semibold uppercase">Attach Sticker:</span>
                  <div className="flex gap-1 overflow-x-auto py-0.5 flex-1 justify-end max-w-full">
                    {stickers.map(st => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => setSelectedSticker(st)}
                        className={`text-xs p-1 rounded-sm transition-transform hover:scale-125 ${selectedSticker === st ? 'bg-purple-100 scale-110 border border-purple-200' : ''}`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    maxLength={32}
                    className="flex-1 px-3 py-2 rounded-xl text-xs border border-slate-100 bg-slate-50/50 text-slate-700 placeholder:text-slate-400 focus:outline-hidden focus:border-orange-300 focus:bg-white transition-all font-sans"
                    placeholder="Short sweet affirmation..."
                    value={newNoteContent}
                    onChange={e => setNewNoteContent(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="p-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all shadow-sm flex items-center justify-center"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
