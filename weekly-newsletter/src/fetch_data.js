const got = require("got");

async function fetchData() {
  const topics = [
    {
      title: "Klimaschutz",
      banner: "../img/bereich-klima.jpeg",
      elements: [
        {
          date: "29.7.2019",
          typ: "GESETZENTWURF",
          teaser:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
          link: "##"
        },
        {
          date: "30.7.2019",
          typ: "ANTRAG",
          teaser:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
          link: "##"
        },
        {
          date: "30.7.2019",
          typ: "ANTRAG",
          teaser:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
          link: "##"
        }
      ]
    },
    {
      title: "Postmodell",
      banner: "../img/bereich-post.jpeg",
      elements: [
        {
          date: "29.7.2019",
          typ: "GESETZENTWURF",
          teaser:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
          link: "##"
        }
      ]
    },
    {
      title: "Eisenbahn",
      banner: "../img/bereich-klima.jpeg",
      elements: [
        {
          date: "29.7.2019",
          typ: "GESETZENTWURF",
          teaser:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
          link: "##"
        }
      ]
    },
    {
      title: "Auslandseinsätze",
      banner: "../img/bereich-peacekeeping.jpeg",
      elements: [
        {
          date: "29.7.2019",
          typ: "GESETZENTWURF",
          teaser:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
          link: "##"
        },
        {
          date: "30.7.2019",
          typ: "ANTRAG",
          teaser:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
          link: "##"
        },
        {
          date: "27.7.2019",
          typ: "ANTRAG",
          teaser:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
          link: "##"
        }
      ]
    },
    {
      title: "Sonstiges",
      banner: "../img/bereich-sonstiges.jpeg",
      elements: [
        {
          date: "29.7.2019",
          typ: "GESETZENTWURF",
          teaser:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
          link: "##"
        },
        {
          date: "30.7.2019",
          typ: "ANTRAG",
          teaser:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ...",
          link: "##"
        }
      ]
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
