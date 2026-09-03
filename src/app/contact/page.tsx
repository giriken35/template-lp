'use client';

import { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 py-12 px-6">
      <div className="ambient-bg" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <Link 
          href="/"
          className="inline-flex items-center text-sm text-slate-400 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          トップページへ戻る
        </Link>

        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
          
          <h1 className="text-3xl font-bold mb-2">お問い合わせ</h1>
          <p className="text-slate-400 mb-8 pb-8 border-b border-white/10">
            Azorbの各種サービスについてのお問い合わせはこちらからお願いいたします。
          </p>

          <form 
            action="#" 
            method="POST" 
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-300">
                1. 会社名 <span className="text-slate-500 ml-2 text-xs">【任意】（個人のお客様は空欄可）</span>
              </label>
              <input 
                type="text" 
                name="company" 
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                placeholder="株式会社Azorb"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-300">
                2. お名前（ご担当者様名） <span className="text-red-400 ml-2 text-xs font-bold">【必須】</span>
              </label>
              <input 
                type="text" 
                name="name" 
                required
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                placeholder="山田 太郎"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-300">
                3. メールアドレス <span className="text-red-400 ml-2 text-xs font-bold">【必須】</span>
              </label>
              <input 
                type="email" 
                name="email" 
                required
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                placeholder="info@azorb.co"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-300">
                4. 対象のサービス <span className="text-red-400 ml-2 text-xs font-bold">【必須】</span>
              </label>
              <div className="space-y-2 bg-slate-900/30 p-4 rounded-xl border border-white/5">
                {[
                  "住所データ自動整形ツール",
                  "SaaS向け UIボイラープレート",
                  "寿命カウントダウンタイマー",
                  "自分専用 広告なし地元ニュースサイト",
                  "万能オートキャプチャ＆AI抽出・翻訳",
                  "その他（Azorb全体について）"
                ].map((service) => (
                  <label key={service} className="flex items-center space-x-3 p-2 rounded hover:bg-white/5 transition-colors cursor-pointer">
                    <input 
                      type="radio" 
                      name="service" 
                      value={service}
                      required
                      className="w-4 h-4 text-primary bg-slate-900 border-white/20 focus:ring-primary/50 focus:ring-offset-slate-900" 
                    />
                    <span className="text-slate-300">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-300">
                5. お問い合わせの種別 <span className="text-red-400 ml-2 text-xs font-bold">【必須】</span>
              </label>
              <div className="space-y-2 bg-slate-900/30 p-4 rounded-xl border border-white/5">
                {[
                  "不具合・エラーのご報告",
                  "ご購入・お支払いに関するご質問",
                  "導入・プロプランに関するご相談",
                  "機能の使い方についてのご質問",
                  "その他"
                ].map((type) => (
                  <label key={type} className="flex items-center space-x-3 p-2 rounded hover:bg-white/5 transition-colors cursor-pointer">
                    <input 
                      type="radio" 
                      name="inquiry_type" 
                      value={type}
                      required
                      className="w-4 h-4 text-primary bg-slate-900 border-white/20 focus:ring-primary/50 focus:ring-offset-slate-900" 
                    />
                    <span className="text-slate-300">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-300">
                6. ご利用の環境 <span className="text-slate-500 ml-2 text-xs">【任意】（※不具合の場合はお選びください）</span>
              </label>
              <div className="space-y-2 bg-slate-900/30 p-4 rounded-xl border border-white/5">
                {["Windows", "Mac", "iPhone / iPad", "Android"].map((env) => (
                  <label key={env} className="flex items-center space-x-3 p-2 rounded hover:bg-white/5 transition-colors cursor-pointer">
                    <input 
                      type="radio" 
                      name="os" 
                      value={env}
                      className="w-4 h-4 text-primary bg-slate-900 border-white/20 focus:ring-primary/50 focus:ring-offset-slate-900" 
                    />
                    <span className="text-slate-300">{env}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-300">
                7. ご利用のブラウザ <span className="text-slate-500 ml-2 text-xs">【任意】（※不具合の場合はお選びください）</span>
              </label>
              <div className="space-y-2 bg-slate-900/30 p-4 rounded-xl border border-white/5">
                {["Google Chrome", "Safari", "Microsoft Edge", "Firefox", "その他"].map((browser) => (
                  <label key={browser} className="flex items-center space-x-3 p-2 rounded hover:bg-white/5 transition-colors cursor-pointer">
                    <input 
                      type="radio" 
                      name="browser" 
                      value={browser}
                      className="w-4 h-4 text-primary bg-slate-900 border-white/20 focus:ring-primary/50 focus:ring-offset-slate-900" 
                    />
                    <span className="text-slate-300">{browser}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-300">
                8. ご購入時のメールアドレス <span className="text-slate-500 ml-2 text-xs">【任意】（※既にツールをご購入済みの方）</span>
              </label>
              <input 
                type="email" 
                name="purchase_email" 
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                placeholder="購入時に使用したメールアドレス"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-300">
                9. 具体的なお問い合わせ内容 <span className="text-red-400 ml-2 text-xs font-bold">【必須】</span>
              </label>
              <textarea 
                name="message" 
                required
                rows={6}
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-y"
                placeholder="【記入例】&#13;&#10;・エラーが起きたタイミング：ファイルをアップロードした瞬間&#13;&#10;・起きた現象：〇〇というエラーメッセージが出た&#13;&#10;※不具合以外の場合はご自由にご記入ください。"
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
  );
}
