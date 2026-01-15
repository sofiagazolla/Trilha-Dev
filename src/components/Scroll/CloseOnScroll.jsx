import { useEffect } from 'react';

function CloseOnScroll(setMenuOpen) {
	useEffect(() => {
		const handleScroll = () => {
			setMenuOpen(false);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [setMenuOpen]);
}

export default CloseOnScroll;
