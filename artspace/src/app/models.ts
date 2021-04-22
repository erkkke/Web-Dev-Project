export interface Album {
  id: number;
  author: string;
  title: string;
  url: string;
  download_url: string;
}

export interface Photo {
  id: number;
  author: string;
  url: string;
  download_url: string;
}

export class Pin {
  author!: string;
  photo: any;
  size!: string;
  title!: string;
  description!: string;
}

export interface User {
  "id": number;
  "username": string;
  // "password": string;
  "banner": string;
  "photo": string;
  "email": string;
  "desc": string;
  "followers": number;
};

// export interface TokenInfo {

// }

export interface AuthToken {
  "token": string;
}