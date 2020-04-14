const got = require("got");

async function fetchElement(id) {
  return {
    date: "29.7.2019",
    typ: Math.random()>0.5?"GESETZENTWURF":"ANTRAG",
    teaser:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
    link: "##"
  }
}

async function fetchDonationState() {
  const api_result = await got(
    "https://www.democracy-deutschland.de/api.php?call=donation_status"
  ).json();

  if (!api_result.status) {
    throw new Error("api response status === false");
  }

  const {
    donation_date,
    donation_value,
    donation_value_goal
  } = api_result.result;

  return {
    current: donation_value,
    goal: donation_value_goal,
    date: donation_date
  };
}

module.exports = {
  fetchElement,
  fetchDonationState
};
