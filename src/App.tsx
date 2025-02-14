import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';

function App() {
	const [showReply, setShowReply] = useState(false);

	useEffect(() => {
		if (showReply) {
			setTimeout(() => {
				setShowReply(false);
			}, 5_000);sssss
		}
	}, [showReply]);

	return (
		<div className="app-ctr w-full h-dvh flex">
			<div className="flex justify-center items-center w-full">
				<Button onClick={() => setShowReply(true)}>Hello!</Button>
				{showReply && <div>Hi there!</div>}
			</div>
		</div>
	);
}

export default App;
