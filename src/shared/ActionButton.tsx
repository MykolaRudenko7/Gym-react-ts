import { SelectedPage } from '@/shared/types';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type PropsButton = {
	children: React.ReactNode;
	setSelectedPage: (value: SelectedPage) => void;
}

export const ActionButton = ({ children, setSelectedPage }: PropsButton) => {
	return (
		<AnchorLink
			className='font-medium capitalize rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
			onClick={() => setSelectedPage(SelectedPage.ContactUs)}
			href={`#${SelectedPage.ContactUs}`}>
			{children}
		</AnchorLink>
	)
}