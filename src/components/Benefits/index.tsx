import React from 'react'
import { motion } from 'framer-motion';
//
import { BenefitType, SelectedPage } from '@/shared/types';
//
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { HText } from '@/shared/HText';
import { Benefit } from '../Benefit';
//
//
//
//
//
const benefits: Array<BenefitType> = [
	{
		icon: <HomeModernIcon className='h-6 w-6' />,
		title: 'State of the Art Facilities',
		description: "Lorem ipsum odio harum magni officia fugit repellendus eos repellat numquam?"
	},
	{
		icon: <UserGroupIcon className='h-6 w-6' />,
		title: " 100's of the Art Facilitie",
		description: "Lorem ipsum odio harum magni officia fugit repellendus eos repellat numquam?"
	},
	{
		icon: <AcademicCapIcon className='h-6 w-6' />,
		title: 'State of the Art Facilities',
		description: "Lorem ipsum odio harum magni officia fugit repellendus eos repellat numquam?"
	},
]
//
type BenefitsProps = {
	setSelectedPage: (value: SelectedPage) => void;
}
//
export const Benefits = ({ setSelectedPage }: BenefitsProps) => {
	return (
		<section
			id='benefits'
			className='mx-auto min-h-full w-5/6 py-20'>
			<motion.div	onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

				{/* header benefit */}
				<div className="">
					<div className="md:my-5 md:w-3/5">
						<HText>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</HText>
						<p className='my-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempore commodi, laudantium magnam alias qui unde! Asperiores ipsa recusandae pariatur, consectetur dignissimos, unde culpa dolorem voluptatibus, debitis quasi vero illum.</p>
					</div>
				</div>

				{/* benefits */}
				<div className="md:flex items-center justify-between gap-8 mt-5">
					{benefits.map((benefit: BenefitType) => (
						<Benefit
							key={benefit.title}
							icon={benefit.icon}
							title={benefit.title}
							description={benefit.description}
							setSelectedPage={setSelectedPage} />
					))}
				</div>
			</motion.div>



		</section>
	)
}