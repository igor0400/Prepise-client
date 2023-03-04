import Link from 'next/link';
import React, { FC, useMemo } from 'react';
import { parseText, ShadowCard } from '../../../shared';
import { settings } from '../config/cards-config';
import { ChangedSettings, NewList, Settings } from '../model/types/cards-types';

const Cards: FC = () => {
  const cardsArr = useMemo(() => {
    const allCards: ChangedSettings[] = [];

    // обработка информации из массива ностроек
    settings.forEach((item: Settings) => {
      const newList: NewList[] = [];

      item.list.forEach((listItem: string) => {
        newList.push(parseText(listItem));
      });

      allCards.push({ ...item, list: newList });
    });

    return allCards;
  }, []);

  return (
    <div className="cards padding-50 max-w-6xl mx-auto my-14">
      {cardsArr.map((item: ChangedSettings, i: number) => (
        <div key={i} className="my-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-center pb-6">
            {item.title}
          </h2>
          <ShadowCard type="descr">{item.descr}</ShadowCard>
          <div className="pt-4 sm:pt-5 sm:grid sm:grid-cols-2 flex flex-col sm:gap-4 gap-3">
            {item.list.map(({ texts, links }: NewList, listItemI: number) => (
              <ShadowCard type="list-item" key={listItemI}>
                <span className="font-bold"> {listItemI + 1}.</span>{' '}
                {texts.map((string: string, strI: number) => (
                  <React.Fragment key={strI}>
                    {string}
                    {links && links[strI] ? (
                      <Link href={links[strI].link} className="text-blue-600">
                        {links[strI].text}
                      </Link>
                    ) : null}
                  </React.Fragment>
                ))}
              </ShadowCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
