import { ClassType } from "@/shared/types"
//
//
//
//
//
export const Class = ({ image, name, description }: ClassType) => {

	return (
		<li className="relative mx-5 inline-block h-[380px] w-[450px] snap-start">
			<div className='p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0
			transition duration-500 hover:opacity-90 snap-start'>
				<p className="text-2xl">{name}</p>
				<p className="mt-5">{description}</p>
			</div>
			<img alt={`class-${image}`} src={image} />
		</li>
	)
}