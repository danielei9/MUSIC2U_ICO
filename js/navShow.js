
/*
		function myFunction() {
			const selector = document.querySelector('#logoBig')
			selector.classList.add('magictime', 'puffIn')
		}
		setTimeout(myFunction, 5000); roadmap
*/
var threeOrgOffset = $('#three').height(), getIcoOrgOffset = $('#getIco').height(), graphSectionOrgOffset = $('#graphSection').height(), roadMapSectionOrgOffset = $('#roadmap').height(), getTokenSectionOrgOffset = $('#getToken').height(),
	headerOrgOffset = $('#nav_header').height(), workOrgOffset = $('#work').height(), introOrgOffset = $('#intro').height(), oneOrgOffset = $('#one').height(), twoOrgOffset = $('#two').height();
$(window).scroll(function () {
	var currentScroll = $(this).scrollTop();
	let header_sectionOne = headerOrgOffset + oneOrgOffset;
	let header_sectionTwo = header_sectionOne + twoOrgOffset;
	let header_sectionThree = header_sectionTwo + threeOrgOffset;
	//let header_sectionWork = header_sectionThree + workOrgOffset;
	let header_sectionGetIco = header_sectionThree + getIcoOrgOffset;
	let header_sectionGraph = header_sectionGetIco + graphSectionOrgOffset;
	let header_sectionRoadMap = header_sectionGraph + roadMapSectionOrgOffset;
	let header_sectionGetToken = header_sectionRoadMap + getTokenSectionOrgOffset;

	if (screen.width < 450) {
		if (currentScroll >= 0 && currentScroll < headerOrgOffset + 200) {
			$('#nav_header').slideDown();
		} else {
			$('#nav_header').slideUp();
		}
	}
	else if (currentScroll > header_sectionOne - 100 && currentScroll < header_sectionOne + 200) {
		$('#nav_header').slideDown();
	}
	else if (currentScroll > header_sectionTwo - 100 && currentScroll < header_sectionTwo + 200) {
		$('#nav_header').slideDown();
	}
	else if (currentScroll > header_sectionThree - 100 && currentScroll < header_sectionThree + 200) {
		$('#nav_header').slideDown();
		console.log("three ")
		console.log("current " + currentScroll)
		console.log("header_sectionThree " + header_sectionThree)
	}

	else if (currentScroll > header_sectionGetIco - 100 && currentScroll < header_sectionGetIco + 200) {
		$('#nav_header').slideDown();
		console.log("getIco")
		console.log("header_sectionGetIco " + header_sectionGetIco)
	}
	else if (currentScroll > header_sectionGraph - 100 && currentScroll < header_sectionGraph + 200) {
		$('#nav_header').slideDown();
		console.log("graph")
		console.log("header_sectionGraph " + header_sectionGraph)
	}
	else if (currentScroll > header_sectionRoadMap - 950 && currentScroll < header_sectionRoadMap + 200) {
		$('#nav_header').slideDown();
		console.log("Roadmap")
		console.log("header_sectionRoadMap " + header_sectionRoadMap)
	}
	else if (currentScroll > header_sectionGetToken && currentScroll < header_sectionGetToken +300) {
		$('#nav_header').slideDown();
		console.log("GetToken")
		console.log("header_sectionGetToken " + header_sectionGetToken)
	}
	else {
		$('#nav_header').slideUp();
		console.log("up")
	}
}
);