import Image from "next/image";
import Meta from "../../components/Meta";
import Link from "next/link";

export default function Project() {
  return (
    <>
      <Meta description="Discord welcome bot designed to interact with the users in servers." />
      <div className="py-3">
        <h1 className="text-center text-4xl font-bold text-black dark:text-white">
          Discord Welcome Bot
        </h1>
        <div className="w-10/12 mx-auto m-3 bg-white rounded-2xl shadow-lg p-5 indent-10 max-w-3xl max-sm:w-full max-sm:shadow-none dark:bg-black">
          <Image
            src="/bot_logo.jpg"
            width={150}
            height={100}
            alt="Bot Image"
            className="mx-auto mb-5 rounded-2xl shadow-lg border p-1"
          />
          <p className="m-3 text-black dark:text-white">
            Discord has become extremely popular recently. Because of the
            effects of the pandemic, more and more people felt the need of
            communicating on the Internet. Since Discord already has solid
            instant messaging and voice chatting functionalities, it became one
            of the platforms that have the most online users. Not only does
            Discord provide one-to-one messaging, but it also has guilds
            (servers) that function like group chats. A popular server can
            easily have thousands of users. To better manage the servers,
            Discord has a built-in permission system that assigns different
            privileges to different users, so certain channels will only be
            accessible to the right users. As the Discord community is growing,
            there might be times when users need to gain privileges to access
            certain channels. Since the administrators won&apos;t be online all
            the time, bots seem reasonable to take this job.
          </p>
          <p className="m-3 text-black dark:text-white">
            The Discord bot is one of the most essential components of the
            Discord community. They make Discord more automotive and
            interactive. The bots use the Discord API to engage with the users.
            Since Discord.js is a JavaScript library that wraps the Discord API,
            it can easily be served on any of the cloud servers with the Node.js
            run time.
          </p>
          <Image
            src="/bot_info.png"
            width={600}
            height={500}
            alt="Welcome Bot Info"
            className="mx-auto my-10 rounded-2xl shadow-lg border p-1"
          />
          <p className="m-3 text-black dark:text-white">
            This project was started in the summer of 2021 as one of my side
            projects, and I am still maintaining it during my free time. The bot
            is called Welcome Bot because the original goal was to greet users
            who join the server as well as assign permissions. From observing
            what my friends usually do on Discord, I also found the need to
            incorporate more voice channel interactions. Therefore an on-demand
            music feature is implemented into the Welcome Bot. Any of the users
            in the same voice channel can simply play and listen to the same
            music together. It also has a queueing and looping system so the
            music will never stop.
          </p>
          <p className="m-3 text-black dark:text-white">
            At this time, the Welcome Bot recognizes around 20 commands, and
            there&apos;s still much more to add.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center p-5">
        <Link href={"/project"} className="text-blue-500">
          {"<- Project"}
        </Link>
        <Link href={"/project/personalweb"} className="text-blue-500">
          {"Personal Website ->"}
        </Link>
      </div>
    </>
  );
}
