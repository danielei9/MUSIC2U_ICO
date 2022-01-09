
		// Data
		const circulating = 3800000;
		const lockedTokens = 1000000;
		const appDev = 850000;
		const marketing = 850000;
		const airdrops = 400000;

		//pie
		var ctxP = document.getElementById("pieChart").getContext('2d');
		var myPieChart = new Chart(ctxP, {
			type: 'doughnut',
			data: {
				labels: ["Circulating Supply", "LockedTokens", "APP-DEVELOPMENT-ISSUANCE", "MARKETING-ISSUANCE", "ISSUANCE - airdrops"],
				datasets: [{
					data: [circulating, lockedTokens, appDev, marketing, airdrops],
					hoverBackgroundColor: ["#ffff26", "#CACA1D", "#949413", "#5F5F0A ", "#292900"],
					backgroundColor: ["#3E92CC", "#3774A1", "#305675", "#28384A ", "#211A1E"],
					borderWidth: 4,
					borderColor: '#eee'
				}]
			},
			options: {
				responsive: true,
				legend: {
					position: '', //bottom
					labels: {
						padding: 5,
						boxWidth: 10
					}
				},
				plugins: {
					datalabels: {
						formatter: (value, ctx) => {
							let sum = 0;
							let dataArr = ctx.chart.data.datasets[0].data;
							dataArr.map(data => {
								sum += data;
							});
							let percentage = (value * 100 / sum).toFixed(2) + "%";
							return percentage;
						},
						color: 'white',
						labels: {
							title: {
								font: {
									size: '10'
								}
							}
						}
					}
				},
				tooltips: {
					callbacks: {
						label: function (tooltipItem, data) {
							return data.labels[tooltipItem.index] + ' users ' + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
						}
					}
				}
			}
		});
