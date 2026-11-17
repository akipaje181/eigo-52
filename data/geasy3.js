window.GEASY=Object.assign(window.GEASY||{},{
 27:{
  one:"メールは「宛名 → 用件 → くわしく → 結び」の順。用件は最初の2〜3行で言う。",
  image:"院の予約の電話と同じです。「あき鍼灸整骨院です。ご予約ですね」と、まず用件から入りますよね。英語のメールも、あいさつのすぐ後に「何のためのメールか」を書きます。",
  ja:"日本語のメールは季節のあいさつや前置きが長くなりがちです。英語は I am writing to 〜（〜のためにご連絡しました）で、すぐに目的を言います。結びも「よろしくお願いします」ではなく、I look forward to hearing from you.（お返事をお待ちしています）のように、相手にしてほしいことをはっきり書きます。",
  when:["初めての取引先にあいさつのメールを送るとき","インドの会社に自分の院を紹介するとき","問い合わせへの返事をていねいに書くとき"],
  steps:["①件名を名詞だけで短く書く（Partnership Inquiry など）","②Dear Mr. 名字, で宛名を書き、I hope this email finds you well. と書き出す","③I am writing to 〜 で目的を1文で言い、くわしい中身を続ける","④I look forward to hearing from you. で結び、Best regards, と名前を書く"],
  parts:[
   {en:"I am writing to introduce my clinic.", ja:"私の院をご紹介したく、ご連絡しました。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"am writing",r:"どうする",ja:"書いています"},{t:"to introduce",r:"なぜ",ja:"紹介するために"},{t:"my clinic.",r:"だれを／なにを",ja:"私の院を"}],
    point:"am writing は「今このメールを書いている」という意味。to ＋動詞で「何のために」を足しています。"},
   {en:"My name is Akihiro Iwata.", ja:"岩田章弘と申します。",
    chunks:[{t:"My name",r:"だれが／なにが",ja:"私の名前は"},{t:"is",r:"です・いる（be動詞）",ja:"です"},{t:"Akihiro Iwata.",r:"くわしく（説明の部分）",ja:"岩田章弘"}],
    point:"Nice to meet you. はメールでは使わず、My name is 〜. で名乗るだけで十分ていねいです。"},
   {en:"I look forward to hearing from you.", ja:"お返事をお待ちしております。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"look forward to",r:"どうする",ja:"楽しみに待つ"},{t:"hearing from you.",r:"だれを／なにを",ja:"あなたからの連絡を"}],
    point:"look forward to の後ろは hear ではなく hearing（〜すること）の形になります。"}
  ],
  quiz:[
   {q:"メールの目的を伝える書き出しは？　I am writing (　) introduce my clinic.", opts:["for","to","at"], a:1, why:"「〜するために」は to ＋動詞。I am writing to 〜 でメールの目的を伝えます。"},
   {q:"(　)に入るのは？　I look forward to (　) from you.", opts:["hear","heard","hearing"], a:2, why:"look forward to の to の後ろは「〜すること」の形（ing）になります。"},
   {q:"初めての相手への宛名として一番安全なのは？", opts:["Hi Raj!","Dear Mr. Sharma,","Hey Sharma,"], a:1, why:"初めての相手には Dear ＋ Mr./Ms. ＋名字 ＋カンマが基本です。"}
  ],
  terms:["不定詞","進行形","動名詞"]
 },
 28:{
  one:"お願いは「質問の形」と「would・could」を使うほど、ていねいになる。",
  image:"患者さんに「そこに寝て」と言うより「こちらに横になっていただけますか」と言うほうがやわらかいですよね。英語も、命令の形より「〜していただけますか？」と質問の形にすると、ぐっとていねいになります。",
  ja:"日本語は「〜してください」に「お」や「いただく」を足してていねいにします。英語は can を could に、will を would にする（少し過去の形にして、遠回しにする）ことでていねいさを出します。Please send 〜 は please があっても命令の形なので、目上の人には Could you please 〜? のほうが安心です。",
  when:["取引先に資料や見積もりをお願いするとき","締め切りまでに返事をもらいたいとき","初めての相手や目上の人に頼みごとをするとき"],
  steps:["①相手との距離を考えて、Can / Could / I would appreciate it if のどれを使うか決める","②Could you (please) ＋動詞 ＋もの？の順に並べる","③We need this to 〜 で理由を、by ＋曜日と日付で期限を足す","④Thank you in advance. で先にお礼を言う"],
  parts:[
   {en:"Could you please send me the price list?", ja:"価格表をお送りいただけますか？",
    chunks:[{t:"Could",r:"気持ち・助け（助動詞）",ja:"〜していただけますか"},{t:"you",r:"だれが／なにが",ja:"あなたが"},{t:"please send",r:"どうする",ja:"どうか送る"},{t:"me",r:"だれに",ja:"私に"},{t:"the price list?",r:"だれを／なにを",ja:"価格表を"}],
    point:"Could を文の先頭に出すと質問の形になり、命令よりやわらかいお願いになります。"},
   {en:"I would appreciate it if you could review the proposal.", ja:"提案書をご確認いただけますと幸いです。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"would",r:"気持ち・助け（助動詞）",ja:"（もし〜なら）〜だろう"},{t:"appreciate it",r:"どうする",ja:"ありがたく思う"},{t:"if",r:"つなぎ",ja:"もし"},{t:"you could review the proposal.",r:"くわしく（説明の部分）",ja:"あなたが提案書を確認してくださるなら"}],
    point:"「もし〜してくれたら、ありがたい」という遠回しな言い方で、一番ていねいな段のお願いになります。"},
   {en:"Could you let me know by Wednesday?", ja:"水曜日までにお知らせいただけますか？",
    chunks:[{t:"Could",r:"気持ち・助け（助動詞）",ja:"〜していただけますか"},{t:"you",r:"だれが／なにが",ja:"あなたが"},{t:"let me know",r:"どうする",ja:"私に知らせる"},{t:"by Wednesday?",r:"いつ",ja:"水曜日までに"}],
    point:"by は「〜までに（締め切り）」。until（〜までずっと）とまちがえないようにします。"}
  ],
  quiz:[
   {q:"一番ていねいなお願いは？", opts:["Send me the file.","Can you send me the file?","Could you please send me the file?"], a:2, why:"could は can を遠回しにした形。please も足すと、ビジネスで安心して使えるていねいさになります。"},
   {q:"(　)に入るのは？　Could you reply (　) Friday?（金曜日までに）", opts:["by","until","in"], a:0, why:"締め切りの「〜までに」は by。until は「〜までずっと続ける」です。"},
   {q:"(　)に入るのは？　I would appreciate it if you (　) check the price.", opts:["could","can","will"], a:0, why:"I would appreciate it if の後ろは you could 〜 と、こちらも遠回しの形にそろえます。"}
  ],
  terms:["助動詞","疑問文","接続詞","仮定法"]
 },
 29:{
  one:"会議は「お礼 → 確認 → 本題」で始め、「まとめ → 次にすること → お礼」で終わる。",
  image:"施術の始めに「今日はどこがつらいですか」と確かめ、終わりに「次は1週間後に来てください」と伝えますよね。オンライン会議も同じで、始めと終わりに決まった流れがあります。",
  ja:"日本語の会議は「お疲れさまです」で始まりますが、英語は Thank you for joining.（参加ありがとう）とお礼から入ります。終わりは「では、これで」ではなく、決まったこととこれからのこと（I will 〜）をはっきり言います。これからのことは will を使います。",
  when:["Zoom や Google Meet で打ち合わせを始めるとき","音声や画面がうまく届いているか確かめるとき","会議を締めて、次にすることを伝えるとき"],
  steps:["①Hi, everyone. Thank you for joining. とお礼から入る","②Can you hear me okay? で音声を確かめる","③Today, I would like to talk about 〜. で本題を言う","④So, to wrap up, 〜 でまとめ、I will 〜 で次にすることを言って Thank you for your time. で終える"],
  parts:[
   {en:"Thank you for joining today.", ja:"今日はご参加ありがとうございます。",
    chunks:[{t:"Thank you",r:"どうする",ja:"ありがとう"},{t:"for joining",r:"なぜ",ja:"参加してくれたことに"},{t:"today.",r:"いつ",ja:"今日"}],
    point:"for の後ろは joining（〜すること）の形。何へのお礼かを for で足します。"},
   {en:"Can you hear me okay?", ja:"私の声はちゃんと聞こえていますか？",
    chunks:[{t:"Can",r:"気持ち・助け（助動詞）",ja:"できますか"},{t:"you",r:"だれが／なにが",ja:"あなたは"},{t:"hear",r:"どうする",ja:"聞く"},{t:"me",r:"だれを／なにを",ja:"私（の声）を"},{t:"okay?",r:"どのように",ja:"ちゃんと"}],
    point:"音声の確認は仲間うちのことなので、can のままで大丈夫です。"},
   {en:"I will send you the minutes by tomorrow.", ja:"明日までに議事録をお送りします。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"will",r:"気持ち・助け（助動詞）",ja:"〜します（これから）"},{t:"send",r:"どうする",ja:"送る"},{t:"you",r:"だれに",ja:"あなたに"},{t:"the minutes",r:"だれを／なにを",ja:"議事録を"},{t:"by tomorrow.",r:"いつ",ja:"明日までに"}],
    point:"will は「これからやります」という約束。send ＋だれに＋なにを の順に並べます。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　Thank you for (　) today.", opts:["join","joining","joined"], a:1, why:"for の後ろに動詞を置くときは「〜すること」の ing の形にします。"},
   {q:"会議の終わりに「明日までに資料を送ります」と言うなら？", opts:["I send the file by tomorrow.","I will send the file by tomorrow.","I sent the file by tomorrow."], a:1, why:"これからすることの約束は will ＋動詞です。"},
   {q:"電話で名乗るときの自然な言い方は？", opts:["Hello, this is Akihiro Iwata.","Hello, I am Akihiro Iwata.","Hello, my name Akihiro Iwata."], a:0, why:"電話では I am 〜 ではなく this is 〜 で名乗るのが決まった形です。"}
  ],
  terms:["助動詞","未来","動名詞"]
 },
 30:{
  one:"意見は I think 〜 because 〜 の「意見＋理由」でセットにして言う。",
  image:"患者さんに「温めましょう」とだけ言うより、「血の流れがよくなるので温めましょう」と理由をつけるほうが納得してもらえます。英語の会議も、意見には必ず理由をつけます。",
  ja:"日本語は理由を先に言い、意見を最後に言うことが多いです。英語は先に意見（I think 〜）、あとから理由（because 〜）の順です。反対するときは、まず I see your point, but 〜 と相手を受け止めてから、but の後ろで自分の考えを言います。",
  when:["会議で自分の考えを伝えるとき","相手の提案にていねいに反対するとき","新しいやり方を提案するとき"],
  steps:["①I think ＋自分の意見（主語＋動詞のある文）を言う","②because ＋理由を足す","③反対なら I see your point, but 〜 で受け止めてから言う","④提案なら I suggest that we 〜 / What if we 〜? で出す"],
  parts:[
   {en:"I think we should start small because the market is new to us.", ja:"私たちにとって新しい市場なので、小さく始めるべきだと思います。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"think",r:"どうする",ja:"思う"},{t:"we should start small",r:"くわしく（説明の部分）",ja:"小さく始めるべきだと"},{t:"because the market is new to us.",r:"なぜ",ja:"市場が私たちにとって新しいので"}],
    point:"I think の後ろには、主語と動詞のある文（we should start）をそのまま続けます。"},
   {en:"I see your point, but the cost may be too high.", ja:"おっしゃることはわかりますが、費用が高すぎるかもしれません。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"see",r:"どうする",ja:"わかる"},{t:"your point,",r:"だれを／なにを",ja:"あなたの言いたいことを"},{t:"but",r:"つなぎ",ja:"でも"},{t:"the cost",r:"だれが／なにが",ja:"費用は"},{t:"may",r:"気持ち・助け（助動詞）",ja:"〜かもしれない"},{t:"be",r:"です・いる（be動詞）",ja:"である"},{t:"too high.",r:"どんな",ja:"高すぎる"}],
    point:"may（〜かもしれない）を入れると、言い切らずにやわらかく反対できます。"},
   {en:"I suggest that we focus on online services first.", ja:"まずはオンラインのサービスに力を入れることを提案します。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"suggest",r:"どうする",ja:"提案する"},{t:"that we focus on online services",r:"だれを／なにを",ja:"私たちがオンラインのサービスに力を入れることを"},{t:"first.",r:"いつ",ja:"まず"}],
    point:"suggest の後ろは that ＋主語＋動詞。I suggest you to 〜 とは言いません。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　I think we should wait, (　) the price is too high.", opts:["because","but","so"], a:0, why:"後ろが理由なので because（なぜなら）でつなぎます。"},
   {q:"ていねいに反対するときの言い方は？", opts:["No, you are wrong.","I see your point, but I think it is too early.","I disagree you."], a:1, why:"まず相手の意見を受け止め、but の後ろで自分の考えを言うとやわらかく伝わります。"},
   {q:"正しい提案の文は？", opts:["I suggest you to try it.","I suggest that we try it.","I suggest to we try it."], a:1, why:"suggest の後ろは that ＋主語＋動詞 の形です。"}
  ],
  terms:["接続詞","助動詞","主語"]
 },
 31:{
  one:"紹介は「いつ・どこで → 何を → 強み → これから」の順。動詞の形で時間を分ける。",
  image:"院の歩みを話すときも「2018年に開業して（昔）、今は鍼灸と整骨をしていて（今）、これから海外へ（未来）」と時間の順に話しますよね。英語は、この時間の順を動詞の形（時制）ではっきり分けます。",
  ja:"日本語は「開業しました」「しています」「したいです」と語尾で時間を分けます。英語は動詞の形を変えます。昔のことは started（過去形）、いつものことは specialize（現在形）、これからのことは are looking to 〜（〜しようとしている）です。小さい院でも謙遜しすぎず、Although 〜（〜だけれど）で強みにつなげます。",
  when:["オンライン商談で自分の院を紹介するとき","インドの取引先に事業の内容を説明するとき","これからやりたいことを伝えるとき"],
  steps:["①I started 〜 in 2018. / We are based in 〜. で、いつ・どこでを言う（過去形と現在形）","②We specialize in 〜. で何をしているかを言う","③Although we are small, 〜 で強みを言う","④Now, we are looking to 〜. でこれからを言う"],
  parts:[
   {en:"I started my clinic in Ozu, Ehime, in 2018.", ja:"2018年に愛媛県大洲市で院を開業しました。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"started",r:"どうする",ja:"始めた"},{t:"my clinic",r:"だれを／なにを",ja:"私の院を"},{t:"in Ozu, Ehime,",r:"どこで／どこに",ja:"愛媛県大洲市で"},{t:"in 2018.",r:"いつ",ja:"2018年に"}],
    point:"終わった昔のことなので started（過去形）。場所 → 時の順に並べます。"},
   {en:"We specialize in acupuncture and judo therapy.", ja:"私たちは鍼灸と柔道整復を専門にしています。",
    chunks:[{t:"We",r:"だれが／なにが",ja:"私たちは"},{t:"specialize in",r:"どうする",ja:"〜を専門にしている"},{t:"acupuncture and judo therapy.",r:"だれを／なにを",ja:"鍼灸と柔道整復を"}],
    point:"いつもしていることなので現在形。specialize in はセットで覚えます。"},
   {en:"Now, we are looking to expand into the Indian market.", ja:"今、インドの市場に広げようとしています。",
    chunks:[{t:"Now,",r:"いつ",ja:"今"},{t:"we",r:"だれが／なにが",ja:"私たちは"},{t:"are looking to expand",r:"どうする",ja:"広げようとしている"},{t:"into the Indian market.",r:"どこで／どこに",ja:"インドの市場へ"}],
    point:"are looking to 〜 は「〜しようと考えて動いている」。これからの話につなげる言い方です。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　I (　) my clinic in 2018.", opts:["start","started","am starting"], a:1, why:"2018年という終わった昔のことなので過去形 started です。"},
   {q:"(　)に入るのは？　We specialize (　) acupuncture.", opts:["at","on","in"], a:2, why:"「〜を専門にする」は specialize in 〜 とセットで使います。"},
   {q:"(　)に入るのは？　(　) we are a small clinic, we have four staff members who work hard.", opts:["Although","Because","So"], a:0, why:"「小さいけれど」と、後ろの強みにつなげるので Although（〜だけれど）です。"}
  ],
  terms:["過去形","現在形","進行形","接続詞"]
 },
 32:{
  one:"数字は3けたごとに区切って読む。by は「増えた分」、to は「いくつになったか」。",
  image:"施術料金のレジ打ちと同じで、まちがえるとお金のトラブルになります。英語の数字はカンマのところで thousand（千）、million（百万）と区切り、大事な数字は1つずつ言い直して確かめます。",
  ja:"日本語は「万」で区切りますが、英語は「千（thousand）」で区切ります。だから16万5千は「165 thousand」と読みます。また、increase by 15 percent は「15%増えた」、increase to 15 percent は「15%になった」で、小さな言葉ひとつで意味が変わります。",
  when:["見積もりや請求の金額を伝えるとき","支払いの割合や期日を決めるとき","聞いた数字が合っているか確かめるとき"],
  steps:["①数字をカンマで区切り、thousand・million を当てはめて読む","②増えた・減ったは by（どれだけ）と to（いくつに）を使い分ける","③日付は October 11 のように月を英語で書く","④大事な数字は one-five のように1つずつ言い直して確かめる"],
  parts:[
   {en:"The total is 165,000 yen, including tax.", ja:"合計は税込みで165,000円です。",
    chunks:[{t:"The total",r:"だれが／なにが",ja:"合計は"},{t:"is",r:"です・いる（be動詞）",ja:"です"},{t:"165,000 yen,",r:"どのくらい",ja:"165,000円"},{t:"including tax.",r:"くわしく（説明の部分）",ja:"税込みで"}],
    point:"165,000 は one hundred sixty-five thousand。カンマの左が「何千」かを表します。"},
   {en:"Could you pay 50 percent upfront?", ja:"50%を前払いでお願いできますか？",
    chunks:[{t:"Could",r:"気持ち・助け（助動詞）",ja:"〜していただけますか"},{t:"you",r:"だれが／なにが",ja:"あなたが"},{t:"pay",r:"どうする",ja:"支払う"},{t:"50 percent",r:"どのくらい",ja:"50%を"},{t:"upfront?",r:"いつ",ja:"前もって"}],
    point:"お金のお願いこそ Could you 〜? でていねいに言います。"},
   {en:"The invoice is due on November 30.", ja:"請求書の支払い期日は11月30日です。",
    chunks:[{t:"The invoice",r:"だれが／なにが",ja:"請求書は"},{t:"is",r:"です・いる（be動詞）",ja:"です"},{t:"due",r:"どんな",ja:"期日が来る"},{t:"on November 30.",r:"いつ",ja:"11月30日に"}],
    point:"日にちの前は on。11/30 と書かず November 30 と書くと、日と月をまちがえません。"}
  ],
  quiz:[
   {q:"「売上が10%増えた」は？　Sales increased (　) 10 percent.", opts:["to","by","on"], a:1, why:"どれだけ増えたか（増えた分）は by。to だと「10%になった」になります。"},
   {q:"30,000 の読み方は？", opts:["three thousand","thirty thousand","three hundred thousand"], a:1, why:"カンマの左が 30 なので thirty thousand（3万）です。"},
   {q:"(　)に入るのは？　Please pay the invoice (　) November 30.", opts:["in","at","on"], a:2, why:"日にちの前には on を使います。"}
  ],
  terms:["前置詞","複数形"]
 },
 33:{
  one:"日程は「候補を出す → 都合を聞く → 確定する」。聞くときは would でていねいに。",
  image:"院の予約で「火曜の10時か、木曜の3時はいかがですか」と候補を出すと、すぐ決まりますよね。英語の日程調整も、こちらから候補を2〜3個出すのが一番早い方法です。",
  ja:"日本語の「ご都合はいかがですか」にあたるのが Would 〜 work for you?（〜で大丈夫ですか）です。主語が「人」ではなく「火曜日（日にち）」になるのが日本語とちがうところです。インドとは時差が3時間半あるので、JST と IST の両方を書きます。",
  when:["インドの相手と会議の日時を決めるとき","決まった予定を変えてもらうとき","決まった日時をメールで確定するとき"],
  steps:["①Would any of the following times work for you? と書き、候補を2〜3個並べる","②時間には JST / IST の両方をつける","③都合は Would Tuesday work for you? / Are you available on 〜? で聞く","④決まったら This is to confirm 〜 と書き、カレンダー招待を送る"],
  parts:[
   {en:"Would Tuesday work for you?", ja:"火曜日はご都合いかがですか？",
    chunks:[{t:"Would",r:"気持ち・助け（助動詞）",ja:"〜でしょうか"},{t:"Tuesday",r:"だれが／なにが",ja:"火曜日は"},{t:"work",r:"どうする",ja:"うまくいく（都合が合う）"},{t:"for you?",r:"だれに",ja:"あなたにとって"}],
    point:"主語は Tuesday（日にち）。「火曜日はあなたにとってうまくいきますか」という考え方です。"},
   {en:"Are you available on Thursday morning?", ja:"木曜日の朝はご都合がつきますか？",
    chunks:[{t:"Are",r:"です・いる（be動詞）",ja:"ですか"},{t:"you",r:"だれが／なにが",ja:"あなたは"},{t:"available",r:"どんな",ja:"空いている"},{t:"on Thursday morning?",r:"いつ",ja:"木曜日の朝に"}],
    point:"Are you free? よりも available のほうがビジネス向きのていねいな言い方です。"},
   {en:"I have sent you a calendar invite.", ja:"カレンダーの招待をお送りしました。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"have sent",r:"どうする",ja:"送ったところ（もう送ってある）"},{t:"you",r:"だれに",ja:"あなたに"},{t:"a calendar invite.",r:"だれを／なにを",ja:"カレンダーの招待を"}],
    point:"have sent は「送って、今もう届いている状態」。今の状況を伝える形（現在完了）です。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　Would Friday (　) for you?", opts:["work","works","working"], a:0, why:"would の後ろの動詞は、もとの形（work）のままです。"},
   {q:"(　)に入るのは？　Are you available (　) Monday?", opts:["in","on","at"], a:1, why:"曜日の前には on を使います。"},
   {q:"「もう招待を送りました（今届いています）」に合うのは？", opts:["I send you an invite.","I have sent you an invite.","I will send you an invite."], a:1, why:"終わったことが今につながっているときは have ＋過去分詞（have sent）です。"}
  ],
  terms:["助動詞","現在完了","前置詞"]
 },
 34:{
  one:"謝罪は「何についてのお詫びか」を具体的に言い、すぐに原因と対応を続ける。",
  image:"施術の予約を取りちがえたとき、「すみません」をくり返すより「予約の登録ミスでした。今日は別の時間でお取りします」と言うほうが安心してもらえます。英語の謝罪も、謝ったらすぐ「原因と対応」です。",
  ja:"日本語は何度も「申し訳ありません」と言いますが、英語の謝罪は1〜2回で十分です。そのかわり I apologize for ＋具体的な中身 で、何について謝るかをはっきり言います。原因は was caused by 〜（〜によって起きた）と、人ではなく「問題」を主語にすると、相手を責めずにすみます。",
  when:["納期が遅れたことをお詫びするとき","システムの不具合を説明するとき","苦情を受けて、対応を伝えるとき"],
  steps:["①I apologize for ＋何について を言う","②This was caused by 〜. で原因を言う","③We will 〜. で対応を、To prevent this from happening again, 〜 で再発防止を言う","④Thank you for your patience. でお礼を言って締める"],
  parts:[
   {en:"I sincerely apologize for the delay.", ja:"遅れてしまい、心よりお詫び申し上げます。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"sincerely",r:"どのように",ja:"心から"},{t:"apologize",r:"どうする",ja:"お詫びする"},{t:"for the delay.",r:"なぜ",ja:"遅れについて"}],
    point:"apologize for の後ろに、何についてのお詫びかを具体的に入れます。"},
   {en:"The problem was caused by an error in the booking system.", ja:"問題は予約システムのエラーによって起きました。",
    chunks:[{t:"The problem",r:"だれが／なにが",ja:"問題は"},{t:"was caused",r:"どうする",ja:"引き起こされた"},{t:"by an error",r:"なぜ",ja:"エラーによって"},{t:"in the booking system.",r:"どこで／どこに",ja:"予約システムの中の"}],
    point:"was ＋ caused で「〜された」。問題を主語にして、だれかを責めない言い方です（受け身）。"},
   {en:"It seems there was a misunderstanding.", ja:"どうやら行きちがいがあったようです。",
    chunks:[{t:"It seems",r:"くわしく（説明の部分）",ja:"どうやら〜のようだ"},{t:"there was",r:"です・いる（be動詞）",ja:"あった"},{t:"a misunderstanding.",r:"だれが／なにが",ja:"行きちがいが"}],
    point:"You made a mistake. と言わず、It seems 〜 で「状況」の話にすると、関係を守れます。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　I apologize (　) the delay.", opts:["to","for","about"], a:1, why:"「〜についてお詫びする」は apologize for 〜 です。"},
   {q:"(　)に入るのは？　The error was (　) by a system problem.", opts:["cause","causing","caused"], a:2, why:"「〜によって引き起こされた」は was ＋ caused（受け身）の形です。"},
   {q:"相手を責めない言い方は？", opts:["You made a mistake.","It seems there was a misunderstanding.","It is your fault."], a:1, why:"人ではなく状況を主語にすると、角が立たずに事実を伝えられます。"}
  ],
  terms:["受動態","副詞","過去分詞"]
 },
 35:{
  one:"説明は「特徴 → so（だから）→ お客様の良さ」。言い切らないときは may を使う。",
  image:"「この枕は低めです」だけでは伝わりません。「低めなので、首がらくになります」と良さまで言うと、患者さんは自分ごとになります。英語でも、特徴を言ったら so や which means で良さにつなげます。",
  ja:"日本語は「〜なので、〜です」と、つなぎが文の途中に自然に入ります。英語は so（だから）や which means（つまり）を、特徴と良さの間にはっきり置きます。健康の話は「治ります」と言い切らず、may help 〜（〜の助けになるかもしれない）とやわらかく言うのが決まりです。",
  when:["施術の内容を海外の方に説明するとき","Web制作のサービスを紹介するとき","だれに向いているサービスかを伝えるとき"],
  steps:["①特徴を1文で言う（The website is mobile-friendly.）","②so / which means でお客様の良さにつなげる","③健康のことは may help 〜 で言い切らずに言う","④This is ideal for 〜. でだれに向いているかを言う"],
  parts:[
   {en:"The website is mobile-friendly, so your patients can book easily.", ja:"サイトはスマホに対応しているので、患者さんがかんたんに予約できます。",
    chunks:[{t:"The website",r:"だれが／なにが",ja:"そのサイトは"},{t:"is",r:"です・いる（be動詞）",ja:"です"},{t:"mobile-friendly,",r:"どんな",ja:"スマホで見やすい"},{t:"so",r:"つなぎ",ja:"だから"},{t:"your patients",r:"だれが／なにが",ja:"あなたの患者さんは"},{t:"can",r:"気持ち・助け（助動詞）",ja:"できる"},{t:"book",r:"どうする",ja:"予約する"},{t:"easily.",r:"どのように",ja:"かんたんに"}],
    point:"so の前が特徴、後ろがお客様の良さ。2つの文を so でつないでいます。"},
   {en:"Acupuncture may help reduce stiff shoulders.", ja:"鍼は肩こりをやわらげる助けになることがあります。",
    chunks:[{t:"Acupuncture",r:"だれが／なにが",ja:"鍼は"},{t:"may",r:"気持ち・助け（助動詞）",ja:"〜かもしれない"},{t:"help reduce",r:"どうする",ja:"減らす助けになる"},{t:"stiff shoulders.",r:"だれを／なにを",ja:"肩こりを"}],
    point:"cure（治す）と言い切らず、may help で「助けになることがある」とやわらかく言います。"},
   {en:"This package is ideal for clinics that are opening soon.", ja:"このプランは、もうすぐ開業する院にぴったりです。",
    chunks:[{t:"This package",r:"だれが／なにが",ja:"このプランは"},{t:"is",r:"です・いる（be動詞）",ja:"です"},{t:"ideal",r:"どんな",ja:"ぴったり"},{t:"for clinics",r:"だれに",ja:"院にとって"},{t:"that are opening soon.",r:"くわしく（説明の部分）",ja:"もうすぐ開業する（院）"}],
    point:"that 〜 が前の clinics を「どんな院か」と後ろからくわしく説明しています。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　The site is easy to use, (　) patients can book quickly.", opts:["so","but","because"], a:0, why:"前が特徴、後ろがその結果（良さ）なので so（だから）でつなぎます。"},
   {q:"健康サービスの説明として適切なのは？", opts:["Acupuncture cures back pain.","Acupuncture may help reduce back pain.","Acupuncture always stops back pain."], a:1, why:"健康のことは言い切らず、may help 〜 でやわらかく言うのが安全です。"},
   {q:"(　)に入るのは？　This plan is ideal for clinics (　) are opening soon.", opts:["who","that","what"], a:1, why:"clinics（もの）をくわしく説明するので that を使います。"}
  ],
  terms:["接続詞","助動詞","関係代名詞"]
 },
 36:{
  one:"わからないときは、どこがわからないかを言って聞き返し、言いかえて確かめる。",
  image:"問診で「ここが痛い」と言われたら、「この右の腰のあたりですね？」と指さして確かめますよね。英語でも、聞きのがした部分を指して聞き返し、自分の言葉で言いかえて確認します。",
  ja:"日本語では、わからなくても「はい」とうなずいてしまいがちです。英語では What? だけだとぶっきらぼうなので、Sorry, I did not catch that.（聞き取れませんでした）や Did you say A or B? と、聞きたい部分をはっきりさせます。確かめるときは文の最後に , right? をつけるだけで質問になります。",
  when:["相手の英語が聞き取れなかったとき","日付や金額など大事なことを確かめるとき","会議の最後に、決まったことを書いてもらうとき"],
  steps:["①Sorry, I did not catch that. で聞きのがしたことを伝える","②Did you say A or B? で、聞きたい部分だけを聞く","③Just to confirm, 〜, right? と言いかえて確かめる","④Could you put that in writing? で文字にしてもらう"],
  parts:[
   {en:"Sorry, I did not catch that.", ja:"すみません、聞き取れませんでした。",
    chunks:[{t:"Sorry,",r:"つなぎ",ja:"すみません"},{t:"I",r:"だれが／なにが",ja:"私は"},{t:"did not catch",r:"どうする",ja:"つかまえられなかった（聞き取れなかった）"},{t:"that.",r:"だれを／なにを",ja:"それを"}],
    point:"catch は「ボールをつかむ」の catch。相手の言葉をつかめなかった、という言い方です。"},
   {en:"Did you say Tuesday or Thursday?", ja:"火曜日とおっしゃいましたか、木曜日ですか？",
    chunks:[{t:"Did",r:"気持ち・助け（助動詞）",ja:"〜しましたか（質問の合図）"},{t:"you",r:"だれが／なにが",ja:"あなたは"},{t:"say",r:"どうする",ja:"言う"},{t:"Tuesday or Thursday?",r:"だれを／なにを",ja:"火曜日か木曜日かを"}],
    point:"Did を先頭に出すと過去の質問になり、後ろの say はもとの形のままです。"},
   {en:"Just to confirm, the deadline is November 15, right?", ja:"念のため確認ですが、締め切りは11月15日ですよね？",
    chunks:[{t:"Just to confirm,",r:"なぜ",ja:"念のため確認すると"},{t:"the deadline",r:"だれが／なにが",ja:"締め切りは"},{t:"is",r:"です・いる（be動詞）",ja:"です"},{t:"November 15,",r:"いつ",ja:"11月15日"},{t:"right?",r:"くわしく（説明の部分）",ja:"ですよね？"}],
    point:"ふつうの文の最後に , right? をつけるだけで「〜ですよね？」と確かめられます。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　Did you (　) Tuesday?", opts:["said","say","says"], a:1, why:"Did で質問するときは、後ろの動詞はもとの形（say）にします。"},
   {q:"聞き取れなかったときの、ていねいな言い方は？", opts:["What?","Sorry, I did not catch that.","Again."], a:1, why:"何が起きたかを伝えると、相手も気持ちよく言い直してくれます。"},
   {q:"「締め切りは金曜日ですよね？」と確かめるなら？", opts:["The deadline is Friday, right?","Is the deadline Friday, right?","The deadline Friday?"], a:0, why:"ふつうの文の最後に , right? をつけるのが一番かんたんな確かめ方です。"}
  ],
  terms:["疑問文","否定文","過去形"]
 },
 37:{
  one:"雑談は「聞く → 答えてひと言足す → How about you? で返す」のくり返し。",
  image:"施術中の会話と同じです。「週末どうでした？」「家族でゆっくりしました。〇〇さんは？」と、答えにひと言足して聞き返すと、会話が続きます。英語の雑談も、このキャッチボールが基本です。",
  ja:"日本語は Yes / No のような短い返事でも失礼になりにくいですが、英語で Yes. だけだと「話したくない」と受け取られることがあります。答えのあとにひと言（I relaxed with my family. など）を足し、How about you? で相手に返します。過去のことを聞くときは How was 〜? と was を使います。",
  when:["会議の前に、相手と打ちとけたいとき","インドの取引先の家族やお祭りの話をするとき","雑談から本題に移るとき"],
  steps:["①How was your weekend? など、短い質問をする","②It was great. のあとに、ひと言足す","③That sounds lovely! など反応のひと言を返す","④How about you? で相手に返し、By the way, 〜 で本題へ移る"],
  parts:[
   {en:"How was your weekend?", ja:"週末はいかがでしたか？",
    chunks:[{t:"How",r:"たずねる（疑問詞）",ja:"どうだった"},{t:"was",r:"です・いる（be動詞）",ja:"でしたか"},{t:"your weekend?",r:"だれが／なにが",ja:"あなたの週末は"}],
    point:"終わった週末のことなので was。How を先頭に置いて「どうでしたか」と聞きます。"},
   {en:"It was great. I relaxed with my family.", ja:"よかったです。家族とゆっくりしました。",
    chunks:[{t:"It",r:"だれが／なにが",ja:"それは"},{t:"was",r:"です・いる（be動詞）",ja:"でした"},{t:"great.",r:"どんな",ja:"よかった"},{t:"I",r:"だれが／なにが",ja:"私は"},{t:"relaxed",r:"どうする",ja:"くつろいだ"},{t:"with my family.",r:"くわしく（説明の部分）",ja:"家族と"}],
    point:"It was great. で終わらず、もう1文足すのが会話を続けるコツです。"},
   {en:"How is the weather in Bengaluru?", ja:"ベンガルールの天気はどうですか？",
    chunks:[{t:"How",r:"たずねる（疑問詞）",ja:"どう"},{t:"is",r:"です・いる（be動詞）",ja:"ですか"},{t:"the weather",r:"だれが／なにが",ja:"天気は"},{t:"in Bengaluru?",r:"どこで／どこに",ja:"ベンガルールの"}],
    point:"今のことなので is。相手の町の話を聞くと、会話が温まります。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　How (　) Diwali with your family?（もう終わったお祭り）", opts:["is","was","does"], a:1, why:"終わったことの感想を聞くので、過去の形 was を使います。"},
   {q:"相手に話をふり返す言い方は？", opts:["How about you?","What you?","And you are?"], a:0, why:"How about you? は「あなたはどうですか？」と話をふり返す決まった言い方です。"},
   {q:"雑談から本題に移るときのつなぎは？", opts:["By the way,","Because,","For example,"], a:0, why:"By the way（ところで）で、話題を切りかえられます。"}
  ],
  terms:["疑問詞","be動詞","過去形"]
 },
 38:{
  one:"チャットは短く、1回に用件1つ。Could you と Thanks! でていねいに。",
  image:"スタッフへの LINE は「明日の予約表、送ってもらえる？ありがとう！」くらいの短さですよね。WhatsApp のビジネス連絡も同じで、短くてもひと言のていねいさがあれば失礼になりません。",
  ja:"日本語のチャットでも「お疲れさまです」から始めがちですが、英語のチャットは Hi Raj, ＋用件 ＋ Thanks! で十分です。主語や be動詞を省くこともあります（Noted. = 確認しました）。ただし、お願いは命令の形にせず Could you 〜? を残します。",
  when:["WhatsApp で取引先に短く連絡するとき","資料を受け取ったことを知らせるとき","返事が来ないときに、やさしく催促するとき"],
  steps:["①Hi ＋名前, で始める","②用件を1つだけ書く（1メッセージ1用件）","③お願いは Could you 〜 when you get a chance? にする","④Thanks! で締める。略語は相手が使い始めてから合わせる"],
  parts:[
   {en:"Could you send the file when you get a chance?", ja:"お手すきのときにファイルを送ってもらえますか？",
    chunks:[{t:"Could",r:"気持ち・助け（助動詞）",ja:"〜してもらえますか"},{t:"you",r:"だれが／なにが",ja:"あなたが"},{t:"send",r:"どうする",ja:"送る"},{t:"the file",r:"だれを／なにを",ja:"ファイルを"},{t:"when you get a chance?",r:"いつ",ja:"お手すきのときに"}],
    point:"when you get a chance をつけると「急がなくていいよ」という気づかいが伝わります。"},
   {en:"I will send the updated file by EOD.", ja:"今日中に更新したファイルを送ります。",
    chunks:[{t:"I",r:"だれが／なにが",ja:"私は"},{t:"will",r:"気持ち・助け（助動詞）",ja:"〜します"},{t:"send",r:"どうする",ja:"送る"},{t:"the updated file",r:"だれを／なにを",ja:"更新したファイルを"},{t:"by EOD.",r:"いつ",ja:"今日の終業までに"}],
    point:"EOD は end of day（今日の終わり）。チャットでよく使う略語です。"},
   {en:"Did you get my email about the design?", ja:"デザインについてのメールは届きましたか？",
    chunks:[{t:"Did",r:"気持ち・助け（助動詞）",ja:"〜しましたか"},{t:"you",r:"だれが／なにが",ja:"あなたは"},{t:"get",r:"どうする",ja:"受け取る"},{t:"my email",r:"だれを／なにを",ja:"私のメールを"},{t:"about the design?",r:"くわしく（説明の部分）",ja:"デザインについての"}],
    point:"「返事がまだ？」と責めず、「届きましたか？」と聞くと、やさしい催促になります。"}
  ],
  quiz:[
   {q:"チャットでのやわらかいお願いは？", opts:["Send the file.","Could you send the file when you get a chance?","You send file."], a:1, why:"短いチャットでも Could you 〜? を残すと、ていねいさが伝わります。"},
   {q:"「ご参考まで」を表す略語は？", opts:["ASAP","FYI","ETA"], a:1, why:"FYI は for your information（ご参考まで）です。"},
   {q:"(　)に入るのは？　I (　) send it by EOD.（これから送ります）", opts:["will","did","was"], a:0, why:"これからすることの約束は will ＋動詞です。"}
  ],
  terms:["助動詞","未来","疑問文"]
 },
 39:{
  one:"商談は「目的→提案→条件→合意→次の一歩」。条件は could と if で。",
  image:"自費の施術コースを決めるときも「目的 → 内容 → 回数と料金 → 決定 → 次の予約」と進みますよね。英語の商談も同じ流れで、とくに条件の話では「もし〜なら、〜できます」という形が大事になります。",
  ja:"日本語では「持ち帰って検討します」と、あいまいに終わることがあります。英語は could ＋ if（もし〜なら、〜できます）で条件をはっきり出し、合意したことは数を先に言って（three things）確認します。最後は The next step is to 〜 で、次にすることを決めて終わります。",
  when:["インドの取引先と提携の条件を話し合うとき","値段や期間について代わりの案を出すとき","合意したことと次の一歩を確かめるとき"],
  steps:["①The purpose of today's meeting is to 〜. で目的を言う","②We could 〜 if 〜. / Would you be open to 〜? で条件や代わりの案を出す","③So we have agreed on three things: 〜 で合意を確かめる","④The next step is to 〜. で次の一歩を決めて締める"],
  parts:[
   {en:"The purpose of today's meeting is to discuss a pilot project.", ja:"今日の会議の目的は、試験的なプロジェクトについて話し合うことです。",
    chunks:[{t:"The purpose",r:"だれが／なにが",ja:"目的は"},{t:"of today's meeting",r:"くわしく（説明の部分）",ja:"今日の会議の"},{t:"is",r:"です・いる（be動詞）",ja:"です"},{t:"to discuss a pilot project.",r:"くわしく（説明の部分）",ja:"試験的なプロジェクトについて話し合うこと"}],
    point:"to ＋動詞で「〜すること」。会議の最初に目的をはっきり言う決まった形です。"},
   {en:"We could offer a lower price if you sign a one-year contract.", ja:"1年契約をしていただけるなら、もっと安い価格をご提示できます。",
    chunks:[{t:"We",r:"だれが／なにが",ja:"私たちは"},{t:"could",r:"気持ち・助け（助動詞）",ja:"〜できるだろう"},{t:"offer",r:"どうする",ja:"提示する"},{t:"a lower price",r:"だれを／なにを",ja:"より安い価格を"},{t:"if",r:"つなぎ",ja:"もし"},{t:"you sign a one-year contract.",r:"くわしく（説明の部分）",ja:"1年契約をしてくれるなら"}],
    point:"could で「できるかもしれない」とやわらかく言い、if で条件をつけています。"},
   {en:"The next step is to send you a draft of the contract.", ja:"次は、契約書の案をお送りすることです。",
    chunks:[{t:"The next step",r:"だれが／なにが",ja:"次の一歩は"},{t:"is",r:"です・いる（be動詞）",ja:"です"},{t:"to send you a draft of the contract.",r:"くわしく（説明の部分）",ja:"契約書の案をあなたに送ること"}],
    point:"最後に次にすることを言葉にすると、商談があいまいに終わりません。"}
  ],
  quiz:[
   {q:"(　)に入るのは？　We could lower the price (　) you sign a one-year contract.", opts:["if","but","so"], a:0, why:"「もし〜なら」と条件をつけるので if を使います。"},
   {q:"代わりの案をていねいに聞く言い方は？", opts:["You must try six months.","Would you be open to a six-month trial?","Six months, okay?"], a:1, why:"Would you be open to 〜? は「〜はご検討いただけますか」というていねいな聞き方です。"},
   {q:"(　)に入るのは？　The purpose of this meeting is (　) discuss the price.", opts:["for","to","at"], a:1, why:"「〜すること」は to ＋動詞。目的を言う決まった形です。"}
  ],
  terms:["助動詞","接続詞","不定詞","仮定法"]
 }
});
