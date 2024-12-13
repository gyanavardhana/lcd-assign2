const express = require("express")
const app = express();
const port = 3000;
app.use(express.json());

app.get('v1/api/check-aadhaar-status', (req, res) => {
	const isAadhaar = true;

	if (isAadhaar) {
		res.status(200).json({
			message: 'working',
		});
	} else {
		res.status(503).json({
			message: 'not_working',
		});
	}
});
app.listen(port, () => {
	console.log(`App is listening on port:${port}`);
})
