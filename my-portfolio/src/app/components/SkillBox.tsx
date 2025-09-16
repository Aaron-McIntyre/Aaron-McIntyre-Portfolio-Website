export default function SkillBox({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) {
  return (
    <div className="h-[15vh] w-[20vw] bg-neutral-900 mx-auto flex rounded-4xl shadow-lg">
      <div className=" flex flex-1 justify-center items-center text-center overflow-hidden">
        <img
          src={imageUrl}
          alt={`${title} Logo`}
          className="rounded-full w-[70%] h-[70%]"
        />
      </div>
      <div className="flex flex-1 justify-center items-center text-center overflow-hidden">
        <h2 className=" text-xl text-[var(--text)] font-medium justify-center p-10 mr-10">
          {title}
        </h2>
      </div>
    </div>
  );
}
