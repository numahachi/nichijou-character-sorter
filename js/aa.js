	

    // 2008/7/3 Scripted by K-Factory@migiwa
    // 2009/1/27 Modified by K-Factory@migiwa
    // 2014/6/26 Changed characters to cases by xjcl
     
    // *****************************************************************************
    str_CenterT = 'Tie!';
    str_CenterB = 'Undo last choice';
     
    str_ImgPath = 'images/';
    var bln_ResultMode = 1;
    var int_ResultImg = 2;
    var int_ResultRank = 3;
     
    var bln_ResultStyle = 0;
     
    var bln_ProgessBar = 1;
     
    var int_Colspan = 3;
    var ary_TitleData = [
       "Anime characters",
       "Non-anime characters"
    ];
     
    var ary_CharacterData = [
      // Anime characters
      [1, "#13", [1, 0], "13.png"],
      [1, "#8", [1, 0], "8.png"],
      [1, "Agatsuma Keiko", [1, 0], "AgatsumaKeiko.png"],
      [1, "Aioi Yuuko", [1, 0], "AioiYuuko.png"],
      [1, "Akagi", [1, 0], "Akagi.png"],
      [1, "Akahori", [1, 0], "Akahori.png"],
      [1, "Albert Fey", [1, 0], "AlbertFey.png"],
      [1, "Amaraku", [1, 0], "Amaraku.png"],
      [1, "Annaka Haruna", [1, 0], "AnnakaHaruna.png"],
      [1, "Attendant", [1, 0], "Attendant.png"],
      [1, "Biscuit #1", [1, 0], "Biscuit1.png"],
      [1, "Biscuit #2", [1, 0], "Biscuit2.png"],
      [1, "Boxing scout", [1, 0], "BoxingScout.png"],
      [1, "Boxing scout's attendant", [1, 0], "BoxingScoutsAttendant.png"],
      [1, "Boy with headphones", [1, 0], "BoyWithHeadphones.png"],
      [1, "Buddy", [1, 0], "Buddy.png"],
      [1, "Captain", [1, 0], "Captain.png"],
      [1, "Chicchi", [1, 0], "Chicchi.png"],
      [1, "Chief", [1, 0], "Chief.png"],
      [1, "Chissan", [1, 0], "Chissan.png"],
      [1, "Chiyoda Kouichi", [1, 0], "ChiyodaKouichi.png"],
      [1, "Christmas boy", [1, 0], "ChristmasBoy.png"],
      [1, "Daifuku-kun", [1, 0], "DaifukuKun.png"],
      [1, "Daiku Kenzaburou", [1, 0], "DaikuKenzaburou.png"],
      [1, "Deer", [1, 0], "Deer.png"],
      [1, "Dolph", [1, 0], "Dolph.png"],
      [1, "Dominguez", [1, 0], "Dominguez.png"],
      [1, "Dragon King Igarashi", [1, 0], "DragonKingIgarashi.png"],
      [1, "Duck", [1, 0], "Duck.png"],
      [1, "Egi Masaharu", [1, 0], "EgiMasaharu.png"],
      [1, "Emi", [1, 0], "Emi.png"],
      [1, "Fecchan", [1, 0], "Fecchan.png"],
      [1, "Fujimi", [1, 0], "Fujimi.png"],
      [1, "Fujimimura", [1, 0], "Fujimimura.png"],
      [1, "Gentleman", [1, 0], "Gentleman.png"],
      [1, "Glasses guy", [1, 0], "GlassesGuy.png"],
      [1, "Gotou", [1, 0], "Gotou.png"],
      [1, "Hakase", [1, 0], "Hakase.png"],
      [1, "Hasegawa", [1, 0], "Hasegawa.png"],
      [1, "Hirose", [1, 0], "Hirose.png"],
      [1, "Karasu", [1, 0], "Karasu.png"],
      [1, "Katashina Teruhiko", [1, 0], "KatashinaTeruhiko.png"],
      [1, "Katashina", [1, 0], "Katashina(F).png"],
      [1, "Kiyoshi", [1, 0], "Kiyoshi.png"],
      [1, "Kobuddy", [1, 0], "Kobuddy.png"],
      [1, "Komagata", [1, 0], "Komagata.png"],
      [1, "Kurohone", [1, 0], "Kurohone.png"],
      [1, "Maachan", [1, 0], "Maachan.png"],
      [1, "Masao-kun", [1, 0], "MasaoKun.png"],
      [1, "Medium", [1, 0], "Medium.png"],
      [1, "Meiwa (A)", [1, 0], "Meiwa(A).png"],
      [1, "Meiwa (B)", [1, 0], "Meiwa(B).png"],
      [1, "Miichan", [1, 0], "Miichan.png"],
      [1, "Minakami Mai", [1, 0], "MinakamiMai.png"],
      [1, "Muga", [1, 0], "Muga.png"],
      [1, "Naganohara Mio", [1, 0], "NaganoharaMio.png"],
      [1, "Naganohara Yoshino", [1, 0], "NaganoharaYoshino.png"],
      [1, "Nagashi soumen lady", [1, 0], "NagashiSoumenLady.png"],
      [1, "Nakamura Kana", [1, 0], "NakamuraKana.png"],
      [1, "Nakamura", [1, 0], "Nakamura.png"],
      [1, "Nakanojou Tsuyoshi", [1, 0], "NakanojouTsuyoshi.png"],
      [1, "Nakanojou's mother", [1, 0], "NakanojousMother.png"],
      [1, "Namahage", [1, 0], "Namahage.png"],
      [1, "NASA astronaut", [1, 0], "NASAAstronaut.png"],
      [1, "Nitta", [1, 0], "Nitta.png"],
      [1, "Ogi", [1, 0], "Ogi.png"],
      [1, "Oguri Cap", [1, 0], "OguriCap.png"],
      [1, "Oigami", [1, 0], "Oigami.png"],
      [1, "Oogo", [1, 0], "Oogo.png"],
      [1, "Ooizumi", [1, 0], "Ooizumi.png"],
      [1, "Oomama", [1, 0], "Oomama.png"],
      [1, "Oota", [1, 0], "Oota.png"],
      [1, "Osamu", [1, 0], "Osamu.png"],
      [1, "Oura Kousuke", [1, 0], "OuraKousuke.png"],
      [1, "Pino", [1, 0], "Pino.png"],
      [1, "Policeman", [1, 0], "Policeman.png"],
      [1, "Priest", [1, 0], "Priest.png"],
      [1, "Pyon", [1, 0], "Pyon.png"],
      [1, "Reaper", [1, 0], "Reaper.png"],
      [1, "Rokugou", [1, 0], "Rokugou.png"],
      [1, "Sabu", [1, 0], "Sabu.png"],
      [1, "Sabu's owner", [1, 0], "SabusOwner.png"],
      [1, "Sakamoto-san", [1, 0], "SakamotoSan.png"],
      [1, "Sakurai Izumi", [1, 0], "SakuraiIzumi.png"],
      [1, "Sakurai Makoto", [1, 0], "SakuraiMakoto.png"],
      [1, "Santa", [1, 0], "Santa.png"],
      [1, "Sasahara Kojirou", [1, 0], "SasaharaKojirou.png"],
      [1, "Sasahara Koujirou", [1, 0], "SasaharaKoujirou.png"],
      [1, "Scholar", [1, 0], "Scholar.png"],
      [1, "Seki", [1, 0], "Seki.png"],
      [1, "Sekiguchi Yuria", [1, 0], "SekiguchiYuria.png"],
      [1, "Shihandai", [1, 0], "Shihandai.png"],
      [1, "Shimonita", [1, 0], "Shimonita.png"],
      [1, "Shimoooshima", [1, 0], "Shimoooshima.png"],
      [1, "Shinonome Nano", [1, 0], "ShinonomeNano.png"],
      [1, "Shinonome", [1, 0], "Shinonome.png"],
      [1, "Shirosawa", [1, 0], "Shirosawa.png"],
      [1, "Shitara Kimiko", [1, 0], "ShitaraKimiko.png"],
      [1, "Sparrow", [1, 0], "Sparrow.png"],
      [1, "Starla Fey", [1, 0], "StarlaFey.png"],
      [1, "Tachibana Mihoshi", [1, 0], "TachibanaMihoshi.png"],
      [1, "Tachibana Misato", [1, 0], "TachibanaMisato.png"],
      [1, "Takasaki Manabu", [1, 0], "TakasakiManabu.png"],
      [1, "Tamamura", [1, 0], "Tamamura.png"],
      [1, "Tanaka", [1, 0], "Tanaka.png"],
      [1, "Tanuki", [1, 0], "Tanuki.png"],
      [1, "Tengu", [1, 0], "Tengu.png"],
      [1, "Tomioka", [1, 0], "Tomioka.png"],
      [1, "Tsukiyono", [1, 0], "Tsukiyono.png"],
      [1, "Tsumagoi", [1, 0], "Tsumagoi.png"],
      [1, "Waseda-chan", [1, 0], "WasedaChan.png"],
      [1, "Weboshii", [1, 0], "Weboshii.png"],
      [1, "Woman in the white dress", [1, 0], "WomanInTheWhiteDress.png"],
      [1, "Yoshioka", [1, 0], "Yoshioka.png"],
      [1, "Yukko's mother", [1, 0], "YukkosMother.png"],
      [1, "Yumi", [1, 0], "Yumi.png"],

      // None-anime characters
      [1, "Aioi Special", [0, 1], "placeholder.png"],
      [1, "Arama-san", [0, 1], "placeholder.png"],
      [1, "Bera-chan", [0, 1], "placeholder.png"],
      [1, "Box", [0, 1], "placeholder.png"],
      [1, "Cupid", [0, 1], "placeholder.png"],
      [1, "Daiku Sumika", [0, 1], "placeholder.png"],
      [1, "Double Cheeseburgirl", [0, 1], "placeholder.png"],
      [1, "Ex-umpire", [0, 1], "placeholder.png"],
      [1, "Fujioka-kun", [0, 1], "placeholder.png"],
      [1, "Hikoroku", [0, 1], "placeholder.png"],
      [1, "Inubee", [0, 1], "placeholder.png"],
      [1, "IP1", [0, 1], "placeholder.png"],
      [1, "Kaosu-san", [0, 1], "placeholder.png"],
      [1, "Koudai Neko", [0, 1], "placeholder.png"],
      [1, "KP3", [0, 1], "placeholder.png"],
      [1, "Landlord", [0, 1], "placeholder.png"],
      [1, "Mio's mother", [0, 1], "placeholder.png"],
      [1, "Mister Blue", [0, 1], "placeholder.png"],
      [1, "Mogucchi", [0, 1], "placeholder.png"],
      [1, "Mono-eye", [0, 1], "placeholder.png"],
      [1, "Ohanashi Oneesan", [0, 1], "placeholder.png"],
      [1, "Ooizumi-sensei", [0, 1], "placeholder.png"],
      [1, "Orikou Nezumi", [0, 1], "placeholder.png"],
      [1, "Peregrine", [0, 1], "placeholder.png"],
      [1, "Sakurai Hajime", [0, 1], "placeholder.png"],
      [1, "Sankaku", [0, 1], "placeholder.png"],
      [1, "Sekaha", [0, 1], "placeholder.png"],
      [1, "Sekiguchi's sister", [0, 1], "placeholder.png"],
      [1, "Shirasawa-san", [0, 1], "placeholder.png"],
      [1, "Shooting Star", [0, 1], "placeholder.png"],
      [1, "Soutou", [0, 1], "placeholder.png"],
      [1, "Tanabo", [0, 1], "placeholder.png"],
      [1, "The injured mogura", [0, 1], "placeholder.png"],
      [1, "Tico Mart employee", [0, 1], "placeholder.png"],
      [1, "Tomita", [0, 1], "placeholder.png"],
      [1, "Ueboshi", [0, 1], "placeholder.png"],
      [1, "Unnamed Angel", [0, 1], "placeholder.png"],
      [1, "Yanba-kun", [0, 1], "placeholder.png"],
    ];


