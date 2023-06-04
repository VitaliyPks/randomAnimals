const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const url = 'https://cataas.com'

    const response = await fetch(`${url}/cat?json=true`);
    const data = await response.json();

    if (data) {
      return res.status(200).json(`${url}${data.url}`);
    }
    return res.status(404).json({ message: "Uuuoops, cat not found" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
