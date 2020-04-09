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
  return {
    current: 5311,
    goal: 9875
  };
}

module.exports = {
  fetchData,
  fetchDonationState
};
