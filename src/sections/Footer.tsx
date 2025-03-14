const socialIcons = [
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 640 512"
				className="size-5 fill-zinc-500">
				<path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
			</svg>
		)
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				className="size-5 fill-zinc-500">
				<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
			</svg>
		)
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 576 512"
				className="size-5 fill-zinc-500">
				<path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
			</svg>
		)
	}
];

export const Footer = () => {
	return (
		<footer className="py-24 bg-zinc-950">
			<div className="container mx-auto">
				<div className={"flex justify-between items-center"}>
					<div>
						<img src="/assets/images/logo.svg" alt="Blockforge logo" />
					</div>
					<nav className="hidden md:flex text-zinc-500 font-heading font-black gap-12">
						<a href="#">Home</a>
						<a href="#">Blog</a>
						<a href="#">Careers</a>
						<a href="#">Contact</a>
					</nav>
				</div>
				<div className="mt-12 md:mt-48 md:flex justify-between items-center">
					<p className="text-zinc-400">&copy; 2024 Blockforge. All rights reserved.</p>
					<div className="mt-4 md:mt-0 flex gap-6">
						{socialIcons.map((icon, iconIndex) => (
							<div
								key={`${iconIndex}-icon`}
								className="inline-flex h-10 w-10 bg-zinc-800 rounded-full items-center justify-center">
								{icon.icon}
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};
