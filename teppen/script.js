var app = new Vue({
  el: "#app",
  data: {
    deck: [],
    content: [],
    card: "",
    modal: {},
    isSingle: true,
    isDouble: false,
    isTriple: false,
    showModal: false,
    isOpen: false,
    alert: "",
    price: {
      Common: 50,
      Rare: 200,
      Epic: 800,
      Legendary: 3200
    },
    pieCounter: {
      Red: 0,
      Green: 1,
      Purple: 2,
      Black: 3
    },
    pieChart: {},
    barChart: {}
  },
  computed: {
    souls: function() {
      let totalCost = this.deck
        .map(x => {
          if (x.image.includes("/basic/")) return 0;
          return (x = this.price[x.attributes.Rarity]);
        })
        .reduce((acc, soul) => {
          return +acc + +soul;
        }, []);
      return totalCost;
    },
    mp: function() {
      if (this.deck == 0) return;
      let values = this.deck.map(x => x.attributes.MP);
      let counted = values.reduce((acc, curr) => {
        if (curr in acc) {
          acc[curr]++;
        } else {
          acc[curr] = 1;
        }
        return acc;
      }, {});
      let mode = Object.keys(counted).reduce((a, b) =>
        counted[a] > counted[b] ? a : b
      );
      return mode;
    }
  },
  methods: {
    addCard: async function() {
      this.alert = "";
      let cards = await axios(
        "https://duel-generator-database.s3-us-west-1.amazonaws.com/db.json"
      );
      let card = cards.data.find(c => c.name == this.card);
      if (!card) {
        return (this.alert = "Card not Found!");
      }
      if (card.attributes.Rarity == "Legendary") {
        if (this.deck.filter(e => e.name === card.name).length == 1) {
          return (this.alert =
            "Legendary Count Limit! \nYou can only have 1 copy of a Legendary in your deck.");
        }
      }
      if (this.deck.filter(e => e.name === card.name).length == 3) {
        return (this.alert =
          "Card Count Limit! \n You can only have 3 copies of this card in a deck.");
      }

      for (counter of Object.keys(this.pieCounter)) {
        if (card.attributes.Color == counter) {
          this.pieChart.data.datasets[0].data[this.pieCounter[counter]]++;
        }
      }

      this.barChart.data.datasets[0].data[card.attributes.MP - 1]++;
      this.pieChart.update();
      this.barChart.update();
      $("#chart-cover").show();
      this.deck.push(card);
      return this.deck.sort((a, b) => {
        if (a.attributes.Color > b.attributes.Color) return -1;
        if (a.attributes.Color < b.attributes.Color) return 1;
        if (a.attributes.MP > b.attributes.MP) return 1;
        if (a.attributes.Color > b.attributes.MP) return -1;
      });
    },
    showCard: function(e, card) {
      if (e.shiftKey) {
        for (counter of Object.keys(this.pieCounter)) {
          if (card.attributes.Color == counter) {
            this.pieChart.data.datasets[0].data[this.pieCounter[counter]]--;
          }
        }
        this.barChart.data.datasets[0].data[card.attributes.MP - 1]--;
        var index = this.deck.indexOf(card);
        if (index !== -1) {
          this.pieChart.update();
          this.barChart.update();
          return this.deck.splice(index, 1);
        }
      }

      this.showModal = !this.showModal;
      this.modal = card;
      e.preventDefault();
    },
    toggle: function() {
      this.isOpen = !this.isOpen;
    }
  },
  mounted: async function() {
    try {
      let cards = await axios.get(
        "https://duel-generator-database.s3-us-west-1.amazonaws.com/db.json"
      );
      for (card of cards.data) {
        this.content.push({
          title: card.name,
          description: card.attributes.Effects
        });
      }
    } catch (e) {
      console.log(e);
    }
    $(".ui.search").search({
      onSelect: result => {
        this.card = result.title;
      },
      maxResults: 99,
      source: this.content
    });
    var ctx = document.getElementById("myChart").getContext("2d");
    var bar = document.getElementById("myBar").getContext("2d");
    var myBar = new Chart(bar, {
      type: "bar",
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
          {
            label: "Cards",
            backgroundColor: [
              "#3e95cd",
              "#3e95cd",
              "#3e95cd",
              "#3e95cd",
              "#3e95cd",
              "#3e95cd",
              "#3e95cd",
              "#3e95cd",
              "#3e95cd",
              "#3e95cd"
            ],
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Deck Mana Curve"
        }
      }
    });
    var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Red", "Green", "Purple", "Black"],
        datasets: [
          {
            label: "# of Votes",
            data: [0, 0, 0, 0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(75, 200, 75, 0.2)",
              "rgba(255, 100, 255, 0.2)",
              "rgba(50, 50, 50, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(75, 200, 75, 1)",
              "rgba(255, 100, 255, 1)",
              "rgba(50, 50, 50, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    });
    this.pieChart = myChart;
    this.barChart = myBar;
    $("#chart-cover").hide();
  }
});
