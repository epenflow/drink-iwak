import { Collections } from '@/app/test/collections';
import { Hero } from '@/app/test/hero';
import { News } from '@/app/test/news';
import { OurStory } from '@/app/test/our-story';

export default function Home() {
	return (
		<main className="parent-container overflow-x-hidden bg-black">
			<Hero />
			<News />
			<OurStory />
			<Collections />
		</main>
	);
}
