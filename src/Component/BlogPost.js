import { useState } from 'react';
import { ArrowLeft, Share2, Clock, Tag, User } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../pages/Footer';

const blogContent = {
    "latest-developments-in-motor-technology": {
        title: "Latest developments in Motor Technology",
        author: "John Smith",
        content: `Apple's latest M5 Pro chip is set to redefine performance standards with its groundbreaking design...`,
        tags: ["Technology", "Innovation", "Hardware", "Engineering"],
        readTime: "5 min read"
    },
    "advances-in-ai-research": {
        title: "Advances in AI/ML Research",
        author: "Sarah Johnson",
        content: `Content for AI/ML Research article...`,
        tags: ["AI", "Machine Learning", "Research", "Technology"],
        readTime: "7 min read"
    }
};

export default function BlogPost() {
    const { title, category } = useParams();
    const navigate = useNavigate();
    const post = blogContent[title];

    if (!post) {
        return <div className="flex items-center justify-center h-screen text-white">Post not found</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full py-12">
                <button 
                    onClick={() => navigate('/sae-blogs')}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 group"
                >
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    Back to Blogs
                </button>
                
                <div className="flex justify-center mb-6">
                    <span className="bg-blue-900/30 text-blue-400 px-4 py-1 rounded-full text-sm">
                        {category}
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
                    <span className="relative">
                        <span className="absolute inset-0 -z-10 blur-[2px] text-blue-500 opacity-70">{post.title}</span>
                        <span className="relative">{post.title}</span>
                    </span>
                </h1>

                <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
                    <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-blue-400" />
                        <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span>{post.readTime}</span>
                    </div>
                    <button className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                    </button>
                </div>

                <div className="prose prose-invert prose-blue max-w-none text-center leading-relaxed">
                    {post.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-gray-300 text-left">{paragraph}</p>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {post.tags.map((tag, index) => (
                        <span 
                            key={index}
                            className="bg-blue-900/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}