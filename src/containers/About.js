import { about } from '../data/about'

import TwoColsImgText from '../components/TwoColsImgText'

const About = () => {
	return (
		<>
			{about?.map((data, key) => {
				return (
					<TwoColsImgText
						key={key}
						image={data.image}
						title={data.title}
						copy={data.copy}
						ctaText="Back to my work"
						ctaUrl="/"
					/>
				)
			})}
		</>
	)
}

export default About
