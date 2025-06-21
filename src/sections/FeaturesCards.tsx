import Card from '@/components/Card';

const cardData = [
	{
		image: '/assets/images/pill.png',
		title: 'Revolutionary Blockchain API',
		description:
			'Effortlessly integrate and manage blockchain data with our cutting-edge API, designed for seamless connectivity',
		color: 'fuchsia',
	},
	{
		image: '/assets/images/cuboid.png',
		title: 'Decentralized Data Solutions',
		description:
			'Empower your applucations with decentralized data solutions, ensuring security and transparency at every step',
		color: 'lime',
	},
	{
		image: '/assets/images/cone.png',
		title: 'Next-Gen Smart Contracts',
		description:
			'Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs',
		color: 'cyan',
	},
	{
		image: '/assets/images/icosahedron.png',
		title: 'Seamless Bloockchain Integration',
		description:
			'Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency',
		color: 'violet',
	},
];

const FeaturesCardsSection = () => {
	return (
		<section className='py-24 overflow-clip md:-mt-28'>
			<div className='container mx-auto'>
				<h2 className='font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center'>
					Discover the future of blockchain with Blockforge.
				</h2>
				<div className='mt-36 lg:mt-48 flex'>
					<div className='flex flex-none gap-8'>
						{cardData.map(({ image, title, description, color }) => (
							<Card
								key={title}
								className='max-w-xs md:max-w-md'
								pdbutton>
								<div className='flex justify-center -mt-28'>
									<div className='inline-flex relative'>
										<div className='absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] mask-[radial-gradient(closest-side,black,transparent)]'></div>
										<img
											src={image}
											alt='Pill'
											className='size-40 group-hover:-translate-y-6 transition duration-300'
										/>
									</div>
								</div>
								<h3 className='font-heading font-black text-3xl mt-12'>{title}</h3>
								<p className='text-lg text-zinc-400 mt-4'>{description}</p>
							</Card>
						))}
					</div>
				</div>

				<div className='flex justify-center mt-10'>
					<div className='bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full'>
						{cardData.map(({ title }) => (
							<div
								key={title}
								className='size-2.5 bg-zinc-500 rounded-full cursor-pointer'></div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesCardsSection;
