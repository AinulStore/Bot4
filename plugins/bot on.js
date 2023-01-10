let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak bot tadi ketiduran😊* ')
}


handler.tags = ['main']
handler.command = /^(boton)$/i

handler.admin = true

export default handler