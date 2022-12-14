const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    console.log('TUT');
    const response = await fetch('https://aws.random.cat/meow');
    console.log(response, 'responseresponse');
    const data = await response.json();

    if (data) { return res.status(200).json(data.file); }
    return res.status(404).json({ message: 'Uuuoops, cat not found' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
