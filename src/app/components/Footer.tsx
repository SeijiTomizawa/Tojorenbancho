export function Footer() {
  return (
    <footer className="relative bg-[#E6DCC5]">
      {/* 巾木のような上部ボーダー */}
      <div className="h-1.5 bg-[#172542]"></div>

      {/* 板張り模様（微細な横線） */}
      <div className="relative overflow-hidden">
        {/* 横線パターン */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="h-px bg-[#333333]"
              style={{ marginTop: `${i * 3}px` }}
            ></div>
          ))}
        </div>

        {/* コンテンツ */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* 道場情報 */}
            <div>
              <h3 className="text-xl font-serif text-[#172542] mb-4">
                東京都杖道連盟-千代田神杖会-番町場所
              </h3>
              <p className="text-[#333333] text-sm leading-relaxed">
                神道夢想流杖術を学ぶ道場です。
                <br />
                初心者から経験者まで幅広く指導しています。
              </p>
            </div>

            {/* 連絡先 */}
            <div>
              <h3 className="text-lg font-serif text-[#172542] mb-4">
                お問い合わせ
              </h3>
              <div className="space-y-2 text-sm text-[#333333]">
                <p>
                  東京都杖道連盟公式ホームページをご確認ください
                </p>
                <a
                  href="https://www.tojoren.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#172542] hover:text-[#A82222] transition-colors underline"
                >
                  https://www.tojoren.jp/
                </a>
              </div>
            </div>
          </div>

          {/* コピーライト */}
          <div className="border-t border-[#172542]/20 pt-6 text-center">
            <p className="text-sm text-[#333333]">
              &copy; {new Date().getFullYear()} 電究社 All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}