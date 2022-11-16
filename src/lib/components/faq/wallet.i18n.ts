export default {
	TITLE: {
		zh: `` /*Chinese*/,
		es: `` /*Spanish*/,
		en: `Wallet` /*English*/,
		hi: `` /*Hindi*/,
		ar: `` /*Arabic - Right-to-left*/,
		pt: `` /*Portuguese*/,
		bn: `` /*Bengal*/,
		ru: `` /*Russian*/,
		ja: `` /*Japanese*/,
		jv: `` /*Javanese*/,
		de: `` /*German*/,
		ko: `` /*Korean*/,
		fr: `` /*French*/,
		te: `` /*Telugu*/,
		mr: `` /*Marathi*/,
		tr: `` /*Turkish*/,
		ta: `` /*Tamil*/,
		vi: `` /*Vietnamese*/,
		ur: `` /*Urdu - Right-to-left*/,
		nl: `` /*Dutch*/,
		it: `` /*Italian*/,
		hr: `` /*Croatian*/
	},
	SUBTITLE: {
		zh: `` /*Chinese*/,
		es: `` /*Spanish*/,
		en: `Wallet related questions/issues.` /*English*/,
		hi: `` /*Hindi*/,
		ar: `` /*Arabic - Right-to-left*/,
		pt: `` /*Portuguese*/,
		bn: `` /*Bengal*/,
		ru: `` /*Russian*/,
		ja: `` /*Japanese*/,
		jv: `` /*Javanese*/,
		de: `` /*German*/,
		ko: `` /*Korean*/,
		fr: `` /*French*/,
		te: `` /*Telugu*/,
		mr: `` /*Marathi*/,
		tr: `` /*Turkish*/,
		ta: `` /*Tamil*/,
		vi: `` /*Vietnamese*/,
		ur: `` /*Urdu - Right-to-left*/,
		nl: `` /*Dutch*/,
		it: `` /*Italian*/,
		hr: `` /*Croatian*/
		},
		qa: {
		HOW_LONG_DOES_THE_WALLET_TAKE_TO_SYNC: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `HOW LONG DOES THE WALLET TAKE TO SYNC?` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `ウォレットの同期にはどのくらいの時間がかかりますか？` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		HOW_LONG_DOES_THE_WALLET_TAKE_TO_SYNC_ANSWER1: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `
			<p>
				The current bootstrap is around 2.0 GB. It can take a long time to download (
				pan>depending on your internet speed and available peers).
			</p>
			<p>
				Downloading the bootstrap is a good way to speed up your first syncing when you use the
				Blackcoin Legacy wallet. <br />
				You can find BLK Bootstrap at the bottom of the page (FAQ/OTHER/BOOTSTRAP).
			</p>
	` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `
				<p>現在のブートストラップは約2.0GBです。ダウンロードには長い時間を要する事があります（インターネットの速度と利用可能な条件によります。)</p>
				<p>ブートストラップをダウンロードすることは、Blackcoin Legacyウォレットを使用する際の最初の同期を早めるのに良い方法です。</p>
				<p>BLK Bootstrapは、ページの一番下（FAQ/OTHER/BOOTSTRAP）にあります。</p>` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		WHY_IS_WALLET_NOT_SYNCING: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `WHY IS THE WALLET NOT SYNCING?` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `ウォレットが同期されないのはなぜですか？` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		WHY_IS_WALLET_NOT_SYNCING_ANSWER1: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `
			<p>
				1. Make sure you have the <span>latest wallet version</span>.<br />
			</p>
			<p>
				2. Make sure your <span
					>Firewall or Anti Virus software do not block wallet connections</span
				>.<br />
			</p>
			<p>
				3. Make sure your <span>system's clock is accurate</span>.<br />
			</p>
			<p>
				4. <span>Coins take around 8 hours (~501 Blocks) to mature</span>.<br />
			</p>
			<p>Wallet will create his own peer circle. It takes time.</p>
			<p>wever you can help the wallet with giving it a list of nodes:</p>
			<p>
				To apply addnode, you have to find your blackcoin.conf (Legacy) or blackmore.conf
				(More). It should be here: <br />
			</p>
			<p>
				Windows: %APPDATA%\blackcoin\<br />
				or %APPDATA%\blackmore\<br />
				Linux: $HOME/.blackcoin/<br />
				or $HOME/.blackmore/<br />
				Mac OSX: $HOME/Library/Application Support/blackcoin/<br />
				or $HOME/Library/Application Support/blackmore/<br />
			</p>
			<p>
				Then go to https://chainz.cryptoid.info/blk/#!network<br />
				Click on "node list"<br />
				Copy the whole list to the end of the .conf<br />
				Start Blackcoin <br />
			</p>
			<p>
				* Sometimes OS hides file extensions so check if a .conf is not actually .conf.txt<br />
			</p>
			<p>
				If you still receiving problems, check your debug.log, look for errors and ask on
				Blackcoin Discord ttps://discord.com/invite/hjNUgWD)
			</p>
			<p>
				WHATEVER YOU DO, <span>BACKUP YOUR WALLET.DAT!</span>
			</p>` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `
				<p>1. ウォレットのバージョンが最新であることを確認してください</p>
				<p>2. ファイアウォールやアンチウィルスソフトがウォレットの接続をブロックしていないか確認してください。</p>
				<p>3. システムの時計が正確であることを確認してください。</p>
				<p>4. コインが成熟するには約8時間（～501ブロック）かかります。</p>
				<p>ウォレットは自分のピアサークルを作ります。それには時間がかかります。</p>
				<p>しかし、あなたはノードのリストを与えることでウォレットを助けることができます。</p>
				<p>addnodeを適用するには、blackcoin.conf (Legacy)またはblackmore.conf (More)を見つける必要があります。それはここにあるはずです。</p>
				<p>Windows: %APPDATA%\\blackcoin\\</p>
				<p>or %APPDATA%\\blackmore\\</p>
				<p>Linux： $HOME/.blackcoin/</p>
				<p>または $HOME/.blackmore/</p>
				<p>Mac OSX： $HOME/Library/Application Support/blackcoin/ (日本語)</p>
				<p>または $HOME/Library/Application Support/blackmore/ です。</p>
				<p>次に、https://chainz.cryptoid.info/blk/#！ネットワークにアクセスします。</p>
				<p>"ノードリスト "をクリックしてください。</p>
				<p>リスト全体を.confの最後にコピーします。</p>
				<p>ブラックコインの起動 </p>
				<p>* OSはファイルの拡張子を隠すことがあるので、.confが実際には.conf.txtではないことを確認してください。</p>
				<p>それでも問題が解決しない場合は、debug.logをチェックしてエラーを探し、Blackcoin Discordで質問してください https://discord.com/invite/hjNUgWD)</p>
				<p>何をするにしても、wallet.datをバックアップしてください。</p>` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		HOW_TO_SEND_BLACKCOIN: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `HOW TO SEND BLACKCOIN?` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `ブラックコインを送るには？` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		HOW_TO_SEND_BLACKCOIN_ANSWER1: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `
			<p>
				To send coins is very straight forward. <br />
				If you are sending these coins to a friend, exchange or business, then all you will need
				is their
				<span>Receive address</span> (known as a deposit address on exchanges).<br />
				If your wallet is encrypted, which hopefully it is, you will also need to have your
				<span>passphrase</span> (encryption phrase) ready as this is required every time you
				want to send coins out of your wallet. <br />
			</p>
			<p>
				<span>Pay To:</span> Enter the Blackcoin address of your friend/exchange or business.
				(These addresses will also be stored in your built-in address book, where you can label
				or re-label whenever you wish) <br />
			</p>
			<p>
				<span>Label:</span> This makes it easier for you to remember who the address belong to,
				so if you send to an exchange like say Bittrex, type in Bittrex exchange. <br />
			</p>
			<p>
				<span>Amount:</span> How much you want to send. <br />
			</p>
			<p>
				Please note that if you are sending coins to an address, make sure that you
				<span>copy and paste the address</span> in to the Pay To area instead of typing it in.
				<br />
				This will hopefully prevent you from entering an incorrect address.
			</p>` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `
				<p>コインを送る方法はとても簡単です。</p>
				<p>コインを友人、取引所、企業などに送る場合、必要なのは相手の受信アドレス（取引所では入金アドレスとして知られています）です。</p>
				<p>お使いのウォレットが暗号化されている場合は、パスフレーズ（暗号化フレーズ）も必要です。</p>
				<p>支払い先 友人や取引所、会社のBlackcoinアドレスを入力します。これらのアドレスは、内蔵のアドレス帳にも保存され、いつでもラベル付けや再ラベル付けができます）。</p>
				<p>ラベルを付ける。Bittrexなどの取引所に送る場合は、「Bittrex exchange」と入力してください。</p>
				<p>Amount（金額）。送付する金額。</p>
				<p>コインをアドレスに送る場合は、アドレスを入力するのではなく、コピーしてPay Toエリアに貼り付けると、誤ったアドレスを入力することを防ぐことができます。</p>
				<p>(コピーアンドペースト)</p>` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		HOW_TO_RECEIVE_BLACKCOINS: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `HOW TO RECEIVE BLACKCOINS?` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `ブラックコインを受け取るには？` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		HOW_TO_RECEIVE_BLACKCOINS_ANSWER1: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `
			<p>
				Like sending coins, receiving them is just as simple. <br />
				If you have just bought some BlackCoins from an exchange, or are being paid in BLK then you
				will need to have a Receive Address so that the coins can be sent straight to your wallet.
				<br /> By default you will only have one <span>Receive Address</span>, so just
				right-click on it and select <span>Copy Address</span>. This prevents from trying to
				manually type it out and making errors.
				<br />Now <span>give that address to whoever wishes to pay you (or exchange)</span>.
				<br />
			</p>
			<p>
				You dont have to use the same address to receive coins for every transaction as
				<span>creating a new address is very simple</span>. <br />
				Just <span>click New Address at the bottom and then label it whatever you wish</span> (eg.
				Donation from site) so you can view individual transaction made to you easier over time.
			</p>` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `
				<p>コインを送るのと同様に、コインを受け取るのも簡単です。</p>
				<p>BlackCoinsを取引所で購入した場合や、BLKで支払いを受けた場合は、コインを自分のウォレットに直接送信するための受信アドレスが必要になります。</p>
				<p>デフォルトでは、受信アドレスは1つしかありませんので、そのアドレスを右クリックして「アドレスをコピー」を選択してください。これで、手動で入力してエラーになるのを防ぐことができます。</p>
				<p>そのアドレスを、支払い（または交換）したい人に渡してください。</p>
				<p>新しいアドレスを作るのはとても簡単なので、取引のたびに同じアドレスを使ってコインを受け取る必要はありません。</p>
				<p>下部にある「新しいアドレス」をクリックして、好きなラベルを付けてください。（例：サイトからの寄付）そうすれば、個々の取引を簡単に確認することができます。</p>` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		HOW_TO_OPEN_YOUR_WALLET_FOR_STAKING: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `HOW TO OPEN YOUR WALLET FOR STAKING?` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `ステーキングのために財布を開くには？` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		HOW_TO_OPEN_YOUR_WALLET_FOR_STAKING_ANSWER1: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `
			<p>
				Wallet Settings > <span>Unlock Wallet</span>
			</p>` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `
				<p>Wallet Settings > Unlock Wallet</p>
				<p>ウォレット設定＞ウォレットのロック解除</p>` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		WHAT_IS_THE_MAX_AMOUNT_OF_NETWORK_CONNECTIONS: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `WHAT IS THE MAX AMOUNT OF NETWORK CONNECTIONS?` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `ネットワーク接続の最大数は？` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		WHAT_IS_THE_MAX_AMOUNT_OF_NETWORK_CONNECTIONS_ANSWER1: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `
			<p>
				The outbound connection is cap at <span>16 max</span>.<br />
				If you want more connections, you need to accept inbound connections. <br />
				The wallet listen on port 15714. Just check if that port is not blocked. Also, It takes time
				for other peers to discover your nodes and connect to it.
			</p>` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `
				<p>アウトバウンド接続の上限は最大16です。</p>
				<p>それ以上の接続数が必要な場合は、インバウンド接続を受け入れる必要があります。</p>
				<p>ウォレットはポート15714をリッスンします。そのポートがブロックされていないか確認してください。また、他のピアがあなたのノードを発見して接続するまでに時間がかかります。</p>` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		UPGRADING_WALLET: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `UPGRADING WALLET` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `ウォレットのアップグレード` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		UPGRADING_WALLET_ANSWER1: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `
			<p>
				Just <span>replace the old binary with the new one</span>. <br />
				Before upgrading, make sure that you have the lastest
				<span>backup of your wallet.dat file</span>.
			</p>` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `
				<p>古いバイナリを新しいバイナリに置き換えるだけです。</p>
				<p>アップグレードする前に、wallet.datファイルの最新のバックアップがあることを確認してください。</p>` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		CHANGING_WALLET_LOCATION: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `CHANGING WALLET LOCATION` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `ウォレットの位置変更` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		CHANGING_WALLET_LOCATION_ANSWER: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `
			<p>
				Create a <span>shortcut that runs blackcoin-qt.exe -datadir=NEW LOCATION</span>
			</p>` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `blackcoin-qt.exe -datadir=NEW LOCATION を実行するショートカットを作成します。` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		HOW_OFTEN_DO_I_NEED_TO_BACKUP_MY_WALLET: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `HOW OFTEN DO I NEED TO BACKUP MY WALLET?` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `どのくらいの頻度でウォレットをバックアップする必要がありますか？` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		HOW_OFTEN_DO_I_NEED_TO_BACKUP_MY_WALLET_ANSWER1: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `
			<p>
				<span>If you send coins from the wallet to other addresses</span>, then you should back
				it up, since sending can create a new change addresses. <br />
				If you are not doing anything other than staking and receiving coins to the same address,
				then you probably don't need to create additional backups.
			</p>` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `
				<p>ウォレットから他のアドレスにコインを送信する場合は、送信することで新たにアドレスが変更される可能性があるため、バックアップを取る必要があります。</p>
				<p>同じアドレスにステイクしてコインを受け取る以外のことをしていないのであれば、おそらく追加のバックアップを作成する必要はありません。</p>` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		HOW_TO_STOP_STAKING_TO_BE_ABLE_TO_SEND_COINS: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `HOW TO STOP STAKING TO BE ABLE TO SEND COINS?` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `コインを送れるようにするには、どのようにしてstakingを止めるのでしょうか？` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		HOW_TO_STOP_STAKING_TO_BE_ABLE_TO_SEND_COINS_ANSWER1: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `
			<p>
				Your balance which is <span>staking will be freed after 501 confirmations</span>. <br />
				You can track progress in the Transactions tab.
			</p>` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `5
				01回の確認を経て、ステークしていたお客様の残高が解放されます。</p>
				トランザクションタブで進捗状況を確認することができます。</p>` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		SENDING_BLACKCOINS_FROM_CERTAIN_ADDRESS: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `SENDING BLACKCOINS FROM CERTAIN ADDRESS` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `特定のアドレスからブラックコインを送金する` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		SENDING_BLACKCOINS_FROM_CERTAIN_ADDRESS_ANSWER1: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `
			<p>
				If you <span>generated few addresses in your wallet</span>, but you would like to
				<span>choose certain one</span>
				to send BlackCoins from: <br />
				Settings >> options >> display >> "check" display coin control features(experts only) >>
				apply;<br />
				Send >> inputs >> "check" the address you would like to send from. <br />
			</p>` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `
				<p>ウォレットにいくつかのアドレスを作成したが、BlackCoinsの送信先を特定のアドレスにしたい場合。</p>
				<p>設定」→「オプション」→「表示」→「コインコントロール機能の表示を確認」→「適用」。</p>
				<p>送信 >> 入力 >> "チェック" 送信したいアドレスを選択してください。</p>` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},	
		DOES_A_WEB_OR_MOBILE_WALLET_EXIST: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `DOES A WEB OR MOBILE WALLET EXIST?` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `ウェブやモバイルのウォレットは有りますか？` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
		DOES_A_WEB_OR_MOBILE_WALLET_EXIST_ANSWER1: {
			zh: `` /*Chinese*/,
			es: `` /*Spanish*/,
			en: `
			<p>
				Yes, <span>PayBLK</span> is easy-to-use, open-source, multiplatform (supporting 7 platforms),
				multisignature, secure blackcoin wallet platform for both individuals and companies.
			</p>
			<p>
				Web: <a href="https://payblk.blackcoin.io/" target="_blank norefer"
					>PayBLK.BlackCoin.io</a
				><br />
				Mobile:
				<a
					href="https://play.google.com/store/apps/details?id=com.obsidiancvt.payblk"
					target="_blank norefer">PayBLK on Google Play</a
				>
			</p>` /*English*/,
			hi: `` /*Hindi*/,
			ar: `` /*Arabic - Right-to-left*/,
			pt: `` /*Portuguese*/,
			bn: `` /*Bengal*/,
			ru: `` /*Russian*/,
			ja: `
				<p>はい、PayBLKは使いやすく、オープンソースで、マルチプラットフォーム（7つのプラットフォームをサポート）で、マルチシグネチャで、個人と企業の両方に安全なブラックコインウォレットプラットフォームです。</p>
				<p>ウェブでは PayBLK.BlackCoin.io</p>` /*Japanese*/,
			jv: `` /*Javanese*/,
			de: `` /*German*/,
			ko: `` /*Korean*/,
			fr: `` /*French*/,
			te: `` /*Telugu*/,
			mr: `` /*Marathi*/,
			tr: `` /*Turkish*/,
			ta: `` /*Tamil*/,
			vi: `` /*Vietnamese*/,
			ur: `` /*Urdu - Right-to-left*/,
			nl: `` /*Dutch*/,
			it: `` /*Italian*/,
			hr: `` /*Croatian*/
		},
	}
};
