function imageScale(node: HTMLElement, params = { scale: 0.95 }) {
	let { scale } = params;

	node.style.transition = 'transform 0.1s ease-in-out';

	function handleMousedown() {
		node.style.transform = `scale(${scale})`;
	}

	function handleMouseup() {
		node.style.transform = 'scale(1)';
	}

	node.addEventListener('mousedown', handleMousedown);
	node.addEventListener('mouseup', handleMouseup);
	node.addEventListener('mouseleave', handleMouseup);

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMousedown);
			node.removeEventListener('mouseup', handleMouseup);
			node.removeEventListener('mouseleave', handleMouseup);
		},
		update(newParams: { scale: number }) {
			scale = newParams.scale;
		}
	};
}

export default imageScale;
