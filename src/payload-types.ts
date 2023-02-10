/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    quests: Quest;
    media: Media;
    levels: Level;
    categories: Category;
  };
  globals: {};
}
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string | Media;
  golds?: number;
  quests?: string[] | Quest[];
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
  password?: string;
}
export interface Media {
  id: string;
  alt?: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
export interface Quest {
  id: string;
  title: string;
  user?: string[] | User[];
  completed: boolean;
  xp: number;
  gold: number;
  description: string;
  category: string | Category;
  tasks: {
    title: string;
    completed: boolean;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
export interface Category {
  id: string;
  title?: string;
  createdAt: string;
  updatedAt: string;
}
export interface Level {
  id: string;
  level: string;
  xp: number;
  createdAt: string;
  updatedAt: string;
}