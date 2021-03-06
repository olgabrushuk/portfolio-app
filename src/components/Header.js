import { NavLink } from 'react-router-dom'

const toggleMenu = () => {
	if (document.body.className.indexOf('nav-open') > -1) {
		document.body.className = document.body.className.replace(/nav-open/g, '')
	} else {
		document.body.className += ' nav-open '
	}
	return false
}

const Header = () => {
	return (
		<header className="header">
			<div id="site-header" className="animate-me">
				<div className="container">
					<div className="site-header-wrapper">
						<a href="/" className="logo">
							Olga Brushuk
						</a>

						<div className="navigation-toggle" onClick={toggleMenu}>
							<span></span>
							<span></span>
							<span></span>
						</div>

						<div id="site-navigation">
							<div className="navigation-toggle" onClick={toggleMenu}>
								<span></span>
								<span></span>
								<span></span>
							</div>

							<nav className="nav" role="navigation">
								<ul>
									<li>
										<NavLink exact={true} activeClassName="current-menu-item" to="/">
											Portfolio
										</NavLink>
										<NavLink activeClassName="current-menu-item" to="/about">
											About
										</NavLink>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
