import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOGS_DATA } from '../data';
import { BlogPost } from '../types';
import { Clock, ArrowRight, User, ThumbsUp, X, Sparkles } from 'lucide-react';

export default function Blog() {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>({});

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <section id="blog" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="font-mono text-[11px] text-brand-blue font-bold uppercase tracking-widest bg-brand-blue/10 px-3 py-1.5 rounded-full inline-block">
            — LATEST NEWS /
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-none">
            Learn about our <em className="text-brand-blue not-italic font-sans font-light italic">latest news</em> from blog.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-500 font-light max-w-lg mx-auto">
            Stay updated with pro maintenance tips, DIY automotive advice, and guides authored by our workshop masters.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 max-w-6xl mx-auto">
          {BLOGS_DATA.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -6 }}
              onClick={() => setActiveArticle(post)}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-200 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header Image */}
                <div className="relative h-28 sm:h-48 w-full overflow-hidden bg-slate-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-mono font-bold text-brand-blue uppercase tracking-wider shadow">
                    {post.category}
                  </div>
                </div>

                {/* Info & Title */}
                <div className="p-3 sm:p-6 space-y-1.5 sm:space-y-3">
                  <div className="flex items-center gap-1.5 sm:gap-3 text-gray-400 text-[10px] sm:text-xs font-sans">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-blue" />
                      <span>{post.readTime}</span>
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline">{post.date}</span>
                  </div>

                  <h3 className="font-display font-bold text-xs sm:text-lg text-slate-900 group-hover:text-brand-blue leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="font-sans text-[10px] sm:text-xs text-gray-500 font-light leading-relaxed line-clamp-1 sm:line-clamp-2">
                    An in-depth article analyzing modern vehicle specifications, service intervals, and optimization guidelines.
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-3 sm:px-6 py-2 sm:py-4 border-t border-slate-50 flex items-center justify-between">
                <button
                  className="text-brand-blue font-display font-bold text-[10px] sm:text-xs flex items-center gap-1 hover:text-slate-800 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>

                <button
                  onClick={(e) => handleLike(post.id, e)}
                  className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-400 hover:text-red-500 transition-all cursor-pointer"
                  title="Like Article"
                >
                  <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{likes[post.id] || 0}</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Article Detail Overlay Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 bg-slate-900 text-white p-2 rounded-full hover:bg-brand-blue transition-colors z-20"
                aria-label="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Banner Image */}
              <div className="h-60 w-full relative bg-slate-200">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white space-y-2">
                  <span className="bg-brand-blue text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {activeArticle.category}
                  </span>
                  <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight leading-tight max-w-xl">
                    {activeArticle.title}
                  </h3>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 md:p-8 space-y-5 font-sans text-sm text-gray-600 leading-relaxed font-light">
                <div className="flex items-center gap-4 text-xs text-gray-400 pb-4 border-b border-slate-100">
                  <span className="flex items-center gap-1.5 text-brand-blue">
                    <User className="w-4 h-4" />
                    <span>By {activeArticle.author || 'FixMyCarHub Editorial'}</span>
                  </span>
                  <span>|</span>
                  <span>{activeArticle.date}</span>
                  <span>|</span>
                  <span>{activeArticle.readTime}</span>
                </div>

                <div className="space-y-4">
                  <p className="font-semibold text-slate-800 leading-relaxed">
                    {activeArticle.excerpt}
                  </p>
                  
                  {activeArticle.content && activeArticle.content.map((paragraph, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-display font-black text-slate-900 text-base pt-2 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        <span>{paragraph.h}</span>
                      </h4>
                      <p className="font-sans text-xs text-gray-500 font-light leading-relaxed">
                        {paragraph.p}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-100 text-center">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="bg-brand-blue hover:bg-brand-blue/90 text-white font-display font-semibold text-xs px-6 py-3 rounded-full shadow transition-all cursor-pointer"
                  >
                    Close & Return to Blog
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
