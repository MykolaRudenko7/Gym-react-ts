import { BenefitType, SelectedPage } from '@/shared/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
//
type BenefitProps = {
	setSelectedPage: (value: SelectedPage) => void;
} & BenefitType
//
//
//
//
//
//
export const Benefit = ({icon, title, description, setSelectedPage}: BenefitProps) => {
  return (
	 <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
		<div className="mb-4 flex justify-center">
			<div className="rounded-full border-2 bg-gray-100 bg-primary-100 p-4">
				{icon}
			</div>
		</div>
		  <h4 className='font-bold'>{title}</h4>
		  <h4 className='my-3'>{description}</h4>
		  <AnchorLink
			  className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
			  onClick={() => setSelectedPage(SelectedPage.ContactUs)}
			  href={`#${SelectedPage.ContactUs}`}>
			  <p>Learn More</p>
		  </AnchorLink>
	 </div>
  )
}