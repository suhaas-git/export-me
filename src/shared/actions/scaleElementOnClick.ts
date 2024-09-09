// scale.js
export default function scaleElementOnClick(node: HTMLElement, options = {}) {
	const defaultOptions = {
		duration: 100,
		minScale: 0.95
	};

	const { duration, minScale } = { ...defaultOptions, ...options };

	let isPressed = false;
	let timeout: number;

	function setScale(scale: number) {
		node.style.transform = `scale(${scale})`;
	}

	function handleMousedown() {
		isPressed = true;
		clearTimeout(timeout);
		setScale(minScale);
	}

	function handleMouseup() {
		isPressed = false;
		timeout = setTimeout(() => {
			setScale(1);
		}, duration);
	}

	function handleMouseleave() {
		if (isPressed) {
			isPressed = false;
			timeout = setTimeout(() => {
				setScale(1);
			}, duration);
		}
	}

	node.style.transition = `transform ${duration}ms ease-in-out`;

	node.addEventListener('mousedown', handleMousedown);
	node.addEventListener('mouseup', handleMouseup);
	node.addEventListener('mouseleave', handleMouseleave);

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMousedown);
			node.removeEventListener('mouseup', handleMouseup);
			node.removeEventListener('mouseleave', handleMouseleave);
		}
	};
}
