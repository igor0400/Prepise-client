import { ImageType } from '../../../Image';

export interface PostType {
  id: number;
  userId: number;
  images: ImageType[];
  text: string;
  createdAt: string;
  updatedAt: string;
}
