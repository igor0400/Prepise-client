import { FC } from 'react';
import Post, { PostType } from '../../../entities/Post';
import ShowMoreBtn from '../../../entities/ShowMoreBtn';
import { EmptyItems } from '../../../shared';

interface Props {
  items: PostType[];
  more: {
    loading: boolean;
    disabled: boolean;
    getItems: Function;
  };
}

const Posts: FC<Props> = ({ items, more }) => {
  const { loading, disabled, getItems } = more;

  if (items?.length < 1) return <EmptyItems />;

  return (
    <div>
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <Post key={i} {...item} />
        ))}
      </div>
      {!disabled && <ShowMoreBtn onClick={getItems} loading={loading} />}
    </div>
  );
};

export default Posts;
