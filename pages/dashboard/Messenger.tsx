
import React, { useState, useEffect, useRef } from 'react';
import { User, UserRole, Contact, Message } from '../../types';
import { STUDENT_CONTACTS, TEACHER_CONTACTS } from '../../constants';

interface MessengerProps {
  user: User;
}

const Messenger: React.FC<MessengerProps> = ({ user }) => {
  const contacts = user.role === UserRole.STUDENT ? STUDENT_CONTACTS : TEACHER_CONTACTS;
  const [activeContact, setActiveContact] = useState<Contact>(contacts[0]);
  const [messages, setMessages] = useState<Record<string, Message[]>>({
    [contacts[0].id]: [
      { id: '1', senderId: contacts[0].id, text: 'Hello! Have you finished the assignment?', timestamp: '09:30 AM' },
      { id: '2', senderId: user.id, text: 'Almost done! Just working on the conclusion.', timestamp: '09:45 AM' },
    ]
  });
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activeContact]);

  const handleSendMessage = (textOverride?: string) => {
    const finalMsgText = textOverride || inputText;
    if (!finalMsgText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: user.id,
      text: finalMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => ({
      ...prev,
      [activeContact.id]: [...(prev[activeContact.id] || []), newMessage]
    }));
    setInputText('');

    // Simulated auto-reply
    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        senderId: activeContact.id,
        text: 'Understood. I will wait for it.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => ({
        ...prev,
        [activeContact.id]: [...(prev[activeContact.id] || []), reply]
      }));
    }, 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleSendMessage(`[Attached File]: ${file.name}`);
    }
  };

  const summaryCards = [
    { label: 'Unread Messages', value: '8', icon: 'fas fa-envelope', color: 'border-secondary' },
    { label: 'Active Chats', value: '5', icon: 'fas fa-comments', color: 'border-primary' },
    { label: 'Group Chats', value: '3', icon: 'fas fa-users', color: 'border-accent' },
    { label: 'Media Files', value: '12', icon: 'fas fa-photo-video', color: 'border-primary' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, idx) => (
          <div key={idx} className={`bg-white p-6 rounded-xl border-l-4 ${card.color} shadow-sm`}>
            <div className="text-2xl font-bold text-primary mb-1">{card.value}</div>
            <div className="text-[10px] font-bold text-gray uppercase tracking-widest">{card.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-light h-[calc(100vh-320px)] min-h-[500px] flex overflow-hidden">
        {/* Contacts Sidebar */}
        <div className="w-80 border-r border-gray-light flex flex-col shrink-0 bg-light">
          <div className="p-6 border-b border-gray-light bg-white">
            <h3 className="text-lg font-bold text-primary uppercase mb-4">Messages</h3>
            <div className="relative">
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"></i>
              <input 
                type="text" 
                placeholder="Search contacts..." 
                className="w-full pl-10 pr-4 py-2 bg-light border border-gray-light rounded-lg text-sm focus:outline-none focus:border-accent"
              />
            </div>
          </div>
          <div className="flex-grow overflow-y-auto">
            {contacts.map(contact => (
              <button
                key={contact.id}
                onClick={() => setActiveContact(contact)}
                className={`w-full p-4 flex items-center space-x-3 transition-all ${activeContact.id === contact.id ? 'bg-secondary/10 border-l-4 border-secondary' : 'hover:bg-white border-l-4 border-transparent'}`}
              >
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg shrink-0 border-2 border-white shadow-sm">
                  {contact.name.charAt(0)}
                </div>
                <div className="text-left min-w-0 flex-grow">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-bold text-primary truncate">{contact.name}</h4>
                    {contact.unreadCount && (
                      <span className="bg-secondary text-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        {contact.unreadCount}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-gray uppercase font-semibold">{contact.role}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-grow flex flex-col min-w-0">
          <div className="p-4 border-b border-gray-light bg-white flex justify-between items-center shadow-sm z-10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shadow-sm">
                {activeContact.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary">{activeContact.name}</h4>
                <p className="text-[10px] text-green-500 font-bold uppercase flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Online
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray hover:text-accent"><i className="fas fa-phone-alt"></i></button>
              <button className="p-2 text-gray hover:text-accent"><i className="fas fa-video"></i></button>
              <button className="p-2 text-gray hover:text-accent"><i className="fas fa-info-circle"></i></button>
            </div>
          </div>

          <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-light">
            {(messages[activeContact.id] || []).map(msg => (
              <div key={msg.id} className={`flex ${msg.senderId === user.id ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] p-4 rounded-2xl shadow-sm text-sm ${
                  msg.senderId === user.id 
                    ? 'bg-primary text-secondary rounded-tr-none' 
                    : 'bg-white text-primary rounded-tl-none border border-gray-light'
                }`}>
                  <p>{msg.text}</p>
                  <p className={`text-[9px] mt-2 font-bold uppercase ${msg.senderId === user.id ? 'text-secondary/60' : 'text-gray/60'}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-light">
            <div className="flex items-center space-x-4">
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                onChange={handleFileChange}
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <i className="fas fa-paperclip text-xl"></i>
              </button>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <i className="fas fa-camera text-xl"></i>
              </button>
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..." 
                className="flex-grow py-3 px-6 bg-light border border-gray-light rounded-full text-sm focus:outline-none focus:border-secondary transition-all"
              />
              <button 
                onClick={() => handleSendMessage()}
                className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center hover:bg-accent transition-all shadow-md active:scale-90"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
