// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { search } = req.query;
  res.status(200).json({
    data: [
      {
        id: 1,
        name: "Aqua Control Zero",
        brand: "X-raypad",
        type: "mousepad",
        image_url:
          "https://us.maxgaming.com/img/bilder/artiklar/22946.jpg?m=1669718716&w=720",
      },
      {
        id: 2,
        name: "Aqua Control Plus+ Wave",
        brand: "X-raypad",
        type: "mousepad",
        image_url:
          "https://us.maxgaming.com/img/bilder/artiklar/22375.jpg?m=1662727695&w=720",
      },
      {
        id: 3,
        name: "Saturn Pro",
        brand: "Lethal Gaming Gear",
        type: "mousepad",
        image_url:
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/929/213/products/saturn_xl_21-ef0fc1f6583022e4c316654378999078-480-0.webp",
      },
      {
        id: 4,
        name: "Venus Pro",
        brand: "Lethal Gaming Gear",
        type: "mousepad",
        image_url:
          "https://sklep.hard-pc.pl/galerie/p/podkladka-lethal-gaming-gear_52966.png",
      },
      {
        id: 5,
        name: "SkyPad 3.0 Glass",
        brand: "SkyPad",
        type: "mousepad",
        image_url:
          "https://www.maxgaming.com/bilder/artiklar/20753.jpg?m=1649159302",
      },
      {
        id: 6,
        name: "Zero XSOFT",
        brand: "Artisan",
        type: "mousepad",
        image_url:
          "http://cdn.shopify.com/s/files/1/0550/0364/4017/products/Screenshot_53-removebg-preview__1___1_-removebg-preview_6e925fde-5a09-430a-bc06-2f1d4afd5baa.png?v=1663885996",
      },
      {
        id: 7,
        name: "Zero SOFT",
        brand: "Artisan",
        type: "mousepad",
        image_url:
          "http://cdn.shopify.com/s/files/1/0550/0364/4017/products/Screenshot_53-removebg-preview__1___1_-removebg-preview_6e925fde-5a09-430a-bc06-2f1d4afd5baa.png?v=1663885996",
      },
      {
        id: 8,
        name: "Zero MID",
        brand: "Artisan",
        type: "mousepad",
        image_url:
          "http://cdn.shopify.com/s/files/1/0550/0364/4017/products/Screenshot_53-removebg-preview__1___1_-removebg-preview_6e925fde-5a09-430a-bc06-2f1d4afd5baa.png?v=1663885996",
      },
      {
        id: 9,
        name: "Hien XSOFT",
        brand: "Artisan",
        type: "mousepad",
        image_url:
          "https://www.maxgaming.com/img/bilder/artiklar/20516.jpg?m=1638977455&w=720",
      },
      {
        id: 10,
        name: "Hien SOFT",
        brand: "Artisan",
        type: "mousepad",
        image_url:
          "https://www.maxgaming.com/img/bilder/artiklar/20516.jpg?m=1638977455&w=720",
      },
      {
        id: 11,
        name: "Hien MID",
        brand: "Artisan",
        type: "mousepad",
        image_url:
          "https://www.maxgaming.com/img/bilder/artiklar/20516.jpg?m=1638977455&w=720",
      },
      {
        id: 12,
        name: "Raiden MID",
        brand: "Artisan",
        type: "mousepad",
        image_url:
          "https://cdn.shopify.com/s/files/1/0565/3587/5699/products/Raiden.png?v=1648388247&width=823",
      },
      {
        id: 13,
        name: "Raiden XSOFT",
        brand: "Artisan",
        type: "mousepad",
        image_url:
          "https://cdn.shopify.com/s/files/1/0565/3587/5699/products/Raiden.png?v=1648388247&width=823",
      },
      {
        id: 14,
        name: "Hayate Otsu XSOFT",
        brand: "Artisan",
        type: "mousepad",
        image_url:
          "https://cdn.shopify.com/s/files/1/0565/3587/5699/products/HayateOtsu.png?v=1648159421&width=1024",
      },
      {
        id: 15,
        name: "Hayate Otsu SOFT",
        brand: "Artisan",
        type: "mousepad",
        image_url:
          "https://cdn.shopify.com/s/files/1/0565/3587/5699/products/HayateOtsu.png?v=1648159421&width=1024",
      },
      {
        id: 16,
        name: "Hayate Otsu MID",
        brand: "Artisan",
        type: "mousepad",
        image_url:
          "https://cdn.shopify.com/s/files/1/0565/3587/5699/products/HayateOtsu.png?v=1648159421&width=1024",
      },
      {
        id: 17,
        name: "Hayate Kou MID",
        brand: "Artisan",
        type: "mousepad",
        image_url:
          "https://www.maxgaming.com/bilder/artiklar/21296.jpg?m=1670501482",
      },
      {
        id: 18,
        name: "Hayate Kou SOFT",
        brand: "Artisan",
        type: "mousepad",
        image_url:
          "https://www.maxgaming.com/bilder/artiklar/21296.jpg?m=1670501482",
      },
      {
        id: 19,
        name: "Hayate Kou XSOFT",
        brand: "Artisan",
        type: "mousepad",
        image_url:
          "https://www.maxgaming.com/bilder/artiklar/21296.jpg?m=1670501482",
      },
      {
        id: 20,
        name: "Cerapad Kin",
        brand: "TJ Exclusives",
        type: "mousepad",
        image_url: "https://dpqp.jp/wp-content/uploads/2023/01/cerapad-kin.png",
      },
      {
        id: 21,
        name: "Cerapad",
        brand: "TJ Exclusives",
        type: "mousepad",
        image_url:
          "https://i.ebayimg.com/images/g/1j8AAOSwZCtjLfAc/s-l1600.jpg",
      },
      {
        id: 22,
        name: "X1",
        brand: "Soku",
        type: "mousepad",
        image_url:
          "https://www.maxgaming.com/img/bilder/artiklar/22868.jpg?m=1669104495&w=720",
      },
      {
        id: 23,
        name: "The Duel",
        brand: "Infinity Mice",
        type: "mousepad",
        image_url:
          "https://maxesport.gg/medias/2023/01/infinity-mice-the-duel-1.webp",
      },
      {
        id: 24,
        name: "Smooth Criminal",
        brand: "The Whale",
        type: "mousepad",
        image_url:
          "http://cdn.shopify.com/s/files/1/0641/3611/8500/products/1_37103ff5-ce4c-4364-92f0-9a604d1e82c5.png?v=1670798448",
      },
      {
        id: 25,
        name: "Walhaut",
        brand: "The Whale",
        type: "mousepad",
        image_url:
          "http://cdn.shopify.com/s/files/1/0641/3611/8500/products/WH-BB-L-4.png?v=1651431197",
      },
      {
        id: 26,
        name: "Radar 3mm",
        brand: "Gamesense",
        type: "mousepad",
        image_url:
          "https://preview.redd.it/how-is-the-base-of-the-gamesense-radar-v0-8be5rhg7h1s91.png?auto=webp&s=eb4d64d1a8880f14105f3b714ea17d9686adedf3",
      },
      {
        id: 27,
        name: "Radar 4mm",
        brand: "Gamesense",
        type: "mousepad",
        image_url:
          "https://zerkgamingmods.co.uk/wp-content/uploads/2022/09/Gamesense-4MM-BW.jpg",
      },
      {
        id: 28,
        name: "Rush",
        brand: "Gamesense",
        type: "mousepad",
        image_url:
          "http://cdn.shopify.com/s/files/1/0506/6627/5008/products/1_e2ab8522-3577-412e-a9b7-9fc10faf5eac_1200x1200.png?v=1666302957",
      },
      {
        id: 29,
        name: "Cloth",
        brand: "XTEN",
        type: "mousepad",
        image_url:
          "http://cdn.shopify.com/s/files/1/0506/6627/5008/products/1_e2ab8522-3577-412e-a9b7-9fc10faf5eac_1200x1200.png?v=1666302957",
      },
      {
        id: 30,
        name: "Hard",
        brand: "XTEN",
        type: "mousepad",
        image_url:
          "http://cdn.shopify.com/s/files/1/0506/6627/5008/products/1_e2ab8522-3577-412e-a9b7-9fc10faf5eac_1200x1200.png?v=1666302957",
      },
      {
        id: 31,
        name: "G-Cloth",
        brand: "XTEN",
        type: "mousepad",
        image_url:
          "http://cdn.shopify.com/s/files/1/0506/6627/5008/products/1_e2ab8522-3577-412e-a9b7-9fc10faf5eac_1200x1200.png?v=1666302957",
      },
      {
        id: 32,
        name: "Saturn",
        brand: "Lethal Gaming Gear",
        type: "mousepad",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/Saturn_XL_a196ec70-a36d-4a00-bd8b-bd5712ca6b8e_1024x.jpg?v=1655517523",
      },
      {
        id: 33,
        name: "Venus",
        brand: "Lethal Gaming Gear",
        type: "mousepad",
        image_url:
          "https://cdn.store-assets.com/s/824673/i/41252634.png?width=480",
      },
      {
        id: 33,
        name: "Mercury",
        brand: "Lethal Gaming Gear",
        type: "mousepad",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/Mercury_XL_MK_1024x.jpg?v=1640818268",
      },
      {
        id: 34,
        name: "Jupiter",
        brand: "Lethal Gaming Gear",
        type: "mousepad",
        image_url:
          "http://cdn.shopify.com/s/files/1/0255/9832/8929/products/Jupiter_XL.jpg?v=1640818147",
      },
      {
        id: 35,
        name: "Equate ",
        brand: "X-raypad",
        type: "mousepad",
        image_url:
          "https://shop.x-raypad.com/wp-content/uploads/2021/05/Aqua-control-2-black-galaxy-XL-mouse-pad.jpg",
      },
      {
        id: 36,
        brand: "Pulsar",
        name: "Pulsar X2 Mini - Wireless Gaming Mouse",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/chrome_tzD9jEqYLd_8ebd463f-00b3-490a-96c8-5689aaf3613a.png?v=1660098034",
        type: "mouse",
      },
      {
        id: 37,
        brand: "Pulsar",
        name: "Pulsar X2 - Wireless Gaming Mouse",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/chrome_tzD9jEqYLd.png?v=1660097853",
        type: "mouse",
      },
      {
        id: 38,
        brand: "Pulsar",
        name: "Pulsar X2 - All Red - LIMITED EDITION - Wireless Gaming Mouse",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/Pulsar_Gaming_Gears_X2_Wireless_Gaming_Mouse_Red_001.webp?v=1668294576",
        type: "mouse",
      },
      {
        id: 39,
        brand: "Pulsar",
        name: "Pulsar X2 - Bruce Lee - LIMITED EDITION - Wireless Gaming Mouse",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/unnamed_4.jpg?v=1671658957",
        type: "mouse",
      },
      {
        id: 40,
        brand: "Gamesense",
        name: "Gamesense Meta",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/GamesenseMeta2.jpg?v=1628919786",
        type: "mouse",
      },
      {
        id: 41,
        brand: "Fantech",
        name: "Fantech XD7 Aria - Wireless Gaming Mouse",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/3d4bcafa.jpg?v=1662510106",
        type: "mouse",
      },
      {
        id: 42,
        brand: "Pulsar",
        name: "Pulsar X2 Mini - Bruce Lee - LIMITED EDITION - Wireless Gaming Mouse",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/unnamed_4_d1add69e-34e3-40ba-bc9a-5fe54a16250c.jpg?v=1671658969",
        type: "mouse",
      },
      {
        id: 43,
        brand: "Pulsar",
        name: "Pulsar X2 Mini - Founder's Edition (FE) Green - LIMITED EDITION - Wireless Gaming Mouse",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/PulsarGamingGears-X2MiniFEWirelessGamingMouse_Top_FE_720x_811ebc2e-5a4d-40bd-9a29-c3691fd07b6d.webp?v=1668294684",
        type: "mouse",
      },

      {
        id: 44,
        brand: "Pulsar",
        name: "Pulsar X2 - Founder's Edition (FE) Green - LIMITED EDITION - Wireless Gaming Mouse",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/PulsarGamingGears-X2FEWirelessGamingMouse_Top_FE_900x_1300916d-73e5-4621-a109-0c086155259c.webp?v=1668294688",
        type: "mouse",
      },
      {
        id: 45,
        brand: "Pulsar",
        name: "Pulsar X2 - Wireless Gaming Mouse [OPEN BOX - FINAL SALE]",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/chrome_tzD9jEqYLd_6caef2fa-7103-4c15-b21a-cde351eb7261.png?v=1663026915",
        type: "mouse",
      },
      {
        id: 46,
        brand: "Pulsar",
        name: "Pulsar X2 Mini - Wireless Gaming Mouse [OPEN BOX - FINAL SALE]",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/chrome_tzD9jEqYLd_860ae337-5e2f-426f-9a7f-a8d5f2d189a5.png?v=1663026956",
        type: "mouse",
      },
      {
        id: 47,
        brand: "Pulsar",
        name: "Pulsar X2 Mini - All Red - LIMITED EDITION - Wireless Gaming Mouse",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/Pulsar_Gaming_Gears_X2_Wireless_Gaming_Mouse_Red_001_c363fb2a-3f57-48e3-89db-cd01c2af83b6.webp?v=1668294700",
        type: "mouse",
      },
      {
        id: 48,
        brand: "Fantech",
        name: "Fantech Helios Go XD5 - Wireless Gaming Mouse",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/XD5-1.png?v=1668124064",
        type: "mouse",
      },
      {
        id: 49,
        brand: "Ninjutso",
        name: "Ninjutso Sora Wireless Gaming Mouse - White",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/chrome_h9N66a0JfJ.jpg?v=1673416347",
        type: "mouse",
      },
      {
        id: 50,
        brand: "Gamesense",
        name: "Gamesense MVP Wireless",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/MVP_Final_1024x1024_2x_41a3e7c4-aff5-4cfb-84dd-0a663eee61d9.webp?v=1650156076",
        type: "mouse",
      },
      {
        id: 51,
        brand: "Ninjutso",
        name: "Ninjutso Sora Wireless Gaming Mouse - Black",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/chrome_liKEk0F7oZ.jpg?v=1673416242",
        type: "mouse",
      },
      {
        id: 52,
        brand: "Lethal Gaming Gear",
        name: "LA-1 - Wireless Gaming Mouse [ESTIMATED Q2 2023]",
        image_url:
          "https://cdn.shopify.com/s/files/1/0255/9832/8929/products/6.png?v=1660593043",
        type: "mouse",
      },
      {
        id: 53,
        brand: "Lamzu",
        name: "Atlantis Mini",
        image_url:
          "https://us.maxgaming.com/img/bilder/artiklar/22935.jpg?m=1673887745&w=720",
        type: "mouse",
      },
      {
        id: 54,
        brand: "Lamzu",
        name: "Atlantis",
        image_url:
          "https://us.maxgaming.com/img/bilder/artiklar/22169.jpg?m=1673887736&w=720",
        type: "mouse",
      },
      {
        id: 55,
        brand: "Finalmouse",
        name: "Starlight Pro - TenZ",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/tenz.png?v=1669869082",
        type: "mouse",
      },
      {
        id: 56,
        brand: "Finalmouse",
        name: "Starlight-12 Poseidon",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/poseidonsite.png?v=1656629904",
        type: "mouse",
      },
      {
        id: 57,
        brand: "Finalmouse",
        name: "Starlight-12 Pegasus",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/pegasusshop.png?v=1649358937",
        type: "mouse",
      },
      {
        id: 58,
        brand: "Finalmouse",
        name: "Starlight-12  Achilles",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/fee3537_040_k.jpg?v=1629245511",
        type: "mouse",
      },
      {
        id: 59,
        brand: "Finalmouse",
        name: "Starlight-12  Hades",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/fee3537_048_k.jpg?v=1629245543",
        type: "mouse",
      },
      {
        id: 60,
        brand: "Finalmouse",
        name: "Starlight-12  Ares",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/fee3537_046_k.jpg?v=1629245528",
        type: "mouse",
      },
      {
        id: 61,
        brand: "Finalmouse",
        name: "Ultralight 2 - Cape Town",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/fee3487_031_h_9fa4854b-4049-40ed-b000-9815859d76cf.jpg?v=1619112875",
        type: "mouse",
      },
      {
        id: 62,
        brand: "Finalmouse",
        name: "Starlight-12  Zeus",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/fee3537_043_k.jpg?v=1629245576",
        type: "mouse",
      },
      {
        id: 63,
        brand: "Finalmouse",
        name: "Starlight-12 Phantom",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/phantomshop.png?v=1649358961",
        type: "mouse",
      },
      {
        id: 64,
        brand: "Finalmouse",
        name: "Air58 Ninja - Cherry Blossom Red",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/fee3487_024_h.jpg?v=1619112853",
        type: "mouse",
      },
      {
        id: 65,
        brand: "Finalmouse",
        name: "Ultralight Phantom",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/phantom1.png?v=1531181787",
        type: "mouse",
      },
      {
        id: 66,
        brand: "Finalmouse",
        name: "Air58 Ninja - Cherry Blossom Blue",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/fee3487_021_h.jpg?v=1619112833",
        type: "mouse",
      },
      {
        id: 67,
        brand: "Finalmouse",
        name: "Ultralight Pro - Black",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/uplblack1.png?v=1519503644",
        type: "mouse",
      },
      {
        id: 68,
        brand: "Finalmouse",
        name: "Ultralight Pro - White",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/ulpwhite1.png?v=1518539105",
        type: "mouse",
      },
      {
        id: 69,
        brand: "Finalmouse",
        name: "Scream One",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/scream1.jpg?v=1629248475",
        type: "mouse",
      },
      {
        id: 70,
        brand: "Finalmouse",
        name: "Ultralight Sunset",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/sunset1.png?v=1518062567",
        type: "mouse",
      },
      {
        id: 71,
        brand: "Finalmouse",
        name: "Tournament Pro",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/tournamentpro.jpg?v=1629250077",
        type: "mouse",
      },
      {
        id: 72,
        brand: "Finalmouse",
        name: "Starlight Pro - The Last Legend",
        image:
          "https://cdn.shopify.com/s/files/1/2377/4861/products/still_2.png?v=1671746376",
        type: "mouse",
      },
      {
        id: 73,
        brand: "BenQ Zowie",
        name: "BenQ Zowie G-SR-SE Gaming Mousepad (Rogue Edition)",
        image:
          "https://image.benq.com/is/image/benqco/02-g-sr-se-sr-rouge-top?$ResponsivePreset$&fmt=png-alpha",
        type: "mousepad",
      },
      {
        id: 74,
        brand: "BenQ Zowie",
        name: "BenQ Zowie V2 Series - Limited Edition Red Wired E-Sport Gaming Mice",
        image:
          "https://image.benq.com/is/image/benqco/01-S2-v2-top?$ResponsivePreset$&fmt=png-alpha",
        type: "mouse",
      },
      {
        id: 75,
        brand: "BenQ Zowie",
        name: "BenQ Zowie EC1-C - 80g E-Sports Wired Gaming Mouse",
        image:
          "https://image.benq.com/is/image/benqco/01-ec1-c-top?$ResponsivePreset$&fmt=png-alpha",
        type: "mouse",
      },
      {
        id: 76,
        brand: "BenQ Zowie",
        name: "BenQ Zowie EC3-C - 70g E-Sports Wired Gaming Mouse",
        image:
          "https://image.benq.com/is/image/benqco/01-ec3-c-top?$ResponsivePreset$&fmt=png-alpha",
        type: "mouse",
      },
      {
        id: 77,
        brand: "BenQ Zowie",
        name: "BenQ Zowie ZA11-C - 72g E-Sports Wired Gaming Mouse",
        image:
          "https://image.benq.com/is/image/benqco/01-ZA11C-top?$ResponsivePreset$&fmt=png-alpha",
        type: "mouse",
      },
      {
        id: 78,
        brand: "BenQ Zowie",
        name: "BenQ Zowie ZA13-C - 65g E-Sports Wired Gaming Mouse",
        image:
          "https://image.benq.com/is/image/benqco/01-za11-b-top?$ResponsivePreset$&fmt=png-alpha",
        type: "mouse",
      },
      {
        id: 79,
        brand: "BenQ Zowie",
        name: "BenQ Zowie EC2-C - 73g E-Sports Wired Gaming Mouse",
        image:
          "https://image.benq.com/is/image/benqco/01-ec2-c-top-1?$ResponsivePreset$",
        type: "mouse",
      },
      {
        id: 80,
        brand: "BenQ Zowie",
        name: "BenQ Zowie ZA12-C - 70g E-Sports Wired Gaming Mouse",
        image:
          "https://image.benq.com/is/image/benqco/01-za12-b-za-black-top?$ResponsivePreset$&fmt=png-alpha",
        type: "mouse",
      },
      {
        id: 81,
        brand: "BenQ Zowie",
        name: "BenQ Zowie FK2-C - 70g E-Sports Wired Gaming Mouse",
        image:
          "https://image.benq.com/is/image/benqco/01-FK1C-top?$ResponsivePreset$&fmt=png-alpha",
        type: "mouse",
      },
      {
        id: 82,
        brand: "BenQ Zowie",
        name: "BenQ Zowie FK1-C - 74g E-Sports Wired Gaming Mouse",
        image:
          "https://cdn.shopify.com/s/files/1/0199/7570/0534/products/8c4c7256c00e4bee684c86ab0c63bded.jpg?v=1658817687",
        type: "mouse",
      },
      {
        id: 83,
        brand: "BenQ Zowie",
        name: "BenQ Zowie FK1+-C - 77g E-Sports Wired Gaming Mouse",
        image:
          "https://image.benq.com/is/image/benqco/01-FK1C-top?$ResponsivePreset$&fmt=png-alpha",
        type: "mouse",
      },
      {
        id: 84,
        brand: "BenQ Zowie",
        name: "BenQ Zowie S1-C - 72g E-sports Wired Gaming Mouse",
        image:
          "https://www.benq.com/content/dam/zowie/en/product/mouse/s/s1-c/gallery/01-S1C-top-01.png",
        type: "mouse",
      },
      {
        id: 85,
        brand: "BenQ Zowie",
        name: "BenQ ZOWIE GTF-X Gaming Mousepad (Large)",
        image:
          "https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/104/10481/10481876.jpg",
        type: "mousepad",
      },
      {
        id: 86,
        brand: "BenQ Zowie",
        name: "BenQ ZOWIE P TF-X Gaming Mousepad (Small)",
        image:
          "https://image.benq.com/is/image/benqco/03-ptf-x-tf-x-black-top?$ResponsivePreset$&fmt=png-alpha",
        type: "mousepad",
      },
      {
        id: 87,
        brand: "BenQ Zowie",
        name: "BenQ Zowie S2-C - 69g E-Sports Wired Gaming Mouse",
        image:
          "https://www.benq.com/content/dam/zowie/en/product/mouse/s/s2-c/gallery/01-S2C-top-1.png",
        type: "mouse",
      },
      {
        id: 88,
        brand: "BenQ Zowie",
        name: "Benq Zowie P-SR Gaming Mousepad (Small)",
        image:
          "https://image.benq.com/is/image/benqco/02-p-sr-sr-black-top?$ResponsivePreset$&fmt=png-alpha",
        type: "mousepad",
      },
      {
        id: 89,
        brand: "BenQ Zowie",
        name: "Benq Zowie G-SR Gaming Mousepad (Large)",
        image:
          "https://www.benq.com/content/dam/zowie/en/product/mousepad/g-sr/gallery/03-g-sr-sr-black-top45.png",
        type: "mousepad",
      },
      {
        id: 90,
        brand: "BenQ Zowie",
        name: "BenQ ZOWIE G-SR-SE Gaming Mousepad (DEEP BLUE)",
        image:
          "https://m.media-amazon.com/images/S/aplus-media/sota/784f8beb-9767-4382-bedd-c55da9ae946b.__CR300,295,2120,1311_PT0_SX970_V1___.jpg",
        type: "mousepad",
      },
    ],
  });
}
