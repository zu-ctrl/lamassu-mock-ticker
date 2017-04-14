const BigNumber = require('bignumber.js')

function ticker (account, fiatCode, cryptoCode) {
  if (cryptoCode !== 'BTC') {
    return Promise.reject('Unsupported crypto: ' + cryptoCode)
  }

  return Promise.resolve({
    rates: {
      ask: new BigNumber(1001),
      bid: new BigNumber(1000)
    }
  })
}

module.exports = {ticker}
