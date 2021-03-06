import { projects } from '../data/projects'

import Teaser from '../components/Teaser'
import PageTitle from '../components/PageTitle'
import CtaButton from '../components/CtaButton'

const Home = () => {
	return (
		<>
			<PageTitle title="Portfolio" />
			{projects?.map((project, index) => (
				<Teaser
					key={index}
					imgBg={project.imgBg}
					imgMain={project.imgMain}
					title={project.title}
					copy={project.copy}
					ctaText={project.ctaText}
					ctaUrl={project.ctaUrl}
					order={index % 2 === 0 ? '' : 'order-md-last'}
				/>
			))}
			<CtaButton ctaText="About me" ctaUrl="/about" />
		</>
	)
}

export default Home
