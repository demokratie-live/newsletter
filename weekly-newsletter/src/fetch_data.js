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

async function fetchData() {
  const topics = [
    {
      title: "Klimaschutz",
      banner: "../img/bereich-klima.jpeg",
      teaser: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
      elements: await Promise.all([
        fetchElement('_fake_id3458769'),
        fetchElement(1),
        fetchElement('_fake_id3458769')
      ])
    },
    {
      title: "Postmodell",
      banner: "../img/bereich-post.jpeg",
      teaser: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
      elements: await Promise.all([
        fetchElement('_fake_id3458769'),
      ])
    },
    {
      title: "Eisenbahn",
      banner: "../img/bereich-zug.jpeg",
      teaser: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
      elements: await Promise.all([
        fetchElement('_fake_id34543255'),
      ])
    },
    {
      title: "Auslandseinsätze",
      banner: "../img/bereich-peacekeeping.jpeg",
      teaser: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
      elements: await Promise.all([
        fetchElement('_fake_id34543255'),
        fetchElement('1'),
        fetchElement('1'),
      ])
    },
    {
      title: "Sonstiges",
      banner: "../img/bereich-sonstiges.jpeg",
      teaser: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
      elements: await Promise.all([
        fetchElement('_fake_id34543255'),
        fetchElement('1'),
      ])
    }
  ];

  return {
    kw: 16,
    topics
  };
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
  fetchData,
  fetchDonationState
};
