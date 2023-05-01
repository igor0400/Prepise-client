import { FC } from 'react';
import Post, { PostType } from '../../../entities/Post';
import { EmptyItems } from '../../../shared';

interface Props {
  items: PostType[];
}

const Posts: FC<Props> = ({ items }) => {
  if (items?.length < 1) return <EmptyItems />;

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => (
        <Post key={i} {...item} />
      ))}
    </div>
  );
};

export default Posts;
