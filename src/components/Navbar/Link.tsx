import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";
//
//
//
//
//
export type LinkProps = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Link = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
  // назву лінку приводить до нижнього реєстру і заміня якщо пусто на - ''
  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage} ? 'text-primary-500' : ''
		transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};
