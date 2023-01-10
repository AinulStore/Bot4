let fetch = require("node-fetch");
let handler = async (m, { conn, text }) => {
  let hao = `*Official Bot By @${"0".split("@")[0]}* 
 *Powered By @${global.owner[0].split("@")[0]}*`;
  let ext = `
  Cara penggunaan Ainul Store Agar terhindar dari Suspand
• *Peraturan WhatsApp Bot:*
1. Users dilarang menelpon maupun video call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi Owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot
'.trim();
  conn.send3ButtonLoc(
    m.chat,
    media,
    ext,
    hao,
    "Adventure",
    ".adventure",
    "Claim",
    ".claim",
    "Sewa Bot",
    ".sewa",
    m
  );
};
handler.help = ["rules"];
handler.tags = ["main"];
handler.command = /^(rules)$/i;
handler.owner = false;
handler.mods = false;
handler.premium = false;
handler.group = false;
handler.private = false;

handler.admin = false;
handler.botAdmin = false;

handler.fail = null;

module.exports = handler;
