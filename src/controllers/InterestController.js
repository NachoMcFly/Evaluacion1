class InterestController {
  constructor () {
    this.renderInterestResult = this.renderInterestResult.bind(this)
  }

  renderInterest (req, res) {
    res.render('interest')
  }

  calculateInterest (quantity, interestRate, years) {
    return ((quantity * (interestRate / 100)) * years)
  }

  renderInterestResult (req, res) {
    console.log('req.body', req.body)
    const { quantity, interestRate, years } = req.body
    const total = this.calculateInterest(quantity, interestRate, years)
    res.render('interest', {
      quantity, interestRate, years, total
    })
    console.log(total)
  }
}

module.exports = InterestController
