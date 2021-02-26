import Cookies from 'js-cookie'

const cookieNotice = () => {
	const popupCookie = Cookies.get('cookienotice')
	const cookieNoticeMessage = document.getElementsByClassName('cookie-notice')

	if (popupCookie === 'undefined') {
		cookieNoticeMessage.slideDown(300)
	} else if (popupCookie === '1') {
		cookieNoticeMessage.style.display = 'none'
	}
}

cookieNotice()
