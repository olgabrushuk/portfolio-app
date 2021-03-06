const Teaser = ({ imgBg, imgMain, title, copy, ctaText, ctaUrl, order }) => {
	return (
		<div className="slab slab--reverse animate-me">
			<div className="container">
				<div className="teaser">
					<div className="row align-items-center">
						{console.log({ order })}
						{imgBg && imgMain && (
							<div className={`col-md-7 ${order}`}>
								<div className="teaser__images animate-me">
									<div className="teaser__img-bg">
										<img src={imgBg} alt="backgroud" />
									</div>
									<div className="teaser__img-main">
										<img src={imgMain} alt="foreground" />
									</div>
								</div>
							</div>
						)}

						<div className="col-md-5">
							<div className="teaser__copy">
								<h2 className="base animate-me-move-down">{title}</h2>
								{copy && (
									<div
										className="top-16 animate-me-move-up"
										dangerouslySetInnerHTML={{ __html: copy }}
									></div>
								)}
								{ctaText && ctaUrl && (
									<div className="button-group animate-me">
										<a href={ctaUrl} className="btn" target="_blank" rel="noreferrer">
											{ctaText}
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Teaser
