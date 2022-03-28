case 'groupmenu':
case 'grupmenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Group Menu ⌟* 
• ${prefix}welcome <enable/disable>
• ${prefix}antilink <enable/disable>
• ${prefix}group <enable/disable>
• ${prefix}simi <enable/disable>
• ${prefix}kick <@user>
• ${prefix}kickall
• ${prefix}hedsot <@user>
• ${prefix}reportbug
• ${prefix}request
• ${prefix}here
• ${prefix}setdesk
• ${prefix}setnamegc
• ${prefix}setppgrup
• ${prefix}promote
• ${prefix}demote
• ${prefix}promoteall
• ${prefix}demoteall
• ${prefix}wame
• ${prefix}notif
• ${prefix}listadmin
• ${prefix}listonline
• ${prefix}linkgrup`)
break

case 'ownermenu':
if (!isRegist) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*⌜ Owner Menu ⌟* 
• ${prefix}broadcast <text>
• ${prefix}broadcast2 <text>
• ${prefix}broadcastvideo <text>
• ${prefix}bcvideo <text>
• ${prefix}bc <text>
• ${prefix}bc2 <text>
• ${prefix}bc3 <text>
• ${prefix}bc4 <text>
• ${prefix}bc5 <text>
• ${prefix}delete <reply message>
• ${prefix}ban <target>
• ${prefix}unban <target>
• ${prefix}block <user>
• ${prefix}unblock <user>
• ${prefix}settppbot <image>
• ${prefix}leaveall (keluar semua grup)
• ${prefix}join <link grup>
• ${prefix}join2 <link grup>
• ${prefix}public
• ${prefix}self
• ${prefix}clearall
• ${prefix}restart
• ${prefix}addcmd
• ${prefix}delcmd
• ${prefix}listcmd
• ${prefix}exif`)