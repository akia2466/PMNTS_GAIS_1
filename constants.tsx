
import React from 'react';
import { UserRole, GradeEntry, AttendanceRecord, FileData, Contact, Post, Connection } from './types';

export const COLORS = {
  primary: '#000000',
  secondary: '#FFD700',
  accent: '#B8860B',
  light: '#F8F8F8',
  dark: '#222222'
};

export const SAMPLE_GRADES: GradeEntry[] = [
  { subject: 'Mathematics', grade: 'A-', score: 92, teacher: 'Ms. Jennifer Park' },
  { subject: 'Science', grade: 'B+', score: 85, teacher: 'Mr. Michael Yawi' },
  { subject: 'Literature', grade: 'A', score: 95, teacher: 'Dr. Helen Sere' },
  { subject: 'Social Science', grade: 'B', score: 82, teacher: 'Mr. James Gau' },
];

export const SAMPLE_ATTENDANCE: AttendanceRecord[] = [
  { date: '2023-10-25', status: 'Present', subject: 'General' },
  { date: '2023-10-24', status: 'Present', subject: 'General' },
  { date: '2023-10-23', status: 'Late', subject: 'General' },
  { date: '2023-10-20', status: 'Present', subject: 'General' },
  { date: '2023-10-19', status: 'Absent', subject: 'General' },
];

export const SAMPLE_FILES: FileData[] = [
  { id: '1', name: 'Mathematics_Calculus_Assignment.pdf', type: 'pdf', size: '2.4 MB', modifiedDate: 'Oct 24, 2023' },
  { id: '2', name: 'Physics_Lab_Report_Template.docx', type: 'doc', size: '1.1 MB', modifiedDate: 'Oct 22, 2023' },
  { id: '3', name: 'Chemistry_Elements_Chart.xlsx', type: 'xls', size: '4.5 MB', modifiedDate: 'Oct 20, 2023' },
  { id: '4', name: 'Graduation_Ceremony_Draft.pptx', type: 'ppt', size: '8.2 MB', modifiedDate: 'Oct 15, 2023' },
  { id: '5', name: 'Campus_Map_HighRes.png', type: 'img', size: '12.0 MB', modifiedDate: 'Oct 10, 2023' },
  { id: '6', name: 'English_Essay_Guidelines.pdf', type: 'pdf', size: '540 KB', modifiedDate: 'Oct 05, 2023' },
  { id: '7', name: 'Student_Handbook_2023.pdf', type: 'pdf', size: '1.8 MB', modifiedDate: 'Sep 28, 2023' },
  { id: '8', name: 'Calendar_Term4.pdf', type: 'pdf', size: '320 KB', modifiedDate: 'Sep 25, 2023' },
];

export const STUDENT_CONTACTS: Contact[] = [
  { id: 't1', name: 'Mr. Michael Yawi', role: 'Science Teacher', unreadCount: 2 },
  { id: 't2', name: 'Ms. Jennifer Park', role: 'Mathematics Teacher' },
  { id: 's1', name: 'Maria Garcia', role: 'Classmate' },
];

export const TEACHER_CONTACTS: Contact[] = [
  { id: 's1', name: 'Maria Garcia', role: 'Grade 12 Student', unreadCount: 1 },
  { id: 't3', name: 'Dr. Helen Sere', role: 'Literature Department Head' },
  { id: 'p1', name: 'Mr. John Doe', role: 'Parent (Jane Doe)' },
];

export const SAMPLE_POSTS: Post[] = [
  {
    id: 'p1',
    authorName: 'Principal\'s Office',
    authorRole: 'Administration',
    authorAvatar: 'P',
    content: 'Welcome back to Term 4! Please check the updated assembly schedule in the announcements section.',
    timestamp: '2 hours ago',
    likes: 45,
    comments: 12
  },
  {
    id: 'p2',
    authorName: 'Mr. Michael Yawi',
    authorRole: 'Science Department',
    authorAvatar: 'MY',
    content: 'Reminder for Grade 12 students: Lab reports for the titration experiment are due this Friday. No extensions!',
    timestamp: '5 hours ago',
    likes: 22,
    comments: 8
  },
  {
    id: 'p3',
    authorName: 'Student Council',
    authorRole: 'Student Org',
    authorAvatar: 'SC',
    content: 'Who\'s excited for the Inter-school Sports Day? Sign ups for the 100m sprint are now open at the gym!',
    timestamp: '1 day ago',
    likes: 128,
    comments: 34
  }
];

export const STUDENT_FRIENDS: Connection[] = [
  { id: 'sf1', name: 'John Smith', role: 'Grade 12 - Class A', status: 'connected', dateConnected: 'Mar 15, 2023' },
  { id: 'sf2', name: 'Jane Wilson', role: 'Grade 12 - Class B', status: 'connected', dateConnected: 'Feb 10, 2023' },
  { id: 'sr1', name: 'Alex Kila', role: 'Grade 11 - Class C', status: 'received' },
  { id: 'sr2', name: 'Sarah Gima', role: 'Grade 12 - Class A', status: 'pending' },
];

export const TEACHER_COLLEAGUES: Connection[] = [
  { id: 'tc1', name: 'Dr. Helen Sere', role: 'Literature Dept', status: 'connected', dateConnected: 'Jan 20, 2020' },
  { id: 'tc2', name: 'Mr. James Gau', role: 'Social Science Dept', status: 'connected', dateConnected: 'Feb 12, 2021' },
];
