import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

const Footer = () => {
	const history = useHistory()
	const [rightsNote, setRightsNote] = useState(false)

	const closeCookieBanner = () => {
		Cookies.set('cookienotice', '1', { expires: 365 })
		document.getElementByClass('cookie-notice').slideUp(200)
	}

	useEffect(() => {
		if (history.location.pathname === '/') {
			setRightsNote(true)
		}
		return history.listen(location => {
			if (location.pathname === '/') {
				setRightsNote(true)
			} else {
				setRightsNote(false)
			}
		})
	}, [history])

	return (
		<>
			<footer id="site-footer" className="animate-me">
				<div className="container">
					<div className="row justify-content-end">
						<div className="col-md-4">
							<div className="social-group">
								<a
									href="https://www.linkedin.com/in/olgabrushuk"
									className="social"
									target="_blank"
									rel="noreferrer"
								>
									<span className="icon-linkedin"></span>
								</a>
								<a
									href={require('../assets/files/cv-olga-brushuk.pdf').default}
									className="social"
									target="_blank"
									rel="noreferrer"
								>
									<span className="icon-file-text2"></span>
								</a>
								<a href="mailto:olgabrushuk@gmail.com?subject=Portfolio contact" className="social">
									<span className="icon-email"></span>
								</a>
							</div>
						</div>
						<div className="col-12 col-md-8 order-md-first">
							{rightsNote && (
								<div className="below-16 milli">
									*Implemented during the employment at{' '}
									<a href="https://www.konstructive.com">Konstructive Ltd</a>
								</div>
							)}
							<span className="milli">
								© <script>document.write(new Date().getFullYear())</script> Olga Brushuk
							</span>
						</div>
					</div>
				</div>
			</footer>

			<div className="cookie-notice" style={{ display: 'none' }}>
				<div className="container">
					<div className="centi links--underline">
						The cookies are used on this website to give you the best experience. By continuing,
						you're agreeing to our use of <a href="/cookies">cookies</a>.
					</div>
					<div className="cookie-notice__close" onClick={closeCookieBanner}>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
