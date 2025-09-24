// ============================================================
// ALL APPLICATION METHODS RELATED TO CURRENCY HANDLING
// ============================================================

class serviceCurrency {
  // ===================================
  // FORMAT CURRENCY SIGN
  // ===================================
  getSign(currency) {
    let currency_type = "",
      naira = "₦",
      dollar = "$",
      pound = "£",
      cedis = "₵",
      kenyan_shilling = "KSh";

    switch (currency) {
      case "naira":
      case "NGN":
      case "ng":
        currency_type = naira;
        break;
      case "dollar":
      case "USD":
      case "us":
        currency_type = dollar;
        break;
      case "pound":
      case "GBP":
      case "gb":
        currency_type = pound;
        break;
      case "cedis":
      case "GHS":
      case "GH":
        currency_type = cedis;
        break;
      case "kenyan_shilling":
      case "KES":
      case "KE":
        currency_type = kenyan_shilling;
        break;
      default:
        console.log("Currency sign not available yet!");
    }

    return currency_type
      ? currency_type
      : currency?.length > 4
      ? "#"
      : currency;
  }

  getCode(currency) {
    let currency_type = "",
      naira = "NGN",
      dollar = "USD",
      pound = "GBP";

    switch (currency) {
      case "naira":
      case "NGN":
      case "ng":
        currency_type = naira;
        break;
      case "dollar":
      case "USD":
      case "us":
        currency_type = dollar;
        break;
      case "pound":
      case "GBP":
      case "gb":
        currency_type = pound;
        break;
      default:
        console.log("Currency code not available yet!");
    }

    return currency_type;
  }

  // ===================================
  // FORMAT CURRENCY COMMA SEPARATOR
  // ===================================
  addComma(currency) {
    return new Intl.NumberFormat().format(currency);
  }
}

export const $serviceCurrency = new serviceCurrency();
