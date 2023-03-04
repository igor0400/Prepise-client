interface Data {
  texts: string[];
  links:
    | {
        link: string;
        text: string;
      }[]
    | null;
}

export const parseText = (text: string): Data => {
  const regexp = /##[^ ]+\.[^ ]+##/gi;
  const filteredItem = text.split(regexp);
  const links: string[] | null = text.match(regexp);
  const upgradedLinks = links
    ? links.map((link: string) => {
        const slicedLink = link.replaceAll('##', '').split('.');

        return {
          link: slicedLink[0],
          text: slicedLink[1].replaceAll('_', ' '),
        };
      })
    : null;

  return {
    texts: filteredItem,
    links: upgradedLinks,
  };
};
