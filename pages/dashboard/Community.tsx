
import React, { useState, useRef } from 'react';
import { User, UserRole } from '../../types';
import { SAMPLE_POSTS } from '../../constants';

interface CommunityProps {
  user: User;
}

const Community: React.FC<CommunityProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('school');
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState(SAMPLE_POSTS);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const tabs = user.role === UserRole.STUDENT 
    ? [ { id: 'school', label: 'School Community' }, { id: 'grade', label: `${user.grade} Group` }, { id: 'class', label: `Class ${user.className}` } ]
    : [ { id: 'school', label: 'Staff Community' }, { id: 'dept', label: `${user.subject} Dept` }, { id: 'admin', label: 'Admin Hub' } ];

  const handlePost = (contentOverride?: string) => {
    const content = contentOverride || postContent;
    if (!content.trim()) return;
    const newPost = {
      id: Date.now().toString(),
      authorName: user.name,
      authorRole: user.role === UserRole.STUDENT ? `${user.grade} Student` : `${user.subject} Teacher`,
      authorAvatar: user.name.charAt(0),
      content: content,
      timestamp: 'Just now',
      likes: 0,
      comments: 0
    };
    setPosts([newPost, ...posts]);
    setPostContent('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPostContent(prev => `${prev} [Attached File: ${file.name}]`);
    }
  };

  const handleLike = (postId: string) => {
    setPosts(prev => prev.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleComment = (postId: string) => {
    const comment = prompt("Enter your comment:");
    if (comment) {
      setPosts(prev => prev.map(p => p.id === postId ? { ...p, comments: p.comments + 1 } : p));
    }
  };

  const handleShare = (postId: string) => {
    alert("Post shared with your connections!");
  };

  const summaryCards = [
    { label: 'Total Posts', value: '156', icon: 'fas fa-newspaper', color: 'border-primary' },
    { label: 'Discussions', value: '42', icon: 'fas fa-comment-alt', color: 'border-secondary' },
    { label: 'Resources Shared', value: '89', icon: 'fas fa-share-alt', color: 'border-accent' },
    { label: 'Community Events', value: '12', icon: 'fas fa-calendar-day', color: 'border-primary' },
  ];

  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, idx) => (
          <div key={idx} className={`bg-white p-6 rounded-xl border-l-4 ${card.color} shadow-sm`}>
            <div className="text-2xl font-bold text-primary mb-1">{card.value}</div>
            <div className="text-[10px] font-bold text-gray uppercase tracking-widest">{card.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-light p-1">
        <div className="flex">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-all rounded-lg ${activeTab === tab.id ? 'bg-secondary text-primary shadow-sm' : 'text-gray hover:text-primary hover:bg-light'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 border-t-8 border-primary">
        <div className="flex space-x-4">
          <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-sm">
            {user.name.charAt(0)}
          </div>
          <div className="flex-grow">
            <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
            <textarea 
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="What's on your mind? Share an update, file, or photo..." 
              className="w-full p-4 bg-light border border-gray-light rounded-xl text-sm focus:outline-none focus:border-secondary h-32 transition-all"
            />
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-4">
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="text-gray-400 hover:text-accent transition-colors flex items-center text-xs font-bold uppercase"
                >
                  <i className="fas fa-camera mr-2 text-lg"></i> Photo
                </button>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="text-gray-400 hover:text-accent transition-colors flex items-center text-xs font-bold uppercase"
                >
                  <i className="fas fa-paperclip mr-2 text-lg"></i> File
                </button>
              </div>
              <button 
                onClick={() => handlePost()}
                className="bg-primary text-secondary px-8 py-2 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-accent hover:text-white transition-all shadow-md active:scale-95"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-light overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-light border border-secondary/30 flex items-center justify-center font-bold text-primary text-lg shadow-sm">
                    {post.authorAvatar}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-primary">{post.authorName}</h4>
                    <p className="text-[10px] text-gray uppercase font-semibold">{post.authorRole} • {post.timestamp}</p>
                  </div>
                </div>
                <button className="text-gray-300 hover:text-accent transition-colors"><i className="fas fa-ellipsis-h text-xl"></i></button>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed mb-8 whitespace-pre-wrap">
                {post.content}
              </div>
              <div className="flex items-center space-x-12 pt-6 border-t border-gray-light">
                <button 
                  onClick={() => handleLike(post.id)}
                  className="flex items-center text-xs font-bold text-gray hover:text-red-500 transition-colors"
                >
                  <i className="far fa-heart mr-2 text-xl"></i> {post.likes} Likes
                </button>
                <button 
                  onClick={() => handleComment(post.id)}
                  className="flex items-center text-xs font-bold text-gray hover:text-accent transition-colors"
                >
                  <i className="far fa-comment-alt mr-2 text-xl"></i> {post.comments} Comments
                </button>
                <button 
                  onClick={() => handleShare(post.id)}
                  className="flex items-center text-xs font-bold text-gray hover:text-primary transition-colors"
                >
                  <i className="far fa-share-square mr-2 text-xl"></i> Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
