/* 会話のキャッチボール
   相手の質問に「答える（a）→ ひとこと足す（add）→ 聞き返す（back）」の3つで返す練習。
   who＝相手（インドの方。男性 Raj / Mr. Sharma / Arjun、女性 Priya / Neha / Anita）。
   lv1＝A1〜A2、lv2＝A2〜B1、lv3＝B1、lv4＝B1+〜B2 */
window.CATCH=[
 // ---- lv1：かんたんな雑談（A1〜A2）----
 {id:1,lv:1,topic:"雑談",who:"Raj",q:"How was your weekend?",qja:"週末はどうでしたか？",ans:[
  {t:"a",en:"It was good.",ja:"よかったです。"},
  {t:"add",en:"I went to Matsuyama with my family.",ja:"家族と松山に行きました。"},
  {t:"back",en:"How about you?",ja:"あなたはどうでしたか？"}],
  tip:"Matsuyama のように地名を足すと、話が広がります。"},
 {id:2,lv:1,topic:"雑談",who:"Priya",q:"How's the weather in Ozu today?",qja:"今日の大洲の天気はどうですか？",ans:[
  {t:"a",en:"It's sunny and warm.",ja:"晴れていて、あたたかいです。"},
  {t:"add",en:"It's a nice day for a walk by the river.",ja:"川沿いを歩くのにいい日です。"},
  {t:"back",en:"What's the weather like in Delhi now?",ja:"今、デリーの天気はどうですか？"}],
  tip:"天気の話は、相手の町の天気を聞き返すと続きます。"},
 {id:3,lv:1,topic:"食べ物",who:"Arjun",q:"Do you like Indian food?",qja:"インド料理は好きですか？",ans:[
  {t:"a",en:"Yes, I love it.",ja:"はい、大好きです。"},
  {t:"add",en:"Butter chicken is my favorite.",ja:"バターチキンがいちばん好きです。"},
  {t:"back",en:"What's your favorite Japanese food?",ja:"好きな日本の料理は何ですか？"}],
  tip:"好きな料理の名前を1つ言うと、相手もうれしくなります。"},
 {id:4,lv:1,topic:"雑談",who:"Neha",q:"Where are you from?",qja:"どちらのご出身ですか？",ans:[
  {t:"a",en:"I'm from Yokohama.",ja:"横浜出身です。"},
  {t:"add",en:"Now I live in Ozu, in Ehime.",ja:"今は愛媛の大洲に住んでいます。"},
  {t:"back",en:"Which part of India are you from?",ja:"インドのどちらのご出身ですか？"}],
  tip:"生まれた町と今の町の両方を言うと、話のきっかけが増えます。"},
 {id:5,lv:1,topic:"仕事",who:"Mr. Sharma",q:"What do you do?",qja:"お仕事は何をされていますか？",ans:[
  {t:"a",en:"I'm an acupuncturist.",ja:"鍼灸師です。"},
  {t:"add",en:"I run a clinic in Ozu, Ehime.",ja:"愛媛の大洲で院をしています。"},
  {t:"back",en:"What do you do?",ja:"あなたのお仕事は何ですか？"}],
  tip:"What do you do? は「仕事は？」の意味。同じ質問を返すだけで会話になります。"},
 {id:6,lv:1,topic:"雑談",who:"Anita",q:"What do you do in your free time?",qja:"ひまなときは何をしますか？",ans:[
  {t:"a",en:"I like walking.",ja:"散歩が好きです。"},
  {t:"add",en:"It helps me relax after work.",ja:"仕事のあとに気持ちが楽になります。"},
  {t:"back",en:"Do you have any hobbies?",ja:"何か趣味はありますか？"}],
  tip:"好きなことに「なぜ好きか」を1つ足すと、話がふくらみます。"},
 {id:7,lv:1,topic:"雑談",who:"Priya",q:"Does your family have a business?",qja:"ご家族は商売をされていますか？",ans:[
  {t:"a",en:"Yes, they do.",ja:"はい、しています。"},
  {t:"add",en:"They run a sake shop called Odani Sake Ten.",ja:"小谷酒店という酒屋をしています。"},
  {t:"back",en:"Does your family have a business too?",ja:"あなたのご家族も商売をされていますか？"}],
  tip:"お店の名前を言うと、覚えてもらいやすくなります。"},
 {id:8,lv:1,topic:"食べ物",who:"Raj",q:"What did you have for lunch?",qja:"お昼に何を食べましたか？",ans:[
  {t:"a",en:"I had udon.",ja:"うどんを食べました。"},
  {t:"add",en:"There's a good udon shop near my clinic.",ja:"院の近くにおいしいうどん屋があります。"},
  {t:"back",en:"What did you have?",ja:"あなたは何を食べましたか？"}],
  tip:"食べたものは過去の形で。had を使えば、ほとんど言えます。"},
 {id:9,lv:1,topic:"雑談",who:"Neha",q:"Are you busy these days?",qja:"最近いそがしいですか？",ans:[
  {t:"a",en:"Yes, a little.",ja:"はい、少し。"},
  {t:"add",en:"I'm busy with my clinic and my English study.",ja:"院の仕事と英語の勉強でいそがしいです。"},
  {t:"back",en:"How about you?",ja:"あなたはどうですか？"}],
  tip:"「何で」いそがしいのかを言うと、相手が質問しやすくなります。"},
 {id:10,lv:1,topic:"雑談",who:"Arjun",q:"Do you like sports?",qja:"スポーツは好きですか？",ans:[
  {t:"a",en:"Yes, very much.",ja:"はい、とても。"},
  {t:"add",en:"I used to work as an athletic trainer for sports teams.",ja:"以前、スポーツチームのアスレティックトレーナーをしていました。"},
  {t:"back",en:"What sports do you like?",ja:"どんなスポーツが好きですか？"}],
  tip:"used to は「以前は〜していた」。昔の仕事を話すときに便利です。"},
 {id:11,lv:1,topic:"雑談",who:"Priya",q:"What time do you get up?",qja:"何時に起きますか？",ans:[
  {t:"a",en:"I get up at six.",ja:"6時に起きます。"},
  {t:"add",en:"I study English for an hour before work.",ja:"仕事の前に1時間、英語を勉強します。"},
  {t:"back",en:"Are you a morning person?",ja:"あなたは朝型ですか？"}],
  tip:"時間は自分の本当の時間に入れかえて練習しましょう。"},
 {id:12,lv:1,topic:"日本",who:"Mr. Sharma",q:"Is it cold in Japan now?",qja:"今、日本は寒いですか？",ans:[
  {t:"a",en:"Yes, it's getting cold.",ja:"はい、寒くなってきました。"},
  {t:"add",en:"It's November, so autumn is ending.",ja:"11月なので、秋が終わるところです。"},
  {t:"back",en:"Does it get cold in India in winter?",ja:"インドは冬に寒くなりますか？"}],
  tip:"getting cold は「だんだん寒くなる」。季節の変わり目に使えます。"},
 {id:13,lv:1,topic:"食べ物",who:"Anita",q:"Can you eat spicy food?",qja:"辛いものは食べられますか？",ans:[
  {t:"a",en:"Yes, a little.",ja:"はい、少しなら。"},
  {t:"add",en:"Indian curry is spicy, but I like it.",ja:"インドのカレーは辛いけれど、好きです。"},
  {t:"back",en:"Do you like Japanese food?",ja:"日本の料理は好きですか？"}],
  tip:"but を使うと「〜だけど好き」と気持ちを正直に言えます。"},
 {id:14,lv:1,topic:"雑談",who:"Raj",q:"How are you today?",qja:"今日の調子はどうですか？",ans:[
  {t:"a",en:"I'm fine, thanks.",ja:"元気です、ありがとう。"},
  {t:"add",en:"I had a good day at the clinic.",ja:"院でいい一日でした。"},
  {t:"back",en:"How was your day?",ja:"あなたの一日はどうでしたか？"}],
  tip:"I'm fine. だけで終わらせず、今日あったことを1つ足しましょう。"},
 {id:15,lv:1,topic:"仕事",who:"Neha",q:"Where is your clinic?",qja:"院はどこにありますか？",ans:[
  {t:"a",en:"It's in Ozu, Ehime.",ja:"愛媛の大洲にあります。"},
  {t:"add",en:"It's near Iyo-Ozu Station.",ja:"伊予大洲駅の近くです。"},
  {t:"back",en:"Have you ever been to Shikoku?",ja:"四国に行ったことはありますか？"}],
  tip:"Have you ever been to ...? で、相手の旅の話を引き出せます。"},
 {id:16,lv:1,topic:"雑談",who:"Arjun",q:"Why are you learning English?",qja:"なぜ英語を勉強しているのですか？",ans:[
  {t:"a",en:"For my work.",ja:"仕事のためです。"},
  {t:"add",en:"I work with partners in India.",ja:"インドのパートナーと仕事をしています。"},
  {t:"back",en:"Do you speak any Japanese?",ja:"日本語は少し話せますか？"}],
  tip:"理由は For ＋ことば で短く言えます。そのあとに説明を足します。"},
 {id:17,lv:1,topic:"雑談",who:"Priya",q:"Do you like music?",qja:"音楽は好きですか？",ans:[
  {t:"a",en:"Yes, I do.",ja:"はい、好きです。"},
  {t:"add",en:"I often listen to music in the car.",ja:"よく車の中で音楽を聞きます。"},
  {t:"back",en:"What kind of music do you like?",ja:"どんな音楽が好きですか？"}],
  tip:"What kind of ...? は「どんな種類の？」。好みを聞くときの定番です。"},
 {id:18,lv:1,topic:"食べ物",who:"Mr. Sharma",q:"Do you drink coffee or tea?",qja:"コーヒーと紅茶、どちらを飲みますか？",ans:[
  {t:"a",en:"I drink coffee.",ja:"コーヒーを飲みます。"},
  {t:"add",en:"I have a cup every morning.",ja:"毎朝1杯飲みます。"},
  {t:"back",en:"Do you prefer chai?",ja:"あなたはチャイのほうが好きですか？"}],
  tip:"インドの方には chai の話をすると、ぐっと盛り上がります。"},
 {id:19,lv:1,topic:"雑談",who:"Anita",q:"What did you do yesterday?",qja:"きのうは何をしましたか？",ans:[
  {t:"a",en:"I worked at my clinic.",ja:"院で働きました。"},
  {t:"add",en:"We had many patients, so it was busy.",ja:"患者さんが多くて、いそがしかったです。"},
  {t:"back",en:"What did you do yesterday?",ja:"あなたはきのう何をしましたか？"}],
  tip:"so を使うと「だから〜」と、理由と結果をつなげられます。"},
 {id:20,lv:1,topic:"日本",who:"Raj",q:"What's your favorite season?",qja:"好きな季節はいつですか？",ans:[
  {t:"a",en:"I like autumn.",ja:"秋が好きです。"},
  {t:"add",en:"The weather is cool and the food is good.",ja:"すずしくて、食べものがおいしいからです。"},
  {t:"back",en:"What's your favorite season in India?",ja:"インドでいちばん好きな季節はいつですか？"}],
  tip:"in India をつけて聞き返すと、相手の国の話が聞けます。"},
 {id:21,lv:1,topic:"雑談",who:"Neha",q:"Do you study English every day?",qja:"毎日英語を勉強していますか？",ans:[
  {t:"a",en:"Yes, I do.",ja:"はい、しています。"},
  {t:"add",en:"I use an app on my phone.",ja:"スマホのアプリを使っています。"},
  {t:"back",en:"Are you learning any languages?",ja:"あなたは何か言葉を勉強していますか？"}],
  tip:"勉強のやり方を1つ言うと、相手もおすすめを教えてくれます。"},
 {id:22,lv:1,topic:"食べ物",who:"Arjun",q:"Do you cook?",qja:"料理はしますか？",ans:[
  {t:"a",en:"Sometimes.",ja:"ときどきします。"},
  {t:"add",en:"I can make simple Japanese dishes.",ja:"かんたんな日本の料理なら作れます。"},
  {t:"back",en:"Can you cook Indian food?",ja:"インド料理は作れますか？"}],
  tip:"Sometimes. の1語でも答えになります。そのあと、できることを足しましょう。"},
 {id:23,lv:1,topic:"雑談",who:"Priya",q:"Do you like traveling?",qja:"旅行は好きですか？",ans:[
  {t:"a",en:"Yes, I love it.",ja:"はい、大好きです。"},
  {t:"add",en:"I visit India regularly for work.",ja:"仕事で定期的にインドに行きます。"},
  {t:"back",en:"Where do you like to travel?",ja:"どこに旅行するのが好きですか？"}],
  tip:"regularly は「定期的に」。インドとのつながりを伝える大事な言葉です。"},
 {id:24,lv:1,topic:"仕事",who:"Mr. Sharma",q:"How many staff do you have?",qja:"スタッフは何人いますか？",ans:[
  {t:"a",en:"Four.",ja:"4人です。"},
  {t:"add",en:"They're all kind and hardworking.",ja:"みんな、やさしくてよく働きます。"},
  {t:"back",en:"How many people work in your company?",ja:"あなたの会社では何人働いていますか？"}],
  tip:"数を答えたら、どんな人たちかを足すと、あたたかい印象になります。"},
 {id:25,lv:1,topic:"雑談",who:"Anita",q:"What are your plans for tomorrow?",qja:"あしたの予定は何ですか？",ans:[
  {t:"a",en:"I'll work at the clinic.",ja:"院で働きます。"},
  {t:"add",en:"In the evening, I'll study English.",ja:"夜は英語を勉強します。"},
  {t:"back",en:"Do you have any plans for tomorrow?",ja:"あしたは何か予定がありますか？"}],
  tip:"あしたのことは I'll ＋動詞 で言えます。"},

 // ---- lv2：院・日本と愛媛・旅行・インド・健康（A2〜B1）----
 {id:26,lv:2,topic:"院",who:"Raj",q:"What kind of clinic do you run?",qja:"どんな院をされているのですか？",ans:[
  {t:"a",en:"An acupuncture and bone-setting clinic.",ja:"鍼灸と整骨の院です。"},
  {t:"add",en:"We treat injuries, back pain, and posture problems.",ja:"けが、腰の痛み、姿勢の悩みをみています。"},
  {t:"back",en:"Have you ever tried acupuncture?",ja:"鍼を受けたことはありますか？"}],
  tip:"院の説明は「何をみるか」を3つ並べると、わかりやすくなります。"},
 {id:27,lv:2,topic:"院",who:"Priya",q:"When did you open your clinic?",qja:"院はいつ開いたのですか？",ans:[
  {t:"a",en:"In October 2018.",ja:"2018年10月です。"},
  {t:"add",en:"Before that, I worked as an athletic trainer.",ja:"その前は、アスレティックトレーナーをしていました。"},
  {t:"back",en:"How long have you been in your job?",ja:"今のお仕事はどれくらいですか？"}],
  tip:"年と月は In October 2018. のように In を使います。"},
 {id:28,lv:2,topic:"院",who:"Neha",q:"What kind of patients come to your clinic?",qja:"どんな患者さんが院に来ますか？",ans:[
  {t:"a",en:"All kinds of people.",ja:"いろいろな方が来ます。"},
  {t:"add",en:"Some have sports injuries, and some are new mothers.",ja:"スポーツのけがの方もいれば、産後のお母さんもいます。"},
  {t:"back",en:"Do you have any pain in your body?",ja:"どこか体に痛みはありますか？"}],
  tip:"Some ..., and some ... で「〜な人もいれば、〜な人もいる」と言えます。"},
 {id:29,lv:2,topic:"健康",who:"Arjun",q:"Does acupuncture hurt?",qja:"鍼は痛いですか？",ans:[
  {t:"a",en:"Not really.",ja:"それほどでもないです。"},
  {t:"add",en:"The needles are very thin, so most people feel almost nothing.",ja:"鍼はとても細いので、ほとんどの人はあまり感じません。"},
  {t:"back",en:"Would you like to try it someday?",ja:"いつか受けてみたいですか？"}],
  tip:"Not really. は、やわらかく「いいえ」と言うときに便利です。"},
 {id:30,lv:2,topic:"日本",who:"Mr. Sharma",q:"What is Ehime famous for?",qja:"愛媛は何で有名ですか？",ans:[
  {t:"a",en:"Mikan oranges.",ja:"みかんです。"},
  {t:"add",en:"It's also famous for Dogo Onsen, an old hot spring in Matsuyama.",ja:"松山の古い温泉、道後温泉でも有名です。"},
  {t:"back",en:"What is your city famous for?",ja:"あなたの町は何で有名ですか？"}],
  tip:"日本の言葉は、an old hot spring のように短い説明をつけると伝わります。"},
 {id:31,lv:2,topic:"日本",who:"Anita",q:"What's Ozu like?",qja:"大洲はどんなところですか？",ans:[
  {t:"a",en:"It's a quiet, old town.",ja:"静かで古い町です。"},
  {t:"add",en:"There's a beautiful castle and a river.",ja:"きれいなお城と川があります。"},
  {t:"back",en:"Do you prefer small towns or big cities?",ja:"小さな町と大きな都市、どちらが好きですか？"}],
  tip:"What's ... like? は「〜はどんな感じ？」。形容詞を2つ並べて答えましょう。"},
 {id:32,lv:2,topic:"インド",who:"Raj",q:"What do you think of India?",qja:"インドのことをどう思いますか？",ans:[
  {t:"a",en:"I love it.",ja:"大好きです。"},
  {t:"add",en:"The people are warm and the food is great.",ja:"人があたたかくて、食べものがおいしいです。"},
  {t:"back",en:"Which part of India do you recommend?",ja:"インドのどこがおすすめですか？"}],
  tip:"感想は「人」と「食べもの」の2つを言うと、相手が喜びます。"},
 {id:33,lv:2,topic:"インド",who:"Priya",q:"What's your impression of Indian people?",qja:"インドの人の印象はどうですか？",ans:[
  {t:"a",en:"They're very friendly.",ja:"とても親しみやすいです。"},
  {t:"add",en:"They always welcome me warmly.",ja:"いつもあたたかく迎えてくれます。"},
  {t:"back",en:"What's your impression of Japanese people?",ja:"日本の人の印象はどうですか？"}],
  tip:"同じ質問を「日本」に変えて返すと、自然に聞き返せます。"},
 {id:34,lv:2,topic:"インド",who:"Neha",q:"How often do you come to India?",qja:"インドにはどれくらいの頻度で来ますか？",ans:[
  {t:"a",en:"Regularly.",ja:"定期的に来ています。"},
  {t:"add",en:"I come for meetings with my partners here.",ja:"こちらのパートナーとの打ち合わせで来ます。"},
  {t:"back",en:"Do you travel often for work?",ja:"お仕事でよく出張しますか？"}],
  tip:"How often ...? には、回数か Regularly. のような言葉で答えます。"},
 {id:35,lv:2,topic:"健康",who:"Arjun",q:"How do you stay healthy?",qja:"健康のために何をしていますか？",ans:[
  {t:"a",en:"I walk a lot.",ja:"よく歩きます。"},
  {t:"add",en:"I also try to sleep well and eat vegetables.",ja:"よく寝て、野菜を食べるようにもしています。"},
  {t:"back",en:"What do you do to stay healthy?",ja:"あなたは健康のために何をしていますか？"}],
  tip:"try to ＋動詞 で「〜するようにしている」と言えます。"},
 {id:36,lv:2,topic:"仕事",who:"Mr. Sharma",q:"What did you do before you opened your clinic?",qja:"院を開く前は何をしていましたか？",ans:[
  {t:"a",en:"I was an athletic trainer.",ja:"アスレティックトレーナーでした。"},
  {t:"add",en:"I worked with high school, university, and professional teams.",ja:"高校、大学、プロのチームで働きました。"},
  {t:"back",en:"What did you do before your current job?",ja:"今のお仕事の前は何をしていましたか？"}],
  tip:"経歴は「どんなチームと」を足すと、信頼につながります。"},
 {id:37,lv:2,topic:"健康",who:"Anita",q:"I have back pain. What should I do?",qja:"腰が痛いんです。どうしたらいいですか？",ans:[
  {t:"a",en:"Try some light stretching.",ja:"軽いストレッチをしてみてください。"},
  {t:"add",en:"Sitting too long can make it worse.",ja:"長く座りすぎると、悪くなることがあります。"},
  {t:"back",en:"How long have you had the pain?",ja:"痛みはいつからありますか？"}],
  tip:"アドバイスは Try ＋〜ing で、やさしく言えます。"},
 {id:38,lv:2,topic:"日本",who:"Raj",q:"What's the best time to visit Japan?",qja:"日本に行くならいつがいちばんいいですか？",ans:[
  {t:"a",en:"Spring or autumn.",ja:"春か秋です。"},
  {t:"add",en:"In spring, you can see cherry blossoms everywhere.",ja:"春は、あちこちで桜が見られます。"},
  {t:"back",en:"Have you ever seen cherry blossoms?",ja:"桜を見たことはありますか？"}],
  tip:"おすすめには「そこで何ができるか」を足すと、行きたくなります。"},
 {id:39,lv:2,topic:"インド",who:"Priya",q:"What Indian food do you like?",qja:"どんなインド料理が好きですか？",ans:[
  {t:"a",en:"I like dosa.",ja:"ドーサが好きです。"},
  {t:"add",en:"It's light, and I love the coconut chutney.",ja:"軽くて、ココナッツのチャツネが大好きです。"},
  {t:"back",en:"Is there a good dosa place near here?",ja:"この近くにおいしいドーサの店はありますか？"}],
  tip:"お店を聞き返すと、一緒に行く話につながることもあります。"},
 {id:40,lv:2,topic:"インド",who:"Neha",q:"How was your flight from Japan?",qja:"日本からの飛行機はどうでしたか？",ans:[
  {t:"a",en:"It was long but fine.",ja:"長かったけれど、大丈夫でした。"},
  {t:"add",en:"I slept for a few hours on the plane.",ja:"機内で数時間ねむりました。"},
  {t:"back",en:"How has your week been?",ja:"あなたの今週はどうでしたか？"}],
  tip:"着いてすぐの雑談は、短く明るく答えるのがコツです。"},
 {id:41,lv:2,topic:"院",who:"Arjun",q:"What's a typical day like at your clinic?",qja:"院のふだんの一日はどんな感じですか？",ans:[
  {t:"a",en:"It's busy.",ja:"いそがしいです。"},
  {t:"add",en:"We see patients from morning until evening.",ja:"朝から夕方まで患者さんをみています。"},
  {t:"back",en:"What's a typical day like for you?",ja:"あなたのふだんの一日はどんな感じですか？"}],
  tip:"from 〜 until 〜 で「〜から〜まで」と言えます。"},
 {id:42,lv:2,topic:"日本",who:"Mr. Sharma",q:"Is Ehime far from Tokyo?",qja:"愛媛は東京から遠いですか？",ans:[
  {t:"a",en:"Yes, quite far.",ja:"はい、けっこう遠いです。"},
  {t:"add",en:"It takes about an hour and a half by plane.",ja:"飛行機で1時間半くらいかかります。"},
  {t:"back",en:"How far is your office from the airport?",ja:"会社は空港からどれくらいですか？"}],
  tip:"It takes ＋時間 で「〜かかる」。移動の話でよく使います。"},
 {id:43,lv:2,topic:"健康",who:"Anita",q:"Do you have any tips for good sleep?",qja:"よく眠るコツはありますか？",ans:[
  {t:"a",en:"Don't use your phone in bed.",ja:"ふとんでスマホを使わないことです。"},
  {t:"add",en:"Bright screens make it harder to fall asleep.",ja:"明るい画面は、眠りにくくします。"},
  {t:"back",en:"How many hours do you usually sleep?",ja:"ふだん何時間くらい寝ますか？"}],
  tip:"コツを言ったら、理由を1つ足すと説得力が出ます。"},
 {id:44,lv:2,topic:"院",who:"Raj",q:"Do your patients speak English?",qja:"患者さんは英語を話しますか？",ans:[
  {t:"a",en:"Not many.",ja:"あまり話しません。"},
  {t:"add",en:"Most of them are local people in Ozu.",ja:"ほとんどが大洲の地元の方です。"},
  {t:"back",en:"Do many foreign people visit your city?",ja:"あなたの町には外国の人がよく来ますか？"}],
  tip:"Most of them で「そのほとんどが」。人数をぼかして言えます。"},
 {id:45,lv:2,topic:"日本",who:"Priya",q:"What do Japanese people do for New Year?",qja:"日本の人はお正月に何をしますか？",ans:[
  {t:"a",en:"We eat special food with family.",ja:"家族と特別な料理を食べます。"},
  {t:"add",en:"Many people visit a shrine to pray for a good year.",ja:"多くの人が神社に行って、いい一年をお祈りします。"},
  {t:"back",en:"How do you celebrate Diwali?",ja:"ディワリはどうやってお祝いしますか？"}],
  tip:"日本の行事を話したら、インドのお祭りを聞き返すと盛り上がります。"},
 {id:46,lv:2,topic:"インド",who:"Neha",q:"What surprised you in India?",qja:"インドで何におどろきましたか？",ans:[
  {t:"a",en:"The traffic.",ja:"交通です。"},
  {t:"add",en:"There are so many cars and bikes on the road.",ja:"道に車とバイクがとても多いです。"},
  {t:"back",en:"What surprised you about Japan?",ja:"日本の何におどろきましたか？"}],
  tip:"おどろいたことは、笑顔で言えばやわらかく伝わります。"},
 {id:47,lv:2,topic:"健康",who:"Arjun",q:"What's good for stiff shoulders?",qja:"肩こりには何がいいですか？",ans:[
  {t:"a",en:"Moving them often.",ja:"よく動かすことです。"},
  {t:"add",en:"Try rolling your shoulders every hour at your desk.",ja:"机で1時間ごとに肩を回してみてください。"},
  {t:"back",en:"Do you work at a computer all day?",ja:"一日中パソコンで仕事をしていますか？"}],
  tip:"stiff shoulders は「肩こり」。仕事柄よく聞かれるので覚えておきましょう。"},
 {id:48,lv:2,topic:"仕事",who:"Mr. Sharma",q:"Are you a doctor?",qja:"お医者さんですか？",ans:[
  {t:"a",en:"Not exactly.",ja:"少しちがいます。"},
  {t:"add",en:"I'm a licensed acupuncturist and judo therapist in Japan.",ja:"日本の国家資格をもつ鍼灸師と柔道整復師です。"},
  {t:"back",en:"Do you have acupuncture in India?",ja:"インドにも鍼はありますか？"}],
  tip:"Not exactly. は「ちょっとちがう」。そのあと正しく説明します。"},
 {id:49,lv:2,topic:"日本",who:"Anita",q:"Can you recommend a place to visit in Shikoku?",qja:"四国でおすすめの場所はありますか？",ans:[
  {t:"a",en:"Dogo Onsen in Matsuyama.",ja:"松山の道後温泉です。"},
  {t:"add",en:"It's one of the oldest hot springs in Japan.",ja:"日本でいちばん古い温泉の一つです。"},
  {t:"back",en:"Have you ever been to a hot spring?",ja:"温泉に入ったことはありますか？"}],
  tip:"one of the ＋いちばん〜 で「最も〜なものの一つ」と言えます。"},
 {id:50,lv:2,topic:"インド",who:"Raj",q:"Do you like Indian tea?",qja:"インドのお茶は好きですか？",ans:[
  {t:"a",en:"Yes, I love masala chai.",ja:"はい、マサラチャイが大好きです。"},
  {t:"add",en:"It's sweet and spicy, and it warms me up.",ja:"甘くてスパイスがきいていて、体があたたまります。"},
  {t:"back",en:"How do you make chai at home?",ja:"家ではどうやってチャイを作りますか？"}],
  tip:"How do you ...? で作り方を聞くと、相手がたくさん話してくれます。"},

 // ---- lv3：ビジネスの雑談・提携・おもてなし・予約システム・日本酒（B1）----
 {id:51,lv:3,topic:"ビジネス",who:"Mr. Sharma",q:"What brings you to India this time?",qja:"今回はどんなご用でインドに？",ans:[
  {t:"a",en:"Business meetings.",ja:"仕事の打ち合わせです。"},
  {t:"add",en:"I'm meeting partners about hospitality consulting.",ja:"おもてなしのコンサルの件で、パートナーと会います。"},
  {t:"back",en:"What are you working on these days?",ja:"最近はどんなお仕事をされていますか？"}],
  tip:"What brings you ...? は「何の用で？」。ていねいな聞き方です。"},
 {id:52,lv:3,topic:"ビジネス",who:"Priya",q:"What is hospitality consulting?",qja:"おもてなしのコンサルとは何ですか？",ans:[
  {t:"a",en:"I help businesses welcome guests the Japanese way.",ja:"会社が日本のやり方でお客様を迎えるお手伝いです。"},
  {t:"add",en:"I work with hotels, restaurants, and clinics in India.",ja:"インドのホテル、レストラン、クリニックと仕事をしています。"},
  {t:"back",en:"Does your company have Japanese guests?",ja:"あなたの会社には日本のお客様が来ますか？"}],
  tip:"自分の仕事は I help ＋だれ＋何をする の形で、一文で言えるようにしましょう。"},
 {id:53,lv:3,topic:"ビジネス",who:"Raj",q:"What does omotenashi mean?",qja:"「おもてなし」とはどういう意味ですか？",ans:[
  {t:"a",en:"It's Japanese hospitality.",ja:"日本のおもてなしの心です。"},
  {t:"add",en:"It means thinking about guests' needs before they ask.",ja:"お客様が言う前に、必要なことを考えることです。"},
  {t:"back",en:"How do Indian hotels welcome their guests?",ja:"インドのホテルはお客様をどう迎えますか？"}],
  tip:"日本の言葉は、まず短く言いかえ、次に It means ... で説明します。"},
 {id:54,lv:3,topic:"ビジネス",who:"Arjun",q:"What do you do for your partner clinics?",qja:"提携院には何をしているのですか？",ans:[
  {t:"a",en:"I give them management advice.",ja:"経営のアドバイスをしています。"},
  {t:"add",en:"I also provide a booking and customer management system.",ja:"予約と顧客管理のしくみも提供しています。"},
  {t:"back",en:"What booking system do you use?",ja:"どんな予約のしくみを使っていますか？"}],
  tip:"also を入れると「それに加えて」と、もう一つの仕事を足せます。"},
 {id:55,lv:3,topic:"ビジネス",who:"Neha",q:"Why did you make your own booking system?",qja:"なぜ自分で予約のしくみを作ったのですか？",ans:[
  {t:"a",en:"Because I needed better data.",ja:"もっといいデータが必要だったからです。"},
  {t:"add",en:"I check sales, visits, and return rates every day.",ja:"売上、来院数、再来院率を毎日見ています。"},
  {t:"back",en:"How do you manage your customer data?",ja:"お客様のデータはどう管理していますか？"}],
  tip:"Why には Because で答え、そのあと具体的な習慣を足します。"},
 {id:56,lv:3,topic:"日本酒",who:"Mr. Sharma",q:"Can you tell me about Odani Sake Ten?",qja:"小谷酒店について教えてください。",ans:[
  {t:"a",en:"It's my family's sake shop.",ja:"家族の酒屋です。"},
  {t:"add",en:"It was founded in 1957, and I handle international affairs.",ja:"1957年創業で、私は国際担当です。"},
  {t:"back",en:"Have you ever tried Japanese sake?",ja:"日本酒を飲んだことはありますか？"}],
  tip:"was founded in ＋年 で「〜年創業」。歴史は信頼につながります。"},
 {id:57,lv:3,topic:"日本酒",who:"Anita",q:"What's the difference between sake and wine?",qja:"日本酒とワインはどうちがうのですか？",ans:[
  {t:"a",en:"Sake is made from rice.",ja:"日本酒はお米から作ります。"},
  {t:"add",en:"Wine is made from grapes, so the taste is very different.",ja:"ワインはぶどうからなので、味がかなりちがいます。"},
  {t:"back",en:"What drinks are popular in India?",ja:"インドではどんなお酒が人気ですか？"}],
  tip:"is made from ＋材料 で「〜から作られる」。商品の説明に必ず使います。"},
 {id:58,lv:3,topic:"日本酒",who:"Raj",q:"How should I drink sake?",qja:"日本酒はどう飲めばいいですか？",ans:[
  {t:"a",en:"It depends on the type.",ja:"種類によります。"},
  {t:"add",en:"Some are better cold, and some are better warm.",ja:"冷やがいいものもあれば、燗がいいものもあります。"},
  {t:"back",en:"Do you prefer cold drinks or warm drinks?",ja:"冷たい飲みものと温かい飲みもの、どちらが好きですか？"}],
  tip:"It depends on ... は「〜による」。決めつけずに答えたいときに便利です。"},
 {id:59,lv:3,topic:"ビジネス",who:"Priya",q:"What do Indian guests want from Japanese hospitality?",qja:"インドのお客様は日本のおもてなしに何を求めていますか？",ans:[
  {t:"a",en:"Care and attention to detail.",ja:"心づかいと、細かいところへの気配りです。"},
  {t:"add",en:"Small things, like a warm towel, can make guests very happy.",ja:"温かいおしぼりのような小さなことで、お客様はとても喜びます。"},
  {t:"back",en:"What do your guests value most?",ja:"あなたのお客様がいちばん大事にしていることは何ですか？"}],
  tip:"like ＋例 で、具体例をすぐに足せます。"},
 {id:60,lv:3,topic:"ビジネス",who:"Arjun",q:"Are you interested in a partnership with us?",qja:"私たちとの提携に興味はありますか？",ans:[
  {t:"a",en:"Yes, very much.",ja:"はい、とても。"},
  {t:"add",en:"I think we can help each other.",ja:"おたがいに力になれると思います。"},
  {t:"back",en:"What kind of partnership do you have in mind?",ja:"どんな形の提携を考えていますか？"}],
  tip:"have in mind は「考えている」。相手の希望を先に聞くのがコツです。"},
 {id:61,lv:3,topic:"ビジネス",who:"Mr. Sharma",q:"How do you usually start with a new partner?",qja:"新しいパートナーとは、ふだんどう始めますか？",ans:[
  {t:"a",en:"With a meeting.",ja:"まず打ち合わせです。"},
  {t:"add",en:"First, I want to understand their goals and problems.",ja:"最初に、相手の目標と困りごとを知りたいのです。"},
  {t:"back",en:"What are your main goals this year?",ja:"今年のおもな目標は何ですか？"}],
  tip:"First, ... で順番を示すと、話が整理されて聞こえます。"},
 {id:62,lv:3,topic:"院",who:"Neha",q:"What do you check every day as a clinic owner?",qja:"院長として毎日何を見ていますか？",ans:[
  {t:"a",en:"Sales, patient visits, and return rates.",ja:"売上、来院数、再来院率です。"},
  {t:"add",en:"These numbers tell me how the clinic is doing.",ja:"この数字で、院の調子がわかります。"},
  {t:"back",en:"What numbers do you check in your business?",ja:"あなたの仕事ではどんな数字を見ていますか？"}],
  tip:"return rate は「再来院率」。自分の仕事の言葉は英語で言えるようにしましょう。"},
 {id:63,lv:3,topic:"ビジネス",who:"Anita",q:"What's the biggest challenge for small clinics in Japan?",qja:"日本の小さな院のいちばんの課題は何ですか？",ans:[
  {t:"a",en:"Getting patients to come back.",ja:"患者さんにまた来てもらうことです。"},
  {t:"add",en:"New patients matter, but regular patients keep a clinic strong.",ja:"新しい患者さんも大事ですが、通う方が院を強くします。"},
  {t:"back",en:"Is it the same in India?",ja:"インドでも同じですか？"}],
  tip:"Is it the same in India? は、どんな話のあとでも使える聞き返しです。"},
 {id:64,lv:3,topic:"ビジネス",who:"Raj",q:"How does your booking system help clinics?",qja:"予約のしくみは院にどう役立ちますか？",ans:[
  {t:"a",en:"It saves time.",ja:"時間がはぶけます。"},
  {t:"add",en:"Patients book online, and staff can see each patient's history easily.",ja:"患者さんはネットで予約でき、スタッフは来院の記録をすぐ見られます。"},
  {t:"back",en:"How do your customers make bookings?",ja:"あなたのお客様はどうやって予約しますか？"}],
  tip:"いちばんの良さを先に短く言い、そのあと中身を説明します。"},
 {id:65,lv:3,topic:"日本酒",who:"Priya",q:"Can people in India buy Japanese sake?",qja:"インドで日本酒は買えますか？",ans:[
  {t:"a",en:"It's still not easy.",ja:"まだかんたんではありません。"},
  {t:"add",en:"That's why I'm looking for good partners here.",ja:"だから、こちらでいいパートナーを探しています。"},
  {t:"back",en:"Do you know any importers in India?",ja:"インドで輸入をしている会社を知っていますか？"}],
  tip:"That's why ... は「だから〜」。自分の目的を自然に伝えられます。"},
 {id:66,lv:3,topic:"ビジネス",who:"Arjun",q:"Would you like to visit our hotel?",qja:"私たちのホテルを見に来ませんか？",ans:[
  {t:"a",en:"Yes, I'd love to.",ja:"はい、ぜひ。"},
  {t:"add",en:"I'd like to see how you welcome your guests.",ja:"お客様をどう迎えているか見てみたいです。"},
  {t:"back",en:"When would be a good time for you?",ja:"いつがご都合いいですか？"}],
  tip:"I'd love to. は、さそいに喜んで答えるときの言い方です。"},
 {id:67,lv:3,topic:"ビジネス",who:"Mr. Sharma",q:"How did the meeting go today?",qja:"今日の打ち合わせはどうでしたか？",ans:[
  {t:"a",en:"It went well.",ja:"うまくいきました。"},
  {t:"add",en:"We agreed on the next steps.",ja:"次にやることを決められました。"},
  {t:"back",en:"What did you think of their proposal?",ja:"先方の提案をどう思いましたか？"}],
  tip:"How did ... go? には It went well. と go の過去形で答えます。"},
 {id:68,lv:3,topic:"ビジネス",who:"Neha",q:"Could you send me more information?",qja:"もう少し資料を送ってもらえますか？",ans:[
  {t:"a",en:"Of course.",ja:"もちろんです。"},
  {t:"add",en:"I'll email you a short summary by tomorrow.",ja:"あしたまでに短いまとめをメールします。"},
  {t:"back",en:"Is email the best way to reach you?",ja:"連絡はメールがいちばんいいですか？"}],
  tip:"by tomorrow は「あしたまでに」。しめきりを言うと信頼されます。"},
 {id:69,lv:3,topic:"ビジネス",who:"Anita",q:"How do you teach omotenashi to staff?",qja:"スタッフにおもてなしをどう教えますか？",ans:[
  {t:"a",en:"Through practice.",ja:"練習を通してです。"},
  {t:"add",en:"We role-play real situations, like greeting guests at the door.",ja:"入口でお客様を迎えるなど、本番に近い場面を練習します。"},
  {t:"back",en:"How do you train your new staff?",ja:"新しいスタッフはどう育てていますか？"}],
  tip:"Through ＋ことば で「〜を通して」と短く答えられます。"},
 {id:70,lv:3,topic:"院",who:"Raj",q:"How do you work with your staff?",qja:"スタッフとはどう仕事をしていますか？",ans:[
  {t:"a",en:"I talk with them often.",ja:"よく話すようにしています。"},
  {t:"add",en:"I want everyone to feel comfortable sharing ideas.",ja:"みんなが気軽に意見を言えるようにしたいのです。"},
  {t:"back",en:"How big is your team?",ja:"あなたのチームは何人ですか？"}],
  tip:"want ＋人＋to ＋動詞 で「人に〜してほしい」と言えます。"},
 {id:71,lv:3,topic:"日本酒",who:"Priya",q:"What food goes well with sake?",qja:"日本酒に合う料理は何ですか？",ans:[
  {t:"a",en:"Japanese food, of course.",ja:"もちろん日本の料理です。"},
  {t:"add",en:"But some sake can go well with Indian dishes too.",ja:"でも、インド料理に合う日本酒もあります。"},
  {t:"back",en:"Which Indian dish would you try with sake?",ja:"どのインド料理を日本酒と合わせてみたいですか？"}],
  tip:"go well with は「〜に合う」。食べものとお酒の話の定番です。"},
 {id:72,lv:3,topic:"ビジネス",who:"Arjun",q:"What makes Japanese service special?",qja:"日本のサービスの特別なところは何ですか？",ans:[
  {t:"a",en:"Attention to small details.",ja:"小さなことへの気配りです。"},
  {t:"add",en:"Staff notice what guests need before they ask.",ja:"お客様が言う前に、必要なことに気づきます。"},
  {t:"back",en:"What makes Indian service special?",ja:"インドのサービスの特別なところは何ですか？"}],
  tip:"相手の国の良さも聞くと、対等な話し合いになります。"},
 {id:73,lv:3,topic:"ビジネス",who:"Mr. Sharma",q:"How long will you stay in India?",qja:"インドにはどれくらい滞在しますか？",ans:[
  {t:"a",en:"About a week this time.",ja:"今回は1週間くらいです。"},
  {t:"add",en:"I have meetings in a few different cities.",ja:"いくつかの町で打ち合わせがあります。"},
  {t:"back",en:"Do you have time to meet again?",ja:"また会う時間はありますか？"}],
  tip:"日数は本当の予定に入れかえて練習しましょう。"},
 {id:74,lv:3,topic:"ビジネス",who:"Neha",q:"Do you work with other clinics in Japan?",qja:"日本でほかの院とも仕事をしていますか？",ans:[
  {t:"a",en:"Yes, with partner clinics.",ja:"はい、提携院と。"},
  {t:"add",en:"I support them with management advice and systems.",ja:"経営のアドバイスとしくみで支えています。"},
  {t:"back",en:"Are you interested in working with Japan?",ja:"日本と仕事をすることに興味はありますか？"}],
  tip:"support ＋人＋with ＋もの で「〜で支える」と言えます。"},
 {id:75,lv:3,topic:"日本酒",who:"Anita",q:"What's your role at Odani Sake Ten?",qja:"小谷酒店でのあなたの役割は何ですか？",ans:[
  {t:"a",en:"I'm the international affairs manager.",ja:"国際担当です。"},
  {t:"add",en:"I look for partners and markets outside Japan.",ja:"日本の外でパートナーと市場を探しています。"},
  {t:"back",en:"Who handles overseas business at your company?",ja:"あなたの会社では、だれが海外の仕事を担当していますか？"}],
  tip:"役職は I'm the ＋役職 で。the をつけると「その担当」の意味になります。"},

 // ---- lv4：意見・業界・計画・考え方（B1+〜B2。答えにも理由を）----
 {id:76,lv:4,topic:"意見",who:"Mr. Sharma",q:"What do you think is most important in business?",qja:"仕事でいちばん大切なことは何だと思いますか？",ans:[
  {t:"a",en:"Trust, I think.",ja:"信頼だと思います。"},
  {t:"add",en:"Without trust, no deal lasts long.",ja:"信頼がなければ、どんな取引も長く続きません。"},
  {t:"back",en:"What do you think?",ja:"あなたはどう思いますか？"}],
  tip:"意見は短く言い切り、Without ... で理由を足すと力強くなります。"},
 {id:77,lv:4,topic:"意見",who:"Priya",q:"Do you think small businesses need digital tools?",qja:"小さな会社にもデジタルの道具は必要だと思いますか？",ans:[
  {t:"a",en:"Yes, definitely.",ja:"はい、まちがいなく。"},
  {t:"add",en:"Data helps owners make better decisions, not just guesses.",ja:"データがあれば、勘ではなく、よりよい判断ができます。"},
  {t:"back",en:"What tools does your company rely on?",ja:"あなたの会社はどんな道具を使っていますか？"}],
  tip:"not just ... で「ただの〜ではなく」と比べると、意見がはっきりします。"},
 {id:78,lv:4,topic:"業界",who:"Raj",q:"How is healthcare changing in Japan?",qja:"日本の医療や健康の分野はどう変わっていますか？",ans:[
  {t:"a",en:"It's changing quickly.",ja:"急速に変わっています。"},
  {t:"add",en:"As people get older, more people need care close to home.",ja:"年をとる人がふえ、家の近くでケアを受けたい人が多くなっています。"},
  {t:"back",en:"Is India facing a similar change?",ja:"インドも同じような変化がありますか？"}],
  tip:"As ... で「〜につれて」と、変化の理由を言えます。"},
 {id:79,lv:4,topic:"計画",who:"Arjun",q:"What are your plans for the next few years?",qja:"これから数年の計画は何ですか？",ans:[
  {t:"a",en:"I want to grow my work in India.",ja:"インドでの仕事を広げたいです。"},
  {t:"add",en:"I believe Japanese hospitality can add real value here.",ja:"日本のおもてなしは、ここで本当の価値になると信じています。"},
  {t:"back",en:"Where do you see your business in five years?",ja:"5年後、あなたの会社はどうなっていると思いますか？"}],
  tip:"I believe ... で、自分の考えに思いをこめられます。"},
 {id:80,lv:4,topic:"意見",who:"Neha",q:"What do you think about online meetings?",qja:"オンラインの打ち合わせをどう思いますか？",ans:[
  {t:"a",en:"They're useful, but not for everything.",ja:"便利ですが、何にでも合うわけではありません。"},
  {t:"add",en:"In my work, meeting face to face builds trust.",ja:"私の仕事では、直接会うことが信頼をつくります。"},
  {t:"back",en:"Do you prefer online or in-person meetings?",ja:"オンラインと対面、どちらが好きですか？"}],
  tip:"..., but not for everything. で、良い点と限界を両方言えます。"},
 {id:81,lv:4,topic:"考え方",who:"Anita",q:"What do you value most in your work?",qja:"仕事でいちばん大事にしていることは何ですか？",ans:[
  {t:"a",en:"Giving my best to the person in front of me.",ja:"目の前の人に全力を尽くすことです。"},
  {t:"add",en:"Every patient and partner deserves my full attention.",ja:"どの患者さんもパートナーも、全力で向き合うべき相手だからです。"},
  {t:"back",en:"What do you value in your work?",ja:"あなたは仕事で何を大事にしていますか？"}],
  tip:"自分の大切な考えは、英語でも一文で言えるようにしておきましょう。"},
 {id:82,lv:4,topic:"業界",who:"Mr. Sharma",q:"Why do many clinics struggle to keep patients?",qja:"なぜ多くの院は患者さんが続かないのでしょう？",ans:[
  {t:"a",en:"Because they don't follow up.",ja:"あとのフォローをしないからです。"},
  {t:"add",en:"Patients come back when they feel cared for after treatment.",ja:"施術のあとも大事にされていると感じると、患者さんはまた来ます。"},
  {t:"back",en:"How do you keep your customers coming back?",ja:"お客様にまた来てもらうために何をしていますか？"}],
  tip:"follow up は「あとから連絡や確認をする」。ビジネスでよく使います。"},
 {id:83,lv:4,topic:"意見",who:"Priya",q:"Is Japanese hospitality possible outside Japan?",qja:"日本のおもてなしは日本の外でもできますか？",ans:[
  {t:"a",en:"Yes, I think so.",ja:"はい、できると思います。"},
  {t:"add",en:"It's about mindset, not location, so anyone can learn it.",ja:"場所ではなく心の持ち方なので、だれでも学べます。"},
  {t:"back",en:"Do you agree?",ja:"そう思いますか？"}],
  tip:"Do you agree? は、意見を言ったあとに相手を話に入れる一言です。"},
 {id:84,lv:4,topic:"考え方",who:"Raj",q:"What did you learn as an athletic trainer?",qja:"アスレティックトレーナーの仕事で何を学びましたか？",ans:[
  {t:"a",en:"The value of prevention.",ja:"予防の大切さです。"},
  {t:"add",en:"Stopping injuries early is better than treating them later.",ja:"けがを早めに防ぐほうが、あとで治すよりいいのです。"},
  {t:"back",en:"Do people in India think about prevention much?",ja:"インドの人は予防をよく考えますか？"}],
  tip:"A is better than B で、自分の考えを比べて伝えられます。"},
 {id:85,lv:4,topic:"意見",who:"Arjun",q:"Should businesses focus on new customers or regular customers?",qja:"会社は新しいお客様と常連のお客様、どちらに力を入れるべきですか？",ans:[
  {t:"a",en:"Regular customers, mainly.",ja:"おもに常連のお客様です。"},
  {t:"add",en:"Keeping a customer usually costs less than finding a new one.",ja:"お客様を守るほうが、新しく見つけるより、たいていお金がかかりません。"},
  {t:"back",en:"What's your company's approach?",ja:"あなたの会社の考え方はどうですか？"}],
  tip:"mainly を入れると「両方大事だけど、おもに」とバランスよく言えます。"},
 {id:86,lv:4,topic:"計画",who:"Neha",q:"How will you introduce Japanese sake in India?",qja:"インドで日本酒をどう広めますか？",ans:[
  {t:"a",en:"Step by step.",ja:"一歩ずつです。"},
  {t:"add",en:"First, I want people to taste it at restaurants and events.",ja:"まず、レストランやイベントで味わってもらいたいです。"},
  {t:"back",en:"Which city do you think is best to start in?",ja:"どの町から始めるのがいいと思いますか？"}],
  tip:"計画は Step by step. と言ってから、最初の一歩を話すとわかりやすくなります。"},
 {id:87,lv:4,topic:"業界",who:"Anita",q:"What's the biggest difference between Japanese and Indian business culture?",qja:"日本とインドの仕事のやり方のいちばんのちがいは何ですか？",ans:[
  {t:"a",en:"The speed of decisions, maybe.",ja:"決めるスピードかもしれません。"},
  {t:"add",en:"Japanese companies take time, but Indian partners often decide quickly.",ja:"日本の会社は時間をかけますが、インドの方はすぐ決めることが多いです。"},
  {t:"back",en:"Have you noticed that too?",ja:"あなたもそう感じますか？"}],
  tip:"maybe をつけると、決めつけずにやわらかく意見を言えます。"},
 {id:88,lv:4,topic:"意見",who:"Mr. Sharma",q:"How do you deal with a difficult customer?",qja:"むずかしいお客様にはどう対応しますか？",ans:[
  {t:"a",en:"I listen first.",ja:"まず話を聞きます。"},
  {t:"add",en:"Most problems get smaller when people feel heard.",ja:"聞いてもらえたと感じると、たいていの問題は小さくなります。"},
  {t:"back",en:"How does your team handle complaints?",ja:"あなたのチームは苦情にどう対応していますか？"}],
  tip:"feel heard は「話を聞いてもらえたと感じる」。接客の大事な考え方です。"},
 {id:89,lv:4,topic:"考え方",who:"Priya",q:"Why are numbers important for a clinic?",qja:"なぜ院にとって数字が大切なのですか？",ans:[
  {t:"a",en:"Because feelings can be wrong.",ja:"感覚はまちがうことがあるからです。"},
  {t:"add",en:"Daily numbers show problems early, before they get bigger.",ja:"毎日の数字を見ると、問題が大きくなる前に気づけます。"},
  {t:"back",en:"Do you decide things with data or experience?",ja:"あなたはデータと経験、どちらで決めますか？"}],
  tip:"短い理由のあとに具体的な良さを足すと、説得力が上がります。"},
 {id:90,lv:4,topic:"計画",who:"Raj",q:"What's your goal with English?",qja:"英語での目標は何ですか？",ans:[
  {t:"a",en:"To give business presentations.",ja:"仕事のプレゼンをすることです。"},
  {t:"add",en:"I want to explain my ideas directly to partners in India.",ja:"インドのパートナーに、自分の考えを直接伝えたいのです。"},
  {t:"back",en:"Do you have any advice for me?",ja:"何かアドバイスはありますか？"}],
  tip:"目標は To ＋動詞 で短く言えます。そのあと「なぜ」を足しましょう。"},
 {id:91,lv:4,topic:"意見",who:"Arjun",q:"Do you think AI will change healthcare?",qja:"AIは医療や健康の分野を変えると思いますか？",ans:[
  {t:"a",en:"Yes, in many ways.",ja:"はい、いろいろな面で。"},
  {t:"add",en:"But patients still need a human touch, especially during treatment.",ja:"でも、とくに施術では、人の手のぬくもりがやはり必要です。"},
  {t:"back",en:"How does your company use AI?",ja:"あなたの会社ではAIをどう使っていますか？"}],
  tip:"Yes のあとに But を続けると、深みのある意見になります。"},
 {id:92,lv:4,topic:"業界",who:"Neha",q:"What do Indian hotels need to attract Japanese guests?",qja:"インドのホテルが日本のお客様を呼ぶには何が必要ですか？",ans:[
  {t:"a",en:"Cleanliness and clear communication.",ja:"清潔さと、わかりやすい伝え方です。"},
  {t:"add",en:"Japanese guests notice small things, so the same quality every day matters.",ja:"日本のお客様は小さなことに気づくので、毎日同じ質が大切です。"},
  {t:"back",en:"Do you get many Japanese guests now?",ja:"今、日本のお客様は多いですか？"}],
  tip:"2つ答えたら、so で「だから何が大事か」を足します。"},
 {id:93,lv:4,topic:"考え方",who:"Anita",q:"What makes a good leader?",qja:"いいリーダーとはどんな人ですか？",ans:[
  {t:"a",en:"Someone who listens.",ja:"人の話を聞く人です。"},
  {t:"add",en:"A team works better when everyone can share ideas freely.",ja:"みんなが自由に意見を言えると、チームはうまく動きます。"},
  {t:"back",en:"What kind of leader do you want to be?",ja:"あなたはどんなリーダーになりたいですか？"}],
  tip:"Someone who ... で「〜する人」と、人の説明ができます。"},
 {id:94,lv:4,topic:"意見",who:"Mr. Sharma",q:"Is it better to grow fast or slowly?",qja:"会社は速く大きくするのと、ゆっくりと、どちらがいいですか？",ans:[
  {t:"a",en:"Slowly but steadily, for me.",ja:"私は、ゆっくりでも着実に、です。"},
  {t:"add",en:"Growing too fast can hurt quality and trust.",ja:"急ぎすぎると、質と信頼がそこなわれることがあります。"},
  {t:"back",en:"What's your view on that?",ja:"その点、あなたはどうお考えですか？"}],
  tip:"for me をつけると「私の場合は」と、相手の考えを否定せずに言えます。"},
 {id:95,lv:4,topic:"計画",who:"Priya",q:"What would you need to start a project with us?",qja:"私たちと一緒に始めるには何が必要ですか？",ans:[
  {t:"a",en:"A clear goal and a small first step.",ja:"はっきりした目標と、小さな最初の一歩です。"},
  {t:"add",en:"Starting small lets us learn and build trust together.",ja:"小さく始めれば、一緒に学びながら信頼をつくれます。"},
  {t:"back",en:"What would you like to try first?",ja:"まず何をやってみたいですか？"}],
  tip:"lets us ＋動詞 で「私たちが〜できるようにする」と、良さを伝えられます。"},
 {id:96,lv:4,topic:"業界",who:"Raj",q:"How do you see the future of small clinics in Japan?",qja:"日本の小さな院の将来をどう見ていますか？",ans:[
  {t:"a",en:"They'll need to change.",ja:"変わる必要があると思います。"},
  {t:"add",en:"Clinics that use data and care well for patients will stay strong.",ja:"データを使い、患者さんを大事にする院は強く残ります。"},
  {t:"back",en:"What's the future of small businesses in India like?",ja:"インドの小さな会社の将来はどうですか？"}],
  tip:"that ＋動詞 で「〜する院」と、条件をつけて言えます。"},
 {id:97,lv:4,topic:"意見",who:"Arjun",q:"What's the hardest part of working across cultures?",qja:"ちがう文化の人と働くとき、いちばんむずかしいことは何ですか？",ans:[
  {t:"a",en:"Understanding what people don't say.",ja:"言葉にしないことを読みとることです。"},
  {t:"add",en:"Words like 'yes' or 'soon' can mean different things.",ja:"「はい」や「すぐ」のような言葉も、意味がちがうことがあります。"},
  {t:"back",en:"What's been hard for you when working with Japan?",ja:"日本と仕事をしていて、むずかしかったことは何ですか？"}],
  tip:"具体的な言葉を例に出すと、文化のちがいがよく伝わります。"},
 {id:98,lv:4,topic:"考え方",who:"Neha",q:"How do you manage so many different jobs?",qja:"たくさんのちがう仕事を、どうやってこなしているのですか？",ans:[
  {t:"a",en:"I plan my week carefully.",ja:"一週間の予定をていねいに立てます。"},
  {t:"add",en:"Each job is different, but they all connect through people.",ja:"仕事はそれぞれちがいますが、どれも人でつながっています。"},
  {t:"back",en:"How do you manage your time?",ja:"あなたは時間をどう管理していますか？"}],
  tip:"いくつもの仕事を「人でつながる」とまとめると、話に一本の軸ができます。"},
 {id:99,lv:4,topic:"意見",who:"Anita",q:"Should Indian businesses learn from Japan?",qja:"インドの会社は日本から学ぶべきですか？",ans:[
  {t:"a",en:"Not copy, but learn, yes.",ja:"まねではなく、学ぶのならそうです。"},
  {t:"add",en:"Japanese care for details can make Indian warmth even stronger.",ja:"日本の細かい気配りで、インドのあたたかさはもっと強くなります。"},
  {t:"back",en:"What could Japan learn from India?",ja:"日本はインドから何を学べると思いますか？"}],
  tip:"相手の国の良さも認めると、意見が受け入れられやすくなります。"},
 {id:100,lv:4,topic:"計画",who:"Mr. Sharma",q:"If we work together, what would success look like?",qja:"一緒に仕事をするなら、何ができたら成功ですか？",ans:[
  {t:"a",en:"Happy guests and long-term trust.",ja:"お客様の笑顔と、長く続く信頼です。"},
  {t:"add",en:"If guests come back again and again, that's real success.",ja:"お客様が何度も来てくれたら、それが本当の成功です。"},
  {t:"back",en:"How would you measure success?",ja:"あなたは成功を何で測りますか？"}],
  tip:"If ..., that's ... で「〜なら、それが〜だ」と、ゴールをはっきり言えます。"}
];

/* ひとこと英語 第3のまとまり：聞き返す・会話を続ける表現（id 201〜230） */
window.HITOKOTO=(window.HITOKOTO||[]).concat([
 // ---- 聞き返す ----
 {id:201,tag:"聞き返す",ja:"あなたはどう？",scene:"自分のことを話したあとで",ans:[
  {en:"How about you?",hl:"How about you",nu:"いちばん使いやすい。どんな話のあとでも使える"},
  {en:"What about you, Raj?",hl:"What about you",nu:"名前を入れると、ぐっと親しくなる"}],
  tip:"答えたら、最後に How about you? をつけるくせをつけましょう。"},
 {id:202,tag:"聞き返す",ja:"〜したことはありますか？",scene:"相手の経験を聞きたいとき",ans:[
  {en:"Have you ever tried acupuncture?",hl:"Have you ever",nu:"Have you ever ＋過去分詞 で「〜したことある？」"},
  {en:"Have you ever been to Japan?",hl:"been to",nu:"「行ったことある？」は been to を使う"}],
  tip:"経験を聞くと、相手は思い出話をたくさんしてくれます。"},
 {id:203,tag:"聞き返す",ja:"インドでは〜はどうですか？",scene:"日本の話をしたあと、相手の国のことを聞くとき",ans:[
  {en:"What's it like in India?",hl:"What's it like",nu:"「インドではどんな感じ？」。広く使える"},
  {en:"Is it the same in India?",hl:"the same",nu:"「インドでも同じ？」。比べる話になる"},
  {en:"How do people do that in India?",hl:"How do people",nu:"やり方を聞くとき"}],
  tip:"日本の話をしたら、in India をつけて聞き返すと話が広がります。"},
 {id:204,tag:"聞き返す",ja:"あなたはどう思いますか？",scene:"自分の意見を言ったあとで",ans:[
  {en:"What do you think?",hl:"What do you think",nu:"いちばん基本の聞き方"},
  {en:"Do you agree?",hl:"agree",nu:"「そう思う？」と賛成かどうかを聞く"},
  {en:"What's your view on that?",hl:"your view",nu:"ビジネスの場で、ていねいに聞くとき"}],
  tip:"意見のあとに相手の考えを聞くと、話し合いになります。"},
 {id:205,tag:"聞き返す",ja:"もう一度言ってもらえますか？",scene:"聞きとれなかったとき",ans:[
  {en:"Sorry, could you say that again?",hl:"say that again",nu:"いちばん使いやすい、ていねいな言い方"},
  {en:"Could you speak a little more slowly?",hl:"more slowly",nu:"速くて聞きとれないとき"}],
  tip:"わからないまま笑ってごまかすより、聞き返すほうが信頼されます。"},
 // ---- くわしく聞く ----
 {id:206,tag:"くわしく聞く",ja:"例えば？",scene:"相手の話をもっと具体的に聞きたいとき",ans:[
  {en:"For example?",hl:"For example",nu:"ひとことで聞ける"},
  {en:"Can you give me an example?",hl:"give me an example",nu:"ていねいに聞くとき"}],
  tip:"例を聞くと、相手の話がぐっとわかりやすくなります。"},
 {id:207,tag:"くわしく聞く",ja:"もう少しくわしく教えてください",scene:"興味のある話をもっと聞きたいとき",ans:[
  {en:"Could you tell me more about that?",hl:"tell me more",nu:"いちばん自然な言い方"},
  {en:"I'd like to hear more.",hl:"hear more",nu:"「もっと聞きたい」と興味を見せる"}],
  tip:"tell me more は、相手に「話していいよ」と伝える魔法の言葉です。"},
 {id:208,tag:"くわしく聞く",ja:"それはどういう意味ですか？",scene:"言葉や話の意味がわからないとき",ans:[
  {en:"What do you mean?",hl:"What do you mean",nu:"いちばん短い聞き方"},
  {en:"What does that word mean?",hl:"that word mean",nu:"知らない単語があったとき"}],
  tip:"What do you mean? は強く言うと責めて聞こえるので、やわらかい声で。"},
 {id:209,tag:"くわしく聞く",ja:"どうしてですか？",scene:"理由を聞きたいとき",ans:[
  {en:"Why is that?",hl:"Why is that",nu:"Why? だけより、やわらかい"},
  {en:"What made you decide that?",hl:"What made you",nu:"決めた理由を聞くとき"}],
  tip:"Why? の1語だけだと強く聞こえることがあります。Why is that? が安心です。"},
 {id:210,tag:"くわしく聞く",ja:"どうやって始めたのですか？",scene:"相手の仕事や趣味のきっかけを聞くとき",ans:[
  {en:"How did you get started?",hl:"get started",nu:"仕事や趣味のはじまりを聞く"},
  {en:"How did you get into this business?",hl:"get into",nu:"「この仕事に入ったきっかけは？」"}],
  tip:"きっかけの話は、相手の思いが聞ける大事な質問です。"},
 // ---- 話を広げる ----
 {id:211,tag:"話を広げる",ja:"それでどうなったの？",scene:"相手の話の続きを聞きたいとき",ans:[
  {en:"And then what happened?",hl:"what happened",nu:"話の続きをうながす"},
  {en:"So, how did it go?",hl:"how did it go",nu:"結果を聞くとき"}],
  tip:"続きを聞くと、相手は「ちゃんと聞いてくれている」と感じます。"},
 {id:212,tag:"話を広げる",ja:"〜はどうでしたか？",scene:"相手の旅行やできごとの感想を聞くとき",ans:[
  {en:"How was your trip?",hl:"How was",nu:"How was ＋ことば で感想を聞く"},
  {en:"Did you enjoy it?",hl:"enjoy it",nu:"楽しかったかを聞く"}],
  tip:"How was ...? は、旅行・食事・会議など何にでも使えます。"},
 {id:213,tag:"話を広げる",ja:"いちばん好きなのは何ですか？",scene:"相手の好みを聞いて話を広げるとき",ans:[
  {en:"What's your favorite?",hl:"your favorite",nu:"いちばん短い聞き方"},
  {en:"Which one do you like best?",hl:"like best",nu:"いくつかの中から選んでもらう"}],
  tip:"好きなものの話は、だれでも楽しく話せる話題です。"},
 {id:214,tag:"話を広げる",ja:"おすすめはありますか？",scene:"相手の国や町のことを教えてもらうとき",ans:[
  {en:"Do you have any recommendations?",hl:"recommendations",nu:"お店・場所・料理など何でも"},
  {en:"What would you recommend?",hl:"would you recommend",nu:"お店で注文に迷ったときにも"}],
  tip:"おすすめを聞くと、相手は自分の町を自慢できてうれしくなります。"},
 {id:215,tag:"話を広げる",ja:"ふだんは〜しますか？",scene:"相手の習慣を聞くとき",ans:[
  {en:"Do you usually cook at home?",hl:"Do you usually",nu:"ふだんの習慣を聞く"},
  {en:"How often do you do that?",hl:"How often",nu:"回数をくわしく聞く"}],
  tip:"usually を入れると、くらしの話に自然に入れます。"},
 // ---- 相づち ----
 {id:216,tag:"相づち",ja:"それはいいですね",scene:"相手のいい話を聞いたとき",ans:[
  {en:"That sounds great!",hl:"sounds great",nu:"いちばん使いやすい相づち"},
  {en:"That's wonderful.",hl:"wonderful",nu:"心から喜ぶとき"},
  {en:"Good for you!",hl:"Good for you",nu:"相手ががんばったことに"}],
  tip:"相づちは、少し大きめの声で言うと気持ちが伝わります。"},
 {id:217,tag:"相づち",ja:"本当に？",scene:"おどろいたとき",ans:[
  {en:"Really?",hl:"Really",nu:"いちばん基本。上がり調子で"},
  {en:"Oh, I didn't know that.",hl:"didn't know",nu:"「知らなかった」と興味を見せる"},
  {en:"No way!",hl:"No way",nu:"とてもおどろいたとき。くだけた言い方"}],
  tip:"Really? だけが続くと単調です。I didn't know that. もまぜましょう。"},
 {id:218,tag:"相づち",ja:"わかります",scene:"相手の気持ちに共感するとき",ans:[
  {en:"I know what you mean.",hl:"know what you mean",nu:"「言いたいことわかる」"},
  {en:"I feel the same way.",hl:"the same way",nu:"「私も同じ気持ち」"}],
  tip:"共感の一言があると、相手は安心して話を続けられます。"},
 {id:219,tag:"相づち",ja:"それは大変でしたね",scene:"相手のつらい話や苦労を聞いたとき",ans:[
  {en:"That must be hard.",hl:"must be hard",nu:"今も大変なことに"},
  {en:"That must have been tough.",hl:"must have been",nu:"過去の大変だったことに"},
  {en:"I'm sorry to hear that.",hl:"sorry to hear",nu:"悪い知らせを聞いたとき"}],
  tip:"I'm sorry to hear that. は、あやまるのではなく「お気の毒に」の意味です。"},
 {id:220,tag:"相づち",ja:"おもしろいですね",scene:"興味をひかれる話を聞いたとき",ans:[
  {en:"That's interesting.",hl:"interesting",nu:"いちばん基本"},
  {en:"How interesting!",hl:"How interesting",nu:"気持ちをこめて言うとき"}],
  tip:"interesting のあとに質問を1つ続けると、本当に興味があると伝わります。"},
 // ---- 話をつなぐ ----
 {id:221,tag:"話をつなぐ",ja:"ところで",scene:"話題を変えるとき",ans:[
  {en:"By the way, are you free tomorrow?",hl:"By the way",nu:"いちばんよく使う。軽く話を変える"},
  {en:"Speaking of food, have you tried sake?",hl:"Speaking of",nu:"「〜といえば」。今の話からつなげる"}],
  tip:"Speaking of ... を使うと、話が自然に次へ流れます。"},
 {id:222,tag:"話をつなぐ",ja:"それで思い出したけど",scene:"相手の話から自分の話につなげるとき",ans:[
  {en:"That reminds me of my trip to Delhi.",hl:"reminds me of",nu:"「〜を思い出す」"},
  {en:"Oh, that reminds me.",hl:"that reminds me",nu:"話を切りかえる合図にも"}],
  tip:"相手の話から自分の話へ、なめらかにつなげる便利な表現です。"},
 {id:223,tag:"話をつなぐ",ja:"実は",scene:"少し意外なことや本当のことを言うとき",ans:[
  {en:"Actually, I used to be an athletic trainer.",hl:"Actually",nu:"意外なことを話すとき"},
  {en:"To be honest, it was hard at first.",hl:"To be honest",nu:"「正直に言うと」"}],
  tip:"Actually は「実は」。相手の思いこみをやさしく直すときにも使えます。"},
 {id:224,tag:"話をつなぐ",ja:"私もです",scene:"相手と同じだとき",ans:[
  {en:"Me too.",hl:"Me too",nu:"肯定の文に"},
  {en:"Me neither.",hl:"Me neither",nu:"「私も〜ない」。否定の文に"},
  {en:"Same here.",hl:"Same here",nu:"くだけた言い方"}],
  tip:"「〜じゃない」に同意するときは Me neither. を使います。"},
 {id:225,tag:"話をつなぐ",ja:"ちょっと考えさせてください",scene:"すぐに答えが出ないとき",ans:[
  {en:"Let me think.",hl:"Let me think",nu:"だまるより、これを言うと安心"},
  {en:"That's a good question.",hl:"good question",nu:"考える時間をかせぐときにも"}],
  tip:"だまってしまうより、Let me think. と言えば相手は待ってくれます。"},
 // ---- 話をもどす ----
 {id:226,tag:"話をもどす",ja:"話をもどすと",scene:"話がそれたあと、元の話題にもどるとき",ans:[
  {en:"Anyway, back to the plan.",hl:"back to",nu:"いちばん自然。軽くもどす"},
  {en:"Going back to what you said earlier...",hl:"Going back to",nu:"相手の話にもどるとき"}],
  tip:"打ち合わせで話がそれたら、Anyway, back to ... で上手にもどせます。"},
 {id:227,tag:"話をもどす",ja:"さっきの話ですが",scene:"前に出た話をもう一度取り上げるとき",ans:[
  {en:"About what you mentioned before...",hl:"you mentioned",nu:"相手が言ったことを取り上げる"},
  {en:"You said earlier that you have a hotel.",hl:"You said earlier",nu:"前に聞いた内容をくり返す"}],
  tip:"相手の話を覚えていると、ちゃんと聞いていたことが伝わります。"},
 // ---- 確かめる ----
 {id:228,tag:"確かめる",ja:"つまり〜ということ？",scene:"相手の話をまとめて確かめるとき",ans:[
  {en:"So you mean you want to start small?",hl:"So you mean",nu:"自分の言葉でまとめて確かめる"},
  {en:"In other words, it's about trust?",hl:"In other words",nu:"「言いかえると」"}],
  tip:"まとめて確かめると、まちがいが減り、相手も安心します。"},
 {id:229,tag:"確かめる",ja:"〜ということで合っていますか？",scene:"大事なことを確かめるとき",ans:[
  {en:"Did I get that right?",hl:"get that right",nu:"自分の理解が正しいか聞く"},
  {en:"Just to confirm, the meeting is on Friday?",hl:"Just to confirm",nu:"日にちや数字の確認に"}],
  tip:"日にち・時間・金額は、Just to confirm で必ず確かめましょう。"},
 {id:230,tag:"確かめる",ja:"話せてよかったです",scene:"会話の終わりに",ans:[
  {en:"It was nice talking with you.",hl:"nice talking with you",nu:"会話の終わりのあいさつ"},
  {en:"Let's talk again soon.",hl:"talk again",nu:"また話したい気持ちを伝える"}],
  tip:"終わりの一言があると、次につながるいい印象が残ります。"}
]);
