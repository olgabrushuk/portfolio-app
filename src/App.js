import { useRef, useEffect } from 'react'

import './styles/base.scss'

import Header from './components/Header'
import Footer from './components/Footer'
import Textarea from './components/Textarea'
import TwoColsImgText from './components/TwoColsImgText'
import Teaser from './components/Teaser'
import PageTitle from './components/PageTitle'
import CtaButton from './components/CtaButton'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './scripts/cookies'

function App() {
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
	}, [])

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
	}, [])

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
	}, [])

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
	}, [])

	return (
		<div ref={ref} className="App">
			<Header />
			<PageTitle />
			<Teaser />
			<TwoColsImgText />
			<Textarea />
			<CtaButton />
			<Footer />
		</div>
	)
}

export default App
