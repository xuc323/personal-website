import { Headline, Paragraph } from "@/components/TextUtils";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Welcome Bot Creator: Enhancing Discord with Custom Bot Development",
  description:
    "Discover the journey of a creative developer behind the Welcome Bot, a versatile Discord bot designed to enrich online communities. Explore features like automated greetings, advanced permission management, and a unique shared music experience in voice channels. Join us in the continual evolution of Discord's interactive ecosystem.",
  keywords: [
    "Discord bot development",
    "Welcome Bot",
    "online community engagement",
    "automated server management",
    "custom Discord bots",
    "JavaScript programming",
    "Discord.js",
    "Node.js",
    "community interaction",
    "bot features",
    "API integration",
  ],
};

export default function Project() {
  return (
    <div className="py-3">
      <h1 className="text-center text-4xl font-bold text-black dark:text-white">
        Discord Welcome Bot
      </h1>
      <div className="w-10/12 mx-auto m-3 bg-white rounded-2xl shadow-lg p-5 max-w-3xl max-sm:w-full duration-300 max-sm:shadow-none dark:bg-black">
        <Image
          src="/projects/bot_logo.jpg"
          width={150}
          height={180}
          alt="Bot Image"
          className="mx-auto mb-5 rounded-2xl shadow-lg border p-1"
        />
        <Headline text="The Evolution of Discord: A Hub for Online Communities" />
        <Paragraph text="Discord's ascent as a premier platform for digital communication is a testament to its adaptability and robust features. Initially popular among gamers, its appeal broadened significantly during the pandemic, as people sought reliable online interaction tools. Discord offers more than just text messaging and voice chat; it creates virtual communities through its server or 'guild' system. These servers can become large digital ecosystems, hosting discussions, events, and interactions for thousands of users. To manage these sprawling communities, Discord employs an intricate permission system. This system allows administrators to finely tune access rights, ensuring that sensitive channels remain exclusive to certain users, while public areas are open to all." />
        <Headline text="Revolutionizing Interaction: The Power of Discord Bots" />
        <Paragraph text="Discord bots are not just supplementary tools; they are the lifeblood of many servers, introducing automation and enhanced user experiences. These bots leverage the Discord API for various functionalities, from moderating chats to providing entertainment. The use of Discord.js, an accessible JavaScript library, simplifies bot creation and integration, making it a popular choice among developers. Despite the necessity for a constant connection – a limitation of serverless hosting – bots like mine thrive in cloud-based environments, bringing dynamic and responsive features to Discord communities." />
        <Image
          src="/projects/bot_info.png"
          width={600}
          height={400}
          alt="Welcome Bot Info"
          className="mx-auto my-6 rounded-2xl shadow-lg border p-1"
        />
        <Headline text="Welcome Bot: My Contribution to Discord's Ecosystem" />
        <Paragraph text="The Welcome Bot, my project since the summer of 2021, illustrates the dynamic capabilities of Discord bots. Initially, its primary function was to greet new members and manage server permissions. However, observing the activities and preferences of Discord users, I identified a demand for enhanced voice channel interaction. Thus, I integrated an on-demand music feature, allowing users in a voice channel to collectively control and enjoy a shared playlist. This feature includes advanced options like queuing and looping, ensuring uninterrupted musical enjoyment. Currently, the bot recognizes and executes around 20 commands, ranging from user interaction to server management tasks. My ongoing commitment is to expand its functionalities, exploring areas like AI-driven conversation and customized event notifications, to further enrich the Discord experience." />
      </div>
    </div>
  );
}
