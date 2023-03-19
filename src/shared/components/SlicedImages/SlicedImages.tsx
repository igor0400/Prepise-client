import classNames from 'classnames';
import Image from 'next/image';
import { FC, useState } from 'react';

interface Props {
  maxCount: number;
  imgs: string[];
  className?: string;
}

const SlicedImages: FC<Props> = ({ maxCount, imgs, className }) => {
  const images = imgs.slice(0, maxCount);
  const moreImages = imgs.length - images.length;
  const [isHide, setIsHide] = useState(false);

  return (
    <div
      className={classNames('', {
        [className ?? '']: className,
        hidden: isHide,
      })}
    >
      {images.map((url, i) => {
        const isLast = i + 1 === images.length;

        return (
          <div key={i} className="relative">
            {moreImages > 0 && isLast && (
              <div className="absolute w-full h-full bg-opacity-50 bg-black text-white flex justify-center items-center font-semibold text-2xl pr-2">
                +{moreImages}
              </div>
            )}

            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER}${url}`}
              onError={(e) => {
                //@ts-ignore
                e.target.style.display = 'none';
                if (isLast) setIsHide(true);
              }}
              alt="question-image"
              width={70}
              height={70}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SlicedImages;
