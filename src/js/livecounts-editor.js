const channel = channelSubmitName.value; let count = 0; let rate = 0; let nonNeg = false function stopAtZero() { nonNeg ? nonNeg = false : nonNeg = true } function submit() { const channel = channelSubmitName.value; count = parseInt(countSubmit.value, 10); if (!channel) { return alert("Invalid channel name."); } if (typeof count === "undefined") { return alert("Count must be a number."); } if (count < -1e12 || count > 1e12) { return alert("Count must be between -1 000 000 000 000 and 1 000 000 000 000."); } if (nonNeg && count < 0) count = 0 channelSubs.innerHTML = count; channelName.innerHTML = channel; if (parseInt(subsPerMinute.value, 10)) { rate = parseInt(subsPerMinute.value, 10); } else { rate = 0; } if (rate > 1e9 || rate < -1e9) { return alert("Rate must be between -1 000 000 000 and 1 000 000 000."); } } function updateSubs() { if (!channelSubmitName.value) return; if (rate > 1e9 || rate < -1e9) return; let updateIntervals = 30 if (rateOption.value == "secs") updateIntervals = 0.5 if (rateOption.value == "hrs") updateIntervals = 1800 channelSubs.innerHTML = Math.floor(count + rate / updateIntervals) < 0 ? 0 : Math.floor(count + rate / updateIntervals); count = count + rate / updateIntervals; } setInterval(updateSubs, 2000);
