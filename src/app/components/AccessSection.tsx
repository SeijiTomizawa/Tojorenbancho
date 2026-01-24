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

        <div className="max-w-3xl mx-auto">
          {/* 住所と最寄り駅情報 */}
          <div className="space-y-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}