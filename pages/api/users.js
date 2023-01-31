export default function handler(req, res) {
  res.status(200).json([
    {
      name: "Snekxs",
      items: [{ mouse: "Ninjutso Sora" }, { mousepad: "Soku X1" }],
    },
    {
      name: "Wizdo",
      items: [{ mouse: "Fantech Aria" }, { mousepad: "Gamesense Radar 4mm" }],
    },
    {
      name: "TheOtherSnekxs",
      items: [
        { mouse: "Pulsar Xlite V2 Mini" },
        { mousepad: "TJ Exclusives Cerapad Kin" },
      ],
    },
    {
      name: "TheOtherWizdo",
      items: [
        { mouse: "Pulsar X2 Mini" },
        { mousepad: "Aqua Control Plus+ Wave" },
      ],
    },
  ]);
}
