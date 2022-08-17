const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const response = await fetch('https://random.dog/woof.json');
    const data = await response.json();

    if (data) { return res.status(200).json(data.url); }
    return res.status(404).json({ message: 'Uuuoops, dog not found' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
