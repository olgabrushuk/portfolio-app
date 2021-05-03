import React from 'react'
import { useRef, useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import './styles/base.scss'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './containers/Home'
import About from './containers/About'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './scripts/cookies'

const App = () => {
	const location = useLocation()
	console.log(location)
	gsap.registerPlugin(ScrollTrigger)
	const ref = useRef(null)
	const delayTime = 0.4,
		delayTimeLong = 1,
		duration = 0.6

	useEffect(() => {
		const element = ref.current
		const allAnimateMe = element.querySelectorAll('.animate-me')
		gsap.utils.toArray(allAnimateMe).forEach(function (section) {
			gsap.fromTo(
				section,
				{ opacity: 0 },
				{
					opacity: 1,
					ease: 'power1.easeInOut',
					delay: delayTime,
					duration: duration,
					scrollTrigger: section
				}
			)
		})
	}, [location.pathname])

	useEffect(() => {
		const element = ref.current
		const allAnimateMeDelayed = element.querySelectorAll('.animate-me-delayed')
		gsap.utils.toArray(allAnimateMeDelayed).forEach(function (section) {
			gsap.fromTo(
				section,
				{ opacity: 0 },
				{
					opacity: 1,
					ease: 'power1.easeInOut',
					delay: delayTimeLong,
					duration: duration,
					scrollTrigger: section
				}
			)
		})
	}, [location.pathname])

	useEffect(() => {
		const element = ref.current
		const allAnimateMeMoveDown = element.querySelectorAll('.animate-me-move-down')
		gsap.utils.toArray(allAnimateMeMoveDown).forEach(function (section) {
			gsap.fromTo(
				section,
				{ opacity: 0, y: -20 },
				{
					opacity: 1,
					y: 0,
					ease: 'power1.easeInOut',
					delay: delayTime,
					duration: duration,
					scrollTrigger: section
				}
			)
		})
	}, [location.pathname])

	useEffect(() => {
		const element = ref.current
		const allAnimateMeMoveUp = element.querySelectorAll('.animate-me-move-up')
		gsap.utils.toArray(allAnimateMeMoveUp).forEach(function (section) {
			gsap.fromTo(
				section,
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					ease: 'power1.easeInOut',
					delay: delayTime,
					duration: duration,
					scrollTrigger: section
				}
			)
		})
	}, [location.pathname])

	return (
		<div ref={ref} className="App">
			<Header />
			{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
			<Footer />
		</div>
	)
}

export default App
