import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

export default function ScrollToTop() {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ScrollToTop />
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
