import { Skeleton } from 'antd';
import classNames from 'classnames';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { getFileUrl } from '../../lib/assets/getFileUrl';

interface Props {
  maxCount: number;
  imgs: string[];
  className?: string;
}

const SlicedImages: FC<Props> = ({ maxCount, imgs, className }) => {
  const images = imgs.slice(0, maxCount);
  const moreImages = imgs.length - images.length;
  const [isHide, setIsHide] = useState(false);
  const [isImgLoad, setIsImgLoad] = useState(false);

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
          <React.Fragment key={i}>
            {!isImgLoad ? (
              <Skeleton.Image active={true} style={{ width: 70, height: 70 }} />
            ) : null}
            <div
              className={classNames('relative', {
                'opacity-0 w-0 h-0': !isImgLoad,
              })}
            >
              {moreImages > 0 && isLast && (
                <div className="absolute w-full h-full bg-opacity-50 bg-black text-white flex justify-center items-center font-semibold text-2xl pr-2">
                  +{moreImages}
                </div>
              )}

              <Image
                src={getFileUrl(url)}
                onError={(e) => {
                  //@ts-ignore
                  e.target.style.display = 'none';
                  if (isLast) setIsHide(true);
                }}
                className="rounded-md"
                onLoad={() => setIsImgLoad(true)}
                alt="question-image"
                width={70}
                height={70}
              />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default SlicedImages;
