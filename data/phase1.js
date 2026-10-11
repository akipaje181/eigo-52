// 第1期（Week 1〜13）中学英語の総復習 — CEFR A1→A2 / 英検3級〜準2級 目安
window.WEEKS = (window.WEEKS || []).concat([
  // ===== Week 1 =====
  {
    week: 1,
    title: "be動詞で自己紹介",
    scene: "初対面のあいさつ",
    cefr: "A1",
    goal: "自分の名前・仕事・出身を英語で言える。",
    grammar: {
      title: "be動詞 am / is / are",
      points: [
        "be動詞は「〜です」「〜にいます」を表す、英語でいちばん基本の動詞です。主語が I なら am、he / she / it や1人・1つのものなら is、you や複数なら are を使います。",
        "日本人がよく間違えるのが、I am work. のように be動詞と一般動詞を並べてしまう形です。「働きます」は I work. で、be動詞はいりません。be動詞は「イコール」や「状態」を言うときに使う、と覚えてください。",
        "会話では I am → I'm、you are → you're、he is → he's のように短くするのがふつうです。最初はゆっくり I am と言って大丈夫ですが、聞き取りでは短い形に慣れておきましょう。",
        "職業の前には a / an がつきます。母音（ア・イ・ウ・エ・オの音）で始まる語には an を使うので、an acupuncturist、an owner となります。",
        "否定は be動詞のあとに not を置き（I'm not a doctor.）、疑問は be動詞を主語の前に出します（Are you from India?）。答えは Yes, I am. / No, I'm not. です。"
      ],
      examples: [
        { en: "I am a therapist.", ja: "私は施術者です。" },
        { en: "I'm from Yokohama, Japan.", ja: "私は日本の横浜出身です。" },
        { en: "This is my clinic.", ja: "これが私の院です。" },
        { en: "Raj is my business partner.", ja: "ラージさんは私のビジネスパートナーです。" },
        { en: "We are busy today.", ja: "私たちは今日忙しいです。" },
        { en: "My clinic is in Ehime.", ja: "私の院は愛媛にあります。" }
      ],
      tip: "「I＝am、You＝are、それ以外の1人・1つ＝is、2つ以上＝are」の4つだけ覚えれば十分です。迷ったら主語を指さして確認しましょう。"
    },
    vocab: [
      { en: "therapist", ja: "施術者、セラピスト", ex: "I am a therapist in Ehime.", exJa: "私は愛媛の施術者です。" },
      { en: "acupuncturist", ja: "鍼灸師", ex: "I am an acupuncturist.", exJa: "私は鍼灸師です。" },
      { en: "clinic", ja: "院、診療所", ex: "My clinic is near the station.", exJa: "私の院は駅の近くにあります。" },
      { en: "owner", ja: "経営者、オーナー", ex: "I am the owner of this clinic.", exJa: "私はこの院の経営者です。" },
      { en: "name", ja: "名前", ex: "My name is Akihiro Iwata.", exJa: "私の名前は岩田章弘です。" },
      { en: "country", ja: "国", ex: "India is a big country.", exJa: "インドは大きな国です。" },
      { en: "Japanese", ja: "日本人の、日本語", ex: "I am Japanese.", exJa: "私は日本人です。" },
      { en: "partner", ja: "パートナー、取引相手", ex: "Raj is my partner in India.", exJa: "ラージさんはインドのパートナーです。" },
      { en: "business", ja: "事業、仕事", ex: "My business is small but busy.", exJa: "私の事業は小さいですが忙しいです。" },
      { en: "company", ja: "会社", ex: "Priya's company is in Delhi.", exJa: "プリヤさんの会社はデリーにあります。" },
      { en: "nice", ja: "素敵な、よい", ex: "Nice to meet you.", exJa: "はじめまして。" },
      { en: "glad", ja: "うれしい", ex: "I'm glad to meet you.", exJa: "お会いできてうれしいです。" },
      { en: "city", ja: "市、都市", ex: "Yokohama is a big port city.", exJa: "横浜は大きな港町です。" },
      { en: "busy", ja: "忙しい", ex: "Mondays are always busy.", exJa: "月曜日はいつも忙しいです。" },
      { en: "ready", ja: "準備ができた", ex: "Are you ready?", exJa: "準備はいいですか。" },
      { en: "new", ja: "新しい", ex: "This is my new website.", exJa: "これは私の新しいホームページです。" },
      { en: "friend", ja: "友だち、友人", ex: "Mr. Sharma is a good friend.", exJa: "シャルマさんはよい友人です。" },
      { en: "family", ja: "家族", ex: "My family is very important to me.", exJa: "家族は私にとってとても大切です。" },
      { en: "welcome", ja: "ようこそ、歓迎する", ex: "Welcome to my clinic.", exJa: "私の院へようこそ。" },
      { en: "manager", ja: "責任者、マネージャー", ex: "Priya is the sales manager.", exJa: "プリヤさんは営業責任者です。" }
    ],
    sentences: [
      { ja: "私は日本人です。", en: "I am Japanese." },
      { ja: "私は鍼灸師です。", en: "I am an acupuncturist." },
      { ja: "私の名前は岩田章弘です。", en: "My name is Akihiro Iwata." },
      { ja: "私は横浜出身です。", en: "I am from Yokohama." },
      { ja: "これは私の院です。", en: "This is my clinic." },
      { ja: "ラージさんは私のビジネスパートナーです。", en: "Raj is my business partner." },
      { ja: "私たちは今日とても忙しいです。", en: "We are very busy today." },
      { ja: "あなたはインド出身ですか。", en: "Are you from India?" },
      { ja: "私の院は駅の近くにあります。", en: "My clinic is near the station." },
      { ja: "私は院の経営者で、ウェブデザイナーでもあります。", en: "I am the owner of a clinic, and I am also a web designer." }
    ],
    dialogue: {
      title: "初めてのオンライン会議",
      lines: [
        { s: "A", name: "Akihiro", en: "Hello. My name is Akihiro Iwata.", ja: "こんにちは。岩田章弘です。" },
        { s: "B", name: "Raj", en: "Hi, Akihiro. I'm Raj Kumar. Nice to meet you.", ja: "こんにちは、章弘さん。ラージ・クマールです。はじめまして。" },
        { s: "A", name: "Akihiro", en: "Nice to meet you, too. I'm from Yokohama, Japan.", ja: "こちらこそはじめまして。日本の横浜出身です。" },
        { s: "B", name: "Raj", en: "Great. I'm from Bangalore. Are you a doctor?", ja: "いいですね。私はバンガロール出身です。あなたはお医者さんですか。" },
        { s: "A", name: "Akihiro", en: "No, I'm not. I'm an acupuncturist. I'm the owner of a small clinic.", ja: "いいえ、違います。鍼灸師です。小さな院の経営者です。" },
        { s: "B", name: "Raj", en: "That's interesting! Is your clinic busy?", ja: "面白いですね！院は忙しいですか。" },
        { s: "A", name: "Akihiro", en: "Yes, it is. Mornings are very busy.", ja: "はい、忙しいです。朝はとても忙しいです。" },
        { s: "B", name: "Raj", en: "I see. This is Priya. She is our manager.", ja: "なるほど。こちらはプリヤです。私たちのマネージャーです。" },
        { s: "B", name: "Priya", en: "Hello, Akihiro. I'm glad to meet you.", ja: "こんにちは、章弘さん。お会いできてうれしいです。" },
        { s: "A", name: "Akihiro", en: "I'm glad to meet you, too. I'm happy to be here.", ja: "私もうれしいです。ご一緒できて光栄です。" }
      ]
    },
    writing: "自己紹介を3文で書こう（名前・仕事・出身）。My name is ... / I am ... / I'm from ... の型を使います。",
    speaking: "30秒で自己紹介を録音し、I'm と短く言えているか聞き返そう。"
  },

  // ===== Week 2 =====
  {
    week: 2,
    title: "一般動詞と3単現の s",
    scene: "仕事と毎日の流れを話す",
    cefr: "A1",
    goal: "自分や院のスタッフの1日の流れを英語で説明できる。",
    grammar: {
      title: "一般動詞の現在形・3単現の s",
      points: [
        "work（働く）、open（開ける）のように動作や習慣を表す動詞を一般動詞といいます。現在形は「いつもそうしている」という習慣を表すので、毎日の流れを話すのにぴったりです。",
        "主語が he / she / it や、Raj、my clinic のような「自分と相手以外の1人・1つ」のとき、動詞に s をつけます。これを3単現（3人称・単数・現在）の s といいます。",
        "s のつけ方には少し決まりがあります。teach → teaches、finish → finishes のように ch・sh・s で終わる語は es、study → studies のように「子音＋y」は y を i にして es。have は has になります。",
        "日本人がいちばん落としやすいのがこの s です。He work. と言っても通じますが、ビジネスでは少し雑に聞こえます。主語を言った瞬間に「3単現かな？」と考える癖をつけましょう。",
        "usually（ふだん）、every day（毎日）など頻度を表す言葉と一緒に使うと自然な文になります。usually は動詞の前、every day は文の最後に置くのが基本です。"
      ],
      examples: [
        { en: "I start work at nine.", ja: "私は9時に仕事を始めます。" },
        { en: "My clinic opens at 9 a.m.", ja: "私の院は午前9時に開きます。" },
        { en: "Raj lives in Bangalore.", ja: "ラージさんはバンガロールに住んでいます。" },
        { en: "Priya teaches yoga on Sundays.", ja: "プリヤさんは日曜日にヨガを教えています。" },
        { en: "I usually eat lunch at two.", ja: "私はふだん2時に昼ごはんを食べます。" },
        { en: "My assistant checks the appointments every morning.", ja: "助手は毎朝、予約を確認します。" }
      ],
      tip: "「彼・彼女・それ・1人の名前」が主語なら、動詞のおしりに s のしっぽをつける、とイメージしましょう。"
    },
    vocab: [
      { en: "work", ja: "働く、仕事", ex: "I work six days a week.", exJa: "私は週6日働きます。" },
      { en: "start", ja: "始める、始まる", ex: "I start work at 9 a.m.", exJa: "私は午前9時に仕事を始めます。" },
      { en: "finish", ja: "終える、終わる", ex: "The clinic finishes at 8 p.m.", exJa: "院は午後8時に終わります。" },
      { en: "open", ja: "開く、開ける", ex: "We open at nine.", exJa: "当院は9時に開きます。" },
      { en: "close", ja: "閉まる、閉める", ex: "The clinic closes on Sundays.", exJa: "院は日曜日がお休みです。" },
      { en: "treat", ja: "施術する、治療する", ex: "I treat back and shoulder problems.", exJa: "私は腰や肩の不調の施術をします。" },
      { en: "patient", ja: "患者さん", ex: "I see about twenty patients a day.", exJa: "1日に約20人の患者さんを診ます。" },
      { en: "customer", ja: "お客様、顧客", ex: "My web customers live all over Japan.", exJa: "ウェブのお客様は日本中にいます。" },
      { en: "morning", ja: "朝、午前", ex: "I drink coffee in the morning.", exJa: "朝はコーヒーを飲みます。" },
      { en: "evening", ja: "夕方、晩", ex: "I study English in the evening.", exJa: "夜に英語を勉強します。" },
      { en: "usually", ja: "ふだん、たいてい", ex: "I usually walk to work.", exJa: "私はふだん歩いて通勤します。" },
      { en: "every day", ja: "毎日", ex: "I check my email every day.", exJa: "私は毎日メールを確認します。" },
      { en: "check", ja: "確認する", ex: "Priya checks the price list.", exJa: "プリヤさんは価格表を確認します。" },
      { en: "email", ja: "メール", ex: "Raj sends me an email every Monday.", exJa: "ラージさんは毎週月曜日にメールをくれます。" },
      { en: "walk", ja: "歩く", ex: "I walk to the station.", exJa: "私は駅まで歩きます。" },
      { en: "eat", ja: "食べる", ex: "I eat lunch at two.", exJa: "私は2時に昼食を食べます。" },
      { en: "lunch", ja: "昼食", ex: "My lunch break is short.", exJa: "私の昼休みは短いです。" },
      { en: "live", ja: "住む", ex: "Raj lives in Bangalore.", exJa: "ラージさんはバンガロールに住んでいます。" },
      { en: "teach", ja: "教える", ex: "I teach easy stretches to my patients.", exJa: "患者さんに簡単なストレッチを教えます。" },
      { en: "help", ja: "助ける、手伝う", ex: "My assistant helps me at the front desk.", exJa: "助手が受付を手伝ってくれます。" }
    ],
    sentences: [
      { ja: "私は毎日働きます。", en: "I work every day." },
      { ja: "私の院は9時に開きます。", en: "My clinic opens at nine." },
      { ja: "私はふだん歩いて院に行きます。", en: "I usually walk to my clinic." },
      { ja: "ラージさんはバンガロールに住んでいます。", en: "Raj lives in Bangalore." },
      { ja: "私は1日に約20人の患者さんを施術します。", en: "I treat about twenty patients a day." },
      { ja: "プリヤさんは毎朝メールを確認します。", en: "Priya checks her email every morning." },
      { ja: "院は午後8時に閉まります。", en: "The clinic closes at 8 p.m." },
      { ja: "私は夜にホームページを制作します。", en: "I make websites in the evening." },
      { ja: "私の助手は受付で患者さんを手伝います。", en: "My assistant helps patients at the front desk." },
      { ja: "私は昼間は患者さんを施術し、夜はウェブの仕事をします。", en: "I treat patients during the day and do web work in the evening." }
    ],
    dialogue: {
      title: "毎日の流れを話す",
      lines: [
        { s: "B", name: "Raj", en: "Tell me about your day, Akihiro.", ja: "章弘さん、あなたの1日について教えてください。" },
        { s: "A", name: "Akihiro", en: "Sure. I get up at six and walk to my clinic.", ja: "いいですよ。6時に起きて、院まで歩きます。" },
        { s: "B", name: "Raj", en: "You walk? That's healthy.", ja: "歩くんですか。健康的ですね。" },
        { s: "A", name: "Akihiro", en: "Yes. My clinic opens at nine. I treat patients until one.", ja: "ええ。院は9時に開きます。1時まで患者さんを施術します。" },
        { s: "B", name: "Raj", en: "And you eat lunch after that?", ja: "そのあとで昼食を食べるんですか。" },
        { s: "A", name: "Akihiro", en: "Right. During my break, I usually check emails from my web customers.", ja: "そうです。休憩中はたいてい、ウェブのお客様からのメールを確認します。" },
        { s: "B", name: "Raj", en: "You have two jobs!", ja: "お仕事が2つあるんですね！" },
        { s: "A", name: "Akihiro", en: "That's true. The clinic closes at eight, and I finish my web work at ten.", ja: "その通りです。院は8時に閉まり、ウェブの仕事は10時に終えます。" },
        { s: "B", name: "Raj", en: "My day is similar. I start at nine and finish late, too.", ja: "私の1日も似ています。9時に始めて、終わるのも遅いです。" },
        { s: "A", name: "Akihiro", en: "Let's take care of our health, Raj!", ja: "お互い健康に気をつけましょうね、ラージさん！" }
      ]
    },
    writing: "自分の1日の流れを5文で書こう（I get up ... / I start ... / I treat ... / I eat ... / I finish ...）。",
    speaking: "院のスタッフか家族1人の1日を、3単現の s を意識して30秒で話そう。"
  },

  // ===== Week 3 =====
  {
    week: 3,
    title: "否定文と疑問文（do / does）",
    scene: "相手に質問する",
    cefr: "A1",
    goal: "do / does を使って相手に質問し、Yes / No で正しく答えられる。",
    grammar: {
      title: "一般動詞の否定文・疑問文（do / does, don't / doesn't）",
      points: [
        "一般動詞の文を疑問文にするときは、文の頭に Do をつけます。主語が he / she / it なら Does を使い、動詞は s のつかない元の形に戻ります。Does Raj like sushi? が正しく、Does Raj likes sushi? は間違いです。",
        "否定文は動詞の前に don't（do not）、主語が3単現なら doesn't（does not）を置きます。ここでも doesn't のあとの動詞は元の形です。s は doesn't が持っていってくれる、と考えるとわかりやすいです。",
        "be動詞の文（I am ...）には do を使いません。Are you busy? / I'm not busy. のように、be動詞そのものを前に出したり not をつけたりします。Do you are ...? と混ぜないよう注意しましょう。",
        "答え方は Yes, I do. / No, I don't. のように、質問と同じ do / does で返します。日本語の「はい」「いいえ」につられず、内容が肯定なら Yes、否定なら No と答えるのがポイントです。"
      ],
      examples: [
        { en: "Do you speak Japanese?", ja: "日本語を話しますか。" },
        { en: "I don't understand.", ja: "わかりません。" },
        { en: "Does Raj use LINE?", ja: "ラージさんはLINEを使いますか。" },
        { en: "Priya doesn't eat meat.", ja: "プリヤさんは肉を食べません。" },
        { en: "Do you have a question? — Yes, I do.", ja: "質問はありますか。—はい、あります。" }
      ],
      tip: "Does や doesn't を使ったら、動詞の s は消す。「s は1つの文に1回だけ」と覚えましょう。"
    },
    vocab: [
      { en: "speak", ja: "話す", ex: "Raj speaks Hindi and English.", exJa: "ラージさんはヒンディー語と英語を話します。" },
      { en: "understand", ja: "理解する、わかる", ex: "Sorry, I don't understand.", exJa: "すみません、わかりません。" },
      { en: "know", ja: "知っている", ex: "Do you know this website?", exJa: "このウェブサイトを知っていますか。" },
      { en: "like", ja: "好きだ", ex: "I like Indian food.", exJa: "私はインド料理が好きです。" },
      { en: "need", ja: "必要とする", ex: "Do you need a new website?", exJa: "新しいホームページが必要ですか。" },
      { en: "want", ja: "欲しい、望む", ex: "Many patients want online booking.", exJa: "多くの患者さんがネット予約を望んでいます。" },
      { en: "use", ja: "使う", ex: "Do you use WhatsApp?", exJa: "WhatsAppを使いますか。" },
      { en: "have", ja: "持っている、ある", ex: "I have a question.", exJa: "質問があります。" },
      { en: "often", ja: "よく、しばしば", ex: "Raj often calls me on Fridays.", exJa: "ラージさんは金曜日によく電話をくれます。" },
      { en: "sometimes", ja: "ときどき", ex: "I sometimes work on Sundays.", exJa: "私はときどき日曜日に働きます。" },
      { en: "never", ja: "決して〜ない", ex: "I never skip breakfast.", exJa: "私は朝食を絶対に抜きません。" },
      { en: "question", ja: "質問", ex: "Do you have any questions?", exJa: "何か質問はありますか。" },
      { en: "answer", ja: "答え、答える", ex: "Thank you for your answer.", exJa: "お答えありがとうございます。" },
      { en: "problem", ja: "問題", ex: "No problem.", exJa: "問題ありません。" },
      { en: "sure", ja: "もちろん、確かな", ex: "Are you sure?", exJa: "本当ですか（確かですか）。" },
      { en: "really", ja: "本当に", ex: "Do you really like natto?", exJa: "本当に納豆が好きなんですか。" },
      { en: "team", ja: "チーム", ex: "Our team doesn't work on weekends.", exJa: "私たちのチームは週末は働きません。" },
      { en: "website", ja: "ウェブサイト、ホームページ", ex: "Does your company have a website?", exJa: "御社にはウェブサイトがありますか。" },
      { en: "phone", ja: "電話", ex: "I don't answer the phone during treatment.", exJa: "施術中は電話に出ません。" },
      { en: "online", ja: "オンラインで", ex: "We meet online every week.", exJa: "私たちは毎週オンラインで会います。" }
    ],
    sentences: [
      { ja: "私はタバコを吸いません。", en: "I don't smoke." },
      { ja: "あなたは英語を話しますか。", en: "Do you speak English?" },
      { ja: "すみません、わかりません。", en: "Sorry, I don't understand." },
      { ja: "ラージさんは日本語を話しません。", en: "Raj doesn't speak Japanese." },
      { ja: "プリヤさんはLINEを使いますか。", en: "Does Priya use LINE?" },
      { ja: "院は日曜日は開いていません。", en: "The clinic doesn't open on Sundays." },
      { ja: "新しいウェブサイトは必要ですか。", en: "Do you need a new website?" },
      { ja: "シャルマさんはよく日本に来ますか。", en: "Does Mr. Sharma often come to Japan?" },
      { ja: "何か質問はありますか。—はい、あります。", en: "Do you have any questions? — Yes, I do." },
      { ja: "私たちのチームは週末にはメールを確認しません。", en: "Our team doesn't check emails on weekends." }
    ],
    dialogue: {
      title: "取引先に質問する",
      lines: [
        { s: "A", name: "Akihiro", en: "Priya, do you have a minute?", ja: "プリヤさん、少しお時間ありますか。" },
        { s: "B", name: "Priya", en: "Sure. Do you have a question?", ja: "もちろん。質問ですか。" },
        { s: "A", name: "Akihiro", en: "Yes. Does your company have a website in Japanese?", ja: "はい。御社には日本語のウェブサイトがありますか。" },
        { s: "B", name: "Priya", en: "No, it doesn't. We only have an English site.", ja: "いいえ、ありません。英語のサイトだけです。" },
        { s: "A", name: "Akihiro", en: "Do you want a Japanese site?", ja: "日本語のサイトは欲しいですか。" },
        { s: "B", name: "Priya", en: "Yes, I do. But I don't know the Japanese market well.", ja: "ええ、欲しいです。でも日本の市場はよく知らないんです。" },
        { s: "A", name: "Akihiro", en: "No problem. I make websites for small businesses.", ja: "問題ありません。私は小さな会社向けにホームページを作っています。" },
        { s: "B", name: "Priya", en: "Really? Does your team speak English?", ja: "本当ですか。チームの方は英語を話しますか。" },
        { s: "A", name: "Akihiro", en: "Not really. But I do, a little.", ja: "あまり話しません。でも私は少し話します。" },
        { s: "B", name: "Priya", en: "That's enough. Let's talk online next week.", ja: "それで十分です。来週オンラインで話しましょう。" }
      ]
    },
    writing: "Raj さんに聞いてみたい質問を Do / Does で5つ書こう。",
    speaking: "自分に Do you ...? と質問して、Yes, I do. / No, I don't. で10回テンポよく答えよう。"
  },

  // ===== Week 4 =====
  {
    week: 4,
    title: "疑問詞で予定と場所を聞く",
    scene: "予定と場所を聞く",
    cefr: "A1",
    goal: "what / where / when などを使って、予定・場所・値段を聞ける。",
    grammar: {
      title: "疑問詞 what / where / when / who / why / how, how much / how many",
      points: [
        "疑問詞は文のいちばん前に置き、そのあとは普通の疑問文の形を続けます。Where do you live? / When is the meeting? のように「疑問詞＋疑問文」が基本の形です。",
        "what（何）、where（どこ）、when（いつ）、who（だれ）、why（なぜ）、how（どうやって・どんなふうに）の6つを、まずはセットで覚えましょう。why と聞かれたら Because ... で答えます。",
        "how much は「いくら（量・値段）」、how many は「いくつ・何人（数）」です。how many のあとには patients や days のように複数形の名詞が来ます。How many patient ではなく How many patients です。",
        "What time ...?（何時に）、What day ...?（何曜日に）のように、what は名詞とくっついて使うこともできます。予定を決めるときによく使う形です。",
        "日本人は質問はできても、答えで固まりがちです。Where is ...? と聞かれたら It's near the station. のように、短い文で答えれば十分伝わります。"
      ],
      examples: [
        { en: "Where is your office?", ja: "あなたのオフィスはどこですか。" },
        { en: "When is the next meeting?", ja: "次の会議はいつですか。" },
        { en: "What time do you open?", ja: "何時に開きますか。" },
        { en: "How much is one treatment?", ja: "施術1回はいくらですか。" },
        { en: "How many patients do you see a day?", ja: "1日に何人の患者さんを診ますか。" },
        { en: "Why do you want a new website? — Because my site is old.", ja: "なぜ新しいサイトが欲しいのですか。—今のサイトが古いからです。" }
      ],
      tip: "答えてほしい情報（時間・場所・人）を先に決め、その疑問詞を文の頭に置く、と考えると組み立てやすくなります。"
    },
    vocab: [
      { en: "what", ja: "何", ex: "What is your email address?", exJa: "メールアドレスは何ですか。" },
      { en: "where", ja: "どこ", ex: "Where do you live?", exJa: "どこに住んでいますか。" },
      { en: "when", ja: "いつ", ex: "When are you free?", exJa: "いつお時間がありますか。" },
      { en: "who", ja: "だれ", ex: "Who is the manager?", exJa: "責任者はどなたですか。" },
      { en: "why", ja: "なぜ", ex: "Why do you like Japan?", exJa: "なぜ日本が好きなのですか。" },
      { en: "how", ja: "どうやって、どのように", ex: "How do you come to the clinic?", exJa: "どうやって院に来ますか。" },
      { en: "how much", ja: "いくら", ex: "How much is the website plan?", exJa: "ホームページのプランはいくらですか。" },
      { en: "how many", ja: "いくつ、何人", ex: "How many people are on your team?", exJa: "チームは何人ですか。" },
      { en: "schedule", ja: "予定、スケジュール", ex: "What's your schedule this week?", exJa: "今週の予定はどうなっていますか。" },
      { en: "meeting", ja: "会議、打ち合わせ", ex: "The meeting is on Monday.", exJa: "会議は月曜日です。" },
      { en: "appointment", ja: "予約、約束", ex: "Do you have an appointment?", exJa: "ご予約はありますか。" },
      { en: "address", ja: "住所、アドレス", ex: "What is the clinic's address?", exJa: "院の住所はどこですか。" },
      { en: "station", ja: "駅", ex: "Umeda Station is very big.", exJa: "梅田駅はとても大きいです。" },
      { en: "office", ja: "事務所、オフィス", ex: "Mr. Sharma's office is in Mumbai.", exJa: "シャルマさんの事務所はムンバイにあります。" },
      { en: "cost", ja: "費用、（費用が）かかる", ex: "How much does it cost?", exJa: "いくらかかりますか。" },
      { en: "time", ja: "時間、時刻", ex: "What time is it in India now?", exJa: "インドは今何時ですか。" },
      { en: "day", ja: "日、曜日", ex: "What day is good for you?", exJa: "何曜日がご都合よいですか。" },
      { en: "week", ja: "週", ex: "I talk with Raj online once a week.", exJa: "ラージさんとは週1回オンラインで話します。" },
      { en: "tomorrow", ja: "明日", ex: "Are you free tomorrow?", exJa: "明日は空いていますか。" },
      { en: "available", ja: "都合がつく、空いている", ex: "When are you available?", exJa: "いつご都合がつきますか。" }
    ],
    sentences: [
      { ja: "あなたのオフィスはどこですか。", en: "Where is your office?" },
      { ja: "会議はいつですか。", en: "When is the meeting?" },
      { ja: "何時に開きますか。", en: "What time do you open?" },
      { ja: "あの方はどなたですか。", en: "Who is that person?" },
      { ja: "施術1回はいくらですか。", en: "How much is one treatment?" },
      { ja: "1日に何人の患者さんを診ますか。", en: "How many patients do you see a day?" },
      { ja: "院までどうやって来ますか。", en: "How do you come to the clinic?" },
      { ja: "なぜ日本語のサイトが欲しいのですか。", en: "Why do you want a Japanese website?" },
      { ja: "明日は何時がご都合よいですか。", en: "What time are you available tomorrow?" },
      { ja: "インドでは、ホームページの制作にいくらかかりますか。", en: "How much does a website cost in India?" }
    ],
    dialogue: {
      title: "打ち合わせの日時を決める",
      lines: [
        { s: "B", name: "Mr. Sharma", en: "Good morning, Mr. Iwata. When are you available next week?", ja: "おはようございます、岩田さん。来週はいつご都合がよいですか。" },
        { s: "A", name: "Akihiro", en: "Good morning. What day is good for you?", ja: "おはようございます。何曜日がよろしいですか。" },
        { s: "B", name: "Mr. Sharma", en: "How about Wednesday?", ja: "水曜日はいかがですか。" },
        { s: "A", name: "Akihiro", en: "Wednesday is fine. What time?", ja: "水曜日で大丈夫です。何時ですか。" },
        { s: "B", name: "Mr. Sharma", en: "Is 2 p.m. India time OK?", ja: "インド時間の午後2時は大丈夫ですか。" },
        { s: "A", name: "Akihiro", en: "Let me see. That's 5:30 p.m. in Japan. Yes, it's OK.", ja: "ええと、日本では午後5時半ですね。はい、大丈夫です。" },
        { s: "B", name: "Mr. Sharma", en: "Good. Who is coming from your side?", ja: "よかった。そちらからはどなたが参加しますか。" },
        { s: "A", name: "Akihiro", en: "Just me. By the way, where is your office?", ja: "私だけです。ところで、事務所はどちらですか。" },
        { s: "B", name: "Mr. Sharma", en: "It's in Mumbai, near Churchgate Station.", ja: "ムンバイの、チャーチゲート駅の近くです。" },
        { s: "A", name: "Akihiro", en: "Thank you. See you on Wednesday.", ja: "ありがとうございます。では水曜日に。" }
      ]
    },
    writing: "来週の予定を、When / Where / What time の答えになるように3文で書こう。",
    speaking: "院の場所・営業時間・料金を聞かれた想定で、Where / What time / How much の質問と答えを声に出して練習しよう。"
  },

  // ===== Week 5 =====
  {
    week: 5,
    title: "現在進行形で「今」を伝える",
    scene: "電話・チャットで今の状況を伝える",
    cefr: "A1",
    goal: "電話やチャットで、今していることを英語で伝えられる。",
    grammar: {
      title: "現在進行形 be動詞＋〜ing",
      points: [
        "現在進行形は「be動詞＋動詞の ing 形」で、「今まさに〜しているところです」を表します。I am writing an email. なら、今メールを書いている最中だということです。",
        "現在形との違いが大事です。I work at a clinic. は「ふだん院で働いている」という習慣、I'm working now. は「今、仕事中」です。電話で今の状況を伝えるときは進行形を使います。",
        "ing のつけ方：make → making のように e で終わる語は e を取ります。sit → sitting、run → running のように短い語は最後の文字を重ねることがあります。",
        "like、know、want のような「気持ち・状態」を表す動詞は、ふつう進行形にしません。I'm knowing ではなく I know です。日本人がよくやる間違いなので気をつけましょう。",
        "be動詞を忘れて I writing. としてしまうのもよくある間違いです。進行形は be動詞と ing がいつもセット、と覚えてください。"
      ],
      examples: [
        { en: "I'm treating a patient right now.", ja: "今、患者さんを施術中です。" },
        { en: "Raj is waiting for your reply.", ja: "ラージさんがあなたの返事を待っています。" },
        { en: "What are you doing?", ja: "何をしているのですか。" },
        { en: "We are updating the website.", ja: "私たちはウェブサイトを更新しているところです。" },
        { en: "I'm not using the computer now.", ja: "今はパソコンを使っていません。" }
      ],
      tip: "電話に出られないときは I'm with a patient. / I'm driving. のように、短く「今の状況」を言えれば十分です。"
    },
    vocab: [
      { en: "call", ja: "電話する、電話", ex: "I'm calling from my clinic.", exJa: "院から電話しています。" },
      { en: "message", ja: "メッセージ", ex: "I'm reading your message now.", exJa: "今あなたのメッセージを読んでいます。" },
      { en: "wait", ja: "待つ", ex: "Raj is waiting for my answer.", exJa: "ラージさんが私の返事を待っています。" },
      { en: "write", ja: "書く", ex: "I'm writing a reply to Priya.", exJa: "プリヤさんへの返事を書いています。" },
      { en: "read", ja: "読む", ex: "Mr. Sharma is reading the proposal.", exJa: "シャルマさんは提案書を読んでいます。" },
      { en: "look for", ja: "探す", ex: "I'm looking for the file.", exJa: "そのファイルを探しています。" },
      { en: "prepare", ja: "準備する", ex: "We're preparing for the meeting.", exJa: "会議の準備をしています。" },
      { en: "right now", ja: "ちょうど今", ex: "I'm busy right now.", exJa: "今ちょうど手が離せません。" },
      { en: "moment", ja: "少しの間、瞬間", ex: "Just a moment, please.", exJa: "少々お待ちください。" },
      { en: "currently", ja: "現在", ex: "We are currently looking for new partners.", exJa: "現在、新しい取引先を探しています。" },
      { en: "project", ja: "案件、プロジェクト", ex: "We are working on a new project.", exJa: "新しい案件に取り組んでいます。" },
      { en: "design", ja: "デザイン、デザインする", ex: "I'm designing a new logo.", exJa: "新しいロゴをデザインしています。" },
      { en: "update", ja: "更新する", ex: "Priya is updating the price list.", exJa: "プリヤさんが価格表を更新しています。" },
      { en: "fix", ja: "直す", ex: "My assistant is fixing the printer.", exJa: "助手がプリンターを直しています。" },
      { en: "send", ja: "送る", ex: "I'm sending the file now.", exJa: "今ファイルを送っています。" },
      { en: "reply", ja: "返事、返事をする", ex: "Thank you for your quick reply.", exJa: "早速のお返事ありがとうございます。" },
      { en: "file", ja: "ファイル", ex: "The file is very large.", exJa: "そのファイルはとても重いです。" },
      { en: "document", ja: "書類、資料", ex: "I'm checking the document.", exJa: "資料を確認しています。" },
      { en: "still", ja: "まだ", ex: "Are you still working?", exJa: "まだ仕事中ですか。" },
      { en: "hold on", ja: "（電話で）少し待つ", ex: "Hold on, please.", exJa: "そのままお待ちください。" }
    ],
    sentences: [
      { ja: "今、患者さんを施術中です。", en: "I'm treating a patient now." },
      { ja: "ラージさんが電話を待っています。", en: "Raj is waiting for a call." },
      { ja: "今、何をしていますか。", en: "What are you doing now?" },
      { ja: "今ファイルを送っています。", en: "I'm sending the file now." },
      { ja: "プリヤさんはまだお客様と話しています。", en: "Priya is still talking with a customer." },
      { ja: "私たちは新しいホームページを作っています。", en: "We are making a new website." },
      { ja: "今はパソコンを使っていません。", en: "I'm not using the computer now." },
      { ja: "シャルマさんは資料を読んでいますか。", en: "Is Mr. Sharma reading the document?" },
      { ja: "現在、日本の取引先を探しています。", en: "We are currently looking for partners in Japan." },
      { ja: "私は院の予約ページを直していて、ラージさんはそのデザインを確認しています。", en: "I'm fixing the clinic's booking page, and Raj is checking the design." }
    ],
    dialogue: {
      title: "チャットから電話へ",
      lines: [
        { s: "B", name: "Raj", en: "Hi, Akihiro. Are you busy right now?", ja: "こんにちは、章弘さん。今お忙しいですか。" },
        { s: "A", name: "Akihiro", en: "Hi, Raj. I'm with a patient. Just a moment, please.", ja: "こんにちは、ラージさん。今施術中です。少々お待ちください。" },
        { s: "B", name: "Raj", en: "No problem. I'm waiting.", ja: "大丈夫ですよ。待っています。" },
        { s: "A", name: "Akihiro", en: "Sorry, I'm back. What are you working on?", ja: "すみません、戻りました。今何に取り組んでいるんですか。" },
        { s: "B", name: "Raj", en: "I'm preparing the new price list. Are you reading my email?", ja: "新しい価格表を準備しています。私のメールは読んでいますか。" },
        { s: "A", name: "Akihiro", en: "Yes, I'm reading it now. The file is still loading.", ja: "はい、今読んでいます。ファイルはまだ読み込み中です。" },
        { s: "B", name: "Raj", en: "OK. Priya is also updating our website.", ja: "わかりました。プリヤもうちのウェブサイトを更新しているんです。" },
        { s: "A", name: "Akihiro", en: "Great. I'm designing a Japanese page for you.", ja: "いいですね。私は御社の日本語ページをデザインしています。" },
        { s: "B", name: "Raj", en: "Wonderful! Are you sending it today?", ja: "すばらしい！今日送ってくれるんですか。" },
        { s: "A", name: "Akihiro", en: "Not today. I'm still fixing a few things.", ja: "今日ではありません。まだいくつか直しているところです。" }
      ]
    },
    writing: "今この瞬間に、院・家族・自分がしていることを進行形で5文書こう。",
    speaking: "電話がかかってきた想定で、I'm with a patient. / Just a moment, please. / Hold on, please. など、今の状況を伝える3パターンを声に出そう。"
  },

  // ===== Week 6 =====
  {
    week: 6,
    title: "過去形で昨日・週末のことを話す",
    scene: "週末や昨日の出来事を話す",
    cefr: "A2",
    goal: "昨日や週末にしたことを、過去形で3〜4文話せる。",
    grammar: {
      title: "過去形（be動詞・規則動詞・不規則動詞）",
      points: [
        "過去のことを言うときは動詞を過去形にします。多くの動詞は visit → visited のように ed をつけるだけです（規則動詞）。過去形は主語が何でも同じ形なので、3単現の s を気にしなくてよいのがうれしい点です。",
        "go → went、see → saw、buy → bought のように形が変わる動詞（不規則動詞）もあります。全部を一度に覚える必要はありません。よく使うものから少しずつ覚えましょう。",
        "be動詞の過去形は was と were です。I / he / she / it には was、you / we / they には were を使います。I was tired. / We were busy. のようになります。",
        "否定文・疑問文は did を使います。I didn't go. / Did you go? のように、did のあとの動詞は元の形に戻ります。Did you went? は間違いです。",
        "yesterday（昨日）、last week（先週）、two days ago（2日前）などの「時を表す言葉」を文の最後に添えると、いつの話かがはっきりします。"
      ],
      examples: [
        { en: "I visited Kyoto last weekend.", ja: "先週末、京都に行きました。" },
        { en: "I went to the gym yesterday.", ja: "昨日ジムに行きました。" },
        { en: "We were very busy on Monday.", ja: "月曜日はとても忙しかったです。" },
        { en: "Did you enjoy the trip?", ja: "旅行は楽しかったですか。" },
        { en: "I didn't see the email.", ja: "そのメールを見ていませんでした。" },
        { en: "Raj bought a new laptop two days ago.", ja: "ラージさんは2日前に新しいノートパソコンを買いました。" }
      ],
      tip: "過去の疑問文・否定文では did が「過去」を引き受けるので、動詞は元の形に戻す。Week 3 の does と同じ仕組みです。"
    },
    vocab: [
      { en: "yesterday", ja: "昨日", ex: "I was very busy yesterday.", exJa: "昨日はとても忙しかったです。" },
      { en: "last", ja: "この前の、最後の", ex: "I visited Tokyo last month.", exJa: "先月、東京に行きました。" },
      { en: "weekend", ja: "週末", ex: "How was your weekend?", exJa: "週末はどうでしたか。" },
      { en: "ago", ja: "〜前に", ex: "I started my clinic many years ago.", exJa: "何年も前に院を始めました。" },
      { en: "visit", ja: "訪れる", ex: "Mr. Sharma visited Japan in April.", exJa: "シャルマさんは4月に日本を訪れました。" },
      { en: "went", ja: "行った（go の過去形）", ex: "I went to Kyoto with my family.", exJa: "家族と京都に行きました。" },
      { en: "saw", ja: "見た、会った（see の過去形）", ex: "I saw a beautiful temple there.", exJa: "そこで美しいお寺を見ました。" },
      { en: "bought", ja: "買った（buy の過去形）", ex: "I bought a new treatment table.", exJa: "新しい施術台を買いました。" },
      { en: "took", ja: "取った、（時間が）かかった（take の過去形）", ex: "The train took two hours.", exJa: "電車で2時間かかりました。" },
      { en: "got", ja: "受け取った、着いた（get の過去形）", ex: "I got your email this morning.", exJa: "今朝メールを受け取りました。" },
      { en: "felt", ja: "感じた（feel の過去形）", ex: "The patient felt better after the treatment.", exJa: "患者さんは施術後、楽になったと感じました。" },
      { en: "tired", ja: "疲れた", ex: "I was tired after work.", exJa: "仕事のあと疲れていました。" },
      { en: "relax", ja: "くつろぐ、リラックスする", ex: "I relaxed at home on Sunday.", exJa: "日曜日は家でくつろぎました。" },
      { en: "trip", ja: "旅行", ex: "How was your trip to Delhi?", exJa: "デリーへの旅行はどうでしたか。" },
      { en: "movie", ja: "映画", ex: "I watched an Indian movie last night.", exJa: "昨夜インド映画を見ました。" },
      { en: "enjoy", ja: "楽しむ", ex: "I really enjoyed the dinner.", exJa: "夕食を本当に楽しみました。" },
      { en: "cook", ja: "料理する", ex: "Priya cooked curry for her family.", exJa: "プリヤさんは家族にカレーを作りました。" },
      { en: "rain", ja: "雨、雨が降る", ex: "It rained all day on Saturday.", exJa: "土曜日は一日中雨でした。" },
      { en: "early", ja: "早く、早い", ex: "I got up early this morning.", exJa: "今朝は早く起きました。" },
      { en: "late", ja: "遅く、遅い", ex: "I finished work late yesterday.", exJa: "昨日は仕事が遅く終わりました。" }
    ],
    sentences: [
      { ja: "昨日はとても忙しかったです。", en: "I was very busy yesterday." },
      { ja: "先週末、京都に行きました。", en: "I went to Kyoto last weekend." },
      { ja: "昨夜、映画を見ました。", en: "I watched a movie last night." },
      { ja: "日曜日は雨が降りました。", en: "It rained on Sunday." },
      { ja: "今朝メールを受け取りました。", en: "I got your email this morning." },
      { ja: "昨日はジムに行きませんでした。", en: "I didn't go to the gym yesterday." },
      { ja: "週末は楽しかったですか。", en: "Did you enjoy your weekend?" },
      { ja: "ラージさんは2年前に日本を訪れました。", en: "Raj visited Japan two years ago." },
      { ja: "昨日は患者さんが多かったので、とても疲れました。", en: "I had a lot of patients yesterday, so I was very tired." },
      { ja: "シャルマさんが先月新しい事務所を開いたので、私はお祝いのメールを送りました。", en: "Mr. Sharma opened a new office last month, so I sent him a congratulations email." }
    ],
    dialogue: {
      title: "週明けの雑談",
      lines: [
        { s: "B", name: "Priya", en: "Hi, Akihiro. How was your weekend?", ja: "こんにちは、章弘さん。週末はどうでしたか。" },
        { s: "A", name: "Akihiro", en: "It was great. I went to Nara with my family.", ja: "よかったですよ。家族と奈良に行きました。" },
        { s: "B", name: "Priya", en: "Nice! What did you do there?", ja: "いいですね！そこで何をしたんですか。" },
        { s: "A", name: "Akihiro", en: "We saw the Great Buddha and fed the deer.", ja: "大仏を見て、鹿にえさをあげました。" },
        { s: "B", name: "Priya", en: "That sounds fun. Was it crowded?", ja: "楽しそうですね。混んでいましたか。" },
        { s: "A", name: "Akihiro", en: "Yes, it was. And it rained in the afternoon.", ja: "ええ、混んでいました。それに午後は雨が降りました。" },
        { s: "B", name: "Priya", en: "Oh no. Did you get wet?", ja: "あら。ぬれましたか。" },
        { s: "A", name: "Akihiro", en: "A little. We took a taxi back to the station. How about you?", ja: "少しだけ。タクシーで駅まで戻りました。あなたは？" },
        { s: "B", name: "Priya", en: "I relaxed at home. I cooked and watched a movie.", ja: "家でくつろぎました。料理をして、映画を見ました。" },
        { s: "A", name: "Akihiro", en: "That sounds nice. I was so tired, so I'm a little jealous!", ja: "いいですね。私はくたくたになったので、ちょっとうらやましいです！" }
      ]
    },
    writing: "先週末にしたことを、過去形で4文書こう（どこへ・だれと・何を・どうだった）。",
    speaking: "How was your weekend? と聞かれた想定で、30秒で週末の話を録音しよう。"
  },

  // ===== Week 7 =====
  {
    week: 7,
    title: "will と be going to で予定を伝える",
    scene: "予定・計画を伝える",
    cefr: "A2",
    goal: "来週や来月の予定を、will と be going to で伝えられる。",
    grammar: {
      title: "未来の表現 will / be going to",
      points: [
        "未来のことは will か be going to で表します。どちらも後ろの動詞は元の形です。I will call you. / I'm going to visit India. のようになります。",
        "使い分けの目安：その場で決めたこと・申し出・約束には will、前から決めている予定や計画には be going to を使います。I'll send it now.（今決めた）／ I'm going to launch a new site in May.（前から計画）という感じです。",
        "会話では I will → I'll、will not → won't と短くなります。won't は want と音が似ているので、聞き取りで注意しましょう。",
        "be going to の be は主語に合わせて am / is / are に変わります。Raj is going to come. です。会話では gonna と聞こえることもありますが、書くときは going to にしましょう。",
        "maybe や probably を添えると「たぶん〜します」と柔らかく言えます。I'll probably arrive at ten. は、はっきり約束しきれないときに便利です。"
      ],
      examples: [
        { en: "I'll send you the file tomorrow.", ja: "明日ファイルを送ります。" },
        { en: "I'm going to visit Bangalore next month.", ja: "来月バンガロールを訪れる予定です。" },
        { en: "Priya will join the meeting.", ja: "プリヤさんが会議に参加します。" },
        { en: "We're going to launch the new website in May.", ja: "5月に新しいウェブサイトを公開する予定です。" },
        { en: "It won't take long.", ja: "長くはかかりません。" },
        { en: "Are you going to stay at a hotel?", ja: "ホテルに泊まる予定ですか。" }
      ],
      tip: "迷ったら、決まった予定は be going to、その場の「やります！」は I'll。まずはこの2つの場面で使い分けてみましょう。"
    },
    vocab: [
      { en: "plan", ja: "計画、計画する", ex: "What's your plan for next year?", exJa: "来年の計画は何ですか。" },
      { en: "next", ja: "次の", ex: "I'll see you next week.", exJa: "また来週お会いしましょう。" },
      { en: "soon", ja: "すぐに、まもなく", ex: "I'll reply soon.", exJa: "すぐに返事します。" },
      { en: "later", ja: "あとで", ex: "I'll call you later.", exJa: "あとで電話します。" },
      { en: "travel", ja: "旅行する、移動する", ex: "I'm going to travel to India in March.", exJa: "3月にインドへ行く予定です。" },
      { en: "flight", ja: "飛行機の便、フライト", ex: "My flight leaves at 11 a.m.", exJa: "私の便は午前11時に出発します。" },
      { en: "airport", ja: "空港", ex: "Raj will pick me up at the airport.", exJa: "ラージさんが空港に迎えに来てくれます。" },
      { en: "arrive", ja: "到着する", ex: "I'll arrive in Delhi at night.", exJa: "夜にデリーに着きます。" },
      { en: "leave", ja: "出発する、去る", ex: "I'm going to leave Ehime on Monday.", exJa: "月曜日に愛媛を出発します。" },
      { en: "stay", ja: "泊まる、滞在する", ex: "I'll stay for five days.", exJa: "5日間滞在します。" },
      { en: "hotel", ja: "ホテル", ex: "The hotel is near the office.", exJa: "ホテルはオフィスの近くです。" },
      { en: "invite", ja: "招待する", ex: "Mr. Sharma invited me to dinner.", exJa: "シャルマさんが夕食に招待してくれました。" },
      { en: "join", ja: "参加する、加わる", ex: "Will you join the meeting?", exJa: "会議に参加しますか。" },
      { en: "launch", ja: "公開する、始める", ex: "We'll launch the site next month.", exJa: "来月サイトを公開します。" },
      { en: "holiday", ja: "休日、祝日", ex: "The clinic will be closed for the holiday.", exJa: "院は祝日のためお休みです。" },
      { en: "probably", ja: "たぶん、おそらく", ex: "I'll probably be a little late.", exJa: "たぶん少し遅れます。" },
      { en: "maybe", ja: "もしかしたら", ex: "Maybe Priya will come, too.", exJa: "もしかしたらプリヤさんも来るかもしれません。" },
      { en: "decide", ja: "決める", ex: "I'll decide by Friday.", exJa: "金曜日までに決めます。" },
      { en: "promise", ja: "約束する、約束", ex: "I promise I'll finish it on time.", exJa: "期限までに終えると約束します。" },
      { en: "event", ja: "イベント、行事", ex: "We're going to hold a health event in June.", exJa: "6月に健康イベントを開く予定です。" }
    ],
    sentences: [
      { ja: "明日電話します。", en: "I'll call you tomorrow." },
      { ja: "来月インドに行く予定です。", en: "I'm going to go to India next month." },
      { ja: "すぐに返事します。", en: "I'll reply soon." },
      { ja: "プリヤさんも会議に参加します。", en: "Priya will join the meeting, too." },
      { ja: "そのホテルに3泊する予定です。", en: "I'm going to stay at the hotel for three nights." },
      { ja: "長くはかかりません。", en: "It won't take long." },
      { ja: "新しいサイトはいつ公開する予定ですか。", en: "When are you going to launch the new site?" },
      { ja: "たぶん金曜日までに決めます。", en: "I'll probably decide by Friday." },
      { ja: "デリーには夜に着く予定なので、空港で会いましょう。", en: "I'm going to arrive in Delhi at night, so let's meet at the airport." },
      { ja: "5月に院で健康イベントを開く予定で、ラージさんも招待するつもりです。", en: "We're going to hold a health event at the clinic in May, and I'm going to invite Raj, too." }
    ],
    dialogue: {
      title: "インド出張の予定",
      lines: [
        { s: "B", name: "Raj", en: "Akihiro, are you going to come to India this year?", ja: "章弘さん、今年インドに来る予定はありますか。" },
        { s: "A", name: "Akihiro", en: "Yes. I'm going to visit Bangalore in March.", ja: "はい。3月にバンガロールを訪れる予定です。" },
        { s: "B", name: "Raj", en: "That's great news! How long are you going to stay?", ja: "いい知らせですね！どのくらい滞在する予定ですか。" },
        { s: "A", name: "Akihiro", en: "About five days. I'll book a hotel near your office.", ja: "5日くらいです。御社の近くにホテルを予約しますね。" },
        { s: "B", name: "Raj", en: "Good idea. I'll pick you up at the airport.", ja: "いい考えですね。空港まで迎えに行きますよ。" },
        { s: "A", name: "Akihiro", en: "Thank you! My flight will probably arrive at night.", ja: "ありがとうございます！便はたぶん夜に着きます。" },
        { s: "B", name: "Raj", en: "No problem. I'll wait for you.", ja: "問題ありません。待っていますよ。" },
        { s: "A", name: "Akihiro", en: "Will Mr. Sharma join our meeting?", ja: "シャルマさんも打ち合わせに参加しますか。" },
        { s: "B", name: "Raj", en: "Yes. He's going to invite you to dinner, too.", ja: "はい。夕食にも招待するつもりですよ。" },
        { s: "A", name: "Akihiro", en: "Wonderful. I'll send you my schedule soon.", ja: "すばらしい。すぐに予定を送りますね。" }
      ]
    },
    writing: "来週の予定を be going to で3文、その場で決めたことを will で2文書こう。",
    speaking: "出張の予定（いつ・どこへ・何日）を、30秒で Raj さんに伝える練習をしよう。"
  },

  // ===== Week 8 =====
  {
    week: 8,
    title: "助動詞で依頼・許可・アドバイス",
    scene: "患者さんや取引先への依頼・アドバイス",
    cefr: "A2",
    goal: "can / should / have to などを使って、お願い・許可・アドバイスを伝えられる。",
    grammar: {
      title: "助動詞 can / must / have to / should / may",
      points: [
        "助動詞は動詞の前に置いて、気持ちや意味をプラスする言葉です。後ろの動詞は必ず元の形になります。He can speaks ではなく He can speak です。",
        "can は「できる」、Can you ...? で「〜してくれますか」という気軽な依頼になります。もっと丁寧にしたいときは Could you ...? を使いましょう。取引先には Could you ...? が安心です。",
        "must と have to はどちらも「〜しなければならない」ですが、否定形にすると意味が大きく変わります。must not は「〜してはいけない（禁止）」、don't have to は「〜しなくてよい」です。ここは日本人がとても間違えやすいところです。",
        "should は「〜したほうがいい」というアドバイスです。日本語の「すべき」ほど強くないので、患者さんに You should rest tonight. と言っても失礼になりません。",
        "May I ...? は「〜してもよろしいですか」という丁寧な許可の求め方です。施術で体にふれる前に May I touch your shoulder? と聞くと、とても丁寧な印象になります。"
      ],
      examples: [
        { en: "Can you send me the file?", ja: "ファイルを送ってくれますか。" },
        { en: "Could you speak a little more slowly?", ja: "もう少しゆっくり話していただけますか。" },
        { en: "You should drink more water.", ja: "もっと水を飲んだほうがいいですよ。" },
        { en: "I have to finish this by Friday.", ja: "金曜日までにこれを終えなければなりません。" },
        { en: "You don't have to pay today.", ja: "今日はお支払いいただかなくて大丈夫です。" },
        { en: "May I ask a question?", ja: "質問してもよろしいですか。" }
      ],
      tip: "依頼は Can you → Could you の順に丁寧になります。迷ったら Could you ...? を使えば、ビジネスでも失敗しません。"
    },
    vocab: [
      { en: "can", ja: "できる、〜してもよい", ex: "I can speak a little English.", exJa: "私は英語を少し話せます。" },
      { en: "could", ja: "〜していただけますか（丁寧な依頼）", ex: "Could you check this document?", exJa: "この資料を確認していただけますか。" },
      { en: "must", ja: "〜しなければならない", ex: "You must not lift heavy things this week.", exJa: "今週は重いものを持ってはいけません。" },
      { en: "have to", ja: "〜しなければならない", ex: "I have to leave at five today.", exJa: "今日は5時に出なければなりません。" },
      { en: "should", ja: "〜したほうがいい", ex: "You should stretch every morning.", exJa: "毎朝ストレッチしたほうがいいですよ。" },
      { en: "may", ja: "〜してもよい（丁寧な許可）", ex: "May I come in?", exJa: "入ってもよろしいですか。" },
      { en: "would like", ja: "〜が欲しい（丁寧）", ex: "I'd like some water, please.", exJa: "お水をいただけますか。" },
      { en: "rest", ja: "休む、休息", ex: "You should rest for two days.", exJa: "2日間は休んだほうがいいです。" },
      { en: "stretch", ja: "ストレッチする、伸ばす", ex: "Please stretch slowly.", exJa: "ゆっくりストレッチしてください。" },
      { en: "drink", ja: "飲む", ex: "You should drink warm water.", exJa: "温かいお水を飲んだほうがいいですよ。" },
      { en: "water", ja: "水", ex: "Can I have some water?", exJa: "お水をもらえますか。" },
      { en: "sleep", ja: "眠る、睡眠", ex: "You need more sleep.", exJa: "もっと睡眠が必要です。" },
      { en: "pain", ja: "痛み", ex: "Do you have any pain now?", exJa: "今、痛みはありますか。" },
      { en: "back pain", ja: "腰痛、背中の痛み", ex: "Many office workers have back pain.", exJa: "多くの会社員が腰痛を抱えています。" },
      { en: "shoulder", ja: "肩", ex: "My shoulders are very stiff.", exJa: "肩がとても凝っています。" },
      { en: "careful", ja: "注意深い、気をつける", ex: "Please be careful on the stairs.", exJa: "階段に気をつけてください。" },
      { en: "allow", ja: "許す、許可する", ex: "We don't allow pets in the clinic.", exJa: "院内はペットをお断りしています。" },
      { en: "request", ja: "依頼、依頼する", ex: "I have a small request.", exJa: "小さなお願いがあります。" },
      { en: "advice", ja: "助言、アドバイス", ex: "Thank you for your advice.", exJa: "アドバイスありがとうございます。" },
      { en: "try", ja: "試す、やってみる", ex: "You should try this stretch.", exJa: "このストレッチを試してみるといいですよ。" }
    ],
    sentences: [
      { ja: "英語を少し話せます。", en: "I can speak a little English." },
      { ja: "質問してもよろしいですか。", en: "May I ask a question?" },
      { ja: "ファイルを送ってもらえますか。", en: "Can you send me the file?" },
      { ja: "もう少しゆっくり話していただけますか。", en: "Could you speak a little more slowly?" },
      { ja: "今夜はゆっくり休んだほうがいいですよ。", en: "You should get some rest tonight." },
      { ja: "金曜日までにこれを終えなければなりません。", en: "I have to finish this by Friday." },
      { ja: "今日はお支払いいただかなくて大丈夫です。", en: "You don't have to pay today." },
      { ja: "今週は重いものを持ってはいけません。", en: "You must not lift heavy things this week." },
      { ja: "肩こりがひどいなら、毎朝このストレッチを試したほうがいいですよ。", en: "If your shoulders are very stiff, you should try this stretch every morning." },
      { ja: "来週の打ち合わせの前に、資料を確認していただけますか。", en: "Could you check the documents before next week's meeting?" }
    ],
    dialogue: {
      title: "来日中の取引先に施術でアドバイス",
      lines: [
        { s: "A", name: "Akihiro", en: "Hello, Priya. How is your back today?", ja: "こんにちは、プリヤさん。今日は腰の具合はいかがですか。" },
        { s: "B", name: "Priya", en: "It still hurts a little. I sat on the plane for nine hours.", ja: "まだ少し痛みます。飛行機に9時間座っていたので。" },
        { s: "A", name: "Akihiro", en: "I see. May I touch your lower back?", ja: "なるほど。腰に触れてもよろしいですか。" },
        { s: "B", name: "Priya", en: "Sure. Should I lie down here?", ja: "どうぞ。ここに横になればいいですか。" },
        { s: "A", name: "Akihiro", en: "Yes, please. Can you tell me if it hurts?", ja: "はい、お願いします。痛かったら教えてもらえますか。" },
        { s: "B", name: "Priya", en: "OK. Ouch, right there.", ja: "わかりました。痛っ、そこです。" },
        { s: "A", name: "Akihiro", en: "Your muscles are very tight. You should drink more water and rest tonight.", ja: "筋肉がかなり張っていますね。今夜はお水を多めに飲んで休んだほうがいいですよ。" },
        { s: "B", name: "Priya", en: "Do I have to stop my yoga?", ja: "ヨガはやめなければいけませんか。" },
        { s: "A", name: "Akihiro", en: "No, you don't have to stop. But you must not carry heavy bags this week.", ja: "いいえ、やめなくて大丈夫です。でも今週は重いかばんを持ってはいけません。" },
        { s: "B", name: "Priya", en: "Thank you for your advice. Could I come again on Friday?", ja: "アドバイスありがとうございます。金曜日にまた来てもいいですか。" }
      ]
    },
    writing: "患者さん（または家族）へのアドバイスを、should / don't have to / must not を使って3文書こう。",
    speaking: "取引先へのお願いを Could you ...? で5つ、声に出して言ってみよう。"
  },

  // ===== Week 9 =====
  {
    week: 9,
    title: "There is / There are と場所の前置詞",
    scene: "院やオフィスの場所を案内する",
    cefr: "A2",
    goal: "院の場所や院内の様子を、There is と前置詞を使って案内できる。",
    grammar: {
      title: "There is / There are・場所の前置詞",
      points: [
        "There is / There are は「〜があります・〜がいます」と、何かの存在を初めて伝えるときの形です。後ろの名詞が1つなら There is、2つ以上なら There are になります。",
        "日本語の「〜があります」を I have や It has で言おうとする人が多いのですが、ある場所に何かがあることを伝えるなら There is が自然です。There is a station near my clinic. のように使います。",
        "疑問文は Is there ...? / Are there ...?、否定文は There isn't ... / There aren't ... です。Is there a parking lot? は、来院する人がよく聞く質問です。",
        "場所の前置詞は in（中に）、on（上に・接して）、at（その地点に）が基本です。さらに next to（となり）、in front of（前）、behind（うしろ）、between A and B（AとBの間）、across from（向かい）を覚えると、道案内ができるようになります。",
        "There is は、すでに話題に出た特定のものには使いません。「私の院は駅の近くです」なら My clinic is near the station. と言います。新しい情報には There is、知っている物の場所には be動詞、と覚えましょう。"
      ],
      examples: [
        { en: "There is a convenience store next to my clinic.", ja: "院のとなりにコンビニがあります。" },
        { en: "There are three beds in the treatment room.", ja: "施術室にはベッドが3台あります。" },
        { en: "Is there a parking lot?", ja: "駐車場はありますか。" },
        { en: "There aren't any stairs at the entrance.", ja: "入口に階段はありません。" },
        { en: "The clinic is on the second floor.", ja: "院は2階にあります。" },
        { en: "The bank is across from the station.", ja: "銀行は駅の向かいにあります。" }
      ],
      tip: "道案内は「目印（There is a ...）→ 位置（next to / across from）」の順で話すと、相手が頭の中に地図を描きやすくなります。"
    },
    vocab: [
      { en: "there is", ja: "〜がある（1つ）", ex: "There is a café near my clinic.", exJa: "院の近くにカフェがあります。" },
      { en: "there are", ja: "〜がある（2つ以上）", ex: "There are two exits at the station.", exJa: "駅には出口が2つあります。" },
      { en: "building", ja: "建物、ビル", ex: "My clinic is in a white building.", exJa: "私の院は白いビルの中にあります。" },
      { en: "floor", ja: "階、床", ex: "The clinic is on the second floor.", exJa: "院は2階です。" },
      { en: "entrance", ja: "入口", ex: "The entrance is on the left side.", exJa: "入口は左側にあります。" },
      { en: "parking", ja: "駐車場、駐車", ex: "There is free parking behind the building.", exJa: "ビルの裏に無料駐車場があります。" },
      { en: "near", ja: "〜の近くに", ex: "Is there a hotel near the office?", exJa: "オフィスの近くにホテルはありますか。" },
      { en: "next to", ja: "〜のとなりに", ex: "The clinic is next to a bakery.", exJa: "院はパン屋のとなりです。" },
      { en: "in front of", ja: "〜の前に", ex: "Please wait in front of the station.", exJa: "駅の前でお待ちください。" },
      { en: "behind", ja: "〜のうしろに", ex: "There is a park behind the clinic.", exJa: "院のうしろに公園があります。" },
      { en: "between", ja: "〜の間に", ex: "The clinic is between the bank and the post office.", exJa: "院は銀行と郵便局の間にあります。" },
      { en: "across from", ja: "〜の向かいに", ex: "There is a convenience store across from the clinic.", exJa: "院の向かいにコンビニがあります。" },
      { en: "corner", ja: "角", ex: "Turn right at the next corner.", exJa: "次の角を右に曲がってください。" },
      { en: "street", ja: "通り", ex: "There are many shops on this street.", exJa: "この通りにはお店がたくさんあります。" },
      { en: "left", ja: "左、左に", ex: "The elevator is on your left.", exJa: "エレベーターは左手にあります。" },
      { en: "right", ja: "右、右に", ex: "The reception desk is on the right.", exJa: "受付は右側です。" },
      { en: "straight", ja: "まっすぐ", ex: "Go straight for two minutes.", exJa: "2分ほどまっすぐ進んでください。" },
      { en: "sign", ja: "看板、標識", ex: "There is a green sign on the building.", exJa: "ビルに緑の看板があります。" },
      { en: "elevator", ja: "エレベーター", ex: "Is there an elevator in the building?", exJa: "ビルにエレベーターはありますか。" },
      { en: "bed", ja: "ベッド、施術台", ex: "Please lie on the bed.", exJa: "ベッドに横になってください。" }
    ],
    sentences: [
      { ja: "院の近くに駅があります。", en: "There is a station near my clinic." },
      { ja: "施術室にはベッドが3台あります。", en: "There are three beds in the treatment room." },
      { ja: "駐車場はありますか。", en: "Is there a parking lot?" },
      { ja: "院は2階にあります。", en: "The clinic is on the second floor." },
      { ja: "入口に段差はありません。", en: "There aren't any steps at the entrance." },
      { ja: "院はパン屋のとなりにあります。", en: "The clinic is next to a bakery." },
      { ja: "ビルの前に緑の看板があります。", en: "There is a green sign in front of the building." },
      { ja: "銀行は郵便局と駅の間にあります。", en: "The bank is between the post office and the station." },
      { ja: "次の角を左に曲がると、右手に白いビルがあります。", en: "Turn left at the next corner, and there is a white building on your right." },
      { ja: "オフィスの近くにおいしいインド料理店はありますか。", en: "Is there a good Indian restaurant near your office?" }
    ],
    dialogue: {
      title: "駅から院までの道を案内する",
      lines: [
        { s: "B", name: "Mr. Sharma", en: "Hello, Mr. Iwata. I'm at the station now. Where is your clinic?", ja: "もしもし、岩田さん。今、駅にいます。院はどこですか。" },
        { s: "A", name: "Akihiro", en: "Hello! Which exit are you at?", ja: "もしもし！どの出口にいらっしゃいますか。" },
        { s: "B", name: "Mr. Sharma", en: "The east exit. There is a big bookstore in front of me.", ja: "東口です。目の前に大きな本屋があります。" },
        { s: "A", name: "Akihiro", en: "Perfect. Go straight along the main street for about three minutes.", ja: "ばっちりです。大通りに沿って3分ほどまっすぐ進んでください。" },
        { s: "B", name: "Mr. Sharma", en: "OK. Is there a sign?", ja: "わかりました。看板はありますか。" },
        { s: "A", name: "Akihiro", en: "Yes. Turn right at the corner with the bank. There is a white building next to a bakery.", ja: "はい。銀行のある角を右に曲がってください。パン屋のとなりに白いビルがあります。" },
        { s: "B", name: "Mr. Sharma", en: "I see it. Is the clinic on the first floor?", ja: "見えました。院は1階ですか。" },
        { s: "A", name: "Akihiro", en: "No, it's on the second floor. There is an elevator behind the entrance.", ja: "いいえ、2階です。入口の奥にエレベーターがあります。" },
        { s: "B", name: "Mr. Sharma", en: "Great. Is there parking for my driver?", ja: "よかった。運転手のための駐車場はありますか。" },
        { s: "A", name: "Akihiro", en: "Yes, there are two spaces behind the building. See you soon!", ja: "はい、ビルの裏に2台分あります。お待ちしています！" }
      ]
    },
    writing: "最寄り駅から院までの道順を、There is と前置詞を使って4文で書こう。",
    speaking: "院の中を案内する想定で、受付・施術室・トイレの場所を30秒で説明しよう。"
  },

  // ===== Week 10 =====
  {
    week: 10,
    title: "比較級・最上級で比べる",
    scene: "商品やサービスを比べる",
    cefr: "A2",
    goal: "料金やプランを比べて、どれがよいか英語で説明できる。",
    grammar: {
      title: "比較級・最上級・as ... as",
      points: [
        "2つを比べるときは比較級を使います。短い語は cheap → cheaper のように er をつけ、後ろに than（〜より）を置きます。This plan is cheaper than that one. で「このプランはあれより安い」です。",
        "3つ以上の中で「いちばん」と言うときは最上級です。短い語は the cheapest のように the ＋ est の形になります。the を忘れやすいので注意しましょう。",
        "expensive や popular のような長い語は er / est をつけず、more expensive、the most popular のように more / most を前に置きます。日本人がよく more cheaper と両方つけてしまうので気をつけましょう。",
        "good → better → best、bad → worse → worst は形が変わる特別な語です。ビジネスでもよく使うので、セットで覚えましょう。",
        "as ... as は「同じくらい〜」です。not as ... as にすると「〜ほど…ではない」になり、相手の商品を直接けなさずに比べたいときに便利です。"
      ],
      examples: [
        { en: "This plan is cheaper than the old one.", ja: "このプランは前のものより安いです。" },
        { en: "The standard plan is the most popular.", ja: "スタンダードプランがいちばん人気です。" },
        { en: "Your English is better than mine.", ja: "あなたの英語は私よりうまいです。" },
        { en: "Online meetings are as effective as face-to-face meetings.", ja: "オンライン会議は対面と同じくらい効果的です。" },
        { en: "Plan A is not as expensive as Plan B.", ja: "AプランはBプランほど高くありません。" }
      ],
      tip: "比べるときは「何と何を・何について」を先に決め、短い語は er / est、長い語は more / most。まず cheap / expensive / good の3つで練習しましょう。"
    },
    vocab: [
      { en: "cheap", ja: "安い", ex: "Cheap is not always good.", exJa: "安いものがいつもよいとは限りません。" },
      { en: "expensive", ja: "（値段が）高い", ex: "The premium plan is more expensive.", exJa: "プレミアムプランのほうが高いです。" },
      { en: "fast", ja: "速い", ex: "Your new website is much faster.", exJa: "新しいサイトはずっと速いです。" },
      { en: "popular", ja: "人気のある", ex: "This course is the most popular at my clinic.", exJa: "このコースは院でいちばん人気です。" },
      { en: "better", ja: "よりよい（good の比較級）", ex: "Your idea is better than mine.", exJa: "あなたの案は私の案よりいいです。" },
      { en: "best", ja: "いちばんよい（good の最上級）", ex: "Which plan is the best for us?", exJa: "私たちにはどのプランがいちばんいいですか。" },
      { en: "easy", ja: "簡単な", ex: "This form is easier than the old one.", exJa: "このフォームは前のものより簡単です。" },
      { en: "difficult", ja: "難しい", ex: "English is difficult, but it's fun.", exJa: "英語は難しいけれど楽しいです。" },
      { en: "effective", ja: "効果的な", ex: "This stretch is very effective for back pain.", exJa: "このストレッチは腰痛にとても効果的です。" },
      { en: "quality", ja: "品質", ex: "Quality is more important than price.", exJa: "品質は価格より大切です。" },
      { en: "service", ja: "サービス", ex: "Your service is excellent.", exJa: "御社のサービスはすばらしいです。" },
      { en: "product", ja: "製品、商品", ex: "This is our most popular product.", exJa: "これは当社でいちばん人気の製品です。" },
      { en: "option", ja: "選択肢", ex: "We have three options.", exJa: "選択肢が3つあります。" },
      { en: "choose", ja: "選ぶ", ex: "Which option do you choose?", exJa: "どの選択肢を選びますか。" },
      { en: "compare", ja: "比べる", ex: "Let's compare the two plans.", exJa: "2つのプランを比べましょう。" },
      { en: "than", ja: "〜より", ex: "India is much bigger than Japan.", exJa: "インドは日本よりずっと大きいです。" },
      { en: "most", ja: "いちばん、最も", ex: "This is the most important point.", exJa: "これがいちばん大事な点です。" },
      { en: "simple", ja: "シンプルな、簡単な", ex: "I like simple designs.", exJa: "私はシンプルなデザインが好きです。" },
      { en: "price", ja: "価格、値段", ex: "The price is a little high.", exJa: "価格が少し高いです。" },
      { en: "large", ja: "大きい", ex: "Do you have a larger size?", exJa: "もっと大きいサイズはありますか。" }
    ],
    sentences: [
      { ja: "このプランは前のものより安いです。", en: "This plan is cheaper than the old one." },
      { ja: "Bプランのほうが高いです。", en: "Plan B is more expensive." },
      { ja: "これがいちばん人気のコースです。", en: "This is the most popular course." },
      { ja: "あなたの英語は私の英語よりずっとうまいです。", en: "Your English is much better than mine." },
      { ja: "新しいサイトは古いサイトより速いです。", en: "The new site is faster than the old one." },
      { ja: "品質は価格より大切です。", en: "Quality is more important than price." },
      { ja: "どちらのデザインがいいですか。", en: "Which design is better?" },
      { ja: "オンライン会議は対面と同じくらい効果的です。", en: "Online meetings are as effective as face-to-face meetings." },
      { ja: "AプランはBプランほど高くありませんが、サポートは同じくらい充実しています。", en: "Plan A is not as expensive as Plan B, but the support is just as good." },
      { ja: "3つのプランの中で、小さな院にはスタンダードプランがいちばん合っています。", en: "Of the three plans, the standard plan is the best for small clinics." }
    ],
    dialogue: {
      title: "ホームページのプランを比べる",
      lines: [
        { s: "B", name: "Priya", en: "Akihiro, can you explain the three website plans?", ja: "章弘さん、ホームページの3つのプランを説明してもらえますか。" },
        { s: "A", name: "Akihiro", en: "Sure. The basic plan is the cheapest. It has one page.", ja: "もちろん。ベーシックプランがいちばん安いです。1ページです。" },
        { s: "B", name: "Priya", en: "And the standard plan?", ja: "スタンダードプランは？" },
        { s: "A", name: "Akihiro", en: "It's more expensive, but it has five pages and a booking form.", ja: "少し高いですが、5ページと予約フォームがついています。" },
        { s: "B", name: "Priya", en: "Which plan is the most popular?", ja: "どのプランがいちばん人気ですか。" },
        { s: "A", name: "Akihiro", en: "The standard plan. It's the best for small businesses.", ja: "スタンダードプランです。小さな会社にはいちばん合っています。" },
        { s: "B", name: "Priya", en: "Is the premium plan much better?", ja: "プレミアムプランはずっといいんですか。" },
        { s: "A", name: "Akihiro", en: "It's larger, but for your company, the standard plan is as good as the premium one.", ja: "規模は大きいですが、御社にはスタンダードでもプレミアムと同じくらい十分です。" },
        { s: "B", name: "Priya", en: "I like that. Simpler is better for us.", ja: "それはいいですね。私たちにはシンプルなほうがいいです。" },
        { s: "A", name: "Akihiro", en: "Great. I'll send you the price list today.", ja: "よかった。今日、価格表を送りますね。" }
      ]
    },
    writing: "自分の院のメニュー（または好きなお店）を2つ比べて、比較級・最上級を使って4文書こう。",
    speaking: "日本とインド（天気・食べ物・街の大きさ）を比べて、30秒で話そう。"
  },

  // ===== Week 11 =====
  {
    week: 11,
    title: "不定詞と動名詞で目的と好みを話す",
    scene: "目的や好み・目標を話す",
    cefr: "A2",
    goal: "to ＋動詞と ing 形を使って、目的・好み・目標を話せる。",
    grammar: {
      title: "不定詞（to ＋動詞）・動名詞（〜ing）",
      points: [
        "to ＋動詞の元の形を不定詞といいます。「〜するために」（目的）、「〜すること」（名詞）、「〜するための」（説明）の3つの使い方があります。I study English to work with Indian partners. は「インドの取引先と働くために英語を勉強しています」という目的の文です。",
        "動詞に ing をつけて「〜すること」という名詞にしたものを動名詞といいます。Walking is good for your health. のように主語にもなりますし、I enjoy cooking. のように動詞のあとにも置けます。",
        "動詞によって、後ろに to を取るか ing を取るかが決まっています。want / hope / decide / plan は to、enjoy / finish / stop / mind / avoid は ing です。I enjoy to cook. は間違いなので気をつけましょう。",
        "like / love / start / continue はどちらでも OK です。一方 stop は要注意で、stop smoking は「タバコをやめる」、stop to smoke は「タバコを吸うために立ち止まる」と意味が変わります。",
        "前置詞（in, at, for, about など）のあとは必ず ing 形です。I'm interested in learning yoga. のように使います。"
      ],
      examples: [
        { en: "I study English to work with partners in India.", ja: "インドの取引先と仕事をするために英語を勉強しています。" },
        { en: "I want to improve my speaking.", ja: "スピーキングを上達させたいです。" },
        { en: "I enjoy walking in the morning.", ja: "朝の散歩を楽しんでいます。" },
        { en: "Stretching every day is important.", ja: "毎日ストレッチすることは大切です。" },
        { en: "Raj is interested in visiting Japan.", ja: "ラージさんは日本を訪れることに興味があります。" },
        { en: "It's important to sleep well.", ja: "よく眠ることは大切です。" }
      ],
      tip: "「これから先の気持ち（want, hope, plan）」は to、「今していること・してきたこと（enjoy, finish, stop）」は ing、とイメージで覚えると選びやすくなります。"
    },
    vocab: [
      { en: "hope", ja: "望む、願う", ex: "I hope to see you in India.", exJa: "インドでお会いできるといいなと思っています。" },
      { en: "learn", ja: "学ぶ、習う", ex: "I want to learn business English.", exJa: "ビジネス英語を学びたいです。" },
      { en: "practice", ja: "練習する", ex: "I practice speaking English every day.", exJa: "毎日英語を話す練習をしています。" },
      { en: "improve", ja: "上達させる、改善する", ex: "I want to improve my pronunciation.", exJa: "発音をよくしたいです。" },
      { en: "health", ja: "健康", ex: "Walking is good for your health.", exJa: "歩くことは健康によいです。" },
      { en: "goal", ja: "目標", ex: "My goal is to talk with Raj without a translator.", exJa: "私の目標は通訳なしでラージさんと話すことです。" },
      { en: "reason", ja: "理由", ex: "What's the reason for your visit?", exJa: "ご来院の理由は何ですか。" },
      { en: "stop", ja: "やめる、止まる", ex: "I stopped drinking soda.", exJa: "炭酸飲料を飲むのをやめました。" },
      { en: "keep", ja: "〜し続ける、保つ", ex: "Keep practicing, and you'll get better.", exJa: "練習を続ければ上達しますよ。" },
      { en: "forget", ja: "忘れる", ex: "Don't forget to drink water.", exJa: "お水を飲むのを忘れないでくださいね。" },
      { en: "remember", ja: "覚えている、忘れずに〜する", ex: "Please remember to bring your insurance card.", exJa: "保険証を忘れずにお持ちください。" },
      { en: "interested", ja: "興味がある", ex: "Are you interested in trying acupuncture?", exJa: "鍼を試すことに興味はありますか。" },
      { en: "exercise", ja: "運動、運動する", ex: "Light exercise is good for back pain.", exJa: "軽い運動は腰痛によいです。" },
      { en: "habit", ja: "習慣", ex: "Reading English every day is a good habit.", exJa: "毎日英語を読むのはよい習慣です。" },
      { en: "purpose", ja: "目的", ex: "The purpose of this meeting is to share ideas.", exJa: "この会議の目的はアイデアを共有することです。" },
      { en: "important", ja: "大切な、重要な", ex: "It's important to warm up first.", exJa: "最初に体を温めることが大切です。" },
      { en: "mind", ja: "気にする、嫌がる", ex: "Do you mind waiting a few minutes?", exJa: "数分お待ちいただいてもよろしいですか。" },
      { en: "avoid", ja: "避ける", ex: "Please avoid sitting for a long time.", exJa: "長時間座るのは避けてください。" },
      { en: "continue", ja: "続ける", ex: "Please continue doing this stretch at home.", exJa: "このストレッチを家でも続けてください。" },
      { en: "skill", ja: "技術、スキル", ex: "Listening is an important skill.", exJa: "聞く力は大切なスキルです。" }
    ],
    sentences: [
      { ja: "英語を上達させたいです。", en: "I want to improve my English." },
      { ja: "私は朝歩くことを楽しんでいます。", en: "I enjoy walking in the morning." },
      { ja: "毎日ストレッチすることは大切です。", en: "Stretching every day is important." },
      { ja: "インドの取引先と話すために英語を勉強しています。", en: "I study English to talk with my partners in India." },
      { ja: "ラージさんは日本を訪れることに興味があります。", en: "Raj is interested in visiting Japan." },
      { ja: "お水を飲むのを忘れないでください。", en: "Don't forget to drink water." },
      { ja: "数分お待ちいただいてもよろしいですか。", en: "Do you mind waiting a few minutes?" },
      { ja: "長時間座るのは避けたほうがいいですよ。", en: "You should avoid sitting for a long time." },
      { ja: "私の目標は、1年後に英語で商談をすることです。", en: "My goal is to have business meetings in English in a year." },
      { ja: "健康のために甘い飲み物をやめて、毎朝ストレッチを続けています。", en: "For my health, I stopped drinking sugary drinks, and I keep stretching every morning." }
    ],
    dialogue: {
      title: "英語を学ぶ理由を話す",
      lines: [
        { s: "B", name: "Raj", en: "Akihiro, your English is getting better!", ja: "章弘さん、英語が上達していますね！" },
        { s: "A", name: "Akihiro", en: "Thank you. I practice speaking every morning.", ja: "ありがとうございます。毎朝話す練習をしているんです。" },
        { s: "B", name: "Raj", en: "What's your reason for learning English?", ja: "英語を学ぶ理由は何ですか。" },
        { s: "A", name: "Akihiro", en: "I want to work with you without a translator.", ja: "通訳なしであなたと仕事がしたいんです。" },
        { s: "B", name: "Raj", en: "That's a great goal. Do you enjoy studying?", ja: "すばらしい目標ですね。勉強は楽しいですか。" },
        { s: "A", name: "Akihiro", en: "Yes, I enjoy listening to podcasts. But speaking is still hard.", ja: "はい、ポッドキャストを聞くのが楽しいです。でも話すのはまだ難しいです。" },
        { s: "B", name: "Raj", en: "Don't stop trying. Making mistakes is part of learning.", ja: "挑戦をやめないで。間違えることも学びの一部ですよ。" },
        { s: "A", name: "Akihiro", en: "Thanks. I'm also interested in learning a little Hindi.", ja: "ありがとう。ヒンディー語も少し学ぶことに興味があるんです。" },
        { s: "B", name: "Raj", en: "Really? I'm happy to teach you some words.", ja: "本当に？喜んでいくつか言葉を教えますよ。" },
        { s: "A", name: "Akihiro", en: "Great! I hope to say hello in Hindi next time.", ja: "やった！次はヒンディー語であいさつしたいです。" }
      ]
    },
    writing: "英語を学ぶ目的（to ...）と、好きなこと（I enjoy ...ing）を合わせて4文書こう。",
    speaking: "My goal is to ... で始めて、1年後の目標を30秒で話して録音しよう。"
  },

  // ===== Week 12 =====
  {
    week: 12,
    title: "現在完了で経歴と実績を話す",
    scene: "経歴・実績を話す",
    cefr: "A2",
    goal: "経験・継続・完了の3つの現在完了で、自分の経歴や実績を話せる。",
    grammar: {
      title: "現在完了 have / has ＋過去分詞（経験・継続・完了）",
      points: [
        "現在完了は「have / has ＋過去分詞」で、過去のことが今とつながっているときに使います。主な意味は「経験（〜したことがある）」「継続（ずっと〜している）」「完了（もう〜した）」の3つです。",
        "経験は ever（今までに）、never（一度も〜ない）、before と一緒によく使います。Have you ever been to India? は「インドに行ったことはありますか」。「行ったことがある」は gone ではなく been を使います。",
        "継続は for（〜の間）と since（〜以来）が目印です。I have worked as a therapist for many years. / I've worked in Ehime since 2018. のように、経歴を伝えるのにぴったりです。",
        "完了は already（もう）、just（ちょうど）、yet（疑問文で「もう」、否定文で「まだ」）とセットです。I've just sent the file. / Have you finished yet? のように使います。",
        "日本人がよく間違えるのが、yesterday や last year のような「過去のはっきりした時」と一緒に使ってしまうことです。I have visited India last year. は×で、I visited India last year. が正解です。"
      ],
      examples: [
        { en: "I have been to Delhi once.", ja: "デリーには1度行ったことがあります。" },
        { en: "I've worked as an acupuncturist for many years.", ja: "鍼灸師として長年働いています。" },
        { en: "Have you ever tried acupuncture?", ja: "鍼を試したことはありますか。" },
        { en: "I've just finished the design.", ja: "ちょうどデザインが終わりました。" },
        { en: "I haven't received the contract yet.", ja: "まだ契約書を受け取っていません。" },
        { en: "Raj has lived in Bangalore since 2010.", ja: "ラージさんは2010年からバンガロールに住んでいます。" }
      ],
      tip: "経歴を話すときは I've worked as ... for ○ years. と I've helped many ... . の2つの型を持っておくと、自己紹介がぐっとビジネスらしくなります。"
    },
    vocab: [
      { en: "experience", ja: "経験", ex: "I have a lot of experience in web design.", exJa: "ウェブデザインの経験が豊富です。" },
      { en: "ever", ja: "今までに", ex: "Have you ever been to Japan?", exJa: "日本に行ったことはありますか。" },
      { en: "already", ja: "もう、すでに", ex: "I've already sent the invoice.", exJa: "もう請求書を送りました。" },
      { en: "yet", ja: "（否定）まだ、（疑問）もう", ex: "Has Raj replied yet?", exJa: "ラージさんからもう返事はありましたか。" },
      { en: "just", ja: "ちょうど、たった今", ex: "The patient has just arrived.", exJa: "患者さんがちょうど到着しました。" },
      { en: "since", ja: "〜以来", ex: "I've known Raj since last year.", exJa: "ラージさんとは去年からの知り合いです。" },
      { en: "recently", ja: "最近", ex: "I've recently started a new business.", exJa: "最近、新しい事業を始めました。" },
      { en: "achieve", ja: "達成する", ex: "We've achieved our sales goal this year.", exJa: "今年の売上目標を達成しました。" },
      { en: "complete", ja: "完了する、完成させる", ex: "I've completed the first draft.", exJa: "最初の原稿が完成しました。" },
      { en: "result", ja: "結果", ex: "We've seen good results so far.", exJa: "これまでによい結果が出ています。" },
      { en: "career", ja: "経歴、キャリア", ex: "I've spent my whole career in health care.", exJa: "私はずっと健康分野でキャリアを積んできました。" },
      { en: "license", ja: "免許、資格", ex: "I've had my acupuncture license for many years.", exJa: "鍼灸の免許を取って長い年月がたちます。" },
      { en: "client", ja: "顧客、クライアント", ex: "I've worked with many small clients.", exJa: "多くの小規模のお客様と仕事をしてきました。" },
      { en: "abroad", ja: "海外に、海外で", ex: "Have you ever worked abroad?", exJa: "海外で働いたことはありますか。" },
      { en: "been to", ja: "〜へ行ったことがある", ex: "I've been to India twice.", exJa: "インドに2回行ったことがあります。" },
      { en: "grow", ja: "成長する、育つ", ex: "Our business has grown a lot.", exJa: "私たちの事業は大きく成長しました。" },
      { en: "increase", ja: "増える、増やす", ex: "The number of online bookings has increased.", exJa: "ネット予約の数が増えました。" },
      { en: "success", ja: "成功", ex: "The event was a big success.", exJa: "そのイベントは大成功でした。" },
      { en: "so far", ja: "これまでのところ", ex: "So far, everything has gone well.", exJa: "これまでのところ、すべて順調です。" },
      { en: "decade", ja: "10年間", ex: "I want to keep my clinic going for another decade.", exJa: "これから先の10年も、院を続けていきたいです。" }
    ],
    sentences: [
      { ja: "インドに行ったことがあります。", en: "I have been to India." },
      { ja: "鍼を試したことはありますか。", en: "Have you ever tried acupuncture?" },
      { ja: "私は2018年から愛媛で働いています。", en: "I have worked in Ehime since 2018." },
      { ja: "ちょうどファイルを送りました。", en: "I've just sent the file." },
      { ja: "まだ返事を受け取っていません。", en: "I haven't received a reply yet." },
      { ja: "ラージさんは2015年からその会社で働いています。", en: "Raj has worked for the company since 2015." },
      { ja: "もう資料を読みましたか。", en: "Have you read the document yet?" },
      { ja: "私は海外で働いたことが一度もありません。", en: "I have never worked abroad." },
      { ja: "私は2018年から院を経営していて、これまでに多くの患者さんを施術してきました。", en: "I've run my clinic since 2018, and I've treated many patients so far." },
      { ja: "ホームページを新しくしてから、ネット予約が増えました。", en: "Online bookings have increased since we renewed our website." }
    ],
    dialogue: {
      title: "経歴と実績を聞かれる",
      lines: [
        { s: "B", name: "Mr. Sharma", en: "Mr. Iwata, how long have you worked as an acupuncturist?", ja: "岩田さん、鍼灸師としてどのくらい働いているのですか。" },
        { s: "A", name: "Akihiro", en: "For many years. I've helped many patients with back and shoulder pain.", ja: "長年です。腰や肩の痛みに悩む多くの患者さんを助けてきました。" },
        { s: "B", name: "Mr. Sharma", en: "Impressive. Have you ever made websites for other clinics?", ja: "すごいですね。ほかの院のホームページを作ったことはありますか。" },
        { s: "A", name: "Akihiro", en: "Yes, I have. I've made sites for several clinics and small shops.", ja: "はい、あります。いくつかの院や小さなお店のサイトを作ってきました。" },
        { s: "B", name: "Mr. Sharma", en: "Have you ever worked with a company abroad?", ja: "海外の会社と仕事をしたことはありますか。" },
        { s: "A", name: "Akihiro", en: "Not yet. You're my first partner abroad.", ja: "まだありません。御社が初めての海外の取引先です。" },
        { s: "B", name: "Mr. Sharma", en: "I'm honored. Have you been to Mumbai before?", ja: "光栄です。ムンバイには以前来たことがありますか。" },
        { s: "A", name: "Akihiro", en: "No, I've never been there. But I've just booked my flight!", ja: "いいえ、一度もありません。でもちょうど飛行機を予約したところです！" },
        { s: "B", name: "Mr. Sharma", en: "Wonderful. So far, our work together has gone very well.", ja: "すばらしい。これまでのところ、私たちの仕事はとても順調ですね。" },
        { s: "A", name: "Akihiro", en: "I agree. I've learned a lot from you.", ja: "同感です。あなたからたくさん学びました。" }
      ]
    },
    writing: "自分の経歴を、for / since / ever を使って現在完了で4文書こう。",
    speaking: "How long have you ...? と聞かれた想定で、経歴と実績を30秒で話そう。"
  },

  // ===== Week 13 =====
  {
    week: 13,
    title: "第1期総まとめと受動態の入門",
    scene: "1分間の自己紹介と事業紹介",
    cefr: "A2",
    goal: "これまでの文法を使って、1分間の自己紹介と事業紹介ができる。",
    grammar: {
      title: "受動態 be動詞＋過去分詞（入門）と第1期のまとめ",
      points: [
        "受動態は「be動詞＋過去分詞」で「〜される」を表します。The company was founded in 2010. のように、だれがしたかより「何がどうなったか」を伝えたいときに使います。事業紹介ではとてもよく出てくる形です。",
        "だれがしたかを言いたいときは by をつけます。This website was made by my team. です。ただし、言わなくてもわかるときや重要でないときは by 以下を省くのがふつうです。",
        "時制は be動詞で決まります。is used（使われている）、was made（作られた）、will be launched（公開される）のように、be動詞を変えるだけで現在・過去・未来を表せます。",
        "1分間の紹介は「名前と仕事（be動詞）→ ふだんの仕事（現在形）→ 経歴（現在完了）→ 事業の特徴（受動態・比較）→ これからの目標（未来・不定詞）」の順に組み立てると、13週間の文法をすべて使えます。",
        "長い文を作る必要はありません。短い文をつなげて、最後に I look forward to working with you. と締めくくれば、ビジネスの場で十分に通じる紹介になります。"
      ],
      examples: [
        { en: "The company was founded in 2010.", ja: "その会社は2010年に設立されました。" },
        { en: "Our website is used by many patients.", ja: "当院のホームページは多くの患者さんに使われています。" },
        { en: "This site was designed by my team.", ja: "このサイトは私のチームがデザインしました。" },
        { en: "My clinic is located near the station.", ja: "私の院は駅の近くにあります。" },
        { en: "English is spoken in many countries.", ja: "英語は多くの国で話されています。" },
        { en: "The new page will be launched next month.", ja: "新しいページは来月公開されます。" }
      ],
      tip: "受動態は「主役を入れかえる」形です。「私がサイトを作った」→「サイトは作られた」と、話したいものを主語にしてみましょう。"
    },
    vocab: [
      { en: "introduce", ja: "紹介する", ex: "Let me introduce myself.", exJa: "自己紹介させてください。" },
      { en: "describe", ja: "説明する、描写する", ex: "Could you describe your business?", exJa: "事業について説明していただけますか。" },
      { en: "offer", ja: "提供する、申し出る", ex: "We offer acupuncture and massage.", exJa: "当院では鍼とマッサージを提供しています。" },
      { en: "provide", ja: "提供する", ex: "We provide web design for small businesses.", exJa: "小さな会社向けにウェブデザインを提供しています。" },
      { en: "be located", ja: "〜にある、位置する", ex: "Mr. Sharma's company is located in Mumbai.", exJa: "シャルマさんの会社はムンバイにあります。" },
      { en: "be founded", ja: "設立される", ex: "Raj's company was founded in 2005.", exJa: "ラージさんの会社は2005年に設立されました。" },
      { en: "be known for", ja: "〜で知られている", ex: "Ehime is known for its oranges.", exJa: "愛媛はみかんで知られています。" },
      { en: "establish", ja: "設立する、築く", ex: "We want to establish a long-term relationship.", exJa: "長期的な関係を築きたいです。" },
      { en: "support", ja: "支える、支援", ex: "Thank you for your support.", exJa: "ご支援ありがとうございます。" },
      { en: "recommend", ja: "すすめる", ex: "I recommend this stretch to office workers.", exJa: "会社員の方にこのストレッチをおすすめします。" },
      { en: "global", ja: "世界的な", ex: "We want to grow into a global business.", exJa: "世界的な事業へ成長したいです。" },
      { en: "local", ja: "地元の、地域の", ex: "Most of our patients are local people.", exJa: "患者さんの多くは地元の方です。" },
      { en: "mission", ja: "使命、ミッション", ex: "Our mission is to help people live healthy lives.", exJa: "私たちの使命は人々の健康な暮らしを支えることです。" },
      { en: "value", ja: "価値、大切にする", ex: "We value honest communication.", exJa: "私たちは誠実なコミュニケーションを大切にしています。" },
      { en: "trust", ja: "信頼、信頼する", ex: "Trust is the most important thing in business.", exJa: "ビジネスでは信頼がいちばん大切です。" },
      { en: "brand", ja: "ブランド", ex: "We want to build a strong brand in India.", exJa: "インドで強いブランドを築きたいです。" },
      { en: "contact", ja: "連絡する、連絡先", ex: "Please contact me by email.", exJa: "メールでご連絡ください。" },
      { en: "look forward to", ja: "〜を楽しみにする", ex: "I look forward to working with you.", exJa: "ご一緒にお仕事できるのを楽しみにしています。" },
      { en: "opportunity", ja: "機会", ex: "Thank you for this opportunity.", exJa: "この機会をいただきありがとうございます。" },
      { en: "community", ja: "地域社会、コミュニティ", ex: "Our clinic is part of the local community.", exJa: "当院は地域社会の一員です。" }
    ],
    sentences: [
      { ja: "自己紹介させてください。", en: "Let me introduce myself." },
      { ja: "私の院は駅の近くにあります。", en: "My clinic is located near the station." },
      { ja: "このサイトは私のチームが作りました。（受動態で）", en: "This site was made by my team." },
      { ja: "英語は多くの国で話されています。", en: "English is spoken in many countries." },
      { ja: "当院では鍼と手技の施術を提供しています。", en: "We offer acupuncture and manual therapy." },
      { ja: "その会社は2010年に設立されました。", en: "The company was founded in 2010." },
      { ja: "当院のホームページは多くの患者さんに使われています。", en: "Our website is used by many patients." },
      { ja: "新しいページは来月公開されます。", en: "The new page will be launched next month." },
      { ja: "私たちの使命は、地域の人々が健康に暮らせるよう支えることです。", en: "Our mission is to help local people live healthy lives." },
      { ja: "私は長年鍼灸師として働いてきましたが、これからはインドの皆さんとウェブの仕事もしたいと思っています。", en: "I have worked as an acupuncturist for many years, and now I want to do web projects with people in India, too." }
    ],
    dialogue: {
      title: "1分間の自己紹介と事業紹介",
      lines: [
        { s: "B", name: "Mr. Sharma", en: "Mr. Iwata, could you introduce yourself and your business?", ja: "岩田さん、ご自身と事業を紹介していただけますか。" },
        { s: "A", name: "Akihiro", en: "Of course. My name is Akihiro Iwata. I'm an acupuncturist from Yokohama, Japan.", ja: "もちろんです。岩田章弘と申します。日本の横浜出身の鍼灸師です。" },
        { s: "A", name: "Akihiro", en: "I run an acupuncture and bone-setting clinic. Many local patients visit us for back and shoulder pain.", ja: "鍼灸整骨院を経営しています。腰や肩の痛みで、多くの地元の患者さんが来院されます。" },
        { s: "A", name: "Akihiro", en: "I have worked in health care for many years. I also make websites for small businesses.", ja: "長年、健康の分野で働いてきました。小さな会社向けのホームページ制作もしています。" },
        { s: "B", name: "Mr. Sharma", en: "Two businesses! Which one is bigger?", ja: "事業が2つも！どちらが大きいのですか。" },
        { s: "A", name: "Akihiro", en: "The clinic is bigger now. But my web business is growing fast.", ja: "今は院のほうが大きいです。でもウェブの事業は急成長しています。" },
        { s: "B", name: "Mr. Sharma", en: "I see. What are your plans with India?", ja: "なるほど。インドとはどんな計画がありますか。" },
        { s: "A", name: "Akihiro", en: "I'm going to create Japanese websites for Indian companies. My goal is to build trust between our two countries.", ja: "インドの企業向けに日本語のホームページを作る予定です。私の目標は、両国の間に信頼を築くことです。" },
        { s: "B", name: "Mr. Sharma", en: "That's a wonderful mission. We are happy to support you.", ja: "すばらしい使命ですね。喜んで支援します。" },
        { s: "A", name: "Akihiro", en: "Thank you for this opportunity. I look forward to working with you.", ja: "この機会をいただきありがとうございます。ご一緒にお仕事できるのを楽しみにしています。" }
      ]
    },
    writing: "1分間の自己紹介・事業紹介の原稿を、be動詞・現在完了・受動態・be going to を使って6〜8文で書こう。",
    speaking: "原稿を見ずに1分間の自己紹介と事業紹介を録音し、Week 1 の録音と聞き比べよう。"
  }
]);
