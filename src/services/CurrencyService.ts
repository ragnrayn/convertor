const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1b8ee7354emsh1d719be64608fa7p17a2b6jsna402a22acfae",
    "X-RapidAPI-Host": "currency-conversion-and-exchange-rates.p.rapidapi.com",
  },
};

export const CurrencyService = {
  getCurrentCurrency: async (from: string, to: string) => {

    console.log("From", from);

    const response = await fetch(
      `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${from}&to=${to}&amount=7500`,
      options
    );

    const data = await response.json();

    return data;
  },
};
