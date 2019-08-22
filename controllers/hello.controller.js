class HelloController {
    hello(req, res) {
        res.send({ msg: 'Hello, it\'s me... a test controller!' });
    }
}

module.exports = { HelloController };
