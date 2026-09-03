'use client';

import { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 選択状態の管理
  const [selectedService, setSelectedService] = useState("");
  const [selectedInquiryType, setSelectedInquiryType] = useState("");
  const [selectedOs, setSelectedOs] = useState("");
  const [selectedBrowser, setSelectedBrowser] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
  };

  // 入力欄の共通クラス（クリーンで柔らかい質感）
  const inputClass = "w-full bg-white/80 border border-slate-200/80 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]";
  // ラジオボタンを囲む枠の共通クラス
  const radioGroupClass = "space-y-1.5 bg-white/50 p-4 rounded-xl border border-slate-200/60 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)]";
  // 動的入力欄のクラス
  const dynamicInputClass = "w-full bg-white/80 border border-slate-200/80 rounded-lg px-3 py-2 text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 shadow-inner mt-2 transition-all";

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 py-12 px-6">
      {/* 背景は暗いネオンのまま */}
      <div className="ambient-bg" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <Link 
          href="/"
          className="inline-flex items-center text-sm text-slate-400 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          トップページへ戻る
        </Link>

        {/* 圧倒的高級感：真っ白ではなく少し透け感のある柔らかいオフホワイト調のグラスカード */}
        <div className="bg-[#f8fafc]/90 backdrop-blur-2xl text-slate-800 rounded-[2rem] p-8 md:p-12 border border-white/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40"></div>
          
          <h1 className="text-3xl font-extrabold mb-2 text-slate-800 tracking-tight">お問い合わせ</h1>
          <p className="text-slate-500 mb-10 pb-8 border-b border-slate-200/60 leading-relaxed">
            Azorbの各種サービスについてのお問い合わせはこちらからお願いいたします。
          </p>

          <form 
            action="#" 
            method="POST" 
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700">
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
              <label className="block text-sm font-medium text-slate-700">
                2. お名前（ご担当者様名） <span className="text-rose-500/90 ml-2 text-xs font-bold">【必須】</span>
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
              <label className="block text-sm font-medium text-slate-700">
                3. メールアドレス <span className="text-rose-500/90 ml-2 text-xs font-bold">【必須】</span>
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
              <label className="block text-sm font-medium text-slate-700">
                4. 対象のサービス <span className="text-rose-500/90 ml-2 text-xs font-bold">【必須】</span>
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
                  <label key={service} className="flex items-center space-x-3 p-2 rounded hover:bg-slate-100 transition-colors cursor-pointer">
                    <input 
                      type="radio" 
                      name="service" 
                      value={service}
                      required
                      checked={selectedService === service}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-4 h-4 text-primary bg-white border-slate-300 focus:ring-primary" 
                    />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </label>
                ))}
                
                {/* その他の場合の記述欄 */}
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
              <label className="block text-sm font-medium text-slate-700">
                5. お問い合わせの種別 <span className="text-rose-500/90 ml-2 text-xs font-bold">【必須】</span>
              </label>
              <div className={radioGroupClass}>
                {[
                  "不具合・エラーのご報告",
                  "ご購入・お支払いに関するご質問",
                  "導入・プロプランに関するご相談",
                  "機能の使い方についてのご質問",
                  "その他"
                ].map((type) => (
                  <label key={type} className="flex items-center space-x-3 p-2 rounded hover:bg-slate-100 transition-colors cursor-pointer">
                    <input 
                      type="radio" 
                      name="inquiry_type" 
                      value={type}
                      required
                      checked={selectedInquiryType === type}
                      onChange={(e) => setSelectedInquiryType(e.target.value)}
                      className="w-4 h-4 text-primary bg-white border-slate-300 focus:ring-primary" 
                    />
                    <span className="text-slate-700 font-medium">{type}</span>
                  </label>
                ))}

                {/* その他の場合の記述欄 */}
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
              <label className="block text-sm font-medium text-slate-700">
                6. ご利用の環境 <span className="text-slate-400 ml-2 text-xs font-normal">【任意】（※不具合の場合はお選びください）</span>
              </label>
              <div className={radioGroupClass}>
                {["Windows", "Mac", "iPhone / iPad", "Android", "その他"].map((env) => (
                  <label key={env} className="flex items-center space-x-3 p-2 rounded hover:bg-slate-100 transition-colors cursor-pointer">
                    <input 
                      type="radio" 
                      name="os" 
                      value={env}
                      checked={selectedOs === env}
                      onChange={(e) => setSelectedOs(e.target.value)}
                      className="w-4 h-4 text-primary bg-white border-slate-300 focus:ring-primary" 
                    />
                    <span className="text-slate-700 font-medium">{env}</span>
                  </label>
                ))}

                {/* その他の場合の記述欄 */}
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
              <label className="block text-sm font-medium text-slate-700">
                7. ご利用のブラウザ <span className="text-slate-400 ml-2 text-xs font-normal">【任意】（※不具合の場合はお選びください）</span>
              </label>
              <div className={radioGroupClass}>
                {["Google Chrome", "Safari", "Microsoft Edge", "Firefox", "その他"].map((browser) => (
                  <label key={browser} className="flex items-center space-x-3 p-2 rounded hover:bg-slate-100 transition-colors cursor-pointer">
                    <input 
                      type="radio" 
                      name="browser" 
                      value={browser}
                      checked={selectedBrowser === browser}
                      onChange={(e) => setSelectedBrowser(e.target.value)}
                      className="w-4 h-4 text-primary bg-white border-slate-300 focus:ring-primary" 
                    />
                    <span className="text-slate-700 font-medium">{browser}</span>
                  </label>
                ))}

                {/* その他の場合の記述欄 */}
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
              <label className="block text-sm font-medium text-slate-700">
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
              <label className="block text-sm font-medium text-slate-700">
                9. 具体的なお問い合わせ内容 <span className="text-rose-500/90 ml-2 text-xs font-bold">【必須】</span>
              </label>
              <textarea 
                name="message" 
                required
                rows={6}
                className={`${inputClass} resize-y`}
                placeholder="【記入例】&#13;&#10;・エラーが起きたタイミング：ファイルをアップロードした瞬間&#13;&#10;・起きた現象：〇〇というエラーメッセージが出た&#13;&#10;※不具合以外の場合はご自由にご記入ください。"
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
              <p className="text-center text-slate-500 text-xs mt-4 font-medium">
                ※現在、送信機能はセットアップ中です。
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
