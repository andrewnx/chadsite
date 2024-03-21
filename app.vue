<script setup lang="ts">
const title =
  "Chad Scanner 2.0 - DEX pair scanner with precision for real-time insights";
const description =
  "Elevate your trading experience with Solana's premier scanner. Backtested to provide quality coins and projects through extensive custom scanning filters.";

useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: description },
    {
      hid: "keywords",
      name: "keywords",
      content:
        "chad scanner, chadscanner, crypto scanner, solana, solana trading, solana scanner, DEX pairs, DEX trading, real-time insights, crypto trading, cryptocurrency analysis, digital asset scanner, blockchain insights, cryptocurrency market trends, trading signals, technical analysis tools, crypto market analytics, solana projects, DeFi opportunities, yield farming insights, NFT marketplace analysis, blockchain technology, decentralized exchanges, cryptocurrency investments, market cap analysis, tokenomics insights, crypto portfolio management, crypto news and updates, token price tracking, crypto market volatility, smart contract auditing, crypto trading strategies, crypto investment research, altcoins opportunities, token discovery platform, crypto asset evalutation, token price prediction, crypto market monitoring, cryptocurrency scanner tools, price action analysis, historical data analysis, blockchain token research, crypto project evaluation, token price alerts, coin market trends, AI-driven insights, Machine learning algorithms, Data-driven analytics, AI-powered trading, Predictive analytics, Automated trading strategies, AI trading signals, Neural network analysis, Sentiment analysis tools, Natural language processing (NLP), AI-driven market predictions, Algorithmic trading solutions, AI-based investment tools, AI-driven risk assessment, Deep learning models, Intelligent trading platforms, AI-driven decision-making, AI-driven data analysis, Smart trading algorithms, AI-driven investment strategies, AI-powered market research, Automated data analysis, AI-driven portfolio optimization, Cognitive computing solutions, Robotic process automation (RPA), AI-driven price forecasting, AI-driven market monitoring, Automated trading bots, AI-driven risk management, AI-driven investment recommendations, AI-driven trading insights, AI-driven trend analysis, AI-driven market intelligence, discord community, chad scanner discord, telegram group, crypto telegram channel, crypto community, blockchain discord server, DeFi discussion group, NFT telegram chat, crypto signals telegram, trading tips telegram, crypto analysis discord, blockchain news telegram, crypto chat group, crypto investment discord, solana telegram community, cryptocurrency discussions, crypto trading community, blockchain developers discord, AI in crypto, automated trading discord, crypto investment group, crypto trading signals, DeFi projects telegram, blockchain developers community, NFT trading discord, AI-driven trading signals, crypto investment advice, blockchain technology discussions, crypto research group, trading bots discord, cryptocurrency enthusiasts, trading strategies telegram, crypto market insights, blockchain analytics, tokenomics discussions, DeFi opportunities telegram, crypto market intelligence, blockchain technology insights, trading community discord, crypto enthusiasts telegram, NFT market analysis, AI-powered trading strategies, crypto community engagement, blockchain development updates, cryptocurrency signals discord, automated trading signals telegram, crypto education group, blockchain investment opportunities, AI in trading discord, crypto market predictions, blockchain technology trends, crypto trading discussions, NFT investment opportunities, AI-driven market analysis, crypto price alerts telegram, blockchain technology news, trading community engagement, crypto investment insights, blockchain technology solutions, NFT market trends telegram, AI-powered investment strategies, crypto market updates, blockchain research group, cryptocurrency trading tools, automated trading bots discord, crypto project updates, blockchain technology advancements, NFT market insights telegram, AI-driven investment decisions",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Chad Scanner" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: "https://i.imgur.com/RMwqcP6.jpeg" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:image", content: "https://i.imgur.com/RMwqcP6.jpeg" },
    { property: "twitter:title", content: title },
    { property: "twitter:description", content: description },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  ogImage: "https://i.imgur.com/RMwqcP6.jpeg",
  twitterImage: "https://i.imgur.com/RMwqcP6.jpeg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <Header />

  <UMain>
    <NuxtPage />
  </UMain>

  <Footer />
</template>
