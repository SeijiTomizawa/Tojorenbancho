import { MapPin, Train } from 'lucide-react';

export function AccessSection() {
  return (
    <section id="access" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#172542] mb-4">
            アクセス
          </h2>
          <div className="w-24 h-1 bg-[#A82222] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* 左側：住所と最寄り駅情報 */}
          <div className="space-y-6">
            {/* 住所 */}
            <div className="bg-[#EFE6D5] p-6 rounded-sm">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="h-6 w-6 text-[#A82222] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-serif text-[#172542] mb-2">
                    稽古場所
                  </h3>
                  <p className="text-[#172542] text-lg font-medium mb-1">
                    番町小学校体育館
                  </p>
                  <p className="text-[#172542] leading-relaxed">
                    東京都千代田区六番町8番地
                  </p>
                </div>
              </div>
            </div>

            {/* 最寄り駅 */}
            <div className="bg-[#EFE6D5] p-6 rounded-sm">
              <div className="flex items-start gap-3">
                <Train className="h-6 w-6 text-[#A82222] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-serif text-[#172542] mb-3">
                    最寄り駅
                  </h3>
                  <ul className="space-y-2 text-[#172542]">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#A82222] rounded-full"></span>
                      <span>四ツ谷駅</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#A82222] rounded-full"></span>
                      <span>市ヶ谷駅</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#A82222] rounded-full"></span>
                      <span>麹町駅</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 注意書き */}
            <div className="bg-[#172542] p-4 rounded-sm">
              <p className="text-[#EFE6D5] text-sm leading-relaxed">
                ※ 体育館の利用状況により、稽古場所が変更になる場合があります。詳細は東京都杖道連盟にお問い合わせください。
              </p>
            </div>
          </div>

          {/* 右側：Google Map */}
          <div className="bg-[#EFE6D5] p-2 rounded-sm">
            <div className="w-full h-[400px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=35.6884,139.7330&hl=ja&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="番町小学校体育館の地図"
                className="rounded-sm"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}