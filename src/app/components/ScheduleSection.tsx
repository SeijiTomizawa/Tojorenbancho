import { Calendar, MapPin, Clock, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';

// Googleカレンダー埋め込み設定
const CALENDAR_CONFIG = {
  CALENDAR_ID: 'info.tojoren@gmail.com',
  EMBED_URL: 'https://calendar.google.com/calendar/embed?src=info.tojoren@gmail.com&ctz=Asia%2FTokyo&mode=AGENDA',
};

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#172542]">
              稽古日程
            </h2>
          </div>
          <div className="w-20 h-1 bg-[#A82222]"></div>
          <p className="mt-4 text-[#333333] text-base sm:text-lg max-w-2xl">
            東京都杖道連盟全体の稽古スケジュールです。「番町」をご確認ください。
          </p>
        </div>

        {/* カレンダー埋め込み表示 */}
        <div className="w-full bg-white rounded-sm shadow-lg overflow-hidden" style={{ height: '600px' }}>
          <iframe
            src={CALENDAR_CONFIG.EMBED_URL}
            style={{ border: 0 }}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
          ></iframe>
        </div>

        {/* 見学案内 */}
        <div className="mt-12 p-6 sm:p-8 bg-[#172542] text-[#EFE6D5] rounded-sm text-center">
          <h3 className="text-xl sm:text-2xl font-serif mb-3">
            見学・体験のご案内
          </h3>
          <p className="mb-2 leading-relaxed">
            杖道に興味をお持ちの方は、どなたでも見学・体験していただけます。
          </p>
          <p className="mb-6 leading-relaxed">
            お問い合わせは東京都杖道連盟まで
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.tojoren.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#A82222] hover:bg-[#8a1b1b] text-[#EFE6D5] px-8 py-3 rounded-sm transition-colors duration-300"
            >
              東京都杖道連盟公式ホームページへ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}