import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen p-8 ">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-8 ">
            Let's bring Ideas to life
          </h1>
          <h2 className="text-2xl font-semibold mb-4">
            Hi, my name is Abdolreza Aqasi
          </h2>
          <p className="text-lg">
          Hi, I'm a passionate full-stack web developer dedicated to crafting seamless and dynamic web experiences. With expertise in both front-end and back-end technologies, I specialize in turning innovative ideas into functional, user-friendly applications. Let's collaborate to bring your vision to life through clean code, creative design, and cutting-edge technology.
          </p>
        </div>
        {/* Video Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Quick Tour</h2>
          <video controls className="w-full rounded-lg shadow-lg">
            <source src="/tour-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
