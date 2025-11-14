export interface Course {
  id: number;
  announcement: string;
  advertisement: string;
  title: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  details?: string[];
  courseDetails?: string;
}
