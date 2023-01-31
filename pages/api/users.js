export default function handler(req, res) {
    res.status(200).json([{ name: "Snekxs" }, { name: "Wizdo" }, { "name": "TheOtherSnekxs" }, { "name": "TheOtherWizdo" }]);
}