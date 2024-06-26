import React from 'react';
import profileImage from '../data/IMG_0966.jpg';

import './home.scss';

export const Home: React.FC = () => {
  return (
    <main>
        <img src={profileImage} alt="プロフィール画像" className='rounded-image' />
        <h1>Shogo</h1>
        <p className='welcome-statement'>プロフィールサイトに来ていただき、ありがとうございます！！</p>
        <h3 className='title'>私について</h3>
        <p className='title__content'>
            社会人2年目でIT企業に勤務しております。<br />
            年齢は23歳で、趣味はプロ野球観戦、プログラミングです。<br />
            野球については高校時代、全国的に有名な学校で甲子園を目指しておりました。<br />
            プロ野球選手、メジャーリーガーになるという夢は叶わず、大学時代は学業に専念してました。<br />
            大学3年次にプログラミングに興味を持ち、勉強を始めました。<br />
            就職活動はシステムの開発職を志望し、今の会社に入社をしましたが、
            配属当初は開発チームにアサインされませんでした。<br />
            最近は、開発チームに加わりシステムの開発に従事しています。<br />
            システム開発の上流から下流、フロントエンドからバックエンドまで幅広く経験し、<br />
            将来的に技術のなんでも屋の様な存在になりたいです。
        </p>
        <h3 className='title'>スキル</h3>
        <p className='title__content'>
            業務でxmlを使い、医療機関向けの患者レポートのUI開発を行っております。
        </p>
        <h3 className='title__sub'>実務経験があるもの</h3>
        <p className='title__content'>
            xml / SQL
        </p>
        <h3 className='title__sub'>趣味で触れたことのある技術</h3>
        <p className='title__content'>
            HTML / CSS / JavaScript / Java / PHP / Python / SQL / React.js / TypeScript / Laravel
        </p>
        <h3 className='title__sub'>保有資格</h3>
        <p className='title__content'>
            基本情報技術者 / Oracle Database SQL / Java SE Bronze / ITパスポート/ TOEIC810
        </p>
    </main>
  );
}