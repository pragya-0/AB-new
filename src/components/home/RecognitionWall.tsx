import { motion } from "framer-motion";

const featuredCard = {
  source: "TEDx",
  title: "Ideas, Innovation & Impact Recognized Worldwide",
  text: "A keynote presence built around technology, entrepreneurship, innovation and the future of global business.",
  image: "/assets/press/2019/tedx.jpg",
  type: "video",
};

const premiumCards = [
  {
    source: "The Economic Times",
    title: "Driving Innovation & Entrepreneurial Growth",
    image: "/assets/press/Arijit-Bhattacharyya-ECONOMICS.jpg",
    type: "newspaper",
  },
  {
    source: "Times of India",
    title: "Startups, Innovation & Future Growth",
    image: "/assets/press/2024/timesofindia-B.jpg",
    type: "newspaper",
  },
];

const proofCards = [
  {
    source: "Hindustan Times",
    title: "Startup & Entrepreneurship Coverage",
    image: "/assets/press/hindustan-times-startup.jpg",
    type: "newspaper",
  },
  {
    source: "TV9 Bangla",
    title: "Technology, Leadership & Innovation",
    image: "/assets/press/2022/TV9.jpg",
    type: "video",
  },
  {
    source: "DD Bangla",
    title: "Technology, Innovation & Public Conversation",
    image: "/assets/press/2019/DD-Bangla.jpg",
    type: "video",
  },
  {
    source: "Diplomatic World",
    title: "Global Business Matchmaking",
    image: "/assets/press/2021/diplomatic-world-two.jpg",
    type: "document",
  },
  {
    source: "China Blockchain",
    title: "International Technology & Blockchain Forum",
    image: "/assets/press/2020/China-blockchain.jpg",
    type: "video",
  },
  {
    source: "Josh Talks",
    title: "Ideas, Leadership & Entrepreneurial Journey",
    image: "/assets/press/Joshtalks.jpeg",
    type: "video",
  },
  {
    source: "ABP Bangla",
    title: "Regional Recognition & Public Platform Presence",
    image: "/assets/press/ABP_Arijit.jpg",
    type: "photo",
  },
  {
    source: "Anandabazar",
    title: "Bengali Press Coverage & Public Recognition",
    image: "/assets/press/2024/anandabazar-B.jpg",
    type: "newspaper",
  },
];

function imageClass(type?: string) {
  if (type === "newspaper") return "object-contain object-center bg-[#111] p-3";
  if (type === "document") return "object-contain object-center bg-white p-4";
  return "object-cover object-center";
}

function ProofCard({
  card,
  height = "min-h-[320px]",
}: {
  card: {
    source: string;
    title: string;
    text?: string;
    image: string;
    type?: string;
  };
  height?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`group relative ${height} overflow-hidden rounded-[26px] border border-white/10 bg-[#0a0a0a] shadow-[0_24px_80px_rgba(0,0,0,0.45)]`}
    >
      <img
        src={card.image}
        alt={card.source}
        className={`absolute inset-0 h-full w-full transition duration-700 group-hover:scale-[1.035] ${imageClass(
          card.type
        )}`}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/76 via-black/24 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/74 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end p-7">
        <p className="mb-3 text-[26px] font-black leading-none tracking-[-0.05em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] md:text-[38px]">
          {card.source}
        </p>

        <h3 className="max-w-[520px] text-[18px] font-bold leading-snug text-white/88 drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] md:text-[21px]">
          {card.title}
        </h3>

        {card.text && (
          <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-white/72">
            {card.text}
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default function RecognitionWall() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.16),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-12 text-center">
          <p className="mb-5 text-[11px] font-black uppercase tracking-[0.42em] text-[#58a0ff]">
            Featured Recognition Wall
          </p>

          <h2 className="mx-auto max-w-[980px] text-[46px] font-black leading-[0.9] tracking-[-0.07em] text-white md:text-[82px]">
            Media, recognition and public authority.
          </h2>
        </div>

        <div className="mb-8 grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
          <ProofCard card={featuredCard} height="min-h-[500px]" />

          <div className="grid gap-7">
            {premiumCards.map((card) => (
              <ProofCard key={card.source} card={card} height="min-h-[236px]" />
            ))}
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {proofCards.map((card) => (
            <ProofCard key={card.source} card={card} height="min-h-[300px]" />
          ))}
        </div>
      </div>
    </section>
  );
}