import { Link } from 'react-router-dom'

const CtaButton = ({ ctaText, ctaUrl }) => {
	return (
		<>
			{ctaText && ctaUrl && (
				<div className="slab slab--reverse">
					<div className="container">
						<div className="text-center below-24 animate-me">
							<Link to={ctaUrl} className="btn">
								{ctaText}
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default CtaButton
