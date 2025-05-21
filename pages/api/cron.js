export default function handler(req, res) { console.log("Cron job ran at:", new Date().toISOString()); res.status(200).json({ message: "Cron job executed!" }); }
