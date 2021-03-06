import CtaButton from '../components/CtaButton'

const TwoColsImgText = ({ image, title, copy, ctaText, ctaUrl }) => {
	return (
		<div className="slab slab--reverse animate-me">
			<div className="container">
				<div className="row justify-content-between">
					{image && (
						<div className="col-sm-5 col-md-6 col-lg-5 below-24">
							<img src={image} alt="about-me" />
						</div>
					)}
					{copy && (
						<div className="col-sm-7 col-md-6">
							<h2 className="base animate-me-move-down">{title}</h2>
							<div
								className="top-16 animate-me-move-up"
								dangerouslySetInnerHTML={{ __html: copy }}
							></div>
							{ctaText && ctaUrl && (
								<div className="animate-me top-32">
									<CtaButton ctaText={ctaText} ctaUrl={ctaUrl} />
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default TwoColsImgText
