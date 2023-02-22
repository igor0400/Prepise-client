import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import ShadowCard from '../../shared/ui/ShadowCard/ShadowCard';
import { settings } from './config/cards-config';
import {
    ChangedSettings,
    NewList,
    Settings,
} from './model/types/cards-types';

const Cards: FC = () => {
    const [cardsArr, setCardsArr] = useState<ChangedSettings[]>([]);

    useEffect(() => {
        const allCards: ChangedSettings[] = [];

        // обработка информации из массива ностроек
        settings.forEach((item: Settings) => {
            const newList: NewList[] = [];

            item.list.forEach((listItem: string) => {
                const regexp = /##[^ ]+\.[^ ]+##/gi;
                const filteredItem = listItem.split(regexp);
                const links: string[] | null = listItem.match(regexp);
                const upgradedLinks = links
                    ? links.map((link: string) => {
                          const slicedLink = link
                              .replaceAll('##', '')
                              .split('.');

                          return {
                              link: slicedLink[0],
                              text: slicedLink[1].replaceAll('_', ' '),
                          };
                      })
                    : null;

                newList.push({
                    strings: filteredItem,
                    links: upgradedLinks,
                });
            });

            allCards.push({ ...item, list: newList });
        });

        setCardsArr(allCards);
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
                        {item.list.map(
                            (listItem: NewList, listItemI: number) => (
                                <ShadowCard type="list-item" key={listItemI}>
                                    <span className="font-bold">
                                        {' '}
                                        {listItemI + 1}.
                                    </span>{' '}
                                    {listItem.strings.map(
                                        (string: string, strI: number) => (
                                            <React.Fragment key={strI}>
                                                {string}
                                                {listItem.links &&
                                                listItem.links[strI] ? (
                                                    <Link
                                                        href={
                                                            listItem.links[strI]
                                                                .link
                                                        }
                                                        className="text-blue-600"
                                                    >
                                                        {
                                                            listItem.links[strI]
                                                                .text
                                                        }
                                                    </Link>
                                                ) : null}
                                            </React.Fragment>
                                        ),
                                    )}
                                </ShadowCard>
                            ),
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
