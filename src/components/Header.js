import React from 'react'

function Header() {
	return (
		<header className="header">
			<div id="site-header" className="animate-me">
				<div className="container">
					<div className="site-header-wrapper">
						<a href className="logo">
							Olga Brushuk
						</a>

						<div id="navigation-toggle" data-gw-component="widget/toggle-menu">
							<span></span>
							<span></span>
							<span></span>
						</div>

						<div id="site-navigation" data-gw-component="widget/header-nav">
							<div id="navigation-toggle" data-gw-component="widget/toggle-menu">
								<span></span>
								<span></span>
								<span></span>
							</div>

							<nav className="nav" role="navigation">
								{/* <?php custom_light_nav(); ?>							 */}
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
