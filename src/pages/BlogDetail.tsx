
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, ChevronRight, Clock, User, Share2, Bookmark, ThumbsUp, Facebook, Twitter, Linkedin, Link2, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CookieConsent from '@/components/CookieConsent';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { getBlogPostBySlug, getRelatedBlogPosts } from '@/data/blogPosts';
import { BlogPost } from '@/types/blog';

const BlogDetail: React.FC = () => {
  const { blogSlug } = useParams<{ blogSlug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  
  useEffect(() => {
    if (blogSlug) {
      const foundPost = getBlogPostBySlug(blogSlug);
      if (foundPost) {
        setPost(foundPost);
        
        // Get related posts
        const related = getRelatedBlogPosts(foundPost.id, foundPost.category);
        setRelatedPosts(related);
        
        // Set initial likes randomly
        setLikes(Math.floor(Math.random() * 50) + 5);
      } else {
        navigate('/blog');
      }
    }
  }, [blogSlug, navigate]);
  
  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
    } else {
      setLikes(prev => prev - 1);
      setHasLiked(false);
    }
  };
  
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  
  const handleShare = (platform: string) => {
    let shareUrl = '';
    const postUrl = window.location.href;
    const title = post?.title || 'Blog artikel';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(title)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(postUrl);
        alert('Link gekopieerd naar klembord!');
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Artikel wordt geladen...</h1>
            <Button asChild variant="outline">
              <Link to="/blog">Terug naar blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{post.title} | Duurzaam Wonen Nederland</title>
        <meta name="description" content={post.excerpt} />
        <meta name="google-site-verification" content="wctWfdTl0t8aKSX4NrFSv-Rhb4YyTREltwTINnU0gXY" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.featuredImage} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-brand-green">Home</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link to="/blog" className="hover:text-brand-green">Blog</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-gray-900 font-medium truncate">{post.title}</span>
            </nav>
          </div>
        </div>
        
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Button variant="outline" size="sm" asChild className="mb-8">
                <Link to="/blog" className="flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Terug naar blog
                </Link>
              </Button>
              
              {/* Article Header */}
              <div className="mb-8">
                <Badge className="mb-4 capitalize">{post.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-gray-600">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-gray-900">{post.author.name}</div>
                      <div className="text-sm text-gray-500">{post.author.title}</div>
                    </div>
                  </div>
                  <Separator orientation="vertical" className="hidden sm:block h-6" />
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(post.publishedDate)}
                  </div>
                  <Separator orientation="vertical" className="hidden sm:block h-6" />
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime} min leestijd
                  </div>
                </div>
              </div>
              
              {/* Featured Image */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={post.featuredImage} 
                  alt={post.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Social Sharing & Actions */}
              <div className="flex flex-wrap gap-4 justify-between items-center mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className={`rounded-full ${hasLiked ? 'bg-brand-green/10 text-brand-green' : ''}`}
                          onClick={handleLike}
                        >
                          <ThumbsUp className="h-5 w-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{hasLiked ? 'Unlike' : 'Like'} dit artikel</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span className="text-sm text-gray-600">{likes}</span>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className={`rounded-full ${isBookmarked ? 'bg-brand-green/10 text-brand-green' : ''}`}
                          onClick={handleBookmark}
                        >
                          <Bookmark className="h-5 w-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{isBookmarked ? 'Verwijderen van' : 'Opslaan in'} favorieten</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Delen:</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="rounded-full"
                          onClick={() => handleShare('facebook')}
                        >
                          <Facebook className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delen op Facebook</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="rounded-full"
                          onClick={() => handleShare('twitter')}
                        >
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delen op Twitter</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="rounded-full"
                          onClick={() => handleShare('linkedin')}
                        >
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delen op LinkedIn</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="rounded-full"
                          onClick={() => handleShare('copy')}
                        >
                          <Link2 className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Link kopiëren</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              
              {/* Article Content */}
              <div className="prose prose-lg max-w-none mb-10" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="text-gray-600 flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <Link key={tag} to={`/blog?tag=${tag}`}>
                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
              
              {/* Author Bio */}
              <div className="bg-gray-50 rounded-lg p-6 mb-10">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Over {post.author.name}</h3>
                    <p className="text-gray-500 mb-3">{post.author.title}</p>
                    <p className="text-gray-600">
                      {post.author.name} is specialist op het gebied van duurzaam wonen en heeft jarenlange ervaring 
                      in de branche. Met een passie voor innovatie en kwaliteit deelt {post.author.name.split(' ')[0]} 
                      graag kennis en inzichten met onze lezers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">Gerelateerde artikelen</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link to={`/blog/${relatedPost.slug}`} key={relatedPost.id} className="group">
                      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={relatedPost.featuredImage} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="capitalize">{relatedPost.category}</Badge>
                            <span className="text-xs text-gray-500 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {relatedPost.readTime} min
                            </span>
                          </div>
                          <CardTitle className="text-lg group-hover:text-brand-green transition-colors line-clamp-2">
                            {relatedPost.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 line-clamp-2 text-sm mb-3">{relatedPost.excerpt}</p>
                          <span className="text-brand-green text-sm">Lees meer</span>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="py-12 bg-brand-green text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Wilt u meer weten over dit onderwerp?</h2>
              <p className="mb-6">
                Neem contact met ons op voor persoonlijk advies over hoe u uw woning kunt verduurzamen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-brand-green hover:bg-gray-100">
                  Offerte aanvragen
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Neem contact op
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default BlogDetail;
