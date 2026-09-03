'use client';

import { useState } from 'react';
import { ArrowLeft, Send, Code } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [selectedService, setSelectedService] = useState("");
  const [selectedInquiryType, setSelectedInquiryType] = useState("");
  const [selectedOs, setSelectedOs] = useState("");
  const [selectedBrowser, setSelectedBrowser] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
  };

  const inputClass = "w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm";
  const radioGroupClass = "space-y-1.5 p-1";
  const dynamicInputClass = "w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mt-2 transition-all shadow-sm";

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      
      {/* Azorb本体サイト共通ヘッダー（完全再現） */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="relative mx-auto flex h-14 max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a 
            href="https://azorb-site.vercel.app/" 
            className="group flex items-center gap-2.5 rounded-xl px-2 py-1.5 -ml-2 transition-all hover:bg-slate-100 active:scale-95 z-50"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#14b8a6] text-white shadow-sm">
              <Code className="h-4 w-4" />
            </div>
            <span className="text-sm font-bold tracking-widest text-slate-900 uppercase">
              Azorb
            </span>
          </a>
          
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium text-slate-500">
            <a href="https://azorb-site.vercel.app/#products" className="hover:text-slate-900 transition-colors font-bold tracking-wide">
              Products
            </a>
            <a href="https://azorb-site.vercel.app/#focus" className="hover:text-slate-900 transition-colors font-bold tracking-wide">
              Focus Areas
            </a>
          </nav>
        </div>
      </header>

      {/* ページコンテンツ */}
      <div className="py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          
          {/* 戻るボタン（配置・スタイルを特商法ページと統一） */}
          <a 
            href="https://azorb-site.vercel.app/"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Azorb トップへ
          </a>

          {/* フォームカード */}
          <div className="bg-white text-slate-800 rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-slate-900">お問い合わせ</h1>
            <p className="text-slate-600 mb-10 pb-8 border-b border-slate-100 text-sm md:text-base">
              Azorbの各種サービスについてのお問い合わせはこちらからお願いいたします。
            </p>

            <form 
              action="#" 
              method="POST" 
              onSubmit={handleSubmit}
              className="space-y-10"
            >
              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-900">
                  1. 会社名 <span className="text-slate-400 ml-2 text-xs font-normal">【任意】（個人のお客様は空欄可）</span>
                </label>
                <input 
                  type="text" 
                  name="company" 
                  className={inputClass}
                  placeholder="株式会社Azorb"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-900">
                  2. お名前（ご担当者様名） <span className="text-rose-500 ml-2 text-xs font-bold">【必須】</span>
                </label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  className={inputClass}
                  placeholder="山田 太郎"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-900">
                  3. メールアドレス <span className="text-rose-500 ml-2 text-xs font-bold">【必須】</span>
                </label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  className={inputClass}
                  placeholder="info@azorb.co"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-900">
                  4. 対象のサービス <span className="text-rose-500 ml-2 text-xs font-bold">【必須】</span>
                </label>
                <div className={radioGroupClass}>
                  {[
                    "住所データ自動整形ツール",
                    "SaaS向け UIボイラープレート",
                    "寿命カウントダウンタイマー",
                    "自分専用 広告なし地元ニュースサイト",
                    "万能オートキャプチャ＆AI抽出・翻訳",
                    "その他"
                  ].map((service) => (
                    <label key={service} className="flex items-center space-x-3 p-2 rounded hover:bg-slate-50 transition-colors cursor-pointer">
                      <input 
                        type="radio" 
                        name="service" 
                        value={service}
                        required
                        checked={selectedService === service}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-4 h-4 text-blue-600 bg-white border-slate-300 focus:ring-blue-500" 
                      />
                      <span className="text-slate-700">{service}</span>
                    </label>
                  ))}
                  
                  {selectedService === "その他" && (
                    <div className="pl-9 pr-2 pb-2 pt-1 transition-all duration-200">
                      <input 
                        type="text" 
                        name="service_other" 
                        required
                        placeholder="サービス名をご記入ください"
                        className={dynamicInputClass}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-900">
                  5. お問い合わせの種別 <span className="text-rose-500 ml-2 text-xs font-bold">【必須】</span>
                </label>
                <div className={radioGroupClass}>
                  {[
                    "不具合・エラーのご報告",
                    "ご購入・お支払いに関するご質問",
                    "導入・プロプランに関するご相談",
                    "機能の使い方についてのご質問",
                    "その他"
                  ].map((type) => (
                    <label key={type} className="flex items-center space-x-3 p-2 rounded hover:bg-slate-50 transition-colors cursor-pointer">
                      <input 
                        type="radio" 
                        name="inquiry_type" 
                        value={type}
                        required
                        checked={selectedInquiryType === type}
                        onChange={(e) => setSelectedInquiryType(e.target.value)}
                        className="w-4 h-4 text-blue-600 bg-white border-slate-300 focus:ring-blue-500" 
                      />
                      <span className="text-slate-700">{type}</span>
                    </label>
                  ))}

                  {selectedInquiryType === "その他" && (
                    <div className="pl-9 pr-2 pb-2 pt-1 transition-all duration-200">
                      <input 
                        type="text" 
                        name="inquiry_type_other" 
                        required
                        placeholder="お問い合わせ種別をご記入ください"
                        className={dynamicInputClass}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-900">
                  6. ご利用の環境 <span className="text-slate-400 ml-2 text-xs font-normal">【任意】（※不具合の場合はお選びください）</span>
                </label>
                <div className={radioGroupClass}>
                  {["Windows", "Mac", "iPhone / iPad", "Android", "その他"].map((env) => (
                    <label key={env} className="flex items-center space-x-3 p-2 rounded hover:bg-slate-50 transition-colors cursor-pointer">
                      <input 
                        type="radio" 
                        name="os" 
                        value={env}
                        checked={selectedOs === env}
                        onChange={(e) => setSelectedOs(e.target.value)}
                        className="w-4 h-4 text-blue-600 bg-white border-slate-300 focus:ring-blue-500" 
                      />
                      <span className="text-slate-700">{env}</span>
                    </label>
                  ))}

                  {selectedOs === "その他" && (
                    <div className="pl-9 pr-2 pb-2 pt-1 transition-all duration-200">
                      <input 
                        type="text" 
                        name="os_other"
                        placeholder="ご利用のOS等をご記入ください"
                        className={dynamicInputClass}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-900">
                  7. ご利用のブラウザ <span className="text-slate-400 ml-2 text-xs font-normal">【任意】（※不具合の場合はお選びください）</span>
                </label>
                <div className={radioGroupClass}>
                  {["Google Chrome", "Safari", "Microsoft Edge", "Firefox", "その他"].map((browser) => (
                    <label key={browser} className="flex items-center space-x-3 p-2 rounded hover:bg-slate-50 transition-colors cursor-pointer">
                      <input 
                        type="radio" 
                        name="browser" 
                        value={browser}
                        checked={selectedBrowser === browser}
                        onChange={(e) => setSelectedBrowser(e.target.value)}
                        className="w-4 h-4 text-blue-600 bg-white border-slate-300 focus:ring-blue-500" 
                      />
                      <span className="text-slate-700">{browser}</span>
                    </label>
                  ))}

                  {selectedBrowser === "その他" && (
                    <div className="pl-9 pr-2 pb-2 pt-1 transition-all duration-200">
                      <input 
                        type="text" 
                        name="browser_other"
                        placeholder="ご利用のブラウザをご記入ください"
                        className={dynamicInputClass}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-900">
                  8. ご購入時のメールアドレス <span className="text-slate-400 ml-2 text-xs font-normal">【任意】（※既にツールをご購入済みの方）</span>
                </label>
                <input 
                  type="email" 
                  name="purchase_email" 
                  className={inputClass}
                  placeholder="購入時に使用したメールアドレス"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-900">
                  9. 具体的なお問い合わせ内容 <span className="text-rose-500 ml-2 text-xs font-bold">【必須】</span>
                </label>
                <textarea 
                  name="message" 
                  required
                  rows={6}
                  className={`${inputClass} resize-y`}
                  placeholder="【記入例】&#13;&#10;・エラーが起きたタイミング：ファイルをアップロードした瞬間&#13;&#10;・起きた現象：〇〇というエラーメッセージが出た&#13;&#10;※不具合以外の場合はご自由にご記入ください。"
                ></textarea>
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "送信準備中..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      送信する
                    </>
                  )}
                </button>
                <p className="text-center text-slate-500 text-xs mt-4">
                  ※現在、送信機能はセットアップ中です。
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
