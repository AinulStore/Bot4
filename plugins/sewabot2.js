let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/6ab4daac226292a112540.jpg'
let text = `ββκ₯γ *ππ΄ππ° & πΏππ΄πΌπΈππΌ* γκ₯ββ¬£

ββκ₯γ π·π°ππΆπ° ππ΄ππ° γ
β
ββΎ 15 Κα΄ΚΙͺ 10α΄ / Ι’Κα΄α΄α΄
ββΎ 30 Κα΄ΚΙͺ 15α΄ / Ι’Κα΄α΄α΄
ββΎ 45 Κα΄ΚΙͺ 25α΄ / Ι’Κα΄α΄α΄
ββΎ 60 Κα΄ΚΙͺ 30α΄ / Ι’Κα΄α΄α΄
ββΎ α΄α΄Κα΄α΄Ι΄α΄Ι΄ 50α΄ / Ι’Κα΄α΄α΄ 
β
βββκ₯ *${author}* κ₯ββ¬£

ββκ₯γ π·π°ππΆπ° πΏππ΄πΌπΈππΌ γ
β
ββΎ 15 Κα΄ΚΙͺ 10α΄ 
ββΎ 30 Κα΄ΚΙͺ 15α΄ 
ββΎ 45 Κα΄ΚΙͺ 25α΄ 
ββΎ 60 Κα΄ΚΙͺ 30α΄ 
ββΎ α΄α΄Κα΄α΄Ι΄α΄Ι΄ 50α΄
β
βββκ₯ *${author}* κ₯ββ¬£

ββκ₯γ κ°Ιͺα΄α΄Κ 450+ γ
β
ββΎ α΄‘α΄Κα΄α΄α΄α΄
ββΎ α΄Ιͺα΄α΄
ββΎ α΄Ι΄α΄ΙͺΚΙͺΙ΄α΄
ββΎ κ±α΄Ιͺα΄α΄Κ
ββΎ κ±α΄α΄Ι΄α΄
ββΎ α΄Ι΄Ιͺα΄α΄
ββΎ κ±α΄Ι΄α΄ α΄ ΙͺΚα΄α΄x
ββΎ κ±α΄Ι΄α΄ Κα΄Ι’
ββΎ Ι’α΄α΄α΄ Κα΄Ι’
ββΎ α΄ΚΚ
β
βββκ₯ *${author}* κ₯ββ¬£
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: `https://wa.me/6285754202785?text=Hallo admin, saya tertarik untuk menyewa bot ${namebot}`}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(masuk)$/i

export default handler
