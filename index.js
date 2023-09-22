window.addEventListener('scroll', e => {
	console.log(2)
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) 
})

document.querySelector(".front").addEventListener("mousemove", (event) => {
	let tran = null
	tran = event.clientX-window.innerWidth/2
	tran = -tran/150
	document.documentElement.style.setProperty('--mouseX', `${tran}px`) 
	console.log(tran)
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})
