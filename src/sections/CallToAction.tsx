import { Circle } from '@/components/Circle';
import { CutCornerButton } from '@/components/CutCornerButton';
import { Hexagon } from '@/components/Hexagon';

export const CallToActionSection = () => {
	return (
		<section className='py-60 overflow-hidden'>
			<div className='container mx-auto'>
				<div className='relative'>
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
						<Hexagon className='size-[700px]' />
					</div>
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
						<Hexagon className='size-[1100px]' />
					</div>
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
						<Circle className='absolute left-0 -top-[400px]'>
							<img src='/assets/images/cuboid.png' alt='Cuboid' className='size-[140px]' />
						</Circle>
					</div>
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
						<Circle className='absolute -left-[600px] -top-[70px]'>
							<img src='/assets/images/cylinder.png' alt='Cylinder' className='size-[140px]' />
						</Circle>
					</div>
					<h2 className='font-heading font-black text-center text-4xl md:text-5xl lg:text-6xl'>
						Ready to <span className='block'>get started?</span>
					</h2>
					<p className='text-xl lg:text-2xl text-zinc-400 text-center mt-8 max-w-sm mx-auto'>
						Start building using blockchain technology, with Blockforge.
					</p>
					<div className='flex justify-center mt-12'>
						<CutCornerButton>Get Started</CutCornerButton>
					</div>
				</div>
			</div>
		</section>
	);
};
