

export function attachClickListener(marker, locations, map, tt) {
	const markerElement = marker.getElement();
	markerElement.addEventListener('click', (e) => {
		e.stopPropagation();
		const index = locations.findIndex(loc => loc.marker === marker);
		const wasOrigin = index === 0;
		marker.remove();
		if (index !== -1) {
			locations.splice(index, 1);
		}
		if (wasOrigin && locations.length > 0) {
			const newOrigin = locations[0].marker;
			newOrigin.remove();
			const newOriginMarker = new tt.Marker({color: '#B73188'})
				.setLngLat(locations[0].coordinates)
				.addTo(map);
			locations[0].marker = newOriginMarker;
			attachClickListener(newOriginMarker, locations, map, tt);
		}
	});
}


export function setupWelcome() 
{
	const getStartedBtn = document.getElementById('get-started-btn');
	const welcomeMessage = document.getElementById('welcome-message');
	const sidebarContent = document.getElementById('sidebar-content');
	
	if (getStartedBtn)
	{
		getStartedBtn.addEventListener('click', () => 
		{
			welcomeMessage.classList.add('fade-out');
			setTimeout(() =>
			{
				welcomeMessage.style.display = 'none';
				sidebarContent.classList.remove('hidden');
			}, 500);
		});
	}
}
