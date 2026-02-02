
export enum UserRole {
  GUEST = 'guest',
  STUDENT = 'student',
  TEACHER = 'teacher',
  HOD = 'hod',
  PRINCIPAL = 'principal',
  BURSAR = 'bursar',
  ADMISSIONS = 'admissions',
  ADMIN = 'admin'
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  grade?: string;
  className?: string;
  subject?: string;
  department?: string;
  avatar?: string;
}

export interface FileData {
  id: string;
  name: string;
  type: 'pdf' | 'doc' | 'xls' | 'ppt' | 'img' | 'other';
  size: string;
  modifiedDate: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  unreadCount?: number;
}

export interface Post {
  id: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  attachments?: string[];
}

export interface AttendanceRecord {
  date: string;
  status: 'Present' | 'Absent' | 'Late' | 'Excused';
  subject: string;
}

export interface GradeEntry {
  subject: string;
  grade: string;
  score: number;
  teacher: string;
}

export interface Connection {
  id: string;
  name: string;
  role: string;
  status: 'connected' | 'pending' | 'received';
  dateConnected?: string;
}
