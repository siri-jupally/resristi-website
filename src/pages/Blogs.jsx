import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blogs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Circular Economy', 'Technology', 'Sustainability', 'Industry Insights'];

    const posts = [
        {
            title: "The Science Behind Zero-Waste Management",
            excerpt: "Discover how scientifically validated processes transform waste into valuable resources, eliminating the concept of 'waste' entirely.",
            content: "Zero-waste management isn't just an environmental goal—it's a scientifically rigorous approach to resource conservation. At Resrishti, we employ four proprietary technologies validated by CSIR-IICT to achieve 98.5% landfill diversion...",
            author: "Dr. Priya Sharma",
            date: "Nov 20, 2024",
            readTime: "8 min read",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80",
            tags: ['Zero Waste', 'Science', 'Technology']
        },
        {
            title: "Circular Economy: India's Path to Sustainability",
            excerpt: "How India is leading the transition from linear to circular economic models, creating value from waste and reducing environmental impact.",
            content: "India generates over 150 million tons of waste annually. The circular economy model offers a transformative solution, turning this challenge into an opportunity for economic growth and environmental restoration...",
            author: "Rajesh Kumar",
            date: "Nov 15, 2024",
            readTime: "10 min read",
            category: "Circular Economy",
            image: "https://images.unsplash.com/photo-1503596476-1c12a8ab9a86?auto=format&fit=crop&q=80",
            tags: ['Circular Economy', 'India', 'Policy']
        },
        {
            title: "Pyrolysis Technology: Converting Plastic to Fuel",
            excerpt: "An in-depth look at how advanced pyrolysis technology transforms non-recyclable plastics into valuable alternative fuels.",
            content: "Pyrolysis represents a breakthrough in plastic waste management. By heating plastics in an oxygen-free environment, we break down long polymer chains into shorter hydrocarbons, creating alternative fuels suitable for industrial applications...",
            author: "Dr. Anita Desai",
            date: "Nov 10, 2024",
            readTime: "12 min read",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&q=80",
            tags: ['Pyrolysis', 'Plastic', 'Innovation']
        },
        {
            title: "Corporate Sustainability: Why Waste Management Matters",
            excerpt: "Understanding the business case for sustainable waste management and how it drives ESG performance and stakeholder value.",
            content: "Corporate sustainability is no longer optional—it's a business imperative. Companies with robust waste management programs see improved ESG ratings, reduced operational costs, and enhanced brand reputation...",
            author: "Vikram Mehta",
            date: "Nov 5, 2024",
            readTime: "7 min read",
            category: "Industry Insights",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
            tags: ['Corporate', 'ESG', 'Business']
        },
        {
            title: "Understanding E-Waste: Challenges and Solutions",
            excerpt: "Electronic waste is the fastest-growing waste stream globally. Learn about the challenges and innovative solutions for e-waste management.",
            content: "E-waste contains valuable materials like gold, silver, and rare earth elements, but also hazardous substances. Proper e-waste management requires specialized processes to recover resources while preventing environmental contamination...",
            author: "Sneha Patel",
            date: "Oct 28, 2024",
            readTime: "9 min read",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80",
            tags: ['E-Waste', 'Electronics', 'Recycling']
        },
        {
            title: "Biogas Generation: Turning Organic Waste into Energy",
            excerpt: "How anaerobic digestion transforms organic waste into clean biogas energy, powering communities sustainably.",
            content: "Biogas generation through anaerobic digestion is a proven technology for converting organic waste into renewable energy. Our AGR (Anaerobic Gas Recovery) systems produce methane-rich biogas that can replace fossil fuels...",
            author: "Dr. Amit Singh",
            date: "Oct 20, 2024",
            readTime: "11 min read",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1503596476-1c12a8ab9a86?auto=format&fit=crop&q=80",
            tags: ['Biogas', 'Renewable Energy', 'Organic Waste']
        },
        {
            title: "The Role of AI in Modern Waste Sorting",
            excerpt: "Artificial intelligence and machine learning are revolutionizing waste sorting, improving efficiency and recovery rates.",
            content: "AI-powered optical sorting systems can identify and separate materials with 99% accuracy, far exceeding manual sorting. These systems use computer vision and machine learning to recognize different types of plastics, metals, and paper...",
            author: "Karthik Reddy",
            date: "Oct 12, 2024",
            readTime: "8 min read",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&q=80",
            tags: ['AI', 'Automation', 'Innovation']
        },
        {
            title: "Building a Circular Economy: Lessons from Global Leaders",
            excerpt: "What can India learn from countries like the Netherlands, Japan, and Germany in building circular economy systems?",
            content: "The Netherlands aims for 100% circular economy by 2050. Japan's 'Sound Material-Cycle Society' has achieved remarkable waste reduction. Germany's dual system for packaging waste recovery serves as a global model...",
            author: "Meera Krishnan",
            date: "Oct 5, 2024",
            readTime: "10 min read",
            category: "Circular Economy",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
            tags: ['Global', 'Best Practices', 'Policy']
        }
    ];

    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold mb-6"
                        >
                            Insights & News
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                                on Sustainability
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
                        >
                            Expert perspectives on waste management, circular economy, and environmental sustainability.
                        </motion.p>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Categories */}
                <section className="py-8 bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                        ? 'bg-emerald-600 text-white shadow-lg'
                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, index) => (
                                <motion.article
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <User className="w-4 h-4" />
                                                <span>{post.author}</span>
                                            </div>
                                        </div>

                                        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>

                                        <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map((tag, idx) => (
                                                <span key={idx} className="flex items-center gap-1 text-xs text-slate-500">
                                                    <Tag className="w-3 h-3" />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-500">{post.readTime}</span>
                                            {index === 0 ? (
                                                <Link to="/blogs/zero-waste-science" className="flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-800 group-hover:gap-3 transition-all">
                                                    Read More
                                                    <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            ) : (
                                                <button className="flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-800 group-hover:gap-3 transition-all">
                                                    Read More
                                                    <ArrowRight className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        {filteredPosts.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-xl text-slate-500">No articles found matching your search.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
                        <p className="text-xl mb-8 text-emerald-100">
                            Subscribe to our newsletter for the latest insights on sustainability and circular economy.
                        </p>
                        <div className="flex gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Blogs;
