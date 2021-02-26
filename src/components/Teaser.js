const Teaser = () => {
	return (
		<div className="slab slab--reverse animate-me">
			<div className="container">
				<div className="teaser">
					<div className="row align-items-center">
						<div className="col-md-7">
							<div className="teaser__images animate-me">
								<div className="teaser__img-bg">
									<img src="https://source.unsplash.com/6mXdf8QIybA/900x1200" alt="backgroud" />
								</div>
								<div className="teaser__img-main">
									<img src="https://source.unsplash.com/zNRITe8NPqY/1600x900" alt="foreground" />
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="teaser__copy">
								<h2 className="base animate-me-move-down">Website name</h2>
								<div className="top-16 animate-me-move-up">Some copy here</div>
								<div className="button-group animate-me">
									<a href="/" className="btn" target="_blank">
										CTA here
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Teaser
