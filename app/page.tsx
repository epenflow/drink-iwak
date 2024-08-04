import { Collections } from '@/app/test/collections';
import { Hero } from '@/app/test/hero';
import { IwakArumery } from '@/app/test/iwak-arumery';
import { News } from '@/app/test/news';
import { OurStory } from '@/app/test/our-story';

export default function Home() {
	return (
		<main className="overflow-x-hidden">
			<Hero />
			<News />
			<OurStory />
			{/* <IwakArumery /> */}
			<Collections />
		</main>
	);
}
