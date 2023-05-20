import { CSSProperties, FC } from 'react';
import Post, { PostType } from '../../../entities/Post';
import ShowMoreBtn from '../../../entities/ShowMoreBtn';
import { EmptyItems, CenteredLoader } from '../../../shared';

interface Props {
  items: PostType[];
  itemsLoading: boolean;
  more: {
    loading: boolean;
    disabled: boolean;
    getItems: Function;
  };
  postStyle?: CSSProperties;
  gap?: number;
}

const Posts: FC<Props> = ({
  items,
  more,
  itemsLoading,
  postStyle,
  gap = 2,
}) => {
  const { loading, disabled, getItems } = more;

  if (itemsLoading) return <CenteredLoader className="my-16" />;

  if (items?.length < 1) return <EmptyItems />;

  return (
    <div>
      <div className={`flex flex-col gap-${gap}`}>
        {items.map((item, i) => (
          <Post key={i} {...item} style={postStyle} />
        ))}
      </div>
      {!disabled && <ShowMoreBtn onClick={getItems} loading={loading} />}
    </div>
  );
};

export default Posts;
