const Textarea = ({ copy }) => {
	return (
		<div className="slab slab--medium slab--reverse animate-me">
			<div className="container">
				<div className="slab__intro">
					<div className="links--underline" dangerouslySetInnerHTML={{ __html: copy }}></div>
					<div className="top-32">
						<a href="" className="btn">
							CTA text here
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Textarea
