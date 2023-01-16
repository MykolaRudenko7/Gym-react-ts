import { motion } from 'framer-motion';
//
import { BenefitType, SelectedPage } from '@/shared/types';
//
import { ActionButton } from '@/shared/ActionButton';
import { HText } from '@/shared/HText';
import { Benefit } from '../Benefit';
//
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/react/24/solid';
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
const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 }
	}
}
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
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

				{/* header benefit */}
				<motion.div
					className="md:my-5 md:w-3/5"
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 }
					}}>
					<HText>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</HText>
					<p className='my-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempore commodi, laudantium magnam alias qui unde! Asperiores ipsa recusandae pariatur, consectetur dignissimos, unde culpa dolorem voluptatibus, debitis quasi vero illum.</p>
				</motion.div>

				{/* benefits */}
				<motion.div className="md:flex items-center justify-between gap-8 mt-5"
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					variants={container}>
					{benefits.map((benefit: BenefitType) => (
						<Benefit
							key={benefit.title}
							icon={benefit.icon}
							title={benefit.title}
							description={benefit.description}
							setSelectedPage={setSelectedPage} />
					))}
				</motion.div>

				{/* graphics and description */}
				<div className="mt-16 items-center justify-between gap-20 md:mt-mt28 md:flex">

					{/* graphic */}
					<img
						className='mx-auto'
						src={BenefitsPageGraphic}
						alt="benefits-graphics" />

					{/* description */}
					<div className="">

						{/* title */}
						<div className="relative">
							<div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
								<motion.div
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true, amount: 0.5 }}
									transition={{ duration: 0.5 }}
									variants={{
										hidden: { opacity: 0, x: -50 },
										visible: { opacity: 1, x: 0 }
									}}>
									<HText>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										<span className='text-primary-500'>LOREM</span>
									</HText>
								</motion.div >
							</div>
						</div>

						{/* descript*/}
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.7 }}
							variants={{
								hidden: { opacity: 0, x: -50 },
								visible: { opacity: 1, x: 0 }
							}}>
							<p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aperiam, quo autem amet sunt voluptatem praesentium nemo nihil neque ipsum laborum incidunt quia quos? Id ullam deserunt maiores rem esse!</p>
							<p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi eveniet sit debitis aspernatur, deleniti incidunt? Est non blanditiis beatae pariatur rerum corrupti unde eius et eligendi dolore. Officiis, adipisci?</p>
						</motion.div>

						{/* button */}
						<div className="relative mt-16">
							<div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
								<ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	)
}