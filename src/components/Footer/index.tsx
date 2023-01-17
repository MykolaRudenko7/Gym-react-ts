import Logo from '@/assets/Logo.png';
//
//
//
//
//
export const Footer = () => {
	//
	const linkStyle = `block my-5 transition duration-500 hover:text-primary-300 visited:text-gray-400`;
	//
	return (
		<footer className='bg-primary-100 py-16'>
			<div className="justify-content mx-auto w-5/6 gap-16 md:flex">
				<div className="mt-16 basis-1/2 md:mt-0">
					<img src={Logo} alt="logo" />
					<p className='my-5'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam eum sint doloremque, architecto sit eius iste aut, facere assumenda quae cupiditate totam provident magnam unde quas explicabo eveniet omnis.
					</p>
					<p> Lorem ipsum dolor sit.</p>
				</div>

				<div className="mt-16 basis-1/4 md:mt-0">
					<h4 className='font-bold'>Links</h4>
					<a	href='#' target='_blank' className={`${linkStyle}`}>Lorem, ipsum dolor sit amet?</a>
					<a href='#' target='_blank' className={`${linkStyle}`}>Lorem, ipsum dolor sit amet?</a>
					<a href='#' target='_blank' className={`${linkStyle}`}>Lorem, ipsum dolor jflmnfkjrj sit amet?</a>
				</div>

				<div className="mt-16 basis-1/4 md:mt-0">
					<h4 className='font-bold'>Contact US</h4>
					<p className='my-5'>Lorem, ipsum dolor sit amet kdjfn?</p>
					<p className='my-5'>Lorem, ipsum dolor sit amet?</p>
					<a href='+380990110101' className={`${linkStyle}`}>
						+380990110101
					</a>
				</div>
			</div>
		</footer>
	)
}